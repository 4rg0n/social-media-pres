Reveal.addEventListener( 'question', function() 
{
    var fill = d3.scale.category10();
    
    d3.select("svg").remove();
    
    setTimeout(function () {
        d3.layout.cloud().size([1000, 700])
        .words([
            "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"
             ,"?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"
             , "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"
             , "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"
             , "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"
             , "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"
             , "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"
            ].map(
                function(word) 
                {
                    return {text: word, size: 40 + Math.random() * 100};
                }
            )
         )
        .font("Arial")
        .fontSize(
            function(word)
            { 
                return word.size; 
            }
        )
        .on("end", draw)
        .start();
    }, 1000);
        
    function draw(words) 
    {
        d3.select("#question").append("svg")
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
            .style("font-family", "Arial")
            .style("fill", 
                function(d, i) 
                { 
                    return fill(i); 
                }
            )
            .transition().delay(function(d, i) { return i / 1 * 2000; })
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

