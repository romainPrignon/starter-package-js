# starter-package-js

starter for node module

## Using this repository as a starting point

```sh
git clone https://github.com/romainprignon/starter-package-js.git
cd starter-package-js
```

* rename all occurence of 'starter-package-js' in 'README' and 'package.json'
* remove files from 'src/' and 'test/' directories
* remove or edit 'main.js' file

```sh
rm -rf .git
git init
git remote add origin <repo_url>
npm install
```

## Installation

```sh
npm install git://github.com/romainprignon/starter-package-js.git --save
```

## Usage

### Develop

```js
var starter = require('starter-package-js');
...
```

### Test

```sh
npm run test
```

### Watch

```sh
npm run test:watch
```

### Debug

use debugger; in your code then :
```sh
npm run inspect # in a new tab
npm run test:debug
```
then open [node-inspector](http://127.0.0.1:8080/debug?port=5858)
and handle test using debug cli

### Release

```sh
npm run release
npm run release -- minor # can be patch, minor, major, ...
```
see release-it package for more infos

### Documentation

Take a look at the [documentation table of contents](doc/TOC.md).

### License

The code is available under the [MIT license](LICENSE.md).

## Todo
* [ ] config based on env
* [ ] github release (optionnal)

