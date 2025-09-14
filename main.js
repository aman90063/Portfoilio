/*................................toggle icon bar...........*/

let menuIcon = document.querySelector('#menu-Icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
};
/*..........................scroll seection active link.........*/

let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height) {
            navlink.forEach.apply(links => {
                link.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };

        });

        /*....................sticky navbar...............*/
        let header = document.querySelector('header');
        header.classlist.toggle('sticky', window.scrollY > 100);

        /*...................remove toggle icon and navbar.....*/
        menuIcon.classList.remove('fa-xmark');
        navbar.classlist.remove('active');
}