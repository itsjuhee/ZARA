
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


// search

// let sInx = $(this).index();

$('.search-header ul li').on('click', function(){
    $('.search-header ul li').removeClass('active');
    $(this).addClass('active');
});

// search option

$('.search-body ul li').on('click', function(){
    $('.search-body ul li').removeClass('active');
    $(this).addClass('active');
})