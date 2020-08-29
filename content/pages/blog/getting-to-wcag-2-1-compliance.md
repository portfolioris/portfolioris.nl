---
template: blog
title: Getting to WCAG 2.1 compliance
subtitle: The journey to make websites the most accessible
description: The journey to make websites the most accessible
author: joris_hulsbosch
date: 2020-06-12T13:30:42.762Z
---
## What?
WCAG. It stands for Web Content Accessibility Guidelines. It’s definition:

> "WCAG 2.1 covers a wide range of recommendations for making Web content more accessible. Following these guidelines will make content more accessible to a wider range of people with disabilities. […] Following these guidelines will also often make Web content more usable to users in general.”

The level of conformance are described as A (lowest), AA, and AAA (highest). More and more people realize this is important, and for government websites required. But it’s a little bit hard to understand what should be done to get there.

## Why?

Making websites is providing information. This information should be available and accessible to everyone. You don't need to know everything about accessibility, but we can all learn something about it, and make the Web a little better. Don't assume disabled people won't use your website. In fact, my opinion is: **if you deliberately build websites in an inaccessible way, you are discriminating people**. If you say, “well, _our_ customers don’t have low vision”, you are excluding people from using your product. That’s not even unethical, but also unlawful. Because, well, we have a law for that: the [Law for Equal Treatment](https://wetten.overheid.nl/BWBR0006502/2015-07-01).

My goal is to make more people understand how to structure web content and make it available to the biggest audience possible. Every visitor, disabled in any way or not, is a potential customer.

## Structure and meaning

I think the WCAG document is hard to read. It doesn’t describe how to write HTML, where to add aria attributes, or anything like that.

I like to think of accessible websites in the following way: everything you put on a page should have meaning. For example: just because some text is bigger than a paragraph, it doesn’t mean it’s a heading. It might, for people with good vision. They are conditioned to derive this visual hierarchy from what they see. But for lots of users, it doesn’t. That’s why you make it a heading – in other words an `<h1>` element. Boom. Everyone understands what you mean now. The heading describes the content below it. It also comes with a bonus side-effect: your browser already makes it a little bigger than a regular paragraph.

![A heading looks like a heading by default, without any css](/blog/Pasted_Graphic.png)

It gets harder for more complex interfaces though. It takes a fair amount of knowledge of HTML to explain the content on the page. Navigation, lists, links, landmarks, main content, secondary content. You need to explain the state of interactive things, like menu’s, buttons, expanding panels, forms and modals.

I a series of blog posts, I will dive deeper into some subjects. I really like to help you to build better websites. If I can make you change one thing today in the way you code, it’s already an improvement!
