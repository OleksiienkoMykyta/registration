function emailHandler(validator, email, selector) {
    if(!validator(email)) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'Gmail is invalid';
        document.querySelector(`#${selector}`).classList.add('notValid');

        document.querySelector('#titleWrapper').innerHTML = 'Smth. went wrong!';
        document.querySelector('#titleWrapper').classList.add('notValid');
        return false;
    }

    document.querySelector(`#${selector}`).className = '';
    document.querySelector(`#${selector}`).innerHTML = 'Great, your email is valid';
    document.querySelector(`#${selector}`).classList.add('valid');
    return true;
}

export {emailHandler};