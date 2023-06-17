const nav = {
    init: function() {
        nav.pages = document.querySelectorAll('.page')
        nav.links = document.querySelectorAll('.navbar a');
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

        nav.pages.forEach(function(page) {
            page.classList.remove('show');
        });

        nav.show = document.querySelector('#'+event.currentTarget.id+'_content')
        nav.show.classList.add('show');
    
    }
};

document.addEventListener('DOMContentLoaded', function() {
    nav.init();
});