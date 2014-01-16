// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    footer: {
        template: '<span class="logo"></span><span style="float:left">{{meta-description}}</span><span class="page-text">{{pageNumbers}}</span><span style="float:right">{{title}}</span>'
    },
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme || 'default', // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
        // Syntax highlight for <code> elements
        { src: 'js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'js/plugin/footer/footer.js'},
        { src: 'js/classList.js', condition: function () {
            return !document.body.classList;
        }}
    ]
});