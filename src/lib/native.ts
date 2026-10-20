// Хелперы нативных платформ (Capacitor Android/iOS) и общий обработчик «Назад».
// - Сохранение файлов: в WebView Android скачивание через <a download> не работает,
//   поэтому файл пишется в кэш и открывается системным меню «Поделиться»
//   (там доступны «Сохранить в Файлы/Диск», отправка себе, открытие в Word/PDF-ридере).
// - Аппаратная кнопка/жест «Назад»: вместо сворачивания приложения — шаг назад
//   в интерфейсе (стек обрабатывающих компонентов, глобальный listener на главном экране).
import { Capacitor } from '@capacitor/core';

export function isNative(): boolean {
  return Capacitor.isNativePlatform();
}

type BackHandler = () => boolean; // true — «Назад» обработан (навигация выполнена)

const handlers: BackHandler[] = [];

/** Зарегистрировать обработчик «Назад» (в порядке LIFO). Возвращает функцию отписки. */
export function registerBackHandler(h: BackHandler): () => void {
  handlers.push(h);
  return () => {
    const i = handlers.indexOf(h);
    if (i >= 0) handlers.splice(i, 1);
  };
}

/** Разослать «Назад» по обработчикам. true — кто-то обработал. */
export function dispatchBack(): boolean {
  for (let i = handlers.length - 1; i >= 0; i--) {
    try {
      if (handlers[i]()) return true;
    } catch {
      // сбойный обработчик не блокирует навигацию
    }
  }
  return false;
}

/** Подключить системную кнопку «Назад» к стеку обработчиков. Вызывается один раз. */
export async function initBackButton(onDefault: () => void): Promise<() => void> {
  if (!Capacitor.isNativePlatform()) return () => {};
  try {
    const { App } = await import('@capacitor/app');
    const listener = await App.addListener('backButton', () => {
      if (!dispatchBack()) onDefault();
    });
    return () => {
      void listener.remove();
    };
  } catch {
    return () => {};
  }
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const s = String(reader.result ?? '');
      const comma = s.indexOf(',');
      resolve(comma >= 0 ? s.slice(comma + 1) : s);
    };
    reader.onerror = () => reject(new Error('blob→base64 failed'));
    reader.readAsDataURL(blob);
  });
}

/**
 * Сохранить сгенерированный файл:
 * - Android/iOS: записать в кэш приложения → системное «Поделиться»
 *   (сохранить в Файлы/Диск, отправить себе в мессенджер, открыть в Word/просмотре PDF);
 * - Web/Electron: скачивание через <a download> (Electron перехватывает will-download
 *   и кладёт файл в «Загрузки»).
 */
export async function saveFile(blob: Blob, name: string): Promise<void> {
  if (Capacitor.isNativePlatform()) {
    const { Filesystem, Directory } = await import('@capacitor/filesystem');
    const { Share } = await import('@capacitor/share');
    const data = await blobToBase64(blob);
    // encoding не указываем: плагин трактует данные как base64 и пишет бинарно
    const res = await Filesystem.writeFile({
      path: name,
      data,
      directory: Directory.Cache,
      recursive: true,
    });
    try {
      await Share.share({ title: name, url: res.uri, dialogTitle: name });
    } catch {
      // пользователь закрыл диалог — файл уже в кэше, это не ошибка
    }
    return;
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
