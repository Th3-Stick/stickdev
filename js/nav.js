const nav = {
    init: function() {
        nav.pages = document.querySelectorAll('.page')

        nav.homePage = document.querySelector('.home');
        nav.portfolio = document.querySelector('.portfolio');
        nav.projets = document.querySelector('.projets');
        nav.about = document.querySelector('.about');
        nav.blog = document.querySelector('.blog');
        nav.contact = document.querySelector('.contact');

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
        if (event.target.id === 'link_home' || event.target.id === 'link_brand') {
            nav.homePage.classList.add('show');
        } else if (event.target.id === 'link_portfolio')  {
            nav.portfolio.classList.add('show');
        } else if (event.target.id === 'link_projets') {
            nav.projets.classList.add('show');
        } else if (event.target.id === 'link_about') {
            nav.about.classList.add('show');
        } else if (event.target.id === 'link_blog') {
            nav.blog.classList.add('show');
        } else if (event.target.id === 'link_contact') {
            nav.contact.classList.add('show');
        } 
    }
};


document.addEventListener('DOMContentLoaded', function() {
    nav.init();
});