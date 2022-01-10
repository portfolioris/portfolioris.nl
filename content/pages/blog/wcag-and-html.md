---
template: blog
title: WCAG and HTML
subtitle: Part 1 of ‘Getting to WCAG 2.1 compliance’
description: Some subjects about good semantics and HTML structure. Before
  adding CSS and interaction via JS to a webpage.
author: joris_hulsbosch
date: 2020-11-10T14:40:43.008Z
---
In this post I will touch on some subjects about good semantics and HTML structure. Before adding CSS and interaction via JS to a webpage.

## Text, text, text

Text is good! Explain what you mean with text. Text has lots of benefits over other things. Text is almost always easier to understand than any icon, shape or other abstract representation. Text is the only thing you can really optimize for search engines. You can copy-paste it into any other application. You can enlarge it. It’s fast. Text is also:

### Translatable

Text is easily translatable. You can make your browser automatically translate whole webpages. It may not be perfect, but it gets you there 80% of the way. This saves you the enormous amount of effort of making a multilingual website.

### User decides speed of content consumption

Lots of people don’t have good reading skills. Unlike with video, audio or animated things, the user decides the tempo the content is consumed in. Just as fast as they want.

## Lists

A list is not always some lines of text with bullets of hyphens before it. Also, lines of text with minus signs before is not a real list, so use a `<ul>` element. This connects the items together: you are describing that they belong together. A screen reader announces how many items are in that list, so the user can expect how many items there are to come.

Any enumeration of things is a list. That includes mostly horizontal lists too:

-	Menu items
-	An overview of articles
-	Breadcrumbs. This is an ordered list, so use an `<ol>` element.

## Buttons and links

Links and buttons are great. They have a bunch of accessibility features by default. Users of assistive technology can easily identify them, as long as you always provide a textual label inside the element. Just an icon or a title attribute is not sufficient.

There are only 2 main rules for links and buttons:

-	A link leads to another webpage, or another section of the same page.
-	A button submits a form or triggers an in-page interaction.

An in-depth overview of the differences can be found in this article: https://css-tricks.com/a-complete-guide-to-links-and-buttons/

### Links

“Links are one of the most basic, yet deeply fundamental and foundational building blocks of the web.” A link without an `href` attribute, an empty href attribute (`<a href>`) or an href attribute of `#` (`<a href=”#”>`) is never a valid link.

A link can also lead to another section on the same webpage. A table of contents is a great way to explain to users what can be found on the page.

You can also make links to other pages and also provide an anchor, but I find this a bit jarring and confusing for users. If content is that import to directly link to, just put it on the top of a new page. It’s free, you know.

### Buttons to submit forms

Use `<input type=”submit” value=”submit” />` or `<button type=”submit”>Submit</button>`. Explain in text what the action for pressing the button does.

Read more about what I think makes up a good form. (link blog)

### Buttons for in-page interaction

For anything else that should trigger something in the page, use `<button type=”button”>`, and add an onClick handler / eventListener to it. This way it can be focused and activated by all ways of controlling a browser: mouse, enter key, screen reader commands, etc.

Never ever add click handlers / event listeners to other elements. It’s never accessible, unless you add a bunch of extra HTML and JS to it. So why bother, when you can get that all for free? If you’re having trouble undoing to browser’s default styles, you can use this code to reset it to default text. Don’t forget to make it look like a button though!

```css
.o-button-clean {
  padding: 0;
  appearance: none;
  border: none;
  background-color: transparent;
  font: inherit;
  color: currentColor;
}
```

## Aria attributes

More on that later.
