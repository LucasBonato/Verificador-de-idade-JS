function verificando() {

    let data = new Date();
    let anoAtual = data.getFullYear();
    let anoNasc = document.getElementById('ano');
    let res = document.getElementById('res');
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let sex = document.getElementsByName('radsex');
        let idade = anoAtual - Number(anoNasc.value);
        let genero = '';
        let img = document.createElement('img'); //Criando um <img> pelo JS
        img.setAttribute('id', 'foto');
        if (sex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'img/bebe-m.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'img/adulto-m.png');
            } else if (idade < 122){
                //Idoso
                img.setAttribute('src', 'img/idoso-m.png');
            } else {
                //Caixão
                img.setAttribute('src', 'img/caixao.png');
            }
        } else if (sex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'img/bebe-f.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovem-f.png');
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'img/adulto-f.png');
            } else if (idade < 122){
                //Idoso
                img.setAttribute('src', 'img/idoso-f.png');
            } else {
                //Caixão
                img.setAttribute('src', 'img/caixao.png');
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Determinado um(a) ${genero} com ${idade} anos`;
        res.appendChild(img); //Esta colocando o img dentro da div
    }
}