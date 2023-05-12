function loginSubmit(event){
  event.preventDefault();

  var xhrLogin = new XMLHttpRequest();
  var dataLogin = new FormData(this);

  xhrLogin.open('POST','controller/function/login.php?task=login');
  xhrLogin.send(dataLogin);

  xhrLogin.onreadystatechange = function(){
    if(xhrLogin.readyState == 4 && xhrLogin.status == 200){
      var result = JSON.parse(this.responseText);
      if(result.error == 0){
        loginResponse.classList.remove('error');
        loginResponse.classList.add('success');
        loginResponse.innerHTML = 'Connexion effectuer avec success';
        setTimeout(()=>{
          loginResponse.classList.remove('success');
          loginResponse.innerHTML = '';
          login.classList.add('hidden');
          navBtnLogin.classList.remove('active');
          homeBtnLogin.classList.remove('active');
          //clear input
          inputsLogin.forEach(function(input){
            input.value ="";
          });
          showSinistre();
        },1000);
      }
      if(result.error == 1){
        loginResponse.classList.add('error');
        loginResponse.innerHTML = 'Email non reconnue';
      }
      if(result.error == 2){
        loginResponse.classList.add('error');
        loginResponse.innerHTML = 'Mot de passe incorrect';
      }
    }else if(xhrLogin.readyState == 4){
      console.log('error login');
    }
  }

  return false;
}

login.addEventListener('submit',loginSubmit);