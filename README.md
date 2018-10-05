# icepick-fp

Wrapper around the popular Icepick library providing a FP contract.

## Use

Install using

```sh
npm install @hon2a/icepick-fp
```

Import using

```javascript
import { assocIn, dissocIn/*, ...*/ } from '@hon2a/icepick-fp'
// or individually:
import assocIn from '@hon2a/icepick-fp/assocIn'
```

### Contents

Wrappers are provided just for the most often used Icepick transforms for now:
`assocIn` (and `setIn` alias), `getIn`, `updateIn`, and `merge`. They're enhanced
with `lodash.topath` to accept `String` paths:

```javascript
getIn('a.b[0].c')({ a: { b: [{ c: 42 }] } })
// => 42
```

The `freeze` and `thaw` helpers are also re-exported.
Additionally, there's a `dissocIn` transform (deletes just the leaf property)

```javascript
dissocIn('a.b.c')({ a: { b: { c: 42 } } })
// => { a: { b: {} } }
```

and a generic `reduce` helper

```javascript
reduce(
  (val, idx) => setIn(val, idx),
  {}
)(['a', 'b', 'c'])
// => { a: 1, b: 2, c: 3 }
```

## Development

### Install

Install dependencies using:

```sh
npm install
```

### Develop

After you modify sources, run the following (or set up your IDE to do it for you):

- format the code using `npm run format`
- lint it using `npm run lint`
- test it using `npm test`

and fix the errors, if there are any.

### Publish

Publishing is done in two steps:

1. Create a new version tag and push it to the repository:
    ```sh
    npm version <patch|minor|major>
    git push --follow-tags
    ```
1. Build and publish the new version as a npm package:
    ```sh
    npm publish --access public
    ``` 
