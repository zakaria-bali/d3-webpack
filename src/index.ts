import * as d3 from 'd3'; 

const colorScale = ['orange', 'lightblue', '#B19CD9'];
const xCenter = [100, 300, 500];

const numNode = 100;
const nodes = d3.range(numNode).map((d, i) => {
    return {
        radius: Math.random() * 25,
        category: i%3
    }
});

const ticked = () => {
    const u = d3.select('svg g')
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', (d) => d.radius)
        .style('fill', (d) => colorScale[d.category])
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y)
    
}

const simulation = d3.forceSimulation(nodes as any)
    .force('charge', d3.forceManyBody().strength(5))
    .force('x', d3.forceX().x((d: any) => {
        return xCenter[d.category]
    }))
    .force('collision', d3.forceCollide().radius((d: any) => {
        return d.radius
    }))
    .on('tick', ticked);


