<p align="center">
    <a href="https://bemky.github.io/unicons/" style="display:block; max-width:344px;">
        <img src="https://raw.githubusercontent.com/bemky/unicons/master/docs/assets/images/unicons.png"width="344" height="69" alt="Unicons">
    </a>
    <p align="center">
        <a href="https://bemky.github.io/unicons/">
            Preview
        </a>
    </p>
</p>


`unicons` is an icon library with helpers that make it quick and easy to include icons via ruby, javascript, or sass

## Installation

Add this line to your application's Gemfile:

    gem 'unicons'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install unicons

Include the javascript and css library in your asset pipeline.

```scss
@import 'unicons';
```

```javascript
import Uniform from 'uniform';
// or
import {tag} from 'uniform';
```

And make sure to precompile the fonts as well:

```ruby
  config.assets.precompile += %w(*.eot *.svg *.ttf *.woff)
```

## Usage


### Ruby
``Unicons.entity("icon_name")`` returns an html entitiy for icon (ex. ``&#x58960;``)

### Javascript
``Unicons.entity("icon_name")`` returns an html entitiy for icon (ex. ``&#x58960;``)
``Unicons.tag("icon_name", options)`` returns html tag with options (ex. ``<span class="unicon">&#x58960;</span>``)
```javascript
options: {
    tagName: "span",
    class: "unicon",
    id: "delete",
    ... // all other html options
}
```

``Unicons.registerIconName(name, icon)`` to map custom icon names
```javascript
Unicons.registerIconName('expired', 'clock')
// or
Unicons.registerIconName('expired', 'f1c4')
```


### Sass
Outputs sass variable of icon entity for all icons, which is useful for content css attribute (ex. ``$unicon-trash: \\67094;``)

Declares @font-face for ``"fortcons"``

Declares ``$unicons: "unicons";``

Declares class for unicons, ``.unicons``, and includes vendor specific prefixes for anti-aliasing.


## Browser Support
Supports most browsers and IE9+, if you need older browser support include https://github.com/es-shims/es5-shim (uses indexOf function for Array)


## For Development

### Installation
Check `fontcustom` readme: https://github.com/FontCustom/fontcustom

    brew install fontforge ttfautohint woff2

### Compile
    rake compile

### Resources

https://feathericons.com/

https://material.io/tools/icons

https://fontawesome.com/

http://www.zondicons.com/icons.html // CC

https://www.zwicon.com/cheatsheet.html

https://github.com/refactoringui/heroicons
