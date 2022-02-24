"use strict";
var Preloader = new Promise(function(e) {
    var t = document.querySelector(".preloader");
    isExist(t) && (document.onreadystatechange = function() {
        "complete" === document.readyState && setTimeout(function() {
            t.classList.add("fadeOut"),
            setTimeout(function() {
                t.style.display = "none"
            }, 500),
            e()
        }, 1500)
    }
    )
}
)
  , NavbarHover = function() {
    var e = document.querySelectorAll(".navbar-nav .dropdown");
    e.length > 0 && [].forEach.call(e, function(e, t) {
        addListenerMulti(e, "mouseenter mouseleave click", function(t) {
            if (window.innerWidth > 991.98) {
                var n = e.querySelector('[data-toggle="dropdown"]')
                  , o = new bootstrap.Dropdown(n);
                "mouseenter" === t.type ? (o.show(),
                n.setAttribute("aria-expanded", !0)) : (o.hide(),
                n.blur(),
                n.setAttribute("aria-expanded", !1))
            }
        })
    })
}()
  
 
    function i(e) {
        var t = e.currentTarget;
        -1 != e.propertyName.indexOf("transform") && (l(t),
        u(t))
    }
    function a() {
        return Math.round(Math.random() * e.offsetWidth - 250 + 250)
    }
    function s() {
        return Math.round(Math.random() * e.offsetHeight - 100 + 100)
    }
    function c(e) {
        for (var t = 0; t < e.length; t++)
            if (void 0 !== document.body.style[e[t]])
                return e[t];
        return null
    }
    function l(e) {
        e.style[o] = "translate3d(" + a() + "px, " + s() + "px, 0) scale(" + (.1 + .7 * Math.random()) + ")"
    }
    function u(e) {
        n && (e.style[n] = 25 + 50 * Math.random() + "s")
    }
    
    


function addListenerMulti(e, t, n) {
    t.split(" ").forEach(function(t) {
        return e.addEventListener(t, n, !1)
    })
}

function getRandomInt(e) {
    return Math.floor(Math.random() * Math.floor(e))
}
function detatch(e) {
    return e.parentElement.removeChild(e)
}
function closest(e, t) {
    for (var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; e; ) {
        if (n.call(e, t))
            return e;
        e = e.parentElement
    }
    return null
}




function getCssVariable(e) {
    return getComputedStyle(document.documentElement).getPropertyValue(e)
}



var swiper = 
new Swiper('.swiper-container',{
  slidesPerView: '1',
  spaceBetween: 10,
  autoplay: false,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
}
);

 