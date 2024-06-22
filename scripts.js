document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggle.addEventListener('click', function () {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Agregamos el evento para mostrar/ocultar el submenú
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            this.querySelector('.submenu').style.display = this.querySelector('.submenu').style.display === 'block' ? 'none' : 'block';
        });
    });
});