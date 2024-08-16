
function gerar() {
    let container = document.getElementById('container')

    
    let text = document.getElementById('text').value
    let corBack = document.getElementById('corBack').value
    let corText = document.getElementById('corText').value

    if(corBack == 'vini') {
        console.log('estou aqui')
        container.innerHTML = `
            <marquee style="background: linear-gradient(to right, red, orange, yellow, green, blue, violet, purple); color: ${corText};">${text}</marquee>
            `
    }else {
        container.innerHTML = `
            <marquee style="background-color: ${corBack}; color: ${corText};">${text}</marquee>
        `
    }
}