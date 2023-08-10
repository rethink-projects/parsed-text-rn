import React, { useRef } from 'react';
import { Text } from 'react-native';
import type { TextProps } from 'react-native';
import { textExtractionHelper } from './textExtractionHelper';
import type { ParseShape } from './types';
import { PATTERNS } from './constants';

interface ParsedTextProps extends TextProps {
  parse?: ParseShape[];
  childrenProps?: TextProps;
}

const ParsedText: React.FC<ParsedTextProps> = ({
  parse = [],
  childrenProps = [],
  style,
  children,
  ...rest
}) => {
  const textRef = useRef<Text>(null);

  const getPatterns = () => {
    return parse.map((option) => {
      const { type, ...patternOption } = option;
      if (type) {
        if (!PATTERNS[type]) {
          throw new Error(`${option.type} is not a supported type`);
        }
        patternOption.pattern = PATTERNS[type];
      }

      return patternOption;
    });
  };

  const renderParsedText = () => {
    if (!parse || typeof children !== 'string') {
      return children;
    }

    const textExtraction = textExtractionHelper({
      text: children,
      patterns: getPatterns(),
    });

    return textExtraction?.parse().map((props, index) => {
      const { style: parentStyle, ...extractionRest } = props;

      return (
        <Text
          key={`parsedText-${index}`}
          style={[parentStyle, style]}
          {...childrenProps}
          {...extractionRest}
        />
      );
    });
  };

  return (
    <Text ref={textRef} style={style} {...rest}>
      {renderParsedText()}
    </Text>
  );
};

export default ParsedText;
