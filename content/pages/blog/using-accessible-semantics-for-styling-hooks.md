---
template: blog
title: Using accessible semantics for styling hooks
subtitle: Using attribute selectors as a way of visually changing the state
description: When adding more semantics to elements, I can use attribute
  selectors as a way of visually changing the state too.
author: Joris Hulsbosch
date: 2020-03-17T14:27:56.586Z
---
After learning more about accessibility (a11y) and semantics, I have adjusted my way of writing some of my CSS too. In general, when adding more semantics to elements, I can use attribute selectors as a way of visually changing the state too.

## Active menu item
I used to add a class to the link in a menu to indicate the active section of the website. There is a better alternative to this: the `aria-current="true"` attribute. To screen reader users, this communicates it is the current item. It also provides a styling hook to give it a visual distinction too. You don’t need to add and remove classes anymore to style it.

```css
.menu-item[aria-current="true"] {
  border-bottom: 1px solid lime;
}
```

## Foldout toggles
The same principle can be applied to a button that toggles a foldout. Before, I added an `is-open` class to the button as a styling hook. But again, semantically this doesn’t mean anything. To indicate the button can toggle a foldout, I add the `aria-expanded` attribute, with a value of `false` or `true`. This communicates the state of the foldout, and also provides a way to change the visual style of the button. VoiceOver says: “menu, collapsed, button”, and “menu, expanded, button”. I can use this CSS selector to add an arrow, change the color, or anything else.

```css
button[aria-expanded=”true”] {
  // styles go here
}
```

## Errors in text fields
I always thought setting a red border on invalid form elements was the way to show it is invalid. I validate a field, it’s invalid, so I add the class `.is-invalid` to the input to be able to style it.

```css
input.is-invalid {
  border-color: red;
}
```

Easy, right? But not all users perceive websites visually. Colorblind users may not see the change. The state of the field is not communicated by screen readers. Nothing is really changed. I need a better way to communicate the invalid state.

To communicate the invalid state of the field I add `aria-invalid="true"` to the input element. Testing this with VoiceOver for MacOS, this results in the following:

“First name, invalid data, edit text.”

Great, I now have a more accessible element! But what about CSS? The new attribute provides an excellent way to style the element. I don’t need to add and remove the extra ‘is-invalid’ class anymore. I can use an attribute selector, which matches the state, to style the field:

```css
input[aria-invalid="true"] {
  border-color: red;
}
```

## Connecting the error message to the input
To further explain what is wrong with the input, there usually is a visual error message expected below the field. However, just putting it there visually is not enough: the message is not communicated by screen readers, and blind users have no way of knowing the message has appeared there.

To connect the error message to the input, there is the `aria-describedby` attribute. The value of the attribute points to the id of the error message element. This way, VoiceOver communicates the following:

“First name, invalid data, edit text, the data you entered does not meet the requirements.” 

The complete markup of an erroneous input:

```xml
<label for="text-field">Label for the field</label>
<input id="text-field" aria-invalid="true" aria-describedby="error-message" />
<div id="error-message">The data you entered does not meet the requirements.</div>
```

About that message: don’t yell at your users for making a mistake. Instead of providing an error message, try to provide a help message to further explain what you expect of your user. Nobody likes making mistakes. Nobody likes filling in forms. Users like the outcome of it. Help them as much as you can.