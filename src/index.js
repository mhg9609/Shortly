import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './styles/style.pcss';

const modal = document.getElementById("modal-menu");
const btn = document.getElementById("bars");

btn.onclick = function () {
    modal.style.display = "block";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
