function verificar(){
    alert('Verificando...')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERROR] Verifique os dados e tenta novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
         if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-m.png')
                document.body.style.background = '#2dadf6'
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
                document.body.style.background = '#2783b7'
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
                document.body.style.background = '#1e648b'
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.png')
                document.body.style.background = '#45738d'
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-f.png')
                document.body.style.background = '#e970fb'
            }else if (idade < 21){
                img.setAttribute('src', 'jovem-f.png')
                document.body.style.background = '#b151bf'
            }else if (idade < 50){
                img.setAttribute('src', 'adulto-f.png')
                document.body.style.background = '#9e60a7'
            }else{
                img.setAttribute('src', 'idoso-f.png')
                document.body.style.background = '#87648c'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
    

}