addEventListener("message", event => {
    conectaAPI()
    setInterval(() => conectaAPI(), 10000)
})

async function conectaAPI() {
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/JPY-BRL')
    const conectaTraduzido = await conecta.json()
    postMessage(conectaTraduzido.JPYBRL)
}