function firstName(name, selector) {
    if (!name.length) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'FirstName field is empty';
        document.querySelector(`#${selector}`).classList.add('notValid');

        document.querySelector('#titleWrapper').innerHTML = 'Smth. went wrong!';
        document.querySelector('#titleWrapper').classList.add('notValid');
        return false;
    }

    if (!lengthLimit(name)) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'First name Is not valid';
        document.querySelector(`#${selector}`).classList.add('notValid');

        document.querySelector('#titleWrapper').innerHTML = 'Smth. went wrong!';
        document.querySelector('#titleWrapper').classList.add('notValid');
        return false;
    }


    document.querySelector(`#${selector}`).className = '';
    document.querySelector(`#${selector}`).innerHTML = 'Great, nice to meet you!';
    document.querySelector(`#${selector}`).classList.add('valid');
    return true;

}

function lengthLimit(element) {
    let max_chars = 255;

    if (element.length > max_chars) {
        return false;
    }
    return true;
}

export {firstName};