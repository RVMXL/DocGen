'use client';
// ДокГен — SPA по ТЗ: Onboarding → Каталог → Форма → Предпросмотр/экспорт
import { useCallback, useEffect, useState } from 'react';
import { Onboarding } from '@/components/onboarding';
import { Catalog } from '@/components/catalog';
import { TemplateForm } from '@/components/template-form';
import { DocPreview } from '@/components/doc-preview';
import { HandwrittenScreen, GovPortalScreen } from '@/components/special-screens';
import { Button } from '@/components/ui/button';
import { Globe, Loader2 } from 'lucide-react';
import { useApp } from '@/lib/store';
import { UI } from '@/lib/i18n';
import type { CatalogResponse, TemplateDTO } from '@/lib/types';

type View =
  | { name: 'catalog' }
  | { name: 'form'; tpl: TemplateDTO }
  | { name: 'preview'; tpl: TemplateDTO; data: Record<string, string> }
  | { name: 'handwritten'; tpl: TemplateDTO }
  | { name: 'govportal'; tpl: TemplateDTO }
  | { name: 'sample-form'; tpl: TemplateDTO };

export default function Home() {
  const { lang, country, onboarded, setOnboarded } = useApp();
  const [hydrated, setHydrated] = useState(false);
  const [view, setView] = useState<View>({ name: 'catalog' });
  const [catalog, setCatalog] = useState<CatalogResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const locale = lang === 'en' ? 'en' : 'ru';
  const t = UI[locale];

  useEffect(() => setHydrated(true), []);

  const loadCatalog = useCallback(async (countryCode: string) => {
    if (!countryCode) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/catalog?country=${countryCode}`);
      if (!res.ok) throw new Error('failed');
      setCatalog(await res.json());
    } catch {
      setCatalog(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (hydrated && onboarded && country) loadCatalog(country);
  }, [hydrated, onboarded, country, loadCatalog]);

  if (!hydrated) {
    return (
      <main className="min-h-[100dvh] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-teal-600" aria-label="Loading" />
      </main>
    );
  }

  if (!onboarded || !country) {
    return <Onboarding onDone={() => setView({ name: 'catalog' })} />;
  }

  const countryName = catalog ? (locale === 'en' ? catalog.country.nameEn : catalog.country.nameRu) : '';
  const flag = catalog?.country.flag ?? '';

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <header className="no-print sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => { setView({ name: 'catalog' }); }}
            className="flex items-center gap-2 font-bold text-base outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg px-1"
            aria-label={t.appName}
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-teal-600 text-white">
              <Globe className="w-4 h-4" aria-hidden />
            </span>
            {t.appName}
          </button>
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-muted-foreground hidden sm:inline">{flag} {countryName}</span>
            <Button
              variant="ghost"
              size="sm"
              className="min-h-[36px]"
              onClick={() => { setOnboarded(false); }}
            >
              <Globe className="w-4 h-4 sm:mr-1.5" aria-hidden />
              <span className="hidden sm:inline">{t.changeCountry}</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-2">
        {loading && !catalog ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-6 h-6 animate-spin text-teal-600" aria-label="Loading" />
          </div>
        ) : !catalog ? (
          <div className="max-w-xl mx-auto px-4 py-16 text-center text-muted-foreground">
            <p>Не удалось загрузить каталог. Проверьте соединение и попробуйте снова.</p>
            <Button className="mt-4" onClick={() => loadCatalog(country)}>Повторить</Button>
          </div>
        ) : view.name === 'catalog' ? (
          <Catalog
            catalog={catalog}
            lang={locale}
            onOpenTemplate={(tpl) => {
              if (tpl.kind === 'GOV_PORTAL_ONLY') {
                setView({ name: 'govportal', tpl });
              } else if (tpl.kind === 'HANDWRITTEN_REQUIRED') {
                setView({ name: 'handwritten', tpl });
              } else {
                setView({ name: 'form', tpl });
              }
            }}
            onBack={() => setView({ name: 'catalog' })}
          />
        ) : view.name === 'govportal' ? (
          <GovPortalScreen template={view.tpl} lang={locale} onBack={() => setView({ name: 'catalog' })} />
        ) : view.name === 'handwritten' ? (
          <HandwrittenScreen
            template={view.tpl}
            lang={locale}
            onBack={() => setView({ name: 'catalog' })}
            onFillSample={() => setView({ name: 'sample-form', tpl: view.tpl })}
          />
        ) : view.name === 'form' || view.name === 'sample-form' ? (
          <TemplateForm
            template={view.tpl}
            lang={locale}
            onBack={() => setView({ name: 'catalog' })}
            onNext={(data) => setView({ name: 'preview', tpl: view.tpl, data })}
          />
        ) : (
          <DocPreview
            template={view.tpl}
            lang={locale}
            data={view.data}
            onBack={() => setView(view.name === 'preview' ? { name: 'form', tpl: view.tpl } : { name: 'catalog' })}
          />
        )}
      </main>

      <footer className="no-print mt-auto border-t bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 py-4 text-xs text-muted-foreground">
          {t.footerNote}
        </div>
      </footer>
    </div>
  );
}
