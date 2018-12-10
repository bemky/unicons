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
            'arrow_down': "f106",
            'arrow_left': "f107",
            'arrow_right': "f108",
            'arrow_up': "f109",
            'arrow_down_fill': "f19c",
            'arrow_down_large': "f10a",
            'arrow_left_fill': "f19d",
            'arrow_left_large': "f10b",
            'arrow_right_fill': "f19e",
            'arrow_right_large': "f10c",
            'arrow_up_fill': "f19f",
            'arrow_up_large': "f10d",
            'attachment': "f10e",
            'bell': "f10f",
            'browser': "f110",
            'building': "f111",
            'buildings': "f113",
            'calendar': "f114",
            'camera': "f115",
            'chat': "f196",
            'chat_fill': "f197",
            'check': "f11c",
            'check_outline': "f11d",
            'check_success': "f19a",
            'check_success_fill': "f19b",
            'clock': "f11f",
            'comment': "f120",
            'comment_fill': "f198",
            'cone': "f121",
            'contract': "f122",
            'copy': "f124",
            'dot': "f127",
            'dots': "f128",
            'download': "f129",
            'ellipsis': "f12a",
            'entry': "f12b",
            'export': "f12c",
            'fire': "f12e",
            'fish_bones': "f12f",
            'flag': "f130",
            'floorplan': "f131",
            'flyer': "f132",
            'for_sale': "f133",
            'gauge': "f135",
            'gear': "f136",
            'ghost': "f137",
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
            'list_solid': "f14d",
            'listings': "f14e",
            'lock': "f14f",
            'loop': "f150",
            'magic': "f151",
            'mail': "f152",
            'map': "f153",
            'map_pin': "f193",
            'markdown': "f154",
            'merge': "f156",
            'mobile': "f157",
            'move': "f159",
            'neutral': "f15a",
            'no': "f15b",
            'not_available': "f15c",
            'pencil': "f15e",
            'person': "f15f",
            'person_professional': "f194",
            'persons': "f161",
            'phone': "f163",
            'picture': "f164",
            'pictures': "f165",
            'plant': "f167",
            'play': "f168",
            'question': "f169",
            'question_bubble': "f16a",
            'recover': "f16b",
            'remove_outline': "f16c",
            'ruler': "f16f",
            'sad': "f170",
            'search': "f171",
            'shield': "f174",
            'shredder': "f175",
            'spinner': "f177",
            'star': "f179",
            'star_empty': "f17a",
            'star_half': "f17b",
            'tag': "f180",
            'thumbs_down': "f181",
            'thumbs_up': "f182",
            'trash': "f183",
            'upload': "f185",
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
