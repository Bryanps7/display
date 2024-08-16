
function gerar() {
    let container = document.getElementById('container')

    
    let text = document.getElementById('text').value
    let corBack = document.getElementById('corBack').value
    let corText = document.getElementById('corText').value
    let speed = Number(document.getElementById('speed').value)

    container.innerHTML = corBack.toLowerCase()

    if(corBack == 'rgb') {
        console.log('estou aqui')
        container.innerHTML = `
            <marquee scrollamount='${speed}' style="background: linear-gradient(to right, red, orange, yellow, green, blue, violet, purple); color: ${corText.toLowerCase()};">${text}</marquee>
            `
    }else {
        container.innerHTML = `
            <marquee scrollamount='${speed}' style="background-color: ${corBack.toLowerCase()}; color: ${corText.toLowerCase()};">${text}</marquee>
        `
    }
}