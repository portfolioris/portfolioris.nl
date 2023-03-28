---
template: blog
title: On choosing a headless CMS
subtitle: WordPress? Grav? Contentful? NetlifyCMS? CraftCMS?
description: WordPress? Grav? Contentful? NetlifyCMS? CraftCMS?
author: joris_hulsbosch
date: 2019-03-02T14:24:32.308Z
---
## Prerequisites 
I did quite some research for finding a suitable headless CMS for a Gatsby website. This were my most important considerations.

### No programming
I want to be able to set up the CMS, page types and fields without writing code. Putting fields together should be available from the CMS.

### Database, or flat-file based?
NetlifyCMS, Kirby and Grav use Markdown files in a folder structure to contain the content and structure of the pages of your website. You can then use your code repository (or another one) to contain that contents. Each save or update of your content is a commit on your code. This is pretty cool in combination with Gatsby + Netlify, because Netlify watches for changes to your repo, and kicks off the Gatsby build. It also takes away the costs and effort of hosting a database.

### Easy to host
Ideally, I want to be able to run the CMS locally (on MAMP) and publicly accessible - user/password-protected of course. I found that hosting a CMS on Heroku is a great and cheap (free) solution.

### GraphQL endpoint
Gatsby has lots of source plugins available, but I didn’t like the fact that it queries all data once, and never updates the content during development. When setting up the front-end and back-end simultaneously, the gatsby-source-graphql does a nice job, because it refreshes the content every 60 seconds. So ideally, the CMS has it’s own GraphQL endpoint.

### Free to use, free to host
When trying out different CMSes, I didn’t want to pay for it before I decided to actually use it for my website.
Modular content
This was one of the most important ones for me. I love the flexibility of content editors being able to put pages together from different components (or modules, or building blocks).

### Markdown
The CMS should support Markdown. I really don’t like rich text editors that produce a bunch of crappy HTML where I have no control over. It should also be available to add content like inline images with figcaptions, or code examples, of which I control the output, to produce super-clean HTML.

### Fast
Because everything online should be fast. Good user experience is important for CMSes too.

### For me and multiple content editors
A CMS should provide in some way support for different types of users, like an administrator, or a content editor.

## CMSes

### WordPress
I started out with WordPress. The is [a plugin](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) available that can pull content from WordPress into Gatsby and build a GraphQL scheme for you. One major downside is that it will only build a scheme for components that are actually used. If the component is not there, your whole Gatsby build will crash, because it will query non-existing content.

An alternative might be to use [Wp-GraphQL](https://github.com/wp-graphql/wp-graphql), which exposes a GraphQL endpoint directly from WordPress, but it seems very beta at this time of writing.

What’s cool about WordPress though, is that there are many plugins available for all your needs. But after using it for a while, it started to feed that I was rebuilding out-of-the-box plugin functionality into Gatsby, by hand. For all my needs, I got about 15 plugins installed.

Also, WordPress is quite slow. I didn’t try to host it on Heroku.

### NetlifyCMS
This one looks very promising. It’s a SPA consisting of an index.html and cms.js file, that generates a complete CMS. It’s a flat-file based CMS, which means it writes markdown files in a folder structure to generate pages. It hooks onto your content repository, so all content is stored there, version controlled, and can trigger builds.

### Grav
Grav is great. It’s a flat-file, PHP based CMS. It’s super fast, and tons of plugins are available to extend your needs. However, I couldn’t get the filesystem + flat-file content nicely deployed and controlled onto Heroku.

### Contentful
Very popular one. Your content is managed and hosted on their system. I couldn’t find a way to do modular content though. Also, for more than one user, it quickly becomes super-expensive.

### CraftCMS
PHP + Yii framework based. I got the CMS files hosted on Heroku, but I can run it locally on MAMP too. The database (SQL) is hosted as a Heroku add-on called JawsDB Maria, but I don’t even know what that is. I just… works. Really well. I can make post types, but also modular page types extremely easy. It has an internal GraphQL endpoint (a plugin), so connecting to it with Gatsby is really easy. Extending pages with more metadata works really great. It supports live previewing while writing a post (in Markdown), but you need a little bit of Twig template to set that up. Easy enough.

## Last words
Finding a suitable CMS is pretty hard. I think the setup I currently have is pretty nice. I do like to check Grav some more in the future, because I still really like the flat-file structure. I will write a more in-depth article about my setup in the future.
