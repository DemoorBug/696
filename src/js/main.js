$(document).ready(function(){
    // 底部列表
    $('.tao li').attr('id',function(index){
    return index;
    });
    var cpf = null;
    $('.tao li').click(function (ev) {

        cpf = $(this);
        var omp = $(this).attr('class');
        $('.toon').removeAttr('style');
        $('.tao li').find('em').removeClass(function () {
            return $(this).attr('class');
        });
        $('.tao li').attr ({
            class : '',
            style : ''
        });
        $('.tao li').find('span').css('display','');

        if(!omp){
            $(this).find('em').addClass('cn');
            $(this).addClass('cnb').css('height','189px');
            $(this).find('span').css('display','none');
            $(this).find('.toon').css('opacity',1);
            setTimeout(ijj,500);
            function ijj(){
                cpf.find('.toon').css('background','#F7F7F7');
                cpf.find('.toon').css('border','1px solid #EEE');
            }
        }
    });
    // 选项卡
    option('#notice-tit','#notice-con');
})
function option(notice,noticon){
    //获取鼠标划过或点击的标签和要切换内容的元素

    var titles = $(notice+' li'),
        divs = $(noticon+' div');
        // if(titles.length != divs.length){
        //  return;
        // }
        var po = 0;
    for(var i=0 ; i < titles.length ; i++ ){
        titles[i].id = i;
        titles[i].onmouseover = function(){
            if(po == this.id) return;
            po = this.id;
            for(var j=0 ; j < titles.length ; j++ ){
                titles[j].className = '' ;
                divs[j].style.display = '';
            }
            this.className = 'select';
            divs[this.id].style.display = 'block';
        }
    }
}
