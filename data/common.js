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