import {generateElements} from "./generateFields";
import css from "./style.css";
import zxcvbn from "zxcvbn";
import {checkPassword} from "./check/password";
import {validateEmail} from "./check/email";
import {emailHandler} from "./check/emailHandler";
import {firstName} from "./check/firstName";
import {lastName} from "./check/lastName";

document.addEventListener('DOMContentLoaded', () => {
    generateElements()

    document.querySelector('#singUp').addEventListener('click', () => {
        let passwordValue = document.querySelector('#password').value;
        let passwordLevel = zxcvbn(passwordValue);
        let score = passwordLevel.score;
        let passwordBooleanVal = checkPassword(password, score, 'passwordText', passwordValue);

        let emailValue = document.querySelector('#email').value;
        let emailBooleanVal = emailHandler(validateEmail, emailValue, 'emailText');

        let firstNameVal = document.querySelector('#firstName').value;
        let firstNameBooleanVal = firstName(firstNameVal, 'firstNameText');

        let lastNameVal = document.querySelector('#lastName').value;
        let lastNameBooleanVal = lastName(lastNameVal, 'lastNameText');

        if(passwordBooleanVal && emailBooleanVal && firstNameBooleanVal && lastNameBooleanVal) {
            document.querySelector('#titleWrapper').innerHTML = 'Congratulations';
            document.querySelector('#titleWrapper').classList.add('valid');

            window.location.href = 'http://localhost:63342/tasks/registration/src/activation/activation.html';
        }
    })
})


    // if (element.value.length > max_chars) {
    //     element.value = element.value.substring(0, max_chars);
    // }


// 111wxedrcfvygbuhnjimk,sxdrcftvgybhunjimkdrcftvgbhunjmk,lfctvgbhunjimk,lfrtgvybhunijmk,l.;tgyhbunjimko,l.;tgyhbunjimko,l;tgyhujioklt6gyhujikolptgyhujikolprtfgyhujikolrtfgyhujikolrftgyhujikoltyhujiolt6yuio9ptgyhujikol111111111111111111111111ghdfgdfhfghfghgfhfghfghfdghdfghfg111111111111111111111111111111111111111111