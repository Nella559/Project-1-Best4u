 document.addEventListener(
      "DOMContentLoaded", () => {
          new Mhead( "#my-header", {
              hide: 200
          });
      }
  );

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
document.body.classList.toggle('hidden')
});