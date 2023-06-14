const nav = {
    links: null,

    init: function() {
        nav.links = document.querySelectorAll('.navbar-nav a');
        nav.links.forEach(function(link) {
            link.addEventListener("click", nav.handleClickNav);
        });
    },

    handleClickNav: function(event) {
        event.preventDefault();
        nav.links.forEach(function(link) {
            link.classList.remove('active');
        });
        this.classList.add('active');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    nav.init();
});
