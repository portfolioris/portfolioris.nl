---
title: CSS Shapes
subtitle: blokjes tekst hoeven niet altijd recht meer te zijn
description: Sinds jaren bestaan tekstvlakken in webpagina-layouts uit
  rechthoeken. CSS Shapes geven de mogelijkheid daar ook van af te wijken.
author: joris_hulsbosch
date: 2018-10-29T19:34:00.000Z
template: blog
---

Sinds jaren bestaan tekstvlakken in webpagina-layouts uit rechthoeken. CSS
Shapes geven de mogelijkheid daar ook van af te wijken. Dorel — een klant van
Colours — kwam met de vraag het volgende ontwerp te realiseren.

![Quinny mockup component](blog/ZappXWebsiteMockups.png "Quinny mockup component")

Daarbij hadden ze de volgende wensen:

- De tekst is aanpasbaar per regel;
- Er kunnen 3, 4, 5 of 6 regels tekst worden geplaatst;
- De tekstgrootte is per regel instelbaar;
- Per regel kan worden ingesteld of de text regular of bold moet zijn;
- De tekst is verticaal gecentreerd;
- De tekst loopt diagonaal langs de visual;
- De regelafstand moet altijd ‘kloppen’;
- De visual moet gecentreerd in zijn vlak staan.

En daarbij komen natuurlijk onze Colours Front-end Regels®:

- Geen layouts maken met JavaScript. [Waarom](https://kryogenix.org/code/browser/everyonehasjs.html)?
- Fluid: Het component moet ‘meegroeien’ met de hoeveelheid content die er in geplaatst wordt;
- Responsive: het moet er goed uit zien, ongeacht welke schermgrootte;
- Robuust: de functionaliteit moet werken in alle browsers, ook als deze bepaalde techniek (nog) niet ondersteunt of wanneer er erg veel content geplaatst wordt. Denk bijvoorbeeld aan erg lange woorden in het Frans of Duits.

## De start-layout

Ik begin met twee kolommen, 33% /  67% verdeling, en wat tekstuitlijning. Om te testen plaats ik er expres erg verschillende font-groottes in, om te checken of de regelafstand zo blijft kloppen.

![De start-layout](blog/start-layout.png)

## De diagonale uitsnede

Om de diagonale uitsnede te maken wil ik een driehoek over de afbeelding plaatsen. Ik dacht dit met een [CSS triangle](https://css-tricks.com/examples/ShapesOfCSS/) te kunnen maken, maar de driehoek moet 100% hoogte van de container innemen, en de containerhoogte is variabel. En je kunt geen percentage op een border-width zetten. Een no-go dus.

```css
.shape {
width: 0;
height: 0;
border-bottom: 100% solid white; /* Dit kan dus niet… */
border-right: 100px solid transparent;
}
```

## SVG in CSS

De oplossing is een SVG van een driehoek, en die als `background-image` de grootte van een pseudo-element laten beslaan. En ik wil niet een extern svg-bestand hoeven aanroepen—dit kost een extra request naar de server, maar de SVG-padinformatie opnemen in de CSS.

De beste manier om dit cross-browser werkend te krijgen is de SVG te transformeren naar een base64-encoded string:

```css
.shape {
height: 100%;
width: 150px;
background-image: url("data:image/svg+xml;base64,PHN2ZyB3etcetera…");
background-size: 100% 100%;
}
```

![Een driehoek gemaakt van een svg](blog/pasted-image-15.png "Een driehoek gemaakt van een svg")

## Text diagonaal uitlijnen

Nu zou ik met CSS iedere tekstregel een stukje kunnen opschuiven, maar dat maakt het onmogelijk om de regelafstanden en diagonale uitlijning altijd te laten kloppen met verschillende tekstgroottes. Een tijdje geleden stuitte ik op de [mogelijkheid voor CSS shapes](https://alistapart.com/article/css-shapes-101). Hiermee kun je tekst rondom ‘vormen’ heen laten lopen. Dit heb ik toegepast op een pseudo-element.

![Het pseudo-element. Zie de ‘shape-outside’ property: een polygoon die een driehoek beschrijft.](blog/pasted-image-17.png "Het pseudo-element. Zie de ‘shape-outside’ property: een polygoon die een driehoek beschrijft.")

Het enige nadeel is dat het element moet floaten, en dat de tekst ernaast een inline element moet zijn. Dat heeft als gevolg dat ik geen Flexbox kan gebruiken om de CTA onderaan te plaatsen en de tekst over de rest van de ruimte verticaal te centreren. Verticaal centreren op de ‘oude’ manier kan het gelukkig nog steeds:

```css
.shape {
position: relative;
top: 50%;
transform: translateY(-50%);
}
```

## Het resultaat

Met wat smokkelen met negatieve marges is het uiteindelijk gelukt.

![Het eindresultaat](blog/pasted-image-19.png "Het eindresultaat")

## Browser-support

CSS Shapes wordt niet ondersteund in IE en Edge. In de webstatistieken van deze klant heb ik opgezocht hoe groot het gebruik van deze browsers is op hun website. Het blijkt dat meer dan 90% van de bezoekers een browser gebruikt die dit ondersteund. En de rest? Geen paniek: in Edge en IE staat de tekst gewoon recht onder elkaar, dus zij hebben niet het gevoel dat de site stuk is.
