import type { TextProps } from 'react-native';

export type KnownParsePattern = 'url' | 'phone' | 'email';

export type ParseShape = {
  type?: KnownParsePattern;
  pattern: RegExp;
  nonExhaustiveMaxMatchCount?: number;
  renderText?: (matchingString: string, matches: string[]) => string;
  onPress?: () => void;
  onLongPress?: () => void;
} & TextProps;
