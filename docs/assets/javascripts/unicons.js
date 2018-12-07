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
            'add': "f100",
            'add_outline': "f101",
            'agent': "f102",
            'alert': "f103",
            'alert_outline': "f104",
            'archive': "f105",
            'arrow_down': "f106",
            'arrow_left': "f107",
            'arrow_right': "f108",
            'arrow_up': "f109",
            'arrow_down_large': "f10a",
            'arrow_left_large': "f10b",
            'arrow_right_large': "f10c",
            'arrow_up_large': "f10d",
            'attachment': "f10e",
            'bell': "f10f",
            'browser': "f110",
            'building': "f111",
            'building_list': "f112",
            'buildings': "f113",
            'calendar': "f114",
            'camera': "f115",
            'caret_down': "f116",
            'caret_left': "f117",
            'caret_right': "f118",
            'caret_up': "f119",
            'chair': "f11a",
            'chat2': "f11b",
            'check': "f11c",
            'check_outline': "f11d",
            'clock': "f11f",
            'comment': "f120",
            'cone': "f121",
            'contract': "f122",
            'conversation': "f123",
            'copy': "f124",
            'crowd': "f125",
            'dot': "f127",
            'dots': "f128",
            'download': "f129",
            'ellipsis': "f12a",
            'entry': "f12b",
            'export': "f12c",
            'facebook': "f12d",
            'fire': "f12e",
            'fish_bones': "f12f",
            'flag': "f130",
            'floorplan': "f131",
            'flyer': "f132",
            'for_sale': "f133",
            'forty_two': "f134",
            'gauge': "f135",
            'gear': "f136",
            'ghost': "f137",
            'happy': "f13c",
            'hidden': "f13d",
            'history': "f13e",
            'info': "f140",
            'info_bubble': "f141",
            'iron_man': "f142",
            'leaf': "f144",
            'lightbulb': "f146",
            'lightning': "f147",
            'line_chat': "f148",
            'line_clock': "f149",
            'link': "f14a",
            'linkedin': "f14b",
            'list': "f14c",
            'list_solid': "f14d",
            'listings': "f14e",
            'lock': "f14f",
            'loop': "f150",
            'magic': "f151",
            'mail': "f152",
            'map': "f153",
            'markdown': "f154",
            'marker': "f155",
            'merge': "f156",
            'mobile': "f157",
            'move': "f159",
            'neutral': "f15a",
            'no': "f15b",
            'not_available': "f15c",
            'pencil': "f15e",
            'person': "f15f",
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
            'search_list': "f172",
            'shield': "f174",
            'shredder': "f175",
            'spinner': "f177",
            'star': "f179",
            'star_empty': "f17a",
            'star_half': "f17b",
            'star_list': "f17c",
            'success': "f17f",
            'tag': "f180",
            'thumbs_down': "f181",
            'thumbs_up': "f182",
            'trash': "f183",
            'twitter': "f184",
            'upload': "f185",
            'visible': "f186",
            'website': "f188",
            'world': "f189",
            'x': "f18a",
            'zoom_in': "f18d",
            'zoom_out': "f18e",
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
