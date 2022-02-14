# Built-in Style

### Intro

Tomato contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="tomato-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted.
</div>

<div class="tomato-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
</div>

<div class="tomato-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="tomato-hairline--top"></div>

<!-- border bottom -->
<div class="tomato-hairline--bottom"></div>

<!-- border left -->
<div class="tomato-hairline--left"></div>

<!-- border right -->
<div class="tomato-hairline--right"></div>

<!-- border top & bottom -->
<div class="tomato-hairline--top-bottom"></div>

<!-- full border -->
<div class="tomato-hairline--surround"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="tomato-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="tomato-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="tomato-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="tomato-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="tomato-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
