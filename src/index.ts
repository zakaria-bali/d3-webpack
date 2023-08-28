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

const treemapLayout = d3.treemap()
    .size([800,800])
    .paddingOuter(16)

treemapLayout(root)

const nodes = d3.select('svg g')
    .selectAll('g')
    .data(root.descendants())
    .join('g')
    .attr('transform', (d: any) => 'translate(' + [d.x0, d.y0] + ')');


nodes.append('rect')
    .attr('width', (d: any) => d.x1 - d.x0)
    .attr('height', (d: any) => d.y1 - d.y0)

nodes.append('text')
    .attr('dx', 4)
    .attr('dy', 14)
    .text((d) => d.value)


