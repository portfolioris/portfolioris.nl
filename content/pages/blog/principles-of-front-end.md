---
template: blog
title: Principles of front-end
subtitle: My view on what's important on the job
description: My view on what's important on the job
author: joris_hulsbosch
date: 2020-04-24T13:29:04.185Z
---
I wrote the following article for some new colleagues at *We are you* (WAY), to explain how we work and why we work this way.

## Content first

Content is the most important part of any webpage. Users come to your website for content. This means it should be provided as well-structured HTML. With CSS and JS off, content should still be readable and make sense.

### Accessibility

It’s not an option anymore to deliberately create inaccessible webpages and content. This takes an effort for all team members (to the best of our combined knowledge). Visual designers should be well aware of potential problems and must take color contrast and readability into account.

Regularly audit pages and components using:

-	Axe
-	Firefox’s auditing tools
-	Wave
-	Voiceover of MacOS

These tools can report many of the following, but not all:

-	Well-structured HTML, correct usage of tags and attributes.
-	Correct heading structures.
-	Links for links to pages, buttons for in-page interactions.
-	Aria attributes when needed.

### Progressive enhancement

Webpages start with a well-marked-up document as a foundation that works for any user. In the worst circumstances (i.e. bad screens, bad connections), the main content should still be accessible. From there the CSS and JS should be viewed as an enhancement layer on top of each other. If a modern browser supports a great new feature, you can use it, but basic functionality should still work in older browsers too.

