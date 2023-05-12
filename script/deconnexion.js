function deconnexionSubmit(event){
  var xhrDeconnexion = new XMLHttpRequest();
  var dataDeconnexion = new FormData(this);

  xhrDeconnexion.open('POST','controller/function/deconnexion.php?task=deconnexion');
  xhrDeconnexion.send(dataDeconnexion);

  xhrDeconnexion.onreadystatechange = function(){
    if(xhrDeconnexion.readyState == 4 && xhrDeconnexion.status == 200){
      var result = JSON.parse(this.responseText);
      if(result.error == 0){
        showHome();
      }
    }else if(xhrDeconnexion.readyState == 4){
      console.log('error Deconnexion');
    }
  }
}

deconnexion.addEventListener('submit',deconnexionSubmit);