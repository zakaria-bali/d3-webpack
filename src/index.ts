import * as d3 from 'd3';

const body = d3.select('body')

body.on('click', (event) => {
    body.classed('clicked', true)
}) 


setTimeout(() => {

    d3.select('circle')
.transition()
.duration(3000)
.attr('r', 100);

setTimeout(
    () => {
        d3.select('circle')
    .transition()
    .duration(3000)
    .attr('r', 50)
    }, 3000
)

}, 2000)


