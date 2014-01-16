Reveal.addEventListener( 'cloud', function() 
{
    var fill = d3.scale.category10();
    
    d3.select("svg").remove();
    
    setTimeout(function () {
        d3.layout.cloud().size([1000, 700])
        .words([
            "Alle Posts", "Alle getätigten Likes", "Geburtsdatum", "Geschlecht", "Vor- und Nachname", "E-Mail-Adresse", 
            "Ort, Datum und Uhrzeit von Posts", "Telefonnummer", "Alle Statusmeldungen", "Klicks auf Inhalte von Facebook",
            "Profil- und Titelbilder", "IP-Adressen", "Alle Kommentare", "Besuchte Seiten", "Importierte Kontakte",
            "Versandte Nachrichten", "Suchanfragen", "Informationen über Provider", "Browserdaten"
            ].map(
                function(word) 
                {
                    return {text: word, size: 15 + Math.random() * 60};
                }
            )
         )
        .font("Impact")
        .fontSize(
            function(word)
            { 
                return word.size; 
            }
        )
        .on("end", draw)
        .start();
    }, 5000);
        
    function draw(words) 
    {
        d3.select("#cloud").append("svg")
            .attr("width", 1000)
            .attr("height", 700)
            .append("g")
            .attr("transform", "translate(500,350)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", 
                function(d) 
                { 
                    return d.size + "px"; 
                }
             )
            .style("font-family", "Impact")
            .style("fill", 
                function(d, i) 
                { 
                    return fill(i); 
                }
            )
            .transition().delay(function(d, i) { return i / 1 * 1000; })
            .attr("text-anchor", "middle")
            .attr("transform", 
                function(d) 
                {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                }
            )
            .text(
                function(d) 
                { 
                    return d.text; 
                }
            );
      }
    
    
}, false );

