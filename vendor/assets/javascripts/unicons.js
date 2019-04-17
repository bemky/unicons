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
        
        mapping: {
            'activity': "f18f",
            'add': "f100",
            'add_outline': "f101",
            'alert_circle': "f190",
            'alert_triangle': "f191",
            'archive': "f105",
            'arrow_down': "f1a4",
            'arrow_left': "f1a5",
            'arrow_right': "f1a6",
            'arrow_up': "f1a7",
            'bell': "f10f",
            'browser': "f110",
            'building': "f111",
            'buildings': "f113",
            'calendar': "f114",
            'camera': "f115",
            'caret_down': "f1b7",
            'caret_left': "f1b8",
            'caret_right': "f1b9",
            'caret_up': "f1ba",
            'chat': "f196",
            'chat_fill': "f197",
            'check': "f11c",
            'check_outline': "f11d",
            'check_success': "f19a",
            'check_success_fill': "f19b",
            'chevron_down': "f1bb",
            'chevron_down_large': "f1bc",
            'chevron_left': "f1bd",
            'chevron_left_large': "f1be",
            'chevron_right': "f1bf",
            'chevron_right_large': "f1c0",
            'chevron_up': "f1c1",
            'chevron_up_large': "f1c2",
            'clock': "f11f",
            'comment': "f120",
            'comment_fill': "f198",
            'cone': "f121",
            'contract': "f122",
            'copy': "f124",
            'document': "f1ca",
            'dot': "f127",
            'dots': "f128",
            'download': "f129",
            'drag_n_drop': "f1c3",
            'ellipsis': "f12a",
            'entry': "f12b",
            'export': "f12c",
            'filter': "f1cb",
            'fire': "f12e",
            'flag': "f130",
            'floorplan': "f131",
            'flyer': "f132",
            'for_sale': "f133",
            'gear': "f136",
            'happy': "f13c",
            'hidden': "f13d",
            'history': "f13e",
            'info': "f140",
            'info_bubble': "f141",
            'leaf': "f144",
            'lightbulb': "f146",
            'lightning': "f147",
            'lightning_fill': "f195",
            'link': "f14a",
            'list': "f14c",
            'listings': "f14e",
            'lock': "f14f",
            'magic': "f151",
            'mail': "f152",
            'map': "f153",
            'map_pin': "f1ac",
            'markdown': "f154",
            'menu': "f1c7",
            'merge': "f156",
            'mobile': "f157",
            'move': "f159",
            'neutral': "f15a",
            'no': "f15b",
            'not_available': "f15c",
            'not_available_fill': "f1c4",
            'paperclip': "f1ad",
            'pencil': "f15e",
            'phone': "f163",
            'photo': "f1c8",
            'photos': "f1c9",
            'plant': "f167",
            'play': "f168",
            'play_tube': "f1b6",
            'price_tag': "f1a2",
            'question': "f169",
            'question_bubble': "f16a",
            'recover': "f16b",
            'refresh': "f1c5",
            'ruler': "f16f",
            'sad': "f170",
            'search': "f171",
            'shield': "f174",
            'shred': "f1aa",
            'signature': "f1a3",
            'star': "f179",
            'star_empty': "f17a",
            'star_half': "f17b",
            'thumbs_down': "f1a8",
            'thumbs_up': "f1a9",
            'trash': "f183",
            'upload': "f185",
            'user': "f1ae",
            'user_circle': "f1b3",
            'user_group': "f1b4",
            'user_professional': "f1b2",
            'user_square': "f1b5",
            'visible': "f186",
            'website': "f188",
            'world': "f189",
            'x': "f18a",
            'zoom_in': "f1a0",
            'zoom_out': "f1a1",
        },

        overrides: {},

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
