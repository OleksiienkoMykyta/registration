function generateElements(name) {
    const wrap = document.createElement('div');
    wrap.id = 'wrap';
    document.body.append(wrap);



    const div = document.createElement('div');
    div.id = 'div';
    document.querySelector('#wrap').append(div);



    const titleWrapper = document.createElement('div');
    titleWrapper.id = 'titleWrapper';
    document.querySelector('#wrap').append(titleWrapper);



    const divText = document.createTextNode('Fill the fields');
    divText.id = 'divText';
    document.querySelector('#titleWrapper').append(divText);

    //////////////////////////////////////////////////////////////////

    const firstName = document.createElement('input');
    firstName.id = 'firstName';
    firstName.placeholder = "name (< 256 characters)";
    document.querySelector('div').append(firstName);



    const firstNameText = document.createElement('p');
    firstNameText.innerHTML = 'Enter your NAME*';
    firstNameText.id = 'firstNameText';
    document.querySelector('#firstName').before(firstNameText);



    const lastName = document.createElement('input');
    lastName.id = 'lastName';
    lastName.placeholder = "lastName (< 256 characters)";
    document.querySelector('div').append(lastName);



    const lastNameText = document.createElement('p');
    lastNameText.innerHTML = 'Enter your LASTNAME*';
    lastNameText.id = 'lastNameText';
    document.querySelector('#lastName').before(lastNameText);



    const email = document.createElement('input');
    email.id = 'email';
    email.placeholder = "email";
    document.querySelector('div').append(email);



    const emailText = document.createElement('p');
    emailText.innerHTML = 'Enter your EMAIL*';
    emailText.id = 'emailText';
    document.querySelector('#email').before(emailText);



    const password = document.createElement('input');
    password.id = 'password';
    password.rules = 'require';
    password.placeholder = "password (8-64 characters)";
    document.querySelector('div').append(password);



    const passwordText = document.createElement('p');
    passwordText.innerText = 'Create PASSWORD*';
    passwordText.id = 'passwordText';
    document.querySelector('#password').before(passwordText);


    const singUp = document.createElement('button');
    singUp.id = 'singUp';
    singUp.innerHTML = 'Sign up'
    document.querySelector('div').append(singUp);
}

export {generateElements};