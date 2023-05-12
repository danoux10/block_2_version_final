//link set visibility

register.classList.add('hidden');
login.classList.add('hidden');
deconnexion.classList.add('hidden');
sinistreContent.classList.add('hidden');
btnDeconnexion.classList.add('hidden');
sinistreResponse.classList.add('hidden');

//link function show form
function showRegister(){
  btnRegister.classList.add('active');
  register.classList.remove('hidden');
}

function showLogin(){
  navBtnLogin.classList.add('active');
  homeBtnLogin.classList.add('active');
  login.classList.remove('hidden');
}

function showDeconnexion(){
  btnDeconnexion.classList.add('active');
  deconnexion.classList.remove('hidden');
}

//link function hidden form
function hiddenRegister(){
  btnRegister.classList.remove('active');
  register.classList.add('hidden');
}
function hiddenLogin(){
  navBtnLogin.classList.remove('active');
  homeBtnLogin.classList.remove('active');
  login.classList.add('hidden');
}
function hiddenDeconnexion(){
  btnDeconnexion.classList.remove('active');
  deconnexion.classList.add('hidden');
}

function showSinistre(){
  navBtnLogin.classList.add('hidden');
  btnRegister.classList.add('hidden');
  homePage.classList.add('hidden');

  btnDeconnexion.classList.remove('hidden');
  sinistreContent.classList.remove('hidden');
}

function showHome(){
  navBtnLogin.classList.remove('hidden');
  btnRegister.classList.remove('hidden');
  homePage.classList.remove('hidden');

  btnDeconnexion.classList.add('hidden');
  sinistreContent.classList.add('hidden');

  pictureContent.innerHTML = "";
  viewDepanneur.innerHTML = '';
}


//link affect function show
btnRegister.addEventListener('click',showRegister);
navBtnLogin.addEventListener('click',showLogin);
homeBtnLogin.addEventListener('click',showLogin);
btnDeconnexion.addEventListener('click',showDeconnexion);

//link affection function hidden
closeRegister.addEventListener('click',hiddenRegister);
closeLogin.addEventListener('click',hiddenLogin);
closeDeconnexion.addEventListener('click',hiddenDeconnexion);
cancelDeconnexion.addEventListener('click',hiddenDeconnexion);