function deletar(idRecebido) {
    const postsAtuaisNaMemoria = JSON.parse(localStorage.getItem('posts'))
    const postsFiltrados = postsAtuaisNaMemoria.filter((item) => item.id !== idRecebido)

    localStorage.setItem('posts', JSON.stringify(postsFiltrados))

    document.getElementById('lista-posts').innerText = ''
    carregarDados()
}

function carregarDados() {
    const postNaMemoria = JSON.parse(localStorage.getItem('posts')) || []

    const lista = document.getElementById('lista-posts')

    postNaMemoria.forEach((post) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.textContent = post.titulo;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.textContent = "Admin";
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.textContent = post.categoria;
        tr.appendChild(td3);

        const td4 = document.createElement('td');
        td4.textContent = post.dataCriacao;
        tr.appendChild(td4);

        const tdAcoes = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = "Deletar";
        button.classList.add("buttom-style")
        button.classList.add("buttom-style:hover")
        button.onclick = () => deletar(post.id);
        tdAcoes.appendChild(button);

        tr.appendChild(tdAcoes);

        lista.appendChild(tr);
    })
}

document.addEventListener('DOMContentLoaded', carregarDados) // quando a tela carregar, vai disparar a função 