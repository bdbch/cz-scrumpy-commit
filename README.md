# `cz-scrumpy-commit`

> A commitizen adapter for [Scrumpy.io](https://scrumpy.io/)

![cz-scrumpy-commit in Action](/.github/demo.jpg)

# Installation

Make sure you have [Commitzen](https://github.com/commitizen/cz-cli) installed to use `cz-scrumpy-commit`. This package uses ES6 which requires **Node 6 or higher**.

You can install `cz-scrumpy-commit` via 

```sh
npm i -g cz-scrumpy-commit
```

When npm finished the installation, you need to run the following command to add `cz-scrumpy-commit` to your commitizen configuration.

```sh
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

You can also use commitizen to initialize with this package like this:

```sh
commitizen init cz-scrumpy-commit
```

Now you can just run commitizen

```
git add .
git cz
```

Have fun!