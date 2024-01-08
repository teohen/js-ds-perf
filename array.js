const vet = new Array()

function setup(loop) {
    const str = 'target'
    for (let i = 0; i < loop; i++){
        vet.push('err')
    }
    vet.push(str)
    console.log('array set', vet.length)
}

function run() {
    return vet.includes('target')
}

module.exports = {
    setup,
    run
}
