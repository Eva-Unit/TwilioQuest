let status = Number(process.argv[2])

if (status === 0) {
    console.log('alive')
}

if (status === 1) {
    console.log('flowering')
}

if (status === 2) {
    console.log('shedding')
}

if (status > 2) {
    console.log('other')
}