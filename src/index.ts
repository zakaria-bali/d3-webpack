import * as d3 from 'd3';


const data = [
	{"Title": "Adaptation", "Distributor": "Sony Pictures", "Genre": "Comedy", "Worldwide_Gross": 22498520, "Rating": 91},
	{"Title": "Air Bud", "Distributor": "Walt Disney Pictures", "Genre": "Comedy", "Worldwide_Gross": 27555061, "Rating": 45},
	{"Title": "Air Force One", "Distributor": "Sony Pictures", "Genre": "Action", "Worldwide_Gross": 315268353, "Rating": 78},
	{"Title": "Alex & Emma", "Distributor": "Warner Bros.", "Genre": "Drama", "Worldwide_Gross": 15358583, "Rating": 11},
	{"Title": "Alexander", "Distributor": "Warner Bros.", "Genre": "Adventure", "Worldwide_Gross": 167297191, "Rating": 16},
	{"Title": "Ali", "Distributor": "Sony Pictures", "Genre": "Drama", "Worldwide_Gross": 84383966, "Rating": 67},
	{"Title": "Alice in Wonderland", "Distributor": "Walt Disney Pictures", "Genre": "Adventure", "Worldwide_Gross": 1023291110, "Rating": 51},
	{"Title": "Alive", "Distributor": "Walt Disney Pictures", "Genre": "Adventure", "Worldwide_Gross": 36299670, "Rating": 71},
	{"Title": "All the King's Men", "Distributor": "Sony Pictures", "Genre": "Drama", "Worldwide_Gross": 9521458, "Rating": 11},
	{"Title": "Amadeus", "Distributor": "Warner Bros.", "Genre": "Drama", "Worldwide_Gross": 51973029, "Rating": 96}
];



const sumWorldwideGross = (group: any) => {
    return d3.sum(group, (d: any) => {
        return d.Worldwide_Gross
    })
}

const groups = d3.rollup(
    data,
    sumWorldwideGross,
    (d: any) => { return d.Distributor },
    (d: any) => { return d.Genre }
)

const root = d3.hierarchy(groups);


root.sum((d: any) => {
    return d[1]
})

const treeLayout = d3.tree()
    .size([400, 200]);

treeLayout(root);

// Nodes
d3.select('svg g.nodes')
    .selectAll('circle')
    .data(root.descendants())
    .join('circle')
    .classed('node', true)
    .attr('cx', (d: any) => d.x)
    .attr('cy', (d: any) => d.y + 10)
    .attr('r', 4 );

// links
d3.select('svg g.links')
    .selectAll('line.link')
    .data(root.links())
    .join('line')
    .classed('link', true)
    .attr('x1', (d: any) => d.source.x)
    .attr('y1', (d: any) => d.source.y + 10)
    .attr('x2', (d: any) => d.target.x)
    .attr('y2', (d: any) => d.target.y + 10);








