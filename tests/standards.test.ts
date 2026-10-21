// Тесты реестра национальных стандартов оформления (src/data/standards.ts):
// каждая страна каталога покрыта; эталонные значения ГОСТ/GB-T/DIN/US не дрейфуют;
// fallback для неизвестной страны безопасен.
import { describe, it, expect } from 'bun:test';
import { COUNTRIES } from '../src/data/countries';
import { STANDARDS, standardOf, type DocStandard } from '../src/data/standards';

const ru = STANDARDS.RU;

describe('национальные стандарты оформления', () => {
  it('покрывают все страны каталога', () => {
    for (const c of COUNTRIES) {
      expect(STANDARDS[c.code]).toBeDefined();
    }
  });

  it('Россия — ГОСТ Р 7.0.97-2016: поля 20/20/30/10, 14 pt, красная строка 1,25 см', () => {
    expect(ru.code).toContain('ГОСТ');
    expect(ru.marginsMm).toEqual({ top: 20, bottom: 20, left: 30, right: 10 });
    expect(ru.fontPt).toBe(14);
    expect(ru.indentFirstLineMm).toBe(12.5);
  });

  it('Украина — ДСТУ 4163:2020 (правило 3-2-2-1)', () => {
    expect(STANDARDS.UA.code).toContain('ДСТУ');
    expect(STANDARDS.UA.marginsMm).toEqual({ top: 20, bottom: 20, left: 30, right: 10 });
  });

  it('Китай — GB/T 9704-2012: поля 37/35/28/26, 仿宋 16 pt', () => {
    expect(STANDARDS.CN.marginsMm).toEqual({ top: 37, bottom: 35, left: 28, right: 26 });
    expect(STANDARDS.CN.fontPt).toBe(16);
  });

  it('Германия — DIN 5008 Form A: левое 24,9, верх 16,9, блок-стиль', () => {
    expect(STANDARDS.DE.marginsMm).toEqual({ top: 16.9, bottom: 16.9, left: 24.9, right: 20 });
    expect(STANDARDS.DE.indentFirstLineMm).toBe(0);
  });

  it('США — 1 дюйм, 12 pt, без красной строки (block format)', () => {
    expect(STANDARDS.US.marginsMm).toEqual({ top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 });
    expect(STANDARDS.US.fontPt).toBe(12);
    expect(STANDARDS.US.indentFirstLineMm).toBe(0);
  });

  it('Бразилия — Manual de Redação: 20/20/30/15, отступ 2,5 см', () => {
    expect(STANDARDS.BR.marginsMm).toEqual({ top: 20, bottom: 20, left: 30, right: 15 });
    expect(STANDARDS.BR.indentFirstLineMm).toBe(25);
  });

  it('Корея — 공문서 규정: 30/15/20/15', () => {
    expect(STANDARDS.KR.marginsMm).toEqual({ top: 30, bottom: 15, left: 20, right: 15 });
  });

  it('у каждого стандарта есть названия и описания ru+en и разумные значения', () => {
    for (const [cc, s] of Object.entries(STANDARDS)) {
      expect(s.nameRu.length).toBeGreaterThan(0);
      expect(s.nameEn.length).toBeGreaterThan(0);
      expect(s.descRu.length).toBeGreaterThan(0);
      expect(s.descEn.length).toBeGreaterThan(0);
      const inRange = (v: number, lo: number, hi: number) => v >= lo && v <= hi;
      expect(inRange(s.marginsMm.top, 10, 45)).toBe(true);
      expect(inRange(s.marginsMm.bottom, 10, 45)).toBe(true);
      expect(inRange(s.marginsMm.left, 15, 45)).toBe(true);
      expect(inRange(s.marginsMm.right, 8, 45)).toBe(true);
      expect(inRange(s.fontPt, 10, 16)).toBe(true);
      expect(inRange(s.indentFirstLineMm, 0, 30)).toBe(true);
      if (s.refUrl) expect(s.refUrl.startsWith('https://')).toBe(true);
      void cc;
    }
  });

  it('fallback для неизвестной страны не падает и даёт разумные поля', () => {
    const zz: DocStandard = standardOf('ZZ');
    expect(zz.marginsMm.top).toBeGreaterThan(0);
    expect(zz.nameRu.length).toBeGreaterThan(0);
  });

  it('standardOf нечувствителен к регистру кода страны', () => {
    expect(standardOf('ru').code).toBe(ru.code);
  });
});
