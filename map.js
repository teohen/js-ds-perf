const vet = new Map()
const target = 'target'

function setup(loop) {
    for (let i = 0; i < loop; i++){
        vet.set('err' + i, 'value err')
    }
    vet.set(target, 'value str')
    console.log('map set', vet.size)
}

function run() {
    return vet.get(target)
}

module.exports = {
    setup,
    run
}
