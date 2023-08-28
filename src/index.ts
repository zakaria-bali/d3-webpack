import * as d3 from 'd3';

const getData = () => {
	let data: number[] = [];
	let numItems = Math.ceil(Math.random() * 5);

	for(let i=0; i<numItems; i++) {
		data.push(40);
	}

	return data;
}

const update = (data: number[]) => {
	d3.select('svg')
		.selectAll('circle')
		.data(data)
		.join(
			(enter) => {
				return enter.append('circle')
					.attr('fill', 'green');
			},
			(update) => {
				return update.attr('fill', 'orange');
			},
            (exit) => {
                return exit.attr('fill', 'red')
            }
		)
		.attr('cx', (d, i) => {
			return i * 100;
		})
		.attr('cy', 50)
		.attr('r', (d: number) => {
			return 0.5 * d;
		})
}

const updateAll = () => {
	let myData = getData();
    console.log('Update all')
    console.log(myData)
	update(myData);
}

updateAll();

d3.select("button")
	.on("click", updateAll);

