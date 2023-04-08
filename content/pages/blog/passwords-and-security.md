---
template: blog
lang: en
title: Passwords and security
subtitle: How safe is your stuff?
description: I upped the security of my own data. Here is how I did it, and how
  you can do it too.
author: joris_hulsbosch
date: 2015-09-17T13:51:41.807Z
---

A while ago, there was a big fuss about the security of iCloud and other cloud hosting services. A lot of private data (from some celebrities, I’m sure you remember the pictures) was leaked onto the Internet. Not that I have those kind of pictures, let alone saved to some cloud storage, but out of curiosity, I decided to up the security of my own data. Here is how I did it, and how you can do it too.

First of all, there are some rules about passwords, which you probably already know, but never really taken into account:

- Remember you password, don’t write it down;
- Make it difficult or impossible for others to guess;
- Don’t use words in the dictionary, names, or any other very common phrase;
- Do not use the same password for every online service you use;
  etc.

So how do you remember 20 different difficult passwords? You don’t.

## Use a password manager

I let software remember my passwords. I researched some applications by a couple of requirements:

- Be very safe by itself (strong encryption);
- Passwords should not be saved in a cloud storage service;
- Cross platform accessible (on my computers, and on my iPhone).

I decided to use KeePass[\*](#note) for Windows. On MacOS, I have KeePassX, and on iPhone MiniKeePass. It all works with the same password file, let’s say passwords.kdbx. This file contains a password database, and is encrypted with one main password. So, I need to remember only a single password. I have chosen a very strong one: no words, but uppercase and lowercase letters, numbers and some punctuation marks.

KeePass let’s you create records of your (online) accounts. There are fields for username, passwords, an URL and some extra remarks. Using this is pretty easy: you double-click a record, the password is saved to your clipboard for 15 seconds, and you paste it in the password field in a website or application.

## Super strong passwords

What I really like about KeePass, is that it has a password generator. You can choose what kind of characters it may use. If you select all options, it generates a password like this:

Y%K\*mw`KDPu<W5d7hdq(

I certainly can’t remember this, you? But I don’t need to. I even never actually see the password: I just copy-paste them. So no one who looks at my screen, or looks at the keystrokes I make, or a keylogger can ever see my password too.

## Cross platform

So to use this on all my computers and devices, I need to transfer and sync the passwords.kdbx file. For this, I use BitTorrent Sync. It’s a free service, which allows you to sync a chosen folder across your authorised computers, peer2peer, so no cloud storage. Throw the file in there, and you always have the latest version everywhere. Added a new record? Save the database, and it immediately syncs the database file. One downside: this does not really work on iOS because of it’s closed file system, so you have to grab the file in the BitTorrent Sync app, and open it in MiniKeePass.

## Downsides

This all seems like a lot of work, and it has some other downsides too. But I got over that, so you can too.

What about computers where I don’t have access to my password database? I can’t open my Gmail or Facebook[\*](#note) there. But do I really want that? I take good care of my own devices, so I’m pretty sure they are safe. But are other computers safe? The one of your co-worker, the one in an Internet cafe? Someone else’s phone? You don’t know, so, just don’t open your stuff there. In practice, I’ve never even had the need to.

One single password seems unsafe too. Yes, it grants access to all my online accounts. So, keep it very safe. You can set KeePass to lock itself after a couple of minutes of inactivity, and you should. Also, make sure no-one looks at your keystrokes when you type your main password. Keep this in mind, and you’ll be fine.

## In a corporation

So how would we manage accounts that are shared with your co-workers? You probably have a lot of sensitive information stored in all kinds of places: FTP, databases, CMSes, and also paid subscriptions to Adobe IDs, etc.

How can you and all co-workers keep things safe? I’m still not sure about that. We could keep a password database file on the central server. Also, in KeePass, there is an option to require a security key (a file) for opening a database file. We could give everyone a personal USB-stick with the key on it, which they have to keep with them.

## Note

Since I've written this article, I've switched to 1Password. I also don't use Gmail and Facebook anymore.
