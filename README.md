# Praefix

A small utility to get the prefixed vendor function if needed.

![GitHub](https://img.shields.io/github/license/jstiller/praefix?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/jstiller/praefix?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/jstiller/praefix?style=for-the-badge)

## Sources

If you wan to get more information about vendor prefixes, look up [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix).

## Install

```shell
npm install @jstiller/praefix
```

## Usage

```ts
import praefix from "praefix"

const requestAnimationFrameFunction = praefix("requestAnimationFrame", window);
```

it's equal to the following

```ts
const requestAnimationFrameFunction = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame;
```