[resilientwebdesign.com](http://resilientwebdesign.com)

### Atomic design

A principle to create cohesive, consistent experiences, speed up workflow, set up a shared vocabulary, easier testing and create a future-friendly environment to modify, extend and improve over time.

[atomicdesign.bradfrost.com](http://atomicdesign.bradfrost.com/)

### Styleguide

By creating and maintaining a styleguide, all team members, including the client, have an overview of all building blocks and components available. Visual designers use it as a reference for colors, typography and UX patterns. Front-end developers can quickly set up new components, test it, and iterate on it. The styleguide can also function as a component library, to quickly find an existing component that fits a content editor’s needs.

### Server-side rendering (SSR)

To make content the most accessible to users, search engines and other systems, content should be served as HTML initially. It is the fastest way of delivery, and this always works, even if CSS, JS or other assets fail to load. Although some crawlers (Google) can execute JS, it is slower, so search index updates are slower. Basic rule is: if it can be rendered on the server, it should render on the server.

### Performance

A website is nothing if users can’t use or even see content. Keep bundles small, use code splitting when available. Preload assets. Don’t use too many webfonts. Use srcset for images. The hyper-modern fiber connection you’re working from (or localhost) does not represent a real-world connection. Assume the worst, and every user will benefit.

[webpagetest.org](https://webpagetest.org/)

### Simplicity

Always think of code as a medium that should explain to other developers how it works and what it does. Codebases often change from teams and people shouldn’t have trouble figuring out what some piece of code exactly does. Apply code comments generously. Don’t be clever by writing as much code on a single line as possible. Split it out, use whitespace to separate logic.

#### About TypeScript and Styled Components et al

Although these methods provide benefits, it puts up huge barriers for inexperienced developers. Many more developers know plain JavaScript (JS) than TypeScript (TS). The same goes for Styled Components instead of (S)CSS. Anyone can learn to write or adjust some CSS or JS by following easy to find guidelines, tutorials or by inspecting some existing code.

## CSS

### SASS

SASS is used to keep the design consistent and code scalable. Don’t create complex loops, mixins or extends. Don’t too much funky reversed nesting. It makes it hard to read and understand the actual output and result. Basically, keep your SASS as close to CSS as possible.

### Supple

Supple is used as a CSS framework. We have been using it for years, so it helps with code consistency across legacy and modern projects. It’s small in size, but powerful as a foundation for scalable code. Supple is the successor of Blocss.

[supple-css.github.io/supple](https://supple-css.github.io/supple)

### ITCSS & BEM

Supple is based on the ITCSS principle. Although there is a little less control over the cascade in React applications, the base layers of styling are still being applied first. In combination with BEM naming conventions, there should be no trouble with cascade or selector issues. It can be compared to Styled Components, but not technologically enforced by any means, just by good discipline.

### CSS Guidelines, Sass Guidelines and stylelint-config-supple

The links below are some great resources about how to write CSS in a structured way. Supple provides a Stylelint config that enforces these rules somewhat.

[cssguidelin.es](https://cssguidelin.es)

[sass-guidelin.es](https://sass-guidelin.es/#too-long-didnt-read)

## The “legacy” stack

Not really legacy, because we still use it in almost all projects. It works really well to easily apply all principles described above.
The major drawback is that the HTML is not shared between the Styleguide and the actual web application. Front-end developers create HTML in the Styleguide using Mustache templates, and back-end developers copy the HTML to Razor Views, the system that is used by the Umbraco application. Subsequent changes need to be made in two places.
This is a little cumbersome but has benefits too. The decoupled system makes it less prone to errors. Both front-end and back-end developers are responsible for their ‘own’ system.
Also, most front-end developers have Apple Macs, which can’t run Umbraco, because that only runs on Windows. You can run a virtual machine with Windows on MacOS, but it’s not ideal. The styleguide runs on any system, without much technical setup to do.

### Patternlab

To create styleguides, we use Patternlab. It’s a Gulp-driven setup to create an interface where you can browse through all components. Changes to HTML, CSS and JS are hot-reloaded, which makes development fast. 

### Mustache

Our Patternlab setup uses Mustache as it’s template engine (the part where you write HTML). It can do simple loops, on/off switches and partial includes. It uses JSON files to fill components with dummy data. It’s that simple on purpose: it only serves as an example what components should look like, without too much logic.

### SASS

Our Patternlab uses SASS to style components. It consists of a single bundle, so no critical CSS or scoped CSS is applied. It’s fast and simple. For medium sized projects like Vesteda, the bundle is only 20kb gzipped.

### JavaScript (JS)

There is no standard setup. In older projects we write all-browser-compatible syntax, and files are concatenated and minified for the web application. The latest version of the setup uses Webpack to transpile modern JS to a modern (modules) and a legacy bundle.

### ConditionerJS

Only used in the HAS Hogeschool project. It is a nice way to conditionally load parts of JavaScript, and not load one big bundle of JS anymore.

[github.com/rikschennink/conditioner](https://github.com/rikschennink/conditioner)

### Gulp

Our Patternlab setup is powered by Gulp. A single npm command runs a hot-reloading local development server. Another one outputs bundled, minified CSS and JS and an svg sprite, all to be used by the Umbraco application. It runs on any system. We can automatically deploy and serve it on Netlify, so the whole team can see and use to styleguide. 

[HAS styleguide](https://has-hogeschool-styleguide.netlify.com)

## The modern (JAM) stack

The modern stack we are planning to use it a headless Umbraco setup with a Gatsby-powered front-end. We have some experience in these setups, with good results. The presentation from Phil Hawksworth provides a great explanation of the benefits of a JAM stack setup.

[youtube.com/watch?v=XOYtS91QWQI](https://youtube.com/watch?v=XOYtS91QWQI)

### Umbraco headless

Not much experience here. Jesse van der Pluijm (trainee at WAY Den Bosch) has done great research on this subject and create a working prototype. No projects have been executed using this yet.

### Gatsby and React

Gatsby does most of the principles described above out of the box. We choose Gatsby over similar frameworks like Gridsome, NextJS, NuxtJS or Sapper, because many developers at WAY have experience in React. Gatsby/React also has the biggest online community, which makes it easier to get help from there. Gatsby also runs on any machine, as long as an Umbraco data endpoint is available.

Although this stack opens up possibilities to add new techniques like Styled Components, TypeScript, Redux, etc., we still like to keep things simple and understandable for other developers. Not everyone is experienced in these advanced techniques. We want to keep the codebase accessible for any developer.

### Storybook

Storybook is the React (or similar) way of creating styleguides and/or component libraries. We have good experience with Storybook for smaller and bigger projects. Most modern Sitecore projects use React as a templating engine instead of Razor now. It runs on any machine.
The major drawback is that it runs only on client-side JS, so you can’t fully test your components with slow connections where JS or other assets might fail to load.

## Also

### Browser support

A couple of years ago we agreed to support the latest two versions of any browser. In modern webdesign, this becomes harder if you keep supporting Internet Explorer 11 (IE11) and IE10, legacy Edge, etc.

As Jeremy Keith describes really well in ‘Resilient Webdesign’, you should assess with the team and the client what browsers you support. Support means in this case: the basic functionality works on any browser. You shouldn’t blindly not support Internet Explorer 11, just because it’s difficult to support it. In the legacy stack, transpiling has been set up, so you can write modern JS. For older browsers (which don’t support modules) a legacy bundle is generated.
CSS Grid can be used in combination with autoprefixer, as long as you know how to write compatible code. CSS Custom Properties can be used when necessary. Use it as a progressive enhancement.

### SVG and icons

For icons and other vector based graphics we have a setup (in the legacy stack) which bundles SVGs into a symbol sprite. Use it instead of icon fonts, and for decoration only. Always provide textual labels to explain icons.

## Research to do

-	Usage of WYSIWYG Markdown in Umbraco
-	Offline support with Service Workers
