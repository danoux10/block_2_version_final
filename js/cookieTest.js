function getCookie(name){
  const cookie = document.cookie.split(';');
  const value = cookie
      .find(c=>c.startsWith(name))
      ?.split('=')[1];
  if(value === undefined){
    return null;
  }
  return decodeURIComponent(value)
}

if(getCookie('userId') != null){
  navBtnLogin.classList.add('hidden');
  btnRegister.classList.add('hidden');
  homePage.classList.add('hidden');

  btnDeconnexion.classList.remove('hidden');
  sinistreContent.classList.remove('hidden');
}

if(getCookie('userId') == null){
  navBtnLogin.classList.remove('hidden');
  btnRegister.classList.remove('hidden');
  homePage.classList.remove('hidden');

  btnDeconnexion.classList.add('hidden');
  sinistreContent.classList.add('hidden');
}