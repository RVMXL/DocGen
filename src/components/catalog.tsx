'use client';
// Каталог: большие группы → подгруппы → документы. Поиск по всем шаблонам.
import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Briefcase, Scale, HeartPulse, GraduationCap, Mail, Building2, Files, FileText,
  Search, ArrowLeft, ChevronRight, PenLine, Globe, FileSignature, Languages,
} from 'lucide-react';
import type { CatalogResponse, GroupDTO, TemplateDTO } from '@/lib/types';
import { UI } from '@/lib/i18n';
import { docLangNative } from '@/lib/doclangs';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase, Scale, HeartPulse, GraduationCap, Mail, Building2, Files, FileText,
};

interface Props {
  catalog: CatalogResponse;
  lang: 'ru' | 'en';
  onOpenTemplate: (tpl: TemplateDTO) => void;
  onBack: () => void;
}

export function Catalog({ catalog, lang, onOpenTemplate, onBack }: Props) {
  const t = UI[lang];
  const [activeGroup, setActiveGroup] = useState<GroupDTO | null>(null);
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return null;
    const out: { tpl: TemplateDTO; groupTitle: string }[] = [];
    for (const g of catalog.groups) {
      for (const sg of g.subgroups) {
        for (const tpl of sg.templates) {
          const title = lang === 'en' ? tpl.titleEn : tpl.titleRu;
          if (title.toLowerCase().includes(q) || (lang === 'en' ? tpl.descEn : tpl.descRu).toLowerCase().includes(q)) {
            out.push({ tpl, groupTitle: lang === 'en' ? g.titleEn : g.titleRu });
          }
        }
      }
    }
    return out;
  }, [query, catalog, lang]);

  const totalDocs = catalog.groups.reduce(
    (acc, g) => acc + g.subgroups.reduce((a, s) => a + s.templates.length, 0), 0
  );

  if (activeGroup) {
    const Icon = ICONS[activeGroup.icon] ?? FileText;
    return (
      <div className="w-full max-w-3xl mx-auto px-4">
        <button
          type="button"
          onClick={() => setActiveGroup(null)}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mt-4 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden /> {t.allGroups}
        </button>
        <div className="flex items-center gap-3 mt-2 mb-5">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-teal-600 text-white shrink-0">
            <Icon className="w-5 h-5" aria-hidden />
          </span>
          <h2 className="text-xl sm:text-2xl font-bold">{lang === 'en' ? activeGroup.titleEn : activeGroup.titleRu}</h2>
        </div>

        <div className="space-y-5 pb-8">
          {activeGroup.subgroups.map((sg) => (
            <section key={sg.id} aria-label={lang === 'en' ? sg.titleEn : sg.titleRu}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {lang === 'en' ? sg.titleEn : sg.titleRu}
              </h3>
              <div className="rounded-xl border bg-card divide-y overflow-hidden">
                {sg.templates.length === 0 && (
                  <p className="p-4 text-sm text-muted-foreground">{t.noTemplates}</p>
                )}
                {sg.templates.map((tpl) => (
                  <TemplateRow key={tpl.id} tpl={tpl} lang={lang} onOpen={() => onOpenTemplate(tpl)} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="text-xl sm:text-2xl font-bold mt-4">{t.catalogTitle}</h2>
      <p className="text-muted-foreground text-sm mt-1 mb-4">
        {t.catalogSub} · {catalog.country.flag} {lang === 'en' ? catalog.country.nameEn : catalog.country.nameRu} · {totalDocs} {t.documentsCount}
      </p>

      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="pl-9 h-11"
          aria-label={t.searchPlaceholder}
        />
      </div>

      {searchResults ? (
        <div className="rounded-xl border bg-card divide-y overflow-hidden">
          {searchResults.length === 0 && <p className="p-4 text-sm text-muted-foreground">{t.searchNothing}</p>}
          {searchResults.map(({ tpl, groupTitle }) => (
            <TemplateRow key={tpl.id} tpl={tpl} lang={lang} onOpen={() => onOpenTemplate(tpl)} subtitle={groupTitle} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-8">
          {catalog.groups.map((g) => {
            const Icon = ICONS[g.icon] ?? FileText;
            const count = g.subgroups.reduce((a, s) => a + s.templates.length, 0);
            return (
              <button key={g.id} type="button" onClick={() => setActiveGroup(g)} className="text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-xl">
                <Card className="h-full transition-all hover:border-teal-600/50 hover:shadow-md hover:bg-teal-50/30">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-600/10 text-teal-700">
                        <Icon className="w-5 h-5" aria-hidden />
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground mt-2" aria-hidden />
                    </div>
                    <CardTitle className="text-base mt-2">{lang === 'en' ? g.titleEn : g.titleRu}</CardTitle>
                    <CardDescription className="text-xs">{count} {t.documentsCount}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {g.subgroups.slice(0, 3).map((sg) => (
                        <Badge key={sg.id} variant="secondary" className="text-[10px] font-normal">
                          {lang === 'en' ? sg.titleEn : sg.titleRu}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function TemplateRow({ tpl, lang, onOpen, subtitle }: { tpl: TemplateDTO; lang: 'ru' | 'en'; onOpen: () => void; subtitle?: string }) {
  const t = UI[lang];
  const isHand = tpl.kind === 'HANDWRITTEN_REQUIRED';
  const isPortal = tpl.kind === 'GOV_PORTAL_ONLY';
  const title = lang === 'en' ? tpl.titleEn : tpl.titleRu;
  // Чип языка документа: если тело документа не на языке интерфейса — предупреждаём заранее
  const showLangChip = Boolean(tpl.lang) && tpl.lang !== lang && !isPortal;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="w-full flex items-center gap-3 p-3.5 text-left hover:bg-teal-50/40 transition-colors min-h-[56px] outline-none focus-visible:bg-teal-50/60"
    >
      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${
        isPortal ? 'bg-sky-100 text-sky-700' : isHand ? 'bg-amber-100 text-amber-700' : 'bg-teal-600/10 text-teal-700'
      }`}>
        {isPortal ? <Globe className="w-4.5 h-4.5" aria-hidden /> : isHand ? <PenLine className="w-4.5 h-4.5" aria-hidden /> : <FileSignature className="w-4.5 h-4.5" aria-hidden />}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-sm font-medium leading-snug">{title}</span>
        {subtitle && <span className="block text-xs text-muted-foreground truncate">{subtitle}</span>}
        {showLangChip && (
          <span className="inline-flex items-center gap-1 text-[11px] text-sky-800 bg-sky-50 border border-sky-200 rounded px-1.5 py-0.5 mt-1 max-w-full">
            <Languages className="w-3 h-3 shrink-0" aria-hidden /> {t.docLangChip} {docLangNative(tpl.lang)}
          </span>
        )}
        {isHand && <span className="block text-[11px] text-red-600 font-medium mt-0.5">заполняется от руки</span>}
        {isPortal && <span className="block text-[11px] text-sky-700 font-medium mt-0.5">решается через гос-портал</span>}
      </span>
      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden />
    </button>
  );
}
