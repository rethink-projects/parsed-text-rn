# parsed-text-rn

React Native library to style texts based on parse patterns provided. We created this library based on [react-native-parsed-text](https://github.com/taskrabbit/react-native-parsed-text) since it's owner doesn't seem to be updating it anymore. Feel free to improve the code sending pull requests or issues.

## Installation

```sh
npm install parsed-text-rn
```

## Usage

```js
import { ParsedText, squareBracketsPattern } from 'parsed-text-rn';

// Feel free to use our own parse patterns, like the curlyBracketsPattern and squareBracketsPattern or create your own. Check the source code for those patterns and use regular expressions to achieve the desired result.

<ParsedText
  parse={[
    {
      ...squareBracketsPattern,
      style: {
        fontWeight: '700',
      },
    },
  ]}
>
  {boldText}
</ParsedText>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
