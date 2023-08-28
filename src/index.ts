import * as d3 from 'd3';

const data = [ 0, 2, 3, 5, 7.5, 9, 10 ];

const myScale = d3.scaleLinear()
	.domain([0, 10])
	.range([0, 600]);

myScale(data[0]); // 0 -> 0
myScale(data[1]); // 2 -> 120
myScale(data[2]); // 3 -> 180
myScale(data[3]); // 5 -> 300
	

d3.select('svg g')
	.selectAll('circle')
	.data(data)
	.join('circle')
	.attr('r', 3)
	.attr('cx', (d) => {
		return myScale(d);
	});

d3.select('svg g')
	.selectAll('text')
	.data(data)	
	.join('text')
	.attr('x', (d) => {
		return myScale(d);
	})
	.attr('y', -8)
	.text((d) => {
		return d;
	});