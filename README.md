<div align="center">
  <img src="https://github.com/WOLFRIEND/skeleton-mammoth/blob/main/src/images/sm-logo-big.png" alt="Skeleton Mammoth logotype." style="width: 400px">
</div>

<h1 align="center"><a href="https://github.com/WOLFRIEND/skeleton-mammoth">Skeleton Mammoth</a></h1>

## Table of Contents.
- [What is Skeleton Mammoth?](#what-is-skeleton-mammoth)
  - [Advantages.](#advantages)
- [Getting Started.](#getting-started)
  - [Installing.](#installing)
  - [Usage.](#usage)
    - [Import the library.](#1-import-the-library)
    - [Set the parent class.](#2-set-the-parent-class-)
    - [Set child classes.](#3-set-child-classes-)
    - [(Optional) Set the configuration object.](#4-optional-set-the-configuration-object)
  - [Advanced Usage.](#advanced-usage)
    - [Overriding styles with global variables.](#overriding-styles-with-global-variables)
- [Examples.](#examples)
- [Live Demo.](#live-demo)
- [API.](#api)
  - [Props.](#props)
  - [CSS.](#css)
- [Contributing.](#contributing)
- [License.](#license)
- [Contact information.](#contact-information)

## What is Skeleton Mammoth?
Skeleton Mammoth - a powerful JavaScript library designed to enhance user experience
by displaying UI skeleton loaders, also known as placeholders.
It allows you to simulate the layout or elements of a website while data is being loaded in the background.
With a multitude of advantages, Skeleton Mammoth takes your website's visual appeal to the next level.

### Advantages.
- **Class based**: Simply apply the appropriate classes to the elements
  you wish to display the skeleton on, and let Skeleton Mammoth do the rest.
  No complex code or modifications required.
- **Versatile and Reusable**: Enjoy the flexibility of Skeleton Mammoth with seamlessly integration
  without the need to develop new components or major structural changes.
  By inheriting layouts from default styles, Skeleton Mammoth customize them with their own styles.
- **Configuration Flexibility**: Tailor the behavior of the library to suit your preferences with ease.
  The library provides a configuration object that allows you to adjust the settings according to your requirements.
- **Light and Dark Theme Support**: With built-in support for both light and dark themes,
  Skeleton Mammoth automatically detects the user's color scheme,
  or allows you to manually configure it to align perfectly with your website's aesthetic.
- **Animation Support**: Elevate your website's dynamism with animation support.
  Skeleton Mammoth detects the user's reduced motion or animations setting and adjusts accordingly.
  Nevertheless, it allows you to manually configure the animation preferences.
- **Lightweight and Dependencies-Free**: The library has been developed with a focus on efficiency
  without compromising functionality. It's free from unnecessary external dependencies in order to optimize performance.
  That makes it lightweight and easy to maintenance.

With its ease of implementation, advantages, extensive customization options,
lightweight structure free from dependencies, you can effortlessly enhance the visual appeal
and user engagement of your website by providing a polished, professional experience during loading times.
Elevate your user interface with ease and captivate your audience from the very first interaction.

## Getting Started.

### Installing.

Using NPM:
```bash
npm install skeleton-mammoth
```

Using jsDelivr CDN:

<u>Specific version:</u>
```html
<script src="https://cdn.jsdelivr.net/npm/skeleton-mammoth@1.0.3/dist/skeleton-mammoth.min.css"></script>
```
<u>Latest version:</u>
```html
<script src="https://cdn.jsdelivr.net/npm/skeleton-mammoth/dist/skeleton-mammoth.min.css"></script>
```

### Usage.
#### 1. Import the library:

You can import it either within a scope of a specific component or globally on the application level.
```js
import 'skeleton-mammoth/dist/skeleton-mammoth.min.css';
```

#### 2. Set the parent class: 

While your data is in the process of loading, set the class `"sm-loading"` to the parent element on whose children elements you want to see the skeleton loader.
> **Note:**
> The `sm-loading` class should only be set/present while your data is loading.
> It's kind of a switcher. Only when it is present, child elements with the presence of
> appropriate classes `sm-item-primary` or `sm-item-secondary` will display the skeleton.

```html
<div class="card sm-loading">
    <!-- Omitted pieces of code. -->
</div>
```

#### 3. Set child classes: 

Set the child `sm-item-primary` or `sm-item-secondary` classes to the elements you want to see the skeleton loaders on.
```html
<div class="card sm-loading">
    <div class="card__img sm-item-primary">
      <img src="photo.jpg">
    </div>
    <p class="card__title sm-item-secondary">Card title.</p>
</div>
```
> **Note:**
> If you need to display a skeleton on an image (`<img/>` tag), you need to wrap the `<img/>` tag in a `<div></div>` tag,
> and set the skeleton class to that parent tag (as shown in the example above).
> Or do conditional rendering, and while the data is not loaded,
> render the stub `<div></div>` tag, and after loading the data, show the `<img/>` tag.
> This is because of applying the background property to the `<img/>` tag will not have a result.

#### 4. (Optional) Set the configuration object:

If you would like to change the behavior of the Skeleton Mammoth library,
you can achieve it by specifying the `JSON` object as a `data-sm-config` attribute value
to the parent element with the `sm-loading` class.
```javascript
const config = JSON.stringify({
  animation: "none",
  theme: "dark",
  opacity: "0.7",
})
```
```jsx
<div class="card sm-loading" data-sm-config={config}>
    <!-- Omitted pieces of code. -->
</div>
```
> **Note:**
> For a complete list of available configurations, see the API [Props](#props) section.

### Advanced Usage.

Learn how to customize Skeleton Mammoth by taking advantage of different strategies for specific use cases.

#### Overriding styles with global variables.

> **Note:**
> All our custom properties are prefixed with `--sm` to avoid conflicts with third party CSS.

Skeleton Mammoth extensively uses root CSS variables to allow you to easily
override default styles at a global level instead of writing new selectors.
If you want to adjust the default styles, just override appropriate
variables in your own `*.css` file inside the 
[:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) CSS pseudo-class.

> **Note:**
> Pay attention to the order of the import of the file with overwritten styles. 
> It needs to be imported after the library is imported. 
> Otherwise, you will have to use [!important](https://developer.mozilla.org/en-US/docs/Web/CSS/important).

> **Note:**
> Please use colors in RGB format, as in the example below,
> otherwise it may not work.

```css
/* Your own custom.css file: */
:root {
  --sm-color-light-primary: 255, 0, 0, 0.5;
}
```

For a complete list of available CSS variables, see the API [CSS](#css) section,
or find them in the source file:
<a href="https://github.com/WOLFRIEND/skeleton-mammoth/blob/main/src/styles/skeleton-mammoth.css">skeleton-mammoth.css</a>


## Examples.
**React.js.**
```jsx
import 'skeleton-mammoth/dist/skeleton-mammoth.min.css'

export const Card = ({isLoading, imgUrl, title, subtitle}) => {

  /**
   * (Optional) Configuration object with settings.
   * For a complete list of available configurations, see the "API" section.
   * */
  const config = JSON.stringify({
    animation: "none",
    theme: "dark",
    opacity: "0.7",
  })

  return (
          /**
           * 1. If "isLoading" is "true" set the className "sm-loading" to the parent element.
           * 2. (Optional) Pass the configuration object in the "data-sm-config" attribute.
           * 3. Set classNames "sm-item-primary" and "sm-item-secondary" to child elements.
           * */
          <div className={`card ${isLoading ? "sm-loading" : ""}`} data-sm-config={config}>
            <div className='card__image sm-item-primary'>
              <img src={imgUrl} alt='img'/>
            </div>
            <p className='card__title sm-item-secondary'>{title}</p>
            <p className='card__subtitle sm-item-secondary'>{subtitle}</p>
          </div>
  );
}
```

**Vue.js.**
```vue
<script setup>
defineProps({
  isLoading: { type: Boolean, required: true },
  imgUrl: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true }
})

/**
 * (Optional) Configuration object with settings.
 * For a complete list of available configurations, see the "API" section.
 * */
const config = JSON.stringify({
    animation: "none",
    theme: "dark",
    opacity: "0.7",
})
</script>

<template>
    <!--
    1. If "isLoading" is "true" set the class "sm-loading" to the parent element.
    2. (Optional) Pass the configuration object in the "data-sm-config" attribute.
    3. Set classes "sm-item-primary" and "sm-item-secondary" to child elements.
    -->
    <div :class="['card', isLoading ? 'sm-loading' : '']" :data-sm-config="config">
      <div class='card__image sm-item-primary'>
        <img src={{imgUrl}} alt='img'/>
      </div>
      <p class='card__title sm-item-secondary'>{{ title }}</p>
      <p class='card__subtitle sm-item-secondary'>{{ subtitle }}</p>
  </div>
</template>

<style>
@import 'skeleton-mammoth/dist/skeleton-mammoth.min.css';
</style>
```

## Live Demo.
<img src="https://github.com/WOLFRIEND/skeleton-mammoth/blob/main/src/images/skeleton-mammoth-demo.gif" alt="Skeleton Mammoth demo animation." style="width: 600px">

Try out the Skeleton Mammoth library in action at the following link: [Live Demo](https://skeleton-mammoth-demo.onrender.com).  
This interactive demo showcases the core features and functionality of the library.
Try out with different options and see how it's powerful and flexible.  
Live demo [source code](https://github.com/WOLFRIEND/skeleton-mammoth-demo).



## API.
API reference docs for the Skeleton Mammoth library. Learn about the props, CSS, and other APIs.

### Props.
> See the [Set the configuration object](#4-optional-set-the-configuration-object) section for the reference
> on how to use API props.

| Name      | Type                                                                                                              | Default value | Description                   |
|-----------|-------------------------------------------------------------------------------------------------------------------|:-------------:|-------------------------------|
| animation | `"none"` \| `"wave"` \| `"wave-reverse"` \| `"pulse"`                                                             |    `"wave"`     | Skeleton animation mode.      |
| theme     | `"light"` \| `"dark"`                                                                                             |   `"light"`   | Color scheme of the skeleton. |
| opacity   | `"0"` \| `"0.1"` \| `"0.2"` \| `"0.3"` \| `"0.4"` \| `"0.5"` \| `"0.6"` \| `"0.7"` \| `"0.8"` \| `"0.9"` \| `"1"` |     `"1"`     | Opacity of the skeleton.      |

### CSS.
> See the [Overriding styles with global variables](#overriding-styles-with-global-variables)
> section for the reference on how to use API CSS.

You can find all of these variables in the source file:
[skeleton-mammoth.css](./src/styles/skeleton-mammoth.css).

| Global variable name                 | Default value                                                          | Description                                                                                                                                                                                               |
|--------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --sm-color-light-primary             | `204, 204, 204, 1`                                                     | Color of the primary element (with the class `sm-item-primary`) for the light theme.                                                                                                                      |
| --sm-color-light-secondary           | `227, 227, 227, 1`                                                     | Color of the secondary element (with the class `sm-item-secondary`) for the light theme.                                                                                                                  |
| --sm-color-light-animation-primary   | `color-mix( in srgb, #fff 15%, rgba(var(--sm-color-light-primary)))`   | Animation color of the primary element (with the class `sm-item-primary`) for the light theme.                                                                                                            |
| --sm-color-light-animation-secondary | `color-mix( in srgb, #fff 15%, rgba(var(--sm-color-light-secondary)))` | Animation color of the secondary element (with the class `sm-item-secondary`) for the light theme.                                                                                                        |
| --sm-color-dark-primary              | `37, 37, 37, 1`                                                        | Color of the primary element (with the class `sm-item-primary`) for the dark theme.                                                                                                                       |
| --sm-color-dark-secondary            | `41, 41, 41, 1`                                                        | Color of the secondary element (with the class `sm-item-secondary`) for the dark theme.                                                                                                                   |
| --sm-color-dark-animation-primary    | `color-mix( in srgb, #fff 2%, rgba(var(--sm-color-dark-primary)))`     | Animation color of the primary element (with the class `sm-item-primary`) for the dark theme.                                                                                                             |
| --sm-color-dark-animation-secondary  | `color-mix( in srgb, #fff 2%, rgba(var(--sm-color-dark-secondary)))`   | Animation color of the secondary element (with the class `sm-item-secondary`) for the dark theme.                                                                                                         |
| --sm-animation-duration              | `1.5s`                                                                 | The [animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) CSS property sets the length of time that an animation takes to complete one cycle.                         |
| --sm-animation-timing-function       | `linear`                                                               | The [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) CSS property sets how an animation progresses through the duration of each cycle.             |
| --sm-animation-iteration-count       | `infinite`                                                             | The [animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) CSS property sets the number of times an animation sequence should be played before stopping. |

## Contributing.
Please see the <a href="https://github.com/WOLFRIEND/skeleton-mammoth/blob/main/CONTRIBUTING.md">Contributing</a> guideline.

## License.
MIT License. For details, please see the <a href="https://github.com/WOLFRIEND/skeleton-mammoth/blob/main/LICENSE.md">License</a> file.

## Contact information.
- **LinkedIn:** https://www.linkedin.com/in/aleksandrtkachenko/.