function register(ev) {
    const parent = ev.currentTarget.parentNode;

    const username = parent.children.username.value;
    const password = parent.children.password.value;
    const passwordConfirmation = parent.children.passwordConfirmation.value;

    if (password === passwordConfirmation) {
        alert('Usuário ' + username + ' registrado');
    }
    else {
        alert('As senhas não conferem');
    }

    console.log(parent);
}

const button = document.getElementById('registerButton');
 
button.addEventListener('click', register)

function removeListener() {
    button.removeEventListener('click', register);
    alert('event removed');
}
