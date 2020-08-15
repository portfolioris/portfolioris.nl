---
template: blog
title: Internet Explorer and Progressive Enhancement
subtitle: Not all browsers are created equal
description: Not all browsers are created equal
author: Joris Hulsbosch
date: 2019-04-11T13:25:54.109Z
---
Firefox, Chrome and Safari are modern browsers, that keep themselves up-to-date automatically. Microsoft’s Internet Explorer, however, is a strongly outdated browser (from 2013) and is never updated. New HTML tags or CSS features will never work. Microsoft has created the Edge browser, and recommends using this, because they are actively improving and updating it. They even recommend to [stop using Internet Explorer]( https://www.theverge.com/2019/2/8/18216767/microsoft-internet-explorer-warning-compatibility-solution).

You can imagine web design and development in 2013 was different from now: people didn’t design and develop layouts that were just not possible. Modern web design requires modern features, which are hard or impossible to achieve in Internet Explorer. Unless we put an enormous amount of time, effort and code into building and maintaining it. The big disadvantage for users of modern browsers is that we’re sending them a lot more code, which even does a worse job than their browsers potentially could.

Take for example a sticky search bar: it ‘sticks’ to the top of your screen when it touches the top of your browser’s viewport. Before, these kinds of things needed to be done with some tricks:

-	Calculate how far the user has scrolled, continuously
-	When the search bar touches the top of the viewport, pull it out of the natural flow of the page
-	Stick it to the top of the viewport
-	Because of this, the whole page will shift up. So, you need an extra trick to fill up that space.

Also, continuously requesting the scroll position is a computationally intensive task (every millisecond a calculation needs to be made), which will make the scrolling not go smooth anymore.

Nowadays, modern browsers have the possibility to do this ‘natively’, without requirement of the calculations:

```css
.sticky-search-bar {
  position: sticky;
  top: 0;
}
```

That’s it. That saves us a lot of work, and performance. But this code didn’t exist or work in 2013. That is why this doesn’t work in Internet Explorer. Does it break? No. Browsers simply ignore rules they don’t understand, and the search bar will just not stick to the viewport. Is that bad? Internet Explorer users aren’t aware that something is missing for them. Everything is still working: everybody can use the search bar. And in modern browsers, it works a little bit better.

This is called Progressive Enhancement. We build a robust base that works for everyone. And if the browser supports it, the user’s experience improves.