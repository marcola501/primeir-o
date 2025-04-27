function numeração(num)
 {
    const conteudo = document.getElementById('conteudo'+num)

    if (conteudo.style.display === 'none') {
        conteudo.style.display = 'block'
    }
     else {
        conteudo.style.display = 'none'
    }
};