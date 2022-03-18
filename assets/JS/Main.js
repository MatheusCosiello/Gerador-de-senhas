const sliderElement = document.querySelector('#slider');
const buttonElemente = document.querySelector('#container-button');

const sizePassword = document.querySelector('#tamanho-valor');
// utilizando let em password pois o seu valor sempre ser alterado.
let password = document.querySelector('#password');


const charSet = "abcdefghijklmnopqretuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-";
let newPassword = "";

// tamanho da semnha sendo mostrado 
sizePassword.innerHTML = sliderElement.value;

// altera o valor do tamanho da senha mostrado para user | função com propriedade oninput
slider.oninput = function () { sizePassword.innerHTML = this.value };


// gera a senha iterando um lopoping atraves do charset com valor maximo de caracteres definido pelo usuario atraves do sliderElemente 

function generatePassword() {

    let pass = "";
    for (let i = 0, n = charSet.length; i < sliderElement.value; i++) {
        pass += charSet.charAt(Math.floor(Math.random() * n))
    }

    password.innerHTML = pass;
    newPassword = pass;
}

