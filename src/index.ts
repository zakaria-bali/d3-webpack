import * as d3 from 'd3';


const data = [ 40, 10, 20, 60, 30 ]

d3.select('svg')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', (d, i) => {
        return 50 + i*100;
    })
    .attr('cy', 100)
    .attr('r', (d, i) => {
        return d
    })

