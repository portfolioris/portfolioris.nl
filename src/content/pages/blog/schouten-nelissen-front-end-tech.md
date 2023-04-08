---
template: blog
lang: en
title: Schouten & Nelissen front-end tech
subtitle: Modern methodologies and features for a fast user experience
description: Modern methodologies and features for a fast user experience
author: joris_hulsbosch
date: 2020-10-08T13:42:59.695Z
---

Update September 22nd 2021: I've held a presentation about this in the front-end guild meeting at _We are you_. You can [view the slides of this presentation on Notist](https://noti.st/portfolioris/pyYftI/schouten-nelissen-front-end-methodes-technieken).

Recently, me and my team at _We are you_ launched the new website for _Schouten & Nelissen_. I am proud of the result and we get a lot of good remarks about the new site. I also hear people say that it’s really fast. While the back-end developers focused on the server’s response times, I’ve put a lot of effort in the front-end stack and methods, which contributes greatly to the overall speed.

## Components and a styleguide

Used: Atomic Design, Razor, Styleguide, Pattern Lab, Mustache

We use the Atomic Design approach to make small components reusable. This adds to the consistency, but also reuse of code. This way, we can build new things pretty fast, without add much new code for everything.

Development mostly starts in a local development environment, which runs Pattern Lab with Mustache template files. HTML structures are copied over into Razor view files, with the same atoms-molecules-organisms hierarchy.

## CSS

Used: SCSS, ITCSS, BEM, SuppleCSS, Dart-sass, Cssnano

I use SCSS, with ITCSS and BEM methodology. Combined with the [Supple CSS](https://github.com/supple-kit/supple-css) framework, it results in a 16KB gzipped CSS bundle. Smaller than a thumbnail image.

## JS

Used: Webpack, ConditionerJS, plain JS classes, Vue, split transpiling, Airbnb eslint

[ConditionerJS](https://github.com/rikschennink/conditioner/) allows for some nice things to happen. It results in a very small base bundle, which hydrates the page and downloads only the scripts needed for that page. Sometimes even only if that component comes into view. Code is transpiled into ES6 modules for modern browsers, which allow for smaller files and faster execution. Older browsers get code that is transpiled to ES5.

For more complex interaction, we use Vue in a class. We don’t use Vue templates, but the script hydrates the server-side rendered HTML.

## Images

Used: lazy loading, srcset, WebP

I now use the modern native way of lazy loading images, with `<img loading=”lazy”>` attribute. Back-end developers added support – if the browser supports it – for serving WebP images: a modern format for smaller file sizes.

## More nice tools

- 1 SVG sprite for all icons
- Gulp, to spin all of the above up in a hot-reloading local development server
- 1 variable font, multiple-file fallback
- My first use of the `inert` attribute
- Custom form validation, modals, tabs
- [SwiperJS](https://swiperjs.com/) for carousels

## Todo’s

- No HTTP/2: current hosting solution doesn’t support it

I hope you like this stack. We have an open-source scaffolding tool to setup all this tooling, so you can start using it right away in your project: [Pattern Lab Starterkit](https://github.com/weareyou/generator-patternlab-starterkit/)

Check out the new Schouten & Nelissen website: [www.sn.nl](https://www.sn.nl)
