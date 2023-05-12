function registerSubmit(event){
  event.preventDefault();

  var xhrRegister = new XMLHttpRequest();
  var dataRegister = new FormData(this);

  xhrRegister.open('POST', 'controller/function/register.php?task=register');
  xhrRegister.send(dataRegister);

  xhrRegister.onreadystatechange = function(){
    if(xhrRegister.readyState == 4 && xhrRegister.status == 200){
      var response = JSON.parse(this.responseText);
      console.log(response);
      if(response.error == 0){
        registerResponse.classList.add('success');
        registerResponse.classList.remove('error');
        registerResponse.innerHTML = 'Utilisateur ajouter avec success';
        setTimeout(()=>{
          registerResponse.classList.remove('success');
          registerResponse.innerHTML = '';
          register.classList.add('hidden');
          btnRegister.classList.remove('active');
          //clear input
          inputsRegister.forEach(function(input){
            input.value ="";
          });
        },1000);
      }
      if(response.error == 1){
        registerResponse.classList.add('error');
        registerResponse.innerHTML = 'Email et confirmation email ne sont pas identique';
      }
      if(response.error == 2){
        registerResponse.classList.add('error');
        registerResponse.innerHTML = 'L`\'utilisateur existe déjà';
      }
      if(response.error == 3){
        registerResponse.classList.add('error');
        registerResponse.innerHTML = 'Mot de passe et confirmation mot de passe ne sont pas identique';
      }
    }else if(xhrRegister.readyState == 4){
      console.log('error Register');
    }
  }

  return false;
}

register.addEventListener('submit', registerSubmit);