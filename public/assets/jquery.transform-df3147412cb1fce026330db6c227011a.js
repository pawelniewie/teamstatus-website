!function(r){function n(r){for(var n,f=["transform","WebkitTransform","msTransform","MozTransform","OTransform"];n=f.shift();)if("undefined"!=typeof r.style[n])return n;return"transform"}var f=null,e=r.fn.css;r.fn.css=function(t,s){if(null===f&&(f="undefined"!=typeof r.cssProps?r.cssProps:"undefined"!=typeof r.props?r.props:{}),"undefined"==typeof f.transform&&("transform"==t||"object"==typeof t&&"undefined"!=typeof t.transform)&&(f.transform=n(this.get(0))),"transform"!=f.transform)if("transform"==t){if(t=f.transform,"undefined"==typeof s&&jQuery.style)return jQuery.style(this.get(0),t)}else"object"==typeof t&&"undefined"!=typeof t.transform&&(t[f.transform]=t.transform,delete t.transform);return e.apply(this,arguments)}}(jQuery);