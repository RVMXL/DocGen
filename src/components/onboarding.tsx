'use client';
// Onboarding (ТЗ: при первом запуске — экран выбора языка интерфейса и страны)
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronRight, Globe, Languages, Lock } from 'lucide-react';
import { UI } from '@/lib/i18n';
import { useApp } from '@/lib/store';

const LANGS = [
  { code: 'ru', nativeName: 'Русский', available: true },
  { code: 'en', nativeName: 'English', available: true },
  { code: 'kk', nativeName: 'Қазақша', available: false },
  { code: 'be', nativeName: 'Беларуская', available: false },
  { code: 'uz', nativeName: 'Oʻzbekcha', available: false },
];

const COUNTRIES = [
  { code: 'RU', flag: '🇷🇺', nameRu: 'Россия', nameEn: 'Russia', available: true },
  { code: 'KZ', flag: '🇰🇿', nameRu: 'Казахстан', nameEn: 'Kazakhstan', available: true },
  { code: 'BY', flag: '🇧🇾', nameRu: 'Беларусь', nameEn: 'Belarus', available: true },
  { code: 'UA', flag: '🇺🇦', nameRu: 'Украина', nameEn: 'Ukraine', available: true },
  { code: 'UZ', flag: '🇺🇿', nameRu: 'Узбекистан', nameEn: 'Uzbekistan', available: true },
  { code: 'KG', flag: '🇰🇬', nameRu: 'Кыргызстан', nameEn: 'Kyrgyzstan', available: true },
  { code: 'TJ', flag: '🇹🇯', nameRu: 'Таджикистан', nameEn: 'Tajikistan', available: true },
  { code: 'AM', flag: '🇦🇲', nameRu: 'Армения', nameEn: 'Armenia', available: true },
  { code: 'AZ', flag: '🇦🇿', nameRu: 'Азербайджан', nameEn: 'Azerbaijan', available: true },
  { code: 'MD', flag: '🇲🇩', nameRu: 'Молдова', nameEn: 'Moldova', available: true },
  // Бэклог по ТЗ
  { code: 'US', flag: '🇺🇸', nameRu: 'США', nameEn: 'United States', available: false },
  { code: 'DE', flag: '🇪🇺', nameRu: 'Европа (ЕС)', nameEn: 'Europe (EU)', available: false },
  { code: 'CN', flag: '🇨🇳', nameRu: 'Китай', nameEn: 'China', available: false },
  { code: 'JP', flag: '🇯🇵', nameRu: 'Япония', nameEn: 'Japan', available: false },
  { code: 'KR', flag: '🇰🇷', nameRu: 'Южная Корея', nameEn: 'South Korea', available: false },
  { code: 'AU', flag: '🇦🇺', nameRu: 'Австралия', nameEn: 'Australia', available: false },
  { code: 'TR', flag: '🇹🇷', nameRu: 'Турция', nameEn: 'Turkey', available: false },
  { code: 'IL', flag: '🇮🇱', nameRu: 'Израиль', nameEn: 'Israel', available: false },
  { code: 'BR', flag: '🇧🇷', nameRu: 'Бразилия', nameEn: 'Brazil', available: false },
  { code: 'AR', flag: '🇦🇷', nameRu: 'Аргентина', nameEn: 'Argentina', available: false },
];

export function Onboarding({ onDone }: { onDone: () => void }) {
  const { lang, setLang, setCountry, setOnboarded } = useApp();
  const [step, setStep] = useState<1 | 2>(1);
  const [pickedLang, setPickedLang] = useState(lang);
  const [pickedCountry, setPickedCountry] = useState('');
  // интерфейс мастера переключается сразу при выборе языка
  const t = UI[(pickedLang as 'ru' | 'en') ?? 'ru'] ?? UI.ru;
  const L = pickedLang === 'en' ? 'en' : 'ru';

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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {COUNTRIES.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  disabled={!c.available}
                  onClick={() => setPickedCountry(c.code)}
                  className={`relative rounded-xl border p-4 text-left transition-all min-h-[44px] ${
                    pickedCountry === c.code
                      ? 'border-teal-600 bg-teal-50 ring-2 ring-teal-600/30'
                      : c.available
                        ? 'border-border bg-card hover:border-teal-600/50 hover:bg-teal-50/40'
                        : 'border-dashed border-border bg-muted/40 opacity-55 cursor-not-allowed'
                  }`}
                >
                  <span className="text-lg mr-2" aria-hidden>{c.flag}</span>
                  <span className="font-medium text-sm">{L === 'en' ? c.nameEn : c.nameRu}</span>
                  {!c.available && (
                    <Lock className="absolute top-2.5 right-2.5 w-3.5 h-3.5 text-muted-foreground" aria-hidden />
                  )}
                  {pickedCountry === c.code && c.available && (
                    <Check className="absolute bottom-3 right-3 w-4 h-4 text-teal-600" aria-hidden />
                  )}
                </button>
              ))}
            </div>
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
            MVP: Россия и СНГ. Следующие этапы — США, Европа, Китай, Япония, Ю. Корея, Австралия, Турция, Израиль, Бразилия, Аргентина.
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
