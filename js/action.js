$(function(){
    /* 지역버튼 선택 */
    var $area_btn = $('.tab_map ul li');
    var $area_list = $('.select_box .list li');
    
    $area_btn.removeClass('on');
    
    $area_btn.on('click',function(){
        var idx = $(this).index();
        //console.log(idx);
        
        $area_btn.removeClass('on');
        $(this).addClass('on');
    })
    /* //지역버튼 선택 */
    
    /* select box */
    function CustomSelectBox(selector){
        this.$selectBox = null,
        this.$select = null,
        this.$list = null,
        this.$listLi = null;
        CustomSelectBox.prototype.init = function(selector){
            this.$selectBox = $(selector);
            this.$select = this.$selectBox.find('.box .select');
            this.$list = this.$selectBox.find('.box .list');
            this.$listLi = this.$list.children('li');
        }
        CustomSelectBox.prototype.initEvent = function(e){
            var that = this;
            this.$select.on('click', function(e){
                that.listOn();
            });
            this.$listLi.on('click', function(e){
                that.listSelect($(this));
            });
            $(document).on('click', function(e){
                that.listOff($(e.target));
            });
        }
        CustomSelectBox.prototype.listOn = function(){
            this.$selectBox.toggleClass('on');
            if(this.$selectBox.hasClass('on')){
                this.$list.css('display', 'block');
            }else{
                this.$list.css('display', 'none');
            };
        }
        CustomSelectBox.prototype.listSelect = function($target){
            $target.addClass('selected').siblings('li').removeClass('selected');
            this.$selectBox.removeClass('on');
            this.$select.text($target.text());
            this.$list.css('display', 'none');
        }
        CustomSelectBox.prototype.listOff = function($target){
            if(!$target.is(this.$select) && this.$selectBox.hasClass('on')){
                this.$selectBox.removeClass('on');
                this.$list.css('display', 'none');
            };
        }
        this.init(selector);
        this.initEvent();
    }
    $(function(){
        var select = new CustomSelectBox('.select_box');
    });
    /* //select box */
    
    /* event01 위치로 이동 */
    var $Event01 = $('#event01').offset();
    $('.event_top_link .ev01_btn').on('click', function(){
        $('html, body').stop().animate({scrollTop:$Event01.top},500);
    });
    
    /* event02 위치로 이동 */
    var $Event02 = $('#event02').offset();
    $('.event_top_link .ev02_btn').on('click', function(){
        $('html, body').stop().animate({scrollTop:$Event02.top},500);
    });
    
    /* 페이지스크롤 */
    var $top = $('#pageScroll .top a');
    var $btm = $('#pageScroll .btm a');
    $top.on('click', function(){
        $("html, body").stop().animate({scrollTop:0},500);
        
        return false;
    });
    var scrollHeight = $(document).height();
    $btm.on('click', function(){
        $("html, body").stop().animate({scrollTop:scrollHeight},500);
        
        return false;
    })
    /* //페이지스크롤 */
    
    /* input box 숫자만 입력 */
    function inNumber(){
      if(event.keyCode<48 || event.keyCode>57){
         event.returnValue=false;
      }
    }
    /* //input box 숫자만 입력 */
    
    /* select박스 클래스 toggle */
    $('.input_box select').on('click',function(e){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else if(!$(this).hasClass('on')){
            $(this).addClass('on');
        }
        $('html, body').on('click',function(e){
            if(!$(e.target).hasClass('on')){
                $('.input_box select').removeClass('on')
            }
        });
    });
    
    /* 팝업시 스크롤 막기 */
    var $E01 = $('#EventPop.pop01');
    var $E02 = $('#EventPop.pop02');
    $E01.hide();
    $E02.hide();
    $('#mask').hide();
    
    
    $('.ev01_join_btn a').on('click',function(){
        $E01.show();
        $('#mask').show();
        $("html,body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
    });
    $('.ev02_join_btn a').on('click',function(){
        $E02.show();
        $('#mask').show();
        $("html,body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
    });
    
    $('#EventPop .pop_close a').on('click',function(){
        $E01.hide();
        $E02.hide();
        $('#mask').hide();
        $("html,body").css({overflow:'auto'}).unbind('touchmove');
    });
    

});











































