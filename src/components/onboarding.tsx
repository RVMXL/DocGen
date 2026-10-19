'use client';
// Onboarding (ТЗ: при первом запуске — экран выбора языка интерфейса и страны).
// Язык интерфейса — только язык приложения; страна — набор шаблонов и их язык.
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronRight, Globe, Languages, Search } from 'lucide-react';
import { UI } from '@/lib/i18n';
import { docLangNative } from '@/lib/doclangs';
import { useApp } from '@/lib/store';
import { COUNTRIES } from '@/data/countries';
import { buildCatalog } from '@/data/catalog';
import type { Region } from '@/data/types';

const LANGS = [
  { code: 'ru', nativeName: 'Русский', available: true },
  { code: 'en', nativeName: 'English', available: true },
  { code: 'kk', nativeName: 'Қазақша', available: false },
  { code: 'be', nativeName: 'Беларуская', available: false },
  { code: 'uz', nativeName: 'Oʻzbekcha', available: false },
];

const REGION_TITLES: Record<Region, { ru: string; en: string }> = {
  cis: { ru: 'Россия и СНГ', en: 'Russia & CIS' },
  europe: { ru: 'Европа', en: 'Europe' },
  asia: { ru: 'Азия', en: 'Asia' },
  americas: { ru: 'Америка', en: 'Americas' },
  oceania: { ru: 'Океания', en: 'Oceania' },
};
const REGION_ORDER: Region[] = ['cis', 'europe', 'asia', 'americas', 'oceania'];

export function Onboarding({ onDone }: { onDone: () => void }) {
  const { lang, setLang, setCountry, setOnboarded } = useApp();
  const [step, setStep] = useState<1 | 2>(1);
  const [pickedLang, setPickedLang] = useState(lang);
  const [pickedCountry, setPickedCountry] = useState('');
  const [query, setQuery] = useState('');
  // интерфейс мастера переключается сразу при выборе языка
  const t = UI[(pickedLang as 'ru' | 'en') ?? 'ru'] ?? UI.ru;
  const L = pickedLang === 'en' ? 'en' : 'ru';

  // доступны только страны с реальным каталогом шаблонов
  const available = COUNTRIES.filter((c) => buildCatalog(c.code) !== null);
  const q = query.trim().toLowerCase();
  const filtered = q.length > 0
    ? available.filter((c) => c.nameRu.toLowerCase().includes(q) || c.nameEn.toLowerCase().includes(q))
    : available;

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
          <span>{t.step} {step} {t.of} 2</span>
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
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  disabled={!l.available}
                  onClick={() => setPickedLang(l.code)}
                  className={`relative rounded-xl border p-4 text-left transition-all min-h-[44px] ${
                    pickedLang === l.code
                      ? 'border-teal-600 bg-teal-50 ring-2 ring-teal-600/30'
                      : l.available
                        ? 'border-border bg-card hover:border-teal-600/50 hover:bg-teal-50/40'
                        : 'border-dashed border-border bg-muted/40 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <span className="font-medium">{l.nativeName}</span>
                  {!l.available && (
                    <Badge variant="secondary" className="absolute top-2 right-2 text-[10px] px-1.5">{t.comingSoon}</Badge>
                  )}
                  {pickedLang === l.code && l.available && (
                    <Check className="absolute bottom-3 right-3 w-4 h-4 text-teal-600" aria-hidden />
                  )}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setStep(2)} disabled={!pickedLang} className="min-h-[44px] px-6">
                {t.back === 'Назад' ? 'Далее' : 'Next'} <ChevronRight className="w-4 h-4 ml-1" aria-hidden />
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
                  <CountryCard key={c.code} c={c} L={L} t={t} picked={pickedCountry === c.code} onPick={() => setPickedCountry(c.code)} />
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
                      {REGION_TITLES[region][L]}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {list.map((c) => (
                        <CountryCard key={c.code} c={c} L={L} t={t} picked={pickedCountry === c.code} onPick={() => setPickedCountry(c.code)} />
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
              <Button onClick={finish} disabled={!pickedCountry} className="min-h-[44px] px-8">
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

function CountryCard({ c, L, t, picked, onPick }: {
  c: { code: string; flag: string; nameRu: string; nameEn: string; docLang: string };
  L: 'ru' | 'en';
  t: { docLangChip: string };
  picked: boolean;
  onPick: () => void;
}) {
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
      <span className="font-medium text-sm">{L === 'en' ? c.nameEn : c.nameRu}</span>
      <span className="block mt-1 text-[11px] text-muted-foreground">{t.docLangChip} {docLangNative(c.docLang)}</span>
      {picked && (
        <Check className="absolute bottom-3 right-3 w-4 h-4 text-teal-600" aria-hidden />
      )}
    </button>
  );
}
