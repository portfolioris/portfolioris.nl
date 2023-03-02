---
template: blog
lang: en
title: By SvelteKit, hello Astro
subtitle: Choosing a more appropriate framework for a website
description: Choosing a more appropriate framework for a website
author: joris_hulsbosch
date: 2023-03-02T09:43:00.922Z
---
I just completed refactoring this website from SvelteKit to Astro. Reading the docs on [Why Astro](https://docs.astro.build/en/concepts/why-astro/) immediately convinced me it's way more appropriate for a website than a full SPA framework.

## Still using NetlifyCMS

I still use NetlifyCMS as a CMS. Nothing has changed about the structure of the CMS: the way the front-end framework extracts the content is almost exactly the same. Astro has nice built-in features for reading a bunch of Markdown files.

## Still using Svelte components

The most astonishing thing is that I didn't need to refactor any of my Svelte components for the actual HTML. Except for what goes into the `<head>`, it's all completely reused and untouched. There is not much interactivity going on, except for the navigation menu on small screens. So that's the only JavaScript needed for the site.

## One catch-all route/page

URLs are generated from file paths and names. This is a lot easier in Astro than SvelteKit. In SvelteKit, I had to glob this manually. Astro has built-in support.