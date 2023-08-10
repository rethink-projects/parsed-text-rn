import React from 'react';
import { StyleSheet, View } from 'react-native';

import ParsedText from 'parsed-text-rn';

export default function App() {
  const text = 'Hello world!';
  const boldText = '[Hello world!]';

  return (
    <View style={styles.container}>
      <ParsedText>{text}</ParsedText>
      <ParsedText
        parse={[
          {
            pattern: /\[(.*?)\]/,
            renderText: (matchingString: string) =>
              matchingString.replace(/\[/g, '').replace(/]/g, ''),
            style: styles.boldText,
          },
        ]}
      >
        {boldText}
      </ParsedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  boldText: {
    fontWeight: '700',
  },
});
