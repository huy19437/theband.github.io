var header = document.getElementById('header');
var mobilemenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobilemenu.onclick = () => {
    let scroll1 = window.scrollY;
    var isClose = header.clientHeight === headerHeight
    if (isClose) {
        header.style.height = 'auto';
        header.style.backgroundColor = '#000';
    } else {
        if (scroll1 === 0) {
            header.style.height = null;
            header.style.backgroundColor = 'transparent';
        } else {
            header.style.height = null;
        }
        window.onscroll = function() {
            let scroll2 = window.scrollY;
            if (scroll2 < 100) {
                header.style.height = null;
                header.style.backgroundColor = 'transparent';
            } else {
                header.style.backgroundColor = '#000';
                header.style.height = null;
            }
        }
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (let i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            e.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}


var modal = document.getElementById('modal');
var modalOverlay = document.getElementById('modal__overlay');
var modalBody = document.getElementById('modal__body');
var btns = document.querySelectorAll('.buy-ticket-btn');
var closeBtn = document.querySelector('.close-btn');

btns.forEach(element => {
    element.onclick = function() {
        modal.style.display = 'flex';
        modalOverlay.style.display = 'flex';
        modalBody.style.display = 'flex';
    }
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    modalBody.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modalOverlay) {
        modal.style.display = "none";
    }
}

// Change header color
window.onscroll = function() {
    var scroll3 = window.scrollY;
    if (scroll3 > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};