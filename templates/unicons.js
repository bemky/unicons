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

export const mapping = {
  <% @glyphs.each do |name, value| %>
  '<%= name.to_s.gsub(/\s|-/, '_') %>': "<%= value[:codepoint].to_s(16) %>",<% end %>
}

export function registerIconName (name, icon) {
  if(mapping[icon]){
    icon = mapping[icon]
  }
  mapping[name] = icon
}

export function get (name) {
  return mapping[name] || mapping["question_bubble"]
}

export function entity (name) {
  return "&#x" + get(name) + ";";
}

export function tag (name, options) {
  options || (options = {});
  if (options['class']) {
      options['class'] = options['class'] + ' unicon';
  } else {
      options['class'] = "unicon";
  }
  
  var tagName = options.tagName || 'span';
  delete options.tagName;

  return contentTag(tagName, entity(name), options)
}
