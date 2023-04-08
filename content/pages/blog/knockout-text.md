---
template: blog
lang: nl
title: Knockout text
subtitle: Effecten op tekst, zoals een verloop (gradient) of een afbeelding
  tonen in de letters
description: Effecten op tekst, zoals een verloop (gradient) of een afbeelding
  tonen in de letters
author: joris_hulsbosch
date: 2018-12-13T14:19:00.000Z
---

'Knockout text' is tekst waarbij het lijkt alsof je door uitgeknipte letters heen kijkt. Dit geeft de mogelijkheid om effecten op tekst toe te passen, zoals een verloop (gradient) of een afbeelding te tonen in de letters.

![Knockout-tekst](blog/text-met-gradient.png)

De truc is de CSS-property `background-clip`, met als value `text`. Je kunt daarbij een `background-image` met een gradient of url toepassen, om het volgende effect te krijgen:

## Browser support

Background-clip wordt in alle moderne browsers ondersteund. Met andere woorden: het werkt niet in IE11. Je krijgt dan dit effect:

![Het resultaat in een browser die het niet ondersteunt](blog/text-met-gradient-ie11.png)

Om de tekst leesbaar te houden, kun je de hele CSS-declaratie in een `@supports` blok stoppen, zodat het effect alleen wordt toegepast wanneer een browser dit ondersteunt:

```css
@supports (background-clip: text) {
  .u-text--gradient {
    display: inline-block;
    background-image: linear-gradient(
      to right,
      #0055a0 0,
      #009de0 50%,
      #78be20 100%
    );
    color: transparent;
    background-clip: text;
  }
}
```

Vergeet niet `display: inline-block;` toe te voegen, anders spreidt de afbeelding of gradient zich uit over de grootte van de container, en heb je kans dat je een groot deel ervan niet ziet als je tekst wat korter is.
