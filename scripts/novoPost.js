function adicionarPost(event) {
    event.preventDefault() //impede que a tela recarregue

    const dataCriacao = new Date()
    const dia = String(dataCriacao.getDate()).padStart(2, '0') // máx 2 caracteres, na falta de 1, preenche com o nº 0 no começo
    const mes = String(dataCriacao.getMonth() + 1).padStart(2, '0') // getmonth inicia em 0, então adicionamos +1
    const ano = dataCriacao.getFullYear()
    const dataAtual = `${dia}/${mes}/${ano}`


    const titulo = document.getElementById('titulo').value
    const descricao = document.getElementById('descricao').value
    const categoria = document.getElementById('categoria').value
    const foto = document.getElementById('foto').value

    if (titulo === "") {
        document.getElementById('titulo').style.borderColor = "red"
        document.getElementById('titulo').style.borderWidth = "2px"
        document.getElementById('error-titulo').innerText = "Título é obrigatório"
    } else {
        document.getElementById('titulo').style.borderColor = ""
        document.getElementById('titulo').style.borderWidth = ""
        document.getElementById('error-titulo').innerText = ""
    }

    if (descricao === "") {
        document.getElementById('descricao').style.borderColor = "red"
        document.getElementById('descricao').style.borderWidth = "2px"
        document.getElementById('error-descricao').innerText = "Descrição é obrigatória"
    } else {
        document.getElementById('descricao').style.borderColor = ""
        document.getElementById('descricao').style.borderWidth = ""
        document.getElementById('error-descricao').innerText = ""
    }

    if (categoria === "") {
        document.getElementById('categoria').style.borderColor = "red"
        document.getElementById('categoria').style.borderWidth = "2px"
        document.getElementById('error-categoria').innerText = "Categoria é obrigatória"
    } else {
        document.getElementById('categoria').style.borderColor = ""
        document.getElementById('categoria').style.borderWidth = ""
        document.getElementById('error-categoria').innerText = ""
    }

    if (foto === "") {
        document.getElementById('foto').style.borderColor = "red"
        document.getElementById('foto').style.borderWidth = "2px"
        document.getElementById('error-foto').innerText = "Link da foto é obrigatório"
    } else {
        document.getElementById('foto').style.borderColor = ""
        document.getElementById('foto').style.borderWidth = ""
        document.getElementById('error-foto').innerText = ""
    }

    if (titulo && descricao && categoria && foto) {

        const post = {
            id: crypto.randomUUID(),
            dataCriacao: dataAtual,
            titulo: titulo,
            descricao: descricao,
            categoria: categoria,
            foto: foto
        }

        let listaNoLocalStorage = JSON.parse(localStorage.getItem("posts")) || [] //pega a lista no local storage

        listaNoLocalStorage.push(post)

        localStorage.setItem("posts", JSON.stringify(listaNoLocalStorage)) //salvar no local storage

        document.getElementById
    }
}
document //seu documento html
    .getElementById('form-post') //ir no documento e localizar o documento com o id form-post
    .addEventListener('submit', adicionarPost) //adicionar um avento de submissão vinculado a função adicionarPost