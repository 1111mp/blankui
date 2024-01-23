import { flatten } from "flat";

export function swapColorValues<T extends object>(colors: T) {
  const swappedColors = {};
  const keys = Object.keys(colors);
  const length = keys.length;

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i];
    const key2 = keys[length - 1 - i];

    // @ts-ignore work will be fine
    swappedColors[key1] = colors[key2];
    // @ts-ignore work will be fine
    swappedColors[key2] = colors[key1];
  }
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)];

    // @ts-ignore work will be fine
    swappedColors[middleKey] = colors[middleKey];
  }

  return swappedColors;
}

export function removeDefaultKeys<T extends object>(obj: T) {
  const newObj = {};

  for (const key in obj) {
    if (key.endsWith("-DEFAULT")) {
      // @ts-ignore work will be fine
      newObj[key.replace("-DEFAULT", "")] = obj[key];
      continue;
    }
    // @ts-ignore work will be fine
    newObj[key] = obj[key];
  }

  return newObj;
}

/**
 *
 * Flatten theme object and remove default keys
 *
 * @param obj theme object
 * @returns object with flattened keys
 */
export const flattenThemeObject = <TTarget>(obj: TTarget) => {
  return removeDefaultKeys(
    flatten(obj, {
      safe: true,
      delimiter: "-",
    }) as object,
  );
};
