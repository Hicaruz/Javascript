const doRequestsSec = async () => {
    const fakeReq = () => new Promise((resolve) => {
        setTimeout(() => resolve("request finished..."), 1500)
    })

    const requests = [...Array(10)].fill(fakeReq)
    console.time("secuencial")

    for (const req of requests) {
        const message = await req()
        // console.log(message)
    }
    console.timeEnd("secuencial")

}
const doRequestsThen = async () => {
    const fakeReq = () => new Promise((resolve) => {
        setTimeout(() => resolve("request finished..."), 1500)
    })

    const requests = [...Array(10)].fill(fakeReq)
    console.time("then")

    for (const req of requests) {
        req().then((message) => {
            // console.log(message)
        })
    }
    console.timeEnd("then")

}
const doRequestsPro = async () => {
    const fakeReq = () => new Promise((resolve) => {
        setTimeout(() => resolve("request finished..."), 1500)
    })

    const requests = [...Array(10)].fill(fakeReq)
    const results = []
    console.time("promises")

    for (const req of requests) {
        results.push(req())
    }
    const messages = await Promise.all(results)
    for (const message of messages) {
        // console.log(message)

    }
    console.timeEnd("promises")

}
doRequestsThen()
doRequestsSec()
doRequestsPro()
