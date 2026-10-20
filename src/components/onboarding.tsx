'use client';
// Onboarding (ТЗ: при первом запуске — выбор языка интерфейса и страны).
// Язык интерфейса — только язык приложения; страна — набор шаблонов и их язык.
// При выборе страны страница плавно прокручивается к кнопке «Начать».
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronRight, Globe, Languages, Search } from 'lucide-react';
import { UI, uiFor, countryName, LOCALES, type Locale } from '@/lib/i18n';
import { docLangNative } from '@/lib/doclangs';
import { useApp } from '@/lib/store';
import { COUNTRIES } from '@/data/countries';
import { buildCatalog } from '@/data/catalog';
import { registerBackHandler } from '@/lib/native';
import type { Region } from '@/data/types';

const REGION_TITLES: Record<Region, { ru: string; en: string; i18n?: Partial<Record<Locale, string>> }> = {
  cis: { ru: 'Россия и СНГ', en: 'Russia & CIS', i18n: {
    uk: 'Росія та СНД', be: 'Расія і СНД', kk: 'Ресей және ТМД', uz: 'Rossiya va MDH',
    kg: 'Орусия жана КМШ', tg: 'Русия ва ИДМ', hy: 'Ռուսաստան և ԱՊՀ', az: 'Rusiya və MDB',
    ro: 'Rusia și CSI', de: 'Russland & GUS', fr: 'Russie et CEI', pl: 'Rosja i WNP',
    zh: '俄罗斯与独联体', ja: 'ロシアとCIS', ko: '러시아와 CIS', tr: 'Rusya ve BDT', he: 'רוסיה וחבר המדינות',
    pt: 'Rússia e CEI', es: 'Rusia y CEI',
  } },
  europe: { ru: 'Европа', en: 'Europe', i18n: {
    uk: 'Європа', be: 'Еўропа', kk: 'Еуропа', uz: 'Yevropa', kg: 'Европа', tg: 'Аврупо',
    hy: 'Եվրոպա', az: 'Avropa', ro: 'Europa', de: 'Europa', fr: 'Europe', pl: 'Europa',
    zh: '欧洲', ja: 'ヨーロッパ', ko: '유럽', tr: 'Avrupa', he: 'אירופה', pt: 'Europa', es: 'Europa',
  } },
  asia: { ru: 'Азия', en: 'Asia', i18n: {
    uk: 'Азія', be: 'Азія', kk: 'Азия', uz: 'Osiyo', kg: 'Азия', tg: 'Осиё', hy: 'Ասիա',
    az: 'Asiya', ro: 'Asia', de: 'Asien', fr: 'Asie', pl: 'Azja', zh: '亚洲', ja: 'アジア',
    ko: '아시아', tr: 'Asya', he: 'אסיה', pt: 'Ásia', es: 'Asia',
  } },
  americas: { ru: 'Америка', en: 'Americas', i18n: {
    uk: 'Америка', be: 'Амерыка', kk: 'Америка', uz: 'Amerika', kg: 'Америка', tg: 'Америка',
    hy: 'Ամերիկա', az: 'Amerika', ro: 'America', de: 'Amerika', fr: 'Amériques', pl: 'Ameryka',
    zh: '美洲', ja: 'アメリカ大陸', ko: '아메리카', tr: 'Amerika', he: 'אמריקה', pt: 'Américas', es: 'América',
  } },
  oceania: { ru: 'Океания', en: 'Oceania', i18n: {
    uk: 'Океанія', be: 'Акіянія', kk: 'Мұхиттық аралдар', uz: 'Okeaniya', kg: 'Океания',
    tg: 'Уқёнусия', hy: 'Օվկիանիա', az: 'Okeaniya', ro: 'Oceania', de: 'Ozeanien', fr: 'Océanie',
    pl: 'Oceania', zh: '大洋洲', ja: 'オセアニア', ko: '오세아니아', tr: 'Okyanusya', he: 'אוקיאניה',
    pt: 'Oceania', es: 'Oceanía',
  } },
};
const REGION_ORDER: Region[] = ['cis', 'europe', 'asia', 'americas', 'oceania'];

export function Onboarding({ onDone }: { onDone: () => void }) {
  const { lang, setLang, setCountry, setOnboarded } = useApp();
  const [step, setStep] = useState<1 | 2>(1);
  const [pickedLang, setPickedLang] = useState(lang);
  const [pickedCountry, setPickedCountry] = useState('');
  const [query, setQuery] = useState('');
  const startBtnRef = useRef<HTMLButtonElement>(null);
  // интерфейс мастера переключается сразу при выборе языка
  const t = uiFor(pickedLang);
  const locale = pickedLang as Locale;
  const L = pickedLang === 'ru' ? 'ru' : 'en';

  // системный «Назад» в мастере: шаг 2 → шаг 1
  useEffect(() => {
    return registerBackHandler(() => {
      if (step === 2) {
        setStep(1);
        return true;
      }
      return false;
    });
  }, [step]);

  // доступны только страны с реальным каталогом шаблонов
  const available = COUNTRIES.filter((c) => buildCatalog(c.code) !== null);
  const q = query.trim().toLowerCase();
  const filtered = q.length > 0
    ? available.filter((c) => c.nameRu.toLowerCase().includes(q) || c.nameEn.toLowerCase().includes(q))
    : available;

  // ПРИ ВЫБОРЕ СТРАНЫ прокручиваем к кнопке «Начать» (требование пользователя)
  useEffect(() => {
    if (step === 2 && pickedCountry) {
      startBtnRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [step, pickedCountry]);

  const finish = () => {
    if (!pickedCountry) return;
    setLang(pickedLang);
    setCountry(pickedCountry);
    setOnboarded(true);
    onDone();
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-teal-50 via-background to-background">
      <header className="pt-10 pb-6 text-center px-4">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-600 text-white mb-4 shadow-lg shadow-teal-600/20">
          <Globe className="w-7 h-7" aria-hidden />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{t.onboardingTitle}</h1>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto text-sm sm:text-base">{t.onboardingSub}</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>{step} / 2</span>
          <div className="flex gap-1">
            <span className={`h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-teal-600' : 'bg-muted'}`} />
            <span className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-teal-600' : 'bg-muted'}`} />
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-10">
        {step === 1 ? (
          <section aria-label={t.chooseLanguage}>
            <h2 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              <Languages className="w-4 h-4" aria-hidden /> {t.chooseLanguage}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {LOCALES.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setPickedLang(code)}
                  className={`relative rounded-xl border p-4 text-left transition-all min-h-[44px] ${
                    pickedLang === code
                      ? 'border-teal-600 bg-teal-50 ring-2 ring-teal-600/30'
                      : 'border-border bg-card hover:border-teal-600/50 hover:bg-teal-50/40'
                  }`}
                >
                  <span className="font-medium">{docLangNative(code)}</span>
                  {pickedLang === code && (
                    <Check className="absolute bottom-3 right-3 w-4 h-4 text-teal-600" aria-hidden />
                  )}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setStep(2)} className="min-h-[44px] px-6">
                {t.next} <ChevronRight className="w-4 h-4 ml-1" aria-hidden />
              </Button>
            </div>
          </section>
        ) : (
          <section aria-label={t.chooseCountry}>
            <h2 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              <Globe className="w-4 h-4" aria-hidden /> {t.chooseCountry}
            </h2>

            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full h-10 rounded-lg border border-border bg-card pl-9 pr-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40"
                aria-label={t.searchPlaceholder}
              />
            </div>

            {q.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {filtered.map((c) => (
                  <CountryCard key={c.code} c={c} lang={locale} picked={pickedCountry === c.code} onPick={() => setPickedCountry(c.code)} />
                ))}
                {filtered.length === 0 && (
                  <p className="col-span-full text-sm text-muted-foreground py-6 text-center">{t.searchNothing}</p>
                )}
              </div>
            ) : (
              REGION_ORDER.map((region) => {
                const list = available.filter((c) => c.region === region);
                if (list.length === 0) return null;
                return (
                  <div key={region} className="mb-5">
                    <h3 className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-widest mb-2">
                      {regionTitle(region, locale)}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {list.map((c) => (
                        <CountryCard key={c.code} c={c} lang={locale} picked={pickedCountry === c.code} onPick={() => setPickedCountry(c.code)} />
                      ))}
                    </div>
                  </div>
                );
              })
            )}

            <div className="mt-6 flex items-center justify-between">
              <Button variant="ghost" onClick={() => setStep(1)} className="min-h-[44px]">
                {t.back}
              </Button>
              <Button ref={startBtnRef} onClick={finish} disabled={!pickedCountry} className="min-h-[44px] px-8">
                {t.start} <ChevronRight className="w-4 h-4 ml-1" aria-hidden />
              </Button>
            </div>
          </section>
        )}
      </main>

      <footer className="pb-6 text-center text-xs text-muted-foreground px-4">
        <Card className="border-none shadow-none">
          <CardContent className="p-2">
            {t.footerNote}
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}

function regionTitle(region: Region, lang: Locale): string {
  const r = REGION_TITLES[region];
  if (lang === 'ru') return r.ru;
  if (lang === 'en') return r.en;
  return r.i18n?.[lang] ?? r.en;
}

function CountryCard({ c, lang, picked, onPick }: {
  c: { code: string; flag: string; nameRu: string; nameEn: string; nameI18n?: Partial<Record<string, string>>; docLang: string };
  lang: Locale;
  picked: boolean;
  onPick: () => void;
}) {
  const t = uiFor(lang);
  return (
    <button
      type="button"
      onClick={onPick}
      className={`relative rounded-xl border p-4 text-left transition-all min-h-[44px] ${
        picked
          ? 'border-teal-600 bg-teal-50 ring-2 ring-teal-600/30'
          : 'border-border bg-card hover:border-teal-600/50 hover:bg-teal-50/40'
      }`}
    >
      <span className="text-lg mr-2" aria-hidden>{c.flag}</span>
      <span className="font-medium text-sm">{countryName(c, lang)}</span>
      <span className="block mt-1 text-[11px] text-muted-foreground">{t.docLangChip} {docLangNative(c.docLang)}</span>
      {picked && (
        <Check className="absolute bottom-3 right-3 w-4 h-4 text-teal-600" aria-hidden />
      )}
    </button>
  );
}
