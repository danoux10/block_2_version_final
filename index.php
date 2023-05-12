<?php
include_once 'controller/head.html';

include_once 'controller/navbar.html';

//form register login and deconnexion
echo "<main>";
include_once 'view/homePage.html';
include_once 'view/register.html';
include_once 'view/login.html';
include_once 'view/deconnexion.html';
//sinistre form
include_once 'view/sinistre.html';

echo "</main>";

include_once 'controller/footer.html';

?>