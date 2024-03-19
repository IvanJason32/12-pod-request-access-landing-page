const searchElement = (className, callback) => {
    const element = document.getElementsByClassName(className);
    for (let index = 0; index < element.length; index++) {
        callback(element[index]);
    }
};

const checkEmail = (email) => {
    //usamos una expresion regular que nos ayude a definir como debe ser la estructura de una
    //dirección email
    let structure_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!structure_email.test(email.value)) {
        console.log("No es valido");
        let alert = document.querySelector(".txt-alert");
        alert.innerText = "Oops! Please check your email";
    } else {
        let alert = document.querySelector(".txt-alert");
        alert.innerText = "";
    }
};

const init = () => {
    searchElement('btn-input', (el) =>
    el.addEventListener('click', () => checkEmail(document.querySelector(".email-input")))
    );
}

init()