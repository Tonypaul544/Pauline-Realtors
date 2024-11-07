
//CREATE VAREABLES TO STORE THE DATA

const hambogar = document.querySelector(".menu");
var disapear = document.querySelector(".disapear");
var body = document.querySelector(".body");
var navbar = document.querySelector(".right");

      //DISPLAY NAVBAR
      hambogar.addEventListener("click", showMenu);
      function showMenu() {
        navbar.style.display = "flex";
      };
      
      
      //REMOVE NAVBAR
      disapear.addEventListener("click", removeMenuBtn);
      function removeMenuBtn () {
        navbar.style.display = "None";
      };
      

      //REMOVE NAVBAR BY BODY
      body.addEventListener("click", removeMenuBtn);
      function removeMenuBtn () {
        navbar.style.display = "None";
      };