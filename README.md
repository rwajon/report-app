# Ninja-UI Framework


## How to use UI Framework?

To get started, call css file in the html page
```
<link rel="stylesheet" href="css/styles.css">
```


## 1. Style helpers

Wrap element with max width of 1280px
`.container`

Hide element
`.hide`

Hide element on large screen
`.hide-on-large`

Hide element on medium screen
`.hide-on-medium`

Hide element on small screen
`.hide-on-small`

## Border

Initiate border
`.border`

## Border color
White
`.border-lite`

Grey
`.border-grey`

Red
`.border-red`

Black
`.border-red`

Indigo
`.border-indigo`


## Clearfix
`.clear`

### Aligment

Center
`.center-align`

Left
`.left-align`

Right
`.right-align`


## 2. Playing with Paddings

**-h-** indicate that the property is applied horizontally on a given selector
**-v-** indicate that the property is applied veritically on a given selector

Small padding

`.small-padding`
`.small-h-padding`
`.small-v-padding`

Medium padding

`.medium-padding`
`.medium-h-padding`
`.medium-v-padding`

Large padding

`.large-padding`
`.large-h-padding`
`.large-v-padding`

Extra large padding

`.xlarge-padding`
`.xlarge-h-padding`
`.xlarge-v-padding`

Extra large padding

`.xxlarge-padding`
`.xxlarge-h-padding`
`.xxlarge-v-padding`

## 3. Playing with Margins

**-h-** indicate that the property is applied horizontally on a given selector
**-v-** indicate that the property is applied veritically on a given selector

Small margin

`.small-margin`
`.small-h-margin`
`.small-v-margin`

Medium margin
`.medium-margin`
`.medium-h-margin`
`.medium-v-margin`

Large padding
`.large-margin`
`.large-h-margin`
`.large-v-margin`

Extra large padding
`.xlarge-margin`
`.xlarge-h-margin`
`.xlarge-v-margin`

Extra large padding
`.xxlarge-margin`
`.xxlarge-h-margin`
`.xxlarge-v-margin`

## 4. Typography

Small text
`.small-text`

Medium text
`.medium-text`

Large text
`.large-text`

Extra large text
`.xlarge-text`

Extra-extra large text
`.xxlarge-text`


## 5. grid

Grid must be wrap in row
`.row`

|  | Small  |  Medium | Large |
| ------- | --- | --- | --- |
| Prefix | `.small-screen-` | `.medium-screen-` | `.large-screen-` |

### Note
- -1: 25%
- -2: 50%
- -3: 75%
- -4: 100% 

### Example:
`<div class="small-screen-1>foo </div>`

## 6. Color palette

White
`.white`

Black
`.black`

Grey
`.grey`

Indigo
`.blue`

- Add `text- ` prefix before the defined color class to apply it on text 

- `darken-1` , `darken-2` and `darken-3` gives option to play with strongness of the color 

## 7. form

Input, textarea, radio, checkbox and button must be in `.input-field` `div` or `p`

#### example
```
    <div class="input-field">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="your email">
    </div>
```

## 8. Button

Initiate button
`.button`


## 9. Managing Image

If your wrap to wrap image to fix the width of a container, you must add `.image` in the parent container of a image


## Shadow

To add shadow depth in an element, add one of the following classes:


```.shadow-1```

```.shadow-2```

```.shadow-3```

```.shadow-4```

```.shadow-5```

## Contributors

- Gilles Kagarama
