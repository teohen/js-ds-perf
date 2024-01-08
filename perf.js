const { performance, PerformanceObserver } = require('perf_hooks')

const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
        console.log(entry);
    });
});
observer.observe({ entryTypes: ["measure"], buffer: true })


// performance.measure('perf_ds', 'start', 'end');


module.exports = performance
