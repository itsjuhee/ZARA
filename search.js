
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

$('.search-header ul li').on('click', function(){
    $('.search-header ul li').removeClass('active');
    $(this).addClass('active');
});

// search option

$('.search-body ul li').on('click', function(){
    $('.search-body ul li').removeClass('active');
    $(this).addClass('active');
})

// top clicked

$('.search-body ul li:nth-of-type(1)').on('click', function(){
    $('.search-result').addClass('active');
    $('.search-body').css('display','none');
    
    // find input value
    $('.write input').val($(this).find('span').text());
    inputClear();
})

// display input clear icon
$('.write input').on('input', function(){
    inputClear();
})

function inputClear(){
        if ($('.write input').val()=='') {
            $('.write svg').css('display','none');
            $('.search-result').removeClass('active');
            $('.search-body').css('display','block');
        }else{
            $('.write svg').css('display','block');
        }   
}

// remove text

$('.write svg').on('click', function(){
    $('.write input').val('');
    inputClear();
})

// call data

$.ajax({
    url: './data/data.json', 
    success:function(data){        
        let woman_top = '';
        $.each(data.woman_top, function(k, wp){
            woman_top += 
            `<li>
                <div class="pro-img">
                    <img src="${wp.img}" alt="product">
                </div>
                <div class="pro-txt">
                    <p class="txt1">${wp.txt1}</p>
                    <p class="txt2">${wp.txt2}</p>
                    <span class="txt3">${wp.txt3}</span>
                </div>
            </li>`;
        })
        $('.results ul').html(woman_top)
    }
});

// scroll

let scrollState = {y:0, y2:0,state:'down'}
        
function searchScroll(){
    scrollState.y=$(window).scrollTop();

    if(scrollState.y > scrollState.y2){
        scrollState.state=true;
    }else{
        scrollState.state=false;
    }
    scrollState.y2 = scrollState.y;
}

function headerScroll (){
    searchScroll();
    
    if(scrollState.state) $('header').addClass('search');
    
    if(scrollState.y == 0) $('header').removeClass('search');
}
$(window).on('scroll', headerScroll);
