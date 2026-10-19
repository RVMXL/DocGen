'use client';
// Предпросмотр документа + экспорт .docx/.pdf + прямая печать (ТЗ: форматы и печать)
// Даты и подстановки — на языке ДОКУМЕНТА (template.lang), интерфейс — отдельно.
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Download, FileText, Printer, Loader2, Languages } from 'lucide-react';
import { toast } from 'sonner';
import type { DocBlock, FieldDef, TemplateDTO } from '@/lib/types';
import { fmtDateISO, fmtToday, cleanupPunct, type DocLang } from '@/lib/docgen/interpolate';
import { UI } from '@/lib/i18n';
import { docLangNative, docLangDiffers } from '@/lib/doclangs';

interface Props {
  template: TemplateDTO;
  lang: 'ru' | 'en';
  data: Record<string, string>;
  onBack: () => void;
}

// Предпросмотр: блоки → вёрстка «как на бумаге» (Times-подобный шрифт)
function RenderBlock({ block }: { block: DocBlock }) {
  switch (block.type) {
    case 'lines':
      return (
        <div className={`mb-2 ${block.align === 'right' ? 'text-right' : block.align === 'center' ? 'text-center' : ''}`}>
          {block.items.map((l, i) => (
            <p key={i} className="leading-relaxed">{l}</p>
          ))}
        </div>
      );
    case 'title':
      return <p className="text-center font-bold my-4 tracking-wide">{block.text}</p>;
    case 'subtitle':
      return <p className="text-center mb-4">{block.text}</p>;
    case 'paragraph':
      return (
        <p className={`my-2 leading-relaxed ${block.justify ? 'text-justify' : ''} ${block.noIndent ? '' : 'indent-10'}`}>
          {block.text}
        </p>
      );
    case 'list':
      return (
        <div className="my-2">
          {block.items.map((item, i) => (
            <p key={i} className="leading-relaxed indent-10 text-justify">{block.numbered ? `${i + 1}. ` : '— '}{item}</p>
          ))}
        </div>
      );
    case 'attachment':
      return (
        <div className="my-4">
          <p>{block.label ?? 'Приложение:'}</p>
          {block.items.map((item, i) => (
            <p key={i} className="leading-relaxed pl-10">{i + 1}. {item}</p>
          ))}
        </div>
      );
    case 'signature':
      return (
        <div className="flex justify-between items-end mt-8">
          <span>{block.leftText}</span>
          <span>{block.rightText}</span>
        </div>
      );
    default:
      return null;
  }
}

export function DocPreview({ template, lang, data, onBack }: Props) {
  const t = UI[lang];
  const [busy, setBusy] = useState<'docx' | 'pdf' | null>(null);
  const docLang = (template.lang ?? 'ru') as DocLang;

  const blocks = useMemo<DocBlock[]>(() => {
    const raw = JSON.parse(JSON.stringify(template.body ?? [])) as DocBlock[];
    const fields = template.fields as FieldDef[];
    const dateStr = fmtToday(docLang);
    const fill = (s: string) =>
      cleanupPunct(s.replace(/\{\{(\w+)\}\}/g, (_m, key: string) => {
        if (key === 'date_today') return dateStr;
        const fdef = fields.find((f) => f.id === key);
        let v = (data[key] ?? '').trim();
        if (v && fdef?.type === 'date') v = fmtDateISO(v, docLang);
        return v || '________________';
      }));
    return raw.map((b) => {
      switch (b.type) {
        case 'lines': return { ...b, items: b.items.map(fill) };
        case 'title': return { ...b, text: fill(b.text) };
        case 'subtitle': return { ...b, text: fill(b.text) };
        case 'paragraph': return { ...b, text: fill(b.text) };
        case 'list': return { ...b, items: b.items.map(fill) };
        case 'attachment': return { ...b, items: b.items.map(fill) };
        case 'signature':
          return { ...b, leftText: fill(b.leftText ?? '{{date_today}}'), rightText: fill(b.rightText ?? '________________') };
        default: return b;
      }
    });
  }, [template.body, template.fields, data, docLang]);

  const download = async (format: 'docx' | 'pdf') => {
    setBusy(format);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId: template.id, locale: lang, format, data }),
      });
      if (!res.ok) throw new Error('failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const stamp = new Date().toISOString().slice(0, 10);
      const base = (lang === 'en' ? template.titleEn : template.titleRu).replace(/[^\p{L}\p{N} ]/gu, '').replace(/\s+/g, '_').slice(0, 60);
      a.download = `${base}_${stamp}.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success(format === 'docx' ? 'DOCX' : 'PDF');
    } catch {
      toast.error(t.downloadError);
    } finally {
      setBusy(null);
    }
  };

  const print = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-10">
      <div className="no-print">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mt-4 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden /> {t.backToForm}
        </button>
        <h2 className="text-xl sm:text-2xl font-bold mt-2">{t.previewTitle}</h2>
        {docLangDiffers(docLang, lang) && (
          <p className="mt-1.5 inline-flex items-start gap-1.5 text-xs text-sky-900 bg-sky-50 border border-sky-200 rounded-lg px-3 py-2">
            <Languages className="w-3.5 h-3.5 mt-0.5 shrink-0 text-sky-700" aria-hidden />
            <span>{t.docLangNotice.replace('{lang}', docLangNative(docLang))}</span>
          </p>
        )}
      </div>

      <Card className="no-print mt-4 mb-5">
        <CardContent className="p-3 sm:p-4 flex flex-wrap gap-2">
          <Button onClick={() => download('docx')} disabled={busy !== null} className="min-h-[44px] flex-1 sm:flex-none">
            {busy === 'docx' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden /> : <Download className="w-4 h-4 mr-2" aria-hidden />}
            {busy === 'docx' ? t.downloading : t.downloadDocx}
          </Button>
          <Button onClick={() => download('pdf')} disabled={busy !== null} variant="secondary" className="min-h-[44px] flex-1 sm:flex-none">
            {busy === 'pdf' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden /> : <FileText className="w-4 h-4 mr-2" aria-hidden />}
            {busy === 'pdf' ? t.downloading : t.downloadPdf}
          </Button>
          <Button onClick={print} variant="outline" className="min-h-[44px] flex-1 sm:flex-none">
            <Printer className="w-4 h-4 mr-2" aria-hidden /> {t.print}
          </Button>
        </CardContent>
      </Card>

      {/* Лист A4 — печатается только он (@media print) */}
      <div
        className="doc-paper bg-white border shadow-sm rounded-lg mx-auto p-6 sm:p-12 text-[13.5px] leading-relaxed"
        style={{ fontFamily: "'Liberation Serif', 'Times New Roman', serif", maxWidth: '210mm' }}
        aria-label={t.previewTitle}
      >
        {blocks.map((b, i) => <RenderBlock key={i} block={b} />)}
      </div>
    </div>
  );
}
