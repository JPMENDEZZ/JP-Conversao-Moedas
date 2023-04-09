const button = document.getElementById('button-converte')
const select = document.getElementById('select-moeda')

const dolar = 5.06
const euro = 5.56
const libra = 6.28
const dinar =16.60
//const bitcoin = 141.448

const converteValores = () => {
    const inputReais = document.getElementById('inputReal').value
    const realValorTexto = document.getElementById('realValorTexto')
    const dolarValorTexto = document.getElementById('dolarValorTexto')

    realValorTexto.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais);

    if (select.value === 'US$ Dólar americano') {
        dolarValorTexto.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais / dolar);
    }

    if (select.value === '€ Euro') {
        dolarValorTexto.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais / euro);
    }

    if (select.value === '£ Libra') {
        dolarValorTexto.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputReais / libra);
    }
    if (select.value === 'Дин Dinar') {
        dolarValorTexto.innerHTML = new Intl.NumberFormat('CCG', {
            style: 'currency',
            currency: 'KWD',
        }).format(inputReais / dinar)}

    /*if (select.value === '₿ Bitcoin') {
        dolarValorTexto.innerHTML = new Intl.NumberFormat('BTC', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputReais / bitcoin);
    }*/

    }

changeMoeda = () => {
    const moedasNome = document.getElementById('moedasNome')
    const moedaImg = document.getElementById('moedaImg')

    if (select.value === 'US$ Dólar americano') {
        moedasNome.innerHTML = 'Dólar americano'
        moedaImg.src = '/assets/eua.png'
    }

    if (select.value === '€ Euro') {
        moedasNome.innerHTML = 'Euro'
        moedaImg.src = './assets/euro.png'
    }

    /*if (select.value === '₿ Bitcoin') {
        moedasNome.innerHTML = 'Bitcoin'
        moedaImg.src = './assets/bitcoin.png'
    }*/

    if (select.value === '£ Libra') {
        moedasNome.innerHTML = 'Libra'
        moedaImg.src = './assets/libra.png'
    }

    if (select.value === 'Дин Dinar') {
        moedasNome.innerHTML = 'Dinar kuwaitiano'
        moedaImg.src = './assets/dinar.jpg'
    }

    converteValores()
}

button.addEventListener('click', converteValores)
select.addEventListener('change', changeMoeda)
