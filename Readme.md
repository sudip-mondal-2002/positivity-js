# positivity-js

This npm package tells you if the package is in a positive or negative state. Can be used to classify reviews automatically.

## Installation

```cmd
npm install positivity-js
```

or

```cmd
yarn add positivity-js
```

## Usage

```sh
const positivity = require('positivity-js');
positivity.predictSentence('This is a good package').then(result => {
    // Your code here
    // Result is a boolean
}).catch(err => {
    // Your code here
});
```
