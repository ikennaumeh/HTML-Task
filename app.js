//Global Variables

const form = document.querySelector('#form'),
    submitBtn = document.querySelector('#button'),
    name = document.querySelector('#name'),
    email = document.querySelector('#email'),
    title = document.querySelector('#title'),
    message = document.querySelector('#message'),
    nameErr = document.querySelector('#name-error'),
    emailErr = document.querySelector('#emailErr'),
    messageErr = document.querySelector('#messageErr'),
    titleErr = document.querySelector('#titleErr');

let errors = {
    name: true,
    email: true,
    title: true,
    message: true,
};

// Event Listeners

eventListener();

function eventListener() {

    document.addEventListener('DOMContentLoaded', appInit);

    name.addEventListener('blur', validateName);
    email.addEventListener('blur', validateEmail);
    title.addEventListener('blur', validateTitle);
    message.addEventListener('blur', validateMessage);

}


// Functions
function validateName() {
    if (this.value.length < 4) {
        this.style.borderColor = 'red';
        nameErr.style.display = 'block';
        nameErr.style.color = 'red';
        errors.name = true;

    } else {
        this.style.borderColor = 'green';
        nameErr.style.display = 'none';
        errors.name = false;
    }
    cneckErrors();
}

function validateEmail() {
    let email = this.value;
    if (email.indexOf('@') !== -1 && email.length > 4) {
        // if @ is not there and length is < 4 
        this.style.borderColor = 'green';
        emailErr.style.display = 'none';
        errors.email = false;
        
    } else {
        this.style.borderColor = 'red';
        emailErr.style.display = 'block';
        emailErr.style.color = 'red';
        errors.email = true;
    }
    cneckErrors()
}

function validateTitle() {
    if (this.value.length < 4) {
        this.style.borderColor = 'red';
        titleErr.style.display = 'block';
        titleErr.style.color = 'red';
        errors.title = true;

    } else {
        this.style.borderColor = 'green';
        titleErr.style.display = 'none';
        errors.title = false;
    }
    cneckErrors()
}

function validateMessage() {
    if (this.value.length < 20) {
        this.style.borderColor = 'red';
        messageErr.style.display = 'block';
        messageErr.style.color = 'red';
        errors.message = true;

    } else {
        this.style.borderColor = 'green';
        messageErr.style.display = 'none';
        errors.message = false;
    }

    cneckErrors();
}

function cneckErrors() {
    if (errors.email == false && errors.message == false && errors.name == false && errors.title == false) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
        submitBtn.classList.add('hover');
        submitBtn.style.borderColor = 'green'

    } else {
        submitBtn.disabled = true;
        submitBtn.classList.add('disabled');
        submitBtn.classList.remove('hover');
        submitBtn.style.borderColor = 'red'
    }
}

function appInit() {
    submitBtn.disabled = true;
    submitBtn.classList.add('disabled');
    nameErr.style.display = 'none';
    emailErr.style.display = 'none';
    messageErr.style.display = 'none'
    titleErr.style.display = 'none';
    form.reset();
}



