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

const projets = {
    init: function(){
        projets.pages = document.querySelectorAll('.page')
        projets.cible = document.querySelector('.projets');
        projets.onglets = document.querySelector('#link_projets');
        projets.onglets.addEventListener('click', projets.handleclick);
    },
    handleclick: function(event) {
        event.preventDefault();
        projets.pages.forEach(function(page) {
            page.classList.remove('show');
        });
        projets.cible.classList.add('show');
    }
};

projets.init();

const about = {
    init: function(){
        about.pages = document.querySelectorAll('.page')
        about.cible = document.querySelector('.about');
        about.onglets = document.querySelector('#link_about');
        about.onglets.addEventListener('click', about.handleclick);
    },
    handleclick: function(event) {
        event.preventDefault();
        about.pages.forEach(function(page) {
            page.classList.remove('show');
        });
        about.cible.classList.add('show');
    }
};

about.init();


const blog = {
    init: function(){
        blog.pages = document.querySelectorAll('.page')
        blog.cible = document.querySelector('.blog');
        blog.onglets = document.querySelector('#link_blog');
        blog.onglets.addEventListener('click', blog.handleclick);
    },
    handleclick: function(event) {
        event.preventDefault();
        blog.pages.forEach(function(page) {
            page.classList.remove('show');
        });
        blog.cible.classList.add('show');
    }
};

blog.init();

const contact = {
    init: function(){
        contact.pages = document.querySelectorAll('.page')
        contact.cible = document.querySelector('.contact');
        contact.onglets = document.querySelector('#link_contact');
        contact.onglets.addEventListener('click', contact.handleclick);
    },
    handleclick: function(event) {
        event.preventDefault();
        contact.pages.forEach(function(page) {
            page.classList.remove('show');
        });
        contact.cible.classList.add('show');
    }
};

contact.init();