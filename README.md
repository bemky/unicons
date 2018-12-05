# Unicons

``unicons`` is gem to help manage 42Floors icon library across multiple apps with helpers that make it quick and easy to include icons via ruby, javascript, or sass

[Preview Icons](http://42floors.github.io/unicons)

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
//= require unicons
```

And make sure to precompile the fonts as well:

```ruby
  config.assets.precompile += %w(*.eot *.svg *.ttf *.woff)
```

## Usage


###Ruby
``Unicons.entity("icon_name")`` returns an html entitiy for icon (ex. ``&#x58960;``)

###Javascript
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

``Unicons.overrides = {}`` map custom icon names
```javascript
{
    'expired':      'clock',
    'processing':   'spinner',
    'deleted':      'trash',
    'visible':      'green',
    'invisible':    'hidden',
    'leased':       'tag_sale',
    'account':      'person',
    'admin':        'forty_two',
    'tag_sale':     'tag'
}
```


###Sass
Outputs sass variable of icon entity for all icons, which is useful for content css attribute (ex. ``$unicon-trash: \\67094;``)

Declares @font-face for ``"fortcons"``

Declares ``$unicons: "unicons";``

Declares class for unicons, ``.unicons``, and includes vendor specific prefixes for anti-aliasing.


##Browser Support
Supports most browsers and IE9+, if you need older browser support include https://github.com/es-shims/es5-shim (uses indexOf function for Array)


##For Development
###Installation
    brew install fontforge ttfautohint

###Compile
    rake compile

