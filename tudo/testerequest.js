const url12 = 'https://docs.google.com/forms/d/e/1FAIpQLSfFHW24G-yqNWvIZj09plLsuexXMuUU6mPiKm7X3LNMZ5Hp3Q/formResponse?ifq&entry.457985980=teste&entry.1110137686=banana'

const url13 = 'https://docs.google.com/forms/d/e/1FAIpQLSfFHW24G-yqNWvIZj09plLsuexXMuUU6mPiKm7X3LNMZ5Hp3Q/formResponse?ifq&entry.1110137686=cenoura&entry.2096807315='



function mandar(){

    const paula = new XMLHttpRequest()
    let txt = document.querySelector('input#service')
    let texto = txt.value
    let lista = texto.split(' ')

    let i = 0

    function envia(){
        if(lista[i] != ''){
            paula.open('GET',url13+lista[i]) 
            paula.send()
            
        }
        
        i++;

        if(i === lista.length){
            clearInterval(tempo)
        }
    }

    
    let tempo = setInterval(envia, 500);  

}

