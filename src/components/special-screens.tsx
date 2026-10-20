'use client';
// Спец-экраны: документ «от руки» (красное предупреждение по ТЗ) и инфо-карточка гос-портала.
// Язык интерфейса — любая локаль из 21; чек-листы — на языке интерфейса (ru/en, fallback).
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, AlertTriangle, ExternalLink, Globe, CheckCircle2 } from 'lucide-react';
import type { TemplateDTO } from '@/lib/types';
import { uiFor, tplTitle, tplDesc, type Locale } from '@/lib/i18n';
import { registerBackHandler } from '@/lib/native';

// ================= Документ строго от руки =================
export function HandwrittenScreen({ template, lang, onBack, onFillSample }: {
  template: TemplateDTO; lang: Locale;
  onBack: () => void; onFillSample: () => void;
}) {
  const t = uiFor(lang);
  const warning = (lang === 'ru' ? template.warningRu : template.warningEn) ?? t.warningHandwritten;
  const checklist = (lang === 'ru' ? template.portalDescRu : template.portalDescEn) ?? '';
  const hasFields = template.fields.length > 0;

  // системный «Назад» = возврат к каталогу
  useEffect(() => registerBackHandler(() => { onBack(); return true; }), [onBack]);

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

      {/* Яркое предупреждение красным (требование ТЗ) */}
      <Alert className="mt-5 border-red-600 bg-red-50 text-red-800 [&>svg]:text-red-600" role="alert">
        <AlertTriangle className="w-5 h-5" aria-hidden />
        <AlertTitle className="text-red-700 font-bold text-base">{warning}</AlertTitle>
        <AlertDescription className="text-red-700">
          {t.handwrittenExplain}
        </AlertDescription>
      </Alert>

      {checklist && (
        <Card className="mt-4">
          <CardContent className="p-4 sm:p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">{t.whatPrepare}</h3>
            <ul className="space-y-2">
              {checklist.split('. ').filter(Boolean).map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-teal-600" aria-hidden />
                  <span>{line.replace(/\.$/, '')}.</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {hasFields && (
        <Card className="mt-4 border-amber-300 bg-amber-50/50">
          <CardContent className="p-4 sm:p-5">
            <h3 className="font-semibold text-amber-900">{t.referenceSample}</h3>
            <p className="text-sm text-amber-800 mt-1 mb-3">{t.referenceExplain}</p>
            <Button onClick={onFillSample} variant="outline" className="border-amber-500 text-amber-900 hover:bg-amber-100 min-h-[44px]">
              {t.generateSample}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// ================= Инфо-карточка гос-портала =================
export function GovPortalScreen({ template, lang, onBack }: {
  template: TemplateDTO; lang: Locale; onBack: () => void;
}) {
  const t = uiFor(lang);
  const checklist = (lang === 'ru' ? template.portalDescRu : template.portalDescEn) ?? '';

  useEffect(() => registerBackHandler(() => { onBack(); return true; }), [onBack]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-10">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mt-4 min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden /> {t.backToCatalog}
      </button>

      <div className="flex items-start gap-3 mt-2">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sky-100 text-sky-700 shrink-0 mt-0.5">
          <Globe className="w-5 h-5" aria-hidden />
        </span>
        <h2 className="text-xl sm:text-2xl font-bold">{tplTitle(template, lang)}</h2>
      </div>
      <p className="text-muted-foreground text-sm mt-3">{tplDesc(template, lang)}</p>

      <Card className="mt-5 border-sky-300 bg-sky-50/60">
        <CardContent className="p-4 sm:p-5">
          <h3 className="flex items-center gap-2 font-semibold text-sky-900">
            <Globe className="w-4 h-4" aria-hidden /> {t.govCardTitle}
          </h3>
          <p className="text-sm text-sky-800 mt-2">{t.govCardExplain}</p>
          {checklist && (
            <ul className="mt-3 space-y-2">
              {checklist.split('. ').filter(Boolean).map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-sky-900">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-sky-700" aria-hidden />
                  <span>{line.replace(/\.$/, '')}.</span>
                </li>
              ))}
            </ul>
          )}
          {template.portalUrl && (
            <Button asChild className="mt-4 bg-sky-700 hover:bg-sky-800 min-h-[44px]">
              <a href={template.portalUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" aria-hidden />
                {template.portalName ?? t.openPortal}
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
