import en from './en.json';
import ja from './ja.json';
import zh from './zh.json';

const lang: string = localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';

export const t = (keyPath: string) => {
  switch (lang) {
    case 'en':
    default:
      return getDeepValueOfObject(en, keyPath);

    case 'ja':
      return getDeepValueOfObject(ja, keyPath);

    case 'zh':
      return getDeepValueOfObject(zh, keyPath);
  }
};

/**
 * 获取对象深层值。
 * @method getDeepValueOfObject
 * @param {object|array} object
 * @param {string} keyPath
 * @param {any} [defaultValue]
 * @return {any}
 */
function getDeepValueOfObject<T>(object: Record<string, any>, keyPath: string, defaultValue?: T): T | any {
  const isString: boolean = typeof keyPath === 'string';
  if (!isString) {
    console.warn('[getDeepValueOfObject warn]: keyPath is not a string, type ' + typeof keyPath);
  }

  if (object && keyPath && isString) {
    const keys: string[] = keyPath.split('.');
    let value: any = object;
    for (let index: number = 0; index < keys.length; index++) {
      const key: string = keys[index];
      if (value[key] !== undefined) {
        value = value[key];
      } else {
        value = defaultValue;
      }
    }
    return value;
  } else {
    return defaultValue;
  }
}
