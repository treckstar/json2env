# Json2Env

This package converts a `Json` file to a `.env` file.

## Installation

To install the package, run the following command:

```bash
npm i @treckstar/json2env --save-dev
```

```bash
yarn add @treckstar/json2env --dev
```

```bash
pnpm add @treckstar/json2env -D
```

## Usage

To convert a `Json` file to a `.env` file, use the `Json2Env` function:

```javascript
const { Json2Env } = require('@treckstar/json2env');

const options = {
  inputFilename: 'env.development.json',
  outputFilename: '.env',
};

Json2Env(options);
```

**The Json2Env function takes an `options` object with the following properties:**

- inputFilename (`string`): The name of the input file.
- outputFilename (`string`): The name of the output file.

Provide the appropriate values for these properties based on your file paths and names.

## License

This package is released under the MIT License.
