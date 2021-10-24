function checkPassword(password, score, selector, elem) {
    if (!elem.length) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'Password field is empty';
        document.querySelector(`#${selector}`).classList.add('notValid');

        document.querySelector('#titleWrapper').innerHTML = 'Smth. went wrong!';
        document.querySelector('#titleWrapper').classList.add('notValid');
        return false;
    }

    if(elem.length < 8 || elem.length > 64) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'Password is not valid';
        document.querySelector(`#${selector}`).classList.add('notValid');

        document.querySelector('#titleWrapper').innerHTML = 'Smth. went wrong!';
        document.querySelector('#titleWrapper').classList.add('notValid');
        return false;
    }
    console.log(elem);

    if(score === 0) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'Too guessable';
        document.querySelector(`#${selector}`).classList.add('tooGuessable');
    }

    if(score === 1) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'Very guessable';
        document.querySelector(`#${selector}`).classList.add('veryGuessable');
    }

    if(score === 2) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'Somewhat guessable';
        document.querySelector(`#${selector}`).classList.add('somewhatGuessable');
    }

    if(score === 3) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'Safely unguessable';
        document.querySelector(`#${selector}`).classList.add('safelyUnguessable');
    }

    if(score === 4) {
        document.querySelector(`#${selector}`).className = '';
        document.querySelector(`#${selector}`).innerHTML = 'Very unguessable';
        document.querySelector(`#${selector}`).classList.add('veryUnguessable');
    }

    return true;
}

export {checkPassword};