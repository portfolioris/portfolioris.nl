---
template: blog
title: Browsers & Design Systems
subtitle: A transcript of my presentation at We are you
description: A transcript of my presentation at We are you
author: joris_hulsbosch
date: 2019-04-30T13:26:58.191Z
---
I gave an internal presentation at We are you called Browsers & Design Systems. Here is a transcript of what I presented. You can view [the slides on Notist](https://noti.st/portfolioris/RZbJM6).

## Browsers

I started by showing this picture and asked if anyone knew who this man is.

![Tim Berners-Lee and the first browser (source: home.cern)](/blog/TBL.jpg)

This is Sir Tim Berners-Lee. it’s the man who invented the World Wide Web: HTML, and the first browser.

I showed [the first webpage in the first browser](https://worldwideweb.cern.ch/browser/#http://info.cern.ch/hypertext/WWW/TheProject.html). You can still view [the first webpage](http://info.cern.ch/hypertext/WWW/TheProject.html) in your own current browser. It still works.

The first version of HTML consisted of 21 HTML tags: `<title>`, `<p>`, `<ul>`, `<h1>`, `<a>` and `<nextid>`. Many of them are still in use, and work perfectly. Some don’t work, like `<nextid>`. But browsers are smart and ignore tags they don’t understand.

You can view [a modern webpage in the first browser](https://worldwideweb.cern.ch/browser/#https://www.weareyou.com/en), which also still works. Kind of. Which is pretty cool.

### Controlling the Web

![This is not the only way we use the Web anymore (source: atomicdesign.bradfrost.com)](/blog/this-is-the-web-1.png)

We browsed these webpages with a mouse and a keyboard, because this was the only way you could. We viewed them on desktop computers. But computers, screens and the Web improved, and an unlimited amount of different screen sizes appeared. There are mobile devices with touch screens and high resolution, and wall-sized screens, and everything in between. The way we browsed the Internet changed drastically.

![This is how we use the web today (source: atomicdesign.bradfrost.com)](/blog/this-is-the-web-2.png)

### The future of the Web

In the future, even more devices will exist where we can browse the Web on. TVs with remotes, game controllers or maybe even virtual reality devices. The future of the Web is unknown, and we don’t know what devices will exist in 2, 5 or 10 years. There definitely will be more devices we use the Web on, with different screens and new ways to control them.

![This is how we will be using the web (source: atomicdesign.bradfrost.com)](/blog/this-is-the-web-3.png)

### People

Because the Web is intended to be accessible an inclusive to anyone, the Web becomes a medium available to any kind of user. People with different wishes and demands. People who differ in linguistic and cognitive capabilities, or motor functions. Their eyesight may not be 100%. They may be in a hurry, they will have different preferences and browser functionality available, and their connection may not always be at high speeds. The landscape of the Web is enormous now.

### We are important

The Web is big, so there is a lot to keep in mind. The design should – of course – be fantastic. We should also embrace the ubiquity of the Web: there is an unlimited number of devices, features, and users. Components should be flexible, to work on any type of screen. We need to think about performance and respect the user and his available time. We should apply progressive enhancement by creating a base layer that works for everyone and enhance the experience when the device or browser allows us to. We should build future-friendly components, because the future is unknown, but we can assume some things will still work the same way in a couple of years.

## We design systems

To cover all these aspect, we should create design systems.

### A consistent experience

By creating cohesive, consistent experiences, our users will understand the user interface faster, which will build trust and result in more conversion.

Also, we can show other parties what the system looks like and how it works.

![You want to prevent this (source: atomicdesign.bradfrost.com)](/blog/pnc-buttons.png)

And do this:

![Consistent button variations](/blog/button-variations.png)

For example, we provided access to the Design System to the 3rd party that built the [meter reading application for Dunea](https://dunea.pti.nl/web/). They knew immediately what it should look like and how it should work.

### Common vocabulary

By creating a centralized component library, everybody involved knows what we are talking about when we mention the “hero” or the “paragraph block”. This saves unnecessary discussion and confusion and makes room for getting work done.

### Speed up the workflow

Creating reusable building blocks takes time and effort in the beginning but saves a lot of time in the future. You don’t need to reinvent the wheel, but you put together existing components to quickly create new features.

### Speed up testing

When you have a Design System, you can quickly create testing environments, where you can do cross browser and cross device testing. You also know exactly what component has a big performance impact, and you can easily test the accessibility of components.

For example, the “hero” component for Vesteda has a [couple of variations](http://www.designzo.nl/vesteda/styleguide/?p=viewall-organisms-hero) in layout for the home, landing and subpages. It has a complex layout, which needs to work well on all screen sizes and browsers.

### Future proof

Design Systems make your site more future proof. It will be easy to make adjustments, which will be applied consistently everywhere. You can apply results from A/B tests quickly, or do a rebranding. For example, we rebranded the [Schouten & Nelissen website](https://www.sn.nl/), by replacing the typography and color palette.

## We work together

To do this well, we need each other. Too often, the waterfall method is applied to projects, where the ux designer and visual designer to all the work before developers start.

![All disciplines should be working together (source: atomicdesign.bradfrost.com)](/blog/waterfall-2.png)

We should create living Design Systems. Something that belongs to us all. We need to work together from the beginning to the end. This way, we can create better things, in less amount of time.