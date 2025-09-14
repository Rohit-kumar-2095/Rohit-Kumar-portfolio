// You can add interactive JS if needed, for now, smooth scroll
document.querySelectorAll('a.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        if(this.hash) {
            e.preventDefault();
            let target = document.querySelector(this.hash);
            target.scrollIntoView({behavior: "smooth"});
        }
    });
});
