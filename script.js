function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const socialContainer = document.getElementById("social-container");

  
  if ("vibrate" in navigator) {
    navigator.vibrate([200, 100, 200]);
  }

  menu.classList.toggle("open");
  icon.classList.toggle("open");
 
  socialContainer.classList.toggle("hidden"); // Toggle the visibility of the social container
}
