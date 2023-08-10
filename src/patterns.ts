import type { ParseShape } from './types';

export const squareBracketsPattern: ParseShape = {
  pattern: /\[(.*?)\]/,
  renderText: (matchingString: string) =>
    matchingString.replace(/\[/g, '').replace(/]/g, ''),
};

export const curlyBracketsPattern: ParseShape = {
  pattern: /\{(.*?)\}/,
  renderText: (matchingString: string) =>
    matchingString.replace(/\{/g, '').replace(/}/g, ''),
};
