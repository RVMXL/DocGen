'use client';
// ДокГен — SPA по ТЗ: Onboarding → Каталог → Форма → Предпросмотр/экспорт.
// Приложение САМОДОСТАТОЧНОЕ: каталог — статические данные, документы
// генерируются прямо на устройстве (.docx/.pdf) — сервер не нужен.
// Аппаратная кнопка «Назад» (Android) делает шаг назад по стеку экранов,
// а не сворачивает приложение (см. src/lib/native.ts).
import { useEffect, useMemo, useState } from 'react';
import { Onboarding } from '@/components/onboarding';
import { Catalog } from '@/components/catalog';
import { TemplateForm } from '@/components/template-form';
import { DocPreview } from '@/components/doc-preview';
import { HandwrittenScreen, GovPortalScreen } from '@/components/special-screens';
import { Button } from '@/components/ui/button';
import { Globe, Loader2 } from 'lucide-react';
import { useApp } from '@/lib/store';
import { UI, uiFor, countryName, dirFor, type Locale } from '@/lib/i18n';
import { initBackButton, registerBackHandler } from '@/lib/native';
import { buildCatalog } from '@/data/catalog';
import type { TemplateDTO } from '@/lib/types';

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
  // стек экранов: системный «Назад» снимает верхний слой
  const [stack, setStack] = useState<View[]>([{ name: 'catalog' }]);
  const locale = (lang as Locale) in UI ? (lang as Locale) : 'en';
  const t = uiFor(locale);

  useEffect(() => setHydrated(true), []);

  // язык/направление на <html> (для RTL — иврит)
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dirFor(locale);
  }, [locale]);

  // системная кнопка «Назад»: шаг назад в интерфейсе, на корне — системное поведение
  useEffect(() => {
    let dispose = () => {};
    let cancelled = false;
    void initBackButton(() => {
      // ничего не обработано: сворачиваем приложение как обычно (moveTaskToBack)
      import('@capacitor/app').then(({ App }) => {
        try {
          App.minimizeApp();
        } catch {
          /* iOS нет — нет и минимизации */
        }
      }).catch(() => {});
    }).then((off) => {
      if (cancelled) off();
      else dispose = off;
    });
    return () => {
      cancelled = true;
      dispose();
    };
  }, []);

  // глубина стека: верхний слой снимается обработчиком ниже (базовый «catalog» остаётся)
  useEffect(() => {
    if (stack.length <= 1) return;
    return registerBackHandler(() => {
      setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
      return true;
    });
  }, [stack.length]);

  const pushView = (v: View) => setStack((s) => [...s, v]);
  const resetToCatalog = () => setStack([{ name: 'catalog' }]);

  // Каталог — статические данные, собирается мгновенно, без сети
  const catalog = useMemo(
    () => (hydrated && onboarded && country ? buildCatalog(country) : null),
    [hydrated, onboarded, country]
  );

  if (!hydrated) {
    return (
      <main className="min-h-[100dvh] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-teal-600" aria-label="Loading" />
      </main>
    );
  }

  if (!onboarded || !country) {
    return <Onboarding onDone={resetToCatalog} />;
  }

  const countryNameStr = catalog ? countryName(catalog.country, locale) : '';
  const flag = catalog?.country.flag ?? '';
  const view = stack[stack.length - 1];

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <header className="no-print sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={resetToCatalog}
            className="flex items-center gap-2 font-bold text-base outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg px-1"
            aria-label={t.appName}
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-teal-600 text-white">
              <Globe className="w-4 h-4" aria-hidden />
            </span>
            {t.appName}
          </button>
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-muted-foreground hidden sm:inline">{flag} {countryNameStr}</span>
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
        {!catalog ? (
          <div className="max-w-xl mx-auto px-4 py-16 text-center text-muted-foreground">
            <p>{t.catalogEmpty}</p>
            <Button className="mt-4" onClick={() => setOnboarded(false)}>{t.changeCountry}</Button>
          </div>
        ) : view.name === 'catalog' ? (
          <Catalog
            catalog={catalog}
            lang={locale}
            onOpenTemplate={(tpl) => {
              if (tpl.kind === 'GOV_PORTAL_ONLY') {
                pushView({ name: 'govportal', tpl });
              } else if (tpl.kind === 'HANDWRITTEN_REQUIRED') {
                pushView({ name: 'handwritten', tpl });
              } else {
                pushView({ name: 'form', tpl });
              }
            }}
            onBack={resetToCatalog}
          />
        ) : view.name === 'govportal' ? (
          <GovPortalScreen template={view.tpl} lang={locale} onBack={() => setStack((s) => s.slice(0, -1))} />
        ) : view.name === 'handwritten' ? (
          <HandwrittenScreen
            template={view.tpl}
            lang={locale}
            onBack={() => setStack((s) => s.slice(0, -1))}
            onFillSample={() => pushView({ name: 'sample-form', tpl: view.tpl })}
          />
        ) : view.name === 'form' || view.name === 'sample-form' ? (
          <TemplateForm
            template={view.tpl}
            lang={locale}
            onBack={() => setStack((s) => s.slice(0, -1))}
            onNext={(data) => pushView({ name: 'preview', tpl: view.tpl, data })}
          />
        ) : (
          <DocPreview
            template={view.tpl}
            lang={locale}
            data={view.data}
            onBack={() =>
              setStack((s) =>
                s.length > 1 && (s[s.length - 2]?.name === 'form' || s[s.length - 2]?.name === 'sample-form')
                  ? s.slice(0, -1)
                  : [{ name: 'catalog' }]
              )
            }
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
