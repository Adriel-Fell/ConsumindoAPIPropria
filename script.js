const lista = document.getElementById('lista');

async function recuperarTodosUsuarios() {
    let usuarios = await fetch('http://localhost:8000/usuarios')
    let json = await usuarios.json()
    for (let i = 0; i < json.length; i++) {
        let item = json[i]        
        let li = document.createElement('li')
        li.textContent = "Informações do usuario (Nome, Idade, Email): " + item.nome + ", " + item.idade + ", " + item.email
        lista.appendChild(li)
    }

}

recuperarTodosUsuarios()