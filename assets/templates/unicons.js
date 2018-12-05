Unicons = (function () {

    var booleanAttributes = ['disabled', 'readonly', 'multiple', 'checked',
        'autobuffer', 'autoplay', 'controls', 'loop', 'selected', 'hidden',
        'scoped', 'async', 'defer', 'reversed', 'ismap', 'seemless', 'muted',
        'required', 'autofocus', 'novalidate', 'formnovalidate', 'open',
        'pubdate', 'itemscope'];
            
    function contentTag(name, content, options) {
        return "<" + name + tagOptions(options) + ">" + content + "</" + name + ">";
    };

    function tagOptions(options) {
        if (options === undefined) { return ""; }

        var attrs = [];
        for (var key in options){
            if (options.hasOwnProperty(key)) {
                if (options[key] === true && booleanAttributes.indexOf(key) !== -1) {
                    attrs.push(key);
                } else if (options[key] !== null && options[key] !== undefined) {
                    attrs.push(tagOption(key, options[key]));
                }
            }
        }

        if (attrs.length === 0) {
           return '';
        }
    
        return " " + attrs.sort().join(' ');
    };
    
    function tagOption (key, value, escape) {
        if (value.join) { value = value.join(" "); }
        return key + '="' + value + '"';
    };
    
    return {
        
        mapping: {<% @glyphs.each do |name, value| %>
            '<%= name.to_s.gsub(/\s|-/, '_') %>': "<%= value[:codepoint].to_s(16) %>",<% end %>
        },

        overrides: {
            'expired':      'clock',
            'processing':   'spinner',
            'deleted':      'trash',
            'visible':      'green',
            'invisible':    'hidden',
            'leased':       'tag_sale',
            'account':      'person',
            'admin':        'forty_two',
            'tag_sale':     'tag'
        },

        get: function (name){
            if (this.overrides[name]) {
                name = this.overrides[name];
            }

            return icon = this.mapping[name] || this.mapping["question_bubble"]
        },
        
        entity: function (name) {
            return "&#x" + this.get(name) + ";";
        },
    
        tag: function(name, options) {
            options || (options = {});
            if (options['class']) {
                options['class'] = options['class'] + ' unicon';
            } else {
                options['class'] = "unicon";
            }
            
            var tagName = options.tagName || 'span';
            delete options.tagName;

            return contentTag(tagName, this.entity(name), options)
        }
    };

}());
