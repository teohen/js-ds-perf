const perf = require('./perf')
const array = require('./array')
const map = require('./map')

const ds = process.argv[2]
const loop = process.argv[3]

function mark(ds, loop){
    ds.setup(loop)
    perf.mark('start')
    ds.run()
    perf.mark('end')
}


if (ds === 'm') {
    mark(map, loop)
    performance.measure('map perf', 'start', 'end');
} else {
    mark(array, loop)
    performance.measure('array perf', 'start', 'end');
}



