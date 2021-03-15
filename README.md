# Praefix
A small utility to get the prefix vendor function if needed.

## Technologies

- typescript
- jasmine

## Sources

- https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix

## install

npm install @jstiller/praefix

## How to use

```ts
import getVendorFunction from praefix

const requestAnimationFrameFunction = getVendorFunction("requestAnimationFrame", window);
```

it's equal to the following

```ts
const requestAnimationFrameFunction = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame;
```