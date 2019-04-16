# Ninja-UI Framework


## How to use UI Framework?

To get started, call css file in the html page
```
<link rel="stylesheet" href="css/styles.css">
```


## 1. Style helpers

Wrap element with max width of 1100px
`.container`

Content card
```
    <div class="card white radius-3 shadow-2">
        Hello World
    </div>
```

Hide element
`.hide`

Hide element on large screen
`.hide-on-large`

Hide element on medium screen
`.hide-on-medium`

Hide element on small screen
`.hide-on-small`

Capitilize text
`.capitilize`

Uppercase text
`.uppercase`

Bold text 
`.bold`

No padding
`.no-padding`

No margin
`.no-margin`

No border
`.no-border`

No radius
`.no-radius`

Divider(a colored lign between 2 sections of content)
`<div class="divider grey"></div>`

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

blue
`.border-blue`


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

Small text(12px)
`.small-text`

Medium text(16px)
`.medium-text`

Large text(20px)
`.large-text`

Extra large text(32px)
`.xlarge-text`

Extra-extra large text(45px)
`.xxlarge-text`


## 5. grid

Grid must be wrap in row
`.row`

|  | Small  |  Medium | Large |
| ------- | --- | --- | --- |
| Prefix | `.small-screen-` | `.medium-screen-` | `.large-screen-` |

### Note
- class-prefix-1: 25%
- class-prefix-2: 50%
- class-prefix-3: 75%
- class-prefix-4: 100% 


### Example:
```
<div class="row">
        <div class="small-screen-4 red medium-screen-2 large-screen-1">Screen width depending on screen size (1)</div>
        <div class="small-screen-4 blue medium-screen-2 large-screen-1">Screen width depending on screen size (2)</div>
        <div class="small-screen-4 red medium-screen-2 large-screen-1">Screen width depending on screen size (3)</div>
        <div class="small-screen-4 red medium-screen-2 large-screen-1">Screen width depending on screen size (4)</div>
</div>
```

## 7. Tables

```
<table class="bordered">
    <tr class="left-align">
            <th>Firstname</th>
            <th>Lastname</th> 
            <th>Age</th>
    </tr>
    <tr>    
            <td>Jill</td>
            <td>Smith</td> 
            <td>50</td>
    </tr>
    <tr>
            <td>Eve</td>
            <td>Jackson</td> 
            <td>94</td>
    </tr>
</table>
```

## 6. Color palette

White
`.white`

Black
`.black`

Grey
`.grey`

Blue
`.blue`

- Add `text- ` prefix before the defined color class to apply it on text 
### Example
`<div class="blue text-white">My name is John Doe</div>`

- `darken-1` , `darken-2` and `darken-3` gives option to play with strongness of the given color 
### Example
`<div class="blue-darken-1 text-white">My name is John Doe</div>`

## 7. form

Input, textarea, radio, checkbox and button must be in `.input-field` `div` or `p`

#### example
```
    <form action="#" method="#">
        <div class="input-field">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="your email">
        </div>
        <div class="clear"></div>
        <div class="input-field">
            <button type="submit" class="button blue text-white bold radius-6 m-text l-padding">
                Log In
            </button>
        </div>
    </form>
```

## 8. Button

Initiate button
`.button`


## 9. Managing Image

If your wrap to wrap image to fix the width of a container, you must add `.image` in the parent container of a image

### EXample
```
    <div class="image">
        <img src="#" alt="#">
    </div>
```


## 10. Shadow

To add shadow depth in an element, add one of the following classes:


```.shadow-1```

```.shadow-2```

```.shadow-3```

```.shadow-4```

```.shadow-5```



## Contributors

- Gilles Kagarama
