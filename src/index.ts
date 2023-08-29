import * as d3 from 'd3';

const data = [
    [10, 20, 30],
    [40, 60, 80],
    [100, 200, 300]
]

const chordGenerator = d3.chord();

const chords = chordGenerator(data)
console.log(chords)

const ribbonGenerator: any = d3.ribbon().radius(200)

d3.select('g')
.selectAll('path')
.data(chords)
.join('path')
.attr('d', ribbonGenerator)

