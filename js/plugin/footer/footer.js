/**
 * Creates a dynamic footer for reveal.js
 *
 * @author Gordon Schmidt
 */
var RevealFooter = window.RevealFooter || (function(){
    Reveal.addEventListener('ready', update);
    Reveal.addEventListener('slidechanged', update);

    // render template with given values
    function render(template, vals) {
        return template.replace(/{{([^}]+)}}/g, function(s, key) {
            return (typeof vals[key] != 'undefined') ? vals[key] : s;
        });
    }

    function getOptions() {
        if (!this.options) {
            this.options = Reveal.getConfig().footer || {};
            //set default values
            this.options.template = this.options.template || '<span class="logo"></span><span style="float:left">{{meta-description}}</span><span class="page-text">{{pageNumbers}}</span><span style="float:right">{{meta-author}}</span>';
            this.options.pageNumbers = this.options.pageNumbers || {};
            this.options.pageNumbers.showOnFirstSlide = this.options.pageNumbers.showOnFirstSlide || false;
            this.options.pageNumbers.showVertical = this.options.pageNumbers.showVertical || true;
            this.options.pageNumbers.template = this.options.pageNumbers.template || '{{i}} von {{c}}';
            this.options.pageNumbers.seperator = this.options.pageNumbers.seperator || ' / ';
        }
        return this.options;
    }

    function getCounts() {
        var vSlides = document.querySelectorAll('.reveal .slides>section.present>section');
        console.log(vSlides);
        return {
          h: document.querySelectorAll('.reveal .slides>section').length,
          v: vSlides.length
        };
        return vSlides.length;
    }

    function getFooter() {
        if (!this.footer) {
            this.footer = document.createElement('footer');
            document.body.appendChild(this.footer);
        }
        return this.footer;
    }

    function getValues() {
        if (!this.values) {
            this.values = {
                'meta-author':'',
                'meta-description':'',
                'title':''
            };
            var metas = document.head.getElementsByTagName('meta');
            for (var i = 0; i < metas.length; i++) {
                if (0 < metas[i].name.length) {
                    this.values['meta-' + metas[i].name] = metas[i].content;
                }
            }
            var title = document.head.getElementsByTagName('title');
            if (0 < title.length) {
                this.values['title'] = title[0].innerHTML;
            }
        }
        return this.values;
    }

    function getPageNumbers(opts) {
        var i = Reveal.getIndices();
        var text = '';
        if (true == opts.pageNumbers.showOnFirstSlide || i.h > 0) {
            var c = getCounts();
            text = render(opts.pageNumbers.template, {'i':(i.h + 1).toString(), 'c':(c.h).toString()});
            if (true == opts.pageNumbers.showVertical && c.v > 1) {
                text += opts.pageNumbers.seperator + render(opts.pageNumbers.template, {'i':(i.v + 1).toString(), 'c':(c.v).toString()});
            }
        }
        console.log(text);
        return text;
    }

    function update() {
        var vals = getValues();
        var opts = getOptions();
        vals.pageNumbers = getPageNumbers(opts);
        var f = getFooter();
        f.innerHTML = render(opts.template, vals);
    }
})();


