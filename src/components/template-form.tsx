'use client';
// Интерактивная форма: поля строятся из FieldDef[] шаблона (ТЗ: минимальное число кликов).
// Язык интерфейса — любой из 21 локалей (влияет только на подписи);
// образцы значений — на языке ДОКУМЕНТА (placeholderDoc).
import { useEffect, useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, AlertTriangle, Info, ShieldCheck, Languages, Ruler } from 'lucide-react';
import type { TemplateDTO } from '@/lib/types';
import { uiFor, tplTitle, tplDesc, fieldLabel, fieldHint, type Locale } from '@/lib/i18n';
import { docLangNative } from '@/lib/doclangs';
import { standardOfTemplate } from '@/lib/generate';
import { registerBackHandler } from '@/lib/native';

interface Props {
  template: TemplateDTO;
  lang: Locale;
  onBack: () => void;
  onNext: (data: Record<string, string>) => void;
}

export function TemplateForm({ template, lang, onBack, onNext }: Props) {
  const t = uiFor(lang);
  const [data, setData] = useState<Record<string, string>>({});
  const [showErrors, setShowErrors] = useState(false);

  // системный «Назад» на форме = возврат к каталогу
  useEffect(() => registerBackHandler(() => { onBack(); return true; }), [onBack]);

  const missing = useMemo(
    () => template.fields.filter((f) => f.required && !(data[f.id] ?? '').trim()).map((f) => f.id),
    [template.fields, data]
  );

  const submit = () => {
    if (missing.length > 0) {
      setShowErrors(true);
      return;
    }
    onNext(data);
  };

  const label = (f: (typeof template.fields)[number]) => fieldLabel(f, lang);
  const hint = (f: (typeof template.fields)[number]) => fieldHint(f, lang);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-10">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mt-4 min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden /> {t.backToCatalog}
      </button>

      <h2 className="text-xl sm:text-2xl font-bold mt-2">{tplTitle(template, lang)}</h2>
      <p className="text-muted-foreground text-sm mt-1">{tplDesc(template, lang)}</p>
      {template.lang !== lang && (
        <div className="mt-3 inline-flex items-start gap-2 text-xs bg-sky-50 text-sky-900 border border-sky-200 rounded-lg px-3 py-2">
          <Languages className="w-3.5 h-3.5 mt-0.5 shrink-0 text-sky-700" aria-hidden />
          <span>{t.docLangNotice.replace('{lang}', docLangNative(template.lang))}</span>
        </div>
      )}
      {(lang === 'ru' ? template.refRu : template.refEn) && (
        <p className="mt-2 inline-flex items-start gap-1.5 text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2">
          <ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0 text-teal-700" aria-hidden />
          <span><b>{t.legalBasis}:</b> {lang === 'ru' ? template.refRu : template.refEn}</span>
        </p>
      )}
      {(() => {
        const std = standardOfTemplate(template);
        const name = lang === 'ru' ? std.nameRu : std.nameEn;
        const desc = lang === 'ru' ? std.descRu : std.descEn;
        return (
          <p className="mt-2 inline-flex items-start gap-1.5 text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2" title={desc}>
            <Ruler className="w-3.5 h-3.5 mt-0.5 shrink-0 text-indigo-700" aria-hidden />
            <span><b>{t.docStandard}:</b> {name}</span>
          </p>
        );
      })()}

      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mt-6 mb-3">{t.formTitle}</h3>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {template.fields.map((f) => {
              const lbl = label(f);
              // Значение попадает в документ → образец на языке документа (приоритет)
              const placeholder = f.placeholderDoc ?? (lang === 'en' ? f.placeholderEn : f.placeholderRu) ?? '';
              const hnt = hint(f);
              const value = data[f.id] ?? '';
              const invalid = showErrors && f.required && !value.trim();
              return (
                <div key={f.id} className={f.half ? '' : 'sm:col-span-2'}>
                  <Label htmlFor={f.id} className="text-sm mb-1.5">
                    {lbl}
                    {f.required && <span className="text-red-600 ml-1">*</span>}
                  </Label>
                  {f.type === 'textarea' ? (
                    <Textarea
                      id={f.id}
                      value={value}
                      onChange={(e) => setData({ ...data, [f.id]: e.target.value })}
                      placeholder={placeholder}
                      rows={3}
                      className={invalid ? 'border-red-500' : ''}
                    />
                  ) : f.type === 'select' ? (
                    <Select value={value} onValueChange={(v) => setData({ ...data, [f.id]: v })}>
                      <SelectTrigger id={f.id} className={invalid ? 'border-red-500' : ''} aria-label={lbl}>
                        <SelectValue placeholder={placeholder || '—'} />
                      </SelectTrigger>
                      <SelectContent>
                        {(f.options ?? []).map((opt) => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      id={f.id}
                      type={f.type === 'number' ? 'number' : f.type === 'date' ? 'date' : 'text'}
                      value={value}
                      onChange={(e) => setData({ ...data, [f.id]: e.target.value })}
                      placeholder={placeholder}
                      className={invalid ? 'border-red-500' : ''}
                    />
                  )}
                  {hnt && <p className="text-xs text-muted-foreground mt-1 flex items-start gap-1"><Info className="w-3 h-3 mt-0.5 shrink-0" aria-hidden />{hnt}</p>}
                  {invalid && <p className="text-xs text-red-600 mt-1">{t.required}</p>}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {showErrors && missing.length > 0 && (
        <Alert variant="destructive" className="mt-4">
          <AlertTriangle className="w-4 h-4" aria-hidden />
          <AlertDescription>{t.requiredError}</AlertDescription>
        </Alert>
      )}

      <div className="mt-5 flex justify-end">
        <Button onClick={submit} className="min-h-[44px] px-8 text-base">{t.generate}</Button>
      </div>
    </div>
  );
}
