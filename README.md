# starter-package-js

starter for node module

## using this repository as a starting point

```sh
git clone https://github.com/romainprignon/starter-package-js.git
cd starter-package-js
```

* rename all occurence of 'starter-package-js' in 'README' and 'package.json'
* remove 'lib/prime.js' and 'test/prime.js'

```sh
rm -rf .git
git init
git remote add origin <repo_url>
npm run installhooks
npm install
```

## Installation

```sh
npm install git://github.com/romainprignon/starter-package-js.git --save
```

## Usage

```js
var starter = require('starter-package-js');
...
```

## Test

```sh
npm run test
```

## Documentation

Take a look at the [documentation table of contents](doc/TOC.md).

## License

The code is available under the [MIT license](LICENSE.md).
