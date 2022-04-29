// life is easy //
function $_(selector, context) {
    return (context || document).querySelectorAll(selector);
}
function $(selector, context) {
    return (context || document).querySelector(selector);
}

// life is easy //

//swap pages
function getLoginPage(e){
    e.preventDefault();
    signupPage.classList.add("translateX-100")
    loginPage.classList.remove("translateX100")
    
}

function getSignupPage(e){
    e.preventDefault();
    signupPage.classList.remove("translateX-100")
    loginPage.classList.add("translateX100")
}

//

function throwError(){


}

















function test(e){
    cPass.pattern = e.target.value
}



const errorMsg = {
    noName: "Please enter your first name"
}

const isName = false;
const isEmail = false;
const isPhone = false;
const isPass = false;
const isCPass= false;


const signupPage = $('.signup');
const signupForm = $('form', signupPage)
const fnameDiv = $('.input-fname', signupPage);
const fname = $('#fname', fnameDiv);
const email = $('.input-email', signupPage);
const userName = $('#uname', signupPage);
const phone = $('#phone', signupPage);
const pass = $('#password', signupPage);
const cPass = $('#c-password', signupPage);
const createBtn = $('#create', signupPage);
const loginLink = $('a', signupPage);
const loginPage = $('.login');
const signupLink = $('a', loginPage);

loginLink.addEventListener('click', getLoginPage);
signupLink.addEventListener('click', getSignupPage);

signupForm.addEventListener('submit', test)
// createBtn.addEventListener('click', test)

pass.addEventListener('input',test);