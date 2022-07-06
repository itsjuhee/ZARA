

// slide

let color = [
    ['#ffe800','#fff','#000'],
    ['#ffe800','#000','#fff','#000'],
    ['#ffe800','#fff','#000','#000'],
    ['#ffe800','#fff','#000'],
    ['#fff','#fff','#000']
]
let idx = 0;
let vIdx = [0,0,0,0,0];

var swiper1 = new Swiper(".swiper1", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    // activeIndex, realIndex
    on: {
        init:()=>sp1(0),
        slideChange:(a)=> {
            idx = a.realIndex;
            sp1(vIdx[idx]);
            fade();
        }
    }
});

var swiper2 = new Swiper(".swiper2", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    // autoplay: {delay: 5000,},
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type : 'bullets', //custom
    },
    on: {
        slideChange: (a)=> {
            // console.log(a.realIndex)
            vIdx[idx] = a.realIndex;
            sp1(vIdx[idx]);
            fade();
        }
    }
});

function sp1(realIndex){
    $('header').css('color',color[idx][realIndex]);
    $('header svg').css('fill',color[idx][realIndex]);
    $('header .search').css('border-bottom',`1px solid ${color[idx][realIndex]}`);
    $('.page').css('color',color[idx][realIndex]);
    $(':root').css('--swiper-navigation-color',color[idx][realIndex]);
    $(':root').css('--swiper-theme-color',color[idx][realIndex]);
}

function fade(){
    $('.page').fadeIn(1);
    $('.page').fadeOut(2000);
}

// fade in and out



// menu

$('header .menu').on('click', function(){
    $('.menu-up').addClass('active');
});
$('.menu-up .close').on('click', function(){
    $('.menu-up').removeClass('active');
});


// category

const 
subtit = document.querySelectorAll('.sub-tit'),
lowercate = document.querySelectorAll('.lower-cate ul'),
title = document.querySelectorAll('.upper-cate .tit'),
tab = document.querySelectorAll('.upper-cate .tab');

let nIdx = {f:0,s:1};

title.forEach(function (v,k){
    title[k].addEventListener('click', function (){
        tab[nIdx.f].classList.remove('active');
        tab[k].classList.add('active');

        title[nIdx.f].classList.remove('active');
        title[k].classList.add('active');

        nIdx.f = k;
        nIdx.s = this.dataset.num;
        subMenu(nIdx.s, false);
    })
});

subtit.forEach(function category (v,k){
    subtit[k].addEventListener('click', function (){
        subMenu(k, true);             
    })
});

let num=0;
function subMenu(k, bln){
    setTimeout(function(){
        if(k == nIdx.s && bln){
            lowercate[k].classList.toggle('active');
            subtit[k].classList.toggle('active');
        }else{
            subtit.forEach((v,i)=>{
                lowercate[i].classList.remove('active');
                subtit[i].classList.remove('active');
            })
            lowercate[k].classList.add('active');
            subtit[k].classList.add('active');
        }
        nIdx.s = k;
    },10)
}
