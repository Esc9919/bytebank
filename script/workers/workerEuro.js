async function  ConectaAPI() {
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
    const conectaTraduzido = await conecta.json()
    postMessage(conectaTraduzido.EURBRL)
}

addEventListener("message", () => {
    ConectaAPI()
    setInterval(() => ConectaAPI(), 10000)
})