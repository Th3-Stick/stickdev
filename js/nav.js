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
    },
};


document.addEventListener('DOMContentLoaded', function() {
    nav.init();
});


const home = {
    init: function(){
        home.pages = document.querySelectorAll('.page')
        home.homePage = document.querySelector('.home');
        home.onglets = document.querySelector('#link_home');
        home.onglets.addEventListener('click', home.handleclick);
    },
    handleclick: function(event) {
        event.preventDefault();
        home.pages.forEach(function(page) {
            page.classList.remove('show');
        });
        home.homePage.classList.add('show');
    }
};

home.init();


const portfolio = {
    init: function(){
        portfolio.pages = document.querySelectorAll('.page')
        portfolio.homePage = document.querySelector('.portfolio');
        portfolio.onglets = document.querySelector('#link_portfolio');
        portfolio.onglets.addEventListener('click', portfolio.handleclick);
    },
    handleclick: function(event) {
        event.preventDefault();
        portfolio.pages.forEach(function(page) {
            page.classList.remove('show');
        });
        portfolio.homePage.classList.add('show');
    }
};

portfolio.init();