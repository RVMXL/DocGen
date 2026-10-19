// Состояние приложения: язык, страна, флаг онбординга (переживает перезагрузку)
'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  lang: string; // код языка интерфейса
  country: string; // код страны
  onboarded: boolean;
  setLang: (l: string) => void;
  setCountry: (c: string) => void;
  setOnboarded: (v: boolean) => void;
  reset: () => void;
}

export const useApp = create<AppState>()(
  persist(
    (set) => ({
      lang: 'ru',
      country: '',
      onboarded: false,
      setLang: (lang) => set({ lang }),
      setCountry: (country) => set({ country }),
      setOnboarded: (onboarded) => set({ onboarded }),
      reset: () => set({ lang: 'ru', country: '', onboarded: false }),
    }),
    { name: 'docgen-app' }
  )
);
