 
function t121_setHeight(recid) {
    var rec = $('#rec' + recid);
    var div = $('#youtubeiframe' + recid);
    var height = div.width() * 0.5625;
    div.height(height);
    div.parent().height(height);

    var videoLazy = rec.find('.t-video-lazyload');
    if (videoLazy !== undefined) {
        var iframeLazy = videoLazy.find('iframe');
        var heightLazy = videoLazy.width() * 0.5625;
        videoLazy.height(heightLazy);
        iframeLazy.height(heightLazy);

        setTimeout(function () {
            div = $('#youtubeiframe' + recid);
            div.height(div.width() * 0.5625);
        }, 200);
    }
} 
function t071_unifyHeights(recid) {
    $('#rec'+recid+' .t071 .t-container').each(function() {
        var highestBox = 0;
        $('.t071__wrapper', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t071__wrapper',this).css('height', highestBox); 
        }else{
	        $('.t071__wrapper',this).css('height', "auto");    
        }
    });
} 
function t113_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t113__list_item a[href='"+url+"']").addClass("t-active");
  $(".t113__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t113__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t113__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t113__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t113__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t113_showMenu(recid,pageid){
  var $flagmenudo = "2ok";
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 200) {
      if($flagmenudo != "1ok"){$flagmenudo="1";}
    }
    else {
      if($flagmenudo!="2ok"){$flagmenudo="2";}
    }

    if ($flagmenudo=="1") {
      $('.t113').addClass('t113__fixed');
      $('.t113').css('display','none');
      $('.t113').fadeIn( "slow" );

	  $('#rec'+recid).find('.t113__space').hide();
      $flagmenudo="1ok";
    }
    if ($flagmenudo=="2") {
      $('.t113').removeClass('t113__fixed');
	  $('#rec'+recid).find('.t113__space').show();
      $flagmenudo="2ok";
    }
  });

  var current_path = window.location.pathname.split('/').pop();
  if(current_path=="page"+pageid+".html"){
    $("#t113linktopage"+pageid).css("opacity",".7");
  }
}

function t113_setWidth(recid){
  var t113timer;
  var el=$('#rec'+recid);
  $(window).resize(function() {
    if(t113timer) {
        window.clearTimeout(t113timer);
    }
    t113timer = window.setTimeout(function() {
        if($(window).width()>640){
          var w1= el.find("div[data-hook-left]").width()+20+50;
          el.find(".t113__list").css("padding-right",w1+"px");
        }else{
          el.find(".t113__list").css("padding-right",10+"px");  
        }
    }, 100);
  });
  $(window).resize();
} 
function t126_unifyHeights() {
    $('.t126 .t-container').each(function() {
        var highestBox = 0;
        $('.t126__title', this).each(function(){
        	$(this).css("height","auto");
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t126__title',this).css('height', highestBox);   
        }else{
	        $('.t126__title',this).css('height', "auto");    
        }
        
        var highestBox = 0;
        $('.t126__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t126__descr',this).css('height', highestBox);   
        }else{
	        $('.t126__descr',this).css('height', "auto");    
        }
                
    });
}

 
function t131_unifyHeights() {
    $('.t131 .t-container').each(function() {
        var highestBox = 0;
        $('.t131__title', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t131__title',this).css('height', highestBox);   
        }else{
	        $('.t131__title',this).css('height', "auto");    
        }
        
        var highestBox = 0;
        $('.t131__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t131__descr',this).css('height', highestBox);   
        }else{
	        $('.t131__descr',this).css('height', "auto");    
        }
    });
} 
function t132_unifyHeights() {
    $('.t132__box').children('.t132__wrappper').each(function() {
        $(this).children('a').children('div').css('width', $(this).outerWidth()-1);
        $(this).children('a').children('div').css('height', $(this).outerHeight()-40);	        
    });
} 
if (! window.yashare2scriptLoaded){
    var scriptService = document.createElement('script');
    scriptService .src = "https://yastatic.net/share2/share.js";
    scriptService .type = "text/javascript";
    scriptService .charset = "UTF-8";
    document.documentElement.appendChild(scriptService);

    window.yashare2scriptLoaded = true;
}
 
function t142_checkSize(recid){
  var el=$("#rec"+recid).find(".t142__submit");
  if(el.length){
    var btnheight = el.height() + 5;
    var textheight = el[0].scrollHeight;
    if (btnheight < textheight) {
      var btntext = el.text();
      el.addClass("t142__submit-overflowed");
    }
  }
} 
function t179_showvideo(recid){
  $("#rec"+recid+" .t179__playbutton").css("display","none");
  $("#rec"+recid+" .t179__videocontainer").css("display","block");
  var height=$("#rec"+recid+" .t179__videocontainer").attr("data-height");
  var youtubeid=$("#rec"+recid+" .t179__videocontainer").attr("data-youtube-id");
  if(height=="")height="540";

  $("#youtubeiframe_carier"+recid).html("<iframe id=\"youtubeiframe{$a.id}\" width=\"100%\" height=\""+height+"\" src=\"//www.youtube.com/embed/" + youtubeid + (youtubeid.indexOf('?') !== -1 ? '&' : '?') + "autoplay=1&rel=0&fmt=18\" frameborder=\"0\" allowfullscreen></iframe>");

  if(height==""){
    var div=$("#youtubeiframe"+recid);
    var height=div.width() * 0.5625;
    div.css("height",height);
  }
}
 
function t190_scrollToTop(){
    $('html, body').animate({scrollTop: 0}, 700);								
}	  
 
function t199_showMenu(recid) {
    var el = $('#rec' + recid);
    el.find('.t199__js__menu').each(function () {
        var $toggler = el.find('.t199__js__menu-toggler'),
            $menu = $(this),
            $body = $('body'),
            CLASS_MENU = 't199__is__menu';

        $menu.find('.t199__menu-item').each(function () {
            var curUrl = $(this).attr('href');
            if (typeof curUrl != 'undefined' && curUrl.indexOf('#') > -1 && curUrl.substring(0, 9) != '#submenu:') {
                $(this).on('click', function (e) {
                    $body.removeClass(CLASS_MENU);
                });
            }
        });
        
        $menu.find('.t199__menu-item-wrap .t-menusub__link-item').each(function () {
            var curUrl = $(this).attr('href');
            $(this).on('click', function (e) {
                $body.removeClass(CLASS_MENU);
            });
        });

        $toggler.on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $body.toggleClass(CLASS_MENU);
        });

        $(document).on('click', function (e) {
            var clickedInsideMenu = $(e.target).hasClass('t199__js__menu') || $(e.target).parents('.t199__js__menu').length > 0;
            if (!clickedInsideMenu) {
                $body.removeClass(CLASS_MENU);
            }
        });
    });
    $('.t199__mmenu').bind('clickedAnchorInTooltipMenu', function () {
        $('body').removeClass('t199__is__menu');
    });
}

function t199_positionHeader(recid) {
    var el = $('#rec' + recid);
    var $header = el.find('.t199__js__header');
    var bgcolor = $header.css('background-color');
    var isScrolling = false;
    var CLASS_ACTIVE = 't199__is__active';

    function updateHeader() {
        isScrolling = true;

        if ($(window).scrollTop() > 0) {
            $header.addClass(CLASS_ACTIVE);
            $header.css('background-color', '');
        } else {
            $header.removeClass(CLASS_ACTIVE);
            $header.css('background-color', bgcolor);
        }
    }

    setInterval(function () {
        if (isScrolling) {
            isScrolling = false;
        }
    }, 100);

    $(window).on('scroll', updateHeader);
    updateHeader();
}

function t199_setPath(pageid) {}

function t199_highlight(recid) {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == '/') {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == '/') {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == '/') {
        pathname = pathname.slice(1);
    }
    if (pathname == '') {
        pathname = '/';
    }
    $(".t199__menu a[href='" + url + "']").addClass('t-active');
    $(".t199__menu a[href='" + url + "/']").addClass('t-active');
    $(".t199__menu a[href='" + pathname + "']").addClass('t-active');
    $(".t199__menu a[href='/" + pathname + "']").addClass('t-active');
    $(".t199__menu a[href='" + pathname + "/']").addClass('t-active');
    $(".t199__menu a[href='/" + pathname + "/']").addClass('t-active');
}

function t199_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t199_navLinks = $('#rec' + recid + " .t-menu__link-item:not(.tooltipstered)[href*='#']");
        if (t199_navLinks.length > 0) {
            t199_catchScroll(t199_navLinks);
        }
    }
}

function t199_catchScroll(t199_navLinks) {
    var t199_clickedSectionId = null,
        t199_sections = new Array(),
        t199_sectionIdTonavigationLink = [],
        t199_interval = 100,
        t199_lastCall,
        t199_timeoutId;
    t199_navLinks = $(t199_navLinks.get().reverse());
    t199_navLinks.each(function () {
        var t199_cursection = t199_getSectionByHref($(this));
        if (typeof t199_cursection.attr('id') != 'undefined') {
            t199_sections.push(t199_cursection);
        }
        t199_sectionIdTonavigationLink[t199_cursection.attr('id')] = $(this);
    });
    t199_updateSectionsOffsets(t199_sections);
    $(window).bind(
        'resize',
        t_throttle(function () {
            t199_updateSectionsOffsets(t199_sections);
        }, 200)
    );
    $('.t199').bind('displayChanged', function () {
        t199_updateSectionsOffsets(t199_sections);
    });
    setInterval(function () {
        t199_updateSectionsOffsets(t199_sections);
    }, 5000);
    t199_highlightNavLinks(t199_navLinks, t199_sections, t199_sectionIdTonavigationLink, t199_clickedSectionId);

    t199_navLinks.click(function () {
        if (!$(this).hasClass('tooltipstered')) {
            t199_navLinks.removeClass('t-active');
            t199_sectionIdTonavigationLink[t199_getSectionByHref($(this)).attr('id')].addClass('t-active');
            t199_clickedSectionId = t199_getSectionByHref($(this)).attr('id');
        }
    });
    $(window).scroll(function () {
        var t199_now = new Date().getTime();
        if (t199_lastCall && t199_now < t199_lastCall + t199_interval) {
            clearTimeout(t199_timeoutId);
            t199_timeoutId = setTimeout(function () {
                t199_lastCall = t199_now;
                t199_clickedSectionId = t199_highlightNavLinks(t199_navLinks, t199_sections, t199_sectionIdTonavigationLink, t199_clickedSectionId);
            }, t199_interval - (t199_now - t199_lastCall));
        } else {
            t199_lastCall = t199_now;
            t199_clickedSectionId = t199_highlightNavLinks(t199_navLinks, t199_sections, t199_sectionIdTonavigationLink, t199_clickedSectionId);
        }
    });
}

function t199_updateSectionsOffsets(sections) {
    $(sections).each(function () {
        var t199_curSection = $(this);
        t199_curSection.attr('data-offset-top', t199_curSection.offset().top);
    });
}

function t199_getSectionByHref(curlink) {
    var t199_curLinkValue = curlink.attr('href').replace(/\s+/g, '');
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t199_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t199_curLinkValue.substring(1) + "']");
    }
}

function t199_highlightNavLinks(t199_navLinks, t199_sections, t199_sectionIdTonavigationLink, t199_clickedSectionId) {
    var t199_scrollPosition = $(window).scrollTop(),
        t199_valueToReturn = t199_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (
        t199_sections.length != 0 &&
        t199_clickedSectionId == null &&
        t199_sections[t199_sections.length - 1].attr('data-offset-top') > t199_scrollPosition + 300
    ) {
        t199_navLinks.removeClass('t-active');
        return null;
    }

    $(t199_sections).each(function (e) {
        var t199_curSection = $(this),
            t199_sectionTop = t199_curSection.attr('data-offset-top'),
            t199_id = t199_curSection.attr('id'),
            t199_navLink = t199_sectionIdTonavigationLink[t199_id];
        if (
            t199_scrollPosition + 300 >= t199_sectionTop ||
            (t199_sections[0].attr('id') == t199_id && t199_scrollPosition >= $(document).height() - $(window).height())
        ) {
            if (t199_clickedSectionId == null && !t199_navLink.hasClass('t-active')) {
                t199_navLinks.removeClass('t-active');
                t199_navLink.addClass('t-active');
                t199_valueToReturn = null;
            } else {
                if (t199_clickedSectionId != null && t199_id == t199_clickedSectionId) {
                    t199_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t199_valueToReturn;
}
 
function t204_init(recid) {
    var el = $('#rec' + recid);

    el.find('.t204__burger').click(function (e) {
        t204_showMenu(recid);
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    });

    el.find('.t204__closelayer, .t204__close').click(function (e) {
        t204_hideMenu(recid);
    });

    el.find('.t204__burger').bind('clickedAnchorInTooltipMenu', function () {
        t204_hideMenu(recid);
    });

    el.find('.t204__item a').each(function () {
        $(this).on('click', function (e) {
            if ($(this).is('.t794__tm-link')) {
                return;
            }
            t204_hideMenu(recid);
        });
    });
}

function t204_showMenu(recid) {
    var el = $('#rec' + recid);

    $('body').addClass('t204__body_menushowed');
    el.find('.t204__menu').finish();
    el.find('.t204__menu').css('visibility', 'visible').css('opacity', '0').css('right', '-300px');
    el.find('.t204__menu').animate({
        'opacity': '1',
        'right': '0px'
    }, 300);
    el.find('.t204__closelayer').css('visibility', 'visible');
}

function t204_hideMenu(recid) {
    var el = $('#rec' + recid);

    $('body').removeClass('t204__body_menushowed');
    el.find('.t204__menu').finish();
    el.find('.t204__menu').css('visibility', 'hidden');
    el.find('.t204__closelayer').css('visibility', 'hidden');
}

/* old function */
function t204_clickBurger(recid) {
    var el = $("#rec" + recid);

    el.find('#t204__burger').click(function (e) {
        t204_showMenu(recid);
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    });

    el.find('#t204__closelayer').click(function (e) {
        t204_hideMenu(recid);
    });

    $('.t204__burger').bind('clickedAnchorInTooltipMenu', function () {
        t204_hideMenu(recid);
    });
} 
function t213_init(recid) {
    var rec = $('#rec' + recid);
    var minScreenWidth = rec.attr('data-screen-min');
    var maxScreenWidth = rec.attr('data-screen-max');
    
    if (minScreenWidth && $(window).width() < parseInt(minScreenWidth, 10)) {
        return;
    }
    
    if (maxScreenWidth && $(window).width() > parseInt(maxScreenWidth, 10)) {
        return;
    }
    
    var el = $('#t213-marker' + recid);
    var cotimer;
    var needColor = el.attr('data-bg-color');
    $('body').css('transition', 'background-color 1000ms linear');
    
    if (window.t213higher === undefined) {
        window.t213higher = 1000000;
    }
    
    if (window.t213higher > el.offset().top) {
        window.t213higher = el.offset().top;
        window.t213higher_id = recid;
    }
    
    var bodyDefColor = $('body').css('background-color');
    var timer_count = 0;

    $(window).scroll(function () {
        if (cotimer) {
            window.clearTimeout(cotimer);
            if (timer_count >= 15) {
                t212_timer_do(el, needColor, bodyDefColor, recid);
            }
            timer_count++;
        }
        cotimer = window.setTimeout(function () {
            t212_timer_do(el, needColor, bodyDefColor, recid);
            timer_count = 0;
        }, 100);
    });

    $(window).scroll();
}

function t212_timer_do(el, needColor, bodyDefColor, recid) {
    var top = el.offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if ((scrollTop + windowHeight) >= top) {
        $('body').css('background-color', needColor);
    } else {
        if (window.t213higher_id == recid) {
            $('body').css('background-color', bodyDefColor);
        }
    }
} 
function t219_showcomments(recid){
  $("#rec"+recid+" .t-btn").css("display","none");
  $("#rec"+recid+" .t219__blocktitle").css("display","block");

  var disqus_shortname = $("#rec"+recid+" .t219__disqusthread").attr('data-disqus-shortname');
console.log(disqus_shortname);
  if(disqus_shortname!==""){
	  var disqus_identifier = disqus_shortname;    
  }else{
	  var disqus_identifier = "t_page_" + $("#rec"+recid+" .t219__disqusthread").attr("data-page-id");
  }

  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
} 
function t226_floating_init(el){
    console.log('floating_init');

    var wnd=$(window);
    var col=el.parent();

    el.css('max-width',el.width());
    el.css('width','100%');
    col.css('min-height',el.height());

    var timer;
    var timer_count=0;
    var timer_react=5;

    wnd.scroll(function() {
        if(timer) {
            window.clearTimeout(timer);
            if(timer_count>=timer_react){
                t226_floating_scroll(el,wnd,col);
                timer_count=0;
            }
            timer_count++;
        }

        timer = window.setTimeout(function() {
                t226_floating_scroll(el,wnd,col);
                timer_count=0;    
        }, 50);
    });        


    wnd.resize(function() {
         wnd.scroll();
    });

    wnd.scroll();
}

function t226_floating_scroll(el,wnd,col){
    var wnd_height = wnd.height();
    var wnd_width = wnd.width();

    if(wnd_width<=1024){
        el.removeClass('t226__fixedTop');
        el.removeClass('t226__fixedBottom');
        el.removeClass('t226__floating');
        return('');
    }

    el.css('max-width',col.width());

    if(col.height()<el.height() && col.height()>0){
        col.height(el.height());
    }

    var el_height = el.height();
    var col_top = col.offset().top;
    var col_width = col.width();
    var col_height = col.height();
    var col_bottom = col_top + col_height;

    var wnd_top = wnd.scrollTop();
    var wnd_bottom = wnd_top + wnd_height;  

    if(wnd_top+el_height+50 >= col_bottom){
        //console.log('fixedbottom');
        el.addClass('t226__fixedBottom');
        el.removeClass('t226__fixedTop');
        el.removeClass('t226__floating');
    }else if(wnd_top+50 > col_top){
        //console.log('floating');
        el.addClass('t226__floating');
        el.removeClass('t226__fixedBottom');
        el.removeClass('t226__fixedTop');
    }else{
        //console.log('fixedtop');
        el.addClass('t226__fixedTop');
        el.removeClass('t226__fixedBottom');  
        el.removeClass('t226__floating');
    }
} 
function t228__init(recid) {
    var el = $('#rec' + recid);
    var mobile = el.find('.t228__mobile');
    var fixedBlock = mobile.css('position') === 'fixed' && mobile.css('display') === 'block';

    setTimeout(function() {
        el.on('click', '.t-menusub__target-link', function () {
            if (isMobile) {
                if ($(this).hasClass('t-menusub__target-link_active')) {
                    el.find('.t228').trigger('overflow');
                } else {
                    el.find('.t228').trigger('nooverflow');
                }
            }
        });
        el.find('.t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)').on('click', function () {
            if ($(this).is('.tooltipstered, .t-menusub__target-link, .t794__tm-link, .t966__tm-link, .t978__tm-link')) { return; }
            if (fixedBlock) {
                mobile.trigger('click');
            }
        });

        el.find('.t-menusub__link-item').on('click', function () {
            if (fixedBlock) {
                mobile.trigger('click');
            }
        });
        
        el.find('.t228__right_buttons_but .t-btn').on('click', function () {
            if (fixedBlock) {
                mobile.trigger('click');
            }
        });
        
        el.find('.t228__positionabsolute');
        
        el.find('.t228').on('overflow', function() {
            t228_checkOverflow(recid);
        });
        
        el.find('.t228').on('nooverflow', function() {
            t228_checkNoOverflow(recid);
        });
    }, 500);
}

function t228_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == "/") {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == "/") {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == "/") {
        pathname = pathname.slice(1);
    }
    if (pathname == "") {
        pathname = "/";
    }
    $(".t228__list_item a[href='" + url + "']").addClass("t-active");
    $(".t228__list_item a[href='" + url + "/']").addClass("t-active");
    $(".t228__list_item a[href='" + pathname + "']").addClass("t-active");
    $(".t228__list_item a[href='/" + pathname + "']").addClass("t-active");
    $(".t228__list_item a[href='" + pathname + "/']").addClass("t-active");
    $(".t228__list_item a[href='/" + pathname + "/']").addClass("t-active");
}

function t228_checkAnchorLinks(recid) {
    var el = $('#rec' + recid);
    if ($(window).width() > 980) {
        var t228_navLinks = el.find(".t228__list_item a:not(.tooltipstered)[href*='#']");
        if (t228_navLinks.length > 0) {
            setTimeout(function () {
                t228_catchScroll(t228_navLinks);
            }, 500);
        }
    }
}

function t228_checkOverflow(recid) {
    var el = $('#rec' + recid);
    var menu = el.find('.t228');
    var winHeight = $(window).height();
    
    if (menu.css('position') === 'fixed') {
        menu.addClass('t228__overflow');
        menu[0].style.setProperty('height', winHeight - $('.t228__mobile_container').outerHeight(true) + 'px', 'important');
    }
}

function t228_checkNoOverflow(recid) {
    var el = $('#rec' + recid);
    var menu = el.find('.t228');
    var submenus = el.find('.t966__tooltip-menu_mobile');
    
    if (menu.css('position') === 'fixed') {
        menu.removeClass('t228__overflow');
        menu[0].style.setProperty('height', 'auto');
    }
}


function t228_catchScroll(t228_navLinks) {
    var t228_clickedSectionId = null,
        t228_sections = [],
        t228_sectionIdTonavigationLink = [],
        t228_interval = 100,
        t228_lastCall, t228_timeoutId;
    t228_navLinks = $(t228_navLinks.get().reverse());
    t228_navLinks.each(function () {
        var t228_cursection = t228_getSectionByHref($(this));
        if (typeof t228_cursection.attr("id") != "undefined") {
            t228_sections.push(t228_cursection);
        }
        t228_sectionIdTonavigationLink[t228_cursection.attr("id")] = $(this);
    });
    
    t228_sections.sort(function (a, b) {
        return b.offset().top - a.offset().top
    });

    t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);

    t228_navLinks.click(function () {
        var clickedSection = t228_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof clickedSection.attr("id") != "undefined") {
            t228_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t228_clickedSectionId = t228_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function () {
        var t228_now = new Date().getTime();
        if (t228_lastCall && t228_now < (t228_lastCall + t228_interval)) {
            clearTimeout(t228_timeoutId);
            t228_timeoutId = setTimeout(function () {
                t228_lastCall = t228_now;
                t228_clickedSectionId = t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);
            }, t228_interval - (t228_now - t228_lastCall));
        } else {
            t228_lastCall = t228_now;
            t228_clickedSectionId = t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);
        }
    });
}

function t228_getSectionByHref(curlink) {
    var curLinkValue = curlink.attr('href').replace(/\s+/g, '').replace(/.*#/, '');
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + curLinkValue + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + curLinkValue + "']");
    }
}

function t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId) {
    var t228_scrollPosition = $(window).scrollTop();
    var t228_valueToReturn = t228_clickedSectionId;

    /*if first section is not at the page top (under first blocks)*/
    if (t228_sections.length !== 0 && t228_clickedSectionId === null && t228_sections[t228_sections.length - 1].offset().top > (t228_scrollPosition + 300)) {
        t228_navLinks.removeClass('t-active');
        return null;
    }

    $(t228_sections).each(function (e) {
        var t228_curSection = $(this),
            t228_id = t228_curSection.attr('id'),
            t228_sectionTop = t228_curSection.offset().top,
            t228_navLink = t228_sectionIdTonavigationLink[t228_id];

        if (((t228_scrollPosition + 300) >= t228_sectionTop) || (t228_sections[0].attr("id") == t228_id && t228_scrollPosition >= $(document).height() - $(window).height())) {
            if (t228_clickedSectionId == null && !t228_navLink.hasClass('t-active')) {
                t228_navLinks.removeClass('t-active');
                t228_navLink.addClass('t-active');
                t228_valueToReturn = null;
            } else {
                if (t228_clickedSectionId != null && t228_id == t228_clickedSectionId) {
                    t228_valueToReturn = null;
                }
            }
            return false;
        }
    });

    return t228_valueToReturn;
}

function t228_setWidth(recid) {
    var el = $('#rec' + recid);
    if ($(window).width() > 980) {
        el.find(".t228").each(function () {
            var el = $(this);
            var left_exist = el.find('.t228__leftcontainer').length;
            var left_w = el.find('.t228__leftcontainer').outerWidth(true);
            var max_w = left_w;
            var right_exist = el.find('.t228__rightcontainer').length;
            var right_w = el.find('.t228__rightcontainer').outerWidth(true);
            var items_align = el.attr('data-menu-items-align');
            if (left_w < right_w) max_w = right_w;
            max_w = Math.ceil(max_w);
            var center_w = 0;
            el.find('.t228__centercontainer').find('li').each(function () {
                center_w += $(this).outerWidth(true);
            });
            var padd_w = 40;
            var maincontainer_width = el.find(".t228__maincontainer").outerWidth();
            if (maincontainer_width - max_w * 2 - padd_w * 2 > center_w + 20) {
                if (items_align == "center" || typeof items_align === "undefined") {
                    el.find(".t228__leftside").css("min-width", max_w + "px");
                    el.find(".t228__rightside").css("min-width", max_w + "px");
                    el.find(".t228__list").removeClass("t228__list_hidden");
                }
            } else {
                el.find(".t228__leftside").css("min-width", "");
                el.find(".t228__rightside").css("min-width", "");
            }
        });
    }
    
    el.find(".t228__centerside").removeClass("t228__centerside_hidden");
}

function t228_setBg(recid) {
    var el = $('#rec' + recid);
    if ($(window).width() > 980) {
        el.find(".t228").each(function () {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor);
            }
        });
    } else {
        el.find(".t228").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes");
        });
    }
}

function t228_appearMenu(recid) {
    var el = $('#rec' + recid);
    if ($(window).width() > 980) {
        el.find(".t228").each(function () {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top", "-50px");
                        el.css("visibility", "visible");
                        var topoffset = el.data('top-offset');
                        if (topoffset && parseInt(topoffset) > 0) {
                            el.animate({
                                "opacity": "1",
                                "top": topoffset + "px"
                            }, 200, function () {});

                        } else {
                            el.animate({
                                "opacity": "1",
                                "top": "0px"
                            }, 200, function () {});
                        }
                    }
                } else {
                    el.stop();
                    el.css("visibility", "hidden");
                    el.css("opacity", "0");
                }
            }
        });
    }

}

function t228_changebgopacitymenu(recid) {
    var el = $('#rec' + recid);
    if ($(window).width() > 980) {
        el.find(".t228").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.' + menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if (bgopacitytwo == '0' || (typeof menushadow == "undefined" && menushadow == false)) {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            } else {
                el.css("background-color", bgcolor);
                if (bgopacityone == '0.0' || (typeof menushadow == "undefined" && menushadow == false)) {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            }
        });
    }
}

function t228_createMobileMenu(recid) {
    var el = $("#rec" + recid);
    var menu = el.find(".t228");
    var burger = el.find(".t228__mobile");
    burger.on('click', function (e) {
        menu.fadeToggle(300);
        burger.toggleClass("t228_opened");
    });
    $(window).bind('resize', t_throttle(function () {
        if ($(window).width() > 980) {
            menu.fadeIn(0);
        }
    }));
} 
function t229_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t229__list_item a[href='"+url+"']").addClass("t-active");
  $(".t229__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t229__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t229__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t229__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t229__list_item a[href='/"+pathname+"/']").addClass("t-active");
}


function t229_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t229_navLinks = $("#rec" + recid + " .t229__list_item a:not(.tooltipstered)[href*='#']");
        if (t229_navLinks.length > 0) {
            t229_catchScroll(t229_navLinks);
        }
    }
}

function t229_catchScroll(t229_navLinks) {
    var t229_clickedSectionId = null,
        t229_sections = new Array(),
        t229_sectionIdTonavigationLink = [],
        t229_interval = 100,
        t229_lastCall, t229_timeoutId;
    t229_navLinks = $(t229_navLinks.get().reverse());
    t229_navLinks.each(function() {
        var t229_cursection = t229_getSectionByHref($(this));
        if (typeof t229_cursection.attr("id") != "undefined") {
            t229_sections.push(t229_cursection);
        }
        t229_sectionIdTonavigationLink[t229_cursection.attr("id")] = $(this);
    });
		t229_updateSectionsOffsets(t229_sections);
    t229_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t229_updateSectionsOffsets(t229_sections);}, 200));
		$('.t229').bind('displayChanged',function(){t229_updateSectionsOffsets(t229_sections);});
		setInterval(function(){t229_updateSectionsOffsets(t229_sections);},5000);
    t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId);

    t229_navLinks.click(function() {
        var t229_clickedSection = t229_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t229_clickedSection.attr("id") != "undefined") {
            t229_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t229_clickedSectionId = t229_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t229_now = new Date().getTime();
        if (t229_lastCall && t229_now < (t229_lastCall + t229_interval)) {
            clearTimeout(t229_timeoutId);
            t229_timeoutId = setTimeout(function() {
                t229_lastCall = t229_now;
                t229_clickedSectionId = t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId);
            }, t229_interval - (t229_now - t229_lastCall));
        } else {
            t229_lastCall = t229_now;
            t229_clickedSectionId = t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId);
        }
    });
}


function t229_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t229_curSection = $(this);
		t229_curSection.attr("data-offset-top",t229_curSection.offset().top);
	});
}


function t229_getSectionByHref(curlink) {
    var t229_curLinkValue = curlink.attr("href").replace(/\s+/g, '').replace(/.*#/, '');
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t229_curLinkValue + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t229_curLinkValue + "']");
    }
}

function t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId) {
    var t229_scrollPosition = $(window).scrollTop(),
        t229_valueToReturn = t229_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t229_sections.length != 0 && t229_clickedSectionId == null && t229_sections[t229_sections.length-1].attr("data-offset-top") > (t229_scrollPosition + 300)){
      t229_navLinks.removeClass('t-active');
      return null;
    }

    $(t229_sections).each(function(e) {
        var t229_curSection = $(this),
            t229_sectionTop = t229_curSection.attr("data-offset-top"),
            t229_id = t229_curSection.attr('id'),
            t229_navLink = t229_sectionIdTonavigationLink[t229_id];
        if (((t229_scrollPosition + 300) >= t229_sectionTop) || (t229_sections[0].attr("id") == t229_id && t229_scrollPosition >= $(document).height() - $(window).height())) {
            if (t229_clickedSectionId == null && !t229_navLink.hasClass('t-active')) {
                t229_navLinks.removeClass('t-active');
                t229_navLink.addClass('t-active');
                t229_valueToReturn = null;
            } else {
                if (t229_clickedSectionId != null && t229_id == t229_clickedSectionId) {
                    t229_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t229_valueToReturn;
}

function t229_setPath(pageid){
}

function t229_setBg(recid){
      var window_width=$(window).width();
      if(window_width>980){
          $(".t229").each(function() {
          	 var el=$(this);
             if(el.attr('data-bgcolor-setbyscript')=="yes"){
	             var bgcolor=el.attr("data-bgcolor-rgba");
	             el.css("background-color",bgcolor);             
             }
          });
      }else{
          $(".t229").each(function() {
             var el=$(this);
             var bgcolor=el.attr("data-bgcolor-hex");
             el.css("background-color",bgcolor);
             el.attr("data-bgcolor-setbyscript","yes");
		  });
      }
  }

function t229_appearMenu(recid) {
        var window_width=$(window).width();
        if(window_width>980){
	         $("#rec"+recid+" .t229").each(function() {
					var el=$(this);
					var appearoffset=el.attr("data-appearoffset");
					if(appearoffset!=""){
			                if(appearoffset.indexOf('vh') > -1){
				                appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
			                }
					
							appearoffset=parseInt(appearoffset, 10);
		
							if ($(window).scrollTop() >= appearoffset) {
							  if(el.css('visibility') == 'hidden'){
								  el.finish();
								  el.css("top","-50px");	
								  el.css("visibility","visible");
								  el.animate({"opacity": "1","top": "0px"}, 200,function() {
								  });	  	  
							  }
							}else{
							  el.stop();
							  el.css("visibility","hidden");
							}
					}
	         });
        }
    
    }


function t229_changeBgOpacityMenu(recid) {
        var window_width=$(window).width();
        if(window_width>980){
	         $(".t229").each(function() {
					var el=$(this);
					var bgcolor=el.attr("data-bgcolor-rgba");
					var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
					if ($(window).scrollTop() > 20) {
						el.css("background-color",bgcolor_afterscroll);
					}else{
						el.css("background-color",bgcolor);
					}
	         });
        }
    
    } 
function t235__next() {
    var cur = Number.parseInt($(".t235").attr("data-slide-count"), 10);

    if ($(window).width() > 980) {
        t235_addVideo();
    }

    if((cur+1) >= $(".r").not('[data-t263-block-notslide=yes]').size()) return;

    cur++;
    $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
        if((cur-1)==i){
            var el=$(this);
			var trans_out_y='-100px';
			if(el.height()+100>$(window).height())trans_out_y='0px';
			el.transition({ y: trans_out_y,opacity: 0},250,'out',function() {
				el.css('display','none');
		    });
        }
        if(cur == i) {
            var el = $(this);
            var speed='slow';
            if(cur == 0){
                speed = 0;
            }

            el.css('display','none');
			var trans_in_y='50px';
			if(el.height()+100>$(window).height())trans_in_y='0px';
			el.transition({y:trans_in_y},1,'ease',function() {});
			el.animate({opacity:"0"}, 300, function() {
                el.css('display','block');
                el.css('opacity','0');
                el.transition({y:'0px',opacity: 1},500,'ease',function() {});
				$('.r').removeClass('t235__active');
				el.addClass('t235__active');

				$('.t223, .t396, .t498, .t738, .t604, .t650').trigger('displayChanged');
				
                if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                    t_onFuncLoad('t_lazyload_update', function () {
                        t_lazyload_update();
                    });
                }
			});

            if(el.height()>$(window).height()){
                $('#t235__scrldonwicon').fadeIn('slow',function(){
                    $('#t235__scrldonwicon').delay(1000).fadeOut('slow');
                });
            }

            var bg=el.attr('data-bg-color');
            if(bg!==undefined && bg!=='none'){
                $('#allrecordstable').css('background-color',bg);
            }else{
                $('#allrecordstable').css('background-color','');
            }
        }
    });

    $(".t235").attr("data-slide-count", cur);

    t235__update();
}

function t235__prev() {
    var cur = Number.parseInt($(".t235").attr("data-slide-count"), 10);
    
    if((cur-1) == -1) return;
    
    cur--;

    $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
        if((cur+1)==i){
            var el=$(this);
            el.css('display','none');
        }
        if(cur==i){
            var el=$(this);
            el.css('display','block');
			el.css('opacity','0');
			el.transition({ y: '0px'},1,'easeOutSine');
			el.animate({opacity:"1"}, 50, function() {});
            $('.r').removeClass('t235__active');
            el.addClass('t235__active');

            var bg=el.attr('data-bg-color');
            if(bg!==undefined && bg!=='none'){
                $('#allrecordstable').css('background-color',bg);
            }else{
                $('#allrecordstable').css('background-color','');
            }
            
            $('.t223, .t396, .t498, .t738, .t604, .t650').trigger('displayChanged');
        }
    });
    $(".t235").attr("data-slide-count", cur);

    t235__update();
}

function t235__galnext(){
	var elactive=$('.t235__active');
	var tplid=elactive.attr('data-record-type');
	if(tplid=='5')elactive.find('[data-slide=next]').trigger('click');
}

function t235__update() {
    var cur = Number.parseInt($(".t235").attr("data-slide-count"), 10);
    var c = cur+1;
    var t = $(".r").not('[data-t263-block-notslide=yes]').size();
    $('.t235__count').html(c + "/" + t);

    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
}

function t235__init() {
  $("#allrecords").wrap("<table id='allrecordstable' width='100%' height='100%' style='height:100vh; border:0px; margin:0px; padding:0px; border-spacing:0px;'><tr><td></td></tr></table>");
  $("#allrecords").css('width', $(window).width()+'px');
  var wnd = $(window);
  $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
      var el=$(this);
      el.css('padding','0px');
      if(el.height()>wnd.height()){
          el.css('padding-top','150px');
          el.css('padding-bottom','150px');
      }
      el.css('display','none');
      el.css('opacity','');
	  el.css('background-color','');
  });

    var cur = -1;
    var slideCount = $(".t235").attr("data-slide-count");
    if(typeof slideCount !== "undefined") {
        cur = Number.parseInt(slideCount, 10);
    } else {
        $(".t235").attr("data-slide-count", cur);
    }

  if(!isNaN(cur)) {
      $(".t235").find(".t235__next").on("click", function() {
          t235__next();
      });
      $(".t235").find(".t235__prev").on("click", function() {
          t235__prev();
      });
      t235__next();
      $('#tildacopy').css('display','none');
    
      $('.t235').css('right','-=100');
      setTimeout(function() {
          $('.t235').addClass('t235_anim');
          $('.t235').css('right','+=100');
      }, 800);
    
      $(document).keydown(function(e) {
          switch(e.which) {
              case 38: t235__prev();
              break;
    
              case 40: t235__next();
              break;
    
              case 33: t235__prev();
              break;
    
              case 34: t235__next();
              break;
    
              case 32: t235__next();
              break;
    
              case 190: t235__galnext();
              break;
    
              default: return;
          }
          if(e.which!=190){
    		e.preventDefault();
    	  }
      });
  }

  $('#allrecordstable').css('transition','background-color 500ms linear');
  $('.t-cover__carrier').css('background-attachment','scroll');
}

function t235_addVideo() {
    setTimeout(function() {
        if ($('.t235__active').next().find('.t-video-lazyload').length > 0) {
            $('.t235__active').next().find('.t-video-lazyload').each(function() {
                var $this = $(this);
                var videoHeight = $this.attr('data-videolazy-height') ? $(this).attr('data-videolazy-height') : '100%';

                if ($this.parents('.t223').length > 0 || $this.parents('.t230').length > 0 || $this.parents('.t368').length > 0) {
                    var videoHeight = '100%';
                }

                var videoId = $this.attr('data-videolazy-id').trim();
                var blockId = $this.attr('data-blocklazy-id') || '';
                var videoTwoId = '_' + $this.attr('data-videolazy-two-id') + '_' || '';

                if ($this.attr('data-videolazy-load') == 'false') {
                    $this.attr('data-videolazy-load', 'true');

                    if ($this.attr('data-videolazy-type') == 'youtube') {
                        $this.prepend('<iframe id="youtubeiframe' + videoTwoId + blockId + '" width="100%" height="' + videoHeight + '" src="//www.youtube.com/embed/' + videoId + '?rel=0&fmt=18&html5=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
                    }

                    if ($this.attr('data-videolazy-type') == 'vimeo') {
                        $this.prepend('<iframe src="//player.vimeo.com/video/' + videoId + '?title=0&byline=0&portrait=0&badge=0&color=ffffff" width="100%" height="' + videoHeight + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                    }
                }
            });
        }
    }, 0);
}
 
function t232_expandtext(recid){
  $("#rec"+recid).find(".t232__text").toggle();
}
 
function t270_scroll(hash, offset, speed) {
    if (hash.indexOf('#!/tproduct/') !== -1 || hash.indexOf('#!/tab/') !== -1) {
        return true;
    }

    var root = $('html, body');
    var target = "";

    if (speed === undefined) {
        speed = 400;
    }

    try {
        target = $(hash);
    } catch (event) {
        console.log("Exception t270: " + event.message);
        return true;
    }
    if (target.length === 0) {
        target = $('a[name="' + hash.substr(1) + '"]');
        if (target.length === 0) {
            return true;
        }
    }

    var isHistoryChangeAllowed = window.location.hash !== hash;
    var complete = function () {
        if (!isHistoryChangeAllowed) {
            return;
        }

        if (history.pushState) {
            history.pushState(null, null, hash);
        } else {
            window.location.hash = hash;
        }

        isHistoryChangeAllowed = false;
    }

    var dontChangeHistory = Boolean($('.t270').attr('data-history-disabled'));
    if (dontChangeHistory) {
        complete = function () {};
    }

    root.animate({
        scrollTop: target.offset().top - offset
    }, speed, complete);

    return true;
} 
window.t256showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#coverCarry'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t256__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("body").addClass("t256__overflow");
		$("#rec"+recid+" .t256__cover").addClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-container").removeClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t256__iframe\" width=\"100%\" height=\"540\" src=\"" + videourl + "?rel=0&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t256__close-link\" href=\"javascript:t256hidevideo('"+recid+"');\"><div class=\"t256__close\"></div></a>");
    });
}

window.t256hidevideo = function(recid){
    $(document).ready(function(){
        $("body").removeClass("t256__overflow");
        $("#rec"+recid+" .t256__cover").removeClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-container").addClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-carier").html("<div class=\"t256__video-bg2\"></div>");
    });
} 
function t260_init(){
	$(".t260").each(function() {
		var el=$(this);
		if(el.attr('data-block-init')=='yes'){
		}else{
		  el.attr('data-block-init','yes');

          var toggler = el.find(".t260__header");
          var content = el.find(".t260__content");

          toggler.click(function() {
			$(this).toggleClass("t260__opened");
			if($(this).hasClass("t260__opened")==true){
				content.slideDown();
			}else{
				content.slideUp();
			}
          })

		}
	});
} 
function t262_appendGoogleMap(recid, key) {
	var grecid = recid;

	if (typeof google === 'object' && typeof google.maps === 'object') {
		t262_handleGoogleApiReady(grecid);
	} else {
		if(window.googleapiiscalled!==true){
			var runfunc = 'window.t262_handleGoogleApiReady_'+grecid+' = function () { t262_handleGoogleApiReady("'+grecid+'") }';
			eval(runfunc);

			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "//maps.google.com/maps/api/js?key="+jQuery.trim(key)+"&callback=t262_handleGoogleApiReady_"+grecid;
			document.body.appendChild(script);
			window.googleapiiscalled=true;
		} else {
			setTimeout(function(){
			  t262_appendGoogleMap(grecid, key);
			},200);
		}
	}
}

function t262_setMapHeight(recid) {
	var el=$('#rec'+recid);
	var map = el.find('.t262__map');
	var textwrapper = el.find('.t262__col_text').height();
	map.css('height', textwrapper);
}

function t262_handleGoogleApiReady(recid){
	$('#rec'+recid).find('.t262__map').each(function(index,Element) {
		var el=$(Element);
		var arMarkers = window['arMapMarkers'+recid];
		window.isDragMap = $isMobile ? false : true;
	
		var myLatLng = arMarkers.length > 0 ? new google.maps.LatLng(parseFloat(arMarkers[0].lat), parseFloat(arMarkers[0].lng)) : false;
		var myOptions = {
			zoom: parseInt(el.attr('data-map-zoom')),
			center:myLatLng,
			scrollwheel: false,
			draggable: window.isDragMap,
			zoomControl: true
		};

		var map = new google.maps.Map(Element, myOptions);

		var i, mrk, marker, markers=[], infowindow;
		var bounds = new google.maps.LatLngBounds();
		for(i in arMarkers) {
			mrk = arMarkers[i];
			myLatLng = new google.maps.LatLng(parseFloat(mrk.lat), parseFloat(mrk.lng));
			marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: mrk.title
			});
			bounds.extend(myLatLng);

			if (mrk.descr > '') {
				attachInfoMessage(marker, mrk.descr);
			} else {
				attachInfoMessage(marker, mrk.title);
			}

			markers[markers.length] = marker;
			infowindow='';
			marker='';
		}
		
		function attachInfoMessage(marker, descr) {
			var infowindow = new google.maps.InfoWindow({
				content:  $("<textarea/>").html(descr).text()
			});
		  
			marker.addListener('click', function() {
				infowindow.open(marker.get('map'), marker);
			});
		}
		
		if (arMarkers.length > 1) {
			map.fitBounds(bounds);
			if (map.getZoom() > parseInt(el.attr('data-map-zoom'))) {
				map.setZoom(parseInt(el.attr('data-map-zoom')));
			}
		}

	  
		// Resizing the map for responsive design
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
		}); 

		// DBL Click - activate on mobile      
		if ($isMobile) {
			google.maps.event.addDomListener(window, "dblclick", function() {
				if (window.isDragMap) {
					window.isDragMap = false;
				} else {
					window.isDragMap = true;
				}
				map.setOptions({draggable: window.isDragMap});
			}); 
		}

	}); 
}


function t262_appendYandexMap(recid,key) {
	var yarecid = recid;
	if (typeof ymaps === 'object' && typeof ymaps.Map === 'function') {
		t262_handleYandexApiReady(recid);
	} else {
		if(window.yandexmapsapiiscalled!==true){
			var runfunc = 'window.t262_handleYandexApiReady_'+yarecid+' = function () { return t262_handleYandexApiReady("'+yarecid+'") }';
			eval(runfunc);

			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://api-maps.yandex.ru/2.1/?lang=ru-RU&coordorder=latlong&onload=t262_handleYandexApiReady_"+yarecid;
			if (key > '') {
				script.src = script.src + '&apikey='+key;
			}
			document.body.appendChild(script);
			window.yandexmapsapiiscalled=true;
		} else {
		  setTimeout(function(){
			t262_appendYandexMap(yarecid,key);
		  },200);
	  }
	}
}

function t262_handleYandexApiReady(recid){
	$('#rec'+recid).find('.t262__map').each(function(index,Element) {
		var el=$(Element);
		var arMarkers = window['arMapMarkers'+recid];

		window.isDragMap = $isMobile ? false : true;
			
		if(el.attr('data-map-style')!=''){var mapstyle=eval(el.attr('data-map-style'));}else{var mapstyle='[]';}
		var myLatlng = arMarkers.length > 0 ? [parseFloat(arMarkers[0].lat), parseFloat(arMarkers[0].lng)] : false;
		var myStates = {
			zoom: parseInt(el.attr('data-map-zoom')),
			center:myLatlng,
			scrollZoom: false,
			controls: ['typeSelector','zoomControl'],
			drag: window.isDragMap
		};

		var map = new ymaps.Map(Element, myStates), i, mrk, marker;
		var myGroup = new ymaps.GeoObjectCollection({}) ;
		map.behaviors.disable('scrollZoom');
		for(i in arMarkers) {
			mrk = arMarkers[i];
			myLatlng = [parseFloat(mrk.lat), parseFloat(mrk.lng)];

			myGroup.add(new ymaps.Placemark(myLatlng, { hintContent: mrk.title, balloonContent: mrk.descr > '' ? $("<textarea/>").html(mrk.descr).text() : mrk.title }));			
		}
		map.geoObjects.add(myGroup);
		if (arMarkers.length > 1) {
			map.setBounds(myGroup.getBounds(), {checkZoomRange: true}) ;
		}
		
		$(window).resize(function(){
			map.container.fitToViewport();
		});

		// DBL Click - activate on mobile      
		if ($isMobile) {
			$(window).dblclick(function() {
				if (window.isDragMap) {
					window.isDragMap = false;
				} else {
					window.isDragMap = true;
				}
				if (window.isDragMap) {
					map.behaviors.enable('drag');
				} else {
					map.behaviors.disable('drag');
				}
			});
		}

	});
} 
window.t266showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#coverCarry'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t266__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("body").addClass("t266__overflow");
		$("#rec"+recid+" .t266__cover").addClass("t266__hidden");
        $("#rec"+recid+" .t266__video-container").removeClass("t266__hidden");
        $("#rec"+recid+" .t266__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t266__iframe\" width=\"100%\" height=\"540\" src=\"" + videourl + "?rel=0&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t266__close-link\" href=\"javascript:t266hidevideo('"+recid+"');\"><div class=\"t266__close\"></div></a>");
    });
}

window.t266hidevideo = function(recid){
    $(document).ready(function(){
        $("body").removeClass("t266__overflow");
        $("#rec"+recid+" .t266__cover").removeClass("t266__hidden");
        $("#rec"+recid+" .t266__video-container").addClass("t266__hidden");
        $("#rec"+recid+" .t266__video-carier").html("<div class=\"t266__video-bg2\"></div>");
    });
} 
function t268_init(recid) {
    var el = $("#rec" + recid);
    t268_setHeight(recid);

    $(window).on('resize', function () {
        t268_setHeight(recid);
    });

    el.find('.t268').on('displayChanged', function () {
        t268_setHeight(recid);
    });
}

function t268_setHeight(recid) {
    var el = $("#rec" + recid);
    var height = el.find(".t268__col-right").height();
    el.find(".t268__col-left").css('height', height + 'px');
} 
function t186C_init(recid){
	var t186C_el = $('#rec'+recid),
			t186C_btn = t186C_el.find('.t-submit');
	t186C_btn.click(function(){
		setTimeout(function(){t186C_checkSuccess(t186C_el);}, 100);
		setTimeout(function(){t186C_checkSuccess(t186C_el);}, 300);
		setTimeout(function(){t186C_checkSuccess(t186C_el);}, 700);
		setTimeout(function(){t186C_checkSuccess(t186C_el);}, 1500);
	});
}

function t186C_checkSuccess(t186C_el){
	var t186C_formWrapper = t186C_el.find('.t186C__wrapper');
	if (t186C_el.find('.js-form-proccess').hasClass('js-send-form-success') && !t186C_formWrapper.hasClass('t186C__hiding')){
		t186C_formWrapper.addClass('t186C__hiding');
		var t186C_root = $('html, body'),
				t186C_targetOffset = t186C_el.find('.t186C__blockinput-success').offset().top;
		if ($(window).width()>960) {
			var t186C_target = t186C_targetOffset - 200;
		}	else {
			var t186C_target = t186C_targetOffset - 100;
		}

		if (t186C_targetOffset > $(window).scrollTop()) {
			t186C_formWrapper.addClass('t186C__wrapper_hidden');
		} else {
			t186C_root.animate({ scrollTop: t186C_target}, 400);
			setTimeout(function(){t186C_formWrapper.addClass('t186C__wrapper_hidden');}, 400);
		}
	}
}
 
function t300_init() {
    $('.t300').each(function () {
        var $hook = $(this).attr('data-tooltip-hook'),
            $recid = $(this).attr('data-tooltip-id');
        if ($hook !== '') {
            var $obj = $('a[href="' + $hook + '"]:not(.tooltipstered)');
            var $content = $(this).find('.t300__content').html();
            var touchDevices = false;
            if ($hook.charAt(0) == '#') {
                touchDevices = true;
            }
            var position = $(this).attr('data-tooltip-position');
            if (position === '') {
                position = 'top';
            }
            $obj.tooltipster({
                theme: 't300__tooltipster-noir t300__tooltipster-noir_' + $recid + '',
                contentAsHTML: true,
                content: $content,
                interactive: true,
                touchDevices: touchDevices,
                position: position
            });
        }
    });
}

$(document).ready(function () {
    t300_init();
    setTimeout(function () {
        /* listener open t-store popup (e.g., st300 */
        $('body .t-store').each(function(i, el) {
            new MutationObserver(function (mutationsList, observer) {
                for (var mutation in mutationsList) {
                    var event = mutationsList[mutation];
                    if (event.type === 'attributes') {
                        if (event.target.className.indexOf('t-popup_show') != -1) {
                            t300_init();
                        }
                    }
                }
            }).observe(el, {
                attributes: true,
                attributeFilter: ['class'],
                subtree: true
            });
        });

        t300_init();
    }, 500);
});
 
    var t279 = {};
    
    t279.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t279__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
function t280_showMenu(recid){
  var el=$("#rec"+recid);
  
  
  el.find('.t280__burger, .t280__menu__bg, .t280__menu__item:not(".tooltipstered"):not(".t280__menu__item_submenu"), .t978__tooltip-menu_mobile').click(function(e){
    if ($(this).is(".t280__menu__item.tooltipstered, .t794__tm-link")) { return; }
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var menuItemsLength = el.find('.t280__menu__item').length;
    /* Hack for big amount of items in menu */
    var isAndroid = /(android)/i.test(navigator.userAgent);
    if (window.location.hash && isChrome && menuItemsLength > 10 && isAndroid) {
        setTimeout(function () {
            var hash = window.location.hash;
            window.location.hash = "";
            window.location.hash = hash;
        }, 50);
    }
    
    if (!$(this).is(".t978__tm-link, .t966__tm-link")) {
        $('body').toggleClass('t280_opened');
        el.find('.t280').toggleClass('t280__main_opened');
    }
    
    t280_changeSize(recid);
    t280_highlight(recid);
    
    el.find(".t978__tm-link, .t966__tm-link").click(function() {
        t280_changeSize(recid);
        el.find(".t280__menu").css('transition', 'none');

        el.find(".t978__menu-link").click(function() {
            t280_changeSize(recid);
        });
    });
  });

  $('.t280').bind('clickedAnchorInTooltipMenu',function(){
    $('body').removeClass('t280_opened');
    el.find('.t280').removeClass('t280__main_opened');
  });
  
  if (el.find('.t-menusub__link-item')) {
    el.find('.t-menusub__link-item').on('click', function() {
      $('body').removeClass('t280_opened');
      el.find('.t280').removeClass('t280__main_opened');
    });
  }
}

function t280_changeSize(recid){
  var el=$("#rec"+recid);
  var div = el.find(".t280__menu").height();
  var bottomheight = el.find(".t280__bottom").height();
  var headerheight = el.find(".t280__container").height();
  var wrapper = el.find(".t280__menu__wrapper");
  var win = $(window).height() - bottomheight - headerheight - 160;
  if (div > win ) {
    wrapper.addClass('t280__menu_static');
  }
  else {
    wrapper.removeClass('t280__menu_static');
  }
}

function t280_changeBgOpacityMenu(recid) {
  var window_width=$(window).width();
  var record = $("#rec"+recid);
  record.find(".t280__container__bg").each(function() {
        var el=$(this);
        var bgcolor=el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity=el.attr("data-bgopacity");
        var bgopacity_afterscroll=el.attr("data-bgopacity2");
        var menu_shadow=el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color",bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }else{
            el.css("background-color",bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }
  });
}

function t280_appearMenu() {
  $('.t280').each(function() {
    var el = $(this);
    var appearoffset = el.attr('data-appearoffset');
    if (appearoffset != '') {
      if (appearoffset.indexOf('vh') > -1) {
        appearoffset = Math.floor(
          window.innerHeight * (parseInt(appearoffset) / 100)
        );
      }
      appearoffset = parseInt(appearoffset, 10);
      if ($(window).scrollTop() >= appearoffset) {
        if (el.css('visibility') == 'hidden') {
          el.finish();
          el.css('top', '-50px');
          el.css('opacity', '1');
          el.css('visibility', 'visible');
        }
      } else {
        el.stop();
        el.css('opacity', '0');
        el.css('visibility', 'hidden');
      }
    }
  });
}

function t280_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  var hash=window.location.hash;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  if(hash.substr(hash.length - 1) == "/"){ hash = hash.slice(0,-1); }
  if(hash == ""){ hash = "/"; }

  $("#rec"+recid).find(".t280__menu a").removeClass("t-active");
  
  $(".t280__menu a[href='"+url+"']").addClass("t-active");
  $(".t280__menu a[href='"+url+"/']").addClass("t-active");
  $(".t280__menu a[href='"+pathname+"']").addClass("t-active");
  $(".t280__menu a[href='/"+pathname+"']").addClass("t-active");
  $(".t280__menu a[href='"+pathname+"/']").addClass("t-active");
  $(".t280__menu a[href='/"+pathname+"/']").addClass("t-active");
  
  $(".t280__menu a[href='"+hash+"']").addClass("t-active");
  $(".t280__menu a[href='/"+hash+"']").addClass("t-active");
  $(".t280__menu a[href='"+hash+"/']").addClass("t-active");
  $(".t280__menu a[href='/"+hash+"/']").addClass("t-active");
}
 
function t312_showPopup(tf_url){
  var el=$('.t312');

  var code="<iframe id=\"typeform-full\" width=\"100%\" height=\"100%\" frameborder=\"0\" src=\""+tf_url+"\" data-hook-iframe=\"t312\"></iframe>";
  code +="<script type=\"text/javascript\" src=\"https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js\"></script>"
  var h=$(window).height()-100;
  el.find('[data-hook-typeform-carrier]').html(code);
  el.find('[data-hook-iframe]').height(h);

  $('body').addClass('t312__body_popupshowed');
  if(el.find('.t312__popup').attr('style') && el.find('.t312__popup').attr('style') > '') {
    el.find('.t312__popup').attr('style','');
  }
  el.addClass('t312__popup_show');
  el.find('.t312__close, .t312__bg').click(function(){
	 t312_closePopup();
  });
}

function t312_closePopup(){
  $('body').removeClass('t312__body_popupshowed');
  $('.t312').removeClass('t312__popup_show');
}

function t312_initPopup(){
  $("a[href*='typeform.com']").each(function() {
      var el=$(this);
      el.attr('data-mode','1');
      el.attr('target','_blank');
      //el.addClass('typeform-share link');
      if($(window).width()>980){
        el.click(function(e){
          var tf_url=el.attr('href');
          t312_showPopup(tf_url);
          t312_resizePopup();
          e.preventDefault();
        });
      }
  });
}

function t312_resizePopup(){
  var div = $(".t312__mainblock").height();
  var win = $(window).height();
  var popup = $(".t312__content");
  if (div > win ) {
    popup.addClass('t312__content_static');
  }
  else {
    popup.removeClass('t312__content_static');
  }
} 
function t315_showcomments(recid)
{
  var el=$("#rec"+recid);
  el.find(".t-btn").css("display","none");
  el.find(".t315__blocktitle").css("display","block");
  el.find(".t315__blockhtml").css("display","block");
}
 
function t281_initPopup(recid) {
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');
    $('#rec' + recid).attr('data-popup-subscribe-inited', 'y');
    var el = $('#rec' + recid).find('.t-popup'),
        hook = el.attr('data-tooltip-hook'),
        analitics = el.attr('data-track-popup');

    el.bind('scroll', t_throttle(function () {
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    }));

    if (hook !== '') {
        $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
            t281_showPopup(recid);
            t281_resizePopup(recid);
            e.preventDefault();
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
            if (analitics > '') {
                Tilda.sendEventToStatistics(analitics, hook);
            }
        });
    }
}

function t281_lockScroll() {
    var body = $("body");
    if (!body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        body.addClass('t-body_scroll-locked');
        body.css("top", "-" + bodyScrollTop + "px");
        body.attr("data-popup-scrolltop", bodyScrollTop);
    }
}

function t281_unlockScroll() {
    var body = $("body");
    if (body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = $("body").attr("data-popup-scrolltop");
        body.removeClass('t-body_scroll-locked');
        body.css("top", "");
        body.removeAttr("data-popup-scrolltop")
        window.scrollTo(0, bodyScrollTop);
    }
}

function t281_showPopup(recid) {
    var el = $('#rec' + recid),
        popup = el.find('.t-popup');

    popup.css('display', 'block');
    setTimeout(function () {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
    }, 50);

    $('body').addClass('t-body_popupshowed t281__body_popupshowed');
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        setTimeout(function () {
            t281_lockScroll();
        }, 500);
    }

    el.find('.t-popup').mousedown(function (e) {
        if (e.target == this) {
            t281_closePopup(recid);
        }
    });

    el.find('.t-popup__close').click(function (e) {
        t281_closePopup(recid);
    });

    el.find('a[href*="#"]').click(function (e) {
        var url = $(this).attr('href');
        if (!url || (url.substring(0, 7) != '#price:' && url.substring(0, 7) != '#order:')) {
            t281_closePopup(recid);
            if (!url || url.substring(0, 7) == '#popup:') {
                setTimeout(function () {
                    $('body').addClass('t-body_popupshowed');
                }, 300);
            }
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t281_closePopup(recid);
        }
    });
}

function t281_closePopup(recid) {
    $('body').removeClass('t-body_popupshowed t281__body_popupshowed');
    $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        t281_unlockScroll();
    }
    setTimeout(function () {
        $('.t-popup').not('.t-popup_show').css('display', 'none');
    }, 300);
}

function t281_resizePopup(recid) {
    var el = $("#rec" + recid),
        div = el.find(".t-popup__container").height(),
        win = $(window).height() - 120,
        popup = el.find(".t-popup__container");
    if (div > win) {
        popup.addClass('t-popup__container-static');
    } else {
        popup.removeClass('t-popup__container-static');
    }
}

function t281_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    'hitType': 'pageview',
                    'page': virtPage,
                    'title': virtTitle
                });
            }
        }

        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            });
        }
    }
} 
function t282_showMenu(recid) {
    var el = $("#rec" + recid);

    el.find('.t282__burger, .t282__menu__item:not(".tooltipstered"):not(".t282__menu__item_submenu"), .t282__overlay').click(function () {
        if ($(this).is(".t282__menu__item.tooltipstered, .t794__tm-link, .t978__tm-link, .t966__tm-link")) {
            return;
        }
        $('body').toggleClass('t282_opened');
        el.find('.t282__menu__container, .t282__overlay').toggleClass('t282__closed');
        var height = el.find(".t282__container").get(0).getBoundingClientRect().height;
        el.find(".t282__menu__container").css({
            'top': height
        });
    });

    el.find('.t282').bind('clickedAnchorInTooltipMenu', function () {
        $('body').removeClass('t282_opened');
        $('#rec' + recid + ' .t282__menu__container, #rec' + recid + ' .t282__overlay').addClass('t282__closed');
    });

    if (el.find('.t-menusub__link-item')) {
        el.find('.t-menusub__link-item').on('click', function () {
            $('body').removeClass('t282_opened');
            $('#rec' + recid + ' .t282__menu__container, #rec' + recid + ' .t282__overlay').addClass('t282__closed');
        });
    }
}

function t282_changeSize(recid) {
    var el = $("#rec" + recid);
    var bottomheight = el.find(".t282__menu__container");
    var headerheight = el.find(".t282__container");
    var menu = bottomheight.height() + headerheight.height();
    var win = $(window).height();
    if (menu > win) {
        $("#nav" + recid).addClass('t282__menu_static');
    } else {
        $("#nav" + recid).removeClass('t282__menu_static');
    }
}

function t282_changeBgOpacityMenu(recid) {
    var window_width = $(window).width();
    var record = $("#rec" + recid);
    record.find(".t282__container__bg").each(function () {
        var el = $(this);
        var bgcolor = el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity = el.attr("data-bgopacity");
        var bgopacity_afterscroll = el.attr("data-bgopacity2");
        var menu_shadow = el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color", bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
                el.css('box-shadow', menu_shadow);
            } else {
                el.css('box-shadow', 'none');
            }
        } else {
            el.css("background-color", bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
                el.css('box-shadow', menu_shadow);
            } else {
                el.css('box-shadow', 'none');
            }
        }
    });
}

function t282_highlight(recid) {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == "/") {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == "/") {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == "/") {
        pathname = pathname.slice(1);
    }
    if (pathname === "") {
        pathname = "/";
    }
    $(".t282__menu a[href='" + url + "']").addClass("t-active");
    $(".t282__menu a[href='" + url + "/']").addClass("t-active");
    $(".t282__menu a[href='" + pathname + "']").addClass("t-active");
    $(".t282__menu a[href='/" + pathname + "']").addClass("t-active");
    $(".t282__menu a[href='" + pathname + "/']").addClass("t-active");
    $(".t282__menu a[href='/" + pathname + "/']").addClass("t-active");
}

function t282_appearMenu(recid) {
    var window_width = $(window).width();
    $(".t282").each(function () {
        var el = $(this);
        var appearoffset = el.attr("data-appearoffset");
        if (appearoffset !== "") {
            if (appearoffset.indexOf('vh') > -1) {
                appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
            }

            appearoffset = parseInt(appearoffset, 10);

            if ($(window).scrollTop() >= appearoffset) {
                if (el.css('visibility') == 'hidden') {
                    el.finish();
                    el.css("top", "-50px");
                    el.css("visibility", "visible");
                    el.animate({
                        "opacity": "1",
                        "top": "0px"
                    }, 200, function () {});
                }
            } else {
                el.stop();
                el.css("visibility", "hidden");
            }
        }
    });
}
 
function t330_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed t330__body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t330_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t330_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t330_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t330_closePopup(); }
  });
}

function t330_closePopup(){
  $('body').removeClass('t-body_popupshowed t330__body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t330_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t330_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t330_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t330_showPopup(recid);
      t330_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t330_sendPopupEventToStatistics(hook);
      }
    });
  }
} 
function t331_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    $('.r').on('click', 'a[href="' + hook + '"]', function(e) {
      t331_showPopup(recid);
      t331_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}

function t331_setHeight(recid){
  var el=$("#rec"+recid); 
  var div = el.find(".t331__video-carier");
  var ratiowidth = div.attr("data-video-width");
  var ratioheight = div.attr("data-video-height");
  if (ratioheight.indexOf('vh') !== -1) {
      ratioheight = parseInt(ratioheight, 10) * 0.01 * $(window).height();
  }
  ratioheight = parseInt(ratioheight, 10);
  var ratio = ratioheight/ratiowidth;     
  var height=div.width() * ratio;
  div.height(height);
  div.parent().height(height);
}

function t331_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  var youtubeid = el.find(".t331__youtube").attr('data-content-popup-video-url-youtube');
  var videourl = 'https://www.youtube.com/embed/' + youtubeid;
  el.find(".t331__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t331__iframe\" width=\"100.5%\" height=\"100.5%\" src=\"" + videourl + (videourl.indexOf('?') !== -1 ? '&' : '?') + "autoplay=1&rel=0\" frameborder=\"0\" allowfullscreen></iframe>");

  popup.css('display', 'block');
  t331_setHeight(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');
  $('body').addClass('t331__body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
    t331_popup_close(recid);
    }
  });

  el.find('.t-popup__close').click(function(e){
    t331_popup_close(recid);
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t331_popup_close(recid); }
  });
}

function t331_popup_close(recid) {
    $('body').removeClass('t-body_popupshowed');
    $('body').removeClass('t331__body_popupshowed');
    $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
    setTimeout(function () {
        $("#rec" + recid + " .t331__video-carier").html("");
        $('#rec' + recid + ' .t-popup').not('.t-popup_show').css('display', 'none');
    }, 300);
}

function t331_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height(),
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/* deprecated */
function t331_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
} 
var t334 = {};
t334.initeffect = function (recid){
    if ($('#rec'+recid).find('.t-container').attr('data-show-button')=="true") {
      $('#rec'+recid).find(".t334__cell").each(function() {
        var sizer = $(this).find(".t334__button-container").height();
        $(this).find(".t334__textwrapper__content").css({'padding-bottom':(sizer+'px')});
        $(this).find(".t334__button-container").addClass("t334__button-container_show");  
      });
    } else {
      $('#rec'+recid).find(".t334__cell").hover(function(){
        var sizer = $(this).find(".t334__button-container").height();
        $(this).find(".t334__textwrapper__content").css({'padding-bottom':(sizer+'px')});
        $(this).find(".t334__button-container").addClass("t334__button-container_show");
      }, function(){
        $(this).find(".t334__textwrapper__content").css("padding-bottom","0");
        $(this).find(".t334__button-container").removeClass("t334__button-container_show");
      });
    }
};
  
 
	var t335 = {};
    t335.initeffect = function(recid) {
        $('#rec'+recid).find(".t335__cell").hover(function(){
            var sizer = $(this).find(".t335__button-container").height();
            $(this).find(".t335__textwrapper__content").css({'padding-bottom':(sizer+'px')});
            $(this).find(".t335__button-container").addClass("t335__button-container_show");
        }, function(){
            $(this).find(".t335__textwrapper__content").css("padding-bottom","0");
            $(this).find(".t335__button-container").removeClass("t335__button-container_show");
        });
    };
 
var t336 = {};
t336.initeffect = function (recid) {
    $('#rec' + recid).find(".t336__cell").hover(function () {
        var sizer = $(this).find(".t336__button-container").height();
        $(this).find(".t336__textwrapper__content").css({
            'padding-bottom': (sizer + 'px')
        });
        $(this).find(".t336__button-container").addClass("t336__button-container_show");
    }, function () {
        $(this).find(".t336__textwrapper__content").css("padding-bottom", "0");
        $(this).find(".t336__button-container").removeClass("t336__button-container_show");
    });
}; 
function t341_showCaptions(recid){
  var el=$("#t-carousel"+recid);
  var caption = el.find('.item:nth-child(1) .t-carousel__caption-inside');
  var captioncontainer = el.find('.t-carousel__caption__container');
  captioncontainer.html(caption.html());
  caption.css('display','none');

  $("#t-carousel"+recid).on('slide.bs.carousel', function(evt) {
    var el=$("#t-carousel"+recid);
    var caption = el.find('.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .t-carousel__caption-inside');
    var captioncontainer = el.find('.t-carousel__caption__container');
    captioncontainer.html(caption.html());
    caption.css('display','none');
  });
}

function t341_checkSize(recid){
  var el=$("#rec"+recid);
  var containerinside = el.find(".t-carousel__arrows__container_inside");
  var containeroutside = el.find(".t-carousel__arrows__container_outside");
  var inner = el.find(".t-carousel__inner");
  var arrowleft = el.find(".t-carousel__arrow_left");
  var arrowright = el.find(".t-carousel__arrow_right");
  containeroutside.css({'max-width':(arrowleft.width()+arrowright.width()+inner.width()+ 60 +'px')});
  containerinside.css({'max-width':(inner.width()+'px')});

  var sizer = el.find('.t-carousel__height');
  var height = sizer.height();
  var width = sizer.width();
  if (width==0) {
    var width = $(window).width();
  }
  var ratio = width/height;
  var gallerywrapper = el.find(".t-carousel__checksize");
  var gallerywidth = gallerywrapper.width();

  if (height != $(window).height()) {
    gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});
  }
} 
function t341_sendPaymentEventToStatistics(product, price) {
    if (Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        var virtPage = '/tilda/payment/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;
        Tilda.sendEventToStatistics(virtPage, virtTitle,'',price);
    } else {
        var virtPage = '/tilda/order/?product='+product+'&price='+price;
        var virtTtitle = 'Order: '+product+' = '+price;

        if(ga) {
            if (window.mainTracker == 'tilda') {
                ga('tilda.send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
            } else {
                ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
            }
        }
        
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTtitle,referer: window.location.href});
        }
    }
}

function t341_initStripePayment(recid, publishableapi, companyname, logo) {
	
	if (typeof StripeCheckout === 'object' ) {
		t341_handleStripeApiReady(recid,publishableapi, companyname, logo);
	} else {
		if(window.stripeapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://checkout.stripe.com/checkout.js";
			document.body.appendChild(script);
			window.stripeapiiscalled=true;
		}
		
		setTimeout(function(){
			t341_initStripePayment(recid, publishableapi, companyname, logo)
		}, 10);
	}

}

function t341_handleStripeApiReady(recid,publishableapi, companyname, logo) {
	if(! window.stripehandler) {
		window.stripehandler = StripeCheckout.configure({
			key: publishableapi,
			image: logo,
			name: (companyname ? companyname : window.location.host),
			locale: 'auto',
			token: function(token) {
				if (token && token.id) {
					t341_sendPaymentEventToStatistics($('#rec'+recid+' .js-product-name').val(), parseInt($('#rec'+recid+' .js-amount').val())*100);

					var data = {};
					data.projectid = $('#allrecords').attr('data-tilda-project-id');
					data.token = token.id;
					if (token.email) {
						data.email = token.email;
					}
					data.amount = parseInt($('#rec'+recid+' .js-amount').val())*100;
					data.products = [{
						product: $('#rec'+recid+' .js-product-name').val(),
						amount: parseInt($('#rec'+recid+' .js-amount').val())*100
						}
					];
					data.currency = $('#rec'+recid+' .js-currency').val();
					
					$.post('https://forms.tildacdn.com/payment/stripe/', data, function(json){
						},
						'json'
					);

					if ($('#rec'+recid+' .js-success-url').val() > '') {
						window.location.href = $('#rec'+recid+' .js-success-url').val();
					} else {
						$('#rec'+recid+' .t341__submit').val('Payed');
					}

				}
			}
		});
		// Close Checkout on page navigation:
		$(window).on('popstate', function() {
			window.stripehandler.close();
		});
	}
	
	$('#rec'+recid+' .t341__submit').on('click', function(e) {
		e.preventDefault();
		// Open Checkout with further options:
		window.stripehandler.open({
			name: companyname,
			image: logo,
			description: $('#rec'+recid+' .js-product-name').val(),
			amount: parseInt($('#rec'+recid+' .js-amount').val()*100),
			currency: $('#rec'+recid+' .js-currency').val(),
			shippingAddress: $('#rec'+recid+' .js-need-shipping').val() == '1' ? true : false,
			billingAddress: $('#rec'+recid+' .js-need-shipping').val() == '1' ? true : false,
		});
	});
}


function t341_initCloudPayments(recid, publishableapi) {
	
	if (typeof cp == "object" && typeof cp.CloudPayments == "function") {
		t341_handleCloudPaymentsApiReady(recid,publishableapi);
	} else {
		if(window.cloudpaymentsapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
			document.body.appendChild(script);
			window.cloudpaymentsapiiscalled=true;
		}
		
		setTimeout(function(){
			t341_initCloudPayments(recid, publishableapi);
		}, 10);
	}

}

function t341_handleCloudPaymentsApiReady(recid,publishableapi) {
	
	$('#rec'+recid+' .t341__submit').on('click', function(e) {
		e.preventDefault();
		
		var currency = $('#rec'+recid+' .js-currency').val();
		if(! window.cloudpaymentshandler) {
			var lang='';
			if ( $('#rec'+recid+' .js-language').length > 0) {
				lang = $('#rec'+recid+' .js-language').val();
			}
			if (lang == '') {
				lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
			}
			window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
		}

		/* Open Checkout with further options:*/
		window.cloudpaymentshandler.charge(
			{
				publicId: publishableapi, 
				description: $('#rec'+recid+' .js-product-name').val(), 
				amount: parseFloat($('#rec'+recid+' .js-amount').val()),
				currency: currency, 
			},
			function (options) { /* success*/
				//действие при успешной оплате
				t341_sendPaymentEventToStatistics($('#rec'+recid+' .js-product-name').val(), parseInt($('#rec'+recid+' .js-amount').val()));
				if ($('#rec'+recid+' .js-success-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-success-url').val();
				} else {
					$('#rec'+recid+' .t341__submit').val('Payed');
				}
				
			},
			function (reason, options) { // fail
				if ($('#rec'+recid+' .js-failure-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-failure-url').val();
				}
			}
		);
	});
}
 
function t342_sendPaymentEventToStatistics(product, price) {
    if (Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        var virtPage = '/tilda/payment/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;
        Tilda.sendEventToStatistics(virtPage, virtTitle,'',price);
    } else {
        var virtPage = '/tilda/order/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;

        if(window.ga && window.mainTracker != 'tilda') {
            ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
        }
        
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
        }
    }
}

function t342_initStripePayment(recid, publishableapi, companyname, logo) {
	
	if (typeof StripeCheckout === 'object' ) {
		t342_handleStripeApiReady(recid,publishableapi, companyname, logo);
	} else {
		if(window.stripeapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://checkout.stripe.com/checkout.js";
			document.body.appendChild(script);
			window.stripeapiiscalled=true;
		}
		
		setTimeout(function(){
			t342_initStripePayment(recid, publishableapi, companyname, logo)
		}, 10);
	}

}

function t342_handleStripeApiReady(recid, publishableapi, companyname, logo) {
	if(! window.stripehandler) {
		window.stripehandler = StripeCheckout.configure({
			key: publishableapi,
			image: logo,
			name: (companyname ? companyname : window.location.host),
			locale: 'auto'
		});
		// Close Checkout on page navigation:
		$(window).on('popstate', function() {
			window.stripehandler.close();
		});
	}
	
	$('[href^="#price"]').click(function(e){
		e.preventDefault();

		var t342click = $(this);
		var tmp = $(this).attr('href');
		// format:  #price:Cost:Product name
		var arParam = tmp.split(':');
		var productprice = parseInt(arParam[1].replace(/[^0-9\.]/g,''));
		var productname = arParam[2];
		if (! productname) {
			var tmp=$(this).closest('.r').find('.title');
			if (tmp.length > 0) {
				productname = tmp.text();
			}
			productname = $(this).text();
		}
		
		window.stripehandler.open({
			name: companyname,
			image: logo,
			description: productname,
			amount: parseInt(productprice)*100,
			currency: $('#rec'+recid+' .js-stripe-currency').val(),
			shippingAddress: $('#rec'+recid+' .js-stripe-need-shipping').val() == '1' ? true : false,
			billingAddress: $('#rec'+recid+' .js-stripe-need-shipping').val() == '1' ? true : false,
			token: function(token, args) {
				if (token && token.id) {
					t342_sendPaymentEventToStatistics(productname, productprice*100);

					var data = {};
					data.projectid = $('#allrecords').attr('data-tilda-project-id');
					data.token = token.id;
					if (token.email) {
						data.email = token.email;
					}
					data.amount = parseInt(productprice)*100;
					data.products = [{
						product: productname,
						amount: parseInt(productprice)*100
						}
					];
					data.currency = $('#rec'+recid+' .js-stripe-currency').val();
					
					$.post('https://forms.tildacdn.com/payment/stripe/', data, function(json){
							if ($('#rec'+recid+' .js-success-url').val() > '') {
								window.location.href = $('#rec'+recid+' .js-success-url').val();
							} else {
								t342click.html('<span style="vertical-align: middle;">Payed</span>');
							}

						},
						'json'
					).fail(function(){

						if ($('#rec'+recid+' .js-success-url').val() > '') {
							window.location.href = $('#rec'+recid+' .js-success-url').val();
						} else {
							t342click.html('<span style="vertical-align: middle;">Try, again</span>');
						}
					});
				}
			}
			
		});

	});
}

function t342_initCloudPayments(recid, publishableapi) {
	
	if (typeof cp == "object" && typeof cp.CloudPayments == "function") {
		t342_handleCloudPaymentsApiReady(recid,publishableapi);
	} else {
		if(window.cloudpaymentsapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
			document.body.appendChild(script);
			window.cloudpaymentsapiiscalled=true;
		}
		
		setTimeout(function(){
			t342_initCloudPayments(recid, publishableapi);
		}, 10);
	}

}

function t342_handleCloudPaymentsApiReady(recid,publishableapi) {
	
	$('[href^="#price"]').click(function(e){
		e.preventDefault();

		var currency = $('#rec'+recid+' .js-currency').val();
		if(! window.cloudpaymentshandler) {
			var lang='';
			if ( $('#rec'+recid+' .js-language').length > 0) {
				lang = $('#rec'+recid+' .js-language').val();
			}
			if (lang == '') {
				lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
			}
			window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
		}

		var t342click = $(this);
		var tmp = $(this).attr('href');
		// format:  #price:Cost:Product name
		var arParam = tmp.split(':');
		var productprice = parseFloat(arParam[1].replace(/[^0-9\.]/g,''));
		var productname = arParam[2];
		if (! productname) {
			var tmp=$(this).closest('.r').find('.title');
			if (tmp.length > 0) {
				productname = tmp.text();
			}
			productname = $(this).text();
		}

		/* Open Checkout with further options:*/
		window.cloudpaymentshandler.charge(
			{
				publicId: publishableapi, 
				description: productname, 
				amount: productprice,
				currency: currency, 
			},
			function (options) { /* success*/
				//действие при успешной оплате
				t342_sendPaymentEventToStatistics(productname, productprice);
				if ($('#rec'+recid+' .js-success-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-success-url').val();
				} else {
					t342click.html('OK');
				}
				
			},
			function (reason, options) { // fail
				if ($('#rec'+recid+' .js-failure-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-failure-url').val();
				}
			}
		);
	});
}

function t342_initPayment(recid){
	if ($('#allrecords').find('.t362').length == 0) {

		if ($('.js-stripe-publishable-key').length > 0) {
			t342_initStripePayment(recid, $('.js-stripe-publishable-key').val(), $('.js-stripe-company-name').val(), $('.js-stripe-logo').val());
		} else {
			if ($('.js-cp-key').length > 0) {
				t342_initCloudPayments(recid, $('.js-cp-key').val());
			} else {
				$('[href^="#price"]').click(function(e){
					e.preventDefault();
		
					var tmp = $(this).attr('href');
					// format:  #price:Cost:Product name
					var arParam = tmp.split(':');
					var price = parseInt(arParam[1].replace(/[^0-9\.]/g,''));
					var name = arParam[2];
					if (! name) {
						var tmp=$(this).closest('.r').find('.title');
						if (tmp.length > 0) {
							name = tmp.text();
						}
						name = $(this).text();
					}
			
					var $form = $('#formpayment'+recid);
					$form.find('.js_payment_product').val(name);
					$form.find('.js_payment_price').val(price);
					
					var $yabox = $('.js-yapayment-paymentbox');
					if ( $yabox.length > 0) {
						var $parent = $(this).parent();
						$($parent).css('position','relative');
						$('.js-yapayment-paymentbox').appendTo($parent);
						$('.js-yapayment-paymentbox').show();
		
						$('.r').click(function(){ $('.js-yapayment-paymentbox').hide(); $('.r').off('click'); return false; });
		
						$('.js-yapayment-paymentbox a').click(function(){
							$form.find('input[name=paymentType]').val($(this).data('payment-currency'));
							var $ctrl=$form.find('[name=customerNumber]');
							if($ctrl.length > 0) {
								$ctrl.val(new Date().getTime());
							}
							t342_sendPaymentEventToStatistics(name,price);
							$form.submit();
							return false;
						});
					} else {
						t342_sendPaymentEventToStatistics(name,price);
						$form.submit();
					}
					return false;
				});
			}
		}
	}
} 
function t347_setHeight(recid){
  var el=$('#rec'+recid);
  var div = el.find(".t347__table");
  var height=div.width() * 0.5625;
  div.height(height);
}

window.t347showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#rec'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t347__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("#rec"+recid+" .t347__video-container").removeClass( "t347__hidden");
        $("#rec"+recid+" .t347__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t347__iframe\" width=\"100%\" height=\"100%\" src=\"" + videourl + (videourl.indexOf('?') !== -1 ? '&' : '?') + "autoplay=1&rel=0\" frameborder=\"0\" allowfullscreen allow=\"autoplay\"></iframe>");
    });
}

window.t347hidevideo = function(recid){
    $(document).ready(function(){
        $("#rec"+recid+" .t347__video-container").addClass( "t347__hidden");
        $("#rec"+recid+" .t347__video-carier").html("");
    });
} 
function t349_floating_init(el){
    /*console.log('floating_init');*/

    var wnd=$(window);
    var col=el.parent();

    el.css('max-width',el.width());
    el.css('width','100%');
    col.css('min-height',el.height());
	window.setTimeout(function() {col.css('min-height',el.height());}, 300);

    var timer;
    var timer_count=0;
    var timer_react=5;

    wnd.scroll(function() {
        if(timer) {
            window.clearTimeout(timer);
            if(timer_count>=timer_react){
                t349_floating_scroll(el,wnd,col);
                timer_count=0;
            }
            timer_count++;
        }

        timer = window.setTimeout(function() {
                t349_floating_scroll(el,wnd,col);
                timer_count=0;    
        }, 50);
    });        


    wnd.resize(function() {
         wnd.scroll();
    });

    wnd.scroll();
}

function t349_floating_scroll(el,wnd,col){
    var wnd_height = wnd.height();
    var wnd_width = wnd.width();

    if(wnd_width<=1024){
        el.removeClass('t349__fixedTop');
        el.removeClass('t349__fixedBottom');
        el.removeClass('t349__floating');
        return('');
    }

    el.css('max-width',col.width());

    if(col.height()<el.height() && col.height()>0){
        col.height(el.height());
    }

    var el_height = el.height();
    var col_top = col.offset().top;
    var col_width = col.width();
    var col_height = col.height();
    var col_bottom = col_top + col_height;

    var wnd_top = wnd.scrollTop();
    var wnd_bottom = wnd_top + wnd_height;  

    if(wnd_top+el_height+50 >= col_bottom){
        //console.log('fixedbottom');
        el.addClass('t349__fixedBottom');
        el.removeClass('t349__fixedTop');
        el.removeClass('t349__floating');
    }else if(wnd_top+50 > col_top){
        //console.log('floating');
        el.addClass('t349__floating');
        el.removeClass('t349__fixedBottom');
        el.removeClass('t349__fixedTop');
    }else{
        //console.log('fixedtop');
        el.addClass('t349__fixedTop');
        el.removeClass('t349__fixedBottom');  
        el.removeClass('t349__floating');
    }
} 
function t351_setSize(recid){
  var el=$("#rec"+recid);
  var height = el.find(".t351__sizer").height();
  var width = el.find(".t351__sizer").width();
  var ratio = width/height;
  var imgwrapper = el.find(".t351__imgwrapper");
  var imgwidth = imgwrapper.width();
  imgwrapper.css({'height':((imgwidth/ratio)+'px')});
} 
function t353_setSize(recid){
  var el=$("#rec"+recid);
  var height = el.find(".t353__sizer").height();
  var width = el.find(".t353__sizer").width();
  var ratio = width/height;
  var imgwrapper = el.find(".t353__imgwrapper");
  var imgwidth = imgwrapper.width();
  imgwrapper.css({'height':((imgwidth/ratio)+'px')});
}

function t353_setHeight(recid){
  var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;

  $('#rec'+recid+' .t353__textwrapper').each(function() {

      $el = $(this);
      $($el).height('auto')
      topPostion = $el.position().top;
 
      if (currentRowStart != topPostion) {
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
          rowDivs.length = 0;
          currentRowStart = topPostion;
          currentTallest = $el.height();
          rowDivs.push($el);
      } else {
          rowDivs.push($el);
          currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
      }
  });
      
  $('#rec'+recid+' .t353__wrapper').each(function() {

      $el = $(this);
      $($el).height('auto')
      topPostion = $el.position().top;
 
      if (currentRowStart != topPostion) {
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
          rowDivs.length = 0;
          currentRowStart = topPostion;
          currentTallest = $el.height();
          rowDivs.push($el);
      } else {
          rowDivs.push($el);
          currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
      }
  });
} 
function t354_createCookie(name,value,days) {
  /*if (days == '' || parseInt(days) <= 0) {
    return;
  }*/    
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function t354_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function t354_checkPosition(recid) {
    var winWidth = $(window).width();
    var screenMin = $('#rec' + recid).attr("data-screen-min");
    var screenMax = $('#rec' + recid).attr("data-screen-max");

    if(typeof screenMin !== 'undefined') {
        if(winWidth < parseInt(screenMin, 10)) {
            return false;
        }
    }

    if(typeof screenMax !== 'undefined') {
        if(winWidth > parseInt(screenMax, 10)) {
            return false;
        }
    }

  var el = $('#rec'+recid).find('.t354__opener');
  if (!t354_isPopupRecVisible(el)) {
    return;
  }  
  var name = el.attr('data-cookie-name');
  var time = el.attr('data-cookie-time');
  var multiplier = el.attr('data-trigger-position');
  var position = $(window).height() * multiplier;
  var value = "t354cookie";
  var cookie = t354_readCookie(name);
  if (cookie) {
    $("#rec"+recid+" .t354").html("");
  }else if (el.length){
    var scroll = $(window).scrollTop() + position;
    var objoffset = el.offset().top;
    if (scroll >= objoffset) {
      el.trigger('click');
      $("#rec"+recid+" .t354").html("");
      t354_createCookie(name,value,time);
    }
  }
}

function t354_isPopupRecVisible(el) {
    var linkText = el.attr('href');
    var el_popup = $('.t-popup[data-tooltip-hook="'+linkText+'"]');
    var el_popupRec = el_popup.parents('.r');
    var minScreen = el_popupRec.attr('data-screen-min');
    if (minScreen && minScreen !== '') {
        minScreen = minScreen.replace('px', '');
        if (parseInt(minScreen, 10) > $(window).width()) {
            return false;
        }
    }
    return true;
} 
function t358_initPopup(recid) {
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');
    var el = $('#rec' + recid).find('.t-popup'),
        hook = el.attr('data-tooltip-hook'),
        analitics = el.attr('data-track-popup');
    if (hook !== '') {
        $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
            t358_showPopup(recid);
            t358_resizePopup(recid);
            e.preventDefault();
            if (analitics > '') {
                var virtTitle = hook;
                if (virtTitle.substring(0, 7) == '#popup:') {
                    virtTitle = virtTitle.substring(7);
                }
                Tilda.sendEventToStatistics(analitics, virtTitle);
            }
        });
    }
}

function t358_setHeight(recid) {
    var el = $('#rec' + recid);
    var div = el.find(".t358__video-carier");
    var height = div.width() * 0.5625;
    div.height(height);
    div.parent().height(height);
}

function t358_showPopup(recid) {
    var el = $('#rec' + recid),
        popup = el.find('.t-popup');

    var vimeoid = $("#rec" + recid + " .t358__vimeo").attr('data-content-popup-video-url-vimeo');
    var videourl = '//player.vimeo.com/video/' + vimeoid;
    $("#rec" + recid + " .t358__video-carier").html("<iframe id=\"vimeoiframe" + recid + "\" class=\"t358__iframe\" width=\"100%\" height=\"100%\" src=\"" + videourl + "?title=0&byline=0&portrait=0&badge=0&color=ffffff&autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");

    popup.css('display', 'block');
    t358_setHeight(recid);
    setTimeout(function () {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
    }, 50);

    $('body').addClass('t-body_popupshowed');
    $('body').addClass('t358__body_popupshowed');

    el.find('.t-popup').click(function (e) {
        if (e.target == this) {
            t358_popup_close(recid);
        }
    });

    el.find('.t-popup__close').click(function (e) {
        t358_popup_close(recid);
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t358_popup_close(recid);
        }
    });
}

function t358_popup_close(recid) {
    $('body').removeClass('t-body_popupshowed');
    $('body').removeClass('t358__body_popupshowed');
    $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
    setTimeout(function () {
        $("#rec" + recid + " .t358__video-carier").html("");
        $('.t-popup').not('.t-popup_show').css('display', 'none');
    }, 300);
}

function t358_resizePopup(recid) {
    var el = $("#rec" + recid),
        div = el.find(".t-popup__container").height(),
        win = $(window).height(),
        popup = el.find(".t-popup__container");
    if (div > win) {
        popup.addClass('t-popup__container-static');
    } else {
        popup.removeClass('t-popup__container-static');
    }
}

/* deprecated */
function t358_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;

    if (ga) {
        if (window.mainTracker != 'tilda') {
            ga('send', {
                'hitType': 'pageview',
                'page': virtPage,
                'title': virtTitle
            });
        }
    }

    if (window.mainMetrika > '' && window[window.mainMetrika]) {
        window[window.mainMetrika].hit(virtPage, {
            title: virtTitle,
            referer: window.location.href
        });
    }
}
 
function t359_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t359_showPopup(recid);
      t359_resizePopup(recid);
      e.preventDefault();
      if (analitics == 'yes') {
        t359_sendPopupEventToStatistics(hook);
      }
      t359_positionArrows(recid);
    });
  }
}

function t359_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t359_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t359_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t359_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t359_closePopup(); }
  });
}

function t359_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t359_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t359_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t359_showCaptions(recid){
  var el=$("#t-carousel"+recid);
  var caption = el.find('.item:nth-child(1) .t-carousel__caption-inside');
  var captioncontainer = el.find('.t-carousel__caption__container');
  captioncontainer.html(caption.html());
  caption.css('display','none');

  $("#t-carousel"+recid).on('slide.bs.carousel', function(evt) {
    var el=$("#t-carousel"+recid);
    var caption = el.find('.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .t-carousel__caption-inside');
    var captioncontainer = el.find('.t-carousel__caption__container');
    captioncontainer.html(caption.html());
    caption.css('display','none');
  });
}

function t359_positionArrows(recid){
  var el=$("#rec"+recid);
  var containerinside = el.find(".t-carousel__arrows__container_inside");
  var containeroutside = el.find(".t-carousel__arrows__container_outside");
  var inner = el.find(".t-carousel__inner");
  var arrowleft = el.find(".t-carousel__arrow_left");
  var arrowright = el.find(".t-carousel__arrow_right");
  containeroutside.css({'max-width':(arrowleft.width()+arrowright.width()+inner.width()+ 60 +'px')});
  containerinside.css({'max-width':(inner.width()+'px')});
}

function t359_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t362_sendPopupEventToStatistics(link_recid, popupname)
{
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Payment popup: ';
    if (popupname.substring(0,7) == '#price:') {
        popupname = popupname.substring(7);
    }
    
    virtPage = virtPage + link_recid + '/';
    virtTitle += popupname;
    
    if (Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle,'',0);
    } else {
        if (window.ga && window.mainTracker != 'tilda') {
            ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
        }
        
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
        }
    }

}

function t362_sendPaymentEventToStatistics(product, price) {
    if (Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        var virtPage = '/tilda/payment/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;
        Tilda.sendEventToStatistics(virtPage, virtTitle,'',price);
    } else {
        var virtPage = '/tilda/order/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;

        if(window.ga && window.mainTracker != 'tilda') {
            ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
        }
        
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
        }
    }
}

function t362_showPopup(recid,name,price){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  el.find('.js-product-title').html(name+' = ' + price);
  el.find('.js-successbox').hide();
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed t362__body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t362_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t362_closePopup();
  });
}

function t362_closePopup(){
  $('body').removeClass('t-body_popupshowed t362__body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t362_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

window.t362_sendPaymentForm = function($form) {
  var recid = $form.attr('id').replace('form','');
  var $paymentForm = $('#formpayment'+recid);
  
  if($paymentForm.length == 0) {
    if ($form.data('success-url') > '') {
      window.location.href = $form.data('success-url');
    }
    return false;
  }

  var name = $paymentForm.find('.js_payment_product').val();
  var price = $paymentForm.find('.js_payment_price').val();

  if ($form.data('success-url') > '') {
    $paymentForm.find('.js_payment_successurl').val($form.data('success-url'));
  }
  if($paymentForm.find('.js_payment_successurl').val() == '') {
	$paymentForm.find('.js_payment_successurl').val(window.location.href);
  }

  if ($('#rec'+recid).find('.js-payment-type').length>0) {
    $paymentForm.find('input[name=paymentType]').val( $('#rec'+recid).find('.js-payment-type').val() );
  }

  var $ctrl=$paymentForm.find('[name=customerNumber]');

  var tildaformresult = $form.data('tildaformresult');
  if (tildaformresult && tildaformresult.tranid > '0') {
    if($ctrl.length > 0) {
      $ctrl.val(tildaformresult.tranid); /* dataid */
    }
    
    $ctrl=$paymentForm.find('.js_payment_ordernumber');
    if($ctrl.length > 0) {
      if (tildaformresult.orderid > '0') {
        $ctrl.val(tildaformresult.orderid);
      } else {
        $ctrl.val('');
      }
    }
  } else {
    if($ctrl.length > 0) {
      $ctrl.val('');
    }
  }

  t362_sendPaymentEventToStatistics(name,price);

  var actionUrl = $paymentForm.attr('action');
  if(actionUrl && actionUrl.indexOf('eshop.xml') > 0) {
    var allData = '';
    $form.find('input[type=text]').each(function(){
      var str = $(this).val();
      var cssclass=$(this).attr('class');
      if (!cssclass || cssclass.indexOf('js_pay')==-1) {
        allData = allData+''+str+'; ';
      }
      
      if (str > '' && str.indexOf('@')>0) {
        var $jqemail = $paymentForm.find('input[name=custEmail]');
        if (!$jqemail || $jqemail.length == 0) {
          $paymentForm.append("<input type=hidden name=custEmail value='"+str+"'>");
        } else {
          $jqemail.val(str);
        }
        
        $jqemail = $paymentForm.find('input[name=cps_email]');
        if (!$jqemail || $jqemail.length == 0) {
          $paymentForm.append("<input type=hidden name=cps_email value='"+str+"'>");
        } else {
          $jqemail.val(str);
        }

        if ($paymentForm.find('input[name=business]').length > 0) {
          var $jqemail = $paymentForm.find('input[name=email]');
          if (!$jqemail || $jqemail.length == 0) {
            $paymentForm.append("<input type=hidden name=email value='"+str+"'>");
          } else {
            $jqemail.val(str);
          }
        }
      }
    });
    
    var $jqord = $paymentForm.find('input[name=orderDetails]');
    if($jqord && $jqord.length > 0 && allData > '') {
      $jqord.val($jqord.val()+' ['+allData+']'); 
    }
  }

  $paymentForm.submit();
}

function t362_proccessError($form, recid) {
  var $recbox = $('#rec'+recid);

  $form.find('.js-errorbox-all').hide();
  $form.find('.js-rule-error').hide();
  $form.find('.js-error-rule-all').html('');
  $form.find('.js-successbox').hide();
  $form.find('.js-error-control-box').removeClass('js-error-control-box');

  $form.removeClass('js-send-form-error');
  $form.removeClass('js-send-form-success');

  var arError = validateForm($form);
  var $blockinput='';
  if (arError && arError.length > 0) {
    var clsInputBoxSelector = $form.data('inputbox');
    if ( !clsInputBoxSelector ) {
      clsInputBoxSelector = '.blockinput';
    }

    for(var i=0; i<arError.length; i++) {
      if (!arError[i] || !arError[i].obj) { continue; }
      
      arError[i].obj.closest(clsInputBoxSelector).addClass('js-error-control-box');
      
      for(j=0;j < arError[i].type.length;j++) {
        error = arError[i].type[j];
        var $errItem = $form.find('.js-rule-error-'+error);
        if ($errItem.length > 0){
          $errItem.css('display','block').show();
        }
      }
    }
    $form.find('.js-errorbox-all').css('display','block').show();
    return false;
  } else {
    return true;
  }
}

function t362_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');

  var el=$('#rec'+recid).find('.t362');
  $('[href^="#price"]').click(function(e){
    t362_closePopup();
    e.preventDefault();
    var tmp = $(this).attr('href');
    // format:  #price:Cost:Product name
    var arParam = tmp.split(':');
        var price = arParam[1].replace(',','.');
        price = parseInt(price.replace(/[^0-9\.]/g,''));
    var pricetext = arParam[1];
    var name = arParam[2];
    var link_recid='0';
    var $link_rec = $(this).closest('.r');
    var htmlpayment = '';
    
    if ($link_rec.length > 0) {
      link_recid = $link_rec.attr('id');
    
      if (! name) {
        var tmp=$link_rec.find('.t-title');
        if (tmp.length > 0) {
          name = tmp.text();
        }
        name = $(this).text();
      }
    }
    

    var $recbox = $('#rec'+recid);
    $recbox.find('.js_payment_product').val(name);
    $recbox.find('.js_payment_price').val(price);
    $recbox.find('#form'+recid).show();

    if(window.tilda_payment_type>'') {
      $recbox.find('.js-tilda-payment').remove();

      /* если Я.Касса подключенная по HTTP */
      if (window.tilda_payment_type == 'yakassa_http') {
		var strvalue = '';
		htmlpayment = '<input class="js-tilda-payment" type="hidden" name="tilda_p_projectid" value="'+$('#allrecords').attr('data-tilda-project-id')+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_amount" value="'+price+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_product_name_0" value="'+name+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_product_amount_0" value="'+price+'">';
		strvalue = window.location.href;
        strvalue = strvalue.substring(0,250);
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_page" value="'+strvalue+'">';
		strvalue = (document.referrer ? document.referrer : '');
        strvalue = strvalue.substring(0,250);
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_referrer" value="'+strvalue+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_uagent" value="'+navigator.userAgent+'">';
		strvalue = (document.cookie ? document.cookie : '');
        strvalue = strvalue.substring(0,250);
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_cookie" value="'+strvalue+'">';
        var $paymentForm = $('#formpayment'+recid);
        $paymentForm.append(htmlpayment);
        htmlpayment = '';

        /* заменяем обработчик формы на свой */
        $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
        $('#form'+recid).addClass('js-form-yakassa-proccess');

        
        function t362_YaKassaPayment(e) {
          if (! $(this).hasClass('js-form-yakassa-proccess')) {
            return;
          }
          var $recbox = $('#rec'+recid);
          var $paymentForm = $('#formpayment'+recid);
          //var htmlpayment = '';
          
          e.stopPropagation();
          e.preventDefault();

          if (t362_proccessError($(this))) {
            var i,arFormElements = $('#form'+recid).serializeArray();
            var iCntSrv=0;
            for(i in arFormElements) {
              var elemvalue = arFormElements[i].value, elemname = arFormElements[i].name;
              
              if (elemname == 'productprice' || elemname == 'productname' || elemname == 'form-spec-comments' || elemname == 'tildaspec-cookie') {
                continue;
              }

              if (elemvalue > '' && elemvalue.indexOf('@')>0) {
                var $jqemail;
                /*
                $jqemail = $paymentForm.find('input[name=custEmail]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=custEmail value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }
                */
                
                $jqemail = $paymentForm.find('input[name=cps_email]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=cps_email value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }

                $jqemail = $paymentForm.find('input[name=customerNumber]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=customerNumber value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }

                elemname = elemname.replace('[','_');
                elemname = elemname.replace(']','_');
                /* htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform_'+elemname+'" value="'+elemvalue+'">'; */
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform__'+parseInt(i)+'_'+elemname+'" value="'+elemvalue+'">';

              } else {
                
                if(arFormElements[i].name == 'formservices[]') {
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_fs_'+iCntSrv+'" value="'+elemvalue+'">';
                  iCntSrv = parseInt(iCntSrv)+1;
                } else {
                  elemname = elemname.replace('[','_');
                  elemname = elemname.replace(']','_');
                  /*
htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform_'+elemname+'" value="'+elemvalue+'">';
*/
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform__'+parseInt(i)+'_'+elemname+'" value="'+elemvalue+'">';
                }
              }
            }

            if ($paymentForm.find('input[name=customerNumber]').val() == '') {
              var t = new Date();
              t = t.getTime();
              $paymentForm.find('input[name=customerNumber]').val(t);
            }

            if ($paymentForm.find('input[name=orderNumber]').val() == '') {
              $paymentForm.find('input[name=orderNumber]').remove();
            }

            if ($(this).data('success-url') > '') {
              $paymentForm.find('.js_payment_successurl').val($(this).data('success-url'));
            } else {
				if ($paymentForm.find('.js_payment_successurl').val() == '') {
              		$paymentForm.find('.js_payment_successurl').val(window.location.href);
				}
            }
            
            if ($paymentForm.find('.js_payment_failurl').val() == '') {
              $paymentForm.find('.js_payment_failurl').val(window.location.href);
            }
          
            if ($recbox.find('.js-payment-type').length>0) {
              $paymentForm.find('input[name=paymentType]').val( $recbox.find('.js-payment-type').val() );
            }

            $paymentForm.append(htmlpayment);

            $paymentForm.submit();
          }
        }
        
        $('#rec'+recid+' .js-form-yakassa-proccess').off('submit');
        $('#rec'+recid+' .js-form-yakassa-proccess').on('submit', t362_YaKassaPayment);
      } else {
            if(window.tilda_payment_type == 'robokassa') {
                /* заменяем обработчик формы на свой */
                $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
                $('#form'+recid).addClass('js-form-robokassa-proccess');

                $('#rec'+recid+' .js-form-robokassa-proccess').off('submit');
                $('#rec'+recid+' .js-form-robokassa-proccess').on('submit', function(e){
                    e.preventDefault();
                    $('#rec'+recid).find('.js-btn-robokassa').trigger('click');
                    return false;
                });
                
                $('#rec'+recid).find('.js-btn-robokassa').off('click');
                $('#rec'+recid).find('.js-btn-robokassa').on('click', function(e){
                    e.preventDefault();
                    var $recbox = $('#rec'+recid);
                    
                    var btnformsubmit = $(this);
                    var $form = $(this).closest('form');
                
                    if (!$form || $form.length == 0) {
                        return false;
                    }

                    if (! $form.hasClass('js-form-robokassa-proccess')) {
                        return;
                    }

                    var btnstatus = btnformsubmit.data('form-sending-status');
                    if (btnstatus >= '1') {
                        /* 0 - могу отправлять, 1 - отправляю, как только отправлено снова в ставим в 0 */
                        return false;
                    }
                    
                    btnformsubmit.addClass('t-btn_sending');
                    btnformsubmit.data('form-sending-status','1');
                    btnformsubmit.data('submitform', $form);
                    
                    var $errBox = $form.find('.js-errorbox-all');
                    if ($errBox && $errBox.length > 0) {
                        $errBox.hide();
                    }

                    if (t362_proccessError($form)) {

                        var $elem = $form.find('input[name=tildaspec-cookie]');
                        if (!$elem || $elem.length == 0){
                            $form.append('<input type="hidden" name="tildaspec-cookie" value="">');
                            $elem = $form.find('input[name=tildaspec-cookie]');
                        }
                        if ($elem.length > 0) {
                            $elem.val(document.cookie);
                        }
                        
                        $elem = $form.find('input[name=tildaspec-referer]');
                        if (!$elem || $elem.length == 0){
                            $form.append('<input type="hidden" name="tildaspec-referer" value="">');
                            $elem = $form.find('input[name=tildaspec-referer]');
                        }
                        if ($elem.length > 0) {
                            $elem.val(window.location.href);
                        }
                    
                        $elem = $form.find('input[name=tildaspec-projectid]');
                        if (!$elem || $elem.length == 0){
                            $form.append('<input type="hidden" name="tildaspec-projectid" value="'+parseInt($('#allrecords').data('tilda-project-id'))+'">');
                        }
                        $elem = $form.find('input[name=tildaspec-hash]');
                        if (!$elem || $elem.length == 0){
                            console.log('Empty hash for payment form');
                            return false;
                        }
                        
                        var amount = $form.find('.js_payment_price').val();
                        Tilda.robokassaPayment($form, btnformsubmit,'',amount);
                    } else {
                        btnformsubmit.removeClass('t-btn_sending');
                        btnformsubmit.data('form-sending-status','0');
                        btnformsubmit.data('submitform', $form);
                    }
                    return false;
                });
            
            } else {
                var htmlpayment = '<input class="js-tilda-payment" type="hidden" name="tildapayment[projectid]" value="'+$('#allrecords').attr('data-tilda-project-id')+'">';
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[amount]" value="'+price+'">';
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[products][0][product]" value="'+name+'">';
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[products][0][amount]" value="'+price+'">';
          
                $('#form'+recid).append(htmlpayment);
            }
      }
    }
    
    t362_showPopup(recid,name,pricetext);
    t362_sendPopupEventToStatistics(link_recid,name);
    t362_resizePopup(recid);

    if ($recbox.find('.js-stripe-publishable-key').length > 0) {
      var companyname = $recbox.find('.js-stripe-company-name').val()
      if(! window.stripehandler) {
        window.stripehandler = StripeCheckout.configure({
          key: $recbox.find('.js-stripe-publishable-key').val(),
          image: $recbox.find('.js-stripe-logo').val(),
          name: (companyname ? companyname : window.location.host),
          locale: 'auto'
        });
        /* Close Checkout on page navigation:*/
        $(window).on('popstate', function() {
          window.stripehandler.close();
        });
      }
      
      
      /* заменяем обработчик формы на свой */
      $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
      //$('#rec'+recid).off('submit','.js-form-proccess');
      if($('#formpayment'+recid).attr('action') > '') {
        $('#form'+recid).data('success-url', $('#formpayment'+recid).attr('action'));
      }
      $('#form'+recid).addClass('js-form-stripe-proccess');

      function t362_stripePayment(e){
        if (! $(this).hasClass('js-form-stripe-proccess')) {
          return;
        }
        var $recbox = $('#rec'+recid);
        e.stopPropagation();
        e.preventDefault();
        
        if (t362_proccessError($(this),recid)) {
          
          window.stripehandler.open({
            name: $recbox.find('.js-stripe-company-name').val(),
            image: $recbox.find('.js-stripe-logo').val(),
            description: $recbox.find('.js_payment_product').val(),
            amount:  $recbox.find('.js_payment_price').val()*100,
            currency: $recbox.find('.js-stripe-currency').val(),
            shippingAddress: $recbox.find('.js-stripe-need-shipping').val() == '1' ? true : false,
            token: function(token, args) {
              if (token && token.id) {
                t362_sendPaymentEventToStatistics(name,price*100);
                $('#form'+recid).removeClass('js-form-stripe-proccess');
                $('#form'+recid).off('submit', t362_stripePayment);

                var htmlpayment = '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[stripetoken]" value="'+token.id+'">';
                if (token.email) {
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[email]" value="'+token.email+'">';
                }
                htmlpayment = htmlpayment + '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[currency]" value="'+$recbox.find('.js-stripe-currency').val()+'">';
                
                $('#form'+recid).find('.js-stripe-tokenoptions').remove();
                $('#form'+recid).append(htmlpayment);

                $('#form'+recid).addClass('js-form-proccess').submit();
              }
            }
            
          });
          
        }
        return false;
      }

      $('#rec'+recid+' .js-form-stripe-proccess').on('submit', t362_stripePayment);

    }

    if ($recbox.find('.js-cp-key').length > 0) {

      /* заменяем обработчик формы на свой */
      $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
      //$('#rec'+recid).off('submit','.js-form-proccess');
      if($('#formpayment'+recid).attr('action') > '') {
        $('#form'+recid).data('success-url', $('#formpayment'+recid).attr('action'));
      }
      $('#form'+recid).addClass('js-form-cp-proccess');

      function t362_cloudPayments(e){
        if (! $(this).hasClass('js-form-cp-proccess')) {
          return;
        }

        var $recbox = $('#rec'+recid);
        e.stopPropagation();
        e.preventDefault();
        
        var currency = $('#rec'+recid+' .js-currency').val();
        if(! window.cloudpaymentshandler) {
          var lang='';
          if ( $('#rec'+recid+' .js-language').length > 0) {
            lang = $('#rec'+recid+' .js-language').val();
          }
          if (lang == '') {
            lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
          }
          window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
        }
        
        if (t362_proccessError($(this),recid)) {
          $recbox.find('.t-popup').css('z-index','8000');
          var $paymentForm = $('#formpayment'+recid), $form = $('#form'+recid), email, allData={};
          $form.find('input,textarea').each(function(){
            var str = $(this).val();
            var ctrlname = $(this).attr('name');
            if ( ctrlname.substring(0,8)!= 'formserv' && ctrlname != 'form-spec-comments' && str > '') {
              allData[ctrlname] = str;
            }
            if (str > '' && str.indexOf('@')>0) {
              var $jqemail = $paymentForm.find('input[name=accountId]');
              if (!$jqemail || $jqemail.length == 0) {
                $paymentForm.append("<input type=hidden name=accountId value='"+str+"'>");
              } else {
                $jqemail.val(str);
              }
            }
          });
          email = $paymentForm.find('input[name=accountId]').val();

          if ($paymentForm.data('recurrent') == 1) {
            allData.cloudPayments = {recurrent: { interval: 'Month', period: 1 }};
            if ($paymentForm.data('recurrent-interval') > '') {
                allData.cloudPayments.recurrent.interval = $paymentForm.data('recurrent-interval');
            }
            if ($paymentForm.data('recurrent-period') > '') {
                allData.cloudPayments.recurrent.period = parseInt($paymentForm.data('recurrent-period'));
            }
          }
          
         /* $('#rec'+recid).find('.t-popup').css('z-index','8000');*/

          window.cloudpaymentshandler.charge(
            {
              publicId: $recbox.find('.js-cp-key').val(), 
              description: $recbox.find('.js_payment_product').val(), 
              amount: parseFloat($recbox.find('.js_payment_price').val()),
              currency: $recbox.find('.js-currency').val(), 
              accountId: (email ? email : ''),
              data: allData
            },
            function (options) { /* success*/
              //действие при успешной оплате
              t362_sendPaymentEventToStatistics(name, price);
              $('#form'+recid).removeClass('js-form-cp-proccess');
              $('#form'+recid).off('submit', t362_cloudPayments);
              
              $('#form'+recid).addClass('js-form-proccess').submit();
              $recbox.find('.t-popup').css('z-index','');
            },
            function (reason, options) { // fail
              if ($('#rec'+recid+' .js-failure-url').val() > '') {
                window.location.href = $('#rec'+recid+' .js-failure-url').val();
              }
              $recbox.find('.t-popup').css('z-index','');
            }
          );

        }
        return false;
      }

      $('#rec'+recid+' .js-form-cp-proccess').on('submit', t362_cloudPayments);

    }

    return false;
  });

  if ($('#rec'+recid).find('[name=tildaspec-cookie]').length > 0 ) {
    $('#rec'+recid).find('[name=tildaspec-cookie]').val(document.cookie);
  }

  if ($('#rec'+recid).find('.js-stripe-publishable-key').length > 0 && window.stripeapiiscalled!==true){
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      document.body.appendChild(script);
      window.stripeapiiscalled=true;
  }

  if ($('#rec'+recid).find('.js-cp-key').length > 0 && window.cloudpaymentsapiiscalled!==true){
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
      document.body.appendChild(script);
      window.cloudpaymentsapiiscalled=true;
  }

} 
function t364_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t364_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t364_closePopup();
  });

  el.find('.t364__text').click(function(){
    t364_closePopup();
    t364_createCookie('t364closefb','yes',30);
  });

  el.find('a[href*="#"]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t364_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t364_closePopup(); }
  });
}

function t364_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t364_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 30,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/*deprecated*/
function t364_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t364_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else { var expires = ""; }
  document.cookie = name+"="+value+expires+"; path=/";
}

function t364_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' '){ c = c.substring(1,c.length);}
    if (c.indexOf(nameEQ) == 0){ return c.substring(nameEQ.length,c.length);}
  }
  return null;
}

function t364_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  var cookieexist=el.attr('data-cookies-exist');
  if(cookieexist!=='yes'){
    var cookie = t364_readCookie('');
  } else { var cookie = t364_readCookie('t364closefb'); }
  if(hook!=='' && cookie!=='yes'){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t364_showPopup(recid);
      t364_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }

    });
  }
} 
function t365_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    $('#vk_groups_'+recid).css('height', '250px');
    $('#vk_groups_'+recid+' iframe').css('height', '250px');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t365_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t365_closePopup();
  });

  el.find('.t365__text').click(function(){
    t365_closePopup();
    t365_createCookie('t365closefb','yes',30);
  });

  el.find('a[href*="#"]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t365_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t365_closePopup(); }
  });
}

function t365_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t365_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 30,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/* deprecated */
function t365_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t365_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else { var expires = ""; }
  document.cookie = name+"="+value+expires+"; path=/";
}

function t365_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' '){ c = c.substring(1,c.length); }
    if (c.indexOf(nameEQ) == 0){ return c.substring(nameEQ.length,c.length); }
  }
  return null;
}

function t365_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  var cookieexist=el.attr('data-cookies-exist');
  if(cookieexist!=='yes'){
    var cookie = t365_readCookie('');
  } else { var cookie = t365_readCookie('t365closefb'); }
  if(hook!=='' && cookie!=='yes'){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t365_showPopup(recid);
      t365_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }

    });
  }
} 
function t366_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t366_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t366_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t366_closePopup();
  });

  el.find('a[href*=#]:not(.carousel-control,.t-carousel__control)').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t366_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t366_closePopup(); }
  });
}

function t366_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t366_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t366_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t366_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t366_showPopup(recid);
      t366_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t366_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t366_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t367_createCookie(name,value,days) {
  /*if (days == '' || parseInt(days) <= 0) {
    return;
  }*/    
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function t367_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function t367_autoInit(recid) {
    var winWidth = $(window).width();
    var screenMin = $('#rec' + recid).attr("data-screen-min");
    var screenMax = $('#rec' + recid).attr("data-screen-max");

    if(typeof screenMin !== 'undefined') {
        if(winWidth < parseInt(screenMin, 10)) {
            return false;
        }
    }

    if(typeof screenMax !== 'undefined') {
        if(winWidth > parseInt(screenMax, 10)) {
            return false;
        }
    }

  var el = $('#rec' + recid).find('.t367__opener');
  var name = el.attr('data-cookie-name');
  var time = el.attr('data-cookie-time');
  var value = "t367cookie";
  var cookie = t367_readCookie(name);
  var delay = el.attr('data-trigger-time');
  var delaytime = delay * 1000;
  if (cookie) {
    $("#rec"+recid+" .t367").html("");
  } else if (el.length) {
    setTimeout(function() {
      el.trigger('click');
      $("#rec"+recid+" .t367").html("");
      t367_createCookie(name,value,time);
    }, delaytime);
  }
} 
function t368_alignVertical(recid){
  var el=$("#rec"+recid);
  el.find(".t368__video").css({'padding-bottom':(el.find(".t368__text").height()+12+'px')});
} 
function t369_init(recid){
  t_sldsInit(recid);

  setTimeout(function(){
    t_prod__init(recid);
  }, 500);

  $('#rec'+recid).find('.t744').bind('displayChanged',function(){
      t744_updateSlider(recid);
  });
}

function t369_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t369_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t369_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t369_closePopup();
  });

  el.find('a[href*=#]:not(.carousel-control,.t-carousel__control)').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t369_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t369_closePopup(); }
  });
}

function t369_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t369_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t369_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t369_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t369_showPopup(recid);
      t369_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t369_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t369_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t376_setbg(){
    var bg="no";
    
    $(".r").each(function() {
      var el=$(this);
                  
      if(el.find('.t376').length){bg=el.find('.t376').attr('data-section-bg-color');}

	  if(el.is("[data-bg-color]") === false){

        if(bg!=="no"){
          if(el.is("[data-t376-bg-manual-setted]") === false || (el.is("[data-t376-bg-manual-setted]") && el.attr('data-t376-bg-manual-setted') !== bg) ) {
            el.css('background-color',bg);
            el.attr('data-t376-bg-manual-setted',bg);
          }
        }

        if( bg==="no" && el.is("[data-t376-bg-manual-setted]") ) {
          el.css('background-color','');
          el.removeAttr('data-t376-bg-manual-setted');
        }

	  }

    });
} 
function t381_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t381").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.css('visibility') == 'hidden'){
                              el.finish();
                              el.css("visibility","visible");
                              el.animate({"opacity": "1"}, 300,function() {
                              });       
                          }
                        }else{
                          el.stop();
                          el.css("visibility","hidden");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(el.css('visibility') != 'hidden'){
                              el.finish();
                              el.css("visibility","hidden");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.css("visibility","visible");
                              }
                          }else{
                              el.stop();
                              el.css("visibility","visible");
                          }
                        }
                }
         });
    }
}

 
function t383_highlight(link){
  if(link && link!=''){
	  $("a[href='"+link+"']").addClass("t-active");
  }
}


 
function t384_checkSize(recid){
  var el=$("#rec"+recid);
  var sizer = el.find('.t-carousel__height');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var gallerywrapper = el.find(".t-carousel__checksize");
  var gallerywidth = gallerywrapper.width();

  if (height != $(window).height()) {
    gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});
  }
} 
    var t385 = {};
    
    t385.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t385__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
    var t386 = {};
    
    t386.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t386__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
function t389_scrollToTop() {
  $('html, body').animate({scrollTop: 0}, 700);
} 
function t390_initPopup(recid) {
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');
    var el = $('#rec' + recid).find('.t-popup'),
        hook = el.attr('data-tooltip-hook'),
        analitics = el.attr('data-track-popup');

    el.bind('scroll', t_throttle(function () {
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    }, 200));

    if (hook !== '') {
        $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
            t390_showPopup(recid);
            t390_resizePopup(recid);
            e.preventDefault();
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
            if (analitics > '') {
                var virtTitle = hook;
                if (virtTitle.substring(0, 7) == '#popup:') {
                    virtTitle = virtTitle.substring(7);
                }
                Tilda.sendEventToStatistics(analitics, virtTitle);
            }
        });
    }
    
    var curPath = window.location.pathname;
    var curFullPath = window.location.origin + curPath;
    
    /* Fix for Android unable to scroll to anchor point from "ScrollView"  */
    var isAndroid = /(android)/i.test(navigator.userAgent);
    if (isAndroid) {
        $('#rec' + recid).find('a[href^="#"]:not([href="#"],[href^="#price"],[href^="#popup"],[href^="#prodpopup"],[href^="#order"],a[href^="#!"]),a[href^="' + curPath + '#"]:not(a[href*="#!/tproduct/"],a[href*="#!/tab/"],[href*="#popup"]),a[href^="' + curFullPath + '#"]:not(a[href*="#!/tproduct/"],a[href*="#!/tab/"],[href*="#popup"])').click(function(e) {
            e.preventDefault();
            var hash = this.hash.trim();
            
            if (window.location.hash) {
                setTimeout(function () {
                    window.location.href = hash;
                }, 50);
            }
        });
    }
}

function t390_showPopup(recid) {
    var el = $('#rec' + recid),
        popup = el.find('.t-popup');

    popup.css('display', 'block');
    setTimeout(function () {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
    }, 50);

    $('body').addClass('t-body_popupshowed');

    el.find('.t-popup').mousedown(function (e) {
        var windowWidth = $(window).width();
        var maxScrollBarWidth = 17;
        var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
        if (e.clientX > windowWithoutScrollBar) {
            return;
        }
        if (e.target == this) {
            t390_closePopup(recid);
        }
    });

    el.find('.t-popup__close').click(function (e) {
        t390_closePopup(recid);
    });

    el.find('a[href*="#"]').click(function (e) {
        var url = $(this).attr('href');
        if (!url || url.substring(0, 7) != '#price:') {
            t390_closePopup(recid);
            if (!url || url.substring(0, 7) == '#popup:') {
                setTimeout(function () {
                    $('body').addClass('t-body_popupshowed');
                }, 300);
            }
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t390_closePopup(recid);
        }
    });
}

function t390_closePopup(recid) {
    $('body').removeClass('t-body_popupshowed');
    $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
    setTimeout(function () {
        $('.t-popup').not('.t-popup_show').css('display', 'none');
    }, 300);
}

function t390_resizePopup(recid) {
    var el = $("#rec" + recid),
        div = el.find(".t-popup__container").height(),
        win = $(window).height() - 120,
        popup = el.find(".t-popup__container");
    if (div > win) {
        popup.addClass('t-popup__container-static');
    } else {
        popup.removeClass('t-popup__container-static');
    }
}
/* deprecated */
function t390_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    'hitType': 'pageview',
                    'page': virtPage,
                    'title': virtTitle
                });
            }
        }

        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            });
        }
    }
} 
function t391_checkSize(recid){
  var el=$("#rec"+recid);
  var cover = el.find('.t-cover');
  var carrier = el.find('.t-cover__carrier');
  var filter = el.find('.t-cover__filter');
  var height = el.find('.t391__firstcol').height() + el.find('.t391__secondcol').height();
  if (window.matchMedia('(max-width: 960px)').matches && height > 0) {
    cover.css('height',height);
    carrier.css('height',height);
    filter.css('height',height);
  }
} 
function t393_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t393").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.css('visibility') == 'hidden'){
                              el.finish();
                              el.css("visibility","visible");
                              el.animate({"opacity": "1"}, 300,function() {
                              });       
                          }
                        }else{
                          el.stop();
                          el.css("visibility","hidden");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(el.css('visibility') != 'hidden'){
                              el.finish();
                              el.css("visibility","hidden");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.css("visibility","visible");
                              }
                          }else{
                              el.stop();
                              el.css("visibility","visible");
                          }
                        }
                }
         });
    }
}

 
function t395_init(recid) {
    var el = $('#rec' + recid);
    var curMode = $('.t-records').attr('data-tilda-mode');
    var tabs = el.find('.t395__tab');

    if (curMode != 'edit' && curMode != 'preview') {
        t395_scrollToTabs(recid);
    }

    if (tabs.length > 0) {
        tabs.click(function () {
            if ($(this).hasClass('t395__tab_active')) {
                return;
            }

            el.find('.t395__tab').removeClass('t395__tab_active');
            $(this).addClass('t395__tab_active');

            t395_removeUrl();
            var tabNumber = el.find(".t395__tab_active").index() + 1;
            if (curMode != 'edit' && curMode != 'preview' && tabNumber !== 0) {
                if (typeof history.replaceState != 'undefined') {
                    window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumber);
                }
            }

            t395_alltabs_updateContent(recid);
            t395_updateSelect(recid);

            var recids = $(this).attr('data-tab-rec-ids').split(',');
            recids.forEach(function (recid) {
                var el = $('#rec' + recid);
                el.find('.t-feed, .t-store, .t-store__product-snippet, .t117, .t121, .t132, .t223, .t226, .t228, .t229, .t230, .t268, .t279, .t341, .t346, .t347, .t349, .t351, .t353, .t384, .t385, .t386, .t396, .t400, .t404, .t409, .t410, .t412, .t418, .t422, .t425, .t428, .t433, .t448, .t456, .t477, .t478, .t480, .t486, .t498, .t504, .t506, .t509, .t511, .t517, .t518, .t519, .t520, .t532, .t533, .t538, .t539, .t544, .t545, .t552, .t554, .t570, .t577, .t592, .t598, .t599, .t601, .t604, .t605, .t609, .t615, .t616, .t650, .t659, .t670, .t675, .t686, .t688, .t694, .t698, .t700, .t726, .t728, .t730, .t734, .t738, .t740, .t744, .t754, .t760, .t762, .t764, .t774, .t776, .t778, .t780, .t786, .t798, .t799, .t801, .t813, .t814, .t822, .t826, .t827, .t829, .t842, .t843, .t849, .t850, .t851, .t856, .t858, .t859, .t860, .t881, .t889, .t902, .t912, .t923, .t937, .t959, .t979, .t982, .t983, .t989, .t994').trigger('displayChanged');
            });

            t395_startUpdateLazyLoad($(this));
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        });

        t395_alltabs_updateContent(recid);
        t395_updateContentBySelect(recid);

        var bgcolor = el.css("background-color");
        var bgcolor_target = el.find(".t395__select, .t395__firefoxfix");
        bgcolor_target.css("background", bgcolor);
    }
}

function t395_alltabs_updateContent(recid) {
    var mainRecid = recid;
    var el = $('#rec' + recid);

    var activeTab = el.find(".t395__tab_active");
    if (activeTab.length === 1) {
        var active = activeTab.attr('data-tab-rec-ids').split(',');
        var noactive = [];

        el.find(".t395__tab:not(.t395__tab_active)").each(function (i, tab) {
            noactive = noactive.concat($(tab).attr('data-tab-rec-ids').split(','));
        });

        var unique = noactive.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });

        var off = unique.filter(function (value) {
            return $.inArray(value, active) === -1;
        });

        if (el.find(".t395__tab_active").is(":visible") || el.find(".t395__select").is(":visible")) {
            active.forEach(function (recid) {
                if (recid !== '') {
                    var el = $('#rec' + recid);
                    var recordType = el.attr('data-record-type');
                    el.removeClass('t395__off');
                    el.css('opacity', '');

                    if (recordType === '395' && mainRecid !== recid) {
                        t395_alltabs_updateContent(recid);
                        t395_updateSelect(recid);
                        el.find('.t395__tab:nth-child(1)').trigger('click');
                    }

                    if (recordType === '397' && t397_alltabs_updateContent !== undefined && t397_updateSelect !== undefined && mainRecid !== recid) {
                        t397_alltabs_updateContent(recid);
                        t397_updateSelect(recid);
                        el.find('.t397__tab:nth-child(1)').trigger('click');
                    }
                }
            });
        } else {
            active.forEach(function (recid) {
                var el = $('#rec' + recid);
                el.attr('data-animationappear', 'off');
                el.addClass('t395__off');
            });
        }

        off.forEach(function (recid) {
            if (recid !== '') {
                var el = $('#rec' + recid);
                var recordType = el.attr('data-record-type');
                el.attr('data-connect-with-tab', 'yes');
                el.attr('data-animationappear', 'off');
                el.addClass('t395__off');

                if(recordType === '395' && mainRecid !== recid) {
                    t395_alltabs_updateContent(recid);
                    t395_updateSelect(recid);
                    el.find('.t395__tab:nth-child(1)').trigger('click');
                }

                if(recordType === '397' && t397_alltabs_updateContent !== undefined && t397_updateSelect !== undefined && mainRecid !== recid) {
                    t397_alltabs_updateContent(recid);
                    t397_updateSelect(recid);
                    el.find('.t397__tab:nth-child(1)').trigger('click');
                }
            }
        });

    }
}

function t395_updateContentBySelect(recid) {
    var el = $('#rec' + recid);
    el.find(".t395__select").change(function () {
        var select_val = el.find(".t395__select").val();
        var tab_index = el.find(".t395__tab[data-tab-rec-ids='" + select_val + "']");
        tab_index.trigger('click');
    });
}

function t395_updateSelect(recid) {
    var el = $('#rec' + recid);
    var current_tab = el.find(".t395__tab_active").attr('data-tab-rec-ids');
    var el_select = el.find(".t395__select");
    el_select.val(current_tab);
}

function t395_startUpdateLazyLoad($this) {
    var rec_ids = $this.attr('data-tab-rec-ids').split(',');
    rec_ids.forEach(function (rec_id, i, arr) {
        var rec_el = $('#rec' + rec_id);

        var video = rec_el.find('.t-video-lazyload');
        if (video.length > 0) {
            t395_updateVideoLazyLoad(video);
        }
    });
}

function t395_updateVideoLazyLoad(video) {
    setTimeout(function () {
        video.each(function () {
            var div = $(this);

            if (!div.hasClass('t-video__isload')) {

                var height = div.attr('data-videolazy-height') ? $(this).attr('data-videolazy-height') : '100%';
                if (height.indexOf('vh') != -1) {
                    height = '100%';
                }

                var videoId = div.attr('data-videolazy-id').trim();
                var blockId = div.attr('data-blocklazy-id') || '';
                if (typeof div.attr('data-videolazy-two-id') != 'undefined') {
                    var videoTwoId = '_' + div.attr('data-videolazy-two-id') + '_';
                } else {
                    var videoTwoId = '';
                }

                if (div.attr('data-videolazy-type') == 'youtube') {
                    div.find('iframe').remove();
                    div.prepend('<iframe id="youtubeiframe' + videoTwoId + blockId + '" width="100%" height="' + height + '" src="//www.youtube.com/embed/' + videoId + '?rel=0&fmt=18&html5=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
                }
            }

            div.addClass('t-video__isload');
        });
    }, 2);
}

function t395_scrollToTabs(recid) {
    var el = $('#rec' + recid);
    var curUrl = window.location.href;
    var tabIndexNumber = curUrl.indexOf('#!/tab/');
    var tabIndexNumberStart = curUrl.indexOf('tab/');

    el.find('.t395__wrapper_mobile .t395__select option:eq(0)').prop('selected', false);

    if (tabIndexNumber !== -1) {
        var tabRec = curUrl.substring(tabIndexNumberStart + 4, tabIndexNumberStart + 4 + recid.length);

        if (tabRec == recid) {
            var tabBlock = $('#rec' + tabRec).find('.t395');
            var tabNumber = parseInt(curUrl.slice(tabIndexNumberStart + 4 + recid.length + 1), 10);
            el.find('.t395__tab').removeClass('t395__tab_active');
            el.find('.t395__tab:eq(' + (tabNumber - 1) + ')').addClass('t395__tab_active');
            el.find('.t395__wrapper_mobile .t395__select option:eq(' + (tabNumber - 1) + ')').prop('selected', true);

            var targetOffset = tabBlock.offset().top;
            var target = targetOffset;

            if ($(window).width() > 960) {
                target = targetOffset - 200;
            } else {
                target = targetOffset - 100;
            }

            $('html, body').animate({
                scrollTop: target
            }, 300);
        }
    }
}

function t395_removeUrl() {
    var curUrl = window.location.href;
    var indexToRemove = curUrl.indexOf('#!/tab/');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove < 0) {
        indexToRemove = curUrl.indexOf('%23!/tab/');
    }

    curUrl = curUrl.substring(0, indexToRemove);
    if (indexToRemove != -1) {
        if (typeof history.replaceState != 'undefined') {
            window.history.replaceState('', '', curUrl);
        }
    }
}
 
function t396_init(recid){
  var data='';
  var res=t396_detectResolution();
  t396_initTNobj();    
  t396_switchResolution(res);
  t396_updateTNobj();
  t396_artboard_build(data,recid);

  window.tn_window_width=$(window).width();
  
  $( window ).resize(function () {
    tn_console('>>>> t396: Window on Resize event >>>>');
    t396_waitForFinalEvent(function(){

        if($isMobile){
	        var ww=$(window).width();	        
	        if(ww!=window.tn_window_width){
		        t396_doResize(recid);
	        }
        }else{
			t396_doResize(recid);
        }

    }, 500, 'resizeruniqueid'+recid);
  });
  
  $(window).on("orientationchange",function(){
    tn_console('>>>> t396: Orient change event >>>>');
    t396_waitForFinalEvent(function(){
		t396_doResize(recid);
    }, 600, 'orientationuniqueid'+recid);
  });  

  $( window ).on('load', function() {
	  var ab=$('#rec'+recid).find('.t396__artboard');
      t396_allelems__renderView(ab);
      
      if (typeof t_lazyload_update === 'function' && ab.css('overflow') === 'auto') {
        ab.bind('scroll', t_throttle(function() {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }, 500));
      }

        if (window.location.hash !== '' && ab.css('overflow') === 'visible') {
            ab.css('overflow', 'hidden');
            setTimeout( function() { 
                ab.css('overflow', 'visible');
            }, 1);
        }
  });
  
	var rec = $('#rec' + recid);
	if (rec.attr('data-connect-with-tab') == 'yes') {
		rec.find('.t396').bind('displayChanged', function() {
			var ab = rec.find('.t396__artboard');
			t396_allelems__renderView(ab);
		});
	}
	
	/* fix for disappearing elements in safari */
	if (isSafari) rec.find('.t396').addClass('t396_safari');
}

function t396_doResize(recid){
    var ww;
    if($isMobile){
        ww=$(window).width();
    } else {
        ww=window.innerWidth;
    }
    window.tn_window_width=ww;
    var res=t396_detectResolution();
    var ab=$('#rec'+recid).find('.t396__artboard');
    t396_switchResolution(res);
    t396_updateTNobj();
    t396_ab__renderView(ab);
    t396_allelems__renderView(ab);	
}

function t396_detectResolution(){
    var ww;
    if($isMobile){
        ww=$(window).width();
    } else {
        ww=window.innerWidth;
    }
    var res;
    res=1200;
    if(ww<1200){res=960;}
    if(ww<960){res=640;}
    if(ww<640){res=480;}
    if(ww<480){res=320;}
	return(res);
}

function t396_initTNobj(){
	tn_console('func: initTNobj');	
	window.tn={};
	
	window.tn.canvas_min_sizes = ["320","480","640","960","1200"];
	window.tn.canvas_max_sizes = ["480","640","960","1200",""];	
	window.tn.ab_fields = ["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"];	
}

function t396_updateTNobj(){
	tn_console('func: updateTNobj');		
	
	if(typeof window.zero_window_width_hook!='undefined' && window.zero_window_width_hook=='allrecords' && $('#allrecords').length){
		window.tn.window_width = parseInt($('#allrecords').width());
	}else{
		window.tn.window_width = parseInt($(window).width());
	}
	/* window.tn.window_width = parseInt($(window).width()); */


  if($isMobile){
    window.tn.window_height = parseInt($(window).height());
  } else {
    window.tn.window_height = parseInt(window.innerHeight);
  }

	if(window.tn.curResolution==1200){
		window.tn.canvas_min_width = 1200;
		window.tn.canvas_max_width = window.tn.window_width;
	}
	if(window.tn.curResolution==960){
		window.tn.canvas_min_width = 960;
		window.tn.canvas_max_width = 1200;
	}
	if(window.tn.curResolution==640){
		window.tn.canvas_min_width = 640;
		window.tn.canvas_max_width = 960;
	}
	if(window.tn.curResolution==480){
		window.tn.canvas_min_width = 480;
		window.tn.canvas_max_width = 640;
	}
	if(window.tn.curResolution==320){
		window.tn.canvas_min_width = 320;
		window.tn.canvas_max_width = 480;
	}
	
	window.tn.grid_width = window.tn.canvas_min_width;	
	window.tn.grid_offset_left = parseFloat( (window.tn.window_width-window.tn.grid_width)/2 );	

}


var t396_waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

  
function t396_switchResolution(res,resmax){
	tn_console('func: switchResolution');
	
	if(typeof resmax=='undefined'){
		if(res==1200)resmax='';
		if(res==960)resmax=1200;
		if(res==640)resmax=960;
		if(res==480)resmax=640;
		if(res==320)resmax=480;
	}
	
	window.tn.curResolution=res;
	window.tn.curResolution_max=resmax;
}

function t396_artboard_build(data,recid){
  tn_console('func: t396_artboard_build. Recid:'+recid);
  tn_console(data);    

  /* set style to artboard */
  var ab=$('#rec'+recid).find('.t396__artboard');

  t396_ab__renderView(ab);

  /* create elements */
  ab.find('.tn-elem').each(function() {
      var item=$(this);
      if(item.attr('data-elem-type')=='text'){
          t396_addText(ab,item);
      }
      if(item.attr('data-elem-type')=='image'){
          t396_addImage(ab,item);
      }
      if(item.attr('data-elem-type')=='shape'){
          t396_addShape(ab,item);
      }		
      if(item.attr('data-elem-type')=='button'){
          t396_addButton(ab,item);
      }	
      if(item.attr('data-elem-type')=='video'){
          t396_addVideo(ab,item);
      }
      if(item.attr('data-elem-type')=='html'){
          t396_addHtml(ab,item);
      }
      if(item.attr('data-elem-type')=='tooltip'){
          t396_addTooltip(ab,item);
      }
      if(item.attr('data-elem-type')=='form'){
          t396_addForm(ab,item);
      }
      if(item.attr('data-elem-type')=='gallery'){
          t396_addGallery(ab,item);
      }
  });

  $('#rec'+recid).find('.t396__artboard').removeClass('rendering').addClass('rendered');
  
  if(ab.attr('data-artboard-ovrflw')=='visible'){
      $('#allrecords').css('overflow','hidden');
  }
  
  if($isMobile){
      $('#rec'+recid).append('<style>@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}</style>');
  }

}

function t396_ab__renderView(ab){
	var fields = window.tn.ab_fields;
	
	for ( var i = 0; i < fields.length; i++ ) {
		t396_ab__renderViewOneField(ab,fields[i]);
	}

	var ab_min_height=t396_ab__getFieldValue(ab,'height');
	var ab_max_height=t396_ab__getHeight(ab);

	var offset_top=0;
	if(ab_min_height==ab_max_height){
	  offset_top=0;
	}else{
	  var ab_valign=t396_ab__getFieldValue(ab,'valign');
      if(ab_valign=='top'){
          offset_top=0;
      }else if(ab_valign=='center'){
          offset_top=parseFloat( (ab_max_height-ab_min_height)/2 ).toFixed(1);
      }else if(ab_valign=='bottom'){
          offset_top=parseFloat( (ab_max_height-ab_min_height) ).toFixed(1);
      }else if(ab_valign=='stretch'){
          offset_top=0;
		  ab_min_height=ab_max_height;
      }else{
          offset_top=0;
	  }
	}

	ab.attr('data-artboard-proxy-min-offset-top',offset_top);
	ab.attr('data-artboard-proxy-min-height',ab_min_height);
	ab.attr('data-artboard-proxy-max-height',ab_max_height);
	
	var filter = ab.find('.t396__filter');
	var carrier = ab.find('.t396__carrier');
	var abHeightVh = t396_ab__getFieldValue(ab,'height_vh');
	abHeightVh = parseFloat(abHeightVh);
    if (window.isMobile && abHeightVh) {
        var height = document.documentElement.clientHeight * parseFloat( abHeightVh/100 );
        ab.css('height', height);
        filter.css('height', height);
        carrier.css('height', height);
    }
}

function t396_addText(ab,el){
	tn_console('func: addText');
				
	/* add data atributes */
	var fields_str='top,left,width,container,axisx,axisy,widthunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);		

	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_addImage(ab,el){
	tn_console('func: addImage');	
			
	/* add data atributes */
	var fields_str='img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		

	/* render elem view */	
	t396_elem__renderView(el);

	el.find('img').on("load", function() {
	  t396_elem__renderViewOneField(el,'top');
	  if(typeof $(this).attr('src')!='undefined' && $(this).attr('src')!=''){
		setTimeout( function() { 
			t396_elem__renderViewOneField(el,'top');
		} , 2000);
	  }                                       
	}).each(function() {
	  if(this.complete) $(this).trigger('load');
	}); 
	
    el.find('img').on('tuwidget_done', function(e, file) { 
		t396_elem__renderViewOneField(el,'top');
    });

}

function t396_addShape(ab,el){
	tn_console('func: addShape');		

	/* add data atributes */
	var fields_str='width,height,top,left,';
	fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_addButton(ab,el){
	tn_console('func: addButton');
	
	/* add data atributes */
	var fields_str='top,left,width,height,container,axisx,axisy,caption,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);
		
	/* render elem view */	
	t396_elem__renderView(el);

	return(el);	
}

function t396_addVideo(ab,el){
	tn_console('func: addVideo');		

	/* add data atributes */
	var fields_str='width,height,top,left,';
	fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
	
	var viel=el.find('.tn-atom__videoiframe');
	var viatel=el.find('.tn-atom');
	viatel.css('background-color','#000');
	
	var vihascover=viatel.attr('data-atom-video-has-cover');
	if(typeof vihascover=='undefined'){
	    vihascover='';
	}
	if(vihascover=='y'){
        viatel.click(function() {
            var viifel=viel.find('iframe');
            if(viifel.length){
                var foo=viifel.attr('data-original');
                viifel.attr('src',foo);
            }
            viatel.css('background-image','none');
            viatel.find('.tn-atom__video-play-link').css('display','none');
        });
	}
	
	var autoplay=t396_elem__getFieldValue(el,'autoplay');
	var showinfo=t396_elem__getFieldValue(el,'showinfo');
	var loop=t396_elem__getFieldValue(el,'loop');
	var mute=t396_elem__getFieldValue(el,'mute');
	var startsec=t396_elem__getFieldValue(el,'startsec');
	var endsec=t396_elem__getFieldValue(el,'endsec');
	var tmode=$('#allrecords').attr('data-tilda-mode');
    var url='';
    
	var viyid=viel.attr('data-youtubeid');
	if(typeof viyid!='undefined' && viyid!=''){
       url='//www.youtube.com/embed/';
	   url+=viyid+'?rel=0&fmt=18&html5=1';
	   url+='&showinfo='+(showinfo=='y'?'1':'0');
	   if(loop=='y'){url+='&loop=1&playlist='+viyid;}
	   if(startsec>0){url+='&start='+startsec;}
	   if(endsec>0){url+='&end='+endsec;}
	   if(mute=='y'){url+='&mute=1';}
	   if(vihascover=='y'){
	       url+='&autoplay=1';
	       viel.html('<iframe id="youtubeiframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>');
	   }else{
	       if(typeof tmode!='undefined' && tmode=='edit'){}else{
	           if(autoplay=='y'){url+='&autoplay=1';}
	       }
	       if(window.lazy=='y'){
	           viel.html('<iframe id="youtubeiframe" class="t-iframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="lazy"></iframe>');
		       el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});<\/script>');
	       }else{
    	       viel.html('<iframe id="youtubeiframe" width="100%" height="100%" src="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>');	        
	       }
	   }
	}

	var vivid=viel.attr('data-vimeoid');
	if(typeof vivid!='undefined' && vivid>0){
        url='//player.vimeo.com/video/';
	    url+=vivid+'?color=ffffff&badge=0';
	    if(showinfo=='y'){url+='&title=1&byline=1&portrait=1';}else{url+='&title=0&byline=0&portrait=0';}
	    if(loop=='y'){url+='&loop=1';}
	    if(mute=='y'){url+='&muted=1';}
	    if(vihascover=='y'){
	        url+='&autoplay=1';
	        viel.html('<iframe data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	    }else{
	        if(typeof tmode!='undefined' && tmode=='edit'){}else{
	            if(autoplay=='y'){url+='&autoplay=1';}
	        }	        
	        if(window.lazy=='y'){
	      	    viel.html('<iframe class="t-iframe" data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		        el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});<\/script>');
	        }else{
    	        viel.html('<iframe src="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');	        
	        }
	    }
	}
	
}

function t396_addHtml(ab,el){
	tn_console('func: addHtml');		

	/* add data atributes */
	var fields_str='width,height,top,left,';
	fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';	
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_addTooltip(ab, el) {
    tn_console('func: addTooltip');
    var fields_str = 'width,height,top,left,';
    fields_str += 'container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition';
    var fields = fields_str.split(',');
    el.attr('data-fields', fields_str);
    t396_elem__renderView(el);

    var pinEl = el.find('.tn-atom__pin');
    var tipEl = el.find('.tn-atom__tip');
    var tipopen = el.attr('data-field-tipopen-value');
    
    if (isMobile || (typeof tipopen!='undefined' && tipopen=='click')) {
        t396_setUpTooltip_mobile(el,pinEl,tipEl);
    } else {
        t396_setUpTooltip_desktop(el,pinEl,tipEl);
    }

    setTimeout(function() {
        $('.tn-atom__tip-img').each(function() {
            var foo = $(this).attr('data-tipimg-original');
            if (typeof foo != 'undefined' && foo != '') {
                $(this).attr('src', foo);
            }
        })
    }, 3000);
}

function t396_addForm(ab,el){
	tn_console('func: addForm');		

	/* add data atributes */
	var fields_str='width,top,left,';
	fields_str+='inputs,container,axisx,axisy,widthunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
}

function t396_addGallery(ab,el){
	tn_console('func: addForm');		

	/* add data atributes */
	var fields_str='width,height,top,left,';
	fields_str+='imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
}

function t396_elem__setFieldValue(el,prop,val,flag_render,flag_updateui,res){
	if(res=='')res=window.tn.curResolution;	
	if(res<1200 && prop!='zindex'){
		el.attr('data-field-'+prop+'-res-'+res+'-value',val);
	}else{
		el.attr('data-field-'+prop+'-value',val);		
	}
	if(flag_render=='render')elem__renderViewOneField(el,prop);
	if(flag_updateui=='updateui')panelSettings__updateUi(el,prop,val);
}

function t396_elem__getFieldValue(el,prop){
	
	var res=window.tn.curResolution;
	
	var r;
		
	if(res<1200){
		
		if(res==960){
			r=el.attr('data-field-'+prop+'-res-960-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-value');
			}
		}

		if(res==640){
			r=el.attr('data-field-'+prop+'-res-640-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-960-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-value');
				}
			}
		}

		if(res==480){
			r=el.attr('data-field-'+prop+'-res-480-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-640-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-res-960-value');
					if(typeof r=='undefined'){
						r=el.attr('data-field-'+prop+'-value');
					}
				}
			}
		}

		if(res==320){
			r=el.attr('data-field-'+prop+'-res-320-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-480-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-res-640-value');
					if(typeof r=='undefined'){
						r=el.attr('data-field-'+prop+'-res-960-value');
						if(typeof r=='undefined'){
							r=el.attr('data-field-'+prop+'-value');
						}
					}
				}
			}
		}
						
	}else{
		r=el.attr('data-field-'+prop+'-value');		
	}		

	return(r);
}

function t396_elem__renderView(el){
	tn_console('func: elem__renderView');	
	var fields=el.attr('data-fields');
	if(! fields) {
		return false;
	}
	fields = fields.split(',');
	
	/* set to element value of every field  via css */	
	for ( var i = 0; i < fields.length; i++ ) {
		t396_elem__renderViewOneField(el,fields[i]);
	}
		
}

function t396_elem__renderViewOneField(el,field){

	var value=t396_elem__getFieldValue(el,field);

	if(field=='left'){
		value = t396_elem__convertPosition__Local__toAbsolute(el,field,value);
		el.css('left',parseFloat(value).toFixed(1)+'px');
	}

	if(field=='top'){
		value = t396_elem__convertPosition__Local__toAbsolute(el,field,value);
		el.css('top',parseFloat(value).toFixed(1)+'px');
	}
		
	if(field=='width'){
		value = t396_elem__getWidth(el,value);
        el.css('width',parseFloat(value).toFixed(1)+'px');
		var eltype=el.attr('data-elem-type');
		if(eltype=='tooltip'){
            var pinSvgIcon = el.find('.tn-atom__pin-icon');
            /*add width to svg nearest parent to fix InternerExplorer problem*/
            if (pinSvgIcon.length > 0) {
                var pinSize = parseFloat(value).toFixed(1) + 'px';
                pinSvgIcon.css({'width': pinSize, 'height': pinSize});
            }
			el.css('height',parseInt(value).toFixed(1)+'px');	
		}
		if(eltype=='gallery') {
			var borderWidth = t396_elem__getFieldValue(el, 'borderwidth');
			var borderStyle = t396_elem__getFieldValue(el, 'borderstyle');
			if (borderStyle=='none' || typeof borderStyle=='undefined' || typeof borderWidth=='undefined' || borderWidth=='') borderWidth=0;
			value = value*1 - borderWidth*2;
			el.css('width', parseFloat(value).toFixed(1)+'px');
			el.find('.t-slds__main').css('width', parseFloat(value).toFixed(1)+'px');
			el.find('.tn-atom__slds-img').css('width', parseFloat(value).toFixed(1)+'px');	
		}
	}
	
	if(field=='height'){
        var eltype = el.attr('data-elem-type');
        if (eltype == 'tooltip') {
            return;
        }
		value=t396_elem__getHeight(el,value);
		el.css('height', parseFloat(value).toFixed(1)+'px');
		
		if (eltype === 'gallery') {
			var borderWidth = t396_elem__getFieldValue(el, 'borderwidth');
			var borderStyle = t396_elem__getFieldValue(el, 'borderstyle');
			if (borderStyle=='none' || typeof borderStyle=='undefined' || typeof borderWidth=='undefined' || borderWidth=='') borderWidth=0;
			value = value*1 - borderWidth*2;
			el.css('height',parseFloat(value).toFixed(1)+'px');
			el.find('.tn-atom__slds-img').css('height', parseFloat(value).toFixed(1) + 'px');
			el.find('.t-slds__main').css('height', parseFloat(value).toFixed(1) + 'px');
		}		
	}	
	
	if(field=='container'){
		t396_elem__renderViewOneField(el,'left');
		t396_elem__renderViewOneField(el,'top');
	}

	if(field=='width' || field=='height' || field=='fontsize' || field=='fontfamily' || field=='letterspacing' || field=='fontweight' || field=='img'){
		t396_elem__renderViewOneField(el,'left');
		t396_elem__renderViewOneField(el,'top');
	}
	
	if(field=='inputs'){
		value=el.find('.tn-atom__inputs-textarea').val();
		try {
		    t_zeroForms__renderForm(el,value);
		} catch (err) {
        }		    
	}

}
                    
function t396_elem__convertPosition__Local__toAbsolute(el,field,value){
	
	value = parseInt(value);			
	
	if(field=='left'){

		var el_container,offset_left,el_container_width,el_width;
		var container=t396_elem__getFieldValue(el,'container');
		
		if(container=='grid'){
			el_container = 'grid';
			offset_left = window.tn.grid_offset_left;
			el_container_width = window.tn.grid_width;
		}else{
			el_container = 'window';
			offset_left = 0;
			el_container_width = window.tn.window_width;			
		}		
			
		/* fluid or not	*/
		var el_leftunits=t396_elem__getFieldValue(el,'leftunits');
		if(el_leftunits=='%'){

				value = t396_roundFloat( el_container_width * value/100 );
			
		}
			
        value = offset_left + value;

        var el_axisx=t396_elem__getFieldValue(el,'axisx');

        if(el_axisx=='center'){
			el_width = t396_elem__getWidth(el);
            value = el_container_width/2 - el_width/2 + value;
        }

        if(el_axisx=='right'){
            el_width = t396_elem__getWidth(el);
            value = el_container_width - el_width + value;
        }
		
	}	
	
	if(field=='top'){
		var ab=el.parent();

		var el_container,offset_top,el_container_height,el_height;
		var container=t396_elem__getFieldValue(el,'container');
		
		if(container=='grid'){
			el_container = 'grid';
			offset_top = parseFloat( ab.attr('data-artboard-proxy-min-offset-top') );
			el_container_height = parseFloat( ab.attr('data-artboard-proxy-min-height') );
		}else{
			el_container = 'window';
			offset_top = 0;
			el_container_height = parseFloat( ab.attr('data-artboard-proxy-max-height') );
		}

		/* fluid or not	*/
		var el_topunits=t396_elem__getFieldValue(el,'topunits');
		if(el_topunits=='%'){

				value = ( el_container_height * (value/100) );
			
		}

        value = offset_top + value;

        var el_axisy=t396_elem__getFieldValue(el,'axisy');

        if(el_axisy=='center'){
			/* var el_height=parseFloat(el.innerHeight()); */
			el_height=t396_elem__getHeight(el);
			if (el.attr('data-elem-type') === 'image') {
			    el_width = t396_elem__getWidth(el);
                var fileWidth = t396_elem__getFieldValue(el,'filewidth');
                var fileHeight = t396_elem__getFieldValue(el,'fileheight');
                if (fileWidth && fileHeight) {
                    var ratio = parseInt(fileWidth) / parseInt(fileHeight);
			        el_height = el_width / ratio;
                }
			}
            value = el_container_height/2 - el_height/2 + value;
        }

        if(el_axisy=='bottom'){
			/* var el_height=parseFloat(el.innerHeight()); */
			el_height=t396_elem__getHeight(el);
			if (el.attr('data-elem-type') === 'image') {
			    el_width = t396_elem__getWidth(el);
                var fileWidth = t396_elem__getFieldValue(el,'filewidth');
                var fileHeight = t396_elem__getFieldValue(el,'fileheight');
                if (fileWidth && fileHeight) {
                    var ratio = parseInt(fileWidth) / parseInt(fileHeight);
			        el_height = el_width / ratio;
                }
			}
            value = el_container_height - el_height + value;
        }	
                                                   
	}		
	
	return(value);				
	
}

                                          
function t396_ab__setFieldValue(ab,prop,val,res){
	/* tn_console('func: ab__setFieldValue '+prop+'='+val);	*/
	
	if(res=='')res=window.tn.curResolution;
	
	if(res<1200){
		ab.attr('data-artboard-'+prop+'-res-'+res,val);
	}else{
		ab.attr('data-artboard-'+prop,val);		
	}
	
}

function t396_ab__getFieldValue(ab,prop){
	
	var res=window.tn.curResolution;
	
	var r;
		
	if(res<1200){
		
		if(res==960){
			r=ab.attr('data-artboard-'+prop+'-res-960');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'');
			}
		}

		if(res==640){
			r=ab.attr('data-artboard-'+prop+'-res-640');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-960');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'');
				}
			}
		}

		if(res==480){
			r=ab.attr('data-artboard-'+prop+'-res-480');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-640');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'-res-960');
					if(typeof r=='undefined'){
						r=ab.attr('data-artboard-'+prop+'');
					}
				}
			}
		}

		if(res==320){
			r=ab.attr('data-artboard-'+prop+'-res-320');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-480');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'-res-640');
					if(typeof r=='undefined'){
						r=ab.attr('data-artboard-'+prop+'-res-960');
						if(typeof r=='undefined'){
							r=ab.attr('data-artboard-'+prop+'');
						}
					}
				}
			}
		}
						
	}else{
		r=ab.attr('data-artboard-'+prop);		
	}		

	return(r);
}

function t396_ab__renderViewOneField(ab,field){	
	var value=t396_ab__getFieldValue(ab,field);		

}

function t396_allelems__renderView(ab){
	tn_console('func: allelems__renderView: abid:'+ab.attr('data-artboard-recid'));
	ab.find(".tn-elem").each(function() {	
		t396_elem__renderView($(this));
	});
	
}

function t396_ab__filterUpdate(ab){
	var filter=ab.find('.t396__filter');
	var c1=filter.attr('data-filtercolor-rgb');
	var c2=filter.attr('data-filtercolor2-rgb');
	var o1=filter.attr('data-filteropacity');
	var o2=filter.attr('data-filteropacity2');
	if((typeof c2=='undefined' || c2=='') && (typeof c1!='undefined' && c1!='')){
		filter.css("background-color", "rgba("+c1+","+o1+")");
	}else if((typeof c1=='undefined' || c1=='') && (typeof c2!='undefined' && c2!='')){
		filter.css("background-color", "rgba("+c2+","+o2+")");		
	}else if(typeof c1!='undefined' && typeof c2!='undefined' && c1!='' && c2!=''){
		filter.css({
			background: "-webkit-gradient(linear, left top, left bottom, from(rgba("+c1+","+o1+")), to(rgba("+c2+","+o2+")) )" 
		});	
	}else{
		filter.css("background-color", 'transparent');
	}
}

function t396_ab__getHeight(ab, ab_height){
	if(typeof ab_height=='undefined')ab_height=t396_ab__getFieldValue(ab,'height');
	ab_height=parseFloat(ab_height);

    /* get Artboard height (fluid or px) */
    var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');
    if(ab_height_vh!=''){
          ab_height_vh=parseFloat(ab_height_vh);
          if(isNaN(ab_height_vh)===false){
              var ab_height_vh_px=parseFloat( window.tn.window_height * parseFloat(ab_height_vh/100) );
              if( ab_height < ab_height_vh_px ){
                  ab_height=ab_height_vh_px;
              }
          }
    }
                                               
	return(ab_height);
}
                                                       
function t396_hex2rgb(hexStr){
    /*  note: hexStr should be #rrggbb */
    var hex = parseInt(hexStr.substring(1), 16);
    var r = (hex & 0xff0000) >> 16;
    var g = (hex & 0x00ff00) >> 8;
    var b = hex & 0x0000ff;
    return [r, g, b];
}

String.prototype.t396_replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


function t396_elem__getWidth(el,value){
	if(typeof value=='undefined')value=parseFloat( t396_elem__getFieldValue(el,'width') );
	var el_widthunits=t396_elem__getFieldValue(el,'widthunits');
	if(el_widthunits=='%'){
		var el_container=t396_elem__getFieldValue(el,'container');
		if(el_container=='window'){
			value=parseFloat( window.tn.window_width * parseFloat( parseInt(value)/100 ) );
		}else{
			value=parseFloat( window.tn.grid_width * parseFloat( parseInt(value)/100 ) );
		}
	}
	return(value);	
}

function t396_elem__getHeight(el,value){

	if(typeof value=='undefined')value=t396_elem__getFieldValue(el,'height');	

	value=parseFloat(value);
	
	if(el.attr('data-elem-type')=='shape' || el.attr('data-elem-type')=='video' || el.attr('data-elem-type')=='html' || el.attr('data-elem-type')=='gallery'){		
		
		var el_heightunits=t396_elem__getFieldValue(el,'heightunits');
		
		if(el_heightunits=='%'){
		
            var ab=el.parent();
            var ab_min_height=parseFloat( ab.attr('data-artboard-proxy-min-height') );
			var ab_max_height=parseFloat( ab.attr('data-artboard-proxy-max-height') );

			var el_container=t396_elem__getFieldValue(el,'container');
			if(el_container=='window'){
				value=parseFloat( ab_max_height * parseFloat( value/100 ) );
			}else{
				value=parseFloat( ab_min_height * parseFloat( value/100 ) );
			}
			
		}		
		
	}else if(el.attr('data-elem-type')=='button'){
		
		value = value;
		
	}else{
		
		value =  parseFloat(el.innerHeight());
		
	}
	
	return(value);	
}

function t396_roundFloat(n){
	n = Math.round(n * 100) / 100;
	return(n);
}

function tn_console(str){
	if(window.tn_comments==1)console.log(str);
}

function t396_setUpTooltip_desktop(el, pinEl, tipEl) {
    var timer;
    pinEl.mouseover(function() {
        /*if any other tooltip is waiting its timeout to be hided — hide it*/
        $('.tn-atom__tip_visible').each(function(){
            var thisTipEl = $(this).parents('.t396__elem');
            if (thisTipEl.attr('data-elem-id') != el.attr('data-elem-id')) {
                t396_hideTooltip(thisTipEl, $(this));
            }
        });

        clearTimeout(timer);
        if (tipEl.css('display') == 'block') {
            return;
        }
        t396_showTooltip(el, tipEl);
    });
    pinEl.mouseout(function() {
        timer = setTimeout(function() {
            t396_hideTooltip(el, tipEl);
        }, 300);
    })
}

function t396_setUpTooltip_mobile(el,pinEl,tipEl) {
    pinEl.on('click', function(e) {
        if (tipEl.css('display') == 'block' && $(e.target).hasClass("tn-atom__pin")) {
            t396_hideTooltip(el,tipEl);
        } else {
            t396_showTooltip(el,tipEl);
        }
    });
    var id = el.attr("data-elem-id");
    $(document).click(function(e) {
        var isInsideTooltip = ($(e.target).hasClass("tn-atom__pin") || $(e.target).parents(".tn-atom__pin").length > 0);
        if (isInsideTooltip) {
            var clickedPinId = $(e.target).parents(".t396__elem").attr("data-elem-id");
            if (clickedPinId == id) {
                return;
            }
        }
        t396_hideTooltip(el,tipEl);
    })
}

function t396_hideTooltip(el, tipEl) {
    tipEl.css('display', '');
    tipEl.css({
        "left": "",
        "transform": "",
        "right": ""
    });
    tipEl.removeClass('tn-atom__tip_visible');
    el.css('z-index', '');
}

function t396_showTooltip(el, tipEl) {
    var pos = el.attr("data-field-tipposition-value");
    if (typeof pos == 'undefined' || pos == '') {
        pos = 'top';
    };
    var elSize = el.height();
    var elTop = el.offset().top;
    var elBottom = elTop + elSize;
    var elLeft = el.offset().left;
    var elRight = el.offset().left + elSize;
    var winTop = $(window).scrollTop();
    var winWidth = $(window).width();
    var winBottom = winTop + $(window).height();
    var tipElHeight = tipEl.outerHeight();
    var tipElWidth = tipEl.outerWidth();
    var padd=15;
    if (pos == 'right' || pos == 'left') {
        var tipElRight = elRight + padd + tipElWidth;
        var tipElLeft = elLeft - padd - tipElWidth;
        if ((pos == 'right' && tipElRight > winWidth) || (pos == 'left' && tipElLeft < 0)) {
            pos = 'top';
        }
    }
    if (pos == 'top' || pos == 'bottom') {
        var tipElRight = elRight + (tipElWidth / 2 - elSize / 2);
        var tipElLeft = elLeft - (tipElWidth / 2 - elSize / 2);
        if (tipElRight > winWidth) {
            var rightOffset = -(winWidth - elRight - padd);
            tipEl.css({
                "left": "auto",
                "transform": "none",
                "right": rightOffset + "px"
            });
        }
        if (tipElLeft < 0) {
            var leftOffset = -(elLeft - padd);
            tipEl.css({
                "left": leftOffset + "px",
                "transform": "none"
            });
        }
    }
    if (pos == 'top') {
        var tipElTop = elTop - padd - tipElHeight;
        var tipElBottom = elBottom + padd + tipElHeight;
        if (winBottom > tipElBottom && winTop > tipElTop) {
            pos = 'bottom';
        }
    }
    if (pos == 'bottom') {
        var tipElTop = elTop - padd - tipElHeight;
        var tipElBottom = elBottom + padd + tipElHeight;
        if (winBottom < tipElBottom && winTop < tipElTop) {
            pos = 'top';
        }
    }
    tipEl.attr('data-tip-pos', pos);
    tipEl.css('display', 'block');
    tipEl.addClass('tn-atom__tip_visible');
    el.css('z-index', '1000');
}

function t396_hex2rgba(hexStr, opacity){
	var hex = parseInt(hexStr.substring(1), 16);
	var r = (hex & 0xff0000) >> 16;
	var g = (hex & 0x00ff00) >> 8;
	var b = hex & 0x0000ff;
	return [r, g, b, parseFloat(opacity)];
}

 
function t397_init(recid) {
    var el = $('#rec' + recid);
    var curMode = $('.t-records').attr('data-tilda-mode');
    var tabs = el.find('.t397__tab');

    if (curMode != 'edit' && curMode != 'preview') {
        t397_scrollToTabs(recid);
    }

    if (tabs.length > 0) {
        tabs.click(function () {
            if ($(this).hasClass('t397__tab_active')) {
                return;
            }
            el.find('.t397__tab').removeClass('t397__tab_active');
            $(this).addClass('t397__tab_active');

            t397_removeUrl();
            var tabNumber = el.find(".t397__tab_active").index() + 1;
            if (curMode != 'edit' && curMode != 'preview' && tabNumber !== 0) {
                if (typeof history.replaceState != 'undefined') {
                    window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumber);
                }
            }

            t397_alltabs_updateContent(recid);
            t397_updateSelect(recid);

            var recids = $(this).attr('data-tab-rec-ids').split(',');
            recids.forEach(function (recid) {
                var el = $('#rec' + recid);
                el.find('.t-feed, .t-store, .t-store__product-snippet, .t117, .t121, .t132, .t223, .t226, .t228, .t229, .t230, .t268, .t279, .t341, .t346, .t347, .t349, .t351, .t353, .t384, .t385, .t386, .t396, .t400, .t404, .t409, .t410, .t412, .t418, .t422, .t425, .t428, .t433, .t448, .t456, .t477, .t478, .t480, .t486, .t498, .t504, .t506, .t509, .t511, .t517, .t518, .t519, .t520, .t532, .t533, .t538, .t539, .t544, .t545, .t552, .t554, .t570, .t577, .t592, .t598, .t599, .t601, .t604, .t605, .t609, .t615, .t616, .t650, .t659, .t670, .t675, .t686, .t688, .t694, .t698, .t700, .t726, .t728, .t730, .t734, .t738, .t740, .t744, .t754, .t760, .t762, .t764, .t774, .t776, .t778, .t780, .t786, .t798, .t799, .t801, .t813, .t814, .t822, .t826, .t827, .t829, .t842, .t843, .t849, .t850, .t851, .t856, .t858, .t859, .t860, .t881, .t889, .t902, .t912, .t923, .t937, .t958, .t959, .t979, .t982, .t983, .t989, .t994').trigger('displayChanged');
            });

            t397_startUpdateLazyLoad($(this));
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        });

        t397_alltabs_updateContent(recid);
        t397_updateContentBySelect(recid);

        var bgcolor = el.css("background-color");
        var bgcolor_target = el.find(".t397__select, .t397__firefoxfix");
        bgcolor_target.css("background-color", bgcolor);
    }

    /* Scroll and open proper tab on a valid link click */
    $('.r').on('click', '[href*="#!/tab/' + recid + '"]', function (e) {
        var hash = e.currentTarget.hash;
        t397_scrollToTabs(recid, hash);
    });
}

function t397_alltabs_updateContent(recid) {
    var mainRecid = recid;
    var el = $('#rec' + recid);

    var activeTab = el.find(".t397__tab_active");
    if (activeTab.length === 1) {
        var active = activeTab.attr('data-tab-rec-ids').split(',');
        var noactive = [];

        el.find(".t397__tab:not(.t397__tab_active)").each(function (i, tab) {
            noactive = noactive.concat($(tab).attr('data-tab-rec-ids').split(','));
        });

        var unique = noactive.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });

        var off = unique.filter(function (value) {
            return $.inArray(value, active) === -1;
        });

        if (el.find(".t397__tab_active").is(":visible") || el.find(".t397__select").is(":visible")) {
            active.forEach(function (recid) {
                if (recid !== '') {
                    var el = $('#rec' + recid);
                    var recordType = el.attr('data-record-type');
                    el.removeClass('t397__off');
                    el.css('opacity', '');

                    if (recordType === '395' && t395_alltabs_updateContent !== undefined && t395_updateSelect !== undefined && mainRecid !== recid) {
                        t395_alltabs_updateContent(recid);
                        t395_updateSelect(recid);
                        el.find('.t395__tab:nth-child(1)').trigger('click');
                    }

                    if (recordType === '397' && mainRecid !== recid) {
                        t397_alltabs_updateContent(recid);
                        t397_updateSelect(recid);
                        el.find('.t397__tab:nth-child(1)').trigger('click');
                    }
                }
            });
        } else {
            active.forEach(function (recid) {
                var el = $('#rec' + recid);
                el.attr('data-animationappear', 'off');
                el.addClass('t397__off');
            });
        }

        off.forEach(function (recid) {
            if (recid !== '') {
                var el = $('#rec' + recid);
                var recordType = el.attr('data-record-type');
                el.attr('data-connect-with-tab', 'yes');
                el.attr('data-animationappear', 'off');
                el.addClass('t397__off');

                if (recordType === '395' && t395_alltabs_updateContent !== undefined && t395_updateSelect !== undefined && mainRecid !== recid) {
                    t395_alltabs_updateContent(recid);
                    t395_updateSelect(recid);
                    el.find('.t395__tab:nth-child(1)').trigger('click');
                }

                if (recordType === '397' && mainRecid !== recid) {
                    t397_alltabs_updateContent(recid);
                    t397_updateSelect(recid);
                    el.find('.t397__tab:nth-child(1)').trigger('click');
                }
            }
        });
    }
}

function t397_updateContentBySelect(recid) {
    var el = $('#rec' + recid);
    el.find(".t397__select").change(function () {
        var select_val = el.find(".t397__select").val();
        var tab_index = el.find(".t397__tab[data-tab-rec-ids='" + select_val + "']");
        tab_index.trigger('click')
    })
}

function t397_updateSelect(recid) {
    var el = $('#rec' + recid);
    var current_tab = el.find(".t397__tab_active").attr('data-tab-rec-ids');
    var el_select = el.find(".t397__select");
    el_select.val(current_tab)
}

function t397_startUpdateLazyLoad($this) {
    var rec_ids = $this.attr('data-tab-rec-ids').split(',');
    rec_ids.forEach(function (rec_id, i, arr) {
        var rec_el = $('#rec' + rec_id);

        var video = rec_el.find('.t-video-lazyload');
        if (video.length > 0) {
            t397_updateVideoLazyLoad(video);
        }
    });
}

function t397_updateVideoLazyLoad(video) {
    setTimeout(function () {
        video.each(function () {
            var div = $(this);

            if (!div.hasClass('t-video__isload')) {

                var height = div.attr('data-videolazy-height') ? $(this).attr('data-videolazy-height') : '100%';
                if (height.indexOf('vh') != -1) {
                    height = '100%';
                }

                var videoId = div.attr('data-videolazy-id').trim();
                var blockId = div.attr('data-blocklazy-id') || '';
                if (typeof div.attr('data-videolazy-two-id') != 'undefined') {
                    var videoTwoId = '_' + div.attr('data-videolazy-two-id') + '_';
                } else {
                    var videoTwoId = '';
                }

                if (div.attr('data-videolazy-type') == 'youtube') {
                    div.find('iframe').remove();
                    div.prepend('<iframe id="youtubeiframe' + videoTwoId + blockId + '" width="100%" height="' + height + '" src="//www.youtube.com/embed/' + videoId + '?rel=0&fmt=18&html5=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
                }
            }

            div.addClass('t-video__isload');
        });
    }, 2);
}

function t397_scrollToTabs(recid, hash) {
    var el = $('#rec' + recid);
    var curUrl = '';
    if (hash) {
        curUrl = hash;
    } else {
        curUrl = window.location.href;
    }
    var tabIndexNumber = curUrl.indexOf('#!/tab/');
    var tabIndexNumberStart = curUrl.indexOf('tab/');

    el.find('.t397__wrapper_mobile .t397__select option:eq(0)').prop('selected', false);

    if (tabIndexNumber !== -1) {
        var tabRec = curUrl.substring(tabIndexNumberStart + 4, tabIndexNumberStart + 4 + recid.length);

        if (tabRec == recid) {
            var tabBlock = $('#rec' + tabRec).find('.t397');
            var tabNumber = parseInt(curUrl.slice(tabIndexNumberStart + 4 + recid.length + 1), 10);
            el.find('.t397__tab').removeClass('t397__tab_active');
            el.find('.t397__tab:eq(' + (tabNumber - 1) + ')').trigger('click').addClass('t397__tab_active');
            el.find('.t397__wrapper_mobile .t397__select option:eq(' + (tabNumber - 1) + ')').prop('selected', true);

            var targetOffset = tabBlock.offset().top;
            var target = targetOffset;

            if ($(window).width() > 960) {
                target = targetOffset - 200;
            } else {
                target = targetOffset - 100;
            }

            $('html, body').animate({
                scrollTop: target
            }, 300);
        }
    }
}

function t397_removeUrl() {
    var curUrl = window.location.href;
    var indexToRemove = curUrl.indexOf('#!/tab/');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove < 0) {
        indexToRemove = curUrl.indexOf('%23!/tab/');
    }

    curUrl = curUrl.substring(0, indexToRemove);
    if (indexToRemove != -1) {
        if (typeof history.replaceState != 'undefined') {
            window.history.replaceState('', '', curUrl);
        }
    }
}
 
function t398_init(recid){
  t398_addArrow(recid);
  t398_highlight();
  $('#rec'+recid).find(".t398").each(function() {
	var $hook=$(this).attr('data-tooltip-hook');
    var $margin=$(this).attr('data-tooltip-margin');
    if($hook!==''){
      var $obj = $('a[href="'+$hook+'"]');
      var $content=$(this).find('.t398__content').html();
      if($hook.charAt(0)=='#'){var touchDevices=true;}else{var touchDevices=false;}
      var position=$(this).attr('data-tooltip-position');
      if(position!==''){}else{position='top';}
      $obj.click(function(e){
        e.preventDefault();
      });
      $obj.tooltipster({
        'theme':'t398__tooltipster-noir t398__tooltipster-noir_'+recid+'',
        'contentAsHTML': true,
        'content': $content,
        interactive:true,
        touchDevices:touchDevices,
        position:position,
        functionReady: function(origin, tooltip) {
          $(".t398__tooltipster-noir_"+recid+"").css("margin-top", $margin);
        }
      });
    }
  });
}

function t398_addArrow(recid){
  $('#rec'+recid).find(".t398").each(function() {
	var $hook=$(this).attr('data-tooltip-hook');
    var $obj = $('a[href="'+$hook+'"]');
    var arrow=$(this).attr('data-add-arrow');
    var arrow_height = $obj.height();
    if($hook!=='' && arrow!==''){
      $obj.append("<div class=\"t398__arrow t398__arrow_"+recid+"\" style=\"height: "+arrow_height+"\px;\"></div>");
    }
  });
}

function t398_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t398__list_item a[href='"+url+"']").addClass("t-active");
  $(".t398__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t398__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t398__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t398__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t398__list_item a[href='/"+pathname+"/']").addClass("t-active");
}
 
function t400_init(recid) {
    var el = $('#rec' + recid);

    var btn = el.find('.t400__submit');
    var hideBackText = btn.attr("data-hide-back-text");
    var showMoreText = btn.text();

    el.find('.t400__submit').click(function () {
        if (typeof hideBackText != 'undefined' && hideBackText.length > 0 && $(this).hasClass('t400__submit_hide-back')) {
            t400_alltabs_updateContent(recid);
            $(this).removeClass('t400__submit_hide-back');
            if (btn.hasClass('t400__submit-overflowed')) {
                btn.html("<span class=\"t400__text\">" + showMoreText + "</span>");
            } else {
                btn.html(showMoreText);
            }
            $('.t396').trigger('displayChanged');
            return;
        }

        var recids = $(this).attr('data-hidden-rec-ids').split(',');
        recids.forEach(function (recid) {
            var el = $('#rec' + recid);
            el.removeClass('t400__off');
            el.css('opacity', '');

            var video = el.find('.t-video-lazyload');
            if (video.length > 0) {
                if (video.parents('.t121').length > 0 || video.parents('.t223').length > 0 || video.parents('.t230').length > 0 || video.parents('.t368').length > 0) {
                    t400_updateVideoLazyLoad(video);
                }
            }

            el.find('.t-feed, .t-store, .t-store__product-snippet, .t117, .t121, .t132, .t223, .t226, .t228, .t229, .t230, .t268, .t279, .t341, .t346, .t347, .t349, .t351, .t353, .t384, .t385, .t386, .t396, .t400, .t404, .t409, .t410, .t412, .t418, .t422, .t425, .t428, .t433, .t456, .t477, .t478, .t480, .t486, .t498, .t504, .t506, .t509, .t511, .t517, .t518, .t519, .t520, .t531, .t532, .t533, .t538, .t539, .t544, .t545, .t552, .t554, .t570, .t577, .t592, .t598, .t599, .t601, .t604, .t605, .t609, .t615, .t616, .t650, .t659, .t670, .t675, .t686, .t688, .t694, .t698, .t700, .t726, .t728, .t730, .t734, .t738, .t740, .t744, .t754, .t760, .t762, .t764, .t774, .t776, .t778, .t780, .t786, .t798, .t799, .t801, .t813, .t814, .t822, .t826, .t827, .t829, .t842, .t843, .t849, .t850, .t851, .t856, .t858, .t859, .t860, .t881, .t902, .t912, .t923, .t937, .t958, .t959, .t979, .t982, .t983, .t989, .t994').trigger('displayChanged');
        });

        if (typeof hideBackText != 'undefined' && hideBackText.length > 0) {
            btn.addClass('t400__submit_hide-back');
            if (btn.hasClass('t400__submit-overflowed')) {
                btn.html("<span class=\"t400__text\">" + hideBackText + "</span>");
            } else {
                btn.html(hideBackText);
            }
        } else {
            el.addClass('t400__off').hide();
        }

        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    });

    t400_alltabs_updateContent(recid);
    t400_checkSize(recid);
    
    el.find('.t400').bind('displayChanged', function() {
        t400_checkSize(recid);
    });
}

function t400_alltabs_updateContent(recid) {
    var el = $('#rec' + recid);
    el.find(".t400__submit").each(function (i) {
        var recids = $(this).attr('data-hidden-rec-ids').split(',');
        recids.forEach(function (recid) {
            var el = $('#rec' + recid);
            el.attr('data-animationappear', 'off');
            el.attr('data-connect-with-tab', 'yes');
            el.addClass('t400__off');
        });
    });
}

function t400_checkSize(recid) {
    var el = $("#rec" + recid).find(".t400__submit");
    if (el.length) {
        var btnheight = el.height();
        var textheight = el[0].scrollHeight;
        if (btnheight < textheight) {
            var btntext = el.text();
            el.addClass("t400__submit-overflowed");
            el.html("<span class=\"t400__text\">" + btntext + "</span>");
        }
    }
}

function t400_updateVideoLazyLoad(video) {
    setTimeout(function () {
        video.each(function () {
            var div = $(this);

            var height = div.attr('data-videolazy-height') ? $(this).attr('data-videolazy-height') : '100%';
            if (height.indexOf('vh') != -1) {
                height = '100%';
            }

            var videoId = div.attr('data-videolazy-id').trim();
            var blockId = div.attr('data-blocklazy-id') || '';
            if (typeof div.attr('data-videolazy-two-id') != 'undefined') {
                var videoTwoId = '_' + div.attr('data-videolazy-two-id') + '_';
            } else {
                var videoTwoId = '';
            }

            if (div.attr('data-videolazy-type') == 'youtube') {
                div.find('iframe').remove();
                div.prepend('<iframe id="youtubeiframe' + videoTwoId + blockId + '" width="100%" height="' + height + '" src="//www.youtube.com/embed/' + videoId + '?rel=0&fmt=18&html5=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
            }
        });
    }, 300);
}
 
function t401_showMore(recid) {
    var el = $('#rec' + recid).find(".t401");
    el.find(".t401__col").hide();

    var cards_size = el.find(".t401__col").size();
    var cards_count = parseInt(el.attr("data-show-count"));
    var x = cards_count;
    var y = cards_count;

    el.find('.t401__col:lt(' + x + ')').show();

    el.find('.t401__showmore').click(function () {
        x = (x + y <= cards_size) ? x + y : cards_size;
        el.find('.t401__col:lt(' + x + ')').show();
        if (x == cards_size) {
            el.find('.t401__showmore').hide();
        }
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    });
} 
function t403_showMore(recid) {
  var el=$('#rec'+recid).find(".t403");
  el.find(".t403__container-table").hide();

  var cards_size = el.find(".t403__container-table").size();
  var cards_count=parseInt(el.attr("data-show-count"), 10);
  var x = cards_count;
  var y = cards_count;

  el.find('.t403__container-table:lt('+x+')').show();

  el.find('.t403__showmore').click(function () {
      x = (x+y <= cards_size) ? x+y : cards_size;
      el.find('.t403__container-table:lt('+x+')').show();
      if(x == cards_size) {
          el.find('.t403__showmore').hide();
      }

      if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
  });
} 
function t404_unifyHeights(recid) {
    var el=$('#rec'+recid).find(".t404");
    el.find('.t-container').each(function() {
        var highestBox = 0;
        $('.t404__title', this).css('height', '');
        $('.t404__title', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height();
        });  
        if($(window).width()>=960){
          $('.t404__title',this).css('height', highestBox);   
        }else{
          $('.t404__title',this).css('height', "auto");    
        }
        
        $('.t404__descr', this).css('height', '');
        var highestBox = 0;
        $('.t404__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
          $('.t404__descr',this).css('height', highestBox);   
        }else{
          $('.t404__descr',this).css('height', "auto");    
        }
                
    });
}

function t404_unifyHeightsTextwrapper(recid) {
    var el=$('#rec'+recid).find(".t404");
    el.find('.t-container').each(function() {
        var highestBox = 0;
        $('.t404__textwrapper', this).each(function(){
          $(this).css("height","auto");
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
          $('.t404__textwrapper',this).css('height', highestBox);   
        }else{
          $('.t404__textwrapper',this).css('height', "auto");    
        }      
    });
}

function t404_showMore(recid) {
  var el=$('#rec'+recid).find(".t404");
  el.find(".t-col").hide();
  var cards_size = el.find(".t-col").size();
  var cards_count=parseInt(el.attr("data-show-count"));
  if (cards_count > 500) { cards_count = 500; }
  var x=cards_count;
  var y=cards_count;
  el.find('.t-col:lt('+x+')').show();
  el.find('.t404__showmore').click(function () {
      x= (x+y <= cards_size) ? x+y : cards_size;
      el.find('.t-col:lt('+x+')').show();
      if(x == cards_size){
          el.find('.t404__showmore').hide();
      }
    $('.t404').trigger('displayChanged');
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
  });
}



 
function t405_showMore(recid) {
    var el = $('#rec' + recid).find(".t405");
    el.find(".t-col").hide();
    var cards_size = el.find(".t-col").size();
    var cards_count = parseInt(el.attr("data-show-count"));
    if (cards_count > 500) {
        cards_count = 500;
    }
    var x = cards_count;
    var y = cards_count;
    el.find('.t-col:lt(' + x + ')').show();
    el.find('.t405__showmore').click(function () {
        x = (x + y <= cards_size) ? x + y : cards_size;
        el.find('.t-col:lt(' + x + ')').show();
        if (x == cards_size) {
            $(this).hide();
        }
        $('.t405').trigger('displayChanged');
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    });
} 
function t409_unifyHeights(recid) {
  if($(window).width()>=960){
    var el = $("#rec"+recid);
    var imgwidth = el.find(".t409__img").width();
    var imgwrapperwidth = el.find(".t409__imgwrapper").css("max-width");
    var imgwrapperwidthpx = parseInt(imgwrapperwidth, 10);
    var margin = imgwrapperwidthpx - imgwidth;
    el.find(".t409__img").css("margin-left", margin);
  }
}
 
function t410_init(recid) {
    var el = $('#rec' + recid);
    var firstimgurl = el.find(".t410__wrapper").attr("data-juxtapose-imgurl-first");
    var firstimgdescr = el.find(".t410__wrapper").attr("data-juxtapose-imgdescr-first");
    var firstimgalt = el.find(".t410__wrapper").attr("data-juxtapose-imgalt-first");
    var secondimgurl = el.find(".t410__wrapper").attr("data-juxtapose-imgurl-second");
    var secondimgdescr = el.find(".t410__wrapper").attr("data-juxtapose-imgdescr-second");
    var secondimgalt = el.find(".t410__wrapper").attr("data-juxtapose-imgalt-second");

    t410_onObjLoad('juxtapose', function() {
        new juxtapose.JXSlider('#t410-juxtapose__' + recid, [{
          src: firstimgurl,
          label: firstimgdescr
        }, {
          src: secondimgurl,
          label: secondimgdescr
        }], {
          animate: false,
          showLabels: true,
          showCredits: false,
          startingPosition: '50%',
          makeResponsive: true,
          callback: function() {
              
            if (firstimgalt.length > 0) {
                el.find('.t410__wrapper .jx-image.jx-left img').attr('alt', firstimgalt);
            }
        
            if (secondimgalt.length > 0) {
                el.find('.t410__wrapper .jx-image.jx-right img').attr('alt', secondimgalt);
            }
          
            if (window.isMobile) {
              el.find('.t410__wrapper').append('<div class="t410__mobile_left"></div><div class="t410__mobile_right"></div>');
              var hanlerWidth = el.find('.jx-handle').width(),
                  leftSide = el.find('.jx-image.jx-left'),
                  rightSide = el.find('.jx-image.jx-right'),
                  leftWidth = leftSide.width() - hanlerWidth/2,
                  rightWidth = rightSide.width() - hanlerWidth/2,
                  wrapper = el.find('.t410__wrapper'),
                  mobileLeft = el.find('.t410__mobile_left'),
                  mobileRight = el.find('.t410__mobile_right');
        
              mobileLeft.css('width', leftWidth);
              mobileRight.css('width', rightWidth);
        
              wrapper.on('touchend', function() {
                leftWidth = leftSide.width() - hanlerWidth/2;
                rightWidth = rightSide.width() - hanlerWidth/2;
                mobileLeft.css('width', leftWidth);
                mobileRight.css('width', rightWidth);
              });
            }
          }
        });
    });
    
    el.find('.t410').bind('displayChanged', function() {
        window.juxtapose.sliders.forEach(function(obj) {
            if(obj.selector === '#t410-juxtapose__' + recid) {
                console.log(obj);
                obj.setWrapperDimensions();
                return;
            }
        });
    });
}

function t410_onObjLoad(objName, okFunc, time) {
    if (typeof window[objName] === 'object') {
        okFunc();
    } else {
        var timerId = setTimeout(function checkFuncExist() {
            if (typeof window[objName] === 'object') {
                okFunc();
                return;
            }
            timerId = setTimeout(checkFuncExist, time || 100);
        });
    }
} 
function t412_init(recid) {
  var rec = $('#rec' + recid);
  if (rec.find('a[href^="#order"]')) {
    rec.find('a[href^="#order"]').on('click', function(e) {
      var $linkelem = $(this);
      var $jspaybox = $('.js-payment-systembox');

      t412_setCoordinateToPaymentBox(e, $linkelem, $jspaybox);
      $jspaybox.css('margin-top', '0');
      $jspaybox.css('margin-left', '0');

      $(window).resize(function() {
        if ($jspaybox.css('display') == 'block' && $linkelem) {
          t412_setCoordinateToPaymentBox(e, $linkelem, $jspaybox);
        }
      });
    });
  }
}


function t412_setCoordinateToPaymentBox(event, $linkelem, $jspaybox) {
  var oldTopCoord = 0;
  var newTopCoord = 0;
  var offset = $linkelem.offset();

  var top = offset.top + $linkelem.parents('.t412__col').height() - $jspaybox.height();
  var left = offset.left + $linkelem.parents('.t412__col').width()/2 - $jspaybox.width()/2;

  oldTopCoord = $jspaybox.css('top');

  $jspaybox.css('top', top + 'px');
  $jspaybox.css('left', left + 'px');

  newTopCoord = $jspaybox.css('top');

  if (parseInt(oldTopCoord) - parseInt(newTopCoord) == 21) {
    $jspaybox.css('top', (top+21) + 'px');
  }
}


function t412_unifyHeights(recid) {
    var el=$("#rec"+recid);

    el.find('.t412__descr').css('height', "auto");  
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox2 = 0;
        $('.t412__descr', this).each(function(){
            if($(this).height() > highestBox2)highestBox2 = $(this).height(); 
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__descr',this).css('height', highestBox2); 
        }else{
	        $('.t412__descr',this).css('height', "auto");    
        }
    });

    el.find('.t412__title').css('height', "auto");
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox3 = 0;
        $('.t412__title', this).each(function(){
            if($(this).height() > highestBox3)highestBox3 = $(this).height(); 
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__title',this).css('height', highestBox3); 
        }else{
	        $('.t412__title',this).css('height', "auto");    
        }
    });

    el.find('.t412__wrapper').css('height', "auto");
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox = 0;
        $('.t412__wrapper', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height();
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__wrapper',this).css('height', highestBox); 
        }else{
	        $('.t412__wrapper',this).css('height', "auto");    
        }
    });
} 
function t414_showPopup(recid){
  var el=$('#rec'+recid).find('.t414');
  $('body').addClass('t414__body_popupshowed');
  el.show();
  el.find('.t414__close, .t414__bg, .t414__closer').click(function(){
    t414_closePopup(recid);
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $('body').removeClass('t414__body_popupshowed');
      $('.t414').hide();
    }
  });
}

function t414_closePopup(recid){
  $('body').removeClass('t414__body_popupshowed');
  $('.t414').hide();
}

function t414_initPopup(recid){
  var el=$('#rec'+recid).find('.t414');
  var hook=el.attr('data-tooltip-hook');
  if(hook!==''){
      var obj = $('a[href="'+hook+'"]');
      obj.click(function(e){
        t414_showPopup(recid);
        var popup = el.find(".t414__content");
        popup.addClass('t414__content_static');
        e.preventDefault();
      });
  }
}

function t414_resizePopup(recid){
  var el = $("#rec"+recid);
  var div = el.find(".t414__mainblock").height();
  var win = $(window).height();
  var popup = el.find(".t414__content");
  if (div > win ) {
    popup.addClass('t414__content_static');
  }
  else {
    popup.removeClass('t414__content_static');
  }
} 
function t418_init(recid) {
    var el = $('#rec' + recid);
    var container = el.find('.t418__slidecontainer');
    if (container.length === 0) {
        return;
    }
    var totalSlides = el.find('.t418__item').length;
    var sliderWidth = el.find('.t418__item').width();
    var pos = parseInt(container.attr('data-slide-pos'), 10) || 0;

    t418_checkSize(recid);
    container.width(sliderWidth * totalSlides);

    $(window).bind('resize', t_throttle(function () {
        t418_checkSize(recid);
        sliderWidth = el.find('.t418__item').width();
        container.width(sliderWidth * totalSlides);
        
        var matrix = container.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[12] || matrix[4];
        if (-((totalSlides-1) * sliderWidth) > x) {
            container.css("transform", "translate(-" + (totalSlides-1) * sliderWidth + "px, 0)");
        }
    }));
    
    el.find('.t418').bind('displayChanged', function() {
        t418_checkSize(recid);
        sliderWidth = el.find('.t418__item').width();
        container.width(sliderWidth * totalSlides);
        setTimeout(function() {
            sliderWidth = el.find('.t418__item').width();
            container.width(sliderWidth * totalSlides);
            t418_checkSize(recid);
        }, 300);
    });

    el.find('.t418__next').click(function () {
        t418_slideRight(recid);
    });

    el.find('.t418__previous').click(function () {
        t418_slideLeft(recid);
    });
}

function t418_slideLeft(recid) {
    var el = $('#rec' + recid);
    var container = el.find('.t418__slidecontainer');
    var totalSlides = el.find('.t418__item').length;
    var sliderWidth = el.find('.t418__item').width();
    var pos = parseInt(container.attr('data-slide-pos'), 10);
    container.attr('data-slide-pos', --pos);

    if (pos <= -1) {
        pos = totalSlides - 1;
        container.attr('data-slide-pos', pos);
    }

    container.css({
        transform: 'translate(-' + (sliderWidth * pos) + 'px, 0)'
    }).css("transition-duration", ".3s");

    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
}

function t418_slideRight(recid) {
    var el = $('#rec' + recid);
    var container = el.find('.t418__slidecontainer');
    var totalSlides = el.find('.t418__item').length;
    var sliderWidth = el.find('.t418__item').width();
    var pos = parseInt(container.attr('data-slide-pos'), 10);
    container.attr('data-slide-pos', ++pos);

    if (pos >= totalSlides) {
        pos = 0;
        container.attr('data-slide-pos', pos);
    }
    
    container.css({
        transform: 'translate(-' + (sliderWidth * pos) + 'px, 0)'
    }).css("transition-duration", ".3s");

    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
}

function t418_checkSize(recid) {
    var el = $('#rec' + recid);
    var sizer = el.find('.t418__height');
    var height = sizer.height();
    var width = sizer.width();
    var ratio = width / height;
    var gallerywrapper = el.find(".t418__slider");
    var gallerywidth = gallerywrapper.width();

    gallerywrapper.css({
        'height': ((gallerywidth / ratio) + 'px')
    });

    var maxwidth = el.find(".t418__height").width();
    var windowwidth = $(window).width();
    var value = windowwidth - 80;
    if (maxwidth > windowwidth) {
        el.find(".t418__item").css("max-width", value + "px");
        el.find(".t418__img").css("left", "20px");
        el.find(".t418__img").css("right", "20px");
    } else {
        el.find(".t418__item").css("max-width", "");
        el.find(".t418__img").css("left", "");
        el.find(".t418__img").css("right", "");
    }
}
 
t422_setHeight = function(recid) {
  if ($(window).width()>960) {
    t422_checkEqualHeight(recid);
  } else {
    $('#rec'+recid+' .t422__img-mobile').height(200);
    $('#rec'+recid+' .t422__text').height('auto');
  }
};

t422_checkEqualHeight = function(recid) {
  var t422__txtel=$('#rec'+recid+' .t422__text');
  var t422__imgel=$('#rec'+recid+' .t422__img');
  var t422__textwrapperel = $('#rec'+recid+' .t422__textwrapper');
  var t422__borderwidth = 0;
  if (t422__txtel.css("border-top-width") && t422__txtel.css("border-top-width")[1]!='p') {
    t422__borderwidth = + (t422__txtel.css("border-top-width")[0] + t422__txtel.css('border-top-width')[1]);
  }else{if (t422__txtel.css("border-top-width"))
    	t422__borderwidth = +(t422__txtel.css("border-top-width")[0]);
  }
  /* if (t422__imgel.height() < (t422__txtel.height() + t422__borderwidth*2)) {
      t422__imgel.height(t422__txtel.height() + t422__borderwidth*2);
  }else{if ((t422__imgel.height() - t422__borderwidth*2) > t422__txtel.height()) {
        t422__txtel.height(t422__imgel.height() - t422__borderwidth*2);
    }
  } */
  if (t422__imgel.height() < (t422__textwrapperel.outerHeight() + t422__borderwidth*2)) {
      t422__imgel.height(t422__textwrapperel.outerHeight() + t422__borderwidth*2);
  }else{if ((t422__imgel.height() - t422__borderwidth*2) > t422__textwrapperel.outerHeight()) {
        t422__textwrapperel.outerHeight(t422__imgel.height() - t422__borderwidth*2);
    }
  }
}; 
function t425_unifyHeights(recid) {
    var el=$("#rec"+recid);

    el.find('.t425__col').css('height', "auto");
    $('#rec'+recid+' .t425 .t-container').each(function() {
        var t425__highestBox = 0;
        $('.t425__col', this).each(function(){						
			var t425__curcol=$(this);	
			var t425__curcolchild=t425__curcol.find('.t425__col-wrapper');
			if(t425__curcol.height() < t425__curcolchild.height())t425__curcol.height(t425__curcolchild.height());
            if(t425__curcol.height() > t425__highestBox)t425__highestBox = t425__curcol.height();			
        });  
        if($(window).width()>=960){
        	$('.t425__col',this).css('height', t425__highestBox); 
        }else{
	        $('.t425__col',this).css('height', "auto");    
        }
    });
}; 
function t426_unifyHeights(recid) {  
	$('#rec'+recid+' .t426 .t-container').each(function() {        		
        var t426__largestHeight = 0;
        $('.t426__col', this).each(function(){                
        	var t426__curimg=$(this).find('img');		
        	if(t426__curimg.height() > t426__largestHeight)t426__largestHeight = t426__curimg.height();        
        });            
        $('.t426__col', this).each(function(){        	
        	$(this).height(t426__largestHeight);
        });        
	});
};
 
t427_alignMiddle = function(recid) {
	if ($(window).width()>960) {
		var t427__img = $('#rec'+recid+' .t427__img');
		var t427__arrow = $('#rec'+recid+' .t427__arrow');		
		t427__arrow.css('top', (t427__img.height()-t427__arrow.height())/2);
	}
}; 
function t428_unifyHeights(recid) {
    $('#rec'+recid+' .t428 .t-container').each(function() {
        var t428__highestBox = 0;
        $('.t428__col', this).each(function(){
			var t428__curcol=$(this);
			var t428__curcolchild=t428__curcol.find('.t428__col-wrapper');
			if(t428__curcol.height() < t428__curcolchild.height())t428__curcol.height(t428__curcolchild.height());
            if(t428__curcol.height() > t428__highestBox)t428__highestBox = t428__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t428__col',this).css('height', t428__highestBox);
        }else{
	        $('.t428__col',this).css('height', "auto");
        }
    });
}; 
function t431_init(recid) {
    var tableHead = t431__escapeHTML($('#rec' + recid + ' .t431 .t431__data-part1').html() || "");
    var tableBody = t431__escapeHTML($('#rec' + recid + ' .t431 .t431__data-part2').html() || "");

    var tableColSize = $('#rec' + recid + ' .t431 .t431__table').attr("data-table-width");
    var hasTargetBlank = $('#rec' + recid + ' .t431 .t431__table').attr("data-target-blank");
    
    var tHead = t431_parseData(tableHead);
    var tBody = t431_parseData(tableBody);

    var colSize = t431_parseData(tableColSize);

    var maxColNum = t431__findMaxRowLengthInTable(tHead, tBody);
    var colWidth = t431__setColumnsWidth(colSize, maxColNum, recid);
    
    var container = $('#rec' + recid + ' .t431 .t431__table');
    var html = "";

    if (tHead) {
        html += t431__generateTable(tHead, "th", hasTargetBlank, colWidth, maxColNum);
    }
    if (tBody) {
        html += t431__generateTable(tBody, "td", hasTargetBlank, colWidth, maxColNum);
    }

    container.append(html);
}

function t431__findMaxRowLengthInTable(arrayHead, arrayData) {
  var headMaxLength = 0;
  var dataMaxLength = 0;
  if (arrayHead) {
    headMaxLength = t431__findMaxRowLengInArray(arrayHead);
  }
  if (arrayData) {
    dataMaxLength = t431__findMaxRowLengInArray(arrayData);
  }
  if (dataMaxLength > headMaxLength) {
    return dataMaxLength;
  } else {
    return headMaxLength;
  }
}

function t431__escapeHTML(string) {
    var html = string.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
    var result = "";
    var allowedTags = "";
    ['b', 'i', 'u', 'ul', 'li', 'ol', 'br', 'img', 's', 'sub', 'sup', 'span', 'hr', 'pre', 'code', 'mark', 'strong', 'small'].forEach(function(value) {
        allowedTags += ":not(" + value + ")";
    });
    var allowedAttrs = ['alt', 'class', 'title', 'id', 'src', 'style', 'width', 'height', 'data-replace-key'];
    var fakeDOM = document.implementation.createHTMLDocument('fake');

    $.each($.parseHTML(html, fakeDOM) || [], function(i, $el) {
        var el = $($el)[0];

        if(!$($el).is(allowedTags)) {
            if(el.nodeType !== 3 && el.nodeType !== 8) {
                var temp = document.createElement(el.tagName);
                allowedAttrs.forEach(function(value) {
                    if(el.getAttribute(value) !== null) {
                        temp.setAttribute(value, el.getAttribute(value).replace(/javascript:/gi, ''));
                    }
                });
                temp.textContent = el.textContent;
                result += temp.outerHTML;
            } else {
                result += el.textContent;
            }
        }
    });

    return result;
}

function t431__findMaxRowLengInArray(curArray) {
  var maxLength = 0;
  for (var i = 0; i < curArray.length; i++) {
    if (curArray[i].length > maxLength) {
      maxLength = curArray[i].length;
    }
  }
  return maxLength;
}

function t431__setColumnsWidth(colWidth, colsNumber, recid) {
  if (colWidth) {
    return colWidth[0];
  } else {
    var tableWidth = $('#rec' + recid + ' .t431 .t-container .t-col').width();
    return (tableWidth / colsNumber + "px");
  }
}

function t431__generateTable(arrayValues, colTag, hasTargetBlank, colWidth, maxColNumber) {
  var html = "";

  var tag = "";
  if (colTag == "td") {
    tag = "tbody";
  } else {
    tag = "thead";
  }
  html += '<' + tag + ' class="t431__' + tag + '">';

  for (var i = 0; i < arrayValues.length; i++) {
    /*add classes for striped table*/
    if (colTag == "td") {
      if ((i + 1) % 2 > 0) {
        html += '<tr class="t431__oddrow">';
      } else {
        html += '<tr class="t431__evenrow">';
      }
    } else {
      html += '<tr>';
    }

    var addingCols = 0;
    if (arrayValues[i].length < maxColNumber) {
      addingCols = maxColNumber - arrayValues[i].length;
    }

    for (var j = 0; j < (arrayValues[i].length + addingCols); j++) {
      if (arrayValues[i][j]) {
        /*define col width*/
        var curWidth = "";
        if (Array.isArray(colWidth) && colWidth[j]) {
          curWidth = colWidth[j].myText;
        } else {
          curWidth = colWidth;
        }
        
        var ColWithAttr = '';
        
        if (colTag == "td") {
            ColWithAttr = '<td class="t431__td t-text" width="' + curWidth + '">';
        } else {
            ColWithAttr = '<th class="t431__th t-title" width="' + curWidth + '">';
        }


        if (arrayValues[i][j].myHref) {
          var tBlank = "";
          if (hasTargetBlank) {
            tBlank = "target=\"_blank\"";
          }
          /*define link type*/
          var linkWithAttr = "";
          var linkCloseTag = "";
          if (arrayValues[i][j].myHrefType == "link") {
            linkWithAttr = '<a href="' + arrayValues[i][j].myHref + '"' + tBlank + '>';
            linkCloseTag = '</a>';
          } else {
            linkWithAttr = '<div class="t431__btnwrapper"><a href="' + arrayValues[i][j].myHref + '"' + tBlank + ' class="t-btn t-btn_sm"><table style="width:100%; height:100%"><tr><td>';
            linkCloseTag = '</td></tr></table></a></div>';
          }
          html += ColWithAttr + linkWithAttr + arrayValues[i][j].myText + linkCloseTag + '</' + colTag + '>';
        } else {
          html += ColWithAttr + arrayValues[i][j].myText + '</' + colTag + '>';
        }
      } else {
        html += '<' + colTag + ' class="t431__' + colTag + '" width="' + curWidth + '">' + '</' + colTag + '>';
      }
    }
    html += "</tr>";
  }
  html += "</" + tag + ">";

  return html;
}

function t431_parseData(data) {
  if (data !== "" && typeof data != "undefined") {
    data = t431__addBrTag(data);
    var arrayTable = [];
    var arrayRow = [];
    var curItem = { myText: "", myHref: "", myHrefType: "" };
    var hasLink = "";
    var hasLinkWithSpace = "";
    var hasBtn = "";
    var hasBtnWithSpace = "";
    var endLine = "";

    for (var i = 0; i < data.length; i++) {
      /*col end and check of special symbols: «>», «<», «&&#187; and « »*/
      if (data[i] == ";" && !(data.slice(i - 4, i) == "&lt;" || data.slice(i - 4, i) == "&gt;" || data.slice(i - 5, i) == "&amp;" || data.slice(i - 6, i) == "&nbsp;")) {
        arrayRow.push(curItem);
        curItem = { myText: "", myHref: "" };
        hasLink = "";
        hasLinkWithSpace = "";
        hasBtn = "";
        hasBtnWithSpace = "";
      } else {
        if (hasLink == "link=" || hasLinkWithSpace == " link=" || hasBtn == "button=" || hasBtnWithSpace == " button=") {
          if (curItem.myHref === "" && hasLink === "link=") {
            curItem.myText = curItem.myText.slice(0, -5);
            curItem.myHrefType = "link";
          } else {
            if (curItem.myHref === "" && hasLinkWithSpace === " link=") {
              curItem.myText = curItem.myText.slice(0, -6);
              curItem.myHrefType = "link";
            } else {
              if (curItem.myHref === "" && hasBtn === "button=") {
                curItem.myText = curItem.myText.slice(0, -7);
                curItem.myHrefType = "btn";
              } else {
                if (curItem.myHref === "" && hasBtnWithSpace === " button=") {
                  curItem.myText = curItem.myText.slice(0, -8);
                  curItem.myHrefType = "btn";
                }
              }
            }
          }
          curItem.myHref += (data[i]);
        } else {
          curItem.myText += (data[i]);
          hasLink = t431__checkSubstr("link=", hasLink, data[i]);
          hasLinkWithSpace = t431__checkSubstr(" link=", hasLinkWithSpace, data[i]);
          hasBtn = t431__checkSubstr("button=", hasBtn, data[i]);
          hasBtnWithSpace = t431__checkSubstr(" button=", hasBtnWithSpace, data[i]);
        }
        endLine = t431__checkSubstr("<br />", endLine, data[i]);
        if (endLine == "<br />") {
          if (curItem.myHref) {
            curItem.myHref = curItem.myHref.slice(0, -6);
          } else {
            curItem.myText = curItem.myText.slice(0, -6);
          }
          arrayRow.push(curItem);
          arrayTable.push(arrayRow);
          curItem = { myText: "", myHref: "" };
          hasLink = "";
          hasLinkWithSpace = "";
          hasBtn = "";
          hasBtnWithSpace = "";
          arrayRow = [];
        }
      }
    }
    if (arrayRow.length > 0 || curItem.myText !== "") {
      if (curItem !== "") {
        arrayRow.push(curItem);
      }
      arrayTable.push(arrayRow);
    }
  }
  return arrayTable;
}

/* checking a step by step combining of t431__targetSubstr*/
function t431__checkSubstr(targetSubstr, curSubstr, curSymbol) {
  if (!curSubstr && curSymbol == targetSubstr[0]) {
    return curSymbol;
  } else {
    if (curSubstr) {
      for (var i = 0; i < (targetSubstr.length - 1); i++) {
        if (curSubstr[curSubstr.length - 1] == targetSubstr[i] && curSymbol == targetSubstr[i + 1]) {
          return (curSubstr += curSymbol);
        }
      }
    }
  }
}

function t431__addBrTag(oldStringItem) {
  var newStringItem = "";

  for (var i = 0; i < oldStringItem.length; i++) {
    if (oldStringItem[i] == "\n" || oldStringItem[i] == "\r") {
      newStringItem += "<br />";
    } else {
      newStringItem += oldStringItem[i];
    }
  }

  return newStringItem.replace(/&nbsp;/g, ' ');
}

/* backward compatibility. todo: delete t431_createTable */
function t431_createTable(recid,tablehead,tabledata,tablecolsize,hastargetblank,btnstyles,t431__tdstyles,t431__thstyles,t431__oddrowstyles,t431__evenrowstyles){
	var t431__arrayColSize = t431_parseData(tablecolsize);
	var t431__arrayHead = t431_parseData(tablehead);
    var t431__arrayData = t431_parseData(tabledata);

	var t431__maxcolnumber = t431__findMaxRowLengthInTable(t431__arrayHead,t431__arrayData);
	var t431__colWidth = t431__setColumnsWidth(t431__arrayColSize,t431__maxcolnumber,recid);
	if (t431__colWidth[0].myText && t431__colWidth[0].myText[t431__colWidth[0].myText.length - 1] == "%") {
		for (var i=0; i<t431__colWidth.length; i++) {
			t431__colWidth[i].myText = t431__colWidth[i].myText.slice(0,-1);
			t431__colWidth[i].myText += "vw";
		}
	}

	var t431__container = $('#rec'+recid+' .t431 .t-container .t431__table');
	var t431__htmlTable = "";
	if (t431__arrayHead) { t431__htmlTable += t431__generateHtml(recid,t431__arrayHead,"th",hastargetblank,t431__colWidth,btnstyles,t431__thstyles,null,null,t431__maxcolnumber);}
	t431__container.append(t431__htmlTable);
	t431__htmlTable = "";
	if (t431__arrayData) { t431__htmlTable += t431__generateHtml(recid,t431__arrayData,"td",hastargetblank,t431__colWidth,btnstyles,t431__tdstyles,t431__oddrowstyles,t431__evenrowstyles,t431__maxcolnumber);}
    t431__container.append(t431__htmlTable);
}

/* backward compatibility. todo: delete t431__generateHtml */
function t431__generateHtml(recid,arrayValues,coltag,hastargetblank,colWidth,btnstyles,colstyles,oddrowstyles,evenrowstyles,maxcolnumber) {
	var t431__htmlpart = "";

	if (coltag == "td") {
		var t431__theadorbodytag = "tbody";
	} else {
		var t431__theadorbodytag = "thead";
	}
	t431__htmlpart += '<' + t431__theadorbodytag + ' class="t431__' + t431__theadorbodytag + '">';
	
	var t431__firstbodyrowstyle = "";

	/*remove forst body row top border, if table head has bottom border*/
	if($('#rec'+recid+' .t431 .t-container .t431__thead th').length>0 && $('#rec'+recid+' .t431 .t-container .t431__thead th').css("border-bottom-width")[0]!="0") {
		t431__firstbodyrowstyle = "border-top: 0 !important;";
	}

	for (var i=0; i<arrayValues.length; i++) {

		/*add classes for striped table*/
		if (coltag == "td") {
			if ((i + 1) % 2 > 0) {
				t431__htmlpart += "<tr class=\"t431__oddrow\"" + "style=\"" + oddrowstyles + "\">";
			} else { t431__htmlpart += "<tr class=\"t431__evenrow\"" + "style=\"" + evenrowstyles + "\">";}
		} else {
			t431__htmlpart += "<tr>";
		}

		var t431__addingcols = 0;
		if (arrayValues[i].length<maxcolnumber) {
			t431__addingcols = maxcolnumber - arrayValues[i].length;
        }
		for (var j=0; j<(arrayValues[i].length + t431__addingcols); j++) {
			if (arrayValues[i][j]) {
				/*define col width*/
                if(Array.isArray(colWidth) && colWidth[j]) {
                    var t431__curWidth = colWidth[j].myText;
                } else { var t431__curWidth = colWidth;}

				 if (i==0 && coltag=="td") {
					var t431__colwithattr = "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + t431__firstbodyrowstyle + "\">";
				} else {
					var t431__colwithattr = "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + "\">";
				}

                if (arrayValues[i][j].myHref) {
                    var t431__tblank = "";
                    if (hastargetblank) {var t431__tblank = "target=\"_blank\"";}
                    /*define link type*/
                    if (arrayValues[i][j].myHrefType == "link") {
                        var t431__linkwithattr = "<a href=\"" + arrayValues[i][j].myHref + "\"" + t431__tblank + ">";
                        var t431__linkclosetag = "</a>";
                    } else {
                        var t431__linkwithattr = "<div class=\"t431__btnwrapper\"><a href=\"" + arrayValues[i][j].myHref + "\"" + t431__tblank + " class=\"t-btn t-btn_sm\" style=\"" + btnstyles + "\"><table style=\"width:100%; height:100%;\"><tr><td>";
                        var t431__linkclosetag = "</td></tr></table></a></div>";
                    }
                    t431__htmlpart += t431__colwithattr + t431__linkwithattr + arrayValues[i][j].myText + t431__linkclosetag + "</" + coltag + ">";
                } else {
                    t431__htmlpart += t431__colwithattr + arrayValues[i][j].myText + "</" + coltag + ">";
                }
			} else {
					t431__htmlpart += "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + "\">" + "</" + coltag + ">";
			}
		}
		t431__htmlpart += "</tr>";
	}
	t431__htmlpart += "</" + t431__theadorbodytag + ">";
	return t431__htmlpart;
} 
function t433_init(recid) {
    var el = $('#rec' + recid);
    $('#separateMap' + recid).css("height", "auto");
    t433_setMapHeight(recid);

    el.find('.t433').bind('displayChanged', function () {
        t433_setMapHeight(recid);
    });

    $(window).bind('resize', t_throttle(function () {
        t433_setMapHeight(recid);
    }));
}


function t433_setMapHeight(recid) {
    var el = $('#rec' + recid);
    var map = el.find('.t433__map');
    var textwrapper = el.find('.t433__col_text').height();
    map.css('height', textwrapper);
    el.find('.t-map').css('height', textwrapper).trigger('sizechange');
} 
function t441__createPieChart(recid,data1,data2,data3,data4,sectorcolor,piebgcolor,bgcolor,blocksnumber,diagramwidth,diameter) {		
	if(diameter>300 || diameter=="" || diameter<100) {
		if(diameter=="") {var t441__radius = 100; diameter = 200;}
		if(diameter>300) {var t441__radius = 150; diameter = 300;}
        if(diameter<100) {var t441__radius = 50; diameter = 100;}
	} else {
		var t441__radius = diameter/2;
	}

	if(diagramwidth=="") { diagramwidth = 10;}
    if(diagramwidth>t441__radius) { diagramwidth = 10;}
	if(diagramwidth<1) { diagramwidth = 1;}
	                    
	//check Retina
	if(window.devicePixelRatio >= 2) {
		var t441__oldsize = diameter;                       
        t441__radius = t441__radius*2;
		diameter = diameter*2;
		diagramwidth = diagramwidth*2;
	}                       
                       
	//border id drawing at the edge of circle, so we need correct the radius to fin into canvas                        
	var t441__correction = +diagramwidth/2;

    var t441__dataarray = [data1,data2,data3,data4];    
    for (var i=0; i<4; i++) {
        if (t441__dataarray[i]!="" && blocksnumber>i) {
            var t441__canvas = document.querySelector('#rec'+recid+' .t441__pie'+(i+1));
			t441__canvas.setAttribute("width", diameter);
			t441__canvas.setAttribute("height", diameter);						
            var t441__context = t441__canvas.getContext("2d");
			if(window.devicePixelRatio >= 2) {								
				t441__canvas.style.width = t441__oldsize + "px";
				t441__canvas.style.height = t441__oldsize + "px";
			}			
			for (var j = 0; j < 2; j++) {				                               
				if(j==1 && t441__dataarray[i]==0) {continue;}                                  
				//0 - bg, 1 - percent sector                                  
                if (j==0) {                    					                                  
					t441__context.strokeStyle = piebgcolor;
					var t441__angle = Math.PI*2;           
					t441__context.lineWidth = diagramwidth-1;                                  
                } else {
                    t441__context.strokeStyle = sectorcolor;
					var t441__angle = Math.PI*2*(t441__dataarray[i]/100);
					t441__context.lineWidth = diagramwidth;                                  
				}
                t441__context.beginPath();								
				t441__context.lineCap="round";
				t441__context.moveTo(diameter-t441__correction,t441__radius);
				t441__context.arc(t441__radius, t441__radius, t441__radius-t441__correction, 0, t441__angle, false);				
				t441__context.stroke();				
			}			
		}
	}
} 
function t446_init(recid) {
    var el = $('#rec' + recid);
    var mobile = el.find('.t446__mobile');
    var fixedBlock = mobile.css('position') === 'fixed' && mobile.css('display') === 'block';

    setTimeout(function() {
        el.find('.t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)').on('click', function () {
            if ($(this).is(".t-menu__link-item.tooltipstered, .t-menu__link-item.t-menusub__target-link, .t-menu__link-item.t794__tm-link, .t-menu__link-item.t966__tm-link, .t-menu__link-item.t978__tm-link")) { return; }
            if (fixedBlock) {
                mobile.trigger('click');
            }
        });

        el.find('.t-menusub__link-item').on('click', function () {
            if (fixedBlock) {
                mobile.trigger('click');
            }
        });
    }, 500);
}

function t446_setLogoPadding(recid){
	if($(window).width()>980){			  
        var t446__menu = $('#rec'+recid+' .t446');
        var t446__logo=t446__menu.find('.t446__logowrapper');	  
        var t446__leftpart=t446__menu.find('.t446__leftwrapper');
        var t446__rightpart=t446__menu.find('.t446__rightwrapper');
        t446__leftpart.css("padding-right",t446__logo.width()/2+50);
        t446__rightpart.css("padding-left",t446__logo.width()/2+50);			        
	}
}

function t446_checkOverflow(recid, menuheight){    
  var t446__menu = $('#rec'+recid+' .t446');
  var t446__rightwr=t446__menu.find('.t446__rightwrapper');	  
  var t446__rightmenuwr=t446__rightwr.find('.t446__rightmenuwrapper');
  var t446__rightadditionalwr=t446__rightwr.find('.t446__additionalwrapper');
  var t446__burgeroverflow=t446__rightwr.find('.t446__burgerwrapper_overflow');  
  var t446__burgerwithoutoverflow=t446__rightwr.find('.t446__burgerwrapper_withoutoverflow');      

  if (menuheight>0) {var t446__height = menuheight;} else {var t446__height = 80;}  

  if($(window).width()>980 && (t446__rightmenuwr.width() + t446__rightadditionalwr.width()) > t446__rightwr.width()){    	  	  	  	  	  	  
		t446__menu.css("height", t446__height*2);
		t446__rightadditionalwr.css("float","right");

		t446__burgeroverflow.css("display","table-cell");
		t446__burgerwithoutoverflow.css("display","none");				
  } else {
		if(t446__menu.height()>t446__height) {t446__menu.css("height",t446__height);}
		if(t446__rightadditionalwr.css("float")=="right") {t446__rightadditionalwr.css("float","none");}

		t446__burgeroverflow.css("display","none");
		t446__burgerwithoutoverflow.css("display","table-cell");		
  }
}

function t446_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t446__list_item a[href='"+url+"']").addClass("t-active");
  $(".t446__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t446__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t446__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t446__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t446__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t446_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t446_navLinks = $("#rec" + recid + " .t446__list_item a:not(.tooltipstered)[href*='#']");
        if (t446_navLinks.length > 0) {
            t446_catchScroll(t446_navLinks);
        }
    }
}

function t446_catchScroll(t446_navLinks) {
    var t446_clickedSectionId = null,
        t446_sections = new Array(),
        t446_sectionIdTonavigationLink = [],
        t446_interval = 100,
        t446_lastCall, t446_timeoutId;
    t446_navLinks = $(t446_navLinks.get().reverse());
    t446_navLinks.each(function() {
        var t446_cursection = t446_getSectionByHref($(this));
        if (typeof t446_cursection.attr("id") != "undefined") {
            t446_sections.push(t446_cursection);
        }
        t446_sectionIdTonavigationLink[t446_cursection.attr("id")] = $(this);
    });
		t446_updateSectionsOffsets(t446_sections);
    t446_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t446_updateSectionsOffsets(t446_sections);}, 200));
		$('.t446').bind('displayChanged',function(){t446_updateSectionsOffsets(t446_sections);});
		setInterval(function(){t446_updateSectionsOffsets(t446_sections);},5000);
    t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);

    t446_navLinks.click(function() {
        var t446_clickedSection = t446_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t446_clickedSection.attr("id") != "undefined") {
            t446_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t446_clickedSectionId = t446_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t446_now = new Date().getTime();
        if (t446_lastCall && t446_now < (t446_lastCall + t446_interval)) {
            clearTimeout(t446_timeoutId);
            t446_timeoutId = setTimeout(function() {
                t446_lastCall = t446_now;
                t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);
            }, t446_interval - (t446_now - t446_lastCall));
        } else {
            t446_lastCall = t446_now;
            t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);
        }
    });
}


function t446_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t446_curSection = $(this);
		t446_curSection.attr("data-offset-top",t446_curSection.offset().top);
	});
}


function t446_getSectionByHref(curlink) {
    var t446_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t446_curLinkValue[0]=='/') { t446_curLinkValue = t446_curLinkValue.substring(1); }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t446_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t446_curLinkValue.substring(1) + "']");
    }
}

function t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) {
    var t446_scrollPosition = $(window).scrollTop(),
        t446_valueToReturn = t446_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t446_sections.length != 0 && t446_clickedSectionId == null && t446_sections[t446_sections.length-1].attr("data-offset-top") > (t446_scrollPosition + 300)){
      t446_navLinks.removeClass('t-active');
      return null;
    }

    $(t446_sections).each(function(e) {
        var t446_curSection = $(this),
            t446_sectionTop = t446_curSection.attr("data-offset-top"),
            t446_id = t446_curSection.attr('id'),
            t446_navLink = t446_sectionIdTonavigationLink[t446_id];
        if (((t446_scrollPosition + 300) >= t446_sectionTop) || (t446_sections[0].attr("id") == t446_id && t446_scrollPosition >= $(document).height() - $(window).height())) {
            if (t446_clickedSectionId == null && !t446_navLink.hasClass('t-active')) {
                t446_navLinks.removeClass('t-active');
                t446_navLink.addClass('t-active');
                t446_valueToReturn = null;
            } else {
                if (t446_clickedSectionId != null && t446_id == t446_clickedSectionId) {
                    t446_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t446_valueToReturn;
}

function t446_setPath(){
}

function t446_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t446").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t446").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t446_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t446").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t446_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t446").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t446_createMobileMenu(recid) {
    var window_width = $(window).width(),
        el = $("#rec" + recid),
        menu = el.find(".t446"),
        burger = el.find(".t446__mobile");

    if (menu.hasClass('t446__mobile_burgerhook')) {
        burger.find('.t446__mobile_burger').wrap('<a href="#menuopen"></a>');
    } else {
        burger.click(function (e) {
            menu.fadeToggle(300);
            $(this).toggleClass("t446_opened");
        });
    }

    $(window).bind('resize', t_throttle(function () {
        window_width = $(window).width();
        if (window_width > 980) {
            menu.fadeIn(0);
        }
    }, 200));
    
    /* Fix for clicking anchor links on mobile. 
    Hide menu on click as expected */
    el.find('.t-menu__link-item').on('click', function () {
        if (!$(this).hasClass('t966__tm-link') && !$(this).hasClass('t978__tm-link')) {
            t446_hideMenuOnMobile($(this), el);   
        }
    });
    
    el.find('.t446__logowrapper2 a').on('click', function () {
        t446_hideMenuOnMobile($(this), el);
    });
}


function t446_hideMenuOnMobile($this, el) {
    if ($(window).width() < 960) {
        var url = $this.attr('href').trim();
        var menu = el.find('.t446');
        var burger = el.find('.t446__mobile');
    
        if (url.length && url[0] === '#') {
            burger.removeClass('t446_opened');
            if (menu.is('.t446__positionabsolute')) {
                menu.fadeOut(0);
            } else {
                menu.fadeOut(300);
            }
            return true;
        }
    }
} 
function t448_setHeight(recid) {
  var el=$("#rec"+recid);
  var coverheight = el.find(".t-cover").height();
  var coverwrapper = el.find(".t448-cover__wrapper");
  var textheight = el.find(".t448__wrapper").innerHeight();
  var imgheight = el.find(".t448__screenshot").height();
  var height = textheight + imgheight;
  var newheight = coverheight - imgheight;
  var container = el.find(".t448");
  var attr = container.attr("data-crop-image");

  if (typeof attr !== typeof undefined && attr !== false) {
    container.addClass("t448__no-overflow");
    container.css("height", coverwrapper.height());
  }

  if (coverheight > height) {
    el.addClass("t448__stretched");
    coverwrapper.css("height",newheight);
    if (typeof attr !== typeof undefined && attr !== false) {
      container.removeClass("t448__no-overflow");
      container.css("height", "");
    }
  } else {
    el.removeClass("t448__stretched");
    coverwrapper.css("height","");
  }
} 
function t449_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t449").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.hasClass('t449__beforeready')){
                              el.finish(); 
                              el.removeClass("t449__beforeready");
                          }
                        }else{
                          el.stop();
                          el.addClass("t449__beforeready");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(!el.hasClass('t449__beforeready')){
                              el.finish();
                              el.addClass("t449__beforeready");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.removeClass("t449__beforeready");
                              }
                          }else{
                              el.stop();
                              el.removeClass("t449__beforeready");
                          }
                        }
                }
         });
    }
} 
function t450_showMenu(recid) {
    var el = $('#rec' + recid);
    $('body').addClass('t450__body_menushowed');
    el.find('.t450').addClass('t450__menu_show');
    el.find('.t450__overlay').addClass('t450__menu_show');
    $('.t450').bind('clickedAnchorInTooltipMenu', function () {
        t450_closeMenu();
    });
    el.find('.t450__overlay, .t450__close, a[href*="#"]').click(function () {
        var url = $(this).attr('href');
        if (typeof url != 'undefined' && url != '' && (url.substring(0, 7) == '#price:' || url.substring(0, 9) == '#submenu:')) { return; }
        if ($(this).is('.tooltipstered, .t-menusub__target-link, .t794__tm-link, .t966__tm-link, .t978__tm-link')) { return; }
        t450_closeMenu();
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('body').removeClass('t390__body_popupshowed');
            $('.t390').removeClass('t390__popup_show');
        }
    });

    el.find('.t-menu__link-item').each(function () {
        var $this = $(this);

        /* me601a */
        if ($this.hasClass('t966__tm-link')) {
            $this.on('click', function () {
                setTimeout(function () {
                    t450_checkSize(recid);
                }, 300);
            });
        }

        /* me601b */
        if ($this.hasClass('t978__tm-link')) {
            $this.on('click', function () {
                el.find(".t978__menu-link").on('click', function () {
                    t450_checkSize(recid);
                });
            });
        }
    });

    t450_highlight();
}

function t450_closeMenu() {
    $('body').removeClass('t450__body_menushowed');
    $('.t450').removeClass('t450__menu_show');
    $('.t450__overlay').removeClass('t450__menu_show');
}

function t450_checkSize(recid) {
    var el = $('#rec' + recid).find('.t450');
    var windowheight = $(window).height() - 80;
    setTimeout(function () {
        var contentheight = el.find(".t450__top").height() + el.find(".t450__rightside").height();
        if (contentheight > windowheight) {
            el.addClass('t450__overflowed');
            el.find(".t450__container").css('height', 'auto');
        } else {
            el.removeClass('t450__overflowed');
            el.find(".t450__container").css('height', '');
        }
    }); /* css transition is completed */
}

function t450_appearMenu(recid) {
    var el = $('#rec' + recid);
    var burger = el.find(".t450__burger_container");
    burger.each(function () {
        var el = $(this);
        var appearoffset = el.attr("data-appearoffset");
        var hideoffset = el.attr("data-hideoffset");
        if (appearoffset != "") {
            if (appearoffset.indexOf('vh') > -1) {
                appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
            }

            appearoffset = parseInt(appearoffset, 10);

            if ($(window).scrollTop() >= appearoffset) {
                if (el.hasClass('t450__beforeready')) {
                    el.finish();
                    el.removeClass("t450__beforeready");
                }
            } else {
                el.stop();
                el.addClass("t450__beforeready");
            }
        }

        if (hideoffset != "") {
            if (hideoffset.indexOf('vh') > -1) {
                hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
            }

            hideoffset = parseInt(hideoffset, 10);

            if ($(window).scrollTop() + $(window).height() >= $(document).height() - hideoffset) {
                if (!el.hasClass('t450__beforeready')) {
                    el.finish();
                    el.addClass("t450__beforeready");
                }
            } else {
                if (appearoffset != "") {
                    if ($(window).scrollTop() >= appearoffset) {
                        el.stop();
                        el.removeClass("t450__beforeready");
                    }
                } else {
                    el.stop();
                    el.removeClass("t450__beforeready");
                }
            }
        }
    });
}

function t450_initMenu(recid) {
    var el = $('#rec' + recid).find('.t450');
    var hook = el.attr('data-tooltip-hook');
    if (hook !== '') {
        $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
            t450_closeMenu();
            t450_showMenu(recid);
            t450_checkSize(recid);
            e.preventDefault();
        });
    }
    $('#rec' + recid).find('.t450__burger_container').click(function (e) {
        t450_closeMenu();
        t450_showMenu(recid);
        t450_checkSize(recid);
    });

    if (window.isMobile) {
        $('#rec' + recid).find('.t-menu__link-item').each(function () {
            var $this = $(this);
            if ($this.hasClass('t450__link-item_submenu')) {
                $this.on('click', function () {
                    t450_checkSize(recid);
                });
            }
        });
    }

    $(window).on('resize', function () {
        t450_checkSize(recid);
    });
}

function t450_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    var hash = window.location.hash;
    if (url.substr(url.length - 1) == "/") {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == "/") {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == "/") {
        pathname = pathname.slice(1);
    }

    if (pathname == "") {
        pathname = "/";
    }

    $(".t450__menu a").removeClass("t-active");
    $(".t450__menu a[href='" + url + "']").addClass("t-active");
    $(".t450__menu a[href='" + url + "/']").addClass("t-active");
    $(".t450__menu a[href='" + pathname + "']").addClass("t-active");
    $(".t450__menu a[href='/" + pathname + "']").addClass("t-active");
    $(".t450__menu a[href='" + pathname + "/']").addClass("t-active");
    $(".t450__menu a[href='/" + pathname + "/']").addClass("t-active");

    if (hash !== "") {
        $(".t450__menu a[href='" + hash + "']").addClass("t-active");
    }
} 
function t451_initMenu(recid) {
    var el = $('#rec' + recid);
    var obj = el.find('.t451__burger');

    obj.click(function (e) {
        t451_closeMenu();
        t451_showMenu(recid);
        t451_checkSize(recid);
        e.preventDefault();
    });

    el.find('.t451').bind('clickedAnchorInTooltipMenu', function () {
        t451_closeMenu();
    });

    if (window.isMobile) {
        $('#rec' + recid).find('.t-menu__link-item').each(function () {
            var $this = $(this);
            if ($this.hasClass('t451__link-item_submenu')) {
                $this.on('click', function () {
                    t451_checkSize(recid);
                    setTimeout(function () {
                        t451_checkSize(recid);
                    }, 1);
                });
            }
        });
    }
    
    $(window).on('resize', function() {
        t451_checkSize(recid);
    });

    var navLinks = el.find('.t451 a.t-menusub__link-item:not(.tooltipstered)[href*="#"]');
    if (navLinks.length > 0) {
        t451_catchScroll(navLinks);
    }

    t451_highlight();
}

function t451_showMenu(recid) {
    var el = $('#rec' + recid);
    $('body').addClass('t451__body_menushowed');
    el.find('.t451m').addClass('t451m__menu_show');
    el.find('.t451m__overlay').addClass('t451m__menu_show');
    el.find('.t451m__overlay, .t451m__close, a[href*="#"]').click(function () {
        if ($(this).is('.tooltipstered, .t794__tm-link, .t978__tm-link, .t966__tm-link')) { return; }
        t451_closeMenu();
    });
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $('body').removeClass('t451__body_menushowed');
            $('.t451m').removeClass('t451m__menu_show');
            $('.t451m__overlay').removeClass('t451m__menu_show');
        }
    });
    el.find('.t-menu__link-item').each(function() {
        var $this = $(this);

        /* me601a */
        if ($this.hasClass('t966__tm-link')) {
            $this.on('click', function () {
                setTimeout(function () {
                    t451_checkSize(recid);
                }, 305);
            });
        }
        
        /* me601b */
        if ($this.hasClass('t978__tm-link')) {
            $this.on('click', function () {
                el.find(".t978__menu-link").on('click', function() {
                    t451_checkSize(recid);
                });
            });
        }
    });
}

function t451_closeMenu() {
    $('body').removeClass('t451__body_menushowed');
    $('.t451m').removeClass('t451m__menu_show');
    $('.t451m__overlay').removeClass('t451m__menu_show');
}

function t451_checkSize(recid) {
    var el = $('#rec' + recid).find('.t451m');
    var windowheight = $(window).height() - 80;
    var contentheight = el.find('.t451m__top').height() + el.find('.t451m__rightside').height();
    if (contentheight > windowheight) {
        el.addClass('t451m__overflowed');
        el.find('.t451m__container').css('height', 'auto');
    } else {
        el.removeClass('t451m__overflowed');
        el.find('.t451m__container').css('height', '');
    }
}

function t451_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == '/') { url = url.slice(0, -1); }
    if (pathname.substr(pathname.length - 1) == '/') { pathname = pathname.slice(0, -1); }
    if (pathname.charAt(0) == '/') { pathname = pathname.slice(1); }
    if (pathname == '') { pathname = '/'; }
    $('.t451m__menu a[href="' + url + '"]').addClass('t-active');
    $('.t451m__menu a[href="' + url + '/"]').addClass('t-active');
    $('.t451m__menu a[href="' + pathname + '"]').addClass('t-active');
    $('.t451m__menu a[href="/' + pathname + '"]').addClass('t-active');
    $('.t451m__menu a[href="' + pathname + '/"]').addClass('t-active');
    $('.t451m__menu a[href="/' + pathname + '/"]').addClass('t-active');
}

function t451_changeBgOpacityMenu(recid) {
    var window_width = $(window).width();
    var record = $('#rec' + recid);
    record.find('.t451__container__bg').each(function () {
        var el = $(this);
        var bgcolor = el.attr('data-bgcolor-rgba');
        var bgcolor_afterscroll = el.attr('data-bgcolor-rgba-afterscroll');
        var bgopacity = el.attr('data-bgopacity');
        var bgopacity_afterscroll = el.attr('data-bgopacity2');
        var menu_shadow = el.attr('data-menu-shadow');
        if ($(window).scrollTop() > 20) {
            el.css('background-color', bgcolor_afterscroll);
            if (bgopacity_afterscroll != '0' && bgopacity_afterscroll != '0.0') {
                el.css('box-shadow', menu_shadow);
            } else {
                el.css('box-shadow', 'none');
            }
        } else {
            el.css('background-color', bgcolor);
            if (bgopacity != '0' && bgopacity != '0.0') {
                el.css('box-shadow', menu_shadow);
            } else {
                el.css('box-shadow', 'none');
            }
        }
    });
}

function t451_appearMenu(recid) {
    var window_width = $(window).width();
    var record = $('#rec' + recid);
    record.find('.t451__panel').each(function () {
        var el = $(this);
        var appearoffset = el.attr('data-appearoffset');
        if (appearoffset != '') {
            if (appearoffset.indexOf('vh') > -1) {
                appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
            }

            appearoffset = parseInt(appearoffset, 10);

            if ($(window).scrollTop() >= appearoffset) {
                if (el.hasClass('t451__beforeready')) {
                    el.removeClass('t451__beforeready');
                }
            } else {
                el.addClass('t451__beforeready');
            }
        }
    });

}

function t451_catchScroll(navLinks) {
    var clickedSectionId = null;
    var sections = new Array();
    var sectionIdTonavigationLink = [];
    var interval = 100;
    var lastCall;
    var timeoutId;

    navLinks = $(navLinks.get().reverse());
    navLinks.each(function () {
        var cursection = t451_getSectionByHref($(this));
        if (typeof cursection.attr('id') != 'undefined') {
            sections.push(cursection);
        }
        sectionIdTonavigationLink[cursection.attr('id')] = $(this);
    });
    $(window).bind('resize', t_throttle(function () {
        t451_updateSectionsOffsets(sections);
    }, 200));
    $('.t451').bind('displayChanged', function () {
        t451_updateSectionsOffsets(sections);
    });
    setInterval(function () {
        t451_updateSectionsOffsets(sections);
    }, 5000);
    setTimeout(function () {
        t451_updateSectionsOffsets(sections);
        t451_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
    }, 1000);
    navLinks.click(function () {
        if (!$(this).hasClass('tooltipstered')) {
            navLinks.removeClass('t-active');
            sectionIdTonavigationLink[t451_getSectionByHref($(this)).attr('id')].addClass('t-active');
            clickedSectionId = t451_getSectionByHref($(this)).attr('id');
        }
    });
    $(window).scroll(function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval)) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                clickedSectionId = t451_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
            }, interval - (now - lastCall));
        } else {
            lastCall = now;
            clickedSectionId = t451_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
        }
    });
}

function t451_updateSectionsOffsets(sections) {
    $(sections).each(function () {
        var curSection = $(this);
        curSection.attr('data-offset-top', curSection.offset().top);
    });
}

function t451_getSectionByHref(curlink) {
    var curLinkValue = curlink.attr('href').replace(/\s+/g, '');
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + curLinkValue.substring(1) + "']");
    }
}

function t451_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId) {
    var scrollPosition = $(window).scrollTop();
    var valueToReturn = clickedSectionId;

    if (sections.length != 0 && clickedSectionId == null && sections[sections.length - 1].attr('data-offset-top') > (scrollPosition + 300)) {
        navLinks.removeClass('t-active');
        return null;
    }

    $(sections).each(function () {
        var curSection = $(this);
        var sectionTop = curSection.attr('data-offset-top');
        var id = curSection.attr('id');
        var navLink = sectionIdTonavigationLink[id];

        if (((scrollPosition + 300) >= sectionTop) || (sections[0].attr('id') == id && scrollPosition >= $(document).height() - $(window).height())) {
            if (clickedSectionId == null && !navLink.hasClass('t-active')) {
                navLinks.removeClass('t-active');
                navLink.addClass('t-active');
                valueToReturn = null;
            } else {
                if (clickedSectionId != null && id == clickedSectionId) {
                    valueToReturn = null;
                }
            }
            return !1;
        }
    });
    return valueToReturn;
} 
function t452_scrollToTop(){
  $('html, body').animate({scrollTop: 0}, 700);								
}	  
function t453_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t453__item a[href='"+url+"']").addClass("t-active");
  $(".t453__item a[href='"+url+"/']").addClass("t-active");
  $(".t453__item a[href='"+pathname+"']").addClass("t-active");
  $(".t453__item a[href='/"+pathname+"']").addClass("t-active");
  $(".t453__item a[href='"+pathname+"/']").addClass("t-active");
  $(".t453__item a[href='/"+pathname+"/']").addClass("t-active");
}   

function t453_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t453_navLinks = $("#rec"+recid+" .t453__item a:not(.tooltipstered)[href*='#']");
      if (t453_navLinks.length>0){
      	t453_catchScroll(t453_navLinks);
      };
	}
}

function t453_catchScroll(t453_navLinks) {
    var t453_clickedSectionId = null,
      t453_sections = new Array(),
      t453_sectionIdTonavigationLink = {},
      t453_interval = 100,
      t453_lastCall,
      t453_timeoutId,
	  t453_offsetTop = $(".t453").attr("data-offset-top");
	if (typeof t453_offsetTop == "undefined") { t453_offsetTop = 0; }	
	t453_navLinks.each(function(){
		var t453_cursection = t453_getSectionByHref($(this));
		if (typeof t453_cursection.attr("id") != "undefined") { t453_sections.push(t453_cursection); }
		t453_sectionIdTonavigationLink[t453_cursection.attr("id")] = $(this);
	});

	t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop);
	t453_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t453_navLinks.removeClass('t-active');	
          t453_sectionIdTonavigationLink[t453_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t453_clickedSectionId = t453_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t453_now = new Date().getTime();
		if (t453_lastCall && t453_now < (t453_lastCall + t453_interval) ) {
				clearTimeout(t453_timeoutId);
				t453_timeoutId = setTimeout(function () {
						t453_lastCall = t453_now;
						t453_clickedSectionId = t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop);
				}, t453_interval - (t453_now - t453_lastCall) );
		} else {
				t453_lastCall = t453_now;
				t453_clickedSectionId = t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop);
		}
	});
}

function t453_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,offsetTop) {	                                                      
	var t453_scrollPosition = $(window).scrollTop(),
		t453_valueToReturn = t453_clickedSectionId;
	$(t453_sections).each(function(e) {
			var t453_curSection = $(this),
					t453_sectionTop = t453_curSection.offset().top,
					t453_id = t453_curSection.attr('id'),
					t453_navLink = t453_sectionIdTonavigationLink[t453_id];
			if (t453_scrollPosition >= (t453_sectionTop - offsetTop) || (t453_sections[0].attr("id") == t453_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				
				if (t453_clickedSectionId == null && !t453_navLink.hasClass('t-active')) {
					t453_navLinks.removeClass('t-active');
					t453_navLink.addClass('t-active');
					t453_valueToReturn = null;
				} else {
					if (t453_clickedSectionId != null && t453_id == t453_clickedSectionId) {
						t453_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t453_valueToReturn;
}

function t453_appearMenu(recid) {
      var window_width=$(window).width();
      var record = $("#rec"+recid);
           record.find(".t453").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");

                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.hasClass('t453__beforeready')){
                                el.removeClass('t453__beforeready');
                            }
                          }else{
                            el.addClass('t453__beforeready');
                          }
                  }
           });

} 
function t454_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t454__list_item a[href='"+url+"']").addClass("t-active");
  $(".t454__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t454__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t454__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t454__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t454__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t454_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t454_navLinks = $("#rec" + recid + " .t454__list_item a:not(.tooltipstered)[href*='#']");
        if (t454_navLinks.length > 0) {
            setTimeout(function(){
                t454_catchScroll(t454_navLinks);
            }, 500);
        }
    }
}

function t454_catchScroll(t454_navLinks) {
    var t454_clickedSectionId = null,
        t454_sections = new Array(),
        t454_sectionIdTonavigationLink = [],
        t454_interval = 100,
        t454_lastCall, t454_timeoutId;
    t454_navLinks = $(t454_navLinks.get().reverse());
    t454_navLinks.each(function() {
        var t454_cursection = t454_getSectionByHref($(this));
        if (typeof t454_cursection.attr("id") != "undefined") {
            t454_sections.push(t454_cursection);
        }
        t454_sectionIdTonavigationLink[t454_cursection.attr("id")] = $(this);
    });
		t454_updateSectionsOffsets(t454_sections);
		$(window).bind('resize', t_throttle(function(){t454_updateSectionsOffsets(t454_sections);}, 200));
		$('.t454').bind('displayChanged',function(){t454_updateSectionsOffsets(t454_sections);});
		setInterval(function(){t454_updateSectionsOffsets(t454_sections);},5000);
    t454_highlightNavLinks(t454_navLinks, t454_sections, t454_sectionIdTonavigationLink, t454_clickedSectionId);

    t454_navLinks.click(function() {
        var clickedSection = t454_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof clickedSection.attr("id") != "undefined") {
            t454_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t454_clickedSectionId = t454_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t454_now = new Date().getTime();
        if (t454_lastCall && t454_now < (t454_lastCall + t454_interval)) {
            clearTimeout(t454_timeoutId);
            t454_timeoutId = setTimeout(function() {
                t454_lastCall = t454_now;
                t454_clickedSectionId = t454_highlightNavLinks(t454_navLinks, t454_sections, t454_sectionIdTonavigationLink, t454_clickedSectionId);
            }, t454_interval - (t454_now - t454_lastCall));
        } else {
            t454_lastCall = t454_now;
            t454_clickedSectionId = t454_highlightNavLinks(t454_navLinks, t454_sections, t454_sectionIdTonavigationLink, t454_clickedSectionId);
        }
    });
}


function t454_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t454_curSection = $(this);
		t454_curSection.attr("data-offset-top",t454_curSection.offset().top);
	});
}


function t454_getSectionByHref(curlink) {
    var curLinkValue = curlink.attr('href').replace(/\s+/g, '').replace(/.*#/, '');
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + curLinkValue + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + curLinkValue + "']");
    }
}


function t454_highlightNavLinks(t454_navLinks, t454_sections, t454_sectionIdTonavigationLink, t454_clickedSectionId) {
    var t454_scrollPosition = $(window).scrollTop(),
        t454_valueToReturn = t454_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t454_sections.length != 0 && t454_clickedSectionId == null && t454_sections[t454_sections.length-1].attr("data-offset-top") > (t454_scrollPosition + 300)){
      t454_navLinks.removeClass('t-active');
      return null;
    }

    $(t454_sections).each(function(e) {
        var t454_curSection = $(this),
            t454_sectionTop = t454_curSection.attr("data-offset-top"),
            t454_id = t454_curSection.attr('id'),
            t454_navLink = t454_sectionIdTonavigationLink[t454_id];
        if (((t454_scrollPosition + 300) >= t454_sectionTop) || (t454_sections[0].attr("id") == t454_id && t454_scrollPosition >= $(document).height() - $(window).height())) {
            if (t454_clickedSectionId == null && !t454_navLink.hasClass('t-active')) {
                t454_navLinks.removeClass('t-active');
                t454_navLink.addClass('t-active');
                t454_valueToReturn = null;
            } else {
                if (t454_clickedSectionId != null && t454_id == t454_clickedSectionId) {
                    t454_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t454_valueToReturn;
}

function t454_setPath(){
}

function t454_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t454").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t454").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t454_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t454").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-80px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t454_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t454").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t454_createMobileMenu(recid) {
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t454"),
      burger=el.find(".t454__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t454_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}

function t454_setLogoPadding(recid) {
	if($(window).width()>980){
        var t454__menu = $('#rec'+recid+' .t454');
        var t454__logo=t454__menu.find('.t454__logowrapper');
        var t454__leftpart=t454__menu.find('.t454__leftwrapper');
        var t454__rightpart=t454__menu.find('.t454__rightwrapper');
        t454__leftpart.css("padding-right",t454__logo.width()/2+50);
        t454__rightpart.css("padding-left",t454__logo.width()/2+50);
	}
} 
function t456_setListMagin(recid, imglogo) {
    if ($(window).width() > 980) {
        var t456__menu = $('#rec' + recid + ' .t456');
        var t456__leftpart = t456__menu.find('.t456__leftwrapper');
        var t456__listpart = t456__menu.find('.t456__list');
        if (imglogo) {
            t456__listpart.css("margin-right", t456__leftpart.width());
        } else {
            t456__listpart.css("margin-right", t456__leftpart.width() + 30);
        }
    }
}

function t456_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == "/") {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == "/") {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == "/") {
        pathname = pathname.slice(1);
    }
    if (pathname == "") {
        pathname = "/";
    }
    $(".t456__list_item a[href='" + url + "']").addClass("t-active");
    $(".t456__list_item a[href='" + url + "/']").addClass("t-active");
    $(".t456__list_item a[href='" + pathname + "']").addClass("t-active");
    $(".t456__list_item a[href='/" + pathname + "']").addClass("t-active");
    $(".t456__list_item a[href='" + pathname + "/']").addClass("t-active");
    $(".t456__list_item a[href='/" + pathname + "/']").addClass("t-active");
}


function t456_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t456_navLinks = $("#rec" + recid + " .t456__list_item a:not(.tooltipstered)[href*='#']");
        if (t456_navLinks.length > 0) {
            t456_catchScroll(t456_navLinks);
        }
    }
}

function t456_catchScroll(t456_navLinks) {
    var t456_clickedSectionId = null,
        t456_sections = new Array(),
        t456_sectionIdTonavigationLink = [],
        t456_interval = 100,
        t456_lastCall, t456_timeoutId;
    t456_navLinks = $(t456_navLinks.get().reverse());
    t456_navLinks.each(function () {
        var t456_cursection = t456_getSectionByHref($(this));
        if (typeof t456_cursection !== "undefined") {
            if (typeof t456_cursection.attr("id") != "undefined") {
                t456_sections.push(t456_cursection);
            }
            t456_sectionIdTonavigationLink[t456_cursection.attr("id")] = $(this);
        }
    });
    t456_updateSectionsOffsets(t456_sections);
    t456_sections.sort(function (a, b) {
        return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
    $(window).bind('resize', t_throttle(function () {
        t456_updateSectionsOffsets(t456_sections);
    }, 200));
    $('.t456').bind('displayChanged', function () {
        t456_updateSectionsOffsets(t456_sections);
    });
    setInterval(function () {
        t456_updateSectionsOffsets(t456_sections);
    }, 5000);
    t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId);

    t456_navLinks.click(function () {
        var t456_clickedSection = t456_getSectionByHref($(this));
        if (typeof t456_clickedSection !== "undefined" && !$(this).hasClass("tooltipstered") && typeof t456_clickedSection.attr("id") != "undefined") {
            t456_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t456_clickedSectionId = t456_getSectionByHref($(this)).attr("id");
        }
    });
    
    $(window).scroll(function () {
        var t456_now = new Date().getTime();
        if (t456_lastCall && t456_now < (t456_lastCall + t456_interval)) {
            clearTimeout(t456_timeoutId);
            t456_timeoutId = setTimeout(function () {
                t456_lastCall = t456_now;
                t456_clickedSectionId = t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId);
            }, t456_interval - (t456_now - t456_lastCall));
        } else {
            t456_lastCall = t456_now;
            t456_clickedSectionId = t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId);
        }
    });
}


function t456_updateSectionsOffsets(sections) {
    $(sections).each(function () {
        var t456_curSection = $(this);
        t456_curSection.attr("data-offset-top", t456_curSection.offset().top);
    });
}


function t456_getSectionByHref(curlink) {
    var hash = curlink.attr("href").replace(/\s+/g, '').replace(/.*#/, '');
    var block = $(".r[id='" + hash + "']");
    var anchor = $(".r[data-record-type='215']").has("a[name='" + hash + "']");
    
    if (curlink.is('[href*="#rec"]')) {
        return block;
    } else if (anchor.length === 1) {
        return anchor;
    } else {
        return undefined;
    }
}


function t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId) {
    var t456_scrollPosition = $(window).scrollTop(),
        t456_valueToReturn = t456_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t456_sections.length != 0 && t456_clickedSectionId == null && t456_sections[t456_sections.length - 1].attr("data-offset-top") > (t456_scrollPosition + 300)) {
        t456_navLinks.removeClass('t-active');
        return null;
    }

    $(t456_sections).each(function (e) {
        var t456_curSection = $(this),
            t456_sectionTop = t456_curSection.attr("data-offset-top"),
            t456_id = t456_curSection.attr('id'),
            t456_navLink = t456_sectionIdTonavigationLink[t456_id];
        if (((t456_scrollPosition + 300) >= t456_sectionTop) || (t456_sections[0].attr("id") == t456_id && t456_scrollPosition >= $(document).height() - $(window).height())) {
            if (t456_clickedSectionId == null && !t456_navLink.hasClass('t-active')) {
                t456_navLinks.removeClass('t-active');
                t456_navLink.addClass('t-active');
                t456_valueToReturn = null;
            } else {
                if (t456_clickedSectionId != null && t456_id == t456_clickedSectionId) {
                    t456_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t456_valueToReturn;
}

function t456_setPath() {}

function t456_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t456").each(function () {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor);
            }
        });
    } else {
        $(".t456").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes");
        });
    }
}

function t456_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t456").each(function () {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top", "-50px");
                        el.css("visibility", "visible");
                        el.animate({
                            "opacity": "1",
                            "top": "0px"
                        }, 200, function () {});
                    }
                } else {
                    el.stop();
                    el.css("visibility", "hidden");
                }
            }
        });
    }

}

function t456_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t456").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.' + menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if (bgopacitytwo == '0' || menushadow == ' ') {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            } else {
                el.css("background-color", bgcolor);
                if (bgopacityone == '0.0' || menushadow == ' ') {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            }
        });
    }
}

function t456_createMobileMenu(recid) {
    var window_width = $(window).width(),
        el = $("#rec" + recid),
        menu = el.find(".t456"),
        burger = el.find(".t456__mobile");
    burger.click(function (e) {
        menu.fadeToggle(300);
        $(this).toggleClass("t456_opened")
    });
    $(window).bind('resize', t_throttle(function () {
        window_width = $(window).width();
        if (window_width > 980) {
            menu.fadeIn(0);
        }
    }, 200));
} 
function t461_setLogoPadding(recid){
	if($(window).width()>980){			  
        var t461__menu = $('#rec'+recid+' .t461');
        var t461__logo=t461__menu.find('.t461__logowrapper');	  
        var t461__leftpart=t461__menu.find('.t461__leftwrapper');
        var t461__rightpart=t461__menu.find('.t461__rightwrapper');
        t461__leftpart.css("padding-right",t461__logo.width()/2+50);
        t461__rightpart.css("padding-left",t461__logo.width()/2+50);			        
	}
}

function t461_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t461__list_item a[href='"+url+"']").addClass("t-active");
  $(".t461__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t461__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t461__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t461__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t461__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t461_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t461_navLinks = $("#rec"+recid+" .t461__desktoplist .t461__list_item a:not(.tooltipstered)[href*='#']");
      if (t461_navLinks.length>0){
      	t461_catchScroll(t461_navLinks);
      };
	}
}

function t461_catchScroll(t461_navLinks) {
    var t461_clickedSectionId = null,
        t461_sections = new Array(),
        t461_sectionIdTonavigationLink = [],
        t461_interval = 100,
        t461_lastCall, t461_timeoutId;
    t461_navLinks = $(t461_navLinks.get().reverse());
    t461_navLinks.each(function() {
        var t461_cursection = t461_getSectionByHref($(this));
        if (typeof t461_cursection.attr("id") != "undefined") {
            t461_sections.push(t461_cursection);
        }
        t461_sectionIdTonavigationLink[t461_cursection.attr("id")] = $(this);
    });
		t461_updateSectionsOffsets(t461_sections);
    t461_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t461_updateSectionsOffsets(t461_sections);}, 200));
		$('.t461').bind('displayChanged',function(){t461_updateSectionsOffsets(t461_sections);});
		setInterval(function(){t461_updateSectionsOffsets(t461_sections);},5000);
    t461_highlightNavLinks(t461_navLinks, t461_sections, t461_sectionIdTonavigationLink, t461_clickedSectionId);

    t461_navLinks.click(function() {
        var t461_clickedSection = t461_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t461_clickedSection.attr("id") != "undefined") {
            t461_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t461_clickedSectionId = t461_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t461_now = new Date().getTime();
        if (t461_lastCall && t461_now < (t461_lastCall + t461_interval)) {
            clearTimeout(t461_timeoutId);
            t461_timeoutId = setTimeout(function() {
                t461_lastCall = t461_now;
                t461_clickedSectionId = t461_highlightNavLinks(t461_navLinks, t461_sections, t461_sectionIdTonavigationLink, t461_clickedSectionId);
            }, t461_interval - (t461_now - t461_lastCall));
        } else {
            t461_lastCall = t461_now;
            t461_clickedSectionId = t461_highlightNavLinks(t461_navLinks, t461_sections, t461_sectionIdTonavigationLink, t461_clickedSectionId);
        }
    });
}


function t461_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t461_curSection = $(this);
		t461_curSection.attr("data-offset-top",t461_curSection.offset().top);
	});
}


function t461_getSectionByHref(curlink) {
    var t461_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t461_curLinkValue[0]=='/') { t461_curLinkValue = t461_curLinkValue.substring(1); }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t461_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t461_curLinkValue.substring(1) + "']");
    }
}

function t461_highlightNavLinks(t461_navLinks, t461_sections, t461_sectionIdTonavigationLink, t461_clickedSectionId) {
    var t461_scrollPosition = $(window).scrollTop(),
        t461_valueToReturn = t461_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t461_sections.length != 0 && t461_clickedSectionId == null && t461_sections[t461_sections.length-1].attr("data-offset-top") > (t461_scrollPosition + 300)){
      t461_navLinks.removeClass('t-active');
      return null;
    }

    $(t461_sections).each(function(e) {
        var t461_curSection = $(this),
            t461_sectionTop = t461_curSection.attr("data-offset-top"),
            t461_id = t461_curSection.attr('id'),
            t461_navLink = t461_sectionIdTonavigationLink[t461_id];
        if (((t461_scrollPosition + 300) >= t461_sectionTop) || (t461_sections[0].attr("id") == t461_id && t461_scrollPosition >= $(document).height() - $(window).height())) {
            if (t461_clickedSectionId == null && !t461_navLink.hasClass('t-active')) {
                t461_navLinks.removeClass('t-active');
                t461_navLink.addClass('t-active');
                t461_valueToReturn = null;
            } else {
                if (t461_clickedSectionId != null && t461_id == t461_clickedSectionId) {
                    t461_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t461_valueToReturn;
}


function t461_setPath(){
}

function t461_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t461").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t461").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t461_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t461").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t461_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t461").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t461_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t461"),
      burger=el.find(".t461__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t461_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
} 
function t462_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t462__list_item a[href='"+url+"']").addClass("t-active");
  $(".t462__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t462__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t462__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t462__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t462__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t462_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t462_navLinks = $("#rec"+recid+" .t462__list_item a:not(.tooltipstered)[href*='#']");
      if (t462_navLinks.length>0){
      	t462_catchScroll(t462_navLinks);
      };
	}
}

function t462_catchScroll(t462_navLinks) {
    var t462_clickedSectionId = null,
      t462_sections = new Array(),
      t462_sectionIdTonavigationLink = {},
      t462_interval = 100,
      t462_lastCall,
      t462_timeoutId,
	  t462_offsetTop = $(".t270").attr("data-offset-top");
	if (typeof t462_offsetTop == "undefined") { t462_offsetTop = 0; }
	t462_navLinks = $(t462_navLinks.get().reverse());
	t462_navLinks.each(function(){
		var t462_cursection = t462_getSectionByHref($(this));
		if (typeof t462_cursection.attr("id") != "undefined") { t462_sections.push(t462_cursection); }
		t462_sectionIdTonavigationLink[t462_cursection.attr("id")] = $(this);
	});

	t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
	t462_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t462_navLinks.removeClass('t-active');	
          t462_sectionIdTonavigationLink[t462_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t462_clickedSectionId = t462_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t462_now = new Date().getTime();
		if (t462_lastCall && t462_now < (t462_lastCall + t462_interval) ) {
				clearTimeout(t462_timeoutId);
				t462_timeoutId = setTimeout(function () {
						t462_lastCall = t462_now;
						t462_clickedSectionId = t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
				}, t462_interval - (t462_now - t462_lastCall) );
		} else {
				t462_lastCall = t462_now;
				t462_clickedSectionId = t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
		}
	});
}

function t462_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { 
	    var link = curlink.attr("href").replace('/','').substring(1);
	    return $(".r[data-record-type='215']").has("a[name='"+link+"']");
	}
}

function t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,offsetTop) {	   
	var t462_scrollPosition = $(window).scrollTop(),
		t462_valueToReturn = t462_clickedSectionId;
	$(t462_sections).each(function(e) {
			var t462_curSection = $(this),
					t462_sectionTop = t462_curSection.offset().top,
					t462_id = t462_curSection.attr('id'),
					t462_navLink = t462_sectionIdTonavigationLink[t462_id];
			if (t462_scrollPosition >= (t462_sectionTop - offsetTop) || (t462_sections[0].attr("id") == t462_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t462_clickedSectionId == null && !t462_navLink.hasClass('t-active')) {
					t462_navLinks.removeClass('t-active');
					t462_navLink.addClass('t-active');
					t462_valueToReturn = null;
				} else {
					if (t462_clickedSectionId != null && t462_id == t462_clickedSectionId) {
						t462_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t462_valueToReturn;
}

function t462_setPath(){
}

function t462_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t462").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t462").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t462_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t462").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t462_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t462").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t462_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t462"),
      burger=el.find(".t462__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t462_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}
 
function t466_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t466__item a[href='"+url+"']").addClass("t-active");
  $(".t466__item a[href='"+url+"/']").addClass("t-active");
  $(".t466__item a[href='"+pathname+"']").addClass("t-active");
  $(".t466__item a[href='/"+pathname+"']").addClass("t-active");
  $(".t466__item a[href='"+pathname+"/']").addClass("t-active");
  $(".t466__item a[href='/"+pathname+"/']").addClass("t-active");
}

function t466_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t466_navLinks = $("#rec"+recid+" .t466__menu a:not(.tooltipstered)[href*='#']");
      if (t466_navLinks.length>0){
      	t466_catchScroll(t466_navLinks);
      };
	}
}

function t466_catchScroll(t466_navLinks) {
    var t466_clickedSectionId = null,
      t466_sections = new Array(),
      t466_sectionIdTonavigationLink = {},
      t466_interval = 100,
      t466_lastCall,
      t466_timeoutId,
	  t466_offsetTop = $(".t466").attr("data-offset-top");
	if (typeof t466_offsetTop == "undefined") { t466_offsetTop = 0; }
	t466_navLinks = $(t466_navLinks.get().reverse());
	t466_navLinks.each(function(){
		var t466_cursection = t466_getSectionByHref($(this));
		if (typeof t466_cursection.attr("id") != "undefined") { t466_sections.push(t466_cursection); }
		t466_sectionIdTonavigationLink[t466_cursection.attr("id")] = $(this);
	});

	t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop);
	t466_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t466_navLinks.removeClass('t-active');	
          t466_sectionIdTonavigationLink[t466_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t466_clickedSectionId = t466_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t466_now = new Date().getTime();
		if (t466_lastCall && t466_now < (t466_lastCall + t466_interval) ) {
				clearTimeout(t466_timeoutId);
				t466_timeoutId = setTimeout(function () {
						t466_lastCall = t466_now;
						t466_clickedSectionId = t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop);
				}, t466_interval - (t466_now - t466_lastCall) );
		} else {
				t466_lastCall = t466_now;
				t466_clickedSectionId = t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop);
		}
	});
}

function t466_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,offsetTop) {	                                                      
	var t466_scrollPosition = $(window).scrollTop(),
		t466_valueToReturn = t466_clickedSectionId;
	$(t466_sections).each(function(e) {
			var t466_curSection = $(this),
					t466_sectionTop = t466_curSection.offset().top,
					t466_id = t466_curSection.attr('id'),
					t466_navLink = t466_sectionIdTonavigationLink[t466_id];
			if (t466_scrollPosition >= (t466_sectionTop - offsetTop) || (t466_sections[0].attr("id") == t466_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t466_clickedSectionId == null && !t466_navLink.hasClass('t-active')) {
					t466_navLinks.removeClass('t-active');
					t466_navLink.addClass('t-active');
					t466_valueToReturn = null;
				} else {
					if (t466_clickedSectionId != null && t466_id == t466_clickedSectionId) {
						t466_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t466_valueToReturn;
}

function t466_initMobileMenu(recid) {
  var window_width=$(window).width();
  var el = $("#rec"+recid);
  if(980>window_width){
    el.find(".t466").each(function() {
      $(this).find(".t466__mobile").css("top", $(this).find(".t466__container__bg_main").innerHeight() + 2);
      $(this).find(".t466__burger, a[href*='#']").click(function(){
        if ($(this).is(".tooltipstered, .t794__tm-link, .t978__tm-link, .t966__tm-link")) { return; }  
        el.toggleClass('t466_opened');
        $(this).closest(".t466").find(".t466__mobile").slideToggle(300);
      });
    });
  }
  $('.t466').bind('clickedAnchorInTooltipMenu',function(){
    el.removeClass('t466_opened');
    $(this).closest(".t466").find(".t466__mobile").slideUp(300);
  });  
}

function t466_appearMenu(recid) {
      var window_width=$(window).width();
      var record = $("#rec"+recid);
           record.find(".t466").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.hasClass('t466__beforeready')){
                                el.removeClass('t466__beforeready');
                            }
                          }else{
                            el.addClass('t466__beforeready');
                          }
                  }
           });

}

function t466_changeBgOpacityMenu(recid) {
  var window_width=$(window).width();
  var record = $("#rec"+recid);
  record.find(".t466__container__bg").each(function() {
        var el=$(this);
        var bgcolor=el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity=el.attr("data-bgopacity");
        var bgopacity_afterscroll=el.attr("data-bgopacity2");
        var menu_shadow=el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color",bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }else{
            el.css("background-color",bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }
  });
} 
function t477_setHeight(recid, imgHeight) {
  var el=$('#rec'+recid);
  if (imgHeight) el.find('.t477__blockimg').css('height', imgHeight);
  el.find('.t-container').each(function() {
    var highestBox = 0;
    el.find('.t477__col', this).each(function(){
        if($(this).height() > highestBox)highestBox = $(this).height(); 
    });
    el.find('.t477__textwrapper',this).css('height', highestBox);
    el.find('.t477__blockimg',this).css('height', highestBox);
  });
} 
function t478_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t478__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t478__blockimg, .t478__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((width/ratio)+'px')});
  }
} 
function t480_init(recid) {
    var el = $('#rec' + recid);

    t480_setHeight(recid);

    if (window.isMobile) {
        $(window).on('orientationchange', function() {
            t480_setHeight(recid);
        });
    } else {
        $(window).on('resize', function () {
            if (typeof window.noAdaptive != "undefined" && window.noAdaptive == true && window.isMobile) { return; }
            t480_setHeight(recid);
        });
    }

    el.find('.t480').on('displayChanged', function () {
        t480_setHeight(recid);
    });
}

function t480_setHeight(recid) {
    var el = $('#rec' + recid);
    var sizer = el.find('.t480__sizer');
    var height = sizer.height();
    var width = sizer.width();
    var ratio = width / height;
    var imgwrapper = el.find(".t480__blockimg");
    var imgwidth = imgwrapper.width();
    var rawSizerHeight = sizer.attr('style');

    if (window.isMobile && rawSizerHeight.indexOf('vh') !== -1) {
        var height = document.documentElement.clientHeight * parseFloat( $(window).height()/height );
        imgwrapper.css('height', ((imgwidth / ratio) + 'px'));
    } else if (height != $(window).height()) {
        imgwrapper.css('height', ((imgwidth / ratio) + 'px'));
    }
} 
function t481_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t481__list_item a[href='"+url+"']").addClass("t-active");
  $(".t481__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t481__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t481__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t481__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t481__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t481_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t481_navLinks = $("#rec"+recid+" .t481__list_item a:not(.tooltipstered)[href*='#']");
      if (t481_navLinks.length>0){
      	t481_catchScroll(t481_navLinks);
      };
	}
}

function t481_catchScroll(t481_navLinks) {
    var t481_clickedSectionId = null,
      t481_sections = new Array(),
      t481_sectionIdTonavigationLink = {},
      t481_interval = 100,
      t481_lastCall,
      t481_timeoutId,
	  t481_offsetTop = $(".t270").attr("data-offset-top");
	if (typeof t481_offsetTop == "undefined") { t481_offsetTop = 0; }
	t481_navLinks = $(t481_navLinks.get().reverse());
	t481_navLinks.each(function(){
		var t481_cursection = t481_getSectionByHref($(this));
		if (typeof t481_cursection.attr("id") != "undefined") { t481_sections.push(t481_cursection); }
		t481_sectionIdTonavigationLink[t481_cursection.attr("id")] = $(this);
	});

	t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
	t481_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t481_navLinks.removeClass('t-active');	
          t481_sectionIdTonavigationLink[t481_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t481_clickedSectionId = t481_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t481_now = new Date().getTime();
		if (t481_lastCall && t481_now < (t481_lastCall + t481_interval) ) {
				clearTimeout(t481_timeoutId);
				t481_timeoutId = setTimeout(function () {
						t481_lastCall = t481_now;
						t481_clickedSectionId = t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
				}, t481_interval - (t481_now - t481_lastCall) );
		} else {
				t481_lastCall = t481_now;
				t481_clickedSectionId = t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
		}
	});
}

function t481_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,offsetTop) {	                                                      
	var t481_scrollPosition = $(window).scrollTop(),
		t481_valueToReturn = t481_clickedSectionId;
	$(t481_sections).each(function(e) {
			var t481_curSection = $(this),
					t481_sectionTop = t481_curSection.offset().top,
					t481_id = t481_curSection.attr('id'),
					t481_navLink = t481_sectionIdTonavigationLink[t481_id];                                                 			                                                      
			if (t481_scrollPosition >= (t481_sectionTop - offsetTop) || (t481_sections[0].attr("id") == t481_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t481_clickedSectionId == null && !t481_navLink.hasClass('t-active')) {
					t481_navLinks.removeClass('t-active');
					t481_navLink.addClass('t-active');					
					t481_valueToReturn = null;
				} else {
					if (t481_clickedSectionId != null && t481_id == t481_clickedSectionId) {
						t481_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t481_valueToReturn;
}

function t481_setPath(){
}

function t481_setWidth(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      var left_exist=el.find('.t481__leftcontainer').length;
      var left_w=el.find('.t481__leftcontainer').outerWidth(true);
      var max_w=left_w;
      var right_exist=el.find('.t481__rightcontainer').length;
      var right_w=el.find('.t481__rightcontainer').outerWidth(true);
    var items_align=el.attr('data-menu-items-align');
      if(left_w<right_w)max_w=right_w;
      max_w=Math.ceil(max_w);
      var center_w=0;
      el.find('.t481__centercontainer').find('li').each(function() {
        center_w+=$(this).outerWidth(true);
      });
      //console.log(max_w);
      //console.log(center_w);
      var padd_w=40;
      var maincontainer_width=el.find(".t481__maincontainer").outerWidth(true);
      if(maincontainer_width-max_w*2-padd_w*2>center_w+20){
          //if(left_exist>0 && right_exist>0){
      if(items_align=="center" || typeof items_align==="undefined"){
            el.find(".t481__leftside").css("min-width",max_w+"px");
            el.find(".t481__rightside").css("min-width",max_w+"px");
            
          }
       }else{
          el.find(".t481__leftside").css("min-width","");
          el.find(".t481__rightside").css("min-width","");  
          
      }
    });
  }
}

function t481_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);             
      }
      });
      }else{
        $(".t481").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t481_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t481").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("visibility","visible");
                                el.animate({"opacity": "1"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.animate({"opacity": "0"}, 200,function() {
                            });
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t481_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t481_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t481"),
      burger=el.find(".t481__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t481_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}

 
function t486_setHeight(recid) {
  var el=$('#rec'+recid);
  var window_width=$(window).width();
  if(window_width>980){
    el.find('.t486__blockimg').css('height', el.find('.t486__blockimg').innerWidth());
    var textwrapper = el.find('.t486__textwrapper');
    var blockimg = el.find('.t486__imgcontainer');
    textwrapper.css('height', blockimg.innerHeight());

    
  } else {
    el.find('.t486__blockimg').css('height', el.find('.t486__blockimg').width());
    el.find('.t486__textwrapper').css('height', 'auto'); 
  }
} 
function t498_unifyHeights(recid) {
    $('#rec'+recid+' .t498 .t-container').each(function() {
        var t498__highestBox = 0;
        $('.t498__col', this).each(function(){
			var t498__curcol=$(this);
			var t498__curcolchild=t498__curcol.find('.t498__col-wrapper');
			if(t498__curcol.height() < t498__curcolchild.height())t498__curcol.height(t498__curcolchild.height());
            if(t498__curcol.height() > t498__highestBox)t498__highestBox = t498__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t498__col',this).css('height', t498__highestBox);
        }else{
	        $('.t498__col',this).css('height', "auto");
        }
    });
};
 
function t504_unifyHeights(recid) {
    $('#rec'+recid+' .t504 .t-container').each(function() {
        var t504__highestBox = 0;
        $('.t504__col', this).each(function(){
			var t504__curcol=$(this);
			var t504__curcolchild=t504__curcol.find('.t504__col-wrapper');
			if(t504__curcol.height() < t504__curcolchild.height())t504__curcol.height(t504__curcolchild.height());
            if(t504__curcol.height() > t504__highestBox)t504__highestBox = t504__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t504__col',this).css('height', t504__highestBox);
        }else{
	        $('.t504__col',this).css('height', "auto");
        }
    });
};
 
function t505__createPieChart(recid,data1,data2,data3,data4,sectorcolor,piebgcolor,bgcolor,blocksnumber,diagramwidth,diameter) {
	if(diameter>300 || diameter=="" || diameter<100) {
		if(diameter=="") {var t505__radius = 100; diameter = 200;}
		if(diameter>300) {var t505__radius = 150; diameter = 300;}
        if(diameter<100) {var t505__radius = 50; diameter = 100;}
	} else {
		var t505__radius = diameter/2;
	}

	if(diagramwidth=="") { diagramwidth = 10;}
    if(diagramwidth>t505__radius) { diagramwidth = 10;}
	if(diagramwidth<1) { diagramwidth = 1;}

	//check Retina
	if(window.devicePixelRatio >= 2) {
		var t505__oldsize = diameter;
        t505__radius = t505__radius*2;
		diameter = diameter*2;
		diagramwidth = diagramwidth*2;
	}

	//border id drawing at the edge of circle, so we need correct the radius to fin into canvas
	var t505__correction = +diagramwidth/2;

    var t505__dataarray = [data1,data2,data3,data4];
    for (var i=0; i<4; i++) {
        if (t505__dataarray[i]!="" && blocksnumber>i) {
            var t505__canvas = document.querySelector('#rec'+recid+' .t505__pie'+(i+1));
			t505__canvas.setAttribute("width", diameter);
			t505__canvas.setAttribute("height", diameter);
            var t505__context = t505__canvas.getContext("2d");
			if(window.devicePixelRatio >= 2) {
				t505__canvas.style.width = t505__oldsize + "px";
				t505__canvas.style.height = t505__oldsize + "px";
			}
			for (var j = 0; j < 2; j++) {
				if(j==1 && t505__dataarray[i]==0) {continue;}
				//0 - bg, 1 - percent sector
                if (j==0) {
					t505__context.strokeStyle = piebgcolor;
					var t505__angle = Math.PI*2;
					t505__context.lineWidth = diagramwidth-1;
                } else {
                    t505__context.strokeStyle = sectorcolor;
					var t505__angle = Math.PI*2*(t505__dataarray[i]/100);
					t505__context.lineWidth = diagramwidth;
				}
                t505__context.beginPath();
				t505__context.lineCap="round";
				t505__context.moveTo(diameter-t505__correction,t505__radius);
				t505__context.arc(t505__radius, t505__radius, t505__radius-t505__correction, 0, t505__angle, false);
				t505__context.stroke();
			}
		}
	}
}
 
function t509_setHeight(recid) {  
  var t509__el=$("#rec"+recid);	
  var t509__image = t509__el.find(".t509__blockimg");
  t509__image.each(function() {
    var t509__width = $(this).attr("data-image-width");
    var t509__height = $(this).attr("data-image-height");	
    var t509__ratio = t509__height/t509__width;
    var t509__padding = t509__ratio*100;    	
    $(this).css("padding-bottom",t509__padding+"%");		
  });
  
  if ($(window).width()>960){
    var t509__textwr = t509__el.find(".t509__textwrapper");
    var t509__deskimg = t509__el.find(".t509__desktopimg");
    t509__textwr.each(function() {    
    $(this).css("height", t509__deskimg.innerHeight());	
    });
  }
}
 
function t517_unifyHeights(recid) {
if($(window).width()>=960){
	$('#rec'+recid+' .t517 .t-container .t517__row').each(function() {
		var t517__highestBox = 0;
		var t517__currow = $(this);
		$('.t517__col', this).each(function(){
			var t517__curcol = $(this);			
			var t517__curcolinfo=t517__curcol.find('.t517__sectioninfowrapper');			
			var t517__curcolpers=t517__curcol.find('.t517__personwrapper');
			var t517__curcolinnerheight = t517__curcolinfo.outerHeight() + t517__curcolpers.outerHeight();						
			if(t517__curcolinnerheight > t517__highestBox){t517__highestBox = t517__curcolinnerheight;}
		});
		$('.t517__col',this).css('height', t517__highestBox);
	});
}
};
 
function t518_unifyColHeadersHeights(recid) {
if($(window).width()>=960){
	var t518__highestBox = 0;
	$('#rec'+recid+' .t518 .t-container .t518__col-header').each(function() {
		var t518__curcolheader = $(this);
		var t518__curcolheaderinner = t518__curcolheader.find('.t518__col-header-inner');
		var t518__curcolinnerheight = t518__curcolheaderinner.outerHeight();
		if(t518__curcolinnerheight > t518__highestBox)t518__highestBox = t518__curcolinnerheight;
	});
	$('#rec'+recid+' .t518__col-header').css('height', t518__highestBox);
}
};

function t518_unifyColItems(recid,prefixwidth) {
//if prefixwidth>400, there is just one column or block is empty
	if($(window).width()>=960 && prefixwidth!=400){
	  var t518__colsitems = new Array();
	  var t518__minitemsnumber = 0;
	  for (var i=0; i<3; i++){
	    var t518__curcolitems = document.querySelectorAll('#rec'+recid+' .t518__col_'+(i+1)+' .t518__item');
	    if(typeof t518__curcolitems!="undefined" && t518__curcolitems!=null && t518__curcolitems.length > 0){t518__colsitems.push(t518__curcolitems);}
	    if(t518__curcolitems.length>0 && ((t518__curcolitems.length<t518__minitemsnumber) || (t518__minitemsnumber==0)))
			{t518__minitemsnumber=t518__curcolitems.length;}
	  }                                                                                       
	  //unifying items heights
	  for (var i=0; i<t518__minitemsnumber; i++){
	    var t518__maxrowheight = 0;
	    for (var j=0; j<t518__colsitems.length; j++){
	      var t518__curiteminfo=t518__colsitems[j][i].querySelector('.t518__sectioninfowrapper');
	      var t518__curitempers=t518__colsitems[j][i].querySelector('.t518__personwrapper');
	      var t518__curiteminnerheight = 0;
				if (typeof t518__curiteminfo!="undefined" && t518__curiteminfo!=null) {t518__curiteminnerheight+=t518__curiteminfo.offsetHeight;}
				if (typeof t518__curitempers!="undefined" && t518__curitempers!=null) {t518__curiteminnerheight+=t518__curitempers.offsetHeight;}
	      if (t518__curiteminnerheight>t518__maxrowheight){
	        t518__maxrowheight = t518__curiteminnerheight;
	      }
	    }
	    for (var j=0; j<t518__colsitems.length; j++){
	      if (typeof t518__colsitems[j][i]!="undefined" && t518__colsitems[j][i]!=null){t518__colsitems[j][i].style.height = t518__maxrowheight+"px";}
		  var t518__personwr = t518__colsitems[j][i].querySelector('.t518__personwrapper');
		  if (typeof t518__personwr!="undefined" && t518__personwr!=null){t518__personwr.style.position = "absolute";}
	    }
	  }
	}
};
 
function t527_setHeight(recid) {
  var t527__el=$("#rec"+recid),
      t527__image = t527__el.find(".t527__bgimg:first"),
      t527__width = t527__image.attr("data-image-width"),
      t527__height = t527__image.attr("data-image-height"),
      t527__ratio = t527__height/t527__width,
      t527__padding = t527__ratio*100;	  
  $("#rec"+recid+" .t527__bgimg").css("padding-bottom",t527__padding+"%");  
} 
function t531_setHeight(recid) {
  var t531__el=$("#rec"+recid),
      t531__image = t531__el.find(".t531__blockimg"),
      t531__width = t531__image.attr("data-image-width"),
      t531__height = t531__image.attr("data-image-height"),
      t531__ratio = t531__height/t531__width,
      t531__padding = t531__ratio*100;
  $("#rec"+recid+" .t531__blockimg").css("padding-bottom",t531__padding+"%");

  if ($(window).width()>480){
    var t531__textwr = t531__el.find(".t531__textwrapper");
    var t531__deskimg = t531__el.find(".t531__imgwrapper");
    t531__textwr.each(function() {
    $(this).css("height", t531__deskimg.innerHeight());
    });
  }
}
 
function t532__emulateMobileHover(recid) {
  var el = $('#rec'+recid),
      cell = el.find('.t532__cell');

  cell.hover(
    function () {
      $(this).addClass("t532__cell_hover");
    },
    function () {
      $(this).removeClass("t532__cell_hover");
    }
  );
}

function t532_setHeight(recid) {  
  var t532__el=$("#rec"+recid),
			t532__image = t532__el.find(".t532__bg:first"),
			t532__wrapper = t532__el.find(".t532__table:first"),
			t532__width = t532__image.attr("data-image-width"),
			t532__height = t532__image.attr("data-image-height"),
			t532__ratio = t532__height/t532__width;		
	$("#rec"+recid+" .t532__table").css("height",t532__wrapper.innerWidth()*t532__ratio);			    
}
 
function t533_equalHeight(recid){
  var el = $('#rec'+recid);
  el.find('.t533').css('visibility', 'visible');
  el.find('.t533__textwrapper').css('height','auto');
  $('#rec'+recid+' .t533__row').each(function() {
    var highestBox = 0;
    $('.t533__textwrapper', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t533__textwrapper',this).css('height', highestBox); 
    }else{
      $('.t533__textwrapper',this).css('height', "auto");    
    }
  });
}; 
function t534_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t534__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t536_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t536__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t537_setHeight(recid) {
  var t537__el=$("#rec"+recid),
      t537__image = t537__el.find(".t537__bgimg:first"),
      t537__width = t537__image.attr("data-image-width"),
      t537__height = t537__image.attr("data-image-height"),
      t537__ratio = t537__height/t537__width,
      t537__padding = t537__ratio*100;	  
  $("#rec"+recid+" .t537__bgimg").css("padding-bottom",t537__padding+"%");  
} 
function t538_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t538__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t539_equalHeight(recid,blocks){
  if(blocks=='' || parseInt(blocks)==0) {
    return false;
  }
  var t539__el = $('#rec'+recid),
      t539__cols = t539__el.find(".t539__textwrapper");
	t539__cols.css("height","auto");
	if($(window).width()<=480){                                                
      t539__el.find('.t539').css('visibility', 'visible');
      return;                                                     
    }
	if ($(window).width()<=960) {var t539__perRow = 2;}
	else {var t539__perRow = +blocks;}
	for( var i = 0; i < t539__cols.length; i +=t539__perRow )
	{
		var t539__maxHeight = 0,
				t539__row = t539__cols.slice(i, i + t539__perRow);
		t539__row.each(function(){
			var t539__itemHeight = $(this).outerHeight();
			if ( t539__itemHeight > t539__maxHeight ) { t539__maxHeight = t539__itemHeight; }
		});
		t539__row.css( "height", t539__maxHeight );
	}
  t539__el.find('.t539').css('visibility', 'visible');
};

function t539_setHeight(recid) {
  var t539__el=$("#rec"+recid),
      t539__image = t539__el.find(".t539__bgimg:first"),
      t539__width = t539__image.attr("data-image-width"),
      t539__height = t539__image.attr("data-image-height"),
      t539__ratio = t539__height/t539__width,
      t539__padding = t539__ratio*100;	  
  $("#rec"+recid+" .t539__bgimg").css("padding-bottom",t539__padding+"%");  
}

 
function t544_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t544__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t544__blockimg, .t544__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((imgwidth/ratio)+'px')});
  }
} 
function t545_setHeight(recid) {
  var el=$('#rec'+recid);
  var t545_height = el.find('.t-container').attr("data-height");
  el.find('.t-container').each(function() {
    var highestBox = 0;
    $('.t545__col', this).each(function(){
        if($(this).height() > highestBox){highestBox = $(this).height();} 
    });
	if(t545_height > highestBox){highestBox = t545_height;}
    $('.t545__textwrapper',this).css('height', highestBox);
    $('.t545__blockimg',this).css('height', highestBox);
  });
} 
function t552_init(recid, ratio) {
    var el = $("#rec" + recid);

    t552__setHeight(recid, ratio);

    $(window).on('resize', t_throttle(function() {
        t552__setHeight(recid, ratio);
    }));

    el.find('.t552').bind('displayChanged', function() {
      t552__setHeight(recid, ratio);
    });
}

function t552__setHeight(recid, ratio) {
    var el = $("#rec" + recid);
    var firstImg = el.find(".t552__blockimg:first");
    el.find(".t552__blockimg").css("height", Math.floor(firstImg.innerWidth() * ratio));
} 
function t554__init(recid) {
    var el = $('#rec' + recid),
        mapHeight = parseFloat(el.find('.t554_map').height()),
        cardHeight = parseFloat(el.find('.t554__card').outerHeight()),
        cardTop = parseFloat(el.find('.t554__card').css('top').replace('px', ''));
    if (mapHeight < cardHeight + cardTop) {
        var paddBottom = (cardHeight + cardTop) - mapHeight;
        el.find('.t554__general-wrapper').css('padding-bottom', paddBottom + 'px');
    }
} 
function t557_init(recid, snowtype) {
    $('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_1.png').load(function () {
        $(this).remove();
    });
    $('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_2.png').load(function () {
        $(this).remove();
    });
    $('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_3.png').load(function () {
        $(this).remove();
        t557__addSnow(recid, snowtype);
    });
}

function t557__addSnow(recid, snowtype) {
    var el = $('#rec' + recid),
        t557_ids = el.find('.t557__snow-recid-holder').attr('data-snow-rec-ids').split(',');
    if (t557_ids != "") {
        t557_ids.forEach(function (rec_id, i, arr) {
            var t557_zeroattr = $('#rec' + rec_id).attr('data-record-type');
            if (t557_zeroattr == 396) {
                var t557_wrappertype = " .t396__artboard";
            } else {
                var t557_wrappertype = " .t-cover";
            }
            var t557_cover = document.querySelector('#rec' + rec_id + t557_wrappertype);
            /* dv12 layer conflict */
            $(t557_cover).find('.t796__shape-border').css('z-index', 1);
            if (t557_cover != null) {
                var t557_snow = document.createElement('div');
                t557_snow.className = snowtype;
                t557_cover.appendChild(t557_snow);
            }
        });
    } else {
        t557_cover = $('.t-cover').first();
        var t557_snow = document.createElement('div');
        t557_snow.className = snowtype;
        t557_cover.append(t557_snow);
    }
    $('.' + snowtype).animate({
        "opacity": "1"
    }, 1000, function () {});
}
 
function t569_init(recid) {
    var el = $('#rec' + recid);
    var line = el.find('.t569__line');
    var blocksnumber = el.find('.t569').attr('data-blocks-count');

    if (blocksnumber == '4') {
        var cirqlenumber = 4;
    } else {
        var cirqlenumber = 8;
    }

    line.each(function () {
        var e = $(this).find('.t569__cirqle');
        for (i = 0; i < cirqlenumber; i++) {
            e.clone().insertAfter(e);
        }
    });

    line.css('max-width', el.find('.t569__col').width() - el.find('.t569__bgimg').outerWidth());

    $(window).on('resize', t_throttle(function() {
        line.css('max-width', el.find('.t569__col').width() - el.find('.t569__bgimg').outerWidth());
    }));
} 
function t570_init(recid){
if($(window).width()>750){
  t570_setMapHeight(recid);

  $(window).on('load', function() {
      t570_setMapHeight(recid);
  });

  $(window).on('resize', function(){
    t570_setMapHeight(recid);
  });
}
}

function t570_setMapHeight(recid) {
  var t570__el=$('#rec'+recid),
  	  t570__map = t570__el.find('.t-map');
  var t570__textwrapper = t570__el.find('.t570__col_text').height();
  t570__map.css('height', t570__textwrapper).trigger('sizechange');
} 
function t576_init(recid){
  var el = $('#rec'+recid),
      line = el.find('.t576__line'),
      cirqle = el.find('.t576__cicqle'),
      block = el.find('.t576__item'),
      t576_resize;

  block.each(function() {
    $(this).find('.t576__circle').css('top', $(this).find('.t576__img').outerHeight() + 15);
  });

  el.find('.t576__item:first-child').find('.t576__line').css('top', el.find('.t576__item:first-child').find('.t576__img').outerHeight() + 15);
                      
  el.find('.t576__item:last-child').find('.t576__line').css('height', el.find('.t576__item:last-child').find('.t576__img').outerHeight() + 20);
} 
function t577_equalHeight(recid){
  var el = $('#rec'+recid);
  el.find('.t577').css('visibility', 'visible');
  el.find('.t577__textwrapper').css('height','auto');
  el.find('.t577__descr').css('height','auto');
  $('#rec'+recid+' .t577__row').each(function() {
    var highestBox = 0;
    $('.t577__descr', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t577__descr',this).css('height', highestBox); 
    }else{
      $('.t577__descr',this).css('height', "auto");    
    }
  });
  $('#rec'+recid+' .t577__row').each(function() {
    var highestBox = 0;
    $('.t577__textwrapper', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t577__textwrapper',this).css('height', highestBox); 
    }else{
      $('.t577__textwrapper',this).css('height', "auto");    
    }
  });
}; 
function t582_init(recid){
    $(document).ready(function() {
      var t582__showMenu;
      $(window).bind('scroll', t_throttle(function(){
        clearTimeout(t582__showMenu);
        t582__showMenu = setTimeout(function() {t582_appearMenu(recid);}, 50);
      }, 200));
      $('.t582').removeClass('t582__beforeready');
      t582_appearMenu(recid);
    });
}

function t582_appearMenu(recid) {
  $(".t582").each(function() {
    var el=$(this),
        appearoffset=el.attr("data-appearoffset"),
        window_width=$(window).width(),
				window_scrollTop=$(window).scrollTop(),
				window_height=$(window).height();
    if(window_width<=980 && appearoffset!=""){appearoffset="150";}
		if(appearoffset==""){appearoffset="0";}
    if(appearoffset.indexOf('vh') > -1){ appearoffset = Math.floor((window_height * (parseInt(appearoffset) / 100))); }
		appearoffset=parseInt(appearoffset, 10);

    if (window_scrollTop >= appearoffset && window_scrollTop+window_height+70 <= $(document).height()) {
      if(el.css('visibility') == 'hidden'){
          el.finish();
          el.css("bottom","-100px");
          el.css("visibility","visible");
          el.animate({"opacity": "1","bottom": "0"}, 400,function() {
          });
      }
    }else{
      el.stop();
      el.css("visibility","hidden");
        el.css("opacity","0");
    }
  });
}
 
function t585_init(recid) {
    var el = $('#rec' + recid);
    var toggler = el.find(".t585__header");

    var accordion = el.find('.t585__accordion');
    if (accordion) {
        accordion = accordion.attr('data-accordion');
    } else {
        accordion = "false";
    }
    
    var scrolltoExpand = el.find('.t585__accordion').attr('data-scroll-to-expanded');
    
    toggler.click(function () {
        if (accordion === "true") {
            toggler.not(this).removeClass("t585__opened").next().slideUp();
        }
        
        $(this).toggleClass("t585__opened");
        var _this = $(this);
        $(this).next().slideToggle(function() {
            if (scrolltoExpand === "true") {
                $('html, body').animate({
                    scrollTop: $(_this).offset().top || el.offset().top
                }, 300);
            }
        });
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    });
} 
function t590_init(recid,height){	
  t590__setHeight(recid,height);  

  var t590__doResize;
  $(window).resize(function(){
    clearTimeout(t590__doResize);
    t590__doResize = setTimeout(function() {
    	t590__setHeight(recid);
    }, 200);
  });
}

function t590__setHeight(recid,height) {      
  if (height=="" || typeof height=="undefined"){
  var t590__el=$("#rec"+recid),
      t590__div=t590__el.find("#youtubeiframe"+recid),
      t590__height=t590__div.width() * 0.5625;
  t590__div.height(t590__height);
  t590__div.parent().height(t590__height);         
  }  
} 
function t592_init(recid){
  var element = $('#rec'+recid).find('.t592__descr');

  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
}; 
function t598_init(recid){
  var el = $('#rec'+recid);

  if (el.find('.t598__title').length) {
    t598_equalHeight(el.find('.t598__title'));
  }
  if (el.find('.t598__descr').length) {
    t598_equalHeight(el.find('.t598__descr'));
  }
  if (el.find('.t598__price').length) {
    t598_equalHeight(el.find('.t598__price'));
  }
  if (el.find('.t598__imgwrapper').length) {
    t598_equalHeight(el.find('.t598__imgwrapper'));
    $(window).on('load', function() {
       t598_equalHeight(el.find('.t598__imgwrapper'));
    });
  }
};

function t598_equalHeight(element) {
  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t599_init(recid){
  var el = $('#rec'+recid);

  if (el.find('.t599__title').length) {
    t599_equalHeight(el.find('.t599__title'));
  }
  if (el.find('.t599__descr').length) {
    t599_equalHeight(el.find('.t599__descr'));
  }
  if (el.find('.t599__price').length) {
    t599_equalHeight(el.find('.t599__price'));
  }
  if (el.find('.t599__subtitle').length) {
    t599_equalHeight(el.find('.t599__subtitle'));
  }
};

function t599_equalHeight(element) {
  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t601_init(recid) {
  var el=$('#rec'+recid);
  var slide1=el.find('[data-slide-index=1]');
  var imagesSlide1=slide1.find('.t601__img');
  imagesSlide1.on('load',function() {
    if ($(this).parents('.t-slides__item[data-slide-index=1]').length==0){ return; }
    t_slides_setSliderHeight(recid);
  });
} 
function t602_init(recid) {
	$(window).on('scroll', t_throttle(function() {
        t602_setProgressBarWidth(recid);
    }, 100));
}

function t602_setProgressBarWidth(recid) {
	var t602_windowScrollTop = $(window).scrollTop(),
			t602_docHeight = $(document).height(),
			t602_winHeight = $(window).height();
			t602_scrollPercent = (t602_windowScrollTop / (t602_docHeight-t602_winHeight)) * 100;
	$(".t602__indicator").css('width', t602_scrollPercent + '%');
}
 
function t604_init(recid) {  
    var el = $('#rec' + recid);

    t604_imageHeight(recid);
    t604_arrowWidth(recid);
    t604_show(recid);
    t604_hide(recid);

    $(window).bind('resize', t_throttle(function() {
        t_onFuncLoad('t_slds_updateSlider', function () {
            t_slds_updateSlider(recid);
        });
        t604_arrowWidth(recid);
    }));

    el.find('.t604').bind('displayChanged', function() {
        t_onFuncLoad('t_slds_updateSlider', function () {
            t_slds_updateSlider(recid);
        });
        t604_arrowWidth(recid);
    });
}

function t604_show(recid) {  
  var el=$("#rec"+recid),
      play = el.find('.t604__play');
  play.click(function(){
    if($(this).attr('data-slider-video-type')=='youtube'){
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    }
    if($(this).attr('data-slider-video-type')=='vimeo'){
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    }
    $(this).next().css('z-index', '3');
  });
}

function t604_hide(recid) {  
  var el=$("#rec"+recid),
      body = el.find('.t604__frame');
  el.on('updateSlider', function(){
    body.html('').css('z-index', '');
  });
}

function t604_imageHeight(recid) {  
  var el=$("#rec"+recid); 
  var image = el.find(".t604__separator");
  image.each(function() {
    var width = $(this).attr("data-slider-image-width");
    var height = $(this).attr("data-slider-image-height"); 
    var ratio = height/width;
    var padding = ratio*100;      
    $(this).css("padding-bottom",padding+"%");    
  });
}

function t604_arrowWidth(recid) {  
  var el=$("#rec"+recid),
      arrow = el.find('.t-slds__arrow_wrapper'),
      slideWidth = el.find('.t-slds__wrapper').width(),
      windowWidth = $(window).width(),
      arrowWidth = windowWidth-slideWidth;
  if(windowWidth>960){
    arrow.css('width', arrowWidth/2);
  } else {
    arrow.css('width', '');
  }
} 
function t607_init(recid) {
	t607_checkAnchorLinks(recid);
}


function t607_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t607_navLinks = $("#rec"+recid+" .t607__list_item a:not(.tooltipstered)[href*='#']");
      if (t607_navLinks.length>0){
      	t607_catchScroll(t607_navLinks);
      };
	}
}


function t607_catchScroll(t607_navLinks) {
    var t607_clickedSectionId = null,
      t607_sections = new Array(),
      t607_sectionIdTonavigationLink = {},
      t607_interval = 100,
      t607_lastCall,
      t607_timeoutId;
	t607_navLinks = $(t607_navLinks.get().reverse());
	t607_navLinks.each(function(){
		var t607_cursection = t607_getSectionByHref($(this));
		if (typeof t607_cursection.attr("id") != "undefined") { t607_sections.push(t607_cursection); }
		t607_sectionIdTonavigationLink[t607_cursection.attr("id")] = $(this);
	});
	t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId);
	setTimeout(function() { t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId); }, 1000);

	$(document).keydown(function(e) {
		var t607_direction = "";
		switch(e.which) {
				case 38: t607_direction = "top"; break;
				case 40: t607_direction = "bottom"; break;
				case 33: t607_direction = "top"; break;
				case 34: t607_direction = "bottom"; break;
				default: return;
		}
		if (t607_direction!="") {
			var t607_curActiveSectionId = t607_getSectionByHref(t607_navLinks.filter(".t-active")).attr("id"),
			 		t607_newActiveSectionIndex = $.map(t607_sections, function(obj, index) {
			    if(obj.attr("id") == t607_curActiveSectionId && t607_direction == "top") { return index + 1; }
					if(obj.attr("id") == t607_curActiveSectionId && t607_direction == "bottom") { return index - 1; }
			});
			var t607_newActiveSection = t607_sections[t607_newActiveSectionIndex[0]];
			if (typeof t607_newActiveSection == "undefined") { return; }

			t607_navLinks.removeClass('t-active');
			var	$root = $('html, body'),
					t607_offsetTop = $(".t607").attr("data-offset-top");
			t607_sectionIdTonavigationLink[t607_newActiveSection.attr("id")].addClass('t-active');
			t607_clickedSectionId = t607_newActiveSection.attr("id");
			if (typeof t607_offsetTop!="undefined") { $root.animate({ scrollTop: t607_newActiveSection.offset().top - t607_offsetTop}, 500); }
			else { $root.animate({ scrollTop: t607_newActiveSection.offset().top}, 500); }
		}
	});

	t607_navLinks.click(function() {
		if (!$(this).hasClass("tooltipstered")) {
		  t607_navLinks.removeClass('t-active');
			var t607_clickedSection = t607_getSectionByHref($(this)),
					$root = $('html, body'),
					t607_offsetTop = $(".t607").attr("data-offset-top");
		  if (!$(this).hasClass("t-active")) { t607_clickedSectionId = t607_clickedSection.attr("id"); }
          t607_sectionIdTonavigationLink[t607_clickedSection.attr("id")].addClass('t-active');          
          if (typeof t607_offsetTop!="undefined") { $root.animate({ scrollTop: t607_clickedSection.offset().top - t607_offsetTop}, 500); }
          else { $root.animate({ scrollTop: t607_clickedSection.offset().top}, 500); }
          return false;
		}
  	});

	$(window).scroll( function() {
		var t607_now = new Date().getTime();
		if (t607_lastCall && t607_now < (t607_lastCall + t607_interval) ) {
				clearTimeout(t607_timeoutId);
				t607_timeoutId = setTimeout(function () {
						t607_lastCall = t607_now;
						t607_clickedSectionId = t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId);
				}, t607_interval - (t607_now - t607_lastCall) );
		} else {
				t607_lastCall = t607_now;
				t607_clickedSectionId = t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId);
		}
	});
}


function t607_getSectionByHref (curlink) {
  var t651_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
  if (curlink.is('[href*="#rec"]')) {
      return $(".r[id='" + t651_curLinkValue.substring(1) + "']");
  } else {
      return $(".r[data-record-type='215']").has("a[name='" + t651_curLinkValue.substring(1) + "']");
  }
}


function t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId) {
	var t607_scrollPosition = $(window).scrollTop(),
		t607_valueToReturn = t607_clickedSectionId;

	/*if the first section is too small*/
	if (typeof t607_sections[t607_sections.length-2]!="undefined" && t607_sections[t607_sections.length-2].offset().top <= $(window).height()/2 && t607_scrollPosition == 0) {
		t607_navLinks.removeClass('t-active');
		t607_navLink = t607_sectionIdTonavigationLink[t607_sections[t607_sections.length-1].attr("id")];
		t607_navLink.addClass('t-active');
		return null;
	}

	$(t607_sections).each(function(e) {
			var t607_curSection = $(this),
					t607_sectionTop = t607_curSection.offset().top,
					t607_id = t607_curSection.attr('id'),
					t607_navLink = t607_sectionIdTonavigationLink[t607_id];
			if ((t607_scrollPosition + $(window).height()/2) >= t607_sectionTop || (t607_sections[0].attr("id") == t607_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t607_clickedSectionId == null && !t607_navLink.hasClass('t-active')) {					
					t607_navLinks.removeClass('t-active');
					t607_navLink.addClass('t-active');
					t607_valueToReturn = null;
				} else {
					if (t607_clickedSectionId != null && t607_id == t607_clickedSectionId) {
						t607_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t607_valueToReturn;
}
 
function t608_setHeight(recid) {  
  var el=$("#rec"+recid); 
  var image = el.find(".t608__bgimg");
  image.each(function() {
    var width = $(this).attr("data-image-width");
    var height = $(this).attr("data-image-height"); 
    var ratio = height/width;
    var padding = ratio*100;      
    $(this).css("padding-bottom", padding+"%");    
  });
} 
function t609_setHeight(recid) {  
  var el=$("#rec"+recid); 
  var image = el.find(".t609__bgimg");
  image.each(function() {
    var width = $(this).attr("data-image-width");
    var height = $(this).attr("data-image-height"); 
    var ratio = height/width;
    var padding = ratio*100;      
    $(this).css("padding-bottom", padding+"%");    
  });
}

function t609_init(recid){
  var el = $('#rec'+recid),
      element = el.find('.t609__descr'),
      highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t615_init(recid) {
    var el = $('#rec' + recid);

    if (el.find('.t615__title').length) {
        t615_equalHeight(el.find('.t615__title'));
    }
    if (el.find('.t615__descr').length) {
        t615_equalHeight(el.find('.t615__descr'));
    }
    if (el.find('.t615__price').length) {
        t615_equalHeight(el.find('.t615__price'));
    }
    if (el.find('.t615__imgwrapper').length) {
        t615_equalHeight(el.find('.t615__imgwrapper'));
        $(window).on('load', function () {
            t615_equalHeight(el.find('.t615__imgwrapper'));
        });
    }
}

function t615_equalHeight(element) {
    var highestBox = 0;

    element.css('height', '');

    element.each(function () {
        if ($(this).height() > highestBox) highestBox = $(this).height();
    });

    if ($(window).width() >= 960) {
        element.css('height', highestBox);
    } else {
        element.css('height', '');
    }
} 
function t616_init(recid){
  var el = $('#rec'+recid);

  if (el.find('.t616__title').length) {
    t616_equalHeight(el.find('.t616__title'));
  }
  if (el.find('.t616__text').length) {
    t616_equalHeight(el.find('.t616__text'));
  }
  if (el.find('.t616__price').length) {
    t616_equalHeight(el.find('.t616__price'));
  }
  t616_equalHeight(el.find('.t616__header'));
};

function t616_equalHeight(element) {
  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t635_init(recid) {
    var el = $("#rec" + recid);
    var data = el.find(".t635__textholder");
    var animRecId = data.attr("data-recid");
    var screenmin = parseInt($("#rec" + animRecId).attr("data-screen-min"), 10);
    var screenmax = parseInt($("#rec" + animRecId).attr("data-screen-max"), 10);

    if (isNaN(screenmax) && isNaN(screenmin)) {
        t635_startType(recid);
    } else if (!isNaN(screenmax) && !isNaN(screenmin)) {
        if ($(window).width() >= screenmin && $(window).width() <= screenmax) {
            t635_startType(recid);
        }
    } else if (!isNaN(screenmax)) {
        if ($(window).width() <= screenmax) {
            t635_startType(recid);
        }
    } else if (!isNaN(screenmin)) {
        if ($(window).width() >= screenmin) {
            t635_startType(recid);
        }
    }
}

function t635_startType(recid) {
    var t635_el = $('#rec' + recid),
        t635_data = t635_el.find(".t635__textholder"),
        t635_animRecId = t635_data.attr("data-recid"),
        t635_animText = t635_findAnimElem(t635_animRecId),
        t635_phrasesList = [],
        t635_phrase1 = t635_data.attr("data-text1"),
        t635_phrase2 = t635_data.attr("data-text2"),
        t635_phrase3 = t635_data.attr("data-text3"),
        t635_phrase4 = t635_data.attr("data-text4"),
        t635_phrase5 = t635_data.attr("data-text5"),
        t635_speed = t635_data.attr("data-speed"),
        t635_loop = t635_data.attr("data-loop"),
        t635_backspaceDelay = t635_data.attr("data-backspacing-delay");
    if (typeof t635_animText == "undefined") {
        return;
    }
    if (typeof t635_phrase1 != "undefined") {
        t635_phrasesList.push(t635_phrase1.slice(0, 80));
    }
    if (typeof t635_phrase2 != "undefined") {
        t635_phrasesList.push(t635_phrase2.slice(0, 80));
    }
    if (typeof t635_phrase3 != "undefined") {
        t635_phrasesList.push(t635_phrase3.slice(0, 80));
    }
    if (typeof t635_phrase4 != "undefined") {
        t635_phrasesList.push(t635_phrase4.slice(0, 80));
    }
    if (typeof t635_phrase5 != "undefined") {
        t635_phrasesList.push(t635_phrase5.slice(0, 80));
    }

    if (t635_animText.length !== 0 && t635_phrasesList.length !== 0) {
        var t635_animTextHtml = t635_animText.html(),
            t635_animTextSplitted = t635_animTextHtml.split("|"),
            t635_curWin = $(window);
        t635_animText.html(t635_animTextSplitted[0] + "<span class=\"t635__typing-text\"></span>" + t635_animTextSplitted[1]);

        t635_updateAnimTextLimits(t635_animRecId);
        t635_curWin.bind('resize', t_throttle(function () {
            t635_updateAnimTextLimits(t635_animRecId);
        }, 200));
        var intervalUpdate = setInterval(function () {
            t635_updateAnimTextLimits(t635_animRecId);
        }, 5000);

        var t635_animatedText = $("#rec" + t635_animRecId + " .t635__typing-text"),
            t635_animTextTop = t635_animatedText.attr("data-top-limit"),
            t635_animTextBottom = t635_animatedText.attr("data-bottom-limit"),
            t635_winTop = t635_curWin.scrollTop(),
            t635_winBottom = t635_winTop + t635_curWin.height();
        t635_animateText(t635_animRecId, t635_phrasesList, t635_speed, t635_loop, t635_backspaceDelay);
        if (t635_animTextBottom < t635_winTop || t635_animTextTop > t635_winBottom) {
            $("#rec" + t635_animRecId + " .t635__typing-text").data('typed').pauseTyping();
            $("#rec" + t635_animRecId + " .t635__typing-text").html("");
        }

        t635_curWin.bind('scroll', t_throttle(function () {
            t635_animTextTop = t635_animatedText.attr("data-top-limit");
            t635_animTextBottom = t635_animatedText.attr("data-bottom-limit");
            t635_winTop = t635_curWin.scrollTop();
            t635_winBottom = t635_winTop + t635_curWin.height();
            if (t635_animTextBottom < t635_winTop || t635_animTextTop > t635_winBottom) {
                $("#rec" + t635_animRecId + " .t635__typing-text").data('typed').pauseTyping();
                $("#rec" + t635_animRecId + " .t635__typing-text").html("");
            } else {
                $("#rec" + t635_animRecId + " .t635__typing-text").data('typed').continueTyping();
            }
        }, 200));
    }
}

function t635_findAnimElem(animRecId) {
    var animRec = $("#rec" + animRecId);
    var animH1 = animRec.find("h1:contains(\'|\')").last();
    var animH2 = animRec.find("h2:contains(\'|\')").last();
    var animH3 = animRec.find("h3:contains(\'|\')").last();
    var animDiv = animRec.find("div:contains(\'|\')").last();
    if (typeof animH1 != "undefined" && animH1.length > 0) {
        return animH1;
    }
    if (typeof animH2 != "undefined" && animH2.length > 0) {
        return animH2;
    }
    if (typeof animH3 != "undefined" && animH3.length > 0) {
        return animH3;
    }
    if (typeof animDiv != "undefined" && animDiv.length > 0) {
        return animDiv;
    }
}

function t635_updateAnimTextLimits(t635_animRecId) {
    var t635_animatedBlock = $("#rec" + t635_animRecId),
        t635_animatedText = t635_animatedBlock.find(".t635__typing-text");
    if (typeof t635_animatedText.offset() != 'undefined') {
        t635_animatedText.attr("data-top-limit", t635_animatedText.offset().top);
        t635_animatedText.attr("data-bottom-limit", (t635_animatedBlock.offset().top + t635_animatedBlock.height()));
    }
}

function t635_animateText(t635_animRecId, t635_phrasesList, t635_speed, t635_loop, t635_backspaceDelay) {
    if (typeof t635_speed == "undefined") {
        t635_speed = 40;
    }
    if (typeof t635_backspaceDelay == "undefined") {
        t635_backspaceDelay = 800;
    }
    if (typeof t635_loop == "undefined") {
        t635_loop = true;
    } else {
        t635_loop = false;
    }
    $("#rec" + t635_animRecId + " .t635__typing-text").typed({
        strings: t635_phrasesList,
        typeSpeed: t635_speed * 1,
        startDelay: 600,
        backSpeed: 10,
        backDelay: t635_backspaceDelay * 1,
        loop: t635_loop,
        contentType: 'text'
    });
} 
function t650_unifyHeights(recid) {
if($(window).width()>=960){
	$('#rec'+recid+' .t650 .t-container .t650__row').each(function() {
		var t650_highestBox = 0,
			t650_currow = $(this);
		$('.t650__inner-col', this).each(function(){
			var t650_curCol = $(this),
                t650_curText = t650_curCol.find(".t650__text"),
                t650_curBtn = t650_curCol.find(".t650__btn-container"),
                t650_curColHeight = t650_curText.outerHeight() + t650_curBtn.outerHeight();			
			if(t650_curColHeight > t650_highestBox){t650_highestBox = t650_curColHeight;}
		});
		$('.t650__inner-col',this).css('height', t650_highestBox);
	});
} else {
	$('.t650__inner-col').css('height', 'auto');
}
}
 
function t651_initPopup(recid){
  if(window.$isMobile){
    if ($('#rec'+recid+' .t651__phone').length==0){ return; }  
    t651_phone = $('#rec'+recid+' .t651__phone').text().replace(/\s+/g, '');
    $('#rec'+recid+' .t651__btn').click(function(){
	  window.location.href="tel:"+t651_phone;	                             
      $('.t651__btn_wrapper').removeClass('t651__btn_animate');
      $('.t651__btn-text').css('display','none');	                             	
    });                         
  	return;
  }
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t651__popup'),
      analitics=el.attr('data-track-popup'),
      hook="TildaCallBackWidget"+recid,
      obj = $('#rec'+recid+' .t651__btn');
  obj.click(function(e){
    if (obj.hasClass("t651__btn_active")) {t651_closePopup(); return;}
    obj.addClass("t651__btn_active");
    t651_showPopup(recid);
    e.preventDefault();    
    if (analitics > '') {
        Tilda.sendEventToStatistics(analitics, hook);
    }
  });
}

function t651_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t651__popup');
                             
  $('.t651__btn_wrapper').removeClass('t651__btn_animate');
  $('.t651__btn-text').css('display','none');	

  popup.css('display', 'block');
  setTimeout(function() {
    popup.addClass('t651__popup_show');
  }, 50);

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t651_closePopup(); }
  });
}

function t651_closePopup(){
  $('.t651__btn').removeClass('t651__btn_active');
  $('.t651__popup').removeClass('t651__popup_show');
  setTimeout(function() {
    $('.t651__popup').not('.t651__popup_show').css('display', 'none');
  }, 300);
}

function t651_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {

   if(ga) {
     if (window.mainTracker != 'tilda') {
       ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
     }
   }

   if (window.mainMetrika > '' && window[window.mainMetrika]) {
     window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
   }

  }
}
 
function t652_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t652__popup'),
      analitics=el.attr('data-track-popup'),
      obj = $('#rec'+recid+' .t652__btn');
  obj.click(function(e){
    if (obj.hasClass("t652__btn_active")) {
		t652_closePopup();  
		return;
	}
    obj.addClass("t652__btn_active");
	$('#rec'+recid+' .t652').addClass("t652_active");
    t652_showPopup(recid);
    e.preventDefault();
    if (analitics == 'yes') {t652_sendPopupEventToStatistics(hook);}
  });
}

function t652_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t652__popup');

  $('.t652__btn_wrapper').removeClass('t652__btn_animate');
  $('.t652__btn-text').css('display','none');	

  popup.css('display', 'block');
  setTimeout(function() {
    popup.addClass('t652__popup_show');
  }, 50);

  el.find(".t652__mobile-icon-close").click(function(e){ t652_closePopup(); });	

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t652_closePopup(); }
  });
}

function t652_closePopup(){
  $('.t652').removeClass("t652_active");
  $('.t652__btn').removeClass('t652__btn_active');
  $('.t652__popup').removeClass('t652__popup_show');
  setTimeout(function() {
    $('.t652__popup').not('.t652__popup_show').css('display', 'none');
  }, 300);
}

function t652_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {

   if(ga) {
     if (window.mainTracker != 'tilda') {
       ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
     }
   }

   if (window.mainMetrika > '' && window[window.mainMetrika]) {
     window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
   }

  }
}
 
function t653_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t653__popup'),
      analitics=el.attr('data-track-popup'),
      hook="TildaSubscriptionWidget"+recid,
      obj = $('#rec'+recid+' .t653__btn');
  obj.click(function(e){
    if (obj.hasClass("t653__btn_active")) {t653_closePopup(); return;}
	$('#rec'+recid+' .t653').addClass("t653_active");
    obj.addClass("t653__btn_active");
    t653_showPopup(recid);
    e.preventDefault();
    if (analitics > '') {
        Tilda.sendEventToStatistics(analitics, hook);
    }
  });
}

function t653_lockScroll(){
  var body = $("body");
	if (!body.hasClass('t-body_scroll-locked')) {
		var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		body.addClass('t-body_scroll-locked');
    console.log("class added");
		body.css("top","-"+bodyScrollTop+"px");
    body.attr("data-popup-scrolltop",bodyScrollTop);
	}
}

function t653_unlockScroll(){
  var body = $("body");
	if (body.hasClass('t-body_scroll-locked')) {
    var bodyScrollTop = $("body").attr("data-popup-scrolltop");
		body.removeClass('t-body_scroll-locked');
		body.css("top","");
    body.removeAttr("data-popup-scrolltop")
		window.scrollTo(0, bodyScrollTop);
	}
}

function t653_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t653__popup');

  $('.t653__btn_wrapper').removeClass('t653__btn_animate');
  $('.t653__btn-text').css('display','none');	
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && $(window).width()<960) {
    console.log("lock scroll");
    setTimeout(function() {
      t653_lockScroll();
    }, 500);
  }  

  popup.css('display', 'block');
  setTimeout(function() {
    popup.addClass('t653__popup_show');
  }, 50);

  el.find(".t653__mobile-icon-close").click(function(e){ t653_closePopup(); });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t653_closePopup(); }
  });
}

function t653_closePopup(){
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    t653_unlockScroll();
  }    
  $('.t653').removeClass("t653_active");
  $('.t653__btn').removeClass('t653__btn_active');
  $('.t653__popup').removeClass('t653__popup_show');
  setTimeout(function() {
    $('.t653__popup').not('.t653__popup_show').css('display', 'none');
  }, 300);
}

/* deprecated */
function t653_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {

   if(ga) {
     if (window.mainTracker != 'tilda') {
       ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
     }
   }

   if (window.mainMetrika > '' && window[window.mainMetrika]) {
     window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
   }

  }
}
 
function t654_showPanel(recid) {
    var el = $('#rec' + recid),
        t654_block = el.find('.t654'),
        t654_closeBtn = el.find('.t654__icon-close'),
        t654_storageItem = t654_block.attr('data-storage-item'),
        t654_lastOpen = localStorage.getItem(t654_storageItem),
        t654_delta = t654_block.attr('data-storage-delta') * 86400,
        t654_today = Math.floor(Date.now() / 1000),
        t654_curDelta = t654_today - t654_lastOpen;
    if (t654_lastOpen == null || t654_curDelta >= t654_delta) {
        t654_block.removeClass('t654_closed');
    }
    t654_closeBtn.click(function (e) {
        t654_block.addClass('t654_closed');
        if (t654_delta) {
            localStorage.setItem(t654_storageItem, Math.floor(Date.now() / 1000));
        }
        e.preventDefault();
    });

    var window_width = $(window).width();
    if (window_width > 980) {
        $(window).bind('scroll', t_throttle(function () {
            if (t654_block.hasClass('t654_bottom') && $('#tildacopy').length && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 70) {
                t654_block.css('visibility', 'hidden');
            } else {
                var appearoffset = t654_block.attr('data-appearoffset');
                if (appearoffset === '') {
                    t654_block.css('visibility', 'visible');
                }
            }
        }));
    }
}


function t654_setBg(recid) {
    var el = $('#rec' + recid);
    var window_width = $(window).width();
    if (window_width > 980) {
        el.find(".t654").each(function () {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor);
            }
        });
    } else {
        el.find(".t654").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes");
        });
    }
}

function t654_appearMenu(recid) {
    var el = $('#rec' + recid);
    var window_width = $(window).width();
    if (window_width > 980) {
        el.find(".t654").each(function () {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        if (el.hasClass('t654_top')) {
                            el.css("top", "-50px");
                            el.css("visibility", "visible");
                            el.animate({
                                "opacity": "1",
                                "top": "0px"
                            }, 200);
                        } else {
                            el.css("bottom", "-50px");
                            el.css("visibility", "visible");
                            el.animate({
                                "opacity": "1",
                                "bottom": "0px"
                            }, 200);
                        }
                    }
                } else {
                    el.stop();
                    el.css("visibility", "hidden");
                }
            }
        });
    }

}

function t654_changebgopacitymenu(recid) {
    var el = $('#rec' + recid);
    var window_width = $(window).width();
    if (window_width > 980) {
        el.find(".t654").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.' + menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if (bgopacitytwo == '0' || menushadow == ' ') {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            } else {
                el.css("background-color", bgcolor);
                if (bgopacityone == '0.0' || menushadow == ' ') {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            }
        });
    }
} 
function t657_init(recid){
  var t657_el = $('#rec'+recid),
      t657_block = t657_el.find('.t657'),
      t657_closeBtn = t657_el.find('.t657__btn'),
      t657_closeIcon = t657_el.find('.t657__icon-close'),
			t657_storageItem = t657_block.attr('data-storage-item'),
			t657_lastOpen = localStorage.getItem(t657_storageItem);

  if (t657_lastOpen==null) {
  	t657_block.removeClass('t657_closed');
  }

  t657_closeBtn.add(t657_closeIcon).click(function(e){
    t657_block.addClass('t657_closed');
  	localStorage.setItem(t657_storageItem, Math.floor(Date.now() / 1000));
  	e.preventDefault();
  });
}
 
function t658_init(recid){
	$('#rec'+recid).attr('data-animationappear','off').removeClass('r_hidden').removeClass('r_anim');
	var t658_el = $('#rec'+recid),
        t658_block = t658_el.find('.t658'),
        t658_closeBtn = t658_el.find('.t658__btn'),
        t658_storageItem = t658_block.attr('data-storage-item'),        
        t658_lastOpen = localStorage.getItem(t658_storageItem);
	if (t658_lastOpen==null || t658_block.attr('data-unpublish')) {		
		t658_block.css('display','block');
		setTimeout(function() {
			t658_block.removeClass('t658_closed');
		}, 500);
		$('body').addClass('t658__body_popupshowed');
	}
	t658_closeBtn.click(function(e){
		t658_block.addClass('t658_closed');
		setTimeout(function() {
			t658_block.css('display','none');
		}, 300);
		$('body').removeClass('t658__body_popupshowed');
        localStorage.setItem(t658_storageItem, Math.floor(Date.now() / 1000));
        e.preventDefault();
	});
}
 
function t668_init(recid) {
    var el = $('#rec' + recid);
    var toggler = el.find(".t668__header");
    var accordion = el.find('.t668__accordion');
    if (accordion) {
        accordion = accordion.attr('data-accordion');
    } else {
        accordion = "false";
    }

    toggler.click(function () {
        if (accordion === "true") {
            toggler.not(this).removeClass("t668__opened").next().slideUp();
        }

        $(this).toggleClass("t668__opened");
        $(this).next().slideToggle();
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    });
}
 
function t670_init(recid) {
    t670_imageHeight(recid);
    t670_show(recid);
    t670_hide(recid);
}

function t670_show(recid) {
    var el = $('#rec' + recid);
    var play = el.find('.t670__play');
    play.click(function () {
        if ($(this).attr('data-slider-video-type') == 'youtube') {
            var url = $(this).attr('data-slider-video-url');
            $(this).next().html("<iframe class=\"t670__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/" + url + "?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen allow=\"autoplay\"></iframe>");
        }
        if ($(this).attr('data-slider-video-type') == 'vimeo') {
            var url = $(this).attr('data-slider-video-url');
            $(this).next().html("<iframe class=\"t670__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/" + url + "\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>");
        }
        $(this).next().css('z-index', '3');
    });
}

function t670_hide(recid) {
    var el = $('#rec' + recid);
    var body = el.find('.t670__frame');
    el.on('updateSlider', function () {
        body.html('').css('z-index', '');
    });
}

function t670_imageHeight(recid) {
    var el = $('#rec' + recid);
    var image = el.find('.t670__separator');
    image.each(function () {
        var width = $(this).attr('data-slider-image-width');
        var height = $(this).attr('data-slider-image-height');
        var ratio = height / width;
        var padding = ratio * 100;
        $(this).css('padding-bottom', padding + '%');
    });
} 
function t671_init(recid){
	
	var el = $('#rec'+recid);
	var c=Date.now();

	if(typeof window.t671_obj=='object'){
		var obj=window.t671_obj;
		t671_process(obj,el);
	}else{
      $.ajax({
        type: "GET",
        url: "/pages.json?c="+c,
        dataType : "text",
        success: function(data){
            if(data!=''){
                var obj = jQuery.parseJSON( data );
                if(typeof obj=='object'){
                  window.t671_obj=obj;
                  t671_process(obj,el);
                }
            }
        },
        error: function(){
        },
        timeout: 1000*10		  			  
      });	
	}
		
}
	
function t671_process(obj,el){

	var projectid=$('#allrecords').attr('data-tilda-project-id');
	var pageid=$('#allrecords').attr('data-tilda-page-id');
	var reverse=el.find('.t671__container').attr('data-reverse');
		
    if(reverse=='yes'){
		obj=obj.reverse();
	}

	var title_style=el.find('.t671').attr('data-title-style');
	var descr_style=el.find('.t671').attr('data-descr-style');
	var date_style=el.find('.t671').attr('data-date-style');
	var date_noshow=el.find('.t671').attr('data-date-noshow');

	$.each( obj, function( key, page ) {

		var str='';
		var url='/page'+page.pageid+'.html';
		if(page.alias!=''){
			url='/'+page.alias+'';
		}
		var date=page.date;
		if(date!=''){
			date=date.substring(0,10);
		}
		
		str += '<a href="'+url+'" style="font-family:Helvetica Neue, Helvetica, Arial, sans-serif; text-decoration:none; color:#000;">';
		str += '<div>';
		str += '<div style="border:1px solid #eee; width:100%; padding:20px; box-sizing:border-box; margin-bottom:40px;">';
		if(page.img!=''){
			str += '<div style="width:100%; margin-bottom:20px;"><img src="'+page.img+'" style="width:100%;"></div>';
		}
		str += '<div style="font-size:22px; margin-bottom:15px; '+title_style+'">'+page.title+'</div>';
		if(page.descr!=''){
			str += '<div style="font-size:16px; margin-bottom:20px; line-height:1.55; '+descr_style+'">'+page.descr+'</div>';
		}
		if(date!='' && date_noshow!='on'){
			str += '<div style="letter-spacing:2px; font-size:13px; opacity:0.4; margin-bottom:1px; '+date_style+'">'+date+'</div>';
		}
		str += '</div>';		
		str += '</div>';
		str += '</a>';		
		
		if(page.is_index!='y'){
	        el.find('.t671__container').append(str);
		}
			
	});
	
} 
function t674_init(recid) {
    var el = $("#rec" + recid);
    el.find('.t674__img-holder').on('load', function () {
        var delay = 0;
        if ($('#allrecords').attr('data-blocks-animationoff') !== 'yes') {
            delay = 600;
        }
        setTimeout(function () {
            $('body').addClass('t674__body_with-bg');
        }, delay);
    }).each(function () {
        if (this.complete) $(this).trigger('load');
    });
} 
function t675_init(recid) {  
  var el=$("#rec"+recid),
      textwrapper=el.find('.t675__textwrapper'),
      dots=el.find('.t-slds__bullet_wrapper');
  textwrapper.css('margin-bottom', dots.outerHeight()+7);
} 
function t678_onSuccess(t678_form){
	var t678_inputsWrapper = t678_form.find('.t-form__inputsbox');
    var t678_inputsHeight = t678_inputsWrapper.height();
    var t678_inputsOffset = t678_inputsWrapper.offset().top;
    var t678_inputsBottom = t678_inputsHeight + t678_inputsOffset;
	var t678_targetOffset = t678_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t678_target = t678_targetOffset - 200;
    }	else {
        var t678_target = t678_targetOffset - 100;
    }

    if (t678_targetOffset > $(window).scrollTop() || ($(document).height() - t678_inputsBottom) < ($(window).height() - 100)) {
        t678_inputsWrapper.addClass('t678__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t678_target}, 400);
        setTimeout(function(){t678_inputsWrapper.addClass('t678__inputsbox_hidden');}, 400);
    }

	var successurl = t678_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}

 
function t686_init(recid) {
    var el = $("#rec" + recid);

    t686_setHeight(recid);

    $(window).on('resize', t_throttle(function () {
        t686_setHeight(recid);
    }));

    el.find('.t686').bind('displayChanged', function () {
        t686_setHeight(recid);
    });
}

function t686_setHeight(recid) {
    var el = $('#rec' + recid + ' .t686'),
        ratio = el.attr('data-tile-ratio'),
        ratioHeight = el.find('.t686__col').width() * ratio;

    var largestHeight = 0;
    el.find('.t686__row').each(function () {

        $('.t686__table', this).each(function () {
            var curCol = $(this),
                curColHeight = curCol.find(".t686__textwrapper").outerHeight();
            if ($(this).find(".t686__cell").hasClass("t686__button-bottom")) {
                curColHeight += curCol.find(".t686__button-container").outerHeight();
            }
            if (curColHeight > largestHeight) {
                largestHeight = curColHeight;
            }
        });

        if ($(window).width() >= 960) {
            if (largestHeight > ratioHeight) {
                $('.t686__table', this).css('height', largestHeight);
            } else {
                $('.t686__table', this).css('height', ratioHeight);
            }
            $('.t686__table', this).css('min-height', 'auto');
        } else {
            $('.t686__table', this).css('min-height', ratioHeight);
            $('.t686__table', this).css('height', '');
        }

        if (t686_GetIEVersion() > 0) {
            var curRowHeight = $('.t686__table', this).css('height');
            $('.t686__bg', this).css('height', curRowHeight);
            $('.t686__overlay', this).css('height', curRowHeight);
        }
    });
}

function t686_GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    if (Idx > 0) {
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
    } else {
        if (!!navigator.userAgent.match(/Trident\/7\./)) {
            return 11;
        } else {
            return 0;
        }
    }
} 
function t688_unifyHeights(recid) {	
	if($(window).width()>=960){
		$('#rec'+recid+' .t688 .t-container .t688__row').each(function() {
			var t688_highestBox = 0,
				t688_currow = $(this);
			$(':not(.t688__featured) .t688__inner-col', this).each(function(){
				var t688_curCol = $(this),
                t688_curText = t688_curCol.find(".t688__textwrapper_inner"),	                
                t688_curColHeight = t688_curText.outerHeight();				
				if(t688_curColHeight > t688_highestBox){t688_highestBox = t688_curColHeight;}				
			});			
			$('.t688__textwrapper',this).css('height', t688_highestBox);
			$('.t688__featured',this).css('height',$('.t688__col',this).height()+'px');			
		});
	} else {
		$('.t688__textwrapper').css('height', 'auto');
		$("#rec"+recid).find(".t688__featured").css({'height':($("#rec"+recid).find(".t688__col").height()+'px')});
	}
} 
function t690_onSuccess(t690_form){
	var t690_inputsWrapper = t690_form.find('.t-form__inputsbox');
    var t690_inputsHeight = t690_inputsWrapper.height();
    var t690_inputsOffset = t690_inputsWrapper.offset().top;
    var t690_inputsBottom = t690_inputsHeight + t690_inputsOffset;
	var t690_targetOffset = t690_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t690_target = t690_targetOffset - 200;
    }	else {
        var t690_target = t690_targetOffset - 100;
    }

    if (t690_targetOffset > $(window).scrollTop() || ($(document).height() - t690_inputsBottom) < ($(window).height()-100)) {
        t690_inputsWrapper.addClass('t690__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);                                                                                                                           
    } else {
        $('html, body').animate({ scrollTop: t690_target}, 400);
        setTimeout(function(){t690_inputsWrapper.addClass('t690__inputsbox_hidden');}, 400);
    }
                                                                                                                           
	var successurl = t690_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }
                                                                                                                           
} 
function t691_unifyHeights(recid) {
if($(window).width()>=960){
	$('#rec'+recid+' .t691 .t-container .t691__row').each(function() {
		var t691__highestBox = 0;
		var t691__currow = $(this);
		$('.t691__col', this).each(function(){
			var t691__curcol = $(this);
			var t691__curcolinfo=t691__curcol.find('.t691__sectioninfowrapper');
			var t691__curcolpers=t691__curcol.find('.t691__personwrapper');
			var t691__curcolinnerheight = t691__curcolinfo.outerHeight() + t691__curcolpers.outerHeight();
			if(t691__curcolinnerheight > t691__highestBox){t691__highestBox = t691__curcolinnerheight;}
		});
		$('.t691__col',this).css('height', t691__highestBox);
	});
}
};
 
function t694_init(recid) {
    var el = $('#rec' + recid);
    t694_setHeight(recid);

    $(window).resize(t_throttle(function () {
        t694_setHeight(recid);
    }));

    el.find('.t694').bind('displayChanged', t_throttle(function () {
        t694_setHeight(recid);
    }));

    setTimeout(function() {
        t694_setHeight(recid);
    }, 500);
}

function t694_setHeight(recid) {
    var el = $('#rec' + recid + ' .t694');
    var t694_ratio = el.attr('data-tile-ratio');
    var t694_ratioHeight = el.find('.t694__col').width() * t694_ratio;

    if ($(window).width() >= 768) {
        el.find('.t694__row').each(function () {
            var t694_largestHeight = 0;

            $(this).find('.t694__table').each(function () {
                var t694_curCol = $(this),
                    t694_curColHeight = t694_curCol.find(".t694__textwrapper").outerHeight();
                if ($(this).find(".t694__cell").hasClass("t694__button-bottom")) {
                    t694_curColHeight += t694_curCol.find(".t694__button-container").outerHeight();
                }
                if (t694_curColHeight > t694_largestHeight) {
                    t694_largestHeight = t694_curColHeight;
                }
            });

            if (t694_largestHeight > t694_ratioHeight) {
                $(this).find('.t694__table').css('height', t694_largestHeight);
            } else {
                if ($(this).find('.t694__table').css('height') != '') {
                    $(this).find('.t694__table').css('height', '');
                }
            }
        });
    } else {
        el.find('.t694__table').css('height', '');
    }
}
 
function t696_onSuccess(t696_form){
	var t696_inputsWrapper = t696_form.find('.t-form__inputsbox');
    var t696_inputsHeight = t696_inputsWrapper.height();
    var t696_inputsOffset = t696_inputsWrapper.offset().top;
    var t696_inputsBottom = t696_inputsHeight + t696_inputsOffset;
	var t696_targetOffset = t696_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t696_target = t696_targetOffset - 200;
    }	else {
        var t696_target = t696_targetOffset - 100;
    }

    if (t696_targetOffset > $(window).scrollTop() || ($(document).height() - t696_inputsBottom) < ($(window).height() - 100)) {
        t696_inputsWrapper.addClass('t696__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t696_target}, 400);
        setTimeout(function(){t696_inputsWrapper.addClass('t696__inputsbox_hidden');}, 400);
    }

	var successurl = t696_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

} 
function t698_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         el.find(".t-cover__container").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 }

function t698_onSuccess(t698_form){
	var t698_inputsWrapper = t698_form.find('.t-form__inputsbox');
    var t698_inputsHeight = t698_inputsWrapper.height();
    var t698_inputsOffset = t698_inputsWrapper.offset().top;
    var t698_inputsBottom = t698_inputsHeight + t698_inputsOffset;
	var t698_targetOffset = t698_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t698_target = t698_targetOffset - 200;
    }	else {
        var t698_target = t698_targetOffset - 100;
    }

    if (t698_targetOffset > $(window).scrollTop() || ($(document).height() - t698_inputsBottom) < ($(window).height() - 100)) {
        t698_inputsWrapper.addClass('t698__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t698_target}, 400);
        setTimeout(function(){t698_inputsWrapper.addClass('t698__inputsbox_hidden');}, 400);
    }

	var successurl = t698_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

} 
function t700_init(recid,height){
  t700__setHeight(recid,height);

  var t700__doResize;
  $(window).resize(function(){
    clearTimeout(t700__doResize);
    t700__doResize = setTimeout(function() {
    	t700__setHeight(recid);
    }, 200);
  });
  
    $('.t700').bind('displayChanged',function(){
        t700__setHeight(recid);
    });
}

function t700__setHeight(recid,height) {
  if (height=="" || typeof height=="undefined"){
  var t700__el=$("#rec"+recid),
      t700__div=t700__el.find("#youtubeiframe"+recid),
      t700__height=t700__div.width() * 0.5625;
  t700__div.height(t700__height);
  t700__div.parent().height(t700__height);
  }
}

function t700_onSuccess(t700_form){
	var t700_inputsWrapper = t700_form.find('.t-form__inputsbox');
    var t700_inputsHeight = t700_inputsWrapper.height();
    var t700_inputsOffset = t700_inputsWrapper.offset().top;
    var t700_inputsBottom = t700_inputsHeight + t700_inputsOffset;
	var t700_targetOffset = t700_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t700_target = t700_targetOffset - 200;
    }	else {
        var t700_target = t700_targetOffset - 100;
    }

    if (t700_targetOffset > $(window).scrollTop() || ($(document).height() - t700_inputsBottom) < ($(window).height() - 100)) {
        t700_inputsWrapper.addClass('t700__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t700_target}, 400);
        setTimeout(function(){t700_inputsWrapper.addClass('t700__inputsbox_hidden');}, 400);
    }

	var successurl = t700_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t702_initPopup(recid) {
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');
    var el = $('#rec' + recid).find('.t-popup'),
        hook = el.attr('data-tooltip-hook'),
        analitics = el.attr('data-track-popup');

    el.bind('scroll', t_throttle(function () {
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    }));

    if (hook !== '') {
        $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
            t702_showPopup(recid);
            t702_resizePopup(recid);
            e.preventDefault();
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
            if (analitics > '') {
                var virtTitle = hook;
                if (virtTitle.substring(0, 7) == '#popup:') {
                    virtTitle = virtTitle.substring(7);
                }
                Tilda.sendEventToStatistics(analitics, virtTitle);
            }
        });
    }
}

function t702_onSuccess(t702_form) {
    var t702_inputsWrapper = t702_form.find('.t-form__inputsbox');
    var t702_inputsHeight = t702_inputsWrapper.height();
    var t702_inputsOffset = t702_inputsWrapper.offset().top;
    var t702_inputsBottom = t702_inputsHeight + t702_inputsOffset;
    var t702_targetOffset = t702_form.find('.t-form__successbox').offset().top;

    if ($(window).width() > 960) {
        var t702_target = t702_targetOffset - 200;
    } else {
        var t702_target = t702_targetOffset - 100;
    }

    if (t702_targetOffset > $(window).scrollTop() || ($(document).height() - t702_inputsBottom) < ($(window).height() - 100)) {
        t702_inputsWrapper.addClass('t702__inputsbox_hidden');
        setTimeout(function () {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({
                    opacity: 0
                }, 50);
            }
        }, 300);
    } else {
        $('html, body').animate({
            scrollTop: t702_target
        }, 400);
        setTimeout(function () {
            t702_inputsWrapper.addClass('t702__inputsbox_hidden');
        }, 400);
    }

    var successurl = t702_form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function () {
            window.location.href = successurl;
        }, 500);
    }

}


function t702_lockScroll() {
    var body = $("body");
    if (!body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        body.addClass('t-body_scroll-locked');
        body.css("top", "-" + bodyScrollTop + "px");
        body.attr("data-popup-scrolltop", bodyScrollTop);
    }
}

function t702_unlockScroll() {
    var body = $("body");
    if (body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = $("body").attr("data-popup-scrolltop");
        body.removeClass('t-body_scroll-locked');
        body.css("top", "");
        body.removeAttr("data-popup-scrolltop")
        window.scrollTo(0, bodyScrollTop);
    }
}


function t702_showPopup(recid) {
    var el = $('#rec' + recid),
        popup = el.find('.t-popup');

    popup.css('display', 'block');
    el.find('.t-range').trigger('popupOpened');
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
    setTimeout(function () {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
    }, 50);

    $('body').addClass('t-body_popupshowed t702__body_popupshowed');
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        setTimeout(function () {
            t702_lockScroll();
        }, 500);
    }
    el.find('.t-popup').mousedown(function (e) {
        var windowWidth = $(window).width();
        var maxScrollBarWidth = 17;
        var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
        if (e.clientX > windowWithoutScrollBar) {
            return;
        }
        if (e.target == this) {
            t702_closePopup(recid);
        }
    });

    el.find('.t-popup__close').click(function (e) {
        t702_closePopup(recid);
    });

    el.find('.t-submit[href*="#"]').click(function (e) {
        if ($('body').hasClass('t-body_scroll-locked')) {
            $('body').removeClass('t-body_scroll-locked');
        }
    });

    el.find('a[href*="#"]').click(function (e) {
        var url = $(this).attr('href');
        if (!url || url.substring(0, 7) != '#price:') {
            t702_closePopup(recid);
            if (!url || url.substring(0, 7) == '#popup:') {
                setTimeout(function () {
                    $('body').addClass('t-body_popupshowed');
                }, 300);
            }
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t702_closePopup(recid);
        }
    });
}

function t702_closePopup(recid) {
    $('body').removeClass('t-body_popupshowed t702__body_popupshowed');
    $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        t702_unlockScroll();
    }
    setTimeout(function () {
        $('.t-popup').not('.t-popup_show').css('display', 'none');
    }, 300);
}

function t702_resizePopup(recid) {
    var el = $("#rec" + recid),
        div = el.find(".t-popup__container").height(),
        win = $(window).height() - 120,
        popup = el.find(".t-popup__container");
    if (div > win) {
        popup.addClass('t-popup__container-static');
    } else {
        popup.removeClass('t-popup__container-static');
    }
}
/* deprecated */
function t702_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    'hitType': 'pageview',
                    'page': virtPage,
                    'title': virtTitle
                });
            }
        }

        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            });
        }
    }
} 
function t704_onSuccess(t704_form){
	var t704_inputsWrapper = t704_form.find('.t-form__inputsbox');
    var t704_inputsHeight = t704_inputsWrapper.height();
    var t704_inputsOffset = t704_inputsWrapper.offset().top;
    var t704_inputsBottom = t704_inputsHeight + t704_inputsOffset;
	var t704_targetOffset = t704_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t704_target = t704_targetOffset - 200;
    }	else {
        var t704_target = t704_targetOffset - 100;
    }

    if (t704_targetOffset > $(window).scrollTop() || ($(document).height() - t704_inputsBottom) < ($(window).height() - 100)) {
        t704_inputsWrapper.addClass('t704__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t704_target}, 400);
        setTimeout(function(){t704_inputsWrapper.addClass('t704__inputsbox_hidden');}, 400);
    }

	var successurl = t704_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t706_onSuccessCallback(t706_form) {
    $(".t706__cartwin-products").slideUp(10, function () {});
    $(".t706__cartwin-bottom").slideUp(10, function () {});
    $(".t706 .t-form__inputsbox").slideUp(700, function () {});
    try {
        /*fix IOS11 cursor bug + general IOS background scroll*/
        tcart__unlockScroll();
    } catch (e) {}
} 
function t708_initPopup(recid) {
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');
    var el = $('#rec' + recid).find('.t708__popup'),
        analitics = el.attr('data-track-popup'),
        hook = "TildaSendMessageWidget" + recid,
        obj = $('#rec' + recid + ' .t708__btn');
    obj.click(function (e) {
        if (obj.hasClass("t708__btn_active")) {
            t708_closePopup();
            return;
        }
        obj.addClass("t708__btn_active");
        $('#rec' + recid + ' .t708').addClass("t708_active");
        t708_showPopup(recid);
        e.preventDefault();
        if (analitics > '') {
            Tilda.sendEventToStatistics(analitics, hook);
        }
    });
}

function t708_lockScroll() {
    var body = $("body");
    if (!body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        body.addClass('t-body_scroll-locked');
        body.css("top", "-" + bodyScrollTop + "px");
        body.attr("data-popup-scrolltop", bodyScrollTop);
    }
}

function t708_unlockScroll() {
    var body = $("body");
    if (body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = $("body").attr("data-popup-scrolltop");
        body.removeClass('t-body_scroll-locked');
        body.css("top", "");
        body.removeAttr("data-popup-scrolltop")
        window.scrollTo(0, bodyScrollTop);
    }
}

function t708_showPopup(recid) {
    var el = $('#rec' + recid),
        popup = el.find('.t708__popup');

    $('.t708__btn_wrapper').removeClass('t708__btn_animate');
    $('.t708__btn-text').css('display', 'none');
    if ($(window).width() < 960) {
        $('body').addClass('t708__body_popupshowed');
    }
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && $(window).width() < 960) {
        setTimeout(function () {
            t708_lockScroll();
        }, 500);
    }

    popup.css('display', 'block');
    el.find('.t-range').trigger('popupOpened');
    setTimeout(function () {
        popup.addClass('t708__popup_show');
    }, 50);

    el.find(".t708__mobile-icon-close").click(function (e) {
        t708_closePopup();
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t708_closePopup();
        }
    });
}

function t708_closePopup() {
    if ($(window).width() < 960) {
        $('body').removeClass('t708__body_popupshowed');
    }
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        t708_unlockScroll();
    }
    $('.t708').removeClass("t708_active");
    $('.t708__btn').removeClass('t708__btn_active');
    $('.t708__popup').removeClass('t708__popup_show');
    setTimeout(function () {
        $('.t708__popup').not('.t708__popup_show').css('display', 'none');
    }, 300);
}

function t708_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {

        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    'hitType': 'pageview',
                    'page': virtPage,
                    'title': virtTitle
                });
            }
        }

        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            });
        }

    }
}


function t708_onSuccess(t708_form) {
    var t708_inputsWrapper = t708_form.find('.t-form__inputsbox');
    var t708_inputsHeight = t708_inputsWrapper.height();
    var t708_inputsOffset = t708_inputsWrapper.offset().top;
    var t708_inputsBottom = t708_inputsHeight + t708_inputsOffset;
    var t708_targetOffset = t708_form.find('.t-form__successbox').offset().top;

    if ($(window).width() > 960) {
        var t708_target = t708_targetOffset - 200;
    } else {
        var t708_target = t708_targetOffset - 100;
    }

    if (t708_targetOffset > $(window).scrollTop() || ($(document).height() - t708_inputsBottom) < ($(window).height() - 100)) {
        t708_inputsWrapper.addClass('t708__inputsbox_hidden');
        setTimeout(function () {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({
                    opacity: 0
                }, 50);
            }
        }, 300);
    } else {
        $('html, body').animate({
            scrollTop: t708_target
        }, 400);
        setTimeout(function () {
            t708_inputsWrapper.addClass('t708__inputsbox_hidden');
        }, 400);
    }

    var successurl = t708_form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function () {
            window.location.href = successurl;
        }, 500);
    }
}
 
function t712_onSuccess(t712_form){
	var t712_inputsWrapper = t712_form.find('.t-form__inputsbox');
    var t712_inputsHeight = t712_inputsWrapper.height();
    var t712_inputsOffset = t712_inputsWrapper.offset().top;
    var t712_inputsBottom = t712_inputsHeight + t712_inputsOffset;
	var t712_targetOffset = t712_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t712_target = t712_targetOffset - 200;
    }	else {
        var t712_target = t712_targetOffset - 100;
    }

    if (t712_targetOffset > $(window).scrollTop() || ($(document).height() - t712_inputsBottom) < ($(window).height() - 100)) {
        t712_inputsWrapper.addClass('t712__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t712_target}, 400);
        setTimeout(function(){t712_inputsWrapper.addClass('t712__inputsbox_hidden');}, 400);
    }

	var successurl = t712_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}


function t712_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         el.find(".t-cover__container").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 } 
function t716_onSuccess(t716_form) {
    var t716_inputsWrapper = t716_form.find('.t-form__inputsbox');
    var t716_inputsHeight = t716_inputsWrapper.height();
    var t716_inputsOffset = t716_inputsWrapper.offset().top;
    var t716_inputsBottom = t716_inputsHeight + t716_inputsOffset;
    var t716_targetOffset = t716_form.find('.t-form__successbox').offset().top;

    if ($(window).width() > 960) {
        var t716_target = t716_targetOffset - 200;
    } else {
        var t716_target = t716_targetOffset - 100;
    }

    if (t716_targetOffset > $(window).scrollTop() || ($(document).height() - t716_inputsBottom) < ($(window).height() - 100)) {
        t716_inputsWrapper.addClass('t716__inputsbox_hidden');
        setTimeout(function () {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({
                    opacity: 0
                }, 50);
            }
        }, 300);
    } else {
        $('html, body').animate({
            scrollTop: t716_target
        }, 400);
        setTimeout(function () {
            t716_inputsWrapper.addClass('t716__inputsbox_hidden');
        }, 400);
    }

    var successurl = t716_form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function () {
            window.location.href = successurl;
        }, 500);
    }

}


function t716_fixcontentheight(id) {
    /* correct cover height if content more when cover height */
    var el = $("#rec" + id);
    var hcover = el.find(".t-cover").height();
    var hcontent = el.find("div[data-hook-content]").outerHeight();
    if (hcontent > 300 && hcover < hcontent) {
        var hcontent = hcontent + 120;
        if (hcontent > 1000) {
            hcontent += 100;
        }
        console.log('auto correct cover height: ' + hcontent);
        el.find(".t-cover").height(hcontent);
        el.find(".t-cover__filter").height(hcontent);
        el.find(".t-cover__carrier").height(hcontent);
        el.find(".t-cover__wrapper").height(hcontent);
        el.find(".t-cover__container").height(hcontent);
        if ($isMobile == false) {
            setTimeout(function () {
                var divvideo = el.find(".t-cover__carrier");
                if (divvideo.find('iframe').length > 0) {
                    console.log('correct video from cover_fixcontentheight');
                    setWidthHeightYoutubeVideo(divvideo, hcontent + 'px');
                }
            }, 2000);
        }
    }
}
 
function t718_onSuccess(t718_form){
	var t718_inputsWrapper = t718_form.find('.t-form__inputsbox');
    var t718_inputsHeight = t718_inputsWrapper.height();
    var t718_inputsOffset = t718_inputsWrapper.offset().top;
    var t718_inputsBottom = t718_inputsHeight + t718_inputsOffset;
	var t718_targetOffset = t718_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t718_target = t718_targetOffset - 200;
    }	else {
        var t718_target = t718_targetOffset - 100;
    }

    if (t718_targetOffset > $(window).scrollTop() || ($(document).height() - t718_inputsBottom) < ($(window).height() - 100)) {
        t718_inputsWrapper.addClass('t718__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t718_target}, 400);
        setTimeout(function(){t718_inputsWrapper.addClass('t718__inputsbox_hidden');}, 400);
    }

	var successurl = t718_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t720_onSuccess(t720_form){
	var t720_inputsWrapper = t720_form.find('.t-form__inputsbox');
    var t720_inputsHeight = t720_inputsWrapper.height();
    var t720_inputsOffset = t720_inputsWrapper.offset().top;
    var t720_inputsBottom = t720_inputsHeight + t720_inputsOffset;
	var t720_targetOffset = t720_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t720_target = t720_targetOffset - 200;
    }	else {
        var t720_target = t720_targetOffset - 100;
    }

    if (t720_targetOffset > $(window).scrollTop() || ($(document).height() - t720_inputsBottom) < ($(window).height() - 100)) {
        t720_inputsWrapper.addClass('t720__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t720_target}, 400);
        setTimeout(function(){t720_inputsWrapper.addClass('t720__inputsbox_hidden');}, 400);
    }

	var successurl = t720_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}


function t720_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         el.find(".t-cover__container").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 }
 
function t722_onSuccess(t722_form){
	var t722_inputsWrapper = t722_form.find('.t-form__inputsbox');
    var t722_inputsHeight = t722_inputsWrapper.height();
    var t722_inputsOffset = t722_inputsWrapper.offset().top;
    var t722_inputsBottom = t722_inputsHeight + t722_inputsOffset;
	var t722_targetOffset = t722_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t722_target = t722_targetOffset - 200;
    }	else {
        var t722_target = t722_targetOffset - 100;
    }

    if (t722_targetOffset > $(window).scrollTop() || ($(document).height() - t722_inputsBottom) < ($(window).height() - 100)) {
        t722_inputsWrapper.addClass('t722__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t722_target}, 400);
        setTimeout(function(){t722_inputsWrapper.addClass('t722__inputsbox_hidden');}, 400);
    }

	var successurl = t722_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}


function t722_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         el.find(".t-cover__container").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 }
 
function t724_init(recid) {
    try {
        localStorage.setItem('localStorageTest', 1);
        localStorage.removeItem('localStorageTest');
    } catch (e) { return; }
    if (window.$isMobile) { return; }
    var el = $('#rec'+recid).find('.t724__opener');
    var name = el.attr('data-cookie-name');
    var time = el.attr('data-cookie-time')*24*60*60*1000;
    var html = document.documentElement;
    var lstorage = sessionStorage.getItem(name);
    $('html').on('mouseleave', function(e){
        if (e.clientY > 10) { return; }
        var curDate = Math.floor(Date.now());
        if (time==0){
            lstorage = sessionStorage.getItem(name);
        } else {
            lstorage = localStorage.getItem(name);
        }
        if (((lstorage==null || typeof lstorage=='undefined') && !el.hasClass('t724__opener_activated')) || (lstorage<(curDate-time) && time>0)) {
            el.trigger('click');
            el.addClass('t724__opener_activated');
            if (time==0){ sessionStorage.setItem(name, curDate); }
            if (time>0) { localStorage.setItem(name, curDate); }
        }
    });

}
 
function t734_init(recid) {
    var rec = $('#rec' + recid);
    if ($('body').find('.t830').length > 0) {
        if (rec.find('.t-slds__items-wrapper').hasClass('t-slds_animated-none')) {
            t_onFuncLoad('t_sldsInit', function () {
                t_sldsInit(recid);
            });
        } else {
            setTimeout(function() {
                t_onFuncLoad('t_sldsInit', function () {
                    t_sldsInit(recid);
                });
            }, 500);   
        }
    } else {
        t_onFuncLoad('t_sldsInit', function () {
            t_sldsInit(recid);
        });
    }

    rec.find('.t734').bind('displayChanged', function() {
        t_onFuncLoad('t_slds_updateSlider', function () {
            t_slds_updateSlider(recid);
        });
    });
} 
function t744_init(recid) {
    t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid);
    });

    setTimeout(function () {
        t_onFuncLoad('t_prod__init', function () {
            t_prod__init(recid);
        });
        t744__hoverZoom_init(recid);
    }, 500);

    $('#rec' + recid).find('.t744').bind('displayChanged', function () {
        t744_updateSlider(recid);
    });
    $('body').trigger('twishlist_addbtn');
}

function t744__hoverZoom_init(recid) {
    if (window.isMobile) {
        return;
    }
    var rec = $('#rec' + recid);
    try {
        if (rec.find('[data-hover-zoom]')[0]) {
            if (!jQuery.cachedZoomScript) {
                jQuery.cachedZoomScript = function (url) {
                    var options = {
                        dataType: 'script',
                        cache: true,
                        url: url
                    };
                    return jQuery.ajax(options);
                };
            }
            $.cachedZoomScript(
                'https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js'
            ).done(function (script, textStatus) {
                if (textStatus == 'success') {
                    setTimeout(function () {
                        t_hoverZoom_init(recid, '.t-slds__container');
                    }, 500);
                } else {
                    console.log('Upload script error: ' + textStatus);
                }
            });
        }
    } catch (e) {
        console.log('Zoom image init error: ' + e.message);
    }
}

function t744_updateSlider(recid) {
    var el = $('#rec' + recid);
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });

    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
} 
function t746_initPopup(recid) {
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');
    var el = $('#rec' + recid);
    var popup = el.find('.t-popup');
    var iframeBody = el.find('.t746__frame');
    var hook = popup.attr('data-tooltip-hook');
    var analitics = popup.attr('data-track-popup');

    t746_imageHeight(recid);
    t746_arrowWidth(recid);
    t746_show(recid);
    t746_hide(recid);

    $(window).bind('resize', t_throttle(function () {
        t746_arrowWidth(recid);
    }, 200));

    $(window).on("orientationchange", function (event) {
        setTimeout(function () {
            t_onFuncLoad('t_slds_updateSlider', function () {
                t_slds_updateSlider(recid);
            });
        }, 500);
    });

    if (hook !== '') {
        t_onFuncLoad('t_sldsInit', function () {
            t_sldsInit(recid);
        });

        popup.click(function (e) {
            if (e.target == this) {
                iframeBody.html('').css('z-index', '');
                t746_closePopup(recid);
            }
        });
    
        el.find('.t-popup__close').click(function (e) {
            iframeBody.html('').css('z-index', '');
            t746_closePopup(recid);
        });
    
        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                t746_closePopup(recid);
                iframeBody.html('').css('z-index', '');
            }
        });

        $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
            t746_showPopup(recid);
            t_onFuncLoad('t_slds_updateSlider', function () {
                t_slds_updateSlider(recid);
            });
            t746_arrowWidth(recid);
            t746_resizePopup(recid);
            e.preventDefault();
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
            if (analitics > '') {
                var virtTitle = hook;
                if (virtTitle.substring(0, 7) == '#popup:') {
                    virtTitle = virtTitle.substring(7);
                }
                Tilda.sendEventToStatistics(analitics, virtTitle);
            }
        });
    }
}

function t746_showPopup(recid) {
    var el = $('#rec' + recid);
    var popup = el.find('.t-popup');
    var iframeBody = el.find('.t746__frame');

    popup.css('display', 'block');

    setTimeout(function () {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
    }, 50);

    $('body').addClass('t-body_popupshowed');
}

function t746_closePopup(recid) {
    $('body').removeClass('t-body_popupshowed');
    $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
    setTimeout(function () {
        $('.t-popup').not('.t-popup_show').css('display', 'none');
    }, 300);
}

function t746_resizePopup(recid) {
    var el = $("#rec" + recid),
        div = el.find(".t-popup__container").height(),
        win = $(window).height(),
        popup = el.find(".t-popup__container");
    if (div > win) {
        popup.addClass('t-popup__container-static');
    } else {
        popup.removeClass('t-popup__container-static');
    }
}
/* deprecated */
function t746_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;

    if (ga) {
        if (window.mainTracker != 'tilda') {
            ga('send', {
                'hitType': 'pageview',
                'page': virtPage,
                'title': virtTitle
            });
        }
    }

    if (window.mainMetrika > '' && window[window.mainMetrika]) {
        window[window.mainMetrika].hit(virtPage, {
            title: virtTitle,
            referer: window.location.href
        });
    }
}

function t746_show(recid) {
    var el = $("#rec" + recid),
        play = el.find('.t746__play');
    play.click(function () {
        if ($(this).attr('data-slider-video-type') == 'youtube') {
            var url = $(this).attr('data-slider-video-url');
            $(this).next().html("<iframe class=\"t746__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/" + url + "?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
        }
        if ($(this).attr('data-slider-video-type') == 'vimeo') {
            var url = $(this).attr('data-slider-video-url');
            $(this).next().html("<iframe class=\"t746__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/" + url + "?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
        }
        $(this).next().css('z-index', '3');
    });
}

function t746_hide(recid) {
    var el = $("#rec" + recid),
        body = el.find('.t746__frame');
    el.on('updateSlider', function () {
        body.html('').css('z-index', '');
    });
}

function t746_imageHeight(recid) {
    var el = $("#rec" + recid);
    var image = el.find(".t746__separator");
    image.each(function () {
        var width = $(this).attr("data-slider-image-width");
        var height = $(this).attr("data-slider-image-height");
        var ratio = height / width;
        var padding = ratio * 100;
        $(this).css("padding-bottom", padding + "%");
    });
}

function t746_arrowWidth(recid) {
    var el = $("#rec" + recid),
        arrow = el.find('.t-slds__arrow_wrapper'),
        slideWidth = el.find('.t-slds__wrapper').width(),
        windowWidth = $(window).width(),
        arrowWidth = windowWidth - slideWidth;
    if (windowWidth > 960 && arrow.parents('.t-slds__arrow_container').hasClass('t-slds__arrow-nearpic')) {
        arrow.css('width', arrowWidth / 2);
    } else {
        arrow.css('width', '');
    }
}
 
function t750_init(recid){
    t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid);
    });

  setTimeout(function(){
    t_onFuncLoad('t_prod__init', function () {
        t_prod__init(recid);
    });
    t750_initPopup(recid);
    $('body').trigger('twishlist_addbtn');
  }, 500);
}

function t750_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    $('.r').on('click', 'a[href="' + hook + '"]', function(e) {
      t750_showPopup(recid);
      e.preventDefault();
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}

function t750_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup'),
      sliderWrapper = el.find('.t-slds__items-wrapper'),
      sliderWidth = el.find('.t-slds__container').width(),
      pos = parseFloat(sliderWrapper.attr('data-slider-pos'));

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    sliderWrapper = el.find('.t-slds__items-wrapper');
    sliderWidth = el.find('.t-slds__container').width();
    pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
  }, 50);

  $('body').addClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');

  el.find('.t-popup').mousedown(function(e){
    var windowWidth = $(window).width();
    var maxScrollBarWidth = 17;
    var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
    if(e.clientX > windowWithoutScrollBar) {
        return;
    }
    if (e.target == this) {
      t750_closePopup();
    }
  });

  el.find('.t-popup__close, .t750__close-text').click(function(e){
    t750_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t750_closePopup();
    }
  });
  
  /* Ugly fix preventing Safari from rendering fixed elements like our popup cross icon at wrong position
    Ticket is 81421402487 */
  if (window.isSafari) {
    setTimeout(function() {
      el.find('.t-popup').scrollTop(1);
    })
  }
}

function t750_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}
/*deprecated*/
function t750_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;

  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }

  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
} 
function t754__init(recid) {
    setTimeout(function() {
        t_onFuncLoad('t_prod__init', function () {
            t_prod__init(recid);
        });
        t754__hoverZoom_init(recid);
        t754_initPopup(recid);
        t754__updateLazyLoad(recid);
        t754__alignButtons_init(recid);
        if (typeof t_store_addProductQuantityEvents !== 'undefined') {
            t754_initProductQuantity(recid);
        }
        $('body').trigger('twishlist_addbtn');
    }, 500);
}

function t754_initProductQuantity(recid) {
    var el = $('#rec' + recid);
    var productList = el.find(".t754__col, .t754__product-full");
    productList.each(function(i, product) {
        t_store_addProductQuantityEvents($(product));
    });
}

function t754__showMore(recid) {
    var el = $('#rec' + recid).find(".t754");
    var showmore = el.find('.t754__showmore');
    var cards_count = parseInt(el.attr('data-show-count'), 10);
    
    if (cards_count > 0) {
        if (showmore.text() === '') {
            showmore.find('td').text(t754__dict('loadmore'));
        }
        
        showmore.show();
        el.find('.t754__col').hide();
    
        var cards_size = el.find('.t754__col').size();
        var cards_count = parseInt(el.attr('data-show-count'), 10);
        var x = cards_count;
        var y = cards_count;
        
        t754__showSeparator(el, x);
    
        el.find('.t754__col:lt(' + x + ')').show();
    
        showmore.click(function () {
            x = (x + y <= cards_size) ? x + y : cards_size;
            el.find('.t754__col:lt(' + x + ')').show();
            if (x == cards_size) {
                showmore.hide();
            }
            if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
                if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                    t_onFuncLoad('t_lazyload_update', function () {
                        t_lazyload_update();
                    });
                }
            }
            t754__showSeparator(el, x);
            if ($('#rec' + recid).find('[data-buttons-v-align]')[0]) {
                t754__alignButtons(recid);
            }
        });
    }
}

function t754__showSeparator(el, x) {
    el.find('.t754__separator_number').addClass('t754__separator_hide');
    el.find('.t754__separator_hide').each(function() {
        if ($(this).attr('data-product-separator-number') <= x) {
            $(this).removeClass('t754__separator_hide');
        }
    });
}

function t754__dict(msg) {
    var dict = [];

    dict['loadmore'] = {
        EN: 'Load more',
        RU: 'Загрузить еще',
        FR: 'Charger plus',
        DE: 'Mehr laden',
        ES: 'Carga más',
        PT: 'Carregue mais',
        UK: 'Завантажити ще',
        JA: 'もっと読み込む',
        ZH: '裝載更多',
    };

    var lang = window.browserLang;

    if (typeof dict[msg] !== 'undefined') {
        if (typeof dict[msg][lang] !== 'undefined' && dict[msg][lang] != '') {
            return dict[msg][lang];
        } else {
            return dict[msg]['EN'];
        }
    }

    return 'Text not found "' + msg + '"';
}

function t754__alignButtons_init(recid) {
    var el = $('#rec' + recid);
    if (el.find('[data-buttons-v-align]')[0]) {
        try {
            t754__alignButtons(recid);
            $(window).bind(
                'resize',
                t_throttle(function() {
                    if (
                        typeof window.noAdaptive !== 'undefined' &&
                        window.noAdaptive === true &&
                        $isMobile
                    ) {
                        return;
                    }
                    t754__alignButtons(recid);
                }, 200)
            );

            el.find('.t754').bind('displayChanged', function() {
                t754__alignButtons(recid);
            });

            if ($isMobile) {
                $(window).on('orientationchange', function() {
                    t754__alignButtons(recid);
                });
            }
        } catch (e) {
            console.log('buttons-v-align error: ' + e.message);
        }
    }
}

function t754__alignButtons(recid) {
    var rec = $('#rec' + recid);
    var wrappers = rec.find('.t754__textwrapper');
    var maxHeight = 0;
    var itemsInRow = rec.find('.t-container').attr('data-blocks-per-row') * 1;

    var mobileView = $(window).width() <= 480;
    var tableView = $(window).width() <= 960 && $(window).width() > 480;
    var mobileOneRow =
        $(window).width() <= 960 && rec.find('.t754__container_mobile-flex')[0]
            ? true
            : false;
    var mobileTwoItemsInRow =
        $(window).width() <= 480 && rec.find('.t754 .mobile-two-columns')[0]
            ? true
            : false;

    if (mobileView) {
        itemsInRow = 1;
    }

    if (tableView) {
        itemsInRow = 2;
    }

    if (mobileTwoItemsInRow) {
        itemsInRow = 2;
    }

    if (mobileOneRow) {
        itemsInRow = 999999;
    }

    var i = 1;
    var wrappersInRow = [];

    $.each(wrappers, function(key, element) {
        element.style.height = 'auto';
        if (itemsInRow === 1) {
            element.style.height = 'auto';
        } else {
            
            wrappersInRow.push(element);
            if (element.offsetHeight > maxHeight) {
                maxHeight = element.offsetHeight;
            }

            $.each(wrappersInRow, function(key, wrapper) {
                wrapper.style.height = maxHeight + 'px';
            });

            if (i === itemsInRow) {
                i = 0;
                maxHeight = 0;
                wrappersInRow = [];
            }

            i++;
        }
    });
}


function t754__hoverZoom_init(recid) {
    if(isMobile) {
        return;
    }
    var rec = $('#rec'+recid);
    try {
        if (rec.find('[data-hover-zoom]')[0]) {
            if (!jQuery.cachedZoomScript) {
                jQuery.cachedZoomScript = function(url) {
                    var options = {
                        dataType: 'script',
                        cache: true,
                        url: url
                    };
                    return jQuery.ajax(options);
                };
            }
            $.cachedZoomScript(
                'https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js'
            ).done(function(script, textStatus) {
                if (textStatus == 'success') {
                    setTimeout(function() {
                        t_hoverZoom_init(recid, ".t-slds__container");
                    }, 500);
                } else {
                    console.log('Upload script error: ' + textStatus);
                }
            });
        }
    } catch (e) {
        console.log('Zoom image init error: ' + e.message);
    } 
}

function t754__updateLazyLoad(recid) {
  var scrollContainer = $("#rec"+recid+" .t754__container_mobile-flex");
  var curMode = $(".t-records").attr("data-tilda-mode");
  if (scrollContainer.length && curMode!="edit" && curMode!="preview") {
    scrollContainer.bind('scroll', t_throttle(function() {
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    }));
  }
}

function t754_initPopup(recid){
  var rec=$('#rec'+recid); 
  rec.find('[href^="#prodpopup"]').one( "click", function(e) {
      e.preventDefault();	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
      var lid_prod=el_prod.attr('data-product-lid');
      t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid+' #t754__product-' + lid_prod + '');
      });
  });
  rec.find('[href^="#prodpopup"]').click(function(e){	
      e.preventDefault();
      if ($(e.target).hasClass('t1002__addBtn') || $(e.target).parents().hasClass('t1002__addBtn')) {
		return
	  }
      t754_showPopup(recid);	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  el_popup.find('.js-product').css('display','none');
	  var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]');
	  el_fullprod.css('display','block');
    
    var analitics=el_popup.attr('data-track-popup');
    if (analitics > '') {
        var virtTitle = el_fullprod.find('.js-product-name').text();
        if (! virtTitle) {
            virtTitle = 'prod'+lid_prod;
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
    }

	  var curUrl = window.location.href;
      if (curUrl.indexOf('#!/tproduct/')<0 && curUrl.indexOf('%23!/tproduct/')<0 && curUrl.indexOf('#%21%2Ftproduct%2F') < 0) {
        if (typeof history.replaceState!='undefined'){
          window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod);
        }
      }	
      t754_updateSlider(recid+' #t754__product-' + lid_prod + '');
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
  });
  if ($('#record'+recid).length==0){ t754_checkUrl(recid); }
  t754_copyTypography(recid);
}

function t754_checkUrl(recid){
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex<0){ 
      tprodIndex = curUrl.indexOf('%23!/tproduct/'); 
      if(tprodIndex<0){tprodIndex = curUrl.indexOf('#%21%2Ftproduct%2F')};
  }
  if (tprodIndex>=0){
    var curUrl = curUrl.substring(tprodIndex,curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);
    var rec=$('#rec'+recid);
    if (curUrl.indexOf(recid)>=0 && rec.find('[data-product-lid='+curProdLid+']').length) {
  	  rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click');
    }
  }
}

function t754_updateSlider(recid) {
    var el=$('#rec'+recid);
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
}

function t754_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
  }, 50);

  $('body').addClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');

  el.find('.t-popup').mousedown(function(e){
    var windowWidth = $(window).width();
    var maxScrollBarWidth = 17;
    var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
    if(e.clientX > windowWithoutScrollBar) {
        return;
    }
    if (e.target == this) {
      t754_closePopup();
    }
  });

  el.find('.t-popup__close, .t754__close-text').click(function(e){
    t754_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t754_closePopup();
    }
  });
}

function t754_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  $('body').trigger('twishlist_addbtn');
  var curUrl=window.location.href;
  var indexToRemove=curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0){ 
  indexToRemove=curUrl.indexOf('%23!/tproduct/'); 
  if(indexToRemove<0){indexToRemove = curUrl.indexOf('#%21%2Ftproduct%2F')};
  }
  curUrl=curUrl.substring(0,indexToRemove);
  setTimeout(function() {
    $(".t-popup").scrollTop(0);  
    $('.t-popup').not('.t-popup_show').css('display', 'none');
	if (typeof history.replaceState!='undefined'){
      window.history.replaceState('','',curUrl);
    }                                                                        	
  }, 300);
}

function t754_removeSizeStyles(styleStr){
	if(typeof styleStr!="undefined" && (styleStr.indexOf('font-size')>=0 || styleStr.indexOf('padding-top')>=0 || styleStr.indexOf('padding-bottom')>=0)){
		var styleStrSplitted = styleStr.split(';');
		styleStr = "";
		for (var i=0;i<styleStrSplitted.length;i++){
			if(styleStrSplitted[i].indexOf('font-size')>=0 || styleStrSplitted[i].indexOf('padding-top')>=0 || styleStrSplitted[i].indexOf('padding-bottom')>=0){
				styleStrSplitted.splice(i,1); i--; continue;
			}			
			if(styleStrSplitted[i]==""){continue;}
			styleStr+=styleStrSplitted[i]+";";
		}
	}
	return styleStr;
}

function t754_copyTypography(recid){
  var rec=$('#rec'+recid);
  var titleStyle=rec.find('.t754__title').attr('style');
	var descrStyle=rec.find('.t754__descr').attr('style');
	rec.find('.t-popup .t754__title').attr("style",t754_removeSizeStyles(titleStyle));
	rec.find('.t-popup .t754__descr, .t-popup .t754__text').attr("style",t754_removeSizeStyles(descrStyle));
} 
function t756_init(recid){
    t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid);
    });

  setTimeout(function(){
    t_onFuncLoad('t_prod__init', function () {
        t_prod__init(recid);
    });
    t756_initPopup(recid);
    $('body').trigger('twishlist_addbtn');
  }, 500);
}

function t756_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    $('.r').on('click', 'a[href="' + hook + '"]', function(e) {
      t756_showPopup(recid);
      e.preventDefault();

      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}

function t756_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup'),
      sliderWrapper = el.find('.t-slds__items-wrapper'),
      sliderWidth = el.find('.t-slds__container').width(),
      pos = parseFloat(sliderWrapper.attr('data-slider-pos'));

  popup.css('display', 'block');

  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    sliderWrapper = el.find('.t-slds__items-wrapper');
    sliderWidth = el.find('.t-slds__container').width();
    pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
  }, 50);

  $('body').addClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');

  el.find('.t-popup').mousedown(function(e){
        var windowWidth = $(window).width();
        var maxScrollBarWidth = 17;
        var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
        if (e.clientX > windowWithoutScrollBar) {
            return;
        }
        if (e.target == this) {
            t756_closePopup(recid);
        }
    });

  el.find('.t-popup__close, .t756__close-text').click(function(e){
    t756_closePopup(recid);
  });

  el.find('a[href*="#"]').click(function(e){
    var url = $(this).attr('href');
    if (!url || (url.substring(0,7) != '#price:' && url.substring(0,15) != '#addtofavorites')) {
      t756_closePopup(recid);
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t756_closePopup(recid); }
  });
}

function t756_closePopup(recid){
  $('body').removeClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');
  $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}
/* deprecated */
function t756_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
} 
function t760_init(recid) {
    setTimeout(function () {
        t_onFuncLoad('t_prod__init', function () {
            t_prod__init(recid);
        });
    }, 500);

    t760_floating(recid);
    $(window).on('resize', t_throttle(function () {
        t760_floating(recid);
    }, 300));

    $('#rec' + recid).find('.t760').on('displayChanged', function () {
        t760_floating(recid);
    });
    $('body').trigger('twishlist_addbtn');
}

function t760_floating(recid) {
    var element = $('#rec' + recid);
    if (!window.isMobile) {
        element.find(".t760__floatable[data-floating='yes']").each(function () {
            var div = $(this);
            t760_floating_init(div);
        });
    }
}

function t760_floating_init(el){
  var wnd=$(window);
  var col=el.parent();

  el.css('max-width', '');
  el.css('max-width',el.width());
  el.css('width','100%');
  col.css('min-height', '');
  col.css('min-height',el.height());
  $(window).on('load', function(){
    col.css('min-height',el.height());
  });

  wnd.bind('scroll', t_throttle(function(){
     t760_floating_scroll(el,wnd,col);
  }, 20));      

  wnd.resize(function() {
       wnd.scroll();
  });

  wnd.scroll();
}

function t760_floating_scroll(el,wnd,col){
  var wnd_height = wnd.height();
  var wnd_width = wnd.width();

  if(wnd_width<=1024){
    el.removeClass('t760__fixedTop');
    el.removeClass('t760__fixedBottom');
    el.removeClass('t760__floating');
    return('');
  }

  el.css('max-width',col.width());

  if(col.height()<el.height() && col.height()>0){
    col.height(el.height());
  }

  var el_height = el.height();
  var col_top = col.offset().top;
  var col_width = col.width();
  var col_height = col.height();
  var col_bottom = col_top + col_height;

  var wnd_top = wnd.scrollTop();
  var wnd_bottom = wnd_top + wnd_height;

  var offset = parseFloat(el.attr('data-offset-top'));

  if(wnd_top+el_height+offset >= col_bottom){
    el.css('top', '');
    el.addClass('t760__fixedBottom');
    el.removeClass('t760__fixedTop');
    el.removeClass('t760__floating');
  }else if(wnd_top+offset > col_top){
    el.css('top', offset);
    el.addClass('t760__floating');
    el.removeClass('t760__fixedBottom');
    el.removeClass('t760__fixedTop');
  }else{
    el.css('top', '');
    el.addClass('t760__fixedTop');
    el.removeClass('t760__fixedBottom');  
    el.removeClass('t760__floating');
  }
} 
function t762_init(recid){
    t_onFuncLoad('t_sldsInit', function () {
      setTimeout(function() {
        t_sldsInit(recid);
      }, 200);
    });

  setTimeout(function(){
    t_onFuncLoad('t_prod__init', function () {
        t_prod__init(recid);
    });
    t762__hoverZoom_init(recid);
  }, 500);
  
  $('#rec'+recid).find('.t762').bind('displayChanged',function(){
      t_onFuncLoad('t_slds_updateSlider', function () {
        t_slds_updateSlider(recid);
      });
  });
  $('body').trigger('twishlist_addbtn');
}

function t762__hoverZoom_init(recid) {
    if(isMobile) {
        return;
    }
    var rec = $('#rec'+recid);
    try {
        if (rec.find('[data-hover-zoom]')[0]) {
            if (!jQuery.cachedZoomScript) {
                jQuery.cachedZoomScript = function(url) {
                    var options = {
                        dataType: 'script',
                        cache: true,
                        url: url
                    };
                    return jQuery.ajax(options);
                };
            }
            $.cachedZoomScript(
                'https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js'
            ).done(function(script, textStatus) {
                if (textStatus == 'success') {
                    setTimeout(function() {
                        t_hoverZoom_init(recid, ".t-slds__container");
                    }, 500);
                } else {
                    console.log('Upload script error: ' + textStatus);
                }
            });
        }
    } catch (e) {
        console.log('Zoom image init error: ' + e.message);
    } 
} 
function t764_init(recid){
    var el = $('#rec' + recid);
    
    t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid);
    });
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'), 10);
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });

    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
    
    el.find('.t764').bind('displayChanged', function() {
        t_onFuncLoad('t_slds_updateSlider', function () {
            t_slds_updateSlider(recid);
        });
    });
}
 
function t766_init(recid){
    t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid);
    });

  setTimeout(function(){
    t_onFuncLoad('t_prod__init', function () {
        t_prod__init(recid);
    });
    t766_initPopup(recid);
    $('body').trigger('twishlist_addbtn');
  }, 500);
}

function t766_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
    t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid);
    });
  if(hook!==''){
    $('.r').on('click', 'a[href="' + hook + '"]', function(e) {
      t766_showPopup(recid);
      e.preventDefault();

      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}

function t766_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup'),
      sliderWrapper = el.find('.t-slds__items-wrapper'),
      sliderWidth = el.find('.t-slds__container').width(),
      pos = parseFloat(sliderWrapper.attr('data-slider-pos'));

  popup.css('display', 'block');

  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    sliderWrapper = el.find('.t-slds__items-wrapper');
    sliderWidth = el.find('.t-slds__container').width();
    pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
  }, 50);

  $('body').addClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');

  el.find('.t-popup').mousedown(function(e){
    var windowWidth = $(window).width();
    var maxScrollBarWidth = 17;
    var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
    if(e.clientX > windowWithoutScrollBar) {
        return;
    }
    if (e.target == this) {
      t766_closePopup(recid);
    }
  });

  el.find('.t-popup__close, .t766__close-text').click(function(e){
    t766_closePopup(recid);
  });

  el.find('a[href*="#"]').click(function(e){
    var url = $(this).attr('href');
    if (!url || (url.substring(0,7) != '#price:' && url.substring(0,15) != '#addtofavorites')) {
      t766_closePopup(recid);
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t766_closePopup(recid); }
  });
}

function t766_closePopup(recid){
  $('body').removeClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');
  $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}
/* deprecated */
function t766_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}
 
function t770_init(recid){
  var rec=$('#rec'+recid);
  var navElem=rec.find('.t770');
  var isFixed=(navElem.css('position')=='fixed');
  var redactorMode=navElem.hasClass('t770_redactor-mode');

  if(!redactorMode){
  	t770_highlight();
  	navElem.removeClass('t770__beforeready');
  	if(isFixed){
        t770_checkAnchorLinks(recid);
  	}
  	if(isFixed && navElem.attr('data-bgopacity-two')){
        t770_changebgopacitymenu(recid);
        $(window).bind('scroll', t_throttle(function(){t770_changebgopacitymenu(recid)}, 200));
  	}
    if(isFixed && navElem.attr('data-appearoffset')){
        navElem.removeClass('t770__beforeready');
        t770_appearMenu(recid);
        $(window).bind('scroll', t_throttle(function(){t770_appearMenu(recid)}, 200));
    }
  }
  if(rec.find('.t770__imglogo').attr('data-img-width')){
  	t770_setLogoPadding(recid);
  }
  if(rec.find('.t770__mobile_burger').length){
	  t770_createMobileMenu(recid);
  }

  t770_setBg(recid);
  $(window).bind('resize', t_throttle(function(){t770_setBg(recid);}, 200));
}


function t770_setLogoPadding(recid){
	if($(window).width()>980){			  
        var t770__menu = $('#rec'+recid+' .t770');
        var t770__logo=t770__menu.find('.t770__logowrapper');	  
        var t770__leftpart=t770__menu.find('.t770__leftwrapper');
        var t770__rightpart=t770__menu.find('.t770__rightwrapper');
        t770__leftpart.css("padding-right",t770__logo.width()/2+50);
        t770__rightpart.css("padding-left",t770__logo.width()/2+50);			        
	}
}

function t770_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t770__list_item a[href='"+url+"']").addClass("t-active");
  $(".t770__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t770__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t770__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t770__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t770__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t770_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t770_navLinks = $("#rec" + recid + " .t770__desktoplist .t770__list_item a:not(.tooltipstered)[href*='#']");
        if (t770_navLinks.length > 0) {
            t770_catchScroll(t770_navLinks);
        }
    }
}

function t770_catchScroll(t770_navLinks) {
    var t770_clickedSectionId = null,
        t770_sections = new Array(),
        t770_sectionIdTonavigationLink = [],
        t770_interval = 100,
        t770_lastCall, t770_timeoutId;
    t770_navLinks = $(t770_navLinks.get().reverse());
    t770_navLinks.each(function() {
        var t770_cursection = t770_getSectionByHref($(this));
        if (typeof t770_cursection.attr("id") != "undefined") {
            t770_sections.push(t770_cursection);
        }
        t770_sectionIdTonavigationLink[t770_cursection.attr("id")] = $(this);
    });
		t770_updateSectionsOffsets(t770_sections);
    t770_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t770_updateSectionsOffsets(t770_sections);}, 200));
		$('.t770').bind('displayChanged',function(){t770_updateSectionsOffsets(t770_sections);});
		setInterval(function(){t770_updateSectionsOffsets(t770_sections);},5000);
    t770_highlightNavLinks(t770_navLinks, t770_sections, t770_sectionIdTonavigationLink, t770_clickedSectionId);

    t770_navLinks.click(function() {
        var t770_clickedSection = t770_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t770_clickedSection.attr("id") != "undefined") {
            t770_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t770_clickedSectionId = t770_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t770_now = new Date().getTime();
        if (t770_lastCall && t770_now < (t770_lastCall + t770_interval)) {
            clearTimeout(t770_timeoutId);
            t770_timeoutId = setTimeout(function() {
                t770_lastCall = t770_now;
                t770_clickedSectionId = t770_highlightNavLinks(t770_navLinks, t770_sections, t770_sectionIdTonavigationLink, t770_clickedSectionId);
            }, t770_interval - (t770_now - t770_lastCall));
        } else {
            t770_lastCall = t770_now;
            t770_clickedSectionId = t770_highlightNavLinks(t770_navLinks, t770_sections, t770_sectionIdTonavigationLink, t770_clickedSectionId);
        }
    });
}


function t770_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t770_curSection = $(this);
		t770_curSection.attr("data-offset-top",t770_curSection.offset().top);
	});
}


function t770_getSectionByHref(curlink) {
    var t770_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t770_curLinkValue[0]=='/') { t770_curLinkValue = t770_curLinkValue.substring(1); }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t770_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t770_curLinkValue.substring(1) + "']");
    }
}

function t770_highlightNavLinks(t770_navLinks, t770_sections, t770_sectionIdTonavigationLink, t770_clickedSectionId) {
    var t770_scrollPosition = $(window).scrollTop(),
        t770_valueToReturn = t770_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t770_sections.length != 0 && t770_clickedSectionId == null && t770_sections[t770_sections.length-1].attr("data-offset-top") > (t770_scrollPosition + 300)){
      t770_navLinks.removeClass('t-active');
      return null;
    }

    $(t770_sections).each(function(e) {
        var t770_curSection = $(this),
            t770_sectionTop = t770_curSection.attr("data-offset-top"),
            t770_id = t770_curSection.attr('id'),
            t770_navLink = t770_sectionIdTonavigationLink[t770_id];
        if (((t770_scrollPosition + 300) >= t770_sectionTop) || (t770_sections[0].attr("id") == t770_id && t770_scrollPosition >= $(document).height() - $(window).height())) {
            if (t770_clickedSectionId == null && !t770_navLink.hasClass('t-active')) {
                t770_navLinks.removeClass('t-active');
                t770_navLink.addClass('t-active');
                t770_valueToReturn = null;
            } else {
                if (t770_clickedSectionId != null && t770_id == t770_clickedSectionId) {
                    t770_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t770_valueToReturn;
}

function t770_setPath(){
}

function t770_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t770").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t770").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t770_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t770").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t770_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t770").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t770_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t770"),
      burger=el.find(".t770__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t770_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
} 
function t772_init(recid) {
    $('.t772__container_mobile-flex').bind('touchstart', function() {
        $('.t772__col').bind('touchmove', function() {
            if (typeof $(".t-records").attr('data-tilda-mode') == 'undefined') {
                if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                    t_onFuncLoad('t_lazyload_update', function () {
                        t_lazyload_update();
                    });
                }
            }
        });
    }).mouseup(function() {
        $('.t772__col').unbind('touchend');
    });
}
 
function t774_init(recid) {
    t774_unifyHeights(recid);

    $(window).on('resize', t_throttle(function () {
        t774_unifyHeights(recid)
    }, 200));

    $(".t774").on("displayChanged", function () {
        t774_unifyHeights(recid);
    });

    $(window).on('load', function () {
        t774_unifyHeights(recid);
    });

    setTimeout(function () {
        t774__updateLazyLoad(recid);
    }, 500);
}


function t774__updateLazyLoad(recid) {
    var scrollContainer = $("#rec" + recid + " .t774__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode != "edit" && curMode != "preview" && window.lazy === "y") {
        scrollContainer.bind('scroll', t_throttle(function () {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }, 500));
    }
}


function t774_unifyHeights(recid) {
    var t774_el = $('#rec' + recid),
        t774_blocksPerRow = t774_el.find(".t774__container").attr("data-blocks-per-row"),
        t774_cols = t774_el.find(".t774__content"),
        t774_mobScroll = t774_el.find(".t774__scroll-icon-wrapper").length;

    if ($(window).width() <= 480 && t774_mobScroll == 0) {
        t774_cols.css("height", "auto");
        return;
    }

    var t774_perRow = +t774_blocksPerRow;
    if ($(window).width() <= 960 && t774_mobScroll > 0) {
        var t774_perRow = t774_cols.length;
    } else {
        if ($(window).width() <= 960) {
            var t774_perRow = 2;
        }
    }

    for (var i = 0; i < t774_cols.length; i += t774_perRow) {
        var t774_maxHeight = 0,
            t774_row = t774_cols.slice(i, i + t774_perRow);
        t774_row.each(function () {
            var t774_curText = $(this).find(".t774__textwrapper"),
                t774_curBtns = $(this).find(".t774__btn-wrapper, .t774__btntext-wrapper"),
                t774_itemHeight = t774_curText.outerHeight() + t774_curBtns.outerHeight();
            if (t774_itemHeight > t774_maxHeight) {
                t774_maxHeight = t774_itemHeight;
            }
        });
        t774_row.css("height", t774_maxHeight);
    }
} 
function t776__init(recid) {
    setTimeout(function() {
        t_onFuncLoad('t_prod__init', function () {
            t_prod__init(recid);
        });
        t776_initPopup(recid);
        t776__hoverZoom_init(recid);
        t776__updateLazyLoad(recid);
        t776__alignButtons_init(recid);
        if (typeof t_store_addProductQuantityEvents !== 'undefined') {
            t776_initProductQuantity(recid);
        }
        $('body').trigger('twishlist_addbtn');
    }, 500);
}

function t776_initProductQuantity(recid) {
    var el = $('#rec' + recid);
    var productList = el.find(".t776__col, .t776__product-full");
    productList.each(function(i, product) {
        t_store_addProductQuantityEvents($(product));
    });
}

function t776__showMore(recid) {
    var el = $('#rec' + recid).find(".t776");
    var showmore = el.find('.t776__showmore');
    var cards_count = parseInt(el.attr('data-show-count'), 10);
    
    if (cards_count > 0) {
        if (showmore.text() === '') {
            showmore.find('td').text(t776__dict('loadmore'));
        }
        
        showmore.show();
        el.find('.t776__col').hide();
    
        var cards_size = el.find('.t776__col').size();
        var x = cards_count;
        var y = cards_count;
        
        t776__showSeparator(el, x);
    
        el.find('.t776__col:lt(' + x + ')').show();
    
        showmore.click(function () {
            x = (x + y <= cards_size) ? x + y : cards_size;
            el.find('.t776__col:lt(' + x + ')').show();
            if (x == cards_size) {
                showmore.hide();
            }
            t776__showSeparator(el, x);
            if ($('#rec' + recid).find('[data-buttons-v-align]')[0]) {
                t776__alignButtons(recid);
            }
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        });
    }
}

function t776__showSeparator(el, x) {
    el.find('.t776__separator_number').addClass('t776__separator_hide');
    el.find('.t776__separator_hide').each(function() {
        if ($(this).attr('data-product-separator-number') <= x) {
            $(this).removeClass('t776__separator_hide');
        }
    });
}

function t776__dict(msg) {
    var dict = [];

    dict['loadmore'] = {
        EN: 'Load more',
        RU: 'Загрузить еще',
        FR: 'Charger plus',
        DE: 'Mehr laden',
        ES: 'Carga más',
        PT: 'Carregue mais',
        UK: 'Завантажити ще',
        JA: 'もっと読み込む',
        ZH: '裝載更多',
    };

    var lang = window.browserLang;

    if (typeof dict[msg] !== 'undefined') {
        if (typeof dict[msg][lang] !== 'undefined' && dict[msg][lang] != '') {
            return dict[msg][lang];
        } else {
            return dict[msg]['EN'];
        }
    }

    return 'Text not found "' + msg + '"';
}

function t776__alignButtons_init(recid) {
    var el = $('#rec' + recid);
    if (el.find('[data-buttons-v-align]')[0]) {
        try {
            t776__alignButtons(recid);
            $(window).bind('resize', t_throttle(function() {
                    if (
                        typeof window.noAdaptive !== 'undefined' &&
                        window.noAdaptive === true &&
                        $isMobile
                    ) {
                        return;
                    }
                    t776__alignButtons(recid);
                })
            );

            el.find('.t776').bind('displayChanged', function() {
                t776__alignButtons(recid);
            });

            if ($isMobile) {
                $(window).on('orientationchange', function() {
                    t776__alignButtons(recid);
                });
            }
        } catch (e) {
            console.log('buttons-v-align error: ' + e.message);
        }
    }
}

function t776__alignButtons(recid) {
    var rec = $('#rec' + recid);
    var wrappers = rec.find('.t776__textwrapper');
    var maxHeight = 0;
    var itemsInRow = rec.find('.t-container').attr('data-blocks-per-row') * 1;
    
    var mobileView = $(window).width() <= 480;
    var tableView = $(window).width() <= 960 && $(window).width() > 480;
    var mobileOneRow = $(window).width() <= 960 && rec.find('.t776__container_mobile-flex')[0] ? true: false;
    var mobileTwoItemsInRow = $(window).width() <= 480 && rec.find('.t776 .mobile-two-columns')[0] ? true: false;

    if (mobileView) {
        itemsInRow = 1;
    }

    if (tableView) {
        itemsInRow = 2;
    }
    
    if (mobileTwoItemsInRow) {
        itemsInRow = 2;
    }

    if (mobileOneRow) {
        itemsInRow = 999999;
    }

    var i = 1;
    var wrappersInRow = [];
    
    $.each(wrappers, function(key, element) {
        element.style.height = 'auto';
        if (itemsInRow === 1) {
            element.style.height = 'auto';
        } else {
            wrappersInRow.push(element);
            if (element.offsetHeight > maxHeight) {
                maxHeight = element.offsetHeight;
            }

            $.each(wrappersInRow, function(key, wrapper) {
                wrapper.style.height = maxHeight + 'px';
            });
            
            if (i === itemsInRow) {
                i = 0;
                maxHeight = 0;
                wrappersInRow = [];
            }

            i++;
        }
    });
}

function t776__hoverZoom_init(recid) {
    if(isMobile) {
        return;
    }
    var rec = $('#rec'+recid);
    try {
        if (rec.find('[data-hover-zoom]')[0]) {
            if (!jQuery.cachedZoomScript) {
                jQuery.cachedZoomScript = function(url) {
                    var options = {
                        dataType: 'script',
                        cache: true,
                        url: url
                    };
                    return jQuery.ajax(options);
                };
            }
            $.cachedZoomScript(
                'https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js'
            ).done(function(script, textStatus) {
                if (textStatus == 'success') {
                    setTimeout(function() {
                        t_hoverZoom_init(recid);
                    }, 500);
                } else {
                    console.log('Upload script error: ' + textStatus);
                }
            });
        }
    } catch (e) {
        console.log('Zoom image init error: ' + e.message);
    } 
}

function t776__updateLazyLoad(recid) {
    var scrollContainer = $("#rec"+recid+" .t776__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode!="edit" && curMode!="preview") {
        scrollContainer.bind('scroll', t_throttle(function() {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }));
    }
}

function t776_initPopup(recid){
    var rec=$('#rec' + recid);

    rec.find('[href^="#prodpopup"]').each(function(e) {
        var el_popup=rec.find('.t-popup');
        var el_prod=$(this).closest('.js-product');
        var lid_prod=el_prod.attr('data-product-lid');
        $(".r").find('a[href$="#!/tproduct/' + recid + '-' + lid_prod + '"]').click(function(e) {
            if (rec.find('[data-product-lid=' + lid_prod + ']').length) {
                rec.find('[data-product-lid=' + lid_prod + '] [href^="#prodpopup"]').triggerHandler('click');
            }
        });
    });

  rec.find('[href^="#prodpopup"]').one( "click", function(e) {
      e.preventDefault();	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
      var lid_prod=el_prod.attr('data-product-lid');
      t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid+' #t776__product-' + lid_prod + '');
      });
  });
  rec.find('[href^="#prodpopup"]').click(function(e){	
      e.preventDefault();
      if ($(e.target).hasClass('t1002__addBtn') || $(e.target).parents().hasClass('t1002__addBtn')) {
		return
	  }
      t776_showPopup(recid);	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  el_popup.find('.js-product').css('display','none');
	  var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]');
	  el_fullprod.css('display','block');

    var analitics=el_popup.attr('data-track-popup');
    if (analitics > '') {
        var virtTitle = el_fullprod.find('.js-product-name').text();
        if (! virtTitle) {
            virtTitle = 'prod'+lid_prod;
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
    }

      var curUrl = window.location.href;
      if (curUrl.indexOf('#!/tproduct/')<0 && curUrl.indexOf('%23!/tproduct/')<0) {
        if (typeof history.replaceState!='undefined'){
          window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod);
        }
      }
      t776_updateSlider(recid+' #t776__product-' + lid_prod + '');
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
  });
  if ($('#record'+recid).length==0){ t776_checkUrl(recid); }
  t776_copyTypography(recid);
}

function t776_checkUrl(recid){
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex<0){ tprodIndex = curUrl.indexOf('%23!/tproduct/'); }
  if (tprodIndex>=0){
    var curUrl = curUrl.substring(tprodIndex,curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);
    var rec=$('#rec'+recid);
    if (curUrl.indexOf(recid)>=0 && rec.find('[data-product-lid='+curProdLid+']').length) {
  	  rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click');
    }
  }
}

function t776_updateSlider(recid) {
    var el=$('#rec'+recid);
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
}

function t776_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
  }, 50);

  $('body').addClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');

  el.find('.t-popup').mousedown(function(e){
    var windowWidth = $(window).width();
    var maxScrollBarWidth = 17;
    var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
    if(e.clientX > windowWithoutScrollBar) {
        return;
    }
    if (e.target == this) {
      t776_closePopup();
    }
  });

  el.find('.t-popup__close, .t776__close-text').click(function(e){
    t776_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t776_closePopup();
    }
  });
    
  /* Ugly fix preventing Safari from rendering fixed elements like our popup cross icon at wrong position */
  if (window.isSafari) {
    setTimeout(function() {
      el.find('.t-popup').scrollTop(1);
    })
  }
}

function t776_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');
  $('.t-popup').removeClass('t-popup_show');
  var curUrl=window.location.href;
  var indexToRemove=curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0){ indexToRemove=curUrl.indexOf('%23!/tproduct/'); }
  curUrl=curUrl.substring(0,indexToRemove);
  setTimeout(function() {
    $(".t-popup").scrollTop(0);  
    $('.t-popup').not('.t-popup_show').css('display', 'none');
	if (typeof history.replaceState!='undefined'){
      window.history.replaceState('','',curUrl);
    }                                                                        	
  }, 300);
}

function t776_removeSizeStyles(styleStr){
	if(typeof styleStr!="undefined" && (styleStr.indexOf('font-size')>=0 || styleStr.indexOf('padding-top')>=0 || styleStr.indexOf('padding-bottom')>=0)){
		var styleStrSplitted = styleStr.split(';');
		styleStr = "";
		for (var i=0;i<styleStrSplitted.length;i++){
			if(styleStrSplitted[i].indexOf('font-size')>=0 || styleStrSplitted[i].indexOf('padding-top')>=0 || styleStrSplitted[i].indexOf('padding-bottom')>=0){
				styleStrSplitted.splice(i,1); i--; continue;
			}			
			if(styleStrSplitted[i]==""){continue;}
			styleStr+=styleStrSplitted[i]+";";
		}
	}
	return styleStr;
}

function t776_copyTypography(recid){
  var rec=$('#rec'+recid);
  var titleStyle=rec.find('.t776__title').attr('style');
	var descrStyle=rec.find('.t776__descr').attr('style');
	rec.find('.t-popup .t776__title').attr("style",t776_removeSizeStyles(titleStyle));
	rec.find('.t-popup .t776__descr, .t-popup .t776__text').attr("style",t776_removeSizeStyles(descrStyle));
} 
function t778__init(recid) {
    t_onFuncLoad('t_prod__init', function () {
        t_prod__init(recid);
    });
    t778_initPopup(recid);
    t778__hoverZoom_init(recid);
    t778__updateLazyLoad(recid);
    t778__alignButtons_init(recid);
    t778__showMore(recid);
    if (typeof t_store_addProductQuantityEvents !== 'undefined') {
        t778_initProductQuantity(recid);
    }
    $('body').trigger('twishlist_addbtn');
}

function t778_initProductQuantity(recid) {
    var el = $('#rec' + recid);
    var productList = el.find(".t778__col, .t778__product-full");
    productList.each(function(i, product) {
        t_store_addProductQuantityEvents($(product));
    });
}

function t778__showMore(recid) {
    var el = $('#rec' + recid).find(".t778");
    var showmore = el.find('.t778__showmore');
    var cards_count = parseInt(el.attr('data-show-count'), 10);
    
    if (cards_count > 0) {
        if (showmore.text() === '') {
            showmore.find('td').text(t778__dict('loadmore'));
        }
        
        showmore.show();
        el.find('.t778__col').hide();
    
        var cards_size = el.find('.t778__col').size();
        var x = cards_count;
        var y = cards_count;
        
        t778__showSeparator(el, x);
    
        el.find('.t778__col:lt(' + x + ')').show();
    
        showmore.click(function () {
            x = (x + y <= cards_size) ? x + y : cards_size;
            el.find('.t778__col:lt(' + x + ')').show();
            el.trigger('displayChanged');
            if (x == cards_size) {
                showmore.hide();
            }
            t778__showSeparator(el, x);
            
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        });
    }
}

function t778__dict(msg) {
    var dict = [];

    dict['loadmore'] = {
        EN: 'Load more',
        RU: 'Загрузить еще',
        FR: 'Charger plus',
        DE: 'Mehr laden',
        ES: 'Carga más',
        PT: 'Carregue mais',
        UK: 'Завантажити ще',
        JA: 'もっと読み込む',
        ZH: '裝載更多',
    };

    var lang = window.browserLang;

    if (typeof dict[msg] !== 'undefined') {
        if (typeof dict[msg][lang] !== 'undefined' && dict[msg][lang] != '') {
            return dict[msg][lang];
        } else {
            return dict[msg]['EN'];
        }
    }

    return 'Text not found "' + msg + '"';
}

function t778__showSeparator(el, x) {
    el.find('.t778__separator_number').addClass('t778__separator_hide');
    el.find('.t778__separator_hide').each(function() {
        if ($(this).attr('data-product-separator-number') <= x) {
            $(this).removeClass('t778__separator_hide');
        }
    });
}

function t778__hoverZoom_init(recid) {
    if (isMobile) {
        return;
    }
    var rec = $('#rec' + recid);
    try {
        if (rec.find('[data-hover-zoom]')[0]) {
            if (!jQuery.cachedZoomScript) {
                jQuery.cachedZoomScript = function (url) {
                    var options = {
                        dataType: 'script',
                        cache: true,
                        url: url
                    };
                    return jQuery.ajax(options);
                };
            }
            $.cachedZoomScript(
                'https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js'
            ).done(function (script, textStatus) {
                if (textStatus == 'success') {
                    setTimeout(function () {
                        t_hoverZoom_init(recid, ".t-slds__container");
                    }, 500);
                } else {
                    console.log('Upload script error: ' + textStatus);
                }
            });
        }
    } catch (e) {
        console.log('Zoom image init error: ' + e.message);
    }
}

function t778__updateLazyLoad(recid) {
    var scrollContainer = $("#rec" + recid + " .t778__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode != "edit" && curMode != "preview") {
        scrollContainer.bind('scroll', t_throttle(function () {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }));
    }
}

function t778__alignButtons_init(recid) {
    var el = $('#rec' + recid);
    if (el.find('[data-buttons-v-align]')[0]) {
        try {
            t778__alignButtons(recid);
            $(window).bind('resize', t_throttle(function () {
                if (
                    typeof window.noAdaptive !== 'undefined' &&
                    window.noAdaptive === true &&
                    $isMobile
                ) {
                    return;
                }
                t778__alignButtons(recid);
            }));

            el.find('.t778').bind('displayChanged', function () {
                t778__alignButtons(recid);
            });

            if ($isMobile) {
                $(window).on('orientationchange', function () {
                    t778__alignButtons(recid);
                });
            }
        } catch (e) {
            console.log('buttons-v-align error: ' + e.message);
        }
    }
}

function t778__alignButtons(recid) {
    var rec = $('#rec' + recid);
    var contents = rec.find('.t778__content');
    var maxHeight = 0;
    var maxHeightBtns = 0;
    var itemsInRow = rec.find('.t-container').attr('data-blocks-per-row') * 1;

    var mobileView = $(window).width() <= 480;
    var tableView = $(window).width() <= 960 && $(window).width() > 480;
    var mobileOneRow = $(window).width() <= 960 && rec.find('.t778__container_mobile-flex')[0] ? true : false;
    var mobileTwoItemsInRow = $(window).width() <= 480 && rec.find('.t778 .mobile-two-columns')[0] ? true : false;

    if (mobileView) {
        itemsInRow = 1;
    }

    if (tableView) {
        itemsInRow = 2;
    }

    if (mobileTwoItemsInRow) {
        itemsInRow = 2;
    }

    if (mobileOneRow) {
        itemsInRow = 999999;
    }

    var i = 1;
    var textWrappersInRow = [];
    var btnWrappersInRow = [];

    $.each(contents, function (key, content) {
        var textWrapper = $(content).find('.t778__textwrapper');
        if (textWrapper.length > 0) {
            textWrapper = textWrapper[0];
            textWrapper.style.height = 'auto';
            if (itemsInRow === 1) {
                textWrapper.style.height = 'auto';
            } else {
                textWrappersInRow.push(textWrapper);
                if (textWrapper.offsetHeight > maxHeight) {
                    maxHeight = textWrapper.offsetHeight;
                }
    
                $.each(textWrappersInRow, function (key, wrapper) {
                    wrapper.style.height = maxHeight + 'px';
                });
            }
        }

        var btnWrapper = $(content).find('.t778__btn-wrapper');
        if (btnWrapper.length > 0) {
            btnWrapper = btnWrapper[0];
            btnWrapper.style.marginTop = '';
            if (itemsInRow === 1) {
                btnWrapper.style.marginTop = '';
            } else {
                btnWrappersInRow.push(btnWrapper);
                if (btnWrapper.offsetHeight > maxHeightBtns) {
                    maxHeightBtns = btnWrapper.offsetHeight;
                }
    
                $.each(btnWrappersInRow, function (key, btn) {
                    if (maxHeightBtns > btn.offsetHeight) {
                        btn.style.marginTop = (maxHeightBtns - btn.offsetHeight) + 'px';
                    }
                });
            }
        }

        if (i === itemsInRow) {
            i = 0;
            maxHeight = 0;
            textWrappersInRow = [];
            maxHeightBtns = 0;
            btnWrappersInRow = [];
        }

        i++;
    });
}

function t778_initPopup(recid) {
    var rec = $('#rec' + recid);

    rec.find('[href^="#prodpopup"]').each(function (e) {
        var el_popup = rec.find('.t-popup');
        var el_prod = $(this).closest('.js-product');
        var lid_prod = el_prod.attr('data-product-lid');
        $(".r").find('a[href$="#!/tproduct/' + recid + '-' + lid_prod + '"]').click(function (e) {
            if (rec.find('[data-product-lid=' + lid_prod + ']').length) {
                rec.find('[data-product-lid=' + lid_prod + '] [href^="#prodpopup"]').triggerHandler('click');
            }
        });
    });

    rec.find('[href^="#prodpopup"]').one("click", function (e) {
        e.preventDefault();
        var el_popup = rec.find('.t-popup');
        var el_prod = $(this).closest('.js-product');
        var lid_prod = el_prod.attr('data-product-lid');
        t_onFuncLoad('t_sldsInit', function () {
            t_sldsInit(recid + ' #t778__product-' + lid_prod + '');
        });
    });
    rec.find('[href^="#prodpopup"]').click(function (e) {
        e.preventDefault();
        if ($(e.target).hasClass('t1002__addBtn') || $(e.target).parents().hasClass('t1002__addBtn')) {
		  return;
	    }
        t778_showPopup(recid);
        var el_popup = rec.find('.t-popup');
        var el_prod = $(this).closest('.js-product');
        var lid_prod = el_prod.attr('data-product-lid');
        el_popup.find('.js-product').css('display', 'none');
        var el_fullprod = el_popup.find('.js-product[data-product-lid="' + lid_prod + '"]');
        el_fullprod.css('display', 'block');

        var analitics = el_popup.attr('data-track-popup');
        if (analitics > '') {
            var virtTitle = el_fullprod.find('.js-product-name').text();
            if (!virtTitle) {
                virtTitle = 'prod' + lid_prod;
            }
            Tilda.sendEventToStatistics(analitics, virtTitle);
        }

        var curUrl = window.location.href;
        if (curUrl.indexOf('#!/tproduct/') < 0 && curUrl.indexOf('%23!/tproduct/') < 0) {
            if (typeof history.replaceState != 'undefined') {
                window.history.replaceState('', '', window.location.href + '#!/tproduct/' + recid + '-' + lid_prod);
            }
        }
        t778_updateSlider(recid + ' #t778__product-' + lid_prod + '');
        setTimeout(function () {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }, 500);
    });
    if ($('#record' + recid).length == 0) {
        t778_checkUrl(recid);
    }
    t778_copyTypography(recid);
}

function t778_checkUrl(recid) {
    var curUrl = window.location.href;
    var tprodIndex = curUrl.indexOf('#!/tproduct/');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex < 0) {
        tprodIndex = curUrl.indexOf('%23!/tproduct/');
    }
    if (tprodIndex >= 0) {
        var curUrl = curUrl.substring(tprodIndex, curUrl.length);
        var curProdLid = curUrl.substring(curUrl.indexOf('-') + 1, curUrl.length);
        var rec = $('#rec' + recid);
        if (curUrl.indexOf(recid) >= 0 && rec.find('[data-product-lid=' + curProdLid + ']').length) {
            rec.find('[data-product-lid=' + curProdLid + '] [href^="#prodpopup"]').triggerHandler('click');
        }
    }
}

function t778_updateSlider(recid) {
    var el = $('#rec' + recid);
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
}

function t778_showPopup(recid) {
    var el = $('#rec' + recid);
    var popup = el.find('.t-popup');

    popup.css('display', 'block');
    setTimeout(function () {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    }, 50);

    $('body').addClass('t-body_popupshowed');
    $('body').trigger('twishlist_addbtn');

    el.find('.t-popup').mousedown(function (e) {
        var windowWidth = $(window).width();
        var maxScrollBarWidth = 17;
        var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
        if (e.clientX > windowWithoutScrollBar) {
            return;
        }
        if (e.target == this) {
            t778_closePopup();
        }
    });

    el.find('.t-popup__close, .t778__close-text').click(function (e) {
        t778_closePopup();
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t778_closePopup();
        }
    });
}

function t778_closePopup() {
    $('body').removeClass('t-body_popupshowed');
    $('body').trigger('twishlist_addbtn');
    $('.t-popup').removeClass('t-popup_show');
    var curUrl = window.location.href;
    var indexToRemove = curUrl.indexOf('#!/tproduct/');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove < 0) {
        indexToRemove = curUrl.indexOf('%23!/tproduct/');
    }
    curUrl = curUrl.substring(0, indexToRemove);
    setTimeout(function () {
        $(".t-popup").scrollTop(0);
        $('.t-popup').not('.t-popup_show').css('display', 'none');
        if (typeof history.replaceState != 'undefined') {
            window.history.replaceState('', '', curUrl);
        }
    }, 300);
}

function t778_removeSizeStyles(styleStr) {
    if (typeof styleStr != "undefined" && (styleStr.indexOf('font-size') >= 0 || styleStr.indexOf('padding-top') >= 0 || styleStr.indexOf('padding-bottom') >= 0)) {
        var styleStrSplitted = styleStr.split(';');
        styleStr = "";
        for (var i = 0; i < styleStrSplitted.length; i++) {
            if (styleStrSplitted[i].indexOf('font-size') >= 0 || styleStrSplitted[i].indexOf('padding-top') >= 0 || styleStrSplitted[i].indexOf('padding-bottom') >= 0) {
                styleStrSplitted.splice(i, 1);
                i--;
                continue;
            }
            if (styleStrSplitted[i] == "") {
                continue;
            }
            styleStr += styleStrSplitted[i] + ";";
        }
    }
    return styleStr;
}

function t778_copyTypography(recid) {
    var rec = $('#rec' + recid);
    var titleStyle = rec.find('.t778__title').attr('style');
    var descrStyle = rec.find('.t778__descr').attr('style');
    rec.find('.t-popup .t778__title').attr("style", t778_removeSizeStyles(titleStyle));
    rec.find('.t-popup .t778__descr, .t-popup .t778__text').attr("style", t778_removeSizeStyles(descrStyle));
}

/* compability */
function t778_unifyHeights(recid) {
    var t778_el = $('#rec' + recid),
        t778_blocksPerRow = t778_el.find(".t778__container").attr("data-blocks-per-row"),
        t778_cols = t778_el.find(".t778__textwrapper"),
        t778_mobScroll = t778_el.find(".t778__scroll-icon-wrapper").length;

    if ($(window).width() <= 480 && t778_mobScroll == 0) {
        t778_cols.css("height", "auto");
        return;
    }

    var t778_perRow = +t778_blocksPerRow;
    if ($(window).width() <= 960 && t778_mobScroll > 0) {
        var t778_perRow = t778_cols.length;
    } else {
        if ($(window).width() <= 960) {
            var t778_perRow = 2;
        }
    }

    for (var i = 0; i < t778_cols.length; i += t778_perRow) {
        var t778_maxHeight = 0,
            t778_row = t778_cols.slice(i, i + t778_perRow);
        t778_row.each(function () {
            var t778_curText = $(this).find(".t778__textwrapper"),
                t778_curBtns = $(this).find(".t778__btn-wrapper_absolute"),
                t778_itemHeight = t778_curText.outerHeight() + t778_curBtns.outerHeight();
            if (t778_itemHeight > t778_maxHeight) {
                t778_maxHeight = t778_itemHeight;
            }
        });
        t778_row.css("height", t778_maxHeight);
    }
} 
function t780_init(recid){
    if($("#rec"+recid+" .t-slds").length){
        t_onFuncLoad('t_sldsInit', function () {
            t_sldsInit(recid);
        });
    }    

  setTimeout(function(){
      t_onFuncLoad('t_prod__init', function () {
        t_prod__init(recid);
      });
      $('body').trigger('twishlist_addbtn');
  }, 500);
  
    $('#rec'+recid).find('.t780').bind('displayChanged',function(){
        t_onFuncLoad('t_slds_updateSlider', function () {
            t_slds_updateSlider(recid);
        });
  });  
} 
$btnpaysubmit = false;

/* new block */
$(document).ready(function() {
    window.tildaGetPaymentForm = function (price, product, paysystem, blockid, lid, uid) {
        var $allrecords = $('#allrecords');
        var formnexturl = 'htt'+'ps://forms.tildacdn'+'.com/payment/next/';
        var virtPage = '/tilda/'+blockid+'/payment/';
        var virtTitle = 'Go to payment from '+blockid;

        if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
            Tilda.sendEventToStatistics(virtPage, virtTitle, product, price);
        }

        $.ajax ({
            type: "POST",
            url: formnexturl /*$(this).attr('action')*/,
            data: {
                projectid: $allrecords.data('tilda-project-id'),
                pageid: $allrecords.data('tilda-page-id'),
                formskey: $allrecords.data('tilda-formskey'),
                price: price,
                product: product,
                system: paysystem,
                recid: blockid,
                lid: lid ? lid : '',
                uid: uid ? uid : ''
            },
            dataType : "json",
            success: function(json){
                $btnpaysubmit.removeClass('t-btn_sending');
                tildaBtnPaySubmit = '0';

                /* если нужно переслать данные дальше, в платежную систему */
                if (json && json.next && json.next.type > '') {
                    var res = window.tildaForm.payment($('#'+blockid), json.next);
                    successurl = '';
                    return false;
                }
                
                /* error */
                if (json && json.error) {
                    alert(json.error);
                }
            },
            fail: function(error){
                var txt;
                $btnpaysubmit.removeClass('t-btn_sending');
                tildaBtnPaySubmit = '0';

                if (error && error.responseText>'') {
                    txt = error.responseText+'. Please, try again later.';
                } else {
                    if (error && error.statusText) {
                        txt = 'Error ['+error.statusText+']. Please, try again later.';
                    }else {
                        txt = 'Unknown error. Please, try again later.';
                    }
                }
                alert(txt);
            },
            timeout: 10*1000
        });
        
    };
    
    if (typeof tcart__cleanPrice == 'undefined') {
        function tcart__cleanPrice (price) {
            if (typeof price=='undefined' || price=='' || price==0) {
                price=0;
            } else {
                price = price.replace(',','.');
                price = price.replace(/[^0-9\.]/g,'');
                price = parseFloat(price).toFixed(2);
                if(isNaN(price)) { price=0; }
                price = parseFloat(price);
                price = price*1;
                if (price<0) { price=0; }
            }
            return price;
        }
    }

    if (typeof tcart__escapeHtml == 'undefined') {
        function tcart__escapeHtml(text) {
            var map = {
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[<>"']/g, function(m) { return map[m]; });
        }
    }

    if ($('.js-payment-systembox').length > 0) {
        var tildaBtnPaySubmit = '0';
        $('a[href^="#order"]').off('dblclick');
        $('a[href^="#order"]').off('click');
        $('a[href^="#order"]').click(function(e){
            e.preventDefault();

            /* защита от повторной отправки */
            if (tildaBtnPaySubmit == '1') {
                return false;
            }

            if ($('.t706').length > 0) {
                var text = 'Conflict error: there are two incompatible blocks on the page: ST100 and ST105. Please go to Tilda Editor and delete one of these blocks.';
                if (window.browserLang === 'RU') {
                    text = 'Ошибка: на странице есть два несовместимых блока: ST100 и ST105. Пожалуйста, перейдите в редактор Тильды и удалите один из этих блоков.';
                }

                console.error(text);

                return false;
            }

            $btnpaysubmit = $(this);
            $btnpaysubmit.addClass('t-btn_sending');
            tildaBtnPaySubmit = '1';

            var tmp = $(this).attr('href');
            var arParam, price=0, product='', lid='', uid='';
            if (tmp.substring(0,7) == '#order:') {
                /* format:  #order:Product name=Cost */
                tmp = tmp.split(':');
                arParam = tmp[1].split('=');
                price = tcart__cleanPrice(arParam[1]);
                product = tcart__escapeHtml(arParam[0]);
            } else {
                var pel=$(this).closest('.js-product');
                if(typeof pel!='undefined') {
                    if(product==''){
                            product=pel.find('.js-product-name').text();
                            if (typeof product=='undefined') { product='' };
                    }
                    if(price=='' || price==0){
                        price = pel.find('.js-product-price').text();
                        price = tcart__cleanPrice(price);
                    }
                    lid = pel.data('product-lid') || '';
                    uid = pel.data('product-uid') || pel.data('product-gen-uid') || '';

                    var optprice = 0;
                    var options=[];
                    pel.find('.js-product-option').each(function() {
                        var el_opt=$(this);
                        var op_option=el_opt.find('.js-product-option-name').text();
                        var op_variant=el_opt.find('option:selected').val();
                        var op_price=el_opt.find('option:selected').attr('data-product-variant-price');
                        op_price = tcart__cleanPrice(op_price);
                        
                        if(typeof op_option!='undefined' && typeof op_variant!='undefined'){
                            var obj={};
                            if(op_option!=''){
                                op_option = tcart__escapeHtml(op_option);
                            }
                            if(op_variant!=''){
                                op_variant = tcart__escapeHtml(op_variant);
                                op_variant = op_variant.replace(/(?:\r\n|\r|\n)/g, '');
                            }
                            if(op_option.length>1 && op_option.charAt(op_option.length-1)==':'){
                                op_option=op_option.substring(0,op_option.length-1);
                            }
                            
                            optprice = optprice + parseFloat(op_price);
                            options.push(op_option + '=' + op_variant);
                        }
                    });			

                    if (options.length > 0) {
                        product = product + ': '+options.join(', ');
                        /* price = parseFloat(optprice); */
                    }
                }
            }
            var $parent = $(this).parent();
            var blockid = $(this).closest('.r').attr('id');
            var $paysystems= $('.js-dropdown-paysystem .js-payment-system');
            
            if (!product) {
                var tmp=$(this).closest('.r').find('.title');
                if (tmp.length > 0) {
                    product = tmp.text();
                } else {
                    product = $(this).text();
                }
            }

            if ($paysystems.length == 0) {
                alert('Error: payment system is not assigned. Add payment system in the Site Settings.');
                $btnpaysubmit.removeClass('t-btn_sending');
                tildaBtnPaySubmit = '0';
                return false;
            }
            if ($paysystems.length == 1) {
                tildaGetPaymentForm(price, product, $paysystems.data('payment-system'), blockid, lid, uid);
            } else {
                var $jspaybox = $('.js-payment-systembox');
                if ( $jspaybox.length > 0) {
                    var $linkelem = $(this);
                    var offset = $linkelem.offset();
                    var itemOffsetRight = offset.left + $jspaybox.width();
                    $jspaybox.css('top',offset.top+'px');
                    
                    setItemRightCoord();
                    
                    $jspaybox.css('margin-top','-45px');
                    
                    $jspaybox.css('position','absolute');
                    $jspaybox.css('z-index','9999999');
                    
                    $jspaybox.appendTo($('body'));
                    $(window).resize(function(){
                        if ($jspaybox.css('display')=='block' && $linkelem) {
                            offset = $linkelem.offset();
                            $jspaybox.css('top',offset.top+'px');
                            setItemRightCoord();
                        }
                    });
                    /*
                    $jspaybox.css('margin-top','-45px');
                    $($parent).css('position','relative');
                    $jspaybox.appendTo($parent);
                    */
                    $jspaybox.show();
                    /*
                    var parentoffset = $(this).offset();
                    var payboxoffset = $jspaybox.offset();
                    if (parentoffset.top > parseInt(payboxoffset.top) + parseInt($jspaybox.height())) {
                        var margintop = parseInt(parentoffset.top)+parseInt($(this).height())-parseInt(payboxoffset.top)-parseInt( $jspaybox.height());
                        $jspaybox.css('margin-top', margintop+'px');
                    }
                    */
                    
                    function hideList() {
                        $btnpaysubmit.removeClass('t-btn_sending');
                        tildaBtnPaySubmit = '0';

                        $jspaybox.hide(); 
                        $('.r').off('click', hideList); 
                        return false; 
                    }
                    
                    function setItemRightCoord() {
                        if ($(window).width() < 375) {
                            $jspaybox.css('left', '50%');
                            $jspaybox.css('margin-left', -$jspaybox.width()/2);
                        } else if (itemOffsetRight > $(window).width()) {
                            $jspaybox.css('left', offset.left - (itemOffsetRight - $(window).width()));
                            $jspaybox.css('margin-left','-25px');
                        } else {
                            $jspaybox.css('left',offset.left+'px');
                            $jspaybox.css('margin-left','-25px');
                        }
                    }
                    
                    $('.r').click(hideList);

                    $('.js-payment-systembox a').off('dblclick');
                    $('.js-payment-systembox a').off('click');
                    $('.js-payment-systembox a').click(function(e){
                        e.preventDefault();
                        $jspaybox.hide();
                        $linkelem = false;
                        tildaGetPaymentForm(price, product, $(this).data('payment-system'), blockid, lid, uid);
                        return false;
                    });
                }
            }

            return false;
        });
    }
}); 
function t786__init(recid){
    setTimeout(function(){
        t_onFuncLoad('t_prod__init', function () {
            t_prod__init(recid);
        });
        t786_initPopup(recid);
        t786__hoverZoom_init(recid);
        t786__updateLazyLoad(recid);
        t786__alignButtons_init(recid);
        if (typeof t_store_addProductQuantityEvents !== 'undefined') {
            t786_initProductQuantity(recid);
        }
        $('body').trigger('twishlist_addbtn');
    }, 500);
}

function t786_initProductQuantity(recid) {
    var el = $('#rec' + recid);
    var productList = el.find(".t786__col, .t786__product-full");
    productList.each(function(i, product) {
        t_store_addProductQuantityEvents($(product));
    });
}

function t786__alignButtons_init(recid) {
    var el = $('#rec' + recid);
    if (el.find('[data-buttons-v-align]')[0]) {
        try {
            t786__alignButtons(recid);
            $(window).bind('resize', t_throttle(function() {
                if (typeof window.noAdaptive !== 'undefined' && window.noAdaptive === true && $isMobile ) { return; }
                t786__alignButtons(recid);
            }));

            el.find('.t786').bind('displayChanged', function() {
                t786__alignButtons(recid);
            });

            if ($isMobile) {
                $(window).on('orientationchange', function() {
                    t786__alignButtons(recid);
                });
            }
        } catch (e) {
            console.log('buttons-v-align error: ' + e.message);
        }
    }
}

function t786__showMore(recid) {
    var el = $('#rec' + recid).find(".t786");
    var showmore = el.find('.t786__showmore');
    var cards_count = parseInt(el.attr('data-show-count'), 10);
    
    if (cards_count > 0) {
        if (showmore.text() === '') {
            showmore.find('td').text(t786__dict('loadmore'));
        }
        
        showmore.show();
        el.find('.t786__col').hide();
    
        var cards_size = el.find('.t786__col').size();
        var x = cards_count;
        var y = cards_count;
        
        t786__showSeparator(el, x);
    
        el.find('.t786__col:lt(' + x + ')').show();
    
        showmore.click(function () {
            x = (x + y <= cards_size) ? x + y : cards_size;
            el.find('.t786__col:lt(' + x + ')').show();
            if (x == cards_size) {
                showmore.hide();
            }
            t786__showSeparator(el, x);
            if ($('#rec' + recid).find('[data-buttons-v-align]')[0]) {
                t786__alignButtons(recid);
            }
            
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        });
    }
}

function t786__dict(msg) {
    var dict = [];

    dict['loadmore'] = {
        EN: 'Load more',
        RU: 'Загрузить еще',
        FR: 'Charger plus',
        DE: 'Mehr laden',
        ES: 'Carga más',
        PT: 'Carregue mais',
        UK: 'Завантажити ще',
        JA: 'もっと読み込む',
        ZH: '裝載更多',
    };

    var lang = window.browserLang;

    if (typeof dict[msg] !== 'undefined') {
        if (typeof dict[msg][lang] !== 'undefined' && dict[msg][lang] != '') {
            return dict[msg][lang];
        } else {
            return dict[msg]['EN'];
        }
    }

    return 'Text not found "' + msg + '"';
}

function t786__showSeparator(el, x) {
    el.find('.t786__separator_number').addClass('t786__separator_hide');
    el.find('.t786__separator_hide').each(function() {
        if ($(this).attr('data-product-separator-number') <= x) {
            $(this).removeClass('t786__separator_hide');
        }
    });
}


function t786__alignButtons(recid) {
    var rec = $('#rec' + recid);
    var wrappers = rec.find('.t786__textwrapper');
    var maxHeight = 0;
    var itemsInRow = rec.find('.t-container').attr('data-blocks-per-row') * 1;

    var mobileView = $(window).width() <= 480;
    var tableView = $(window).width() <= 960 && $(window).width() > 480;
    var mobileOneRow = $(window).width() <= 960 && rec.find('.t786__container_mobile-flex')[0] ? true : false;
    var mobileTwoItemsInRow = $(window).width() <= 480 && rec.find('.t786 .mobile-two-columns')[0] ? true : false;

    if (mobileView) {
        itemsInRow = 1;
    }

    if (tableView) {
        itemsInRow = 2;
    }

    if (mobileTwoItemsInRow) {
        itemsInRow = 2;
    }

    if (mobileOneRow) {
        itemsInRow = 999999;
    }

    var i = 1;
    var wrappersInRow = [];

    $.each(wrappers, function(key, element) {
        element.style.height = 'auto';
        if (itemsInRow === 1) {
            element.style.height = 'auto';
        } else {
            wrappersInRow.push(element);
            if (element.offsetHeight > maxHeight) {
                maxHeight = element.offsetHeight;
            }

            $.each(wrappersInRow, function(key, wrapper) {
                wrapper.style.height = maxHeight + 'px';
            });

            if (i === itemsInRow) {
                i = 0;
                maxHeight = 0;
                wrappersInRow = [];
            }

            i++;
        }
    });
}


function t786__hoverZoom_init(recid) {
    if(isMobile) {
        return;
    }
    var rec = $('#rec'+recid);
    try {
        if (rec.find('[data-hover-zoom]')[0]) {
            if (!jQuery.cachedZoomScript) {
                jQuery.cachedZoomScript = function(url) {
                    var options = {
                        dataType: 'script',
                        cache: true,
                        url: url
                    };
                    return jQuery.ajax(options);
                };
            }
            $.cachedZoomScript(
                'https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js'
            ).done(function(script, textStatus) {
                if (textStatus == 'success') {
                    setTimeout(function() {
                        t_hoverZoom_init(recid, ".t-slds__container");
                    }, 500);
                } else {
                    console.log('Upload script error: ' + textStatus);
                }
            });
        }
    } catch (e) {
        console.log('Zoom image init error: ' + e.message);
    } 
}

function t786__updateLazyLoad(recid) {
    var scrollContainer = $("#rec"+recid+" .t786__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode!="edit" && curMode!="preview") {
        scrollContainer.bind('scroll', t_throttle(function() {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }));
    }
}

function t786_initPopup(recid){
  var rec=$('#rec'+recid); 
  rec.find('[href^="#prodpopup"]').one( "click", function(e) {
      e.preventDefault();	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
      var lid_prod=el_prod.attr('data-product-lid');
      t_onFuncLoad('t_sldsInit', function () {
        t_sldsInit(recid+' #t786__product-' + lid_prod + '');
      });
  });
  rec.find('[href^="#prodpopup"]').click(function(e){	
      e.preventDefault();
      if ($(e.target).hasClass('t1002__addBtn') || $(e.target).parents().hasClass('t1002__addBtn')) {
		  return;
	  }
      t786_showPopup(recid);	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  el_popup.find('.js-product').css('display','none');
	  var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]');
	  el_fullprod.css('display','block');
	  
    var analitics=el_popup.attr('data-track-popup');
    if (analitics > '') {
        var virtTitle = el_fullprod.find('.js-product-name').text();
        if (! virtTitle) {
            virtTitle = 'prod'+lid_prod;
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
    }

	  var curUrl = window.location.href;
      if (curUrl.indexOf('#!/tproduct/')<0 && curUrl.indexOf('%23!/tproduct/')<0) {
		if (typeof history.replaceState!='undefined'){
		  window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod);	
		}        
      }	
      t786_updateSlider(recid+' #t786__product-' + lid_prod + '');
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
  });
  if ($('#record'+recid).length==0){ t786_checkUrl(recid); }
  t786_copyTypography(recid);
}

function t786_checkUrl(recid){
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex<0){ tprodIndex = curUrl.indexOf('%23!/tproduct/'); }
  if (tprodIndex>=0){
    var curUrl = curUrl.substring(tprodIndex,curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);
    var rec=$('#rec'+recid);
    if (curUrl.indexOf(recid)>=0 && rec.find('[data-product-lid='+curProdLid+']').length) {
  	  rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click');
    }
  }
}

function t786_updateSlider(recid) {
    var el=$('#rec'+recid);
    t_onFuncLoad('t_slds_SliderWidth', function () {
        t_slds_SliderWidth(recid);
    });
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function () {
        t_slds_UpdateSliderHeight(recid);
    });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function () {
        t_slds_UpdateSliderArrowsHeight(recid);
    });
}

function t786_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
  }, 50);

  $('body').addClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');

  el.find('.t-popup').mousedown(function(e){
    var windowWidth = $(window).width();
    var maxScrollBarWidth = 17;
    var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
    if(e.clientX > windowWithoutScrollBar) {
        return;
    }
    if (e.target == this) {
      t786_closePopup();
    }
  });

  el.find('.t-popup__close, .t786__close-text').click(function(e){
    t786_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t786_closePopup();
    }
  });
}

function t786_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('body').trigger('twishlist_addbtn');
  $('.t-popup').removeClass('t-popup_show');
  var curUrl=window.location.href;
  var indexToRemove=curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0){ indexToRemove=curUrl.indexOf('%23!/tproduct/'); }
  curUrl=curUrl.substring(0,indexToRemove);
  setTimeout(function() {
    $(".t-popup").scrollTop(0);  
    $('.t-popup').not('.t-popup_show').css('display', 'none');
    if (typeof history.replaceState!='undefined'){
      window.history.replaceState('','',curUrl);                                                                  
    }                                                                    	                                                                        	
  }, 300);
}

function t786_removeSizeStyles(styleStr){
	if(typeof styleStr!="undefined" && (styleStr.indexOf('font-size')>=0 || styleStr.indexOf('padding-top')>=0 || styleStr.indexOf('padding-bottom')>=0)){
		var styleStrSplitted = styleStr.split(';');
		styleStr = "";
		for (var i=0;i<styleStrSplitted.length;i++){
			if(styleStrSplitted[i].indexOf('font-size')>=0 || styleStrSplitted[i].indexOf('padding-top')>=0 || styleStrSplitted[i].indexOf('padding-bottom')>=0){
				styleStrSplitted.splice(i,1); i--; continue;
			}			
			if(styleStrSplitted[i]==""){continue;}
			styleStr+=styleStrSplitted[i]+";";
		}
	}
	return styleStr;
}

function t786_copyTypography(recid){
  var rec=$('#rec'+recid);
  var titleStyle=rec.find('.t786__title').attr('style');
	var descrStyle=rec.find('.t786__descr').attr('style');
	rec.find('.t-popup .t786__title').attr("style",t786_removeSizeStyles(titleStyle));
	rec.find('.t-popup .t786__descr, .t-popup .t786__text').attr("style",t786_removeSizeStyles(descrStyle));
} 
function t788_init(recid){
  setTimeout(function(){
    $('#rec'+recid+' .t788').addClass('js-product');
    $('#rec'+recid+' .t-cover__carrier').addClass('js-product-img');      
    t_prod__init(recid);
  }, 500);
} 
function t790_init(recid) {
  $(".yButton .yButtonText").addClass("t790__yclients-btn-text");
} 
function t794_init(recid) {
    var hook = $('#rec' + recid + ' .t794').attr('data-tooltip-hook');
    if (typeof hook === "undefined" || hook === "") {
        return;
    }
    var hookLinks = $('a[href="' + hook + '"][data-submenu-disallowed!="yes"]');
    hookLinks.addClass('t794__tm-link');
    hookLinks.attr('data-tooltip-menu-id', recid);
    
    t794_addArrow(recid, hookLinks);
    t794_setUpMenu(recid, hookLinks);
    t794_highlight();
}


function t794_setUpMenu(recid, hookLinks) {
    var submenu = $('#rec' + recid + ' .t794__tooltip-menu');
    var content = submenu.find('t794__content');
    if (window.isMobile) {
        t794_setUpMenu_mobile(recid, hookLinks, submenu);
    } else {
        t794_setUpMenu_desktop(recid, hookLinks, submenu);
    }
    $(window).bind('scroll', t_throttle(function () {
        content.hover(function () {
            /* to do nothing */
        }, function () {
            if (submenu.hasClass('t794__tooltip-menu_show')) {
                t794_hideSubmenu(submenu);
            }
        });
    }, 300));
    $('.t794__tooltip-menu a[href*="#"]').click(function () {
        t794_hideSubmenu(submenu);
        $('.t450, .t199__mmenu, .t280, .t282, .t204__burger, .t451, .t466').trigger('clickedAnchorInTooltipMenu');

        $('.t794__tooltip-menu a[href*="#"]').removeClass('t-active');
        $(this).addClass('t-active');
    });
}


function t794_setUpMenu_mobile(recid, hookLinks, submenu) {
    var vIndent = $('#rec' + recid + ' .t794').attr('data-tooltip-margin');
    hookLinks.on('click', function (e) {
        if (submenu.hasClass('t794__tooltip-menu_show')) {
            t794_hideSubmenu(submenu);
        } else {
            var curAnchor = $(this);
            t794_showSubmenu(curAnchor, submenu, vIndent);
        }
        e.preventDefault();
    });
    $(document).click(function (e) {
        var isInsideSubmenu = ($(e.target).hasClass('t794__tooltip-menu') || $(e.target).parents('.t794__tooltip-menu').length > 0);
        var isAnchor = ($(e.target).hasClass('t794__tm-link') || $(e.target).parents('.t794__tm-link').length > 0);
        if (isAnchor) {
            var curAnchor;
            if ($(e.target).hasClass('t794__tm-link')) {
                curAnchor = $(e.target);
            } else {
                curAnchor = $(e.target).parents('.t794__tm-link');
            }
            if (curAnchor.attr('data-tooltip-menu-id') != recid && submenu.hasClass('t794__tooltip-menu_show')) {
                t794_hideSubmenu(submenu);
            }
        }
        if (!isInsideSubmenu && !isAnchor && submenu.hasClass('t794__tooltip-menu_show')) {
            t794_hideSubmenu(submenu);
        }
    });
}


function t794_setUpMenu_desktop(recid, hookLinks, submenu) {
    var vIndent = $('#rec' + recid + ' .t794').attr('data-tooltip-margin');
    var timer;
    hookLinks.add(submenu).on('mouseover', function () {
        /*if submenu is hovered while disappearing*/
        if ($(this).hasClass('t794__tooltip-menu') && !$(this).hasClass('t794__tooltip-menu_show')) {
            return;
        }
        clearTimeout(timer);
        /*if link is already hoverd and now hover is on submenu element*/
        if ($(this).hasClass('t794__tooltip-menu') && submenu.hasClass('t794__tooltip-menu_show')) {
            return;
        }
        var curAnchor = $(this);
        t794_showSubmenu(curAnchor, submenu, vIndent);
    });
    hookLinks.add(submenu).on('mouseout', function () {
        timer = setTimeout(function () {
            t794_hideSubmenu(submenu);
        }, 300);
    });
    hookLinks.on('click', function (e) {
        e.preventDefault();
    });
}


function t794_showSubmenu(curAnchor, submenu, vIndent) {
    var submenuHeight = submenu.outerHeight();
    var submenuWidth = submenu.outerWidth();
    var anchorHeight = curAnchor.height();
    var anchorWidth = curAnchor.width();
    if (curAnchor.hasClass('t-btn')) {
        anchorWidth = curAnchor.outerWidth();
    }
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var scrollTop = $(window).scrollTop();
    var anchorLeft = curAnchor.offset().left;
    var anchorTop = curAnchor.offset().top;
    submenu.attr('data-pos-fixed', 'no');
    
    var parentMenu = curAnchor.closest('[data-menu="yes"]');
    
    if (parentMenu.length && parentMenu.css('position') === 'fixed') {
        submenu.attr('data-pos-fixed', 'yes');
    }
    var menuFixed = submenu.attr('data-pos-fixed');
    var submenuContent = submenu.find('.t794__content');
    
    if (typeof vIndent != 'undefined' && vIndent != '') {
        vIndent = vIndent.replace('px', '') * 1;
        /*add arrow*/
        vIndent = vIndent + 10;
    }
    
    var posy;
    if (menuFixed == 'yes') {
        posy = (anchorTop - scrollTop) + anchorHeight + vIndent;
        submenu.css('position', 'fixed');
        submenu.removeClass('t794__tooltip-menu_top').addClass('t794__tooltip-menu_bottom');
        submenuContent.css('max-height', 'calc(100vh - ' + posy + 'px)');
    } else {
        posy = anchorTop + anchorHeight + vIndent;
        submenu.css('position', 'absolute');
        /*detect posy, show on the top or bottom?*/
       
        var topSpace = anchorTop - scrollTop,
            bottomSpace = winHeight - topSpace;
    
        if (posy + submenuHeight > scrollTop + winHeight && topSpace > bottomSpace) {
            posy = posy - submenuHeight - anchorHeight - vIndent * 2;
            submenu.removeClass('t794__tooltip-menu_bottom').addClass('t794__tooltip-menu_top');
        } else {
            submenu.removeClass('t794__tooltip-menu_top').addClass('t794__tooltip-menu_bottom');
        }
    }
    
    var posx = anchorLeft;
    
    if (posx + submenuWidth / 2 < winWidth) {
        /*show in the center of anchor*/
        posx = posx + (anchorWidth - submenuWidth) / 2;
        /*show near left window border*/
        if (posx < 0) {
            posx = 10;
        }
    } else {
        /*show near right window border*/
        posx = winWidth - submenuWidth - 10;
    }
    submenu.css({
        'display': 'block',
        'left': posx,
        'top': posy
    });
    submenu[0].offsetHeight;
    submenu.addClass('t794__tooltip-menu_show');
    curAnchor.addClass('t794__tm-link_active');
}


function t794_hideSubmenu(submenu) {
    submenu.css({
        'display': '',
        'left': '',
        'top': ''
    });
    submenu.removeClass('t794__tooltip-menu_show');
    $('.t794__tm-link_active').removeClass('t794__tm-link_active');
}


function t794_addArrow(recid, hookLinks) {
    var arrow = $('#rec' + recid + ' .t794').attr('data-add-arrow');
    if (typeof arrow === 'undefined' || arrow === '') {
        return;
    }
    hookLinks.each(function (i, el) {
        $(el).append('<div class="t794__arrow"></div>');
    });
}


function t794_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    var hash = window.location.hash;
    if (url.substr(url.length - 1) == '/') {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == '/') {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == '/') {
        pathname = pathname.slice(1);
    }
    if (pathname == '') {
        pathname = '/';
    }
    $('.t794__list_item a[href="' + url + '"]').addClass('t-active');
    $('.t794__list_item a[href="' + url + '/"]').addClass('t-active');
    $('.t794__list_item a[href="' + pathname + '"]').addClass('t-active');
    $('.t794__list_item a[href="/' + pathname + '"]').addClass('t-active');
    $('.t794__list_item a[href="' + pathname + '/"]').addClass('t-active');
    $('.t794__list_item a[href="/' + pathname + '/"]').addClass('t-active');
    if (hash) {
        $('.t794__list_item a[href="' + hash + '"]').addClass('t-active');
    }
} 
function t796_init(recid) {
    var el = $("#rec" + recid);
    var winWidth = $(window).width();
    var screenMin = el.attr("data-screen-min");
    var screenMax = el.attr("data-screen-max");

    if (typeof screenMin !== 'undefined') {
        if (winWidth < parseInt(screenMin, 10)) {
            return false;
        }
    }

    if (typeof screenMax !== 'undefined') {
        if (winWidth > parseInt(screenMax, 10)) {
            return false;
        }
    }

    var shapeEl = el.find(".t796__shape-border");
    var recs = el.find(".t796").attr("data-shape-rec-ids");

    if (typeof recs != "undefined") {
        recs = recs.split(",");
        /* append to certain blocks */
        recs.forEach(function (rec_id, i, arr) {
            var curRec = $("#rec" + rec_id);
            var curShapeEl = shapeEl.clone();
            t796_setColor(el, curShapeEl);
            t796_addDivider(curRec, curShapeEl);
        });
    } else {
        var excludesBlocks = [
            215,
            316,
            390,
            651,
            702,
            706,
            708,
            750,
            756,
            766,
            825,
            862,
            868,
        ];
        var excludes = '';
        excludesBlocks.forEach(function(el) {
        	excludes += '[data-record-type=\'' + el + '\'],';
        });
        /* "[data-record-type='708']," */
        if (excludes.slice(-1) === ',') {
            excludes = excludes.slice(0, -1);
        }

        var curRec;

        if (shapeEl.hasClass('t796__shape-border_top') || shapeEl.hasClass('t796__shape-border_top-flip')) {
            curRec = el.nextAll(".r:not(" + excludes + ")").eq(0);
        }

        if (shapeEl.hasClass('t796__shape-border_bottom') || shapeEl.hasClass('t796__shape-border_bottom-flip')) {
            curRec = el.prevAll(".r:not(" + excludes + ")").eq(0);
        }

        if (curRec.length !== 0) {
            var curShapeEl = shapeEl.clone();
            t796_setColor(el, curShapeEl);
            t796_addDivider(curRec, curShapeEl);
        }
    }
}

function t796_addDivider(curRec, curShapeEl) {
    curRec.attr("data-animationappear", "off").removeClass('r_hidden');
    var coverWrapper = curRec.find(".t-cover");
    var zeroWrapper = curRec.find(".t396");

    if (coverWrapper.find('.t557__snow-layer').length > 0) {
        curShapeEl.css('z-index', 1);
    }

    if (coverWrapper.length > 0 || zeroWrapper.length > 0) {
        /* if cover or zero */
        if (coverWrapper.length > 0) {
            coverWrapper.find(".t-cover__filter").after(curShapeEl);
        }
        if (zeroWrapper.length > 0) {
            zeroWrapper.after(curShapeEl);
            curRec.css("position", "relative");
        }
        if (zeroWrapper.find('.t396__filter').length > 0) {
            curShapeEl.css('z-index', 1);
        }
        curShapeEl.css("display", "block");
    } else {
        /*if any block*/
        var wrapper = curRec;
        var curRecType = Number.parseInt(curRec.attr("data-record-type"));
        if (wrapper.length === 0) {
            return true;
        }

        wrapper.append(curShapeEl);
        wrapper.css("position", "relative");

        /* dont make changes z-index for blocks */
        var excludesBlocks = [
            125,
            331,
            554,
            746,
            754,
            776,
            778,
            786,
            858,
            896,
            897,
            924,
            915,
            951,
        ];

        if (excludesBlocks.indexOf(curRecType) === -1) {
            wrapper.children("div").first().css({
                "position": "relative",
                "z-index": "1"
            }).addClass("t796_cont-near-shape-divider");
        }

        /* changing z-index for divider in blocks below */
        var blocks = [
            195,
            279,
            675,
            694,
            734,
            938,
        ];

        if (blocks.indexOf(curRecType) !== -1) {
            curShapeEl.css("z-index", 1);
        }

        curShapeEl.css("display", "block");
    }
}

function t796_setColor(el, curShapeEl) {
    /* get color from nearest block, if it is not set for curShape */
    if (typeof curShapeEl.attr("data-fill-color") != "undefined") {
        return;
    }

    var nearestBlock;

    if (curShapeEl.hasClass("t796__shape-border_bottom") || curShapeEl.hasClass("t796__shape-border_bottom-flip")) {
        nearestBlock = el.next(".r");
    } else {
        nearestBlock = el.prev(".r");
    }

    if (nearestBlock.length === 0) {
        return;
    }

    var fillColor = nearestBlock.attr("data-bg-color");
    if (typeof fillColor == "undefined") {
        return;
    }

    curShapeEl.find(".t796__svg").css("fill", fillColor);
}
 
function t797_init(recid) {
    if (window.isMobile) {
        $("#rec" + recid + " .t797__txt-wrapper").css("display", "none");
    }
    t_onFuncLoad('tvote__init', function () {
        tvote__init(recid);
    });
} 
function t802_insta_init(recid, instauser) {
    var projectid = $('#allrecords').attr('data-tilda-project-id');
    t802_insta_loadflow(recid, projectid, instauser);
}

function t802_insta_loadflow(recid, projectid, instauser) {
    if (instauser == '') {
        var url = "https://insta.tildacdn.com/fish/0.json";
    } else {
        var url = "https://insta.tildacdn.com/json/project" + projectid + "_" + instauser + ".json";
    }

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            if (typeof data == 'object') {
                t802_insta_draw(recid, data);
            } else {
                console.log('error. insta flow json not object');
                console.log(data);
            }
        },
        error: function () {
            console.log('error load instgram flow');
        },
        timeout: 1000 * 90
    });
}

function t802_insta_draw(recid, obj) {
    if (typeof obj.photos == 'undefined') {
        return;
    }
    $.each(obj.photos, function (index, item) {
        t802_insta_drawItem(recid, obj.username, item);
    });

    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
}

function t802_insta_drawItem(recid, username, item) {
    var emptyEl = $("#rec" + recid).find(".t802__imgwrapper_empty").first();
    if (emptyEl.length > 0) {
        emptyEl.removeClass("t802__imgwrapper_empty");
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            emptyEl.append('<div class="t802__bgimg t-bgimg" data-original="' + item.url + '"></div>');
        } else {
            emptyEl.append('<div class="t802__bgimg" style="background-image:url(' + item.url + ')"></div>');
        }
        emptyEl.wrap('<a href="' + item.link + '" target="_blank"></a>');

        /*add text and filter for hover*/
        var hoverEl = emptyEl.find(".t802__hover-wrapper");
        if (hoverEl.length > 0 && isMobile == false) {
            var text = t802_insta_cropText(recid, '@' + username + ': ' + item.text);
            hoverEl.append('<div class="t802__hover-filter"></div>');
            hoverEl.append('<div class="t802__text t-text t-descr_xxs">' + text + '</div>');
        }
    }
}

function t802_insta_cropText(recid, text) {
    var colsInLine = $("#rec" + recid).find("[data-cols-in-line]").attr("data-cols-in-line");
    if (colsInLine == 6) {
        var maxLength = 90;
    } else {
        var maxLength = 130;
    }
    if (text.length > maxLength) {
        text = text.substring(0, maxLength);
        text = text.substring(0, Math.min(maxLength, text.lastIndexOf(" ")));
        text += ' ...';
    }
    return text;
} 
function t803_init(recid) {
    var el = $("#rec" + recid);
    var data = el.find('.t803__multi-datablock').children();
    var multidata = {};

    $.each(data, function () {
        var source = $(this).children('.t803__multi-source').html();
        var value = $(this).children('.t803__multi-key-values').html();
        var key = $(this).children('.t803__multi-key').html();
        var def = $(this).children('.t803__multi-default').html();
        var v = {};
        v[source] = value
        multidata[source] = {
            'default': def,
            'key': key,
            'values': v
        }
    });

    if (el.parent('#t-header').length || el.parent('#t-footer').length) {
        $('[field]').each(function () {
            var html = $(this).html();
            var replaced = html.replace(/(?!%%)[A-zА-яё0-9_-]*(?=%%)/ig, '<span data-replace-key="$&"></span>').replace(/%{2}/igm, '');
            if (replaced !== html) {
                $(this).html(replaced);
            }
        });
    }

    var params = window.location.search.replace('?', '').split('&').reduce(
        function (p, e) {
            var a = e.split('=');
            p[decodeURIComponent(a[0]) + '=' + decodeURIComponent(a[1])] = decodeURIComponent(a[0]) + '=' + decodeURIComponent(a[1]);
            return p;
        }, {}
    );
    var stop = 0;
    $.each(multidata, function (index, value) {
        var key = params[index];
        if (typeof key != 'undefined') {
            $('[data-replace-key="' + value.key + '"]').html(value.values[key]);
            stop = 1;
        }
        if (stop === 0) {
            $('[data-replace-key="' + value.key + '"]').html(value.default);
        }
    });
} 
function t804_init(recid) {
var el = $("#rec" + recid);
var geodata = [];
    var key = el.find('.t_804_geo-datablock').children('.t_804_geo-key').html();
    var def = el.find('.t_804_geo-datablock').children('.t_804_geo-default').html();
    var data = el.find('.t_804_geo-datablock').children('.t_804_geo-data').children();
    data.each(function() {
        var valuesArr = $(this).children('.t_804_geo-geoip').html().split(';');
        var geo = [];

        $.each(valuesArr, function(index, value){
            if(value === '') { return true }

            var re = /,/g;
            var strVal = value.replace(re, '-');
            geo.push(strVal);
        });
        
        var value = $(this).children('.t_804_geo-value').html();
        geodata.push( {'value': value, 'geo': geo});
    });

    if(el.parent('#t-header').length || el.parent('#t-footer').length) {
        $('.t-rec').each(function() {
            var html = $(this).html();
            var replaced = html.replace(/(?!%%)[A-zА-яё0-9_-]*(?=%%)/ig, '<span data-replace-key="$&"></span>').replace(/%{2}/igm,'');
            if (replaced !== html) {
                $(this).html(replaced);
            }
        });
    }

    $.ajax({
        type: "GET",
        url: "https://geo.tildacdn.com/geo/full/",
        crossDomain: true,
        dataType : "json",
        success: function(data) {
            replaceGeo(data,key,geodata,def);
        },
        error: function(data) {
            replaceGeo(data,key,geodata,def);
        },
        timeout: 1000*15
    });

    function replaceGeo(data,key,geodata,def) {
        var city = data.city.name_en;
        var region = data.region.name_en;
        var country = data.country.iso;
        
        var fullMatch = country + '-' + region + '-' + city;
        var partMatch = country + '-' + region;
        
        var val = def;
        $.each(geodata, function(index, value) {
            if($.inArray(country, value.geo) != -1) {
                val = value.value;
            }
            if($.inArray(partMatch, value.geo) != -1) {
                val = value.value;
            }
            if($.inArray(fullMatch, value.geo) != -1) {
                val = value.value;
            }
        });
        $('[data-replace-key='+key+']').html(val);
    }
} 
function t806__init(recid) {
    t_onFuncLoad('tvote__init', function () {
	    tvote__init(recid);
    });
	var testWrap = $('#rec' + recid);
	var testContainer = testWrap.find('.t806');
	var rightAnswersCount;
	var testAnswers = testWrap.find('.t806__answers');
	var testBlock = testWrap.find('.t806__test');
	var testResultWrap = testWrap.find('.t806__result-wrap');
	var shareVK = testWrap.find('.t806__social-btn-vk');
	var shareFB = testWrap.find('.t806__social-btn-fb');
	var shareTwitter = testWrap.find('.t806__social-btn-twitter');
	var rightTestAnswers = [];
	var testImgSrc = [];
	var startTitle = testWrap.find('.t806__start-title').text();
	var startText = testWrap.find('.t806__start-text').text();
	var siteLocation = window.location.href;

	testBlock.addClass('t806__counter');
	testBlock.attr('data-count', 0);

	testResultWrap.each(function (i) {
		if ($(testResultWrap[i]).find('img').attr('src') !== '') {
			testImgSrc.push($(testResultWrap[i]).find('img').attr('src'));
		}
	});

	if (testImgSrc.length == 1) {
		testResultWrap.each(function (i) {
			$(testResultWrap[i]).find('img').attr('src', testImgSrc[0]);
			$(testResultWrap[i]).find('.t806__result-desc').removeClass('t806__result-desc_withoutimg');
			$(testResultWrap[i]).find('.t806__result-count, .t806__result-variant').css('color', '#ffffff');
		});
	}

	testAnswers.each(function () {
	    var answer = $(this).attr('data-right-answer') || '';
		rightTestAnswers.push(answer.trim());

		$(this).removeAttr('data-right-answer');
	});

	t806__changeRadio(recid, rightTestAnswers);
	t806__changeTestInput(recid);
	t806__startClickBtn(recid);
	t806__checkClickBtn(recid, rightTestAnswers);
	t806__nextClickBtn(recid);
	t806__resultClickBtn(recid);
	t806__restartClickBtn(recid, rightTestAnswers);

	shareVK.click(function () {
		t806_shareVK(recid, startTitle, siteLocation)
	});
	shareFB.click(function () {
		t806_shareFB(recid, startTitle, startText, siteLocation)
	});
	shareTwitter.click(function () {
		t806_shareTwitter(recid, startTitle, siteLocation)
	});

	t806__clearFormOnBackClick(testWrap);
}


function t806_scrollToTop(testBlock) {
	var topCoordinate = testBlock.offset().top;
	$('html, body').animate({
		scrollTop: topCoordinate
	}, 0);
}


function t806__clearFormOnBackClick(testWrap) {
	window.addEventListener('pagehide', function () {
		testWrap.find('.t806__input').prop('checked', false);
	});
}


function t806__startClickBtn(test) {
	var testWrap = $('#rec' + test);
	var questionFirst = 1;
	var testBtnStart = testWrap.find('.t806__start-btn');

	testBtnStart.on('click', function (e) {
		var testStart = $(this).parents('.t806__start');

		testStart.hide();
		testStart.next().show();
		t806__showNumber(test, questionFirst);

		t806_fixcontentheight(test);
		t806_scrollToTop(testWrap);

		if (typeof $(".t-records").attr("data-tilda-mode") == "undefined") {
			if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
		}

		e.preventDefault();
	});
}


function t806__changeRadio(test, rightansw) {
	var testBlock = $('#rec' + test);
	var testInput = testBlock.find('.t806__input[type="radio"]');
	var lastQuestion = testBlock.find('.t806__question').last();

	lastQuestion.addClass('t806__lastquestion');

	testInput.change(function () {
		var rightAnswersCount = testBlock.find('.t806__counter').attr('data-count');
		var testItem = $(this).parents('#rec' + test + ' .t806__question');
		var testAnswers = $(this).parents('#rec' + test + ' .t806__answers');
		var answerVote = $(this).parents('#rec' + test + ' .t806__answers').find('.t806__answer .t-vote__btn-res');
		var currentRightAnswer = rightansw[testItem.attr('data-question-num') - 1];

		if ($(this).attr('type') === 'radio') {
			var checkedRadio = $(this).val();

			testAnswers.addClass('t806__answers_answered');

			if (testItem.hasClass('t806__lastquestion')) {
				testAnswers.siblings('.t806__btn-wrapper').find('.t806__btn_result').addClass('t806__btn_show');
			} else {
				testAnswers.siblings('.t806__btn-wrapper').find('.t806__btn_next').addClass('t806__btn_show');
			}

			testItem.find('.t806__input').attr('disabled', true);

			if (+checkedRadio === +currentRightAnswer) {
				rightAnswersCount++;
				testBlock.find('.t806__counter').attr('data-count', rightAnswersCount);
			}

			if (+testItem.find('.t806__input:checked').val() !== +currentRightAnswer) {
				testItem.find('.t806__input:checked').parents('.t806__answer').addClass('t806__answer_wrong');
			}
			testItem.find('.t806__input:checked').parent().siblings('.t806__details').show();

			testItem.find('.t806__input[value="' + currentRightAnswer + '"]').parents('.t806__answer').addClass('t806__answer_correct');

			answerVote.addClass('t806__answer-vote_show');

			testItem.find('.t806__input:checked').parents('.t806__answer_correct').addClass('t806__answer_withoutopacity');
			testItem.find('.t806__input[type="radio"]').parents('.t806__answer_correct').addClass('t806__answer_withoutopacity');
		}

		t806_fixcontentheight(test);
	});
}


function t806__changeTestInput(test) {
	var testBlock = $('#rec' + test);
	var testInput = testBlock.find('.t806__input[type="checkbox"]');
	var lastQuestion = testBlock.find('.t806__question').last();
	var checkedAnswerCheck = [];

	testBlock.find('.t806__answers').attr('data-test-checked', '');

	lastQuestion.addClass('t806__lastquestion');

	testInput.change(function () {
		var testAnswers = $(this).parents('#rec' + test + ' .t806__answers');

		if ($(this).attr('type') === 'checkbox') {
			testAnswers.siblings('.t806__btn-wrapper').find('.t806__btn_check').addClass('t806__btn_show');
		}

		if ($(this).attr('type') === 'checkbox' && $(this).is(':checked') && checkedAnswerCheck.indexOf($(this).val()) === -1) {
			checkedAnswerCheck.push($(this).val());
		}

		if ($(this).attr('type') === 'checkbox' && !$(this).is(":checked")) {
			checkedAnswerCheck.splice(checkedAnswerCheck.indexOf($(this).val()), 1);
		}

		testAnswers.attr('data-test-checked', checkedAnswerCheck.join(','));

		t806_fixcontentheight(test);
	});

	return checkedAnswerCheck;
}


function t806__checkClickBtn(test, rightansw) {
	var rightChecked = false;
	var testBlock = $('#rec' + test);
	var testBtnCheck = testBlock.find('.t806__btn_check');
	var testInput = testBlock.find('.t806__input');
	var checkedAnswersTruth = [];

	testBtnCheck.on('click', function (e) {
		var rightAnswersCount = testBlock.find('.t806__counter').attr('data-count');
		var testItem = $(this).parents('#rec' + test + ' .t806__question');
		var testAnswers = $(this).parents('#rec' + test + ' .t806__question').find('.t806__answers');
		var answerVote = $(this).parents('.t806__btn-wrapper').siblings('#rec' + test + ' .t806__answers').find('.t806__answer .t-vote__btn-res');
		var checkboxAnswersArr = [];
		var checkboxAnswers = rightansw[testItem.attr('data-question-num') - 1].split(',');
		var checkedAnswers = testAnswers.attr('data-test-checked').split(',');

		for (var i = 0; i < checkboxAnswers.length; i++) {
			checkboxAnswersArr.push(checkboxAnswers[i]);
		}

		testItem.find(testInput).attr('disabled', true);

		answerVote.addClass('t806__answer-vote_show');

		checkedAnswers.forEach(function (item, i) {
			var checkedCheckboxSort = checkedAnswers.sort();
			var checkboxAnswersArrSort = checkboxAnswersArr.sort();

			if (+checkedCheckboxSort[i] === +checkboxAnswersArrSort[i] && checkedCheckboxSort.length === checkboxAnswersArrSort.length) {
				checkedAnswersTruth.push(1);
			} else {
				checkedAnswersTruth.push(0);
			}
		});

		var rightChecked = checkedAnswersTruth.every(function (item) {
			return item == 1;
		});

		if (testItem.find(testInput).attr('type') === 'checkbox') {
			checkboxAnswersArr.forEach(function (item) {
				testItem.find('.t806__input[value="' + +item + '"]').parents('.t806__answer').addClass('t806__answer_correct');
			});

			checkedAnswers.forEach(function (item) {
				if (checkboxAnswersArr.indexOf(item) === -1) {
					testItem.find('.t806__input[value="' + +item + '"]:checked').parents('.t806__answer').addClass('t806__answer_wrong');
					testItem.find('.t806__input[value="' + +item + '"]').parent().siblings().show();
				}
			});
		}

		testItem.find('.t806__input:checked').parents('.t806__answer_correct').addClass('t806__answer_withoutopacity');

		if (rightChecked) {
			rightAnswersCount++;
			testBlock.find('.t806__counter').attr('data-count', rightAnswersCount);
		}

		checkedAnswersTruth = [];

		$(this).removeClass('t806__btn_show');

		if (testItem.hasClass('t806__lastquestion')) {
			$(this).parents('.t806__question').find('.t806__btn_result').addClass('t806__btn_show');
		} else {
			$(this).parents('.t806__question').find('.t806__btn_next').addClass('t806__btn_show');
		}

		testAnswers.addClass('t806__answers_answered');

		t806_fixcontentheight(test);

		if (typeof $(".t-records").attr("data-tilda-mode") == "undefined") {
			if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
		}

		testItem.find('.t806__input:checked').parent().siblings('.t806__details').show();
		t806__changeTestInput(test);

		e.preventDefault();
	});
}


function t806__nextClickBtn(test) {
	var testBlock = $('#rec' + test);
	var testBtnNext = testBlock.find('.t806__btn_next');
	var questionNumber;

	testBtnNext.on('click', function (e) {
		var parentTop = $(this).parents('#rec' + test + ' .t806').offset().top;
		var testItem = $(this).parents('#rec' + test + ' .t806__question');
		questionNumber = testItem.next().attr('data-question-num');

		testItem.hide();
		testItem.next().show();
		t806__showNumber(test, questionNumber);

		t806_fixcontentheight(test);
		t806_scrollToTop(testBlock);

		if (typeof $(".t-records").attr("data-tilda-mode") == "undefined") {
			if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
		}

		e.preventDefault();
	});
}


function t806__resultClickBtn(test) {
	var testBtnResult = $('#rec' + test + ' .t806__btn_result');
	var testBlock = $('#rec' + test);

	testBtnResult.on('click', function (e) {
		var parentTop = $(this).parents('#rec' + test + ' .t806__test').offset().top;
		var testItem = $(this).parents('#rec' + test + ' .t806__question');

		testItem.hide();
		t806_scrollToTop(testBlock);
		t806__showResult(test);

		t806_fixcontentheight(test);

		if (typeof $(".t-records").attr("data-tilda-mode") == "undefined") {
			if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
		}

		e.preventDefault();
	});
}


function t806__restartClickBtn(test, rightansw) {
	var testBlock = $('#rec' + test);
	var testContainer = testBlock.find('.t806');
	var testRestart = testBlock.find('.t806__btn_restart');
	var testItemAll = testBlock.find('.t806__question');

	testRestart.on('click', function (e) {
		testBlock.find('.t806__start').show();
		testBlock.find('.t806__result').hide();
		testBlock.find('.t806__btn_next').removeClass('t806__btn_show');
		testBlock.find('.t806__btn_result').removeClass('t806__btn_show');
		testBlock.find('.t806__btn_check').removeClass('t806__btn_show');
		testBlock.find('.t806__details').hide();
		testBlock.find('.t806__answers').removeClass('t806__answers_answered');
		testBlock.find('.t806__answers').attr('data-test-checked', '');
		testBlock.find('.t806__answer').removeClass('t806__answer_correct');
		testBlock.find('.t806__answer').removeClass('t806__answer_wrong');
		testBlock.find('.t806__input').parents('.t806__answer').removeClass('t806__answer_withoutopacity');
		testBlock.find('.t806__input').prop('checked', false);
		testBlock.find('.t806__input').removeAttr('disabled');
		testBlock.find('.t806__answer .t-vote__btn-res').removeClass('t806__answer-vote_show');
		$('#rec' + test + ' .t806__counter').attr('data-count', 0);
		testBlock.find('.t806__number').text(1 + '/' + testItemAll.length);

		t806_fixcontentheight(test);

		if (testContainer.hasClass('t806__test-reload')) {
			document.location.reload(true);
		}

		e.preventDefault();
	});
}


function t806__showResult(test) {
	var testBlock = $('#rec' + test);
	var testContainer = testBlock.find('.t806');
	var fullResult = testBlock.find('.t806__result');
	var startImg = testBlock.find('.t806__start-img img');
	var fullResultLength = fullResult.length;
	var allResult;
	var resultLength = testBlock.find('.t806__result').length;
	var rightAnswersCount = $('#rec' + test).find('.t806__counter').attr('data-count');
	var testItemAll = $('#rec' + test + ' .t806__question');
	var resultCount = $('#rec' + test + ' .t806__result .t806__result-count');
	var resultPercent = rightAnswersCount != 0 ? rightAnswersCount / testItemAll.length * 100 : 0;

	if (testContainer.hasClass('t806__result-new-calc')) {
		if (!Number.isInteger(resultPercent)) {
			resultPercent = resultPercent.toFixed(3);
		}
	}


	resultCount.text(rightAnswersCount + '/' + testItemAll.length);


	t806__openResultWrapper(testContainer, resultPercent, testBlock, fullResultLength);

	var resultData = [];

	fullResult.each(function (i) {
		if ($(fullResult[i]).css('display') == 'block') {
			resultData[0] = $(fullResult[i]).find('.t806__result-variant').text()
			resultData[1] = $(fullResult[i]).find('.t806__result-count').text();

			resultData[2] = '';
			var img = $(fullResult[i]).find('.t806__result-wrap img');

			if (testContainer.hasClass('t806__test-reload')) {
				if (img.length != 0) {
					if (typeof window.lazy !== 'undefined') {
						resultData[2] = img.attr('data-original') || img.attr('src');
					} else {
						resultData[2] = img.attr('src');
					}
				}

				if (img.length == 0 && startImg.length != 0) {
					if (typeof window.lazy !== 'undefined') {
						resultData[2] = startImg.attr('data-original') || img.attr('src');
					} else {
						resultData[2] = startImg.attr('src');
					}
				}
			}

			if (!testContainer.hasClass('t806__test-reload')) {
				if (img.length != 0) {
					resultData[2] = img.attr('src');
				}

				if (img.length == 0 && startImg.length != 0) {
					resultData[2] = startImg.attr('src');
				}
			}

			resultData[3] = $(fullResult[i]).attr('data-quiz-result-number');
		}
	});

	return resultData;
}


function t806__openResultWrapper(testContainer, resultPercent, testBlock, fullResultLength) {
	if (testContainer.hasClass('t806__result-new-calc')) {
		if (resultPercent <= 100 * 1 / fullResultLength) {
			testBlock.find('.t806__result_1').show();
			return;
		}

		for (var i = 0; i < fullResultLength; i++) {
			var minResult = 100 * (i + 1) / fullResultLength;
			var maxResult = 100 * (i + 2) / fullResultLength;
			minResult = Math.floor(minResult) == minResult ? minResult : minResult.toFixed(3);
			maxResult = Math.floor(maxResult) == maxResult ? maxResult : maxResult.toFixed(3);

			if (resultPercent >= minResult && resultPercent <= maxResult) {
				testBlock.find('.t806__result_' + (i + 2)).show();
				return;
			}
		}

		if (resultPercent > 100 * (fullResultLength - 1) / fullResultLength) {
			testBlock.find('.t806__result_' + fullResultLength).show();
			return;
		}
	} else {
		if (resultPercent <= 100 * 1 / fullResultLength) {
			testBlock.find('.t806__result_1').show();
		}

		for (var i = 0; i < fullResultLength; i++) {
			if (resultPercent > 100 * (i + 1) / fullResultLength && resultPercent <= 100 * (i + 2) / fullResultLength) {
				testBlock.find('.t806__result_' + (i + 2)).show();
			}
		}

		if (resultPercent > 100 * (fullResultLength - 1) / fullResultLength) {
			testBlock.find('.t806__result_' + fullResultLength).show();
		}
	}
}


function t806__showNumber(test, number) {
	var testItemNumber = $('#rec' + test + ' .t806__number');
	var testItemAll = $('#rec' + test + ' .t806__question');
	testItemNumber.html('<span>' + number + '</span>' + '<span>/</span>' + '<span>' + testItemAll.length + '</span>');
}


function t806_fixcontentheight(id) {
	/* correct cover height if content more when cover height */
	var el = $("#rec" + id);
	var hcover = el.find(".t-cover").height();
	var hcontent = el.find("div[data-hook-content]").outerHeight();
	if (hcontent > 300 && hcover < hcontent) {
		var hcontent = hcontent + 120;
		if (hcontent > 1000) {
			hcontent += 100;
		}
		el.find(".t-cover").height(hcontent);
		el.find(".t-cover__filter").height(hcontent);
		el.find(".t-cover__carrier").height(hcontent);
		el.find(".t-cover__wrapper").height(hcontent);
		if ($isMobile == false) {
			setTimeout(function () {
				var divvideo = el.find(".t-cover__carrier");
				if (divvideo.find('iframe').length > 0) {
					setWidthHeightYoutubeVideo(divvideo, hcontent + 'px');
				}
			}, 2000);
		}
	}
}


function t806_changeShareFBUrl(siteLocation, searchUrl) {
	var url = siteLocation.split('?')[0] + '?';
	var searchParametrs = decodeURIComponent(searchUrl.substring(1));
	var params = searchParametrs.split('&');

	params.forEach(function (item) {
		if (item.indexOf('fb_action_ids') == -1 && item.indexOf('fb_action_types') == -1 && item.indexOf('result') == -1) {
			url = url + item + '&';
		}
	});

	url = url.substring(0, url.length - 1);
	return url;
}


function t806_shareVK(recid, ptitle, purl) {
	var dataForShare = t806__showResult(recid);
	var text = dataForShare[0];
	var count = dataForShare[1];
	var slash = (dataForShare[2] || "").indexOf('/') == 0 ? '' : '/';
	var urlPathname = window.location.pathname.length > 1 ? window.location.pathname : '';
	var img = (dataForShare[2] || "").indexOf('://') != -1 ? dataForShare[2] : window.location.protocol + '//' + window.location.host + urlPathname + slash + dataForShare[2];
	var resultNumber = dataForShare[3];
	var idUrl = recid + resultNumber + 'vk';

	var urlValueImg = 'https://vote.tildacdn.com/vote/2/share/index.php?text=' + text;
	urlValueImg += '&result=' + count;
	if ((dataForShare[2] || "").length > 0) {
		urlValueImg += '&url=' + img;
	}
	urlValueImg += '&id=' + idUrl;
	urlValueImg += '&social=vk' + '&name=' + ptitle;

	var value = $.ajax({
		url: urlValueImg,
		type: 'GET',
		async: false,
		data: {
			format: 'json'
		},
		error: function (e) {
			console.log('t806 error: ' + e);
		},
		complete: function (data) {
			var urlImg = (data.responseJSON.url || '').replace(/\?.*/, '');
			var shareUrl = window.location.href.indexOf('#') != -1 ? purl.split('#')[0] : purl;
			url = 'http://vkontakte.ru/share.php?url=' + shareUrl + '&title=' + ptitle + '&description=' + ptitle + '&image=' + urlImg + '&noparse=true';
			t806__openPopup(url);
		}
	});
}


function t806_shareFB(recid, ptitle, pdescr, purl) {
	var dataForShare = t806__showResult(recid);
	var text = dataForShare[0];
	var count = dataForShare[1];
	var slash = (dataForShare[2] || "").indexOf('/') == 0 ? '' : '/';
	var urlPathname = window.location.pathname.length > 1 ? window.location.pathname : '';
	var img = (dataForShare[2] || "").indexOf('://') != -1 ? dataForShare[2] : window.location.protocol + '//' + window.location.host + urlPathname + slash + dataForShare[2];
	var resultNumber = dataForShare[3];
	var idUrl = recid + resultNumber + 'fb';
	var param = count.substring(0, count.indexOf('/')) + count.substring(count.indexOf('/') + 1);

	var urlValueImg = 'https://vote.tildacdn.com/vote/2/share/index.php?text=' + text;
	urlValueImg += '&result=' + count;
	if ((dataForShare[2] || "").length > 0) {
		urlValueImg += '&url=' + img;
	}
	urlValueImg += '&id=' + idUrl;
	urlValueImg += '&social=fb' + '&name=' + ptitle;

	var value = $.ajax({
		url: urlValueImg,
		type: 'GET',
		async: false,
		data: {
			format: 'json'
		},
		error: function (e) {
			console.log('t806 error: ' + e);
		},
		complete: function (data) {
			var urlImg = data.responseJSON.url;
			var searchUrl = window.location.search;
			purl = (searchUrl !== '' ? t806_changeShareFBUrl(purl, searchUrl) : purl) + '?result=' + param;

			FB.ui({
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object: {
						'og:url': purl
					}
				})
			});
		}
	});
}


function t806_shareTwitter(recid, ptitle, purl) {
	var dataForShare = t806__showResult(recid);
	var testWrap = $('#rec' + recid);
	var testContainer = testWrap.find('.t806');
	var text = dataForShare[0];
	var count = dataForShare[1];
	var img = dataForShare[2];

	var resultCount = count.substring(0, count.indexOf('/'));
	var allCount = count.substring(count.indexOf('/') + 1)

	var result;

	if (testContainer.hasClass('t806__ru')) {
		result = 'Мой результат: ' + resultCount + ' из ' + allCount + '. ' + text;
	}
	if (testContainer.hasClass('t806__en')) {
		result = 'My result: ' + resultCount + ' out of ' + allCount + '. ' + text;
	}

	purl = purl.replace(/&/g, '%26');

	url = 'https://twitter.com/share?url=' + purl + '&text=' + result;
	url = encodeURI(url);

	t806__openPopup(url);
}


function t806__openPopup(url) {
	window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
} 
function t807__init(recid) {
    t_onFuncLoad('tvote__init', function () {
        tvote__init(recid);
    });
    var testWrap = $('#rec' + recid);

  $('#rec'+recid).find('.t-vote').bind('tildavote:numberschanged',function(){
    $(".js-vote-item").each(function() {
        var percentage = $(this).find(".t-vote__btn-res__percent");
        if (typeof percentage != "undefined") {
            var bar = $(this).find(".t807__answer-progressbar");
            bar.css("width",percentage.html());
        }
    })
  });

  $('#rec'+recid).find('.t-vote').bind('tildavote:resultsended',function(){
    if (!$(this).hasClass('t-vote_sended') || $(this).hasClass('t807__hidden')) {
      return;
    }
    
    $(this).addClass('t807__hidden');

    if (!$(this).attr('data-vote-visibility') && $(this).hasClass('t807__test')) {
      t807__onSuccess(recid);
    }

  });

  t807__replyClickBtn(recid);
}

function t807__replyClickBtn(test) {
    var testBlock = $('#rec' + test);
    var replyBtn = testBlock.find('.t807__btn_reply');

    replyBtn.on('click', function (e) {
        e.preventDefault();
    });
}


function t807__onSuccess(test) {
  var testBlock = $('#rec' + test).find('.t807__test');
  var t807_targetOffset = testBlock.offset().top;

  if ($(window).width()>960) {
    var t807_target = t807_targetOffset - 200;
  } else {
    var t807_target = t807_targetOffset - 100;
  }

  $('html, body').animate({ scrollTop: t807_target}, 400);
}
 
function t808_geoRedirect(geo, data) {
    if(!window.isSearchBot) {
        var city = geo.city.name_en;
        var region = geo.region.name_en;
        var country = geo.country.iso;
        $.each(data, function(i, value) {
            if($.inArray(country, value.geo) != -1 || $.inArray(region, value.geo) != -1 || $.inArray(city, value.geo) != -1) {
                window.location.href = value.link + window.location.search;
            }
        });
    }
}
 
function t813_init(recid, height) {
    var el = $('#rec' + recid);

    t813_setYoutubeUrl(recid);
    t813__setHeight(recid, height);

    $(window).bind('resize', t_throttle(function() {
        t813__setHeight(recid);
    }));

    el.find('.t813').bind('displayChanged', function () {
        t813__setHeight(recid);
    });
}

function t813_setYoutubeUrl(recid) {
    var el = $('#rec' + recid);
    var youtubeIframe = el.find('.t813__iframe');

    if (youtubeIframe.hasClass('t813__iframe-youtube')) {
        youtubeIframe.attr('src', '//www.youtube.com/embed/' + youtubeIframe.attr('data-youtube-id') + '?rel=0&fmt=18&html5=1&showinfo=0');
    }
}

function t813__setHeight(recid, height) {
    if (height == "" || typeof height == "undefined") {
        var el = $("#rec" + recid),
            div = el.find(".t813__contentwrapper"),
            height = div.width() * 0.5625;
        div.height(height);
        div.parent().height(height);
    }
}

function t813_onSuccess(form){
	var inputsWrapper = form.find('.t-form__inputsbox');
    var inputsHeight = inputsWrapper.height();
    var inputsOffset = inputsWrapper.offset().top;
    var inputsBottom = inputsHeight + inputsOffset;
	var targetOffset = form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var target = targetOffset - 200;
    }	else {
        var target = targetOffset - 100;
    }

    if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
        inputsWrapper.addClass('t813__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: target}, 400);
        setTimeout(function(){inputsWrapper.addClass('t813__inputsbox_hidden');}, 400);
    }

	var successurl = form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t814_init(recid) {
    var el = $('#rec' + recid);

    t814_setHeight(recid);

    $(window).bind('resize', t_throttle(function () {
        if (typeof window.noAdaptive !== "undefined" && window.noAdaptive === true && window.isMobile) { return; }
        t814_setHeight(recid);
    }));

    el.find('.t814').on('displayChanged', function () {
        t814_setHeight(recid);
    });
}

function t814_setHeight(recid) {
    var el = $('#rec' + recid);

    var imgWrapperHeight = el.find(".t814__blockimg").height();
    var blockTextWrapper = el.find(".t814__blocktext-wrapper");
    var textWrapper = el.find(".t814__blocktext");

    if ($(window).width() > 960) {
        textWrapper.css('height', imgWrapperHeight);
        blockTextWrapper.css('height', textWrapper.outerHeight(true));
    } else {
        blockTextWrapper.css('height', 'auto');
    }
} 
function t815_init(recid){
    var rec = $('#rec'+recid);
    var el = rec.find('.t815');
    var isFixed = (el.css('position') == 'fixed');
    var redactorMode = el.hasClass('t815_redactor-mode');

    if (!redactorMode) {
      	el.removeClass('t815__beforeready');

      	if (isFixed && el.attr('data-bgopacity-two')) {
            t815_changebgopacitymenu(recid);
            $(window).bind('scroll', t_throttle(function(){t815_changebgopacitymenu(recid)}, 200));
      	}

        if (isFixed && el.attr('data-appearoffset')) {
            el.removeClass('t815__beforeready');
            t815_appearMenu(recid);
            $(window).bind('scroll', t_throttle(function(){t815_appearMenu(recid)}, 200));
        }
    }

    t815_setBg(recid);
    $(window).bind('resize', t_throttle(function(){t815_setBg(recid);}, 200));
}


function t815_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t815").each(function() {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color",bgcolor);
            }
        });
    } else {
        $(".t815").each(function() {
            var el=$(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color",bgcolor);
            el.attr("data-bgcolor-setbyscript","yes");
        });
    }
}

function t815_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980){
        $(".t815").each(function() {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset!="") {
                if(appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top","-50px");
                        el.css("visibility","visible");
                        el.animate({"opacity": "1","top": "0px"}, 200, function() {});
                    }
                } else {
                    el.stop();
                    el.css("visibility","hidden");
                }
            }
        });
    }
}

function t815_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if(window_width > 980){
        $(".t815").each(function() {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.'+menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if(bgopacitytwo == '0' || menushadow == ' '){
                  el.css("box-shadow", "none");
                } else {
                  el.css("box-shadow", "0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
                }
            } else {
                el.css("background-color",bgcolor);
                if (bgopacityone == '0.0' || menushadow == ' '){
                  el.css("box-shadow","none");
                } else {
                  el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
                }
            }
        });
    }
}
 
function t816_init(recid, padding) {
  var rec = $('#rec'+recid);
  var el = rec.find('.t816');

  t816_setHeight(rec, padding);

  $(window).bind('resize', t_throttle(function() {
    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
    t816_setHeight(rec, padding);
  }, 200));

  $('.t816').bind('displayChanged',function(){
    t816_setHeight(rec, padding);
  });

}

function t816_setHeight(rec, padding) {

  var galleryContainer = rec.find('.t816__container');
  var galleryRow = rec.find('.t816__row:first-child');
  var colOffset = rec.find('.t816__tile_offset');
  if (colOffset.length == 0) {return;}
  var containerOffset = colOffset.position().top - padding;

   if ($(window).width() >= 960) {
     galleryContainer.css('padding-bottom', containerOffset);
   }

}
 
function t817_init(recid) {
    var rec = $('#rec' + recid);
    var curMode = $('.t-records').attr('data-tilda-mode');
    var tab = rec.find('.t817__tab');
    var select = rec.find('.t817__select');
    var content = rec.find('.t817__content');

    if (curMode != 'edit' && curMode != 'preview') {
        t817_scrollToTabs(recid);
    }

    t817_showTabByUrl(recid, tab, content, select);
    t817_showTab(tab, content, recid);
    t817_showTabMobile(select, content, recid);
}

function t817_showTab(tab, content, recid) {
    var tabNumber;
    var curUrl = window.location.href;
    var curMode = $('.t-records').attr('data-tilda-mode');
    tab.on('click', function (e) {
        tabNumber = $(this).attr('data-tab-number');
        tab.removeClass('t817__tab_active');
        content.removeClass('t817__content_active');
        $(this).addClass('t817__tab_active');

        t817_removeUrl();

        content.each(function (i) {
            if ($(content[i]).attr('data-tab-content-number') == tabNumber) {
                $(content[i]).addClass('t817__content_active');
            }
        });

        if (curMode != 'edit' && curMode != 'preview') {
            if (typeof history.replaceState != 'undefined') {
                window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumber);
            }
        }


        if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }

        e.preventDefault();
    });
}

function t817_showTabMobile(select, content, recid) {
    var tabNumberMobile;
    var curUrl = window.location.href;
    var curMode = $('.t-records').attr('data-tilda-mode');
    select.change(function (e) {
        tabNumberMobile = $(this).val();
        content.removeClass('t817__content_active');

        t817_removeUrl();

        content.each(function (i) {
            if ($(content[i]).attr('data-tab-content-number') == tabNumberMobile) {
                $(content[i]).addClass('t817__content_active');
            }
        });

        if (curMode != 'edit' && curMode != 'preview') {
            if (typeof history.replaceState != 'undefined') {
                window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumberMobile);
            }
        }

        if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }

        e.preventDefault();
    })
}

function t817_showTabByUrl(recid, tab, content, select) {
    var curUrl = window.location.href;
    var tabIndexNumber = curUrl.indexOf(recid + '-');
    var tabIndex = curUrl.substring(tabIndexNumber + recid.length + 1);

    if (tabIndexNumber != -1) {
        tab.each(function (i) {
            if ($(tab[i]).attr('data-tab-number') == tabIndex) {
                $(tab[i]).addClass('t817__tab_active');
            }
        });

        content.each(function (i) {
            if ($(content[i]).attr('data-tab-content-number') == tabIndex) {
                $(content[i]).addClass('t817__content_active');
            }
        });

        select.val(tabIndex);

    } else {
        tab.first().addClass('t817__tab_active');
        content.first().addClass('t817__content_active');
    }

}

function t817_scrollToTabs(recid) {
    var curUrl = window.location.href;
    var tabIndexNumber = curUrl.indexOf('#!/tab/');
    var tabIndexNumberStart = curUrl.indexOf('tab/');

    if (tabIndexNumber != -1) {
        var tabRec = curUrl.substring(tabIndexNumberStart + 4, tabIndexNumberStart + 4 + recid.length)

        if (+tabRec == +recid) {
            var tabBlock = $('#rec' + tabRec).find('.t817');
            var targetOffset = tabBlock.offset().top;

            if ($(window).width() > 960) {
                var target = targetOffset - 200;
            } else {
                var target = targetOffset - 100;
            }

            $('html, body').animate({
                scrollTop: target
            }, 300);
        }
    }
}

function t817_removeUrl() {
    var curUrl = window.location.href;
    var indexToRemove = curUrl.indexOf('#!/tab/');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove < 0) {
        indexToRemove = curUrl.indexOf('%23!/tab/');
    }
    curUrl = curUrl.substring(0, indexToRemove);
    if (indexToRemove != -1) {
        if (typeof history.replaceState != 'undefined') {
            window.history.replaceState('', '', curUrl);
        }
    }
} 
function t819_init(recid) {
    var rec = $('#rec' + recid);
    var curMode = $('.t-records').attr('data-tilda-mode');
    var tab = rec.find('.t819__tab');
    var select = rec.find('.t819__select');
    var content = rec.find('.t819__content');

    if (curMode != 'edit' && curMode != 'preview') {
        t819_scrollToTabs(recid);
    }

    t819_showTabByUrl(recid, tab, content, select);
    t819_showTab(tab, content, recid);
    t819_showTabMobile(select, content, recid);
}

function t819_showTab(tab, content, recid) {
    var tabNumber;
    var curUrl = window.location.href;
    var curMode = $('.t-records').attr('data-tilda-mode');
    tab.on('click', function (e) {
        tabNumber = $(this).attr('data-tab-number');
        tab.removeClass('t819__tab_active');
        content.removeClass('t819__content_active');
        $(this).addClass('t819__tab_active');

        t819_removeUrl();

        content.each(function (i) {
            if ($(content[i]).attr('data-tab-content-number') == tabNumber) {
                $(content[i]).addClass('t819__content_active');
            }
        });

        if (curMode != 'edit' && curMode != 'preview') {
            if (typeof history.replaceState != 'undefined') {
                window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumber);
            }
        }


        if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }

        e.preventDefault();
    })
}

function t819_showTabMobile(select, content, recid) {
    var tabNumberMobile;
    var curUrl = window.location.href;
    var curMode = $('.t-records').attr('data-tilda-mode');
    select.change(function (e) {
        tabNumberMobile = $(this).val();
        content.removeClass('t819__content_active');

        t819_removeUrl();

        content.each(function (i) {
            if ($(content[i]).attr('data-tab-content-number') == tabNumberMobile) {
                $(content[i]).addClass('t819__content_active');
            }
        });

        if (curMode != 'edit' && curMode != 'preview') {
            if (typeof history.replaceState != 'undefined') {
                window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumberMobile);
            }
        }

        if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }

        e.preventDefault();
    })
}

function t819_showTabByUrl(recid, tab, content, select) {
    var curUrl = window.location.href;
    var tabIndexNumber = curUrl.indexOf(recid + '-');
    var tabIndex = curUrl.substring(tabIndexNumber + recid.length + 1);

    if (tabIndexNumber != -1) {
        tab.each(function (i) {
            if ($(tab[i]).attr('data-tab-number') == tabIndex) {
                $(tab[i]).addClass('t819__tab_active');
            }
        });

        content.each(function (i) {
            if ($(content[i]).attr('data-tab-content-number') == tabIndex) {
                $(content[i]).addClass('t819__content_active');
            }
        });

        select.val(tabIndex);

    } else {
        tab.first().addClass('t819__tab_active');
        content.first().addClass('t819__content_active');
    }

}

function t819_scrollToTabs(recid) {
    var curUrl = window.location.href;
    var tabIndexNumber = curUrl.indexOf('#!/tab/');
    var tabIndexNumberStart = curUrl.indexOf('tab/');

    if (tabIndexNumber != -1) {
        var tabRec = curUrl.substring(tabIndexNumberStart + 4, tabIndexNumberStart + 4 + recid.length)

        if (+tabRec == +recid) {
            var tabBlock = $('#rec' + tabRec).find('.t819');
            var targetOffset = tabBlock.offset().top;

            if ($(window).width() > 960) {
                var target = targetOffset - 200;
            } else {
                var target = targetOffset - 100;
            }

            $('html, body').animate({
                scrollTop: target
            }, 400);
        }
    }
}

function t819_removeUrl() {
    var curUrl = window.location.href;
    var indexToRemove = curUrl.indexOf('#!/tab/');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove < 0) {
        indexToRemove = curUrl.indexOf('%23!/tab/');
    }
    curUrl = curUrl.substring(0, indexToRemove);
    if (indexToRemove != -1) {
        if (typeof history.replaceState != 'undefined') {
            window.history.replaceState('', '', curUrl);
        }
    }
} 
function t821_init(recid){
    var rec = $('#rec'+recid);
    var el = rec.find('.t821');
    var isFixed = (el.css('position') == 'fixed');
    var redactorMode = el.hasClass('t821_redactor-mode');

    if (!redactorMode) {
      	el.removeClass('t821__beforeready');

      	if (isFixed && el.attr('data-bgopacity-two')) {
            t821_changebgopacitymenu(recid);
            $(window).bind('scroll', t_throttle(function(){t821_changebgopacitymenu(recid)}, 200));
      	}

        if (isFixed && el.attr('data-appearoffset')) {
            el.removeClass('t821__beforeready');
            t821_appearMenu(recid);
            $(window).bind('scroll', t_throttle(function(){t821_appearMenu(recid)}, 200));
        }
    }

    t821_setBg(recid);
    $(window).bind('resize', t_throttle(function(){t821_setBg(recid);}, 200));
}


function t821_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t821").each(function() {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color",bgcolor);
            }
        });
    } else {
        $(".t821").each(function() {
            var el=$(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color",bgcolor);
            el.attr("data-bgcolor-setbyscript","yes");
        });
    }
}

function t821_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980){
        $(".t821").each(function() {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset!="") {
                if(appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top","-50px");
                        el.css("visibility","visible");
                        el.animate({"opacity": "1","top": "0px"}, 200, function() {});
                    }
                } else {
                    el.stop();
                    el.css("visibility","hidden");
                }
            }
        });
    }
}

function t821_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if(window_width > 980){
        $(".t821").each(function() {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.'+menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if(bgopacitytwo == '0' || menushadow == ' '){
                  el.css("box-shadow", "none");
                } else {
                  el.css("box-shadow", "0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
                }
            } else {
                el.css("background-color",bgcolor);
                if (bgopacityone == '0.0' || menushadow == ' '){
                  el.css("box-shadow","none");
                } else {
                  el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
                }
            }
        });
    }
}


function t821_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t821"),
      burger=el.find(".t821__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t821_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}
 
function t822_init(recid) {

  t822_setHeight(recid);

  $(window).on('load', function() {
    t822_setHeight(recid);
  });

  $(window).on('resize', t_throttle(function() {
    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
    t822_setHeight(recid);
  }, 200));

  $('.t822').on('displayChanged',function(){
    t822_setHeight(recid);
  });

}

function t822_setHeight(recid) {
    $('#rec'+recid+' .t822 .t-container').each(function() {
        var t822__highestBox = 0;
        $('.t822__col', this).each(function(){
			var t822__curcol=$(this);
			var t822__curcolchild=t822__curcol.find('.t822__col-wrapper');
			if(t822__curcol.height() < t822__curcolchild.height())t822__curcol.height(t822__curcolchild.height());
            if(t822__curcol.height() > t822__highestBox)t822__highestBox = t822__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t822__col',this).css('height', t822__highestBox);
        }else{
	        $('.t822__col',this).css('height', "auto");
        }
    });
};
 
function t823_onSuccess(form){
	var inputsWrapper = form.find('.t-form__inputsbox');
  var inputsHeight = inputsWrapper.height();
  var inputsOffset = inputsWrapper.offset().top;
  var inputsBottom = inputsHeight + inputsOffset;
	var targetOffset = form.find('.t-form__successbox').offset().top;

  if ($(window).width()>960) {
    var target = targetOffset - 200;
  }	else {
    var target = targetOffset - 100;
  }

  if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
    inputsWrapper.addClass('t823__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
  } else {
    $('html, body').animate({ scrollTop: target}, 400);
    setTimeout(function(){inputsWrapper.addClass('t823__inputsbox_hidden');}, 400);
  }

	var successurl = form.data('success-url');
	if(successurl && successurl.length > 0) {
    setTimeout(function(){
      window.location.href= successurl;
    },500);
	}
}
 
function t824_init(recid) {
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');

    var rec = $('#rec' + recid);
    var block = $('#rec' + recid).find('.t824');
    var el = $('#rec' + recid).find('.t824__popup');
    var analitics = el.attr('data-track-popup');
    var hook = "TildaSendMessageWidget" + recid;
    var widgetBtn = $('#rec' + recid + ' .t824__btn');
    var closeBtn = $('#rec' + recid + ' .t824__popup-icon-close');
    var popupContainer = $('#rec' + recid + ' .t824__popup-container');

    t824_appearPopup(recid);
    $(window).bind('scroll', t_throttle(function () {
        t824_appearPopup(recid)
    }, 200));

    widgetBtn.click(function (e) {
        $('#rec' + recid + ' .t824').addClass('t824_active');
        t824_showPopup(recid);
        popupContainer.css('visibility', 'visible');
        popupContainer.animate({
            'opacity': '1'
        }, 200, function () {});
        widgetBtn.css('visibility', 'hidden');
        widgetBtn.animate({
            'opacity': '0'
        }, 200, function () {});

        if (analitics > '') {
            Tilda.sendEventToStatistics(analitics, hook);
        }

        e.preventDefault();
    });

    closeBtn.click(function (e) {
        t824_closePopup(rec);
        widgetBtn.css('visibility', 'visible');
        widgetBtn.animate({
            'opacity': '1'
        }, 200, function () {});
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
        e.preventDefault();
    });

    widgetBtn.click(function (e) {
        t824_showPopup(recid);
        $(this).css('visibility', 'hidden');
        e.preventDefault();
    });

    rec.find('.t824__mobile-icon-close').click(function (e) {
        t824_closePopup(rec);
    });

    t824_checkPhoneNumber(recid);
}

function t824_showPopup(recid) {
    var el = $('#rec' + recid);
    var popup = el.find('.t824__popup');

    el.find('.t824__btn_wrapper').removeClass('t824__btn_animate');
    el.find('.t824__btn-text').css('display', 'none');
    if ($(window).width() < 960) {
        $('body').addClass('t824__body_popupshowed');
    }

    popup.css('display', 'block');

    setTimeout(function () {
        popup.addClass('t824__popup_show');
    }, 50);

    el.find('.t824__mobile-icon-close').click(function (e) {
        t824_closePopup(el);
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t824_closePopup(el);
        }
    });

    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
}

function t824_closePopup(rec) {
    if ($(window).width() < 960) {
        $('body').removeClass('t824__body_popupshowed');
    }
    rec.find('.t824').removeClass('t824_active');
    rec.find('.t824__popup').removeClass('t824__popup_show');

    setTimeout(function () {
        rec.find('.t824__popup').not('.t824__popup_show').css('display', 'none');
    }, 300);
}

function t824_checkPhoneNumber(recid) {
    var el = $('#rec' + recid);
    var phone = el.find('.t824__phone').html();

    if (typeof phone != 'undefined') {
        var phoneArr = phone.split('');
        var phoneWithoutSpaceArr = [];

        for (var i = 0; i < phoneArr.length; i++) {
            if (phoneArr[i] !== ' ') {
                phoneWithoutSpaceArr.push(phoneArr[i]);
            }
        }

        var phoneWithoutSpace = phoneWithoutSpaceArr.join('');

        el.find('.t824__phone').attr('href', 'tel:' + phoneWithoutSpace);
    }
}

function t824_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';

    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {

        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    'hitType': 'pageview',
                    'page': virtPage,
                    'title': virtTitle
                });
            }
        }

        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            });
        }
    }
}

function t824_appearPopup(recid) {
    var window_width = $(window).width();

    if (window_width > 980) {
        var el = $('#rec' + recid + ' .t824__popup-container');
        var widgetBtn = $('#rec' + recid + ' .t824__btn');
        var appearoffset = el.attr('data-appearoffset');

        if (appearoffset != '') {
            if (appearoffset.indexOf('vh') > -1) {
                appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
            }

            appearoffset = parseInt(appearoffset, 10);

            if ($(window).scrollTop() >= appearoffset) {
                if (el.css('visibility') == 'hidden' && widgetBtn.css('visibility') == 'hidden') {
                    el.finish();

                    el.parents('.t824__popup').css('display', 'block');
                    setTimeout(function () {
                        el.parents('.t824__popup').addClass('t824__popup_show');
                    }, 50);

                    el.css('visibility', 'visible');
                    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                        t_onFuncLoad('t_lazyload_update', function () {
                            t_lazyload_update();
                        });
                    }
                    el.animate({
                        'opacity': '1'
                    }, 200, function () {});
                }
            }
        }

        if (appearoffset == '') {
            if (el.css('visibility') == 'hidden' && widgetBtn.css('visibility') == 'hidden') {

                el.parents('.t824__popup').css('display', 'block');
                setTimeout(function () {
                    el.parents('.t824__popup').addClass('t824__popup_show');
                }, 50);

                el.css('visibility', 'visible');
                if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                    t_onFuncLoad('t_lazyload_update', function () {
                        t_lazyload_update();
                    });
                }
                el.animate({
                    'opacity': '1'
                }, 200, function () {});
            }
        }
    }
} 
function t825_initPopup(recid) {
    var rec = $('#rec' + recid);
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');
    var el = $('#rec' + recid).find('.t825__popup');
    var analitics = el.attr('data-track-popup');
    var hook = "TildaSendMessageWidget" + recid;
    var obj = $('#rec' + recid + ' .t825__btn');

    obj.click(function (e) {
        if (obj.hasClass('t825__btn_active')) {
            t825_closePopup(rec);
            return;
        }
        obj.addClass('t825__btn_active');
        $('#rec' + recid + ' .t825').addClass('t825_active');
        t825_showPopup(recid);
        e.preventDefault();
        if (analitics > '') {
            Tilda.sendEventToStatistics(analitics, hook);
        }
    });
    
    var whatsAppElement = rec.find('.t825__whatsapp');
    var whatsAppHref = whatsAppElement.attr('href');
    if (typeof whatsAppHref !== 'undefined') {
        t825_removeExtraSymbolsFromWhatsApp(rec, whatsAppElement, whatsAppHref);   
    }

    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
}


function t825_removeExtraSymbolsFromWhatsApp(rec, whatsAppElement, whatsAppHref) {
    if (whatsAppHref.indexOf('?text=') !== -1) {
        var whatsAppHrefArr = whatsAppHref.split('?text=');
        whatsAppHrefArr[0] = whatsAppHrefArr[0].replace(/[\(\)+-]/g, '');
        whatsAppHref = whatsAppHrefArr[0] + '?text=' + whatsAppHrefArr[1];
    } else {
        whatsAppHref = whatsAppHref.replace(/[\(\)+-]/, '');
    }
    
    whatsAppElement.attr('href', whatsAppHref);
}


function t825_showPopup(recid) {
    var el = $('#rec' + recid);
    var popup = el.find('.t825__popup');

    el.find('.t825__btn_wrapper').removeClass('t825__btn_animate');
    el.find('.t825__btn-text').css('display', 'none');
    if ($(window).width() < 960) {
        $('body').addClass('t825__body_popupshowed');
    }

    popup.css('display', 'block');
    setTimeout(function () {
        popup.addClass('t825__popup_show');
    }, 50);

    el.find('.t825__mobile-icon-close').click(function (e) {
        t825_closePopup(el);
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t825_closePopup(el);
        }
    });

    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
}

function t825_closePopup(rec) {
    if ($(window).width() < 960) {
        $('body').removeClass('t825__body_popupshowed');
    }
    rec.find('.t825').removeClass('t825_active');
    rec.find('.t825__btn').removeClass('t825__btn_active');
    rec.find('.t825__popup').removeClass('t825__popup_show');
    setTimeout(function () {
        rec.find('.t825__popup').not('.t825__popup_show').css('display', 'none');
    }, 300);
}

function t825_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    'hitType': 'pageview',
                    'page': virtPage,
                    'title': virtTitle
                });
            }
        }
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            });
        }
    }
} 
function t826_init(recid) {
    var el = $('#rec' + recid);

    t826_startAnimation(recid);

    if (!window.isMobile) {
        $(window).bind('resize', t_throttle(function () {
            $("div:not(.t826__animation) > div[data-galaxy-id=" + recid + "]").remove();
            t826_startAnimation(recid);
        }));
    }

    if (window.isMobile) {
        $(window).on("orientationchange", function () {
            $("div:not(.t826__animation) > div[data-galaxy-id=" + recid + "]").remove();
            t826_startAnimation(recid);
        });
    }
    
    el.find('.t826').bind('displayChanged', function() {
        $("div:not(.t826__animation) > div[data-galaxy-id=" + recid + "]").remove();
        t826_startAnimation(recid);
    });
}

function t826_startAnimation(recid) {
    var el = $('#rec' + recid);
    var GalaxyEl = el.find(".t826__galaxy");
    var wr = el.find(".t826");
    var recs = wr.attr("data-galaxy-rec-ids");
    var wholepage = wr.attr("data-galaxy-whole-page");
    var vertFlip = wr.attr("data-galaxy-vflip");
    var color = wr.attr("data-element-color");
    var opacity = wr.attr("data-element-opacity");
    var options = {
        'color': (color === "" ? "#fff" : color),
        'opacity': (opacity === "" ? 1 : opacity.replace(/^0?.([0-9])0?$/g, ".$1"))
    };
    
    if(options.color.indexOf('#') !== -1) {
        var color = options.color;
        if (color[1] === color[2] && color[3] === color[4] && color[5] === color[6]) {
            options.color = "#" + color[1] + color[3] + color[5];
        }
    }

    if (vertFlip === "yes") {
        GalaxyEl.addClass("t826__galaxy_flip");
    }

    if ($("#allrecords").attr("data-tilda-mode") === "edit") {
        t826_addAnimation(el.find(".t826__demo"), GalaxyEl, options);
        return;
    }

    if (typeof recs !== "undefined") {
        recs = recs.split(",");
        /* append to certain blocks */
        recs.forEach(function (rec, index, array) {
            var curRec = $("#rec" + rec);
            var curGalaxyEl = GalaxyEl.clone().css("position", "absolute");
            t826_addAnimation(curRec, curGalaxyEl, options);
        });
    } else {
        var nextBlock = el.next(":has(.t-cover)");
        var prevBlock = el.prev(":has(.t-cover)");
        var curGalaxyEl = GalaxyEl.clone().css("position", "absolute");
        if (nextBlock.length !== 0) {
            t826_addAnimation(nextBlock, curGalaxyEl, options);
        } else if (prevBlock.length !== 0) {
            t826_addAnimation(prevBlock, curGalaxyEl, options);
        }
    }

    if (wholepage === "yes") {
        el.find(".t826__animation").css("display", "block");
        t826_addAnimation($("#allrecords"), GalaxyEl.css("position", "fixed"), options);
    }
}

function t826_addAnimation(curRec, GalaxyEl, options) {
    curRec.attr("data-animationappear", "off").removeClass('r_hidden');

    var curRecType = curRec.attr("data-record-type");
    var curRecId = curRec.attr("id");

    /* if zero block */
    if (curRecType === "396") {
        curRec.find(".t396__filter").after(GalaxyEl);
        GalaxyEl.css("z-index", "0");
    } else if (curRecId === "allrecords") {
        GalaxyEl.css("z-index", "-1");
    } else {
        var coverWrapper = curRec.find(".t-cover");
        /* if cover */
        if (coverWrapper.length > 0) {
            coverWrapper.find(".t-cover__filter").after(GalaxyEl);
            GalaxyEl.css("z-index", "0");
        } else {
            /* if any block */
            var wrapper = curRec;
            if (wrapper.length === 0) {
                return true;
            }

            wrapper.append(GalaxyEl);
            wrapper.css("position", "relative");
            wrapper.children("div").first().css({
                "position": "relative",
                "z-index": "1"
            });

            /* nothing for CR30N, GL19 */
            if (curRecType == '734' || curRecType == '675' || curRecType == '215') {
                return;
            }

            /* remove z-index for block below & set z-index -1 for galaxy */
            var excludesBlocks = [754, 776, 778, 786, 770];
            if (excludesBlocks.indexOf(parseInt(curRecType, 10)) !== -1) {
                wrapper.children("div").first().css('z-index', '');
                GalaxyEl.css("z-index", "-1");
            } else {
                /* set z-index 0 for other blocks */
                GalaxyEl.css("z-index", "0");
            }
        }
    }

    t826_runningAnimation(curRec, options);
}

function t826_runningAnimation(curRec, options) {
    var starsSetting;
    if(!window.isMobile) {
        starsSetting = [{
            name: "near",
            count: 100,
            speed: 50
        }, {
            name: "mid",
            count: 200,
            speed: 100
        }, {
            name: "far",
            count: 70,
            speed: 150
        }];
    } else {
        starsSetting = [{
            name: "near",
            count: 25,
            speed: 50
        }, {
            name: "mid",
            count: 500,
            speed: 100
        }, {
            name: "far",
            count: 175,
            speed: 150
        }];
    }

    var curRecId = curRec.attr("id");
    var maxHeight = curRec.outerHeight();
    var maxWidth = curRec.outerWidth();

    if (typeof curRecId === "undefined") {
        curRecId = "demo";
    } else if (curRecId === "allrecords") {
        maxHeight = $(window).height();
        maxWidth = $(window).width();
    }

    var animationName = "t826__galaxy-" + curRecId;
    curRec.find("#" + animationName).remove();

    var newStyle = document.createElement("style");
    newStyle.id = animationName;
    newStyle.innerHTML = "@keyframes " + animationName + "{" +
        "to{" +
            "transform:translateY(" + (-maxHeight) + "px)" +
        "}" +
    "}";

    starsSetting.forEach(function (value, index, array) {
        var x = Math.round(Math.random() * maxHeight);
        var y = Math.round(Math.random() * maxWidth);
        var dot = "";

        if(options.color.indexOf('#') !== -1) {
            dot = x + "px " + y + "px";
        } else {
            if (options.opacity < 1) {
                dot = x + "px " + y + "px rgba(" + options.color + "," + options.opacity + ")";
            } else {
                dot = x + "px " + y + "px rgb(" + options.color + ")";
            }
        }

        var countDots = Math.round(array[index].count * maxHeight / 2000);

        for (var i = 0; i < countDots; i++) {
            var x = Math.round(Math.random() * maxWidth);
            var y = Math.round(Math.random() * maxHeight);
            
            if(options.color.indexOf('#') !== -1) {
                dot += ", " + x + "px " + y + "px";
                dot += ", " + x + "px " + (y + maxHeight) + "px";
            } else {
                if (options.opacity < 1) {
                    dot += ", " + x + "px " + y + "px rgba(" + options.color + "," + options.opacity + ")";
                    dot += ", " + x + "px " + (y + maxHeight) + "px rgba(" + options.color + "," + options.opacity + ")";
                } else {
                    dot += ", " + x + "px " + y + "px rgb(" + options.color + ")";
                    dot += ", " + x + "px " + (y + maxHeight) + "px rgb(" + options.color + ")";
                }
            }
        }

        var animationDuration = Math.round(array[index].speed * maxHeight / 2000);
        className = "t826__galaxy-" + array[index].name + "-" + curRecId;

        newStyle.innerHTML += "." + className + ":after, ." + className + "{" +
                "box-shadow:" + dot + ";" +
                "animation-duration:" + animationDuration + "s;" +
                "animation-name:" + animationName + ";" +
                (options.color.indexOf('#') !== -1 ? "color:" + options.color + ";" : "" ) +
                (options.color.indexOf('#') !== -1 && options.opacity < 1 ? "opacity:" + options.opacity : "") +
            "}" +
            "." + className + ":after{" +
                "content:' ';" +
                "position:absolute;" +
                "top:" + maxHeight + "px" +
            "}";

        curRec.find(".t826__galaxy > .t826__galaxy-wrapper > .t826__galaxy-" + array[index].name).addClass(className);
    });

    curRec.prepend(newStyle);

    curRec.find(".t826__galaxy > .t826__galaxy-wrapper").css("animation-name", "t826__galaxy-fadeIn");
}
 
function t827_init(recid) {
    var rec = $('#rec' + recid);
    var grid = rec.find('.t827__grid');
    var sizer = rec.find('.t827__grid-sizer');
    var item = rec.find('.t827__grid-item');
    var images = rec.find('.t827__grid img');
    var overlay = rec.find('.t827__overlay');
    var startContainerWidth = rec.find('.t827__grid-sizer').width();

    t827_reverse(grid, item);

    images.load(function () {
        t827_initMasonry(rec, recid, grid);
        setTimeout(function () {
            t827_showOverlay(overlay, item);
        }, 500);
    });

    if (overlay.hasClass('t827__overlay_preview')) {
        setTimeout(function () {
            t827_showOverlay(overlay, item);
        }, 1000);
    }

    t827_initMasonry(rec, recid, grid);

    $(window).bind('resize', t_throttle(function() {
        if (typeof window.noAdaptive !== 'undefined' && window.noAdaptive === true && window.isMobile) { return; }
        t827_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
    }));

    rec.find('.t827').bind('displayChanged', function () {
        t827_initMasonry(rec, recid, grid);
        t827_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
    });

    setTimeout(function() {
        t827_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
    });
}


function t827_reverse(grid, item) {
    if (grid.hasClass('t827__grid_reverse')) {
        grid.append(function () {
            return $(this).children().get().reverse();
        });
    }
}

function t827_initMasonry(rec, recid, grid) {
    var $grid = grid;
    var gutterSizerWidth = rec.find('.t827__gutter-sizer').width();
    var gutterElement = rec.find('.t827__gutter-sizer').width() == 40 ? 39 : '#rec' + recid + ' .t827__gutter-sizer';
    t_onFuncLoad('imagesLoaded', function () {
        $grid.imagesLoaded(function () {
            $grid.masonry({
                itemSelector: '#rec' + recid + ' .t827__grid-item',
                columnWidth: '#rec' + recid + ' .t827__grid-sizer',
                gutter: gutterElement,
                isFitWidth: true,
                transitionDuration: 0
            });
        });
    });
}

function t827_showOverlay(overlay, item) {
    if ($(window).width() >= 1024) {
        overlay.css('display', 'block');
    } else {
        item.click(function () {
            if ($(this).find('.t827__overlay').css('opacity') == '0') {
                overlay.css('opacity', '0');
                $(this).find('.t827__overlay').css('opacity', '1');
            } else {
                $(this).find('.t827__overlay').css('opacity', '0');
            }
        });
    }
}

function t827_calcColumnWidth(rec, startcontainerwidth, grid, sizer, item) {
    var containerWidth = rec.find('.t827__container').width();
    var sizerWidth = rec.find('.t827__grid-sizer').width();
    var itemWidth = rec.find('.t827__grid-item').width();
    var gutterSizerWidth = rec.find('.t827__gutter-sizer').width() == 40 ? 39 : rec.find('.t827__gutter-sizer').width();
    var columnAmount = Math.round(containerWidth / startcontainerwidth);
    var newSizerWidth = ((containerWidth - gutterSizerWidth * (columnAmount - 1)) / columnAmount);

    if (containerWidth >= itemWidth) {
        sizer.css('width', newSizerWidth);
        item.css('width', newSizerWidth);
    } else {
        grid.css('width', '100%');
        sizer.css('width', '100%');
        item.css('width', '100%');
    }
}
 
function t829_init(recid) {
    var rec = $('#rec' + recid);
    var grid = rec.find('.t829__grid');
    var sizer = rec.find('.t829__grid-sizer');
    var item = rec.find('.t829__grid-item');
    var images = rec.find('.t829__grid img');
    var startContainerWidth = rec.find('.t829__grid-sizer').width();

    images.load(function () {
        if (!(grid.hasClass('t829__container_mobile-flex') && $(window).width() < 768) && rec.is(':visible')) {
            t829_initMasonry(rec, recid, grid);
        }
    });

    if (!(grid.hasClass('t829__container_mobile-flex') && $(window).width() < 768) && rec.is(':visible')) {
        t829_initMasonry(rec, recid, grid);
        t829_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
    }

    grid.bind('touchmove scroll', function () {
        if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }
    });

    $(window).bind('resize', t_throttle(function () {
        if (typeof window.noAdaptive !== 'undefined' && window.noAdaptive === true && window.isMobile) { return; }

        if (!(grid.hasClass('t829__container_mobile-flex'))) {
            t829_initMasonry(rec, recid, grid);
        }

        if (grid.hasClass('t829__container_mobile-flex') && $(window).width() >= 768) {
            t829_initMasonry(rec, recid, grid);
        }

        if (!(grid.hasClass('t829__container_mobile-flex') && $(window).width() < 768)) {
            t829_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
        }
    }));

    rec.find('.t829').bind('displayChanged', function () {
        if (!(grid.hasClass('t829__container_mobile-flex'))) {
            t829_initMasonry(rec, recid, grid);
        }

        if (grid.hasClass('t829__container_mobile-flex') && $(window).width() >= 768) {
            t829_initMasonry(rec, recid, grid);
        }

        if (!(grid.hasClass('t829__container_mobile-flex') && $(window).width() < 768)) {
            t829_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
        }
    });
}


function t829_initMasonry(rec, recid, grid) {
    var $grid = grid;
    var gutterSizerWidth = rec.find('.t829__gutter-sizer').width();
    var gutterElement = rec.find('.t829__gutter-sizer').width() == 40 ? 39 : '#rec' + recid + ' .t829__gutter-sizer';

    t_onFuncLoad('imagesLoaded', function () {
        $grid.imagesLoaded(function () {
            $grid.masonry({
                itemSelector: '#rec' + recid + ' .t829__grid-item',
                columnWidth: '#rec' + recid + ' .t829__grid-sizer',
                gutter: gutterElement,
                isFitWidth: true,
                transitionDuration: 0
            });
        });
    });
}

function t829_calcColumnWidth(rec, startcontainerwidth, grid, sizer, item) {
    var containerWidth = rec.find('.t829__container').width();
    var sizerWidth = rec.find('.t829__grid-sizer').width();
    var itemWidth = rec.find('.t829__grid-item').width();
    var gutterSizerWidth = rec.find('.t829__gutter-sizer').width() == 40 ? 39 : rec.find('.t829__gutter-sizer').width();
    var columnAmount = Math.round(containerWidth / startcontainerwidth);
    var newSizerWidth = ((containerWidth - gutterSizerWidth * (columnAmount - 1)) / columnAmount);
    newSizerWidth = Math.floor(newSizerWidth);
    if (containerWidth >= itemWidth) {
        sizer.css('width', newSizerWidth);
        item.css('width', newSizerWidth);
    } else {
        grid.css('width', '100%');
        sizer.css('width', '100%');
        item.css('width', '100%');
    }
}
 
function t830_init(recid) {
	var rec = $('#rec' + recid);
	var allrecords = $('#allrecords');
	var el = rec.find('.t830');
	var panel = rec.find('.t830__panel');
	var overlay = rec.find('.t830m__overlay');
	var menu = rec.find('.t830m');
	var submenu = rec.find('.t830m__submenu');
	var burger = rec.find('.t830__side .t830__burger');
	var menuItem = rec.find('.t830m__list-title a');
	var submenuItem = rec.find('.t830m__submenu-item a');

	/*   if ($(window).width() > 1199) {
     $('.t-body').prepend(rec);
     allrecords.addClass('t830__allrecords');
     $('.t-tildalabel').addClass('t830__t-tildalabel');
   }
*/

	t830_initMenu(rec, menu, burger);
	t830_removePadding(rec, allrecords);
	t830_calcCol(rec, menu, allrecords);
	t830_menuHighlight();
	t830_submenuHighlight();
	t830_openSubmenu(rec);
	t830_hoverShowMenu(rec, menu, panel, overlay, burger);

	$(window).resize(function () {
		t830_calcCol(rec, menu, allrecords);
		t830_removePadding(rec, allrecords);

		if (menu.hasClass('t830m_close') && $(window).width() > 1499) {
			overlay.removeClass('t830m__menu_show');
		}
	});

	if (submenu.hasClass('t830m__submenu_close')) {
		t830_toggleMenu(rec, submenu);
	}

	if ($(window).width() > 1199) {
		t830_scrollSideMenu(rec);
	}

	menuItem.click(function () {
		if (window.location.hash.length != 0) {
			menuItem.removeClass('t-active');
			$(this).addClass('t-active');
		}
	});

	submenuItem.click(function () {
		if (window.location.hash.length != 0) {
			submenuItem.removeClass('t-active');
			$(this).addClass('t-active');
		}
	});

	t830_checkAnchorLinks(recid);
}

function t830_calcCol(rec, menu, allrecords) {
	if ($(window).width() > 1199 && !menu.hasClass('t830m_open')) {
		allrecords.addClass('t830__allrecords_padd');
		$('.t-tildalabel').addClass('t830__t-tildalabel_padd');
	}

	if ($(window).width() > 1199 && menu.hasClass('t830m_open')) {
		allrecords.addClass('t830__allrecords_padd-small');
		$('.t-tildalabel').addClass('t830__t-tildalabel_padd-small');
	}
}

function t830_toggleMenu(rec, submenu) {
	var listTitle = rec.find('.t830m__list-title_toggle');
	var submenu;
	var textTitle;

	listTitle.click(function () {
		submenu = $(this).next();
		textTitle = $(this).find('.t830m__list-title-text');
		submenu.slideToggle('slow');

		textTitle.toggleClass('t830m__list-title-text_opacity');
		textTitle.toggleClass('t-menu__link-item');
	});
}

function t830_openSubmenu(rec) {
	var submenuItem = rec.find('.t830m__submenu-item a.t-active');
	submenuItem.parents('.t830m__submenu').css('display', 'block');
}

function t830_hoverShowMenu(rec, menu, panel, overlay, burger) {
	if ($(window).width() > 1199 && panel.hasClass('t830__panel_hover')) {
		panel.mouseenter(function (e) {
			menu.addClass('t830m__menu_show');
			burger.addClass('t830__burger_open');
			overlay.addClass('t830m__overlay_hover');
		});

		menu.mouseleave(function () {
			menu.removeClass('t830m__menu_show');
			burger.removeClass('t830__burger_open');
		});

		overlay.mouseenter(function () {
			menu.removeClass('t830m__menu_show');
			burger.removeClass('t830__burger_open');
			overlay.removeClass('t830m__overlay_hover');
		});

		menu.find('a').on('click', function () {
			menu.removeClass('t830m__menu_show');
			burger.removeClass('t830__burger_open');
		});

		burger.click(function () {
			if (burger.hasClass('t830__burger_open')) {
				t830_closeMenu(rec, menu);
				burger.removeClass('t830__burger_open');
			} else {
				menu.addClass('t830m__menu_show');
				burger.addClass('t830__burger_open');
				overlay.addClass('t830m__overlay_hover');
			}
		});
	}
}

function t830_showMenu(rec, menu, burger) {
	var panel = rec.find('.t830__panel');

	$('body').addClass('t830__body_menushowed');
	rec.find('.t830m').addClass('t830m__menu_show');
	rec.find('.t830m__overlay').addClass('t830m__menu_show');

	rec.find('.t830m__overlay, .t830m__close, a[href*="#"]').click(function () {
		if (
			$(this).is(
				'.tooltipstered, .t794__tm-link, .t978__tm-link, .t966__tm-link'
			)
		) {
			return;
		}
		t830_closeMenu(rec, menu);
		burger.removeClass('t830__burger_open');
	});

	panel.addClass('t830__panel_close');

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			if ($('.t-site-search-popup__background').length === 0) {
				$('body').removeClass('t830__body_menushowed');
				$('.t830m').removeClass('t830m__menu_show');
				burger.removeClass('t830__burger_open');
				$('.t830m__overlay').removeClass('t830m__menu_show');
			}
		}
	});
}

function t830_closeMenu(rec, menu) {
	var panel = rec.find('.t830__panel');

	if (menu.hasClass('t830m_open') && $(window).width() < 1500) {
		panel.removeClass('t830__panel_close');
	}

	$('body').removeClass('t830__body_menushowed');
	$('.t830m').removeClass('t830m__menu_show');
	$('.t830m__overlay').removeClass('t830m__menu_show');
}

function t830_initMenu(rec, menu, burger) {
	var obj = rec.find('.t830__menu__content');
	var panel = rec.find('.t830__panel');
	var menu = rec.find('.t830m');

	if (
		panel.hasClass('t830__panel_click') ||
		(panel.hasClass('t830__panel_hover') && $(window).width() <= 1199)
	) {
		obj.click(function (e) {
			if (menu.hasClass('t830m__menu_show')) {
				burger.removeClass('t830__burger_open');
				t830_closeMenu(rec, menu);
			} else {
				burger.addClass('t830__burger_open');
				t830_showMenu(rec, menu, burger);
			}

			e.preventDefault();
		});
	}

	$('.t830').bind('clickedAnchorInTooltipMenu', function () {
		t830_closeMenu(rec, menu);
	});
}

function t830_menuHighlight() {
	var url = window.location.href;
	var pathname = window.location.pathname;
	if (url.substr(url.length - 1) == '/') {
		url = url.slice(0, -1);
	}
	if (pathname.substr(pathname.length - 1) == '/') {
		pathname = pathname.slice(0, -1);
	}
	if (pathname.charAt(0) == '/') {
		pathname = pathname.slice(1);
	}
	if (pathname == '') {
		pathname = '/';
	}
	$(".t830m__list-title a[href='" + url + "']").addClass('t-active');
	$(".t830m__list-title a[href='" + url + "/']").addClass('t-active');
	$(".t830m__list-title a[href='" + pathname + "']").addClass('t-active');
	$(".t830m__list-title a[href='/" + pathname + "']").addClass('t-active');
	$(".t830m__list-title a[href='" + pathname + "/']").addClass('t-active');
	$(".t830m__list-title a[href='/" + pathname + "/']").addClass('t-active');
}

function t830_submenuHighlight() {
	var url = window.location.href;
	var pathname = window.location.pathname;
	if (url.substr(url.length - 1) == '/') {
		url = url.slice(0, -1);
	}
	if (pathname.substr(pathname.length - 1) == '/') {
		pathname = pathname.slice(0, -1);
	}
	if (pathname.charAt(0) == '/') {
		pathname = pathname.slice(1);
	}
	if (pathname == '') {
		pathname = '/';
	}
	$(".t830m__submenu-item a[href='" + url + "']").addClass('t-active');
	$(".t830m__submenu-item a[href='" + url + "/']").addClass('t-active');
	$(".t830m__submenu-item a[href='" + pathname + "']").addClass('t-active');
	$(".t830m__submenu-item a[href='/" + pathname + "']").addClass('t-active');
	$(".t830m__submenu-item a[href='" + pathname + "/']").addClass('t-active');
	$(".t830m__submenu-item a[href='/" + pathname + "/']").addClass('t-active');
}

function t830_scrollSideMenu(rec) {
	var container = rec.find('.t830m__container');

	container.on('scroll wheel DOMMouseScroll mousewheel', function (e) {
		var searchResultContainer = rec.find('.t-site-search-dm');

		if (searchResultContainer.length == 0) {
			t830_stopScroll(this, e);
		}
	});
}

function t830_stopScroll(block, eventScroll) {
	var $this = $(block);
	var scrollTop = block.scrollTop;
	var scrollHeight = block.scrollHeight;
	var height = $this.height();
	var delta =
		eventScroll.type == 'DOMMouseScroll'
			? eventScroll.originalEvent.detail * -40
			: eventScroll.originalEvent.wheelDelta;
	var up = delta > 0;

	var prevent = function () {
		eventScroll.stopPropagation();
		eventScroll.preventDefault();
		eventScroll.returnValue = false;
		return false;
	};
	if (!up && -delta > scrollHeight - height - scrollTop) {
		$this.scrollTop(scrollHeight);
		return prevent();
	} else if (up && delta > scrollTop) {
		$this.scrollTop(0);
		return prevent();
	}
}

function t830_removePadding(rec, allrecords) {
	if (rec.css('display') == 'none') {
		allrecords.css('padding-left', 0);
		$('.t-tildalabel').css('padding-left', 0);
	}
}

function t830_checkAnchorLinks(recid) {
	if ($(window).width() >= 960) {
		var submenuNavLinks = $(
			'#rec' + recid + " .t830m__list a:not(.tooltipstered)[href*='#']"
		);

		if (submenuNavLinks.length > 0) {
			setTimeout(function () {
				t830_catchScroll(submenuNavLinks, recid);
			}, 500);
		}
	}
}

function t830_catchScroll(navLinks, recid) {
	var rec = $('#rec' + recid);
	var clickedSectionId = null;
	var sections = new Array();
	var sectionIdTonavigationLink = [];
	var interval = 100;
	var lastCall;
	var timeoutId;
	var navLinks = $(navLinks.get().reverse());

	navLinks.each(function () {
		var cursection = t830_getSectionByHref($(this));
		if (typeof cursection.attr('id') != 'undefined') {
			sections.push(cursection);
		}
		sectionIdTonavigationLink[cursection.attr('id')] = $(this);
	});
	t830_updateSectionsOffsets(sections);

	sections.sort(function (a, b) {
		return b.attr('data-offset-top') - a.attr('data-offset-top');
	});

	$(window).bind(
		'resize',
		t_throttle(function () {
			t830_updateSectionsOffsets(sections);
		}, 200)
	);
	$('.t830').bind('displayChanged', function () {
		t830_updateSectionsOffsets(sections);
	});
	setInterval(function () {
		t830_updateSectionsOffsets(sections);
	}, 5000);
	t830_highlightNavLinks(
		navLinks,
		sections,
		sectionIdTonavigationLink,
		clickedSectionId
	);

	navLinks.click(function () {
		var clickedSection = t830_getSectionByHref($(this));
		if (
			!$(this).hasClass('tooltipstered') &&
			typeof clickedSection.attr('id') != 'undefined'
		) {
			navLinks.removeClass('t-active');
			$(this).addClass('t-active');
			clickedSectionId = t830_getSectionByHref($(this)).attr('id');
		}
	});

	$(window).scroll(function () {
		var now = new Date().getTime();
		if (lastCall && now < lastCall + interval) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(function () {
				lastCall = now;
				clickedSectionId = t830_highlightNavLinks(
					navLinks,
					sections,
					sectionIdTonavigationLink,
					clickedSectionId
				);
			}, interval - (now - lastCall));
		} else {
			lastCall = now;
			clickedSectionId = t830_highlightNavLinks(
				navLinks,
				sections,
				sectionIdTonavigationLink,
				clickedSectionId
			);
		}
	});
}

function t830_getSectionByHref(curlink) {
	var curLinkValue = curlink.attr('href').replace(/\s+/g, '');
	if (curLinkValue[0] == '/') {
		curLinkValue = curLinkValue.substring(1);
	}
	if (curlink.is('[href*="#rec"]')) {
		return $(".r[id='" + curLinkValue.substring(1) + "']");
	} else {
		return $(".r[data-record-type='215']").has(
			"a[name='" + curLinkValue.substring(1) + "']"
		);
	}
}

function t830_highlightNavLinks(
	navLinks,
	sections,
	sectionIdTonavigationLink,
	clickedSectionId
) {
	var scrollPosition = $(window).scrollTop();
	var valueToReturn = clickedSectionId;
	if (
		sections.length != 0 &&
		clickedSectionId == null &&
		sections[sections.length - 1].attr('data-offset-top') >
			scrollPosition + 300
	) {
		navLinks.removeClass('t-active');
		return null;
	}

	$(sections).each(function (e) {
		var curSection = $(this);
		var sectionTop = curSection.attr('data-offset-top');
		var id = curSection.attr('id');
		var navLink = sectionIdTonavigationLink[id];

		if (
			scrollPosition + 300 >= sectionTop ||
			(sections[0].attr('id') == id &&
				scrollPosition >= $(document).height() - $(window).height())
		) {
			if (clickedSectionId == null && !navLink.hasClass('t-active')) {
				navLinks.removeClass('t-active');
				navLink.addClass('t-active');
				valueToReturn = null;
			} else {
				if (clickedSectionId != null && id == clickedSectionId) {
					valueToReturn = null;
				}
			}
			return false;
		}
	});

	return valueToReturn;
}

function t830_updateSectionsOffsets(sections) {
	$(sections).each(function () {
		var curSection = $(this);
		curSection.attr('data-offset-top', curSection.offset().top);
	});
}
 
function t833_init(recid) {
    t833_startAnimation(recid);
}


function t833_showOnCertainWidth(el, wrapper) {
    el.attr('class').split(' ').forEach(function (item) {
        if (item.indexOf('t-screen') !== -1) {
            wrapper.addClass(item);
        }
    });
}


function t833_startAnimation(recid) {
    var el = $('#rec' + recid);
    var wrapper = el.find('.t833__sliderwrapper');
    var wr = el.find('.t833');
    var recs = wr.attr('data-coverslider-rec-ids');

    t833_showOnCertainWidth(el, wrapper);

    if ($('#allrecords').attr('data-tilda-mode') === 'edit') {
        t833_addAnimation(el.find('.t833__demo'), wrapper);
        return;
    }

    if (typeof recs !== 'undefined') {
        recs = recs.split(',');
        /* append to certain blocks */
        recs.forEach(function (rec, index, array) {
            var curRec = $('#rec' + rec);
            var curWrapper = wrapper.clone().css('position', 'absolute');
            t833_addAnimation(curRec, curWrapper);
        });
    } else {
        var nextBlock = el.next(':has(.t-cover)');
        var prevBlock = el.prev(':has(.t-cover)');
        var curWrapper = wrapper.clone().css('position', 'absolute');
        if (nextBlock.length !== 0) {
            t833_addAnimation(nextBlock, curWrapper);
        } else if (prevBlock.length !== 0) {
            t833_addAnimation(prevBlock, curWrapper);
        }
    }
}

function t833_addAnimation(curRec, wrapper) {
    var isLoad = false;
    curRec.attr('data-animationappear', 'off').removeClass('r_hidden');
    
    var curRecType = curRec.attr('data-record-type');
    /* CR43 */
    var isT941 = curRecType === '941';
    var curRecId = curRec.attr('id');

    if (curRecType === '396') {
        /*if zero block*/
        curRec.find('.t396__filter').after(wrapper);
        wrapper.css('z-index', '0');
    }

    var coverWrapper = isT941 
        ? coverWrapper = curRec.find('.t941__cover-wrap') 
        : curRec.find('.t-cover');

    if (coverWrapper.length > 0) {
        /*if cover*/
        if (isT941) {
            wrapper.addClass('t941__cover');
            coverWrapper.append(wrapper);
        } else {
            coverWrapper.find('.t-cover__filter').after(wrapper);
        }
        
        wrapper.css('z-index', '0');
    }

    if (curRec.length !== 0) {
        $(window).on('load', function () {
            setTimeout(function () {
                isLoad = true;
                t833_changeSlide(curRec);
            }, 5000)
        });
    }
    
    /* Fix for FF */
    $(window).on('load', function () {
        setTimeout(function () {
            var timerId = setInterval(function () {
                if (!isLoad) {
                    isLoad = true;
                    t833_changeSlide(curRec);
                }
                if (isLoad) {
                    clearInterval(timerId);
                }
            }, 500);
        }, 5000)
    });

    var slider = curRec.find('.t833__slider');
    var slide = curRec.find('.t833__slide');
    var numberOfSlides = slide.length;

    if (numberOfSlides === 3 || numberOfSlides === 2) {
        slide.clone().appendTo(slider);
    }
}

function t833_changeSlide(curRec) {
    var sliderWrapper = curRec.find('.t833__sliderwrapper');
    
    if (sliderWrapper.length) {
        sliderWrapper.each(function(j) {
            var isLoaded = $(this).attr('data-loaded') && $(this).attr('data-loaded') === 'yes' ? true : false;
            
            if (!isLoaded) {
                var slide = $(this).find('.t833__slide');
                var firstSlide = $(this).find('.t833__slide:first-child');
                numberOfSlides = slide.length;
                
                firstSlide.addClass('t833__slide_fx1');
                setTimeout(t833_kenBurns(slide, numberOfSlides, 1), 5000);
                $(this).attr('data-loaded', 'yes');
            }
        });
    }
    
    function t833_kenBurns(slides, numberOfSlides, i) {
        if (i == numberOfSlides) {
            i = 0;
        }

        $(slides[i]).addClass('t833__slide_fx');

        if (i === 0) {
            $(slides[numberOfSlides - 2]).removeClass('t833__slide_fx t833__slide_fx1');
        }

        if (i === 1) {
            $(slides[numberOfSlides - 1]).removeClass('t833__slide_fx t833__slide_fx1');
            slides.removeClass('t833__slide_opacity');
        }

        if (i > 1) {
            $(slides[i - 2]).removeClass('t833__slide_fx t833__slide_fx1');
        }

        setTimeout(function() {
            t833_kenBurns(slides, numberOfSlides, i + 1);
        }, 5000);
    }
} 
function t835_init(recid) {
    var rec = $('#rec' + recid);
    var quizWrapper = rec.find('.t835__quiz-wrapper');
    var quizFormWrapper = rec.find('.t835__quiz-form-wrapper');
    var form = rec.find('.t835 .t-form');
    var quizQuestion = rec.find('.t835 .t-input-group');
    var prevBtn = rec.find('.t835__btn_prev');
    var nextBtn = rec.find('.t835__btn_next');
    var resultBtn = rec.find('.t835__btn_result');
    var errorBoxMiddle = rec.find('.t-form__errorbox-middle .t-form__errorbox-wrapper');
    var captureFormHTML = '<div class="t835__capture-form"></div>';
    rec.find('.t835 .t-form__errorbox-middle').before(captureFormHTML);
    var quizQuestionNumber = 0;
    form.removeClass('js-form-proccess');
    var specCommentInput = form.find('input.js-form-spec-comments[name="form-spec-comments"]');
    if (form.data('formactiontype') != 1 && !specCommentInput.length) {
		form.append('<div style="position: absolute; left: -5000px; bottom:0;"><input type="text" name="form-spec-comments" value="Its good" class="js-form-spec-comments"  tabindex="-1" /></div>');
	}
    $(quizQuestion[quizQuestionNumber]).show();
    $(quizQuestion[quizQuestionNumber]).addClass('t-input-group-step_active');

    t835_workWithAnswerCode(rec);

    quizQuestion.each(function (i) {
        $(quizQuestion[i]).attr('data-question-number', i);
    });

    t835_wrapCaptureForm(rec);

    t835_showCounter(rec, quizQuestionNumber);
    t835_disabledPrevBtn(rec, quizQuestionNumber);
    t835_checkLength(rec);

    prevBtn.click(function (e) {
        if (quizQuestionNumber > 0) {
            quizQuestionNumber--;
        }

        t835_setProgress(rec, -1);

        if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }

        t835_awayFromResultScreen(rec);
        t835_showCounter(rec, quizQuestionNumber);
        t835_hideError(rec, quizQuestionNumber);
        t835_disabledPrevBtn(rec, quizQuestionNumber);
        t835_switchQuestion(rec, quizQuestionNumber);
        t835_scrollToTop(quizWrapper);

        e.preventDefault();
    });

    nextBtn.click(function (e) {
        if (quizWrapper.hasClass('t835__quiz-published')) {
            var showErrors = t835_setError(rec, quizQuestionNumber);
        }

        if (showErrors) {
            errorBoxMiddle.hide();
        }

        if (!showErrors) {
            quizQuestionNumber++;
            prevBtn.attr('disabled', false);
            t835_setProgress(rec, 1);
            t835_showCounter(rec, quizQuestionNumber);
            t835_switchQuestion(rec, quizQuestionNumber);
            t835_scrollToTop(quizWrapper);
        }

        if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }

        e.preventDefault();
    });

    quizQuestion.keypress(function (e) {
        var activeStep = form.find('.t-input-group-step_active');
        if (event.keyCode === 13 && !form.hasClass('js-form-proccess') && !activeStep.hasClass('t-input-group_ta')) {
            if (quizWrapper.hasClass('t835__quiz-published')) {
                var showErrors = t835_setError(rec, quizQuestionNumber);
            }
            var questionArr = t835_createQuestionArr(rec);

            if (showErrors) {
                errorBoxMiddle.hide();
            }

            prevBtn.attr('disabled', false);
            if (!showErrors) {
                quizQuestionNumber++;
                t835_setProgress(rec, 1);

                if (quizQuestionNumber < questionArr.length) {
                    t835_switchQuestion(rec, quizQuestionNumber);
                } else {
                    t835_switchResultScreen(rec);
                    form.addClass('js-form-proccess');
                }

                t835_scrollToTop(quizWrapper);
                t835_disabledPrevBtn(rec, quizQuestionNumber);
            }

            if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
                if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                    t_onFuncLoad('t_lazyload_update', function () {
                        t_lazyload_update();
                    });
                }
            }

            e.preventDefault();
        }
    });

    resultBtn.click(function (e) {

        if (quizWrapper.hasClass('t835__quiz-published')) {
            var showErrors = t835_setError(rec, quizQuestionNumber);
        }

        if (showErrors) {
            errorBoxMiddle.hide();
        }

        if (!showErrors) {
            quizQuestionNumber++;
            t835_setProgress(rec, 1);
            t835_switchResultScreen(rec);
            t835_scrollToTop(quizWrapper);
            form.addClass('js-form-proccess');
            t835_disabledPrevBtn(rec, quizQuestionNumber);
        }

        e.preventDefault();
    });
}


function t835_workWithAnswerCode(rec) {
    rec.find('.t-input-group_ri').find('input').each(function () {
        var $this = $(this);
        if ($this.val().indexOf('value::') != -1) {
            t835_setAnswerCode($this);
            var label = $this.parent().find('.t-img-select__text');
            label.text(label.text().split('value::')[0].trim());
        }
    });

    rec.find('.t-input-group_rd').find('input').each(function () {
        var $this = $(this);
        if ($this.val().indexOf('value::') != -1) {
            t835_setAnswerCode($this);
            var label = $this.parent();

            label.html(function () {
                var html = $(this).html().split('value::')[0].trim();
                return html;
            });
        }
    });


    rec.find('.t-input-group_sb').find('option').each(function () {
        var $this = $(this);
        if ($this.val().indexOf('value::') != -1) {
            t835_setAnswerCode($this);
            $this.text($this.text().split('value::')[0].trim());
        }
    });
}


function t835_setAnswerCode($this) {
    var parameter = $this.val().split('value::')[1].trim();
    $this.val(parameter);
}


function t835_scrollToTop(quizFormWrapper) {
    var topCoordinateForm = quizFormWrapper.offset().top;
    var paddingTop = 0;
    var blockContainer = quizFormWrapper.parents('.t835');
    
    if (topCoordinateForm >= window.scrollY || blockContainer.hasClass('t835_scroll-disabled')) return;
    
    if ($('.t228__positionfixed').length > 0 && !window.isMobile) {
        paddingTop = paddingTop + $('.t228__positionfixed').height();
    }
    $('html, body').animate({
        scrollTop: topCoordinateForm - paddingTop
    }, 0);
}


function t835_checkLength(rec) {
    var nextBtn = rec.find('.t835__btn_next');
    var resultBtn = rec.find('.t835__btn_result');
    var questionArr = t835_createQuestionArr(rec);

    if (questionArr.length < 2) {
        nextBtn.hide();
        resultBtn.show();
    }
}


function t835_showCounter(rec, quizQuestionNumber) {
    var counter = rec.find('.t835__quiz-description-counter');
    var questionArr = t835_createQuestionArr(rec);
    counter.html(quizQuestionNumber + 1 + '/' + questionArr.length);
}


function t835_setError(rec, quizQuestionNumber) {
    var questionArr = t835_createQuestionArr(rec);
    var currentQuestion = $(questionArr[quizQuestionNumber]);
    var arErrors = window.tildaForm.validate(currentQuestion);
    var showErrors;
    currentQuestion.addClass('js-error-control-box');
    var errorsTypeObj = arErrors[0];

    if (errorsTypeObj != undefined) {
        var errorType = errorsTypeObj.type[0];
        var errorTextCustom = rec.find('.t835 .t-form').find('.t-form__errorbox-middle').find('.js-rule-error-' + errorType).text();
        var sError = '';
        if (errorTextCustom != '') {
            sError = errorTextCustom;
        } else {
            t_onFuncLoad('t_form_dict', function () {
                sError = t_form_dict(errorType);
            });
        }
        showErrors = errorType == 'emptyfill' ? false : window.tildaForm.showErrors(currentQuestion, arErrors);
        currentQuestion.find('.t-input-error').html(sError);
    }

    return showErrors;
}


function t835_hideError(rec, quizQuestionNumber) {
    var questionArr = t835_createQuestionArr(rec);
    var currentQuestion = $(questionArr[quizQuestionNumber]);
    currentQuestion.removeClass('js-error-control-box');
    currentQuestion.find('.t-input-error').html('');
}


function t835_setProgress(rec, index) {
    var progressbarWidth = rec.find('.t835__progressbar').width();
    var progress = rec.find('.t835__progress');
    var questionArr = t835_createQuestionArr(rec);
    var progressWidth = progress.width();
    var progressStep = progressbarWidth / (questionArr.length);
    var percentProgressWidth = (progressWidth + index * progressStep) / progressbarWidth * 100 + '%';

    progress.css('width', percentProgressWidth);
}


function t835_wrapCaptureForm(rec) {
    var captureForm = rec.find('.t835__capture-form');
    var quizQuestion = rec.find('.t835 .t-input-group');
    var quizFormWrapper = rec.find('.t835__quiz-form-wrapper');

    quizQuestion.each(function (i) {
        var currentQuizQuestion = $(quizQuestion[i]);
        var emailInputExist = $(currentQuizQuestion).hasClass('t-input-group_em');
        var nameInputExist = $(currentQuizQuestion).hasClass('t-input-group_nm');
        var phoneInputExist = $(currentQuizQuestion).hasClass('t-input-group_ph');
        var checkboxInputExist = $(currentQuizQuestion).hasClass('t-input-group_cb');
        var quizQuestionNumber = currentQuizQuestion.attr('data-question-number');
        var maxCountOfCaptureFields = quizFormWrapper.hasClass('t835__quiz-form-wrapper_withcheckbox') ? 4 : 3;

        if (quizQuestionNumber >= quizQuestion.length - maxCountOfCaptureFields) {
            var isCaptureGroup = true;
            
            if (quizFormWrapper.hasClass('t835__quiz-form-wrapper_newcapturecondition')) {
                var inputsGroup = currentQuizQuestion.nextAll('.t-input-group');
                inputsGroup.each(function() {
                    isCaptureGroup = $(this).hasClass('t-input-group_cb') || $(this).hasClass('t-input-group_em') || $(this).hasClass('t-input-group_nm') || $(this).hasClass('t-input-group_ph');
                });
            }
            
            if (isCaptureGroup) {
                if (quizFormWrapper.hasClass('t835__quiz-form-wrapper_withcheckbox')) {
                    if (emailInputExist || nameInputExist || phoneInputExist || checkboxInputExist) {
                        currentQuizQuestion.addClass('t835__t-input-group_capture');
                        captureForm.append(currentQuizQuestion);
                    }
                } else {
                    if (emailInputExist || nameInputExist || phoneInputExist) {
                        currentQuizQuestion.addClass('t835__t-input-group_capture');
                        captureForm.append(currentQuizQuestion);
                    }
                }
            }
        }
    });
}


function t835_createQuestionArr(rec) {
    var quizQuestion = rec.find('.t835 .t-input-group');
    var questionArr = [];

    quizQuestion.each(function (i) {
        var question = $(quizQuestion[i]);
        if (!question.hasClass('t835__t-input-group_capture')) {
            questionArr.push(quizQuestion[i]);
        }
    });

    return questionArr;
}


function t835_disabledPrevBtn(rec, quizQuestionNumber) {
    var prevBtn = rec.find('.t835__btn_prev');
    quizQuestionNumber == 0 ? prevBtn.attr('disabled', true) : prevBtn.attr('disabled', false);
}


function t835_switchQuestion(rec, quizQuestionNumber) {
    var nextBtn = rec.find('.t835__btn_next');
    var resultBtn = rec.find('.t835__btn_result');
    var questionArr = t835_createQuestionArr(rec);

    $(questionArr).hide();
    $(questionArr).removeClass('t-input-group-step_active');
    $(questionArr[quizQuestionNumber]).show();
    $(questionArr[quizQuestionNumber]).addClass('t-input-group-step_active');

    if (quizQuestionNumber === questionArr.length - 1) {
        nextBtn.hide();
        resultBtn.show();
    } else {
        nextBtn.show();
        resultBtn.hide();
    }
}


function t835_switchResultScreen(rec) {
    var captureForm = rec.find('.t835__capture-form');
    var quizDescription = rec.find('.t835__quiz-description');
    var resultTitle = rec.find('.t835__result-title');
    var resultBtn = rec.find('.t835__btn_result');
    var submitBtnWrapper = rec.find('.t835 .t-form__submit');
    var questionArr = t835_createQuestionArr(rec);

    $(questionArr).hide();
    $(captureForm).show();

    resultBtn.hide();
    quizDescription.hide();
    resultTitle.show();

    submitBtnWrapper.show();
}


function t835_awayFromResultScreen(rec) {
    var captureForm = rec.find('.t835__capture-form');
    var quizDescription = rec.find('.t835__quiz-description');
    var resultTitle = rec.find('.t835__result-title');
    var submitBtnWrapper = rec.find('.t835 .t-form__submit');

    submitBtnWrapper.hide();
    $(captureForm).hide();
    quizDescription.show();
    resultTitle.hide();
}


function t835_onSuccess(form) {
    var inputsWrapper = form.find('.t-form__inputsbox');
    var inputsHeight = inputsWrapper.height();
    var inputsOffset = inputsWrapper.offset().top;
    var inputsBottom = inputsHeight + inputsOffset;
    var targetOffset = form.find('.t-form__successbox').offset().top;
    var prevBtn = form.parents('.t835').find('.t835__btn_prev');
    var target;

    if ($(window).width() > 960) {
        target = targetOffset - 200;
    } else {
        target = targetOffset - 100;
    }

    if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
        inputsWrapper.addClass('t835__inputsbox_hidden');
        setTimeout(function () {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({
                    opacity: 0
                }, 50);
            }
        }, 300);
    } else {
        $('html, body').animate({
            scrollTop: target
        }, 400);
        setTimeout(function () {
            inputsWrapper.addClass('t835__inputsbox_hidden');
        }, 400);
    }

    var successurl = form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function () {
            window.location.href = successurl;
        }, 500);
    }

    prevBtn.hide();
}
 
function t842_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t842');
  var doResize;

  t842_unifyHeights(rec);

  $(window).on('resize', function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t842_unifyHeights(rec);
    }, 200);
  });

  $(window).on('load', function() {
    t842_unifyHeights(rec);
  });

  $('.t842').on('displayChanged', function() {
    t842_unifyHeights(rec);
  });

  if (container.hasClass('t842__previewmode')) {
    setInterval(function() {
      t842_unifyHeights(rec);
    }, 5000);
  }
}


function t842_unifyHeights(rec) {
  if ($(window).width() >= 960) {
    rec.find('.t842 .t-container .t842__row').each(function() {
      var highestBox = 0;
      var row = $(this);
      $('.t842__inner-col', this).each(function() {
        var col = $(this);
        var wrap = col.find('.t842__wrap');
        var colHeight = wrap.outerHeight();
        if (colHeight > highestBox) {
          highestBox = colHeight;
        }
      });
      $('.t842__inner-col', this).css('height', highestBox);
      $('.t842__bgimg', this).css('height', highestBox);
    });
  } else {
    $('.t842__inner-col').css('height', 'auto');
    $('.t842__bgimg').css('height', 'auto');
  }
}
 
function t843_init(recid) {
    var rec = $('#rec' + recid);
    var container = rec.find('.t843');

    t843_setHeight(rec);

    $(window).bind('resize', t_throttle(function () {
        if (typeof window.noAdaptive !== 'undefined' && window.noAdaptive === true && window.isMobile) { return; }
        t843_setHeight(rec);
        
    }));

    rec.find('.t843').bind('displayChanged', function () {
        t843_setHeight(rec);
    });

    if (container.hasClass('t843__previewmode')) {
        setInterval(function () {
            t843_setHeight(rec);
        }, 5000);
    }
}

function t843_setHeight(rec) {
    var image = rec.find('.t843__blockimg');
    var isLoaded = true;
    
    image.each(function () {
        var width = $(this).attr('data-image-width');
        var height = $(this).attr('data-image-height');
        var ratio = height / width;
        var padding = ratio * 100;
        $(this).css('padding-bottom', padding + '%');
        
        if (!$(this).hasClass('loaded')) {
            isLoaded = false;
        }
    });

    if ($(window).width() > 960) {
        var textwr = rec.find('.t843__textwrapper');
        var deskimg = rec.find('.t843__desktopimg');
        textwr.each(function (i) {
            $(this).css('height', $(deskimg[i]).innerHeight());
        });
    }
    
    if (!isLoaded) {
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
           t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
           });
        }
    }
}
 
function t849_init(recid) {
    var el = $('#rec' + recid);
    var toggler = el.find('.t849__header');
    var accordion = el.find('.t849__accordion');
    if (accordion) {
        accordion = accordion.attr('data-accordion');
    } else {
        accordion = "false";
    }

    toggler.click(function () {
        if (accordion === "true") {
            toggler.not(this).removeClass("t849__opened").next().slideUp();
        }

        $(this).toggleClass('t849__opened');
        $(this).next().slideToggle();
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    });
} 
function t850_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t850');
  var doResize;

  t850_unifyHeights(rec);

  $(window).on('resize', function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t850_unifyHeights(rec);
    }, 200);
  });

  $(window).on('load', function() {
    t850_unifyHeights(rec);
  });

  $('.t850').on('displayChanged', function() {
    t850_unifyHeights(rec);
  });

  if (container.hasClass('t850__previewmode')) {
    setInterval(function() {
      t850_unifyHeights(rec);
    }, 5000);
  }
}


function t850_unifyHeights(rec) {
  if ($(window).width() >= 960) {
  	rec.find('.t850 .t-container .t850__row').each(function() {
  		var highestBox = 0;
  		var currow = $(this);
  		$('.t850__inner-col', this).each(function() {
  			var curCol = $(this);
        var curText = curCol.find('.t850__wrap');
        var curColHeight = curText.outerHeight();
  			if (curColHeight > highestBox) {highestBox = curColHeight;}
  		});
  		$('.t850__inner-col', this).css('height', highestBox);
  	});
  } else {
  	$('.t850__inner-col').css('height', 'auto');
  }
}
 
function t851_init(recid) {
    var rec = $('#rec' + recid + ' .t851');

    t851_updateLazyLoad(recid);
}

function t851_updateLazyLoad(recid) {
    var scrollContainer = $("#rec" + recid + " .t851__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode != "edit" && curMode != "preview") {
        scrollContainer.bind('scroll', t_throttle(function () {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }, 500))
    }
} 
function t852_init(recid) {
    setTimeout(function () {
        t852_updateLazyLoad(recid);
    }, 500);
}

function t852_updateLazyLoad(recid) {
    var scrollContainer = $("#rec" + recid + " .t852__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode !== "edit" && curMode !== "preview") {
        scrollContainer.bind('scroll', t_throttle(function () {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }));
    }
}
 
function t854_init(recid) {
  var rec = $('#rec' + recid);
  var btnNews = rec.find('.t854__news-btn');
  var newsContent = rec.find('.t854__news-content');
  var attrKeyTelegram = newsContent.attr('data-telegram-key');
  var keyTelegram = attrKeyTelegram.length !== 0 ? attrKeyTelegram : 'V1J5MnVkSWJ2UW5nN1JZM';
  var attrCountNews = newsContent.attr('data-telegram-news-amount');
  var symbolsAttr = newsContent.attr('data-telegram-symbols-preview')
  var countNews = attrCountNews.length !== 0 ? +attrCountNews : 5;
  var dateFormat = newsContent.attr('data-telegram-date');
  var currentFromNews = 0;
  var currentShlop = 0;
  var symbolsAmount = 40;

  if (symbolsAttr === '') {
    symbolsAmount = 200;
  } else {
    if (symbolsAttr < 40) {
      symbolsAmount = 40;
    } else if (symbolsAttr > 1000) {
      symbolsAmount = 1000;
    } else {
      symbolsAmount = symbolsAttr;
    }
  }

  var totalNews = t854_showNews(rec, newsContent, keyTelegram, countNews, currentFromNews, currentShlop, dateFormat, symbolsAmount);
  newsContent.removeAttr('data-telegram-key data-telegram-news-amount data-telegram-symbols-preview data-telegram-date');
  t854_hideBtn(btnNews, totalNews, currentFromNews, countNews);

  btnNews.on('click', function(e) {
    e.preventDefault();
    currentFromNews = currentFromNews + countNews;
    currentShlop = $(this).parents('.t854__news-wrap').attr('data-news-shlop');
    t854_hideBtn(btnNews, totalNews, currentFromNews, countNews);
    if (currentFromNews < totalNews) {
      t854_showNews(rec, newsContent, keyTelegram, countNews, currentFromNews, currentShlop, dateFormat, symbolsAmount);
    }
  });
}


function t854_hideBtn(btnNews, totalNews, currentFromNews, countNews) {
  if ((totalNews - currentFromNews) <= countNews) {
    btnNews.hide();
  }
}


function t854_formatDate(date, dateFormat) {
  var dateParts = date.split('-');
  var newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  var newMonth = newDate.getMonth();
  var newDay = newDate.getDay();
  var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  switch (+dateFormat) {
    case 1:
      return (dateParts[1] + '-' + dateParts[2] + '-' + dateParts[0]);
    case 2:
      return (dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0]);
    case 3:
      return (dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0]);
    case 4:
      return (dateParts[2] + '.' + dateParts[1] + '.' + dateParts[0]);
    case 5:
      return (month[newMonth] + ' ' + dateParts[2] + ', ' + dateParts[0]);
    default:
      return (dayOfWeek[newDay] + ', ' + month[newMonth] + ' ' + dateParts[2]);
  }
}


function t854_getNews(rec, keyTelegram, count, from, shlop, symbolsAmount) {
  var language = window.navigator ? (window.navigator.language ||
                    window.navigator.systemLanguage ||
                    window.navigator.userLanguage) : "ru";
  language = language.substr(0, 2).toLowerCase();
  var btnNews = rec.find('.t854__news-btn');
  var newsWrap = rec.find('.t854__news-wrap');
  var newsContainer = rec.find('.t854__news-wrap-container');
  var loader = rec.find('.t854__news-loader');
  var urlNews = 'https://news.tildacdn.com/feed/' + keyTelegram + '/' + count + '/' + (parseInt(from) + parseInt(shlop)) + '/' + symbolsAmount;
  var dataJSON = '';
  var news = $.ajax({
    url: urlNews,
    type: 'GET',
    async: false,
    data: {
      format: 'json'
    },
    beforeSend: function() {
      loader.addClass('t854__news-btn-loader_show');
    },
    error: function (data) {
      console.log('Error!');
    },
    success: function(data) {
      dataJSON = JSON.parse(data);
      newsWrap.attr('data-news-shlop', dataJSON.shlop);
      if (dataJSON.status == 'fail') {
        console.log("You entered an " + dataJSON.error);
        btnNews.hide();
        if (language == 'ru') {
          newsWrap.append('<div style="font-family:\'Georgia\',serif;font-size:20px;color:red;">Вы ввели неправильный ключ</div>');
        } else {
          newsWrap.append('<div style="font-family:\'Georgia\',serif;font-size:20px;color:red;">You entered an ' + dataJSON.error + '</div>');
        }
      }
      if (dataJSON.total == 0) {
        console.log("You haven't a publication");
      }
    },
    complete: function() {
      loader.removeClass('t854__news-btn-loader_show');
      newsContainer.css('opacity', 1);
      loader.hide();
    }
  });

  return dataJSON;
}


function t854_showNews(rec, newsContent, keyTelegram, count, from, shlop, dateFormat, symbolsAmount) {
  var news = t854_getNews(rec, keyTelegram, count, from, shlop, symbolsAmount);
  var newsContainer = rec.find('.t854__news');
  var newsMessages = news.messages;
  var totalNews = news.total;
  var arrText = [];

  if (newsMessages !== undefined) {
    newsMessages.forEach(function(item, i) {
      var itemNews = item;
      var dateNews = item.date.split(' ');
      var dayNews = dateNews[0];
      var timeNews = dateNews[1].substr(0, 5);
      var textNews = item.text;
      var shortTextNews = item.short_text;
      var imageIdNews = item.files;
      var timeHTML = '<div class="t854__news-time t-descr t-descr_xxs">' + t854_formatDate(dayNews, dateFormat) + '</div>';
      var blockImageArr = [];
      var textHTML = t854_addText(rec, textNews, shortTextNews, newsContainer);
      var imagesHTML = t854_addImage(item, imageIdNews, blockImageArr);

      if (shortTextNews !== undefined) {
        if (imageIdNews.length !== 1) {
          newsContent.append('<div class="t854__news-message t854__news-message_popup t854__news-message_short">' + timeHTML + imagesHTML + textHTML + '</div>');
        } else {
          newsContent.append('<div class="t854__news-message t854__news-message_popup t854__news-message_short">' + timeHTML + '<div class="t854__news-message-flex">' + imagesHTML + textHTML + '</div>' + '</div>');
        }
      } else {
        if (imageIdNews.length !== 1) {
          newsContent.append('<div class="t854__news-message">' + timeHTML + imagesHTML + textHTML + '</div>');
        } else {
          newsContent.append('<div class="t854__news-message">' + timeHTML + '<div class="t854__news-message-flex">' + imagesHTML + textHTML + '</div>' + '</div>');
        }
      }
    });

    t854_addPopup(rec, arrText);
    t854_closePopup(rec);
  }

  return totalNews;
}


function t854_addText(rec, textNews, shortTextNews, newsContainer) {
  var textHTML;

  if (textNews.length === 0) {
    textHTML = '';
  } else {
    if (shortTextNews !== undefined) {
      textHTML = '<div class="t854__news-text t-descr t-descr_xs">' + shortTextNews + '</div><div class="t854__news-text_short-hide t-descr t-descr_xs">' + textNews + '</div>';
    } else {
      textHTML = '<div class="t854__news-text t-descr t-descr_xs">' + textNews + '</div>';
    }
  }

  return textHTML;
}


function t854_addImage(item, imageIdNews, blockImageArr) {
  var images = '';
  var imgHTML = '';

  if (item.files[0] !== undefined) {
    var imageUrl = 'https://news.tildacdn.com/' + item.files[0];
  }

  imageIdNews.forEach(function(item, i) {
    var imageUrl = 'https://news.tildacdn.com/' + item + '/-/resize/x900/';
    var blockImage = '<div class="t854__news-image-wrap"><img src="' + imageUrl + '" class="t854__news-image"></div>';
    blockImageArr.push(blockImage);
  });

  if (blockImageArr.length !== 0) {
    blockImageArr.forEach(function(item) {
      images += item;

      if (blockImageArr.length > 2) {
        imgHTML = '<div class="t854__news-images t854__news-images_col3">' + images + '</div>';
      } else {
        imgHTML = '<div class="t854__news-images">' + images + '</div>';
      }
    });
  }

  return imgHTML;
}


function t854_addPopup(rec, arrText) {
  var popupBlock = rec.find('.t854__news_publish.t854__news_short .t854__news-message');
  var wrapTextPopup = rec.find('.t854__news-popup-bg');
  var textPopup = rec.find('.t854__news-popup');
  var messageWrap = rec.find('.t854__news_publish .t854__news-popup-message-wrap');

  popupBlock.each(function(i) {
    var $this = $(this);
    var imagePopup = $this.find('.t854__news-image');
    var textShortLength = $this.find('.t854__news-text_short-hide').length;
    var messageHTML = $this.html();

    $this.on('click', function(e) {
      $('body').addClass('t854__body_overflow');
      wrapTextPopup.show();
      if (textShortLength !== 0) {
        textPopup.addClass('t854__news-popup_short');
      }
      messageWrap.html($this.html());
      e.preventDefault();
    });

    $this.find('a').on('click', function(e) {
      e.stopPropagation();
    })
  });
}


function t854_closePopup(rec) {
  var wrapTextPopup = rec.find('.t854__news-popup-bg');
  var textPopup = rec.find('.t854__news-popup');
  var contentTextPopup = rec.find('.t854__news-popup-content');
  var imagePopup = rec.find('.t854__news-image');
  var close = rec.find('.t854__news-popup-close');

  wrapTextPopup.on('click', function(e) {
    t854_closeContent(wrapTextPopup, contentTextPopup, textPopup, imagePopup)
    e.preventDefault();
  });

  textPopup.click(function(e) {
    e.stopPropagation();
  });

  close.on('click', function(e) {
    t854_closeContent(wrapTextPopup, contentTextPopup, textPopup, imagePopup)
    e.preventDefault();
  });

  $('body').on('keyup', function (e) {
    if (e.keyCode == 27) {
      t854_closeContent(wrapTextPopup, contentTextPopup, textPopup, imagePopup);
      e.preventDefault();
    }
  });
}


function t854_closeContent(wrapTextPopup, contentTextPopup, textPopup, imagePopup) {
  $('body').removeClass('t854__body_overflow');
  wrapTextPopup.hide();
  textPopup.removeClass('t854__news-popup_short');
  contentTextPopup.html('');
}
 
function t856_init(recid) {
  var rec = $('#rec' + recid + ' .t856');
  var doResize;

  setTimeout(function() {
    t856_setHeight(rec);
    t856_updateLazyLoad(recid);
  }, 500);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t856_setHeight(rec);
    }, 200);
  });

  $('.t856').bind('displayChanged', function() {
    t856_setHeight(rec);
  });

  if (rec.hasClass('t856__previewmode')) {
    setInterval(function() {
      t856_setHeight(rec);
    }, 5000);
  }
}

function t856_setHeight(rec) {
  var ratio = rec.attr('data-tile-ratio');
  var ratioHeight = rec.find('.t856__col').width() * ratio;

  rec.find('.t856__row').each(function() {
    var largestHeight = 0;
    var currow = $(this);

    $('.t856__table', this).each(function() {
    var curCol = $(this);
    var curColHeight = curCol.find('.t856__textwrapper').outerHeight();
    if ($(this).find('.t856__cell').hasClass('t856__button-bottom')) {curColHeight += curCol.find('.t856__button-container').outerHeight();}
    if (curColHeight > largestHeight) {largestHeight = curColHeight;}
    });

    if($(window).width() >= 960) {
      if (largestHeight > ratioHeight) {$('.t856__table',this).css('height', largestHeight);}
      else {$('.t856__table', this).css('height', ratioHeight);}
      $('.t856__table', this).css('min-height', 'auto');
    } else {
      $('.t856__table',this).css('min-height', ratioHeight);
      $('.t856__table',this).css('height','');
    }

    if (t856_GetIEVersion() > 0) {
      var curRowHeight = $('.t856__table',this).css('height');
      $('.t856__bg',this).css('height', curRowHeight);
      $('.t856__overlay',this).css('height', curRowHeight);
    }
  });
}

function t856_GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  if (Idx > 0) {
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
  } else {
    if (!!navigator.userAgent.match(/Trident\/7\./)){
      return 11;
    } else {
      return 0;
    }
  }
}

function t856_updateLazyLoad(recid) {
    var scrollContainer = $("#rec" + recid + " .t856__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode != "edit" && curMode != "preview") {
        scrollContainer.bind('scroll', t_throttle(function() {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }, 500))
    }
}
 
function t857__init(recid) {
    $('.t857__container_mobile-flex').bind('touchstart', function() {
        $('.t857__col').bind('touchmove', function() {
            if (typeof $(".t-records").attr('data-tilda-mode') == 'undefined') {
                if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                    t_onFuncLoad('t_lazyload_update', function () {
                        t_lazyload_update();
                    });
                }
            }
        });
    }).mouseup(function() {
        $('.t857__col').unbind('touchend');
    });
}
 
function t858_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t858');
  var doResize;

  t858_unifyHeights(rec);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t858_unifyHeights(rec);
    }, 200);
  });

  $(window).on('load', function() {
    t858_unifyHeights(rec);
  });

  $('.t858').on('displayChanged', function() {
    t858_unifyHeights(rec);
  });

  if (container.hasClass('t858__previewmode')) {
    setInterval(function() {
      t858_unifyHeights(rec);
    }, 5000);
  }
}


function t858_unifyHeights(rec) {
  if ($(window).width() >= 960) {
    rec.find('.t858 .t-container .t858__row').each(function() {
      var highestBox = 0;
      var currow = $(this);
      $('.t858__inner-col', this).each(function() {
        var curCol = $(this);
        var curWrap = curCol.find('.t858__wrap');
        var curColHeight = curWrap.outerHeight();
        if (curColHeight > highestBox) {highestBox = curColHeight;}
      });
      $('.t858__inner-col', this).css('height', highestBox);
    });
  } else {
    $('.t858__inner-col').css('height', 'auto');
  }
}
 
function t859_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t859');
  var doResize;

  t859_unifyHeights(rec);

	$(window).on('resize', t_throttle(function() {
	    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
        t859_unifyHeights(rec);
	}));

  $(window).on('load', function() {
    t859_unifyHeights(rec);
  });

  rec.find('.t859').on('displayChanged', function() {
    t859_unifyHeights(rec);
  });

  if (container.hasClass('t859__previewmode')) {
    setInterval(function() {
      t859_unifyHeights(rec);
    }, 5000);
  }
}


function t859_unifyHeights(rec) {
  if ($(window).width() >= 960) {
    rec.find('.t859 .t-container .t859__row').each(function() {
      var highestBox = 0;
      var currow = $(this);
      $('.t859__inner-col', this).each(function() {
        var curCol = $(this);
        var curWrap = curCol.find('.t859__wrap');
        var curColHeight = curWrap.outerHeight();
        if (curColHeight > highestBox) {highestBox = curColHeight;}
      });
      $('.t859__inner-col', this).css('height', highestBox);
    });
  } else {
    $('.t859__inner-col').css('height', 'auto');
  }
}
 
function t860_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t860');
  var doResize;

  t860_unifyHeights(rec);
  t860_translateBlock(rec);
  
	$(window).on('resize', t_throttle(function() {
	    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
        t860_unifyHeights(rec);
        t860_translateBlock(rec);
	}));

  $(window).on('load', function() {
    t860_unifyHeights(rec);
    t860_translateBlock(rec);
  });

  rec.find('.t860').on('displayChanged', function() {
    t860_unifyHeights(rec);
    t860_translateBlock(rec);
  });

  if (container.hasClass('t860__previewmode')) {
    setInterval(function() {
      t860_unifyHeights(rec);
      t860_translateBlock(rec);
    }, 5000);
  }
}


function t860_translateBlock(rec) {
  var blockHover = rec.find('.t860__block_hover');
  var wrapMarginBottom = 30;

  if ($(window).width() > 1024) {
    blockHover.each(function() {
      var $this = $(this);
      var colWrapHeight = $this.parents('.t860__inner-col').height();
      var wrapHeight = $this.find('.t860__show').outerHeight();
      var diff = colWrapHeight - 2 * wrapHeight - wrapMarginBottom / 2;
      $this.css('transform', 'translateY(' + diff + 'px)');
    });
  }
}


function t860_unifyHeights(rec) {
  if ($(window).width() >= 960) {
    rec.find('.t860 .t-container .t860__row').each(function() {
      var highestBox = 0;
      var currow = $(this);
      $('.t860__inner-col', this).each(function() {
        var col = $(this);
        var text = col.find('.t860__wrap');
        var colHeight = text.outerHeight();
        if (colHeight > highestBox) {highestBox = colHeight;}
      });
      $('.t860__inner-col', this).css('height', highestBox);
    });
  } else {
    $('.t860__inner-col').css('height', 'auto');
  }
}
 
function t862_init(recid) {
    var rec = $('#rec' + recid);
    var quizWrapper = rec.find('.t862__quiz-wrapper');
    var form = rec.find('.t862 .t-form');
    var quizQuestion = rec.find('.t862 .t-input-group');
    var prevBtn = rec.find('.t862__btn_prev');
    var nextBtn = rec.find('.t862__btn_next');
    var resultBtn = rec.find('.t862__btn_result');
    var errorBoxMiddle = rec.find('.t-form__errorbox-middle .t-form__errorbox-wrapper');
    var captureFormHTML = '<div class="t862__capture-form"></div>';
    rec.find('.t862 .t-form__errorbox-middle').before(captureFormHTML);
    var quizQuestionNumber = 0;
    form.removeClass('js-form-proccess');
    $(quizQuestion[quizQuestionNumber]).show();
    $(quizQuestion[quizQuestionNumber]).addClass('t-input-group-step_active');
    rec.attr('data-animationappear', 'off');
    rec.css('opacity', '1');

    t862_workWithAnswerCode(rec);

    quizQuestion.each(function (i) {
        $(quizQuestion[i]).attr('data-question-number', i);
    });

    t862_wrapCaptureForm(rec);
    var captureForm = rec.find('.t862__capture-form');
    var resultText = rec.find('.t862__result-title').text();

    t862_showCounter(rec, quizQuestionNumber);
    t862_disabledPrevBtn(rec, quizQuestionNumber);
    t862_checkLength(rec);

    t862_openToHook(rec, form, quizQuestion, captureForm);

    prevBtn.click(function (e) {
        if (quizQuestionNumber > 0) {
            quizQuestionNumber--;
        }

        t862_setProgress(rec, -1);
        t862_lazyLoad();
        t862_awayFromResultScreen(rec);
        t862_showCounter(rec, quizQuestionNumber);
        t862_hideError(rec, quizQuestionNumber);
        t862_disabledPrevBtn(rec, quizQuestionNumber);
        t862_switchQuestion(rec, quizQuestionNumber);
        t862_resizePopup(rec);

        e.preventDefault();
    });

    nextBtn.click(function (e) {
        var showErrors = t862_showError(rec, quizWrapper, quizQuestionNumber);

        if (showErrors) {
            errorBoxMiddle.hide();
        }

        if (!showErrors) {
            quizQuestionNumber++;
            prevBtn.attr('disabled', false);
            t862_setProgress(rec, 1);
            t862_showCounter(rec, quizQuestionNumber);
            t862_switchQuestion(rec, quizQuestionNumber);
            t862_resizePopup(rec);
        }

        t862_lazyLoad();

        e.preventDefault();
    });

    quizQuestion.keypress(function (e) {
        var activeStep = form.find('.t-input-group-step_active');
        if (event.keyCode === 13 && !form.hasClass('js-form-proccess') && !activeStep.hasClass('t-input-group_ta')) {
            var showErrors = t862_showError(rec, quizWrapper, quizQuestionNumber);
            var questionArr = t862_createQuestionArr(rec);

            if (showErrors) {
                errorBoxMiddle.hide();
            }

            prevBtn.attr('disabled', false);
            if (!showErrors) {
                quizQuestionNumber++;
                t862_setProgress(rec, 1);
                t862_showCounter(rec, quizQuestionNumber);

                if (quizQuestionNumber < questionArr.length) {
                    t862_switchQuestion(rec, quizQuestionNumber);
                } else {
                    t862_switchResultScreen(rec);
                    form.addClass('js-form-proccess');
                }

                t862_disabledPrevBtn(rec, quizQuestionNumber);
            }

            t862_lazyLoad();

            e.preventDefault();
        }
    });

    resultBtn.click(function (e) {
        var showErrors = t862_showError(rec, quizWrapper, quizQuestionNumber);

        if (showErrors) {
            errorBoxMiddle.hide();
        }

        if (!showErrors) {
            quizQuestionNumber++;
            t862_setProgress(rec, 1);
            form.addClass('js-form-proccess');
            t862_disabledPrevBtn(rec, quizQuestionNumber);
            if (captureForm.html() === '' && resultText === '') {
                t862_showCounter(rec, quizQuestionNumber);
                t862_switchQuestion(rec, quizQuestionNumber);
            } else {
                t862_switchResultScreen(rec);
            }
        }

        e.preventDefault();
    });
}

function t862_workWithAnswerCode(rec) {
    rec.find('.t-input-group_ri')
        .find('input')
        .each(function () {
            var $this = $(this);
            if ($this.val().indexOf('value::') != -1) {
                t862_setAnswerCode($this);
                var label = $this.parent().find('.t-img-select__text');
                label.text(label.text().split('value::')[0].trim());
            }
        });

    rec.find('.t-input-group_rd')
        .find('input')
        .each(function () {
            var $this = $(this);
            if ($this.val().indexOf('value::') != -1) {
                t862_setAnswerCode($this);
                var label = $this.parent();

                label.html(function () {
                    var html = $(this).html().split('value::')[0].trim();
                    return html;
                });
            }
        });

    rec.find('.t-input-group_sb')
        .find('option')
        .each(function () {
            var $this = $(this);
            if ($this.val().indexOf('value::') != -1) {
                t862_setAnswerCode($this);
                $this.text($this.text().split('value::')[0].trim());
            }
        });
}

function t862_setAnswerCode($this) {
    var parameter = $this.val().split('value::')[1].trim();
    $this.val(parameter);
}

function t862_openToHook(rec, form, quizQuestion, captureForm) {
    var popup = rec.find('.t-popup');
    var hook = popup.attr('data-tooltip-hook');
    var analitics = popup.attr('data-track-popup');

    if (hook !== '') {
        $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
            t862_showPopup(rec, form, quizQuestion, captureForm);
            setTimeout(function () {
                t862_resizePopup(rec);
            }, 50);
            e.preventDefault();
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
            if (analitics > '') {
                var virtTitle = hook;
                if (virtTitle.substring(0, 7) == '#popup:') {
                    virtTitle = virtTitle.substring(7);
                }
                Tilda.sendEventToStatistics(analitics, virtTitle);
            }
        });
    }
}

function t862_showError(rec, quizWrapper, quizQuestionNumber) {
    if (quizWrapper.hasClass('t862__quiz-published')) {
        var errors = t862_setError(rec, quizQuestionNumber);

        return errors;
    }
}

function t862_lazyLoad() {
    if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    }
}

function t862_setHeight(rec, form, quizQuestion, captureForm) {
    var questions = [];
    var questionsHeight = [];

    var descrHeight = rec.find('.t862__quiz-description').outerHeight();
    var titleHeight = rec.find('.t862__result-title').outerHeight();

    quizQuestion.each(function () {
        var $this = $(this);
        if (!$this.hasClass('t862__t-input-group_capture')) {
            questions.push($this);
        }
    });

    questions.forEach(function (item) {
        questionsHeight.push(item.outerHeight());
    });

    var maxHeightQuestion = Math.max.apply(null, questionsHeight);

    var captureFormHeight = captureForm.outerHeight();
    var height = maxHeightQuestion > captureFormHeight ? maxHeightQuestion : captureFormHeight;

    questions.forEach(function (item) {
        item.css('min-height', height);
    });

    captureForm.css('min-height', height);
    rec.find('.t862__quiz-form-wrapper').css('min-height', height);

    var headerHeight = titleHeight > descrHeight ? titleHeight : descrHeight;
    var quizWrapperHeight = rec.find('.t862__quiz-form-wrapper').outerHeight();
    var btnHeight = rec.find('.t862__btn-wrapper').outerHeight();

    rec.find('.t862__wrapper').css('min-height', headerHeight + quizWrapperHeight + btnHeight);
}

function t862_setMobileHeight() {
    t862_calcVH();
    window.addEventListener('resize', function () {
        t862_calcVH();
    });
}

function t862_calcVH() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}

function t862_checkLength(rec) {
    var nextBtn = rec.find('.t862__btn_next');
    var resultBtn = rec.find('.t862__btn_result');
    var questionArr = t862_createQuestionArr(rec);
    var submitBtnWrapper = rec.find('.t862 .t-form__submit');
    var captureForm = rec.find('.t862__capture-form');
    var resultText = rec.find('.t862__result-title').text();

    if (captureForm.html() === '' && resultText === '' && questionArr.length < 2) {
        nextBtn.hide();
        resultBtn.hide();
        submitBtnWrapper.show();
    } else if (questionArr.length < 2) {
        nextBtn.hide();
        resultBtn.show();
    }
}

function t862_showCounter(rec, quizQuestionNumber) {
    var counter = rec.find('.t862__quiz-description-counter');
    var questionArr = t862_createQuestionArr(rec);
    counter.html(quizQuestionNumber + 1 + '/' + questionArr.length);
}

function t862_setError(rec, quizQuestionNumber) {
    var questionArr = t862_createQuestionArr(rec);
    var currentQuestion = $(questionArr[quizQuestionNumber]);
    var arErrors = window.tildaForm.validate(currentQuestion);
    var showErrors;
    currentQuestion.addClass('js-error-control-box');
    var errorsTypeObj = arErrors[0];

    if (errorsTypeObj != undefined) {
        var errorType = errorsTypeObj.type[0];
        var errorTextCustom = rec
            .find('.t862 .t-form')
            .find('.t-form__errorbox-middle')
            .find('.js-rule-error-' + errorType)
            .text();
        var sError = '';
        if (errorTextCustom != '') {
            sError = errorTextCustom;
        } else {
            t_onFuncLoad('t_form_dict', function () {
                sError = t_form_dict(errorType);
            });
        }
        showErrors = errorType == 'emptyfill' ? false : window.tildaForm.showErrors(currentQuestion, arErrors);
        currentQuestion.find('.t-input-error').html(sError);
    }

    return showErrors;
}

function t862_hideError(rec, quizQuestionNumber) {
    var questionArr = t862_createQuestionArr(rec);
    var currentQuestion = $(questionArr[quizQuestionNumber]);
    currentQuestion.removeClass('js-error-control-box');
    currentQuestion.find('.t-input-error').html('');
}

function t862_setProgress(rec, index) {
    var progress = rec.find('.t862__progress');
    var progressbarWidth = rec.find('.t862__progressbar').width();
    var questionCount = t862_createQuestionArr(rec).length;
    var captureForm = rec.find('.t862__capture-form');
    var resultText = rec.find('.t862__result-title').text();

    if (captureForm.html() === '' && resultText === '' && questionCount > 0) {
        questionCount--;
    }

    var progressWidth = progress.attr('data-progress-bar');
    if (progressWidth === undefined) {
        progressWidth = 0;
        progress.attr('data-progress-bar', '0');
    }
    var progressStep = progressbarWidth / questionCount;
    var percentProgress = (parseFloat(progressWidth) + (index * progressStep)) / progressbarWidth * 100;
    
    if (isNaN(percentProgress) || percentProgress === -Infinity) {
        percentProgress = 0;
        progress.attr('data-progress-bar', percentProgress);
    } else if (percentProgress === Infinity) {
        percentProgress = progressbarWidth;
        progress.attr('data-progress-bar', percentProgress);
    } else {
        progress.attr('data-progress-bar', progressbarWidth / 100 * percentProgress);
    }

    if (percentProgress > 100) {
        percentProgress = 100;
    } else if (percentProgress < 0) {
        percentProgress = 0;
    }

    var percentProgressWidth = percentProgress + '%';

    progress.css('width', percentProgressWidth);
}

function t862_wrapCaptureForm(rec) {
    var captureForm = rec.find('.t862__capture-form');
    var quizQuestion = rec.find('.t862 .t-input-group');
    var quizFormWrapper = rec.find('.t862__quiz-form-wrapper');

    quizQuestion.each(function (i) {
        var currentQuizQuestion = $(quizQuestion[i]);
        var emailInputExist = $(currentQuizQuestion).hasClass('t-input-group_em');
        var nameInputExist = $(currentQuizQuestion).hasClass('t-input-group_nm');
        var phoneInputExist = $(currentQuizQuestion).hasClass('t-input-group_ph');
        var checkboxInputExist = $(currentQuizQuestion).hasClass('t-input-group_cb');
        var quizQuestionNumber = currentQuizQuestion.attr('data-question-number');
        var maxCountOfCaptureFields = 4;

        if (quizQuestionNumber >= quizQuestion.length - maxCountOfCaptureFields) {
            var isCaptureGroup = true;

            if (quizFormWrapper.hasClass('t862__quiz-form-wrapper_newcapturecondition')) {
                var inputsGroup = currentQuizQuestion.nextAll('.t-input-group');
                inputsGroup.each(function () {
                    isCaptureGroup =
                        $(this).hasClass('t-input-group_cb') ||
                        $(this).hasClass('t-input-group_em') ||
                        $(this).hasClass('t-input-group_nm') ||
                        $(this).hasClass('t-input-group_ph');
                });
            }

            if (isCaptureGroup) {
                if (emailInputExist || nameInputExist || phoneInputExist || checkboxInputExist) {
                    currentQuizQuestion.addClass('t862__t-input-group_capture');
                    captureForm.append(currentQuizQuestion);
                }
            }
        }
    });
}

function t862_createQuestionArr(rec) {
    var quizQuestion = rec.find('.t862 .t-input-group');
    var questionArr = [];

    quizQuestion.each(function (i) {
        var question = $(quizQuestion[i]);
        if (!question.hasClass('t862__t-input-group_capture')) {
            questionArr.push(quizQuestion[i]);
        }
    });

    return questionArr;
}

function t862_disabledPrevBtn(rec, quizQuestionNumber) {
    var prevBtn = rec.find('.t862__btn_prev');
    quizQuestionNumber == 0 ? prevBtn.attr('disabled', true) : prevBtn.attr('disabled', false);
}

function t862_switchQuestion(rec, quizQuestionNumber) {
    var nextBtn = rec.find('.t862__btn_next');
    var resultBtn = rec.find('.t862__btn_result');
    var questionArr = t862_createQuestionArr(rec);
    var submitBtnWrapper = rec.find('.t862 .t-form__submit');
    var captureForm = rec.find('.t862__capture-form');
    var resultText = rec.find('.t862__result-title').text();

    $(questionArr).hide();
    $(questionArr).removeClass('t-input-group-step_active');
    $(questionArr[quizQuestionNumber]).show();
    $(questionArr[quizQuestionNumber]).addClass('t-input-group-step_active');

    if (captureForm.html() === '' && resultText === '' && quizQuestionNumber === questionArr.length - 2) {
        nextBtn.hide();
        resultBtn.show();
        submitBtnWrapper.hide();
    } else if (captureForm.html() === '' && resultText === '' && quizQuestionNumber === questionArr.length - 1) {
        nextBtn.hide();
        resultBtn.hide();
        submitBtnWrapper.show();
    } else if (quizQuestionNumber === questionArr.length - 1) {
        nextBtn.hide();
        resultBtn.show();
        submitBtnWrapper.hide();
    } else {
        nextBtn.show();
        resultBtn.hide();
        submitBtnWrapper.hide();
    }
}

function t862_switchResultScreen(rec) {
    var resultBtn = rec.find('.t862__btn_result');
    var submitBtnWrapper = rec.find('.t862 .t-form__submit');
    var captureForm = rec.find('.t862__capture-form');
    var resultTitle = rec.find('.t862__result-title');

    if (captureForm.html() !== '' || resultTitle.text() !== '') {
        var quizDescription = rec.find('.t862__quiz-description');
        var questionArr = t862_createQuestionArr(rec);

        $(questionArr).hide();
        $(captureForm).show();

        quizDescription.hide();
        resultTitle.show();
    }

    resultBtn.hide();
    submitBtnWrapper.show();
}

function t862_awayFromResultScreen(rec) {
    var captureForm = rec.find('.t862__capture-form');
    var quizDescription = rec.find('.t862__quiz-description');
    var resultTitle = rec.find('.t862__result-title');
    var submitBtnWrapper = rec.find('.t862 .t-form__submit');

    submitBtnWrapper.hide();
    $(captureForm).hide();
    quizDescription.show();
    resultTitle.hide();
}

function t862_onSuccess(form) {
    var inputsWrapper = form.find('.t-form__inputsbox');
    var inputsHeight = inputsWrapper.height();
    var inputsOffset = inputsWrapper.offset().top;
    var inputsBottom = inputsHeight + inputsOffset;
    var targetOffset = form.find('.t-form__successbox').offset().top;
    var prevBtn = form.parents('.t862').find('.t862__btn_prev');
    var target;

    if ($(window).width() > 960) {
        target = targetOffset - 200;
    } else {
        target = targetOffset - 100;
    }

    if (targetOffset > $(window).scrollTop() || $(document).height() - inputsBottom < $(window).height() - 100) {
        inputsWrapper.addClass('t862__inputsbox_hidden');
        setTimeout(function () {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({
                        opacity: 0,
                    },
                    50
                );
            }
        }, 300);
    } else {
        $('html, body').animate({
                scrollTop: target,
            },
            400
        );
        setTimeout(function () {
            inputsWrapper.addClass('t862__inputsbox_hidden');
        }, 400);
    }

    var successurl = form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function () {
            window.location.href = successurl;
        }, 500);
    }

    prevBtn.hide();
}

function t862_lockScroll() {
    var body = $('body');
    if (!body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop =
            typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        body.addClass('t-body_scroll-locked');
        body.css('top', '-' + bodyScrollTop + 'px');
        body.attr('data-popup-scrolltop', bodyScrollTop);
    }
}

function t862_unlockScroll() {
    var body = $('body');
    if (body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = $('body').attr('data-popup-scrolltop');
        body.removeClass('t-body_scroll-locked');
        body.css('top', '');
        body.removeAttr('data-popup-scrolltop');
        window.scrollTo(0, bodyScrollTop);
    }
}

function t862_showPopup(rec, form, quizQuestion, captureForm) {
    var popup = rec.find('.t-popup');
    var quiz = rec.find('.t862__quiz');
    popup.css('display', 'block');
    rec.find('.t-range').trigger('popupOpened');
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
    setTimeout(function () {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
        if ($(window).width() > 640 && quiz.hasClass('t862__quiz_fixedheight')) {
            t862_setHeight(rec, form, quizQuestion, captureForm);
        }

        if ($(window).width() <= 640) {
            t862_setMobileHeight();
        }

        t862__showJivo(popup, '1', '1');
    }, 50);

    $('body').addClass('t-body_popupshowed t862__body_popupshowed');
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        setTimeout(function () {
            t862_lockScroll();
        }, 500);
    }

    rec.find('.t-popup').click(function (e) {
        var windowWidth = $(window).width();
        var maxScrollBarWidth = 17;
        var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
        if (e.clientX > windowWithoutScrollBar) {
            return;
        }
        if (e.target == this) {
            t862_closePopup(rec);
        }
    });

    rec.find('.t-popup__close').click(function () {
        t862_closePopup(rec);
    });

    rec.find('a[href*="#"]').click(function () {
        var url = $(this).attr('href');
        if (!url || url.substring(0, 7) != '#price:') {
            t862_closePopup(rec);
            if (!url || url.substring(0, 7) == '#popup:') {
                setTimeout(function () {
                    $('body').addClass('t-body_popupshowed');
                }, 300);
            }
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t862_closePopup();
        }
    });
}

function t862_closePopup(rec) {
    $('body').removeClass('t-body_popupshowed t862__body_popupshowed');
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        t862_unlockScroll();
    }
    rec.find('.t-popup').removeClass('t-popup_show');
    t862__showJivo($('.t-popup'), '2147483647', '2147483648');
    setTimeout(function () {
        $('.t-popup').not('.t-popup_show').css('display', 'none');
    }, 300);
}

function t862_resizePopup(rec) {
    var div = rec.find('.t-popup__container').height();
    var win = $(window).height() - 120;
    var popup = rec.find('.t-popup__container');
    if (div > win) {
        popup.addClass('t-popup__container-static');
    } else {
        popup.removeClass('t-popup__container-static');
    }
}

function t862__showJivo(popup, indexMobile, indexDesktop) {
    if ($('._show_1e.wrap_mW.__jivoMobileButton').length != 0) {
        $('._show_1e.wrap_mW.__jivoMobileButton').css('z-index', indexMobile);
    }

    if ($('.label_39#jvlabelWrap').length != 0) {
        $('.label_39#jvlabelWrap').css('z-index', indexDesktop);
    }
}

/* deprecated */
function t862_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;

    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    hitType: 'pageview',
                    page: virtPage,
                    title: virtTitle,
                });
            }
        }

        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href,
            });
        }
    }
} 
function t865_init(recid) {
	var rec = $('#rec' + recid);

	t865__initFB(rec);
	t865_setFBWidth(rec);
	
	t865__initVK(rec, recid);

	$(window).bind('resize', t_throttle(function() {
		if (typeof window.noAdaptive !== 'undefined' && window.noAdaptive === true && window.isMobile) { return; }
		t865_setFBWidth(rec);
	}));

	rec.find('.t865').bind('displayChanged',function(){
		t865_setFBWidth(rec);
	});
}


function t865_setFBWidth(rec) {
	setTimeout(function() {
		var fb = rec.find('.fb-comments');
		var colFB = fb.parents('.t865__fb');
		var width = colFB.width();
		fb.find('.fb_ltr').css('width', width);
		fb.find('span').css('width', width);
	}, 500);
}


function t865__initFB(rec) {
	var FBWidgetId = rec.find('.t865__fb').attr('data-comments-fb');
	var pageurl;
	rec.find('.t865__fb').removeAttr('data-comments-fb');
	try {
	    pageurl = "" + window.location;
	    pageurl = pageurl.split('?')[0];
	    pageurl = pageurl.split('#')[0];
	} catch (e) {
	    pageurl = window.location;
	}
	rec.find('.t865__fb .fb-comments').attr('data-href', pageurl);

	if (rec.find('.t865').hasClass('t865__publish') && FBWidgetId !== undefined) {
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = 'https://connect.facebook.net/' + t865_setLanguage(rec) + '/sdk.js#xfbml=1&version=v3.1&appId=' + FBWidgetId + '&autoLogAppEvents=1';
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}
}


function t865__initVK(rec, recid) {
	var VKWidgetId = rec.find('.t865__vk').attr('data-comments-vk');
	rec.find('.t865__vk').removeAttr('data-comments-vk');

	if (rec.find('.t865').hasClass('t865__publish') && VKWidgetId !== undefined) {
			VK.init({apiId: VKWidgetId, onlyWidgets: true});
			if (rec.find('.t865__vk').hasClass('t865__vk-comments')) {
			    VK.Widgets.Comments("vk_comments" + recid, {limit: 10, attach: "*"});
			} else {
			    VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});   
			}
	}
}


function t865_setLanguage(rec) {
    var lang = rec.find('.t865__fb').attr('data-fb-comments-local');
    var langs = {
        en: 'en_US',
        ru: 'ru_RU',
        az: 'az_AZ',
        ca: 'ca_ES',
        es: 'es_ES',
        cs: 'cs_CZ',
        da: 'da_DK',
        de: 'de_DE',
        et: 'et_EE',
        fr: 'fr_FR',
        he: 'he_IL',
        it: 'it_IT',
        ja: 'ja_JP',
        lv: 'lv_LV',
        nb: 'nb_NO',
        nl: 'nl_NL',
        pl: 'pl_PL',
        pt: 'pt_PT',
        sv: 'sv_SE',
        tr: 'tr_TR',
        zh: 'zh_CN',
        zhTW: 'zh_TW',
    }

    return langs[lang || 'ru'];
} 
function t868_setHeight(recid) {
  var rec = $('#rec' + recid);
  var div = rec.find('.t868__video-carier');
  var height = div.width() * 0.5625;
  div.height(height);
  div.parent().height(height);
}


function t868_initPopup(recid) {
  var rec = $('#rec' + recid);
  $('#rec' + recid).attr('data-animationappear', 'off');
  $('#rec' + recid).css('opacity', '1');
  var el = $('#rec' + recid).find('.t-popup');
  var hook = el.attr('data-tooltip-hook');
  var analitics = el.attr('data-track-popup');
  var customCodeHTML = t868__readCustomCode(rec);

  if (hook !== '') {
    $('.r').on('click', 'a[href="' + hook + '"]', function(e) {
      t868_showPopup(recid, customCodeHTML);
      t868_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
          virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}


function t868__readCustomCode(rec) {
  var customCode = rec.find('.t868 .t868__code-wrap').html();
  rec.find('.t868 .t868__code-wrap').remove();
  return customCode;
}


function t868_showPopup(recid, customCodeHTML) {
  var rec = $('#rec' + recid);
  var popup = rec.find('.t-popup');
  var popupContainer = rec.find('.t-popup__container');
  popupContainer.append(customCodeHTML);

  popup.css('display', 'block');
  t868_setHeight(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');
  
  rec.find('.t-popup').click(function(e) {
    var container = e.target.closest('.t-popup__container');
    if (!container) {
      t868_closePopup(recid);
    }
  });

  rec.find('.t-popup__close').click(function(e) {
    t868_closePopup(recid);
  });

  rec.find('a[href*="#"]').click(function(e) {
    var url = $(this).attr('href');
    if (url.indexOf('#order') != -1) {
        var popupContainer = rec.find('.t-popup__container');
        setTimeout(function() {
            popupContainer.empty();
        }, 600);
    }
    if (!url || url.substring(0,7) != '#price:') {
      t868_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t868_closePopup(recid); }
  });
}


function t868_closePopup(recid) {
  var rec = $('#rec' + recid);
  var popup = rec.find('.t-popup');
  var popupContainer = rec.find('.t-popup__container');

  $('body').removeClass('t-body_popupshowed');
  $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');

  popupContainer.empty();

  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}


function t868_resizePopup(recid) {
  var rec = $('#rec' + recid);
  var div = rec.find('.t-popup__container').height();
  var win = $(window).height();
  var popup = rec.find('.t-popup__container');
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}


/* deprecated */
function t868_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
    popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;

  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage, 'title':virtTitle});
    }
  }

  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}
 
function t875_init(recid) {
    if (document.layers) {document.captureEvents(Event.MOUSEDOWN);}
    document.onmousedown = t875_click;
    document.oncontextmenu = function(event) {
            var event = event || window.event;
            var sender = event.target || event.srcElement;
            if (sender.tagName.match(/INPUT|TEXTAREA/i)) {
                return;
            } else {
                return false;
            }
    };
    t875_preventSelection(document);
    t875_preventUserSelect();
}


function t875_preventUserSelect() {
    $('body').css({'-ms-user-select': 'none', '-moz-user-select': 'none', '-webkit-user-select': 'none', 'user-select': 'none', '-webkit-touch-callout': 'none'});
}

function t875_click(event) {
    t875_returnPrevent(event);

    if (document.all) {
        if (event.button == 2) {
            return false;
        }
    }
    if (document.layers) {
        if (event.which == 3) {
            return false;
        }
    }
}


function t875_preventSelection(element) {
    var preventSelection = false;

    t875_addHandler(element, 'mousemove', function() {
        if (preventSelection) {
            t875_removeSelection();
        }
    });

    t875_addHandler(element, 'mousedown', function(event) {
        var event = event || window.event;
        var sender = event.target || event.srcElement;
        preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
    });

    t875_addHandler(element, 'mouseup', function() {
        if (preventSelection) {
            t875_removeSelection();
        }
        preventSelection = false;
    });

    t875_addHandler(element, 'keydown', t875_killCtrlA);
    t875_addHandler(element, 'keyup', t875_killCtrlA);
    t875_addHandler(element, 'keydown', t875_killCtrlU);
    t875_addHandler(element, 'keyup', t875_killCtrlU);
    t875_addHandler(element, 'keydown', t875_killAltCmdI);
    t875_addHandler(element, 'keyup', t875_killAltCmdI);
    t875_addHandler(element, 'keydown', t875_killCtrlShiftI);
    t875_addHandler(element, 'keyup', t875_killCtrlShiftI);
}


function t875_addHandler(element, event, handler) {
    if (element.attachEvent) {
        element.attachEvent('on' + event, handler);
    } else {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
    }
}


function t875_removeSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection && document.selection.clear) {
        document.selection.clear();
    }
}


function t875_killCtrlU(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if ((event.ctrlKey && key == 'U'.charCodeAt(0)) || (event.altKey && event.metaKey && (key == 'U'.charCodeAt(0) || key == 'u'.charCodeAt(0)))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killAltCmdI(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if (event.altKey && event.metaKey && (key == 'I'.charCodeAt(0) || key == 'i'.charCodeAt(0))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killCtrlShiftI(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if (event.shiftKey && event.ctrlKey && (key == 'I'.charCodeAt(0) || key == 'i'.charCodeAt(0))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killCtrlA(event) {
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    if (sender.tagName.match(/INPUT|TEXTAREA|BUTTON/i)) {return;}

    var key = event.keyCode || event.which;
    if ((event.ctrlKey && key == 'A'.charCodeAt(0)) || (event.metaKey && key == 'A'.charCodeAt(0))) {
        t875_removeSelection();
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_returnPrevent(event) {
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    if (sender.tagName.match(/INPUT|TEXTAREA/i)) {return;}
}
 
function t881_init(recid) {
    var rec = $('#rec' + recid);

    t881_addWebinar(rec);
    t881_setHeight(rec);

    $(window).bind('scroll', t_throttle(function() {
        t881_addWebinar(rec);
    }, 200));

    $(window).bind('resize', t_throttle(function() {
        t881_setHeight(rec);
    }, 200));
    
    rec.find('.t881').bind('displayChanged', function() {
        t881_setHeight(rec);
    });
}


function t881_addWebinar(rec) {
    var wrap = rec.find('.t881__webinar-wrap');
    var player = rec.find('.t881__webinar-player');
    var windowHeight = $(window).height();
    var scrollDiffHeigth = 100;
    var blockTop = wrap.offset().top;
    var webinarId = wrap.attr('data-webinar-id');

    if ($(window).scrollTop() > blockTop - windowHeight - scrollDiffHeigth) {
        if (wrap.attr('data-webinar-load') == 'false') {
            wrap.attr('data-webinar-load', 'true');

            player.prepend('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + webinarId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }
    }
}


function t881_setHeight(rec) {
    var webinar = rec.find('.t881__webinar-player');
    var comments = rec.find('.t881__webinar-comments');
    var playerIframe = rec.find('.t881__webinar-player iframe');
    var commentsIframe = rec.find('.t881__webinar-comments iframe');
    var webinarHeight = webinar.width() * 9 / 16;

    webinar.css('height', webinarHeight);
    playerIframe.css('height', webinarHeight);

    if ($(window).width() > 640) {
        comments.css('height', webinarHeight);
        commentsIframe.css('height', webinarHeight);
    }
}
 
function t886_init(recid) {
    var el = $('#rec' + recid);
    var block = el.find('.t886');
    var closeBtn = el.find('.t886__btn');
    var storageItem = block.attr("data-storage-item");
    var lastOpen = localStorage.getItem(storageItem);

    if (lastOpen == null) {
        block.removeClass('t886_closed');
    }

    closeBtn.click(function (e) {
        block.addClass('t886_closed');
        localStorage.setItem(storageItem, Math.floor(Date.now() / 1000));
        e.preventDefault();
    });
}
 
function t887_init(recid) {
    var el = $('#rec' + recid);
    var block = el.find('.t887');
    var closeIcon = el.find('.t887__icon-close');
    var storageItem = block.attr("data-storage-item");
    var lastOpen = localStorage.getItem(storageItem);

    if (lastOpen == null) {
        block.removeClass('t887_closed');
    }

    closeIcon.click(function (e) {
        block.addClass('t887_closed');
        localStorage.setItem(storageItem, Math.floor(Date.now() / 1000));
        e.preventDefault();
    });
}
 
function t889_init(recid) {
    var el = $('#rec' + recid);

    t889_setHeight(recid);

    $(window).bind('resize', t_throttle(function () {
        if (typeof window.noAdaptive !== 'undefined' && window.noAdaptive === true && window.isMobile) { return; }
        t889_setHeight(recid);
    }));

    el.find('.t889').bind('displayChanged', function () {
        t889_setHeight(recid);
    });

    if (window.isMobile) {
        $(window).on('orientationchange', function () {
            t889_setHeight(recid);
        });
    }
}

function t889_setHeight(recid) {
    var el = $('#rec' + recid);
    var wrapper = el.find('.t889__wrapper');
    var imgWrapper = el.find('.t889__blockimg');
    var textWrapperHeight = el.find('.t889__content').outerHeight(true);

    var img = new Image();
    var imgSrc = imgWrapper.find('img').data('original') || imgWrapper.find('img').attr('src');
    $(img).attr('src', imgSrc);
    $(img).load(function () {
        if ($(window).width() > 960) {
            var imgHeight = imgWrapper.height();
            if (textWrapperHeight >= imgHeight) {
                wrapper.css('height', textWrapperHeight);
            } else {
                wrapper.css('height', imgHeight);
            }
        } else {
            wrapper.css('height', '');
        }
    });
} 
function t890_init(recid, offset) {
    var el = $("#rec" + recid);
    var arrow = el.find(".t890__arrow");
    var winOffset = offset ? offset : $(window).height();
    
    el.attr("data-animationappear", "off").css("opacity", "1");

    $(window).bind("scroll", t_throttle(function () {
        if ($(window).scrollTop() > winOffset) {
            el.find(".t890").show();
        } else {
            el.find(".t890").fadeOut(200);
        }
    }, 200));

    $(arrow).on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    });
}
 
function t898_init(recid) {
    var rec = $('#rec' + recid);
    rec.attr('data-animationappear', 'off');
    rec.css('opacity', '1');
    
    var whatsAppElement = rec.find('.t898__icon-whatsapp_wrapper');
    var whatsAppHref = whatsAppElement.attr('href');
    if (typeof whatsAppHref !== 'undefined') {
        t898_removeExtraSymbolsFromWhatsApp(rec, whatsAppElement, whatsAppHref);
    }
    
    if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function () {
            t_lazyload_update();
        });
    }
}


function t898_removeExtraSymbolsFromWhatsApp(rec, whatsAppElement, whatsAppHref) {
    if (whatsAppHref.indexOf('?text=') !== -1) {
        var whatsAppHrefArr = whatsAppHref.split('?text=');
        whatsAppHrefArr[0] = whatsAppHrefArr[0].replace(/[\(\)+-]/g, '');
        whatsAppHref = whatsAppHrefArr[0] + '?text=' + whatsAppHrefArr[1];
    } else {
        whatsAppHref = whatsAppHref.replace(/[\(\)+-]/, '');
    }
    
    whatsAppElement.attr('href', whatsAppHref);
}
 
function t899_init(recid) {
    var el = $('#rec' + recid);
    t899_setMinHeight(recid);

    $(window).bind('resize', t_throttle(function () {
        if (typeof window.noAdaptive !== 'undefined' && window.noAdaptive === true && window.isMobile) { return; }
        t899_setMinHeight(recid);
    }));

    el.find('.t899').bind('displayChanged', function () {
        t899_setMinHeight(recid);
    });

    if (window.isMobile) {
        $(window).on('orientationchange', function () {
            t899_setMinHeight(recid);
        });
    }
}

function t899_setMinHeight(recid) {
    var el = $('#rec' + recid);
    var wrappers = el.find('.t899__wrapper');
    wrappers.each(function(i, wrapper) {
        var wrapperHeight = $(wrapper).outerHeight();
        var symbol = $(wrapper).find('.t899__symbol');
        var symbolHeight = symbol.outerHeight();
        if (symbolHeight > wrapperHeight) {
            $(wrapper).css('min-height', symbolHeight + 'px');
        }
    });
}
 
function t902_init(recid) {
    var el = $('#rec' + recid);

    t902_unifyHeights(recid);

    $(window).bind('resize', t_throttle(function () {
        t902_unifyHeights(recid);
    }));

    el.find('.t902').bind('displayChanged', function () {
        t902_unifyHeights(recid);
    });
}

function t902_unifyHeights(recid) {
    var el = $('#rec' + recid);
    var wrappers = el.find('.t902__wrap');

    if ($(window).width() > 960) {
        el.find('.t902__row').each(function (i, row) {
            var highestBox = 0;
            $(row).find('.t902__inner-col').each(function (i, col) {
                var wrapper = $(col).find('.t902__wrap');

                var colHeight = wrapper.outerHeight();
                if (colHeight > highestBox) {
                    highestBox = colHeight;
                }
            });
            if (highestBox > 0) {
                $('.t902__inner-col', this).css('height', highestBox);
                $('.t902__bgimg', this).css('height', highestBox);
            }
        });
    } else {
        $('.t902__inner-col').css('height', 'auto');
        $('.t902__bgimg').css('height', 'auto');
    }
    
    wrappers.each(function(i, wrapper) {
        var wrapperHeight = $(wrapper).outerHeight();
        var content = $(wrapper).find('.t902__content');
        var contentHeight = content.outerHeight();
        if (wrapperHeight < contentHeight) {
            $(wrapper).css('min-height', contentHeight + 'px')
        }
    });
}
 
function t905_init(recid) {
    var el = $('#rec' + recid);

    t905_unifyHeights(recid);

    $(window).on('resize', t_throttle(function () {
        t905_unifyHeights(recid)
    }));

    $(window).on('load', function () {
        t905_unifyHeights(recid);
    });

    el.find('.t905').on('displayChanged', function () {
        t905_unifyHeights(recid);
    });
}

function t905_unifyHeights(recid) {
    var el = $('#rec' + recid);
    var cards = el.find('.t905__card');

    cards.each(function(i, card) {
        var img = $(card).find('.t905__image');
        var imgHeight = $(img).outerHeight();
        var content = $(card).find('.t905__content');
        var contentHeight = $(content).outerHeight();

        if (contentHeight > imgHeight) {
            img.css('height', contentHeight + 'px');
            img.css('padding-bottom', 'initial');
        }
    });
}
 
window.t906showvideo = function (recid) {
    $(document).ready(function () {
        var el = $("#coverCarry" + recid);
        var videourl = '';

        var youtubeid = $("#rec" + recid + " .t906__video-container").attr("data-content-popup-video-url-youtube");
        if (youtubeid > "") {
            videourl = "https://www.youtube.com/embed/" + youtubeid;
        }

        $("body").addClass("t906__overflow");
        $("#rec" + recid + " .t906__cover").addClass("t906__hidden");
        $("#rec" + recid + " .t906__video-container").removeClass("t906__hidden");
        $("#rec" + recid + " .t906__video-carier").html("<iframe id=\"youtubeiframe" + recid + "\" class=\"t906__iframe\" width=\"100%\" height=\"540\" src=\"" + videourl + "?rel=0&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t906__close-link\" href=\"javascript:t906hidevideo('" + recid + "');\"><div class=\"t906__close\"></div></a>");
    });
}

window.t906hidevideo = function (recid) {
    $(document).ready(function () {
        $("body").removeClass("t906__overflow");
        $("#rec" + recid + " .t906__cover").removeClass("t906__hidden");
        $("#rec" + recid + " .t906__video-container").addClass("t906__hidden");
        $("#rec" + recid + " .t906__video-carier").html("<div class=\"t906__video-bg2\"></div>");
    });
}
 
function t908_init(recid) {
  var rec = $('#rec'+recid);
  var item = rec.find('.t908__item');
  var imageContainer = rec.find('.t908__box-img');
 
  rec.find('.t908__item').first().addClass('t908__item_active');
  rec.find('.t908__box-img').first().addClass('t908__box-img_active');

  t908_changeActiveTab(item, imageContainer);
}

function t908_changeActiveTab(item, imageContainer) {
  var itemNumber;

  item.on('click', function(e) {
    itemNumber = $(this).attr('data-item-number');
    imageContainer.removeClass('t908__box-img_active');
    item.removeClass('t908__item_active');
    $(this).addClass('t908__item_active');

    imageContainer.each(function(i) {
      if ($(imageContainer[i]).attr('data-item-content-number') === itemNumber) {
        $(imageContainer[i]).addClass('t908__box-img_active');
      }
    });


    if (typeof $('.t-records').attr('data-tilda-mode') === 'undefined') {
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
    }
  })
} 
function t911_init(recid) {
  t911_checkPhoneNumber(recid);
}

function t911_checkPhoneNumber(recid) {
  var el = $('#rec' + recid);
  var whatsapp = el.find('.t911__whatsapp').attr('data-messenger-whatsapp');
  var telegram = el.find('.t911__telegram').attr('data-messenger-telegram');
  var telegramLink = el
    .find('.t911__telegram_link')
    .attr('data-messenger-telegram-link');
  var vk = el.find('.t911__vk').attr('data-messenger-vk');
  var skype = el.find('.t911__skype').attr('data-messenger-skype');
  var skypeChat = el
    .find('.t911__skype_chat')
    .attr('data-messenger-skype-chat');
  var mail = el.find('.t911__mail').attr('data-messenger-mail');
  var viber = el.find('.t911__viber').attr('data-messenger-viber');
  var fb = el.find('.t911__fb').attr('data-messenger-fb');
  var phone = el.find('.t911__phone').attr('data-messenger-phone');

  if (typeof telegramLink != 'undefined') {
    if (telegramLink.search(/http/i) !== -1) {
      el.find('.t911__telegram_link').attr('href', telegramLink);
    } else {
      if (telegramLink.search(/tg/i) !== -1) {
        el.find('.t911__telegram_link').attr('href', telegramLink);
      } else {
        el.find('.t911__telegram_link').attr('href', 'https://' + telegramLink);
      }
    }
  }

  if (typeof whatsapp != 'undefined') {
    el.find('.t911__whatsapp').attr(
      'href',
      'https://api.whatsapp.com/send?phone=' +
        whatsapp.replace(/[+?^${}()|[\]\\\s]/g, '')
    );
  }

  el.find('.t911__telegram').attr('href', 'https://t.me/' + telegram);
  el.find('.t911__vk').attr('href', 'https://vk.me/' + vk);

  if (typeof skype != 'undefined') {
    el.find('.t911__skype').attr(
      'href',
      'skype:' + skype.replace(/[+?^${}()|[\]\\\s]/g, '') + '?call'
    );
  }

  if (typeof skypeChat != 'undefined') {
    el.find('.t911__skype_chat').attr(
      'href',
      'skype:' + skypeChat.replace(/[+?^${}()|[\]\\\s]/g, '') + '?chat'
    );
  }

  if (typeof viber != 'undefined') {
    el.find('.t911__viber').attr(
      'href',
      'viber://chat?number=%2B' + viber.replace(/[+?^${}()|[\]\\\s]/g, '')
    );
  }

  el.find('.t911__mail').attr('href', 'mailto:' + mail);

  el.find('.t911__fb').attr('href', 'https://m.me/' + fb);

  if (typeof phone != 'undefined') {
    el.find('.t911__phone').attr(
      'href',
      'tel:+' + phone.replace(/[+?^${}()|[\]\\\s]/g, '')
    );
  }
}
 
function t912_init(recid) {
    var el = $("#rec" + recid);

    t912_setHeight(recid);

    $(window).bind("resize", t_throttle(function () {
        if (typeof window.noAdaptive !== "undefined" && window.noAdaptive === true && window.isMobile) { return; }
        t912_setHeight(recid);
    }));

    el.find(".t912").bind("displayChanged", function () {
        t912_setHeight(recid);
    });

    if (window.isMobile) {
        $(window).on("orientationchange", function () {
            t912_setHeight(recid);
        });
    }
}

function t912_setHeight(recid) {
    var el = $("#rec" + recid);
    var imgWrapper = el.find(".t912__imgwrapper");
    $(imgWrapper).each(function(i, el) {
    	var img = new Image();
        var imgSrc = $(el).find("img").data("original") || $(el).find("img").attr("src");
        $(img).attr("src", imgSrc);
        $(img).load(function() {
            var width = $(el).width();
            var height = img.height;
            if(img.width > width) {
                height = img.height*(width/img.width);
            } else {
                $(el).find("img").width(width);
                height = img.height*(width/img.width);
            }
            $(el).css("padding-bottom", height);
        });
    });
}
 
function t922_init(recid){
  setTimeout(function(){
    $('#rec'+recid+' .t-cover__carrier').addClass('js-product-img');
    t_onFuncLoad('t_prod__init', function () {
        t_prod__init(recid);
    });
  }, 500);

  $('body').trigger('twishlist_addbtn');
} 
function t923_init(recid) {
    var el = $('#rec' + recid);

    t923_unifyHeights(recid);

    $(window).on('resize', t_throttle(function () {
        t923_unifyHeights(recid);
    }));

    el.find(".t923").on("displayChanged", function () {
        t923_unifyHeights(recid);
    });

    $(window).on('load', function () {
        t923_unifyHeights(recid);
    });
}

function t923_unifyHeights(recid) {
    var el = $('#rec' + recid);
    var cols = el.find(".t923__content");

    var maxHeight = 0;

    cols.each(function () {
        var text = $(this).find(".t923__textwrapper");
        var btns = $(this).find(".t923__btn-wrapper, .t923__btntext-wrapper");
        var itemHeight = text.outerHeight() + btns.outerHeight();

        if (itemHeight > maxHeight) {
            maxHeight = itemHeight;
        }
    });

    cols.each(function (i, el) {
        var height = $(el).css("height");
        if (height !== maxHeight + 'px') {
            $(el).css("height", maxHeight);
        }
    });

    t_onFuncLoad('t_slds_updateSlider', function () {
        t_slds_updateSlider(recid);
    });
}
 
function t937_init(recid, styles) {
    var rec = $('#rec' + recid);
    var playlist = rec.find('.t937__playlist-wrap');
    var videoColumn = rec.find('.t937__col_video');
    var videoData = t937_parseData(recid);
    var params = t937_getUrlParametrs(recid);
    var activeVideoId = params.activeVideoId;

    t937_setSizes(recid, styles);
    t937_renderVideoCount(videoData, recid, styles);
    t937_renderPlaylist(videoData, activeVideoId, recid, styles);
    t937_renderVideoFrame(videoData, activeVideoId, recid, styles);
    videoColumn.css('height', '');
    playlist.css('visibility', 'visible');
    t937_addEvents(recid, styles);
}

function t937_getUrlParametrs(recid) {
    var activeRecId, activeVideoId;
    var hash = window.location.hash;

    if (hash && hash.indexOf('#tlection=') === -1) {
        activeRecId = recid;
        activeVideoId = 1;
    } else {
        var params = hash.replace('#tlection=', '').split('_');
        activeRecId = params[0];
        activeVideoId = +recid === +activeRecId ? params[1] : 1;
    }

    return {
        activeRecId: activeRecId,
        activeVideoId: activeVideoId
    };
}

function t937_parseData(recid) {
    var rec = $('#rec' + recid);
    var data = rec.find('.t937__data').html();
    var videos = [];

    if (data !== undefined) {
        data = data.replace(/&amp;/gi, '&');
        var segments = data.split('\n');
    
        for (var i = 0; i < segments.length; i++) {
            /* url; title; time; description */
            var segment = segments[i];
            var parts = segment.split(';');
            var video = t937_getVideoData(parts);
            if (video.url || video.section) {
                videos.push(video);
            }
        }
    }

    return videos;
}

function t937_getVideoData(data) {
    /* If string contains '[...]', return as not a video data but section */
    var first = data[0].trim();
    if (first.indexOf('[') === 0 && first.indexOf(']') === first.length - 1) {
        return {
            section: first.slice(1, -1)
        };
    }

    var url = data[0] && data[0].length ? data[0].trim() : null;
    var title = data[1] ? data[1].trim() : null;
    var time = data[2] ? data[2].trim() : null;
    var description = data[3] ? data[3].trim() : null;
    var type = null;
    if (/youtube.com|youtu.be/gi.test(url)) {
        type = 'youtube';
    }
    if (/vimeo.com/gi.test(url)) {
        type = 'vimeo';
    }

    return {
        url: url,
        title: title,
        time: time,
        description: description,
        type: type
    };
}

function t937_renderPlaylist(videoData, activeVideoId, recid, styles) {
    var rec = $('#rec' + recid);
    var container = rec.find('.t937__playlist');
    container.data('data-video-data', videoData);
    container.data('playlist-styles', styles);
    var videoCount = 1;
    t937_setSizes(recid, styles);

    container.empty();

    /* Define styles */
    var mainColor = styles.mainColor.length ? 'color: ' + styles.mainColor + ';' : '';
    var secondaryColor = styles.secondaryColor.length ? 'color: ' + styles.secondaryColor + ';' : '';
    var border = styles.borderColor.length ? 'border-bottom: 1px solid ' + styles.borderColor + ';' : '';

    t937_renderFade(recid, styles.bgColor);

    for (var i = 0; i < videoData.length; i++) {
        var data = videoData[i];
        var id = i + 1;
        var isActive = Number(id) === Number(activeVideoId);
        var activeClass = isActive ? ' t937__playlist-link_active' : '';
        var item;

        if (Object.prototype.hasOwnProperty.call(data, 'section')) {
            item = $('' +
                '<div class="t937__playlist-item t937__playlist-item_section" style="' + border + '">' +
                '</div>'
            );

            item.append($(
                '' +
                '<div class="t937__playlist-section t-name t-name_xs" style="' + mainColor + '">' +
                '</div>'
            ).text(data.section));
        } else {
            var title = data.title && data.title.length ? data.title : t937_translate('videoTitle');
            var time = data.time ? data.time : '';

            var linkBgColor = isActive && styles.linkBgColor.length ? 'background-color: ' + styles.linkBgColor + ';' : '';

            item = $('' +
                '<div class="t937__playlist-item" data-video-id="' + id + '" ' +
                'style="' + border + '" ' +
                'onclick="t937_onVideoClick(' + id + ',' + recid + ');">' +
                '<div class="t937__playlist-link' + activeClass + ' t-text t-text_xs" style="' + linkBgColor + '">' +
                '<div class="t937__playlist-number" style="' + secondaryColor + '">' +
                videoCount +
                '</div>' +
                '<div class="t937__playlist-title" style="' + mainColor + '">' +
                title +
                '</div>' +
                '<div class="t937__playlist-time" style="' + secondaryColor + '">' +
                time +
                '</div>' +
                '</div>' +
                '</div>'
            );

            item.hover(
                function () {
                    var hoverBgColor = styles.linkBgColor.length ? styles.linkBgColor : '#F0F0F0';
                    $(this).css('background-color', hoverBgColor);
                },
                function () {
                    $(this).css('background-color', '');
                }
            );

            videoCount++;
        }
        container.append(item);
    }
}

function t937_renderVideoFrame(data, activeVideoId, recid) {
    var frame, video;
    var rec = $('#rec' + recid);
    var container = rec.find('.t937__video');
    var height = container.width() * 0.5625;
    container.removeClass('t937__video_empty');

    /* check that data[activeVideoId] is video, not a section */
    for (var i = activeVideoId - 1; i < data.length; i++) {
        if (data[i].url) {
            video = data[i];
            t937_renderDescription(video, recid);
            break;
        }
    }

    if (!data.length) {
        container.addClass('t937__video_empty');
        frame = '<div class="t937__system-message">' +
            /* 'style="height:' + height + 'px">' + */
            t937_translate('noData') +
            '</div>';
    } else if (!video || !video.type) {
        container.addClass('t937__video_empty');
        frame = '<div class="t937__system-message">' +
            /* 'style="height:' + height + 'px">' + */
            t937_translate('wrongFormat') +
            '</div>';
    } else if (video.type === 'youtube') {
        var regex = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/;
        var id = video.url.match(regex);
        if (id !== null) {
            id = id[1];
        }

        frame = '<iframe class="t937__video-frame t937__video-frame_youtube" ' +
            'width="100%" ' +
            'height="' + height + '" ' +
            'src="https://www.youtube.com/embed/' + id + '?rel=0&fmt=18&html5=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    } else if (video.type === 'vimeo') {
        var idMatch = /vimeo.*\/(\d+)/i.exec(video.url);
        var id = idMatch 
            ? idMatch[1] 
            : null;
        var timecodeMatch = /#t=(\d*h)?(\d*m)?\d*s$/i.exec(video.url);
        var timecode = timecodeMatch 
            ? '/' + timecodeMatch[0]
            : '';
        
        if (!id) {
            container.addClass('t937__video_empty');
            frame = '<div class="t937__system-message">' +
                /* 'style="height:' + height + 'px">' + */
                t937_translate('wrongFormat') +
                '</div>';
        } else {
            frame = '<iframe class="t937__video-frame t937__video-frame_vimeo" title="vimeo-player" ' +
                'src="https://player.vimeo.com/video/' + id + timecode + '" ' +
                'width="100%" ' +
                'height="' + height + '" ' +
                'frameborder="0" allowfullscreen></iframe>';
        }
    }

    container.html(frame);
}

function t937_renderDescription(videoData, recid) {
    var rec = $('#rec' + recid);
    var wrapper = rec.find('.t937__col_description');
    var titleContainer = wrapper.find('.t937__video-title');
    var descriptionContainer = wrapper.find('.t937__video-description');

    wrapper.addClass('t937__col_hidden');
    titleContainer.empty();
    descriptionContainer.empty();

    if (!videoData.description) {
        return;
    }

    wrapper.removeClass('t937__col_hidden');
    var title = videoData.title && videoData.title.length ? videoData.title : t937_translate('videoTitle');
    var descriptionCotent = t937_parseDescription(videoData.description);

    titleContainer.text(title);
    descriptionContainer.html(descriptionCotent);
}

function t937_renderVideoCount(data, recid, styles) {
    var rec = $('#rec' + recid);
    var subheading = rec.find('.t937__subheading-title');
    var icon = rec.find('.t937__subheading-icon');
    var size = 0;

    var color = styles.secondaryColor.length ? styles.secondaryColor.replace('#', '%23') : '%23111111';
    icon.css('backgroundImage', 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' width=\'16\' height=\'16\'%3E%3Ctitle%3Evideo playlist%3C/title%3E%3Cg class=\'nc-icon-wrapper\' stroke-width=\'1\' fill=' + '\'' + color + '\'' + ' stroke=' + '\'' + color + '\'' + '%3E%3Crect x=\'0.5\' y=\'2.5\' width=\'15\' height=\'12\' rx=\'1\' fill=\'none\' stroke=' + '\'' + color + '\'' + ' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3Cpolygon points=\'6.5 5.5 11.5 8.5 6.5 11.5 6.5 5.5\' fill=\'none\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-color=\'color-2\'/%3E%3Cline x1=\'3.5\' y1=\'0.5\' x2=\'12.5\' y2=\'0.5\' fill=\'none\' stroke=' + '\'' + color + '\'' + ' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/g%3E%3C/svg%3E\"');

    for (var item in data) {
        if (!data[item].section) {
            size++;
        }
    }
    var videoPart = t937_translate('videoPart');
    subheading.text(size + ' ' + videoPart);
}

function t937_renderFade(recid, color) {
    color = color.length ? color : '#ffffff';
    var rec = $('#rec' + recid);
    var playlistFade = rec.find('.t937__playlist-fade');
    var colorFrom = t937_hex2rgb(color, 0);
    var colorTo = t937_hex2rgb(color, 1);

    playlistFade.css('backgroundImage', 'linear-gradient(' + colorFrom + ' 0%, ' + colorTo + ' 90%)');
}

function t937_parseDescription(string) {
    var result = $('<div></div>');
    var parts = string.split('<br>');

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (!part.length) {
            result.append($('<br>'));
        } else {
            /* Temporary allow html for links; TODO: change back to .text() call later, if possible */
            result.append($('<p class="t937__paragraph"></p>').html(part));
        }
    }
    return result.children();
}

function t937_setSizes(recid, styles) {
    var rec = $('#rec' + recid);
    var playlistWrapper = rec.find('.t937__playlist-wrap');
    var iframe = rec.find('.t937__video-frame');
    var playlistCol = rec.find('.t937__col_playlist');
    var description = rec.find('.t937__description');
    var videoCol = rec.find('.t937__col_video');

    /* Set 9:16 player sides */
    var height = videoCol.width() * 0.5625;
    iframe.attr('height', height);

    if (window.innerWidth >= 960) {
        $(description).css('width', videoCol.width());
        $(playlistWrapper).css('height', height + 'px');
        $(playlistWrapper).css('max-height', '');

        if (styles.playlistWidth.length) {
            $(playlistCol).css('width', styles.playlistWidth);
        }
    } else {
        $(playlistWrapper).css('max-height', height + 'px');
        $(playlistWrapper).css('height', '');
        $(playlistCol).css('width', '');
        $(description).css('width', '');
    }
}

function t937_translate(keyword) {
    var dict = [];

    dict['videoTitle'] = {
        RU: 'Без названия',
        EN: 'Untitled video',
        FR: 'Vidéo sans titre',
        DE: 'Video ohne Titel',
        ES: 'Video sin título',
        PT: 'Bez tytułu wideo',
        UK: 'Відео без назви',
        JA: '無題の動画',
        ZH: '无标题的视频',
        PL: 'Bez tytułu',
    };

    dict['videoPart'] = {
        RU: 'видео',
        EN: 'videos',
        FR: 'vidéos',
        DE: 'videos',
        ES: 'videos',
        PT: 'filmy',
        UK: 'відео',
        JA: 'ビデオ',
        ZH: '影片',
        PL: 'video',
    };

    dict['noData'] = {
        RU: 'Пожалуйста, добавьте хотя бы одно видео в плейлист',
        EN: 'Please add at least one video to the playlist',
        UK: 'Будь ласка, додайте хоча б одне відео в плейлист',
        PL: 'Proszę dodać jeden filmik do listy',
    };

    dict['wrongFormat'] = {
        RU: 'Пожалуйста, проверьте корректность заполненных данных',
        EN: 'Please check that the data is filled in correctly',
        UK: 'Будь ласка, перевірте коректність заповнених даних',
        PL: 'Sprawdź poprawność danych',
    };

    var lang = window.browserLang;

    if (dict[keyword] !== undefined) {
        if (dict[keyword][lang] !== undefined && dict[keyword][lang] !== '') {
            return dict[keyword][lang];
        } else {
            return dict[keyword]['EN'];
        }
    }

    return 'Text not found #' + keyword;
}

function t937_hex2rgb(hex, opacity) {
    var h = hex.replace('#', '');
    h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

    for (var i = 0; i < h.length; i++) {
        h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);
    }

    if (typeof opacity != 'undefined') {
        h.push(opacity);
    }

    return 'rgba(' + h.join(',') + ')';
}

function t937_addEvents(recid, styles) {
    $(window).bind('resize', t_throttle(function() {
        t937_setSizes(recid, styles);
    }));

    $('.t937').bind('displayChanged', function () {
        t937_setSizes(recid, styles);
    });
    /* Render/Remove playlist borrom fade */
    var rec = $('#rec' + recid);
    var playlistWrap = rec.find('.t937__playlist-wrap');
    var playlistFade = rec.find('.t937__playlist-fade');

    playlistWrap.on('scroll', function () {
        var height = playlistWrap.height();
        var scrollTop = playlistWrap.scrollTop();
        var scrollHeight = playlistWrap[0].scrollHeight;
        var marginBottom = 30;

        /* If user scrolls down to a slightly higher than the playlist bottom, remove fade */
        if (height + scrollTop >= scrollHeight - marginBottom) {
            playlistFade.css('backgroundImage', '');
        } else {
            t937_renderFade(recid, styles.bgColor);
        }
    });
}

function t937_onVideoClick(id, recid) {
    var rec = $('#rec' + recid);
    var container = rec.find('.t937__playlist');
    var videoData = container.data('data-video-data');
    var styles = container.data('playlist-styles');
    window.location.hash = 'tlection=' + recid + '_' + id;

    t937_renderPlaylist(videoData, id, recid, styles);
    t937_renderVideoFrame(videoData, id, recid, styles);
    t937_playVideo(recid);
}

function t937_playVideo(recid) {
    var rec = $('#rec' + recid);
    var videoFrame = rec.find('.t937__video-frame');
    if (videoFrame.length && videoFrame.hasClass('t937__video-frame_youtube')) {
        videoFrame.load(function() {
            var command = 'playVideo';
            videoFrame[0].contentWindow.postMessage('{"event":"command","func":"' + command + '","args":""}', '*');
        })
    }
} 
function t938_init(recid, margins) {
    var rec = $('#rec' + recid);
    t938_setImageHeight(recid, margins);

    $(window).bind('resize', t_throttle(function () {
        t938_setImageHeight(recid, margins);
    }));

    rec.find('.t937').bind('displayChanged', function () {
        t938_setImageHeight(recid, margins);
    });
}

function t938_setImageHeight(recid, margins) {
    var rec = $('#rec' + recid);
    var image = rec.find('.t938__background-image');

    if ($(window).width() <= 960) {
        image.css('height', '');
        image.css('width', '');
    } else {
        image.css('height', 'calc(100% + ' + margins + 'px)');
    }
    image.css('visibility', '');
} 
function t943_init(recid, previewmode) {
    t943_showButton(recid, previewmode);
    $(window).bind('scroll', t_throttle(function () {
        t943_showButton(recid, previewmode);
    }, 200));
}

function t943_showButton(recid, previewmode) {
    var wrapper = $('#rec' + recid);
    var button = wrapper.find('.t943__btn');
    var windowWidth = $(window).width();
    var windowHeight = screen.height;
    var scrollHeight = $(document).height();
    var scrollTop = $(window).scrollTop();

    var appearOffset = button.attr('data-appearoffset');
    var hideOffset = button.attr('data-hideoffset');

    if (previewmode !== '' && typeof appearOffset !== 'undefined' && appearOffset !== '' && windowWidth < 960) {
        if (appearOffset.indexOf('vh') > -1) {
            appearOffset = Math.floor((screen.height * (parseInt(appearOffset) / 100)));
        }
        appearOffset = parseInt(appearOffset, 10);

        if (scrollTop >= appearOffset) {
            button.removeClass('t943__btn_hidden');
        } else {
            button.addClass('t943__btn_hidden');
        }
    }

    if (previewmode !== '' && typeof hideOffset !== 'undefined' && hideOffset !== '' && windowWidth < 960) {
        if (hideOffset.indexOf('vh') > -1) {
            hideOffset = Math.floor((screen.height * (parseInt(hideOffset) / 100)));
        }
        hideOffset = parseInt(hideOffset, 10);

        if (scrollHeight - hideOffset <= windowHeight + scrollTop) {
            button.addClass('t943__btn_hidden');
        } else {
            if (appearOffset && scrollTop <= appearOffset) {
                /* if appearOffset was set either, then keep button visible until the first rule above is true */
            } else {
                button.removeClass('t943__btn_hidden');
            }
        }
    }
} 
function t945_init(recid) {
    var rec = $('#rec' + recid);
    rec.attr('data-animationappear', 'off');
    rec.css('opacity', '1');
    rec.attr('data-popup-subscribe-inited', 'y');
    var el = rec.find('.t-popup'),
        hook = el.attr('data-tooltip-hook'),
        analitics = el.attr('data-track-popup');
    if (hook !== '') {
        $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
            t945_showPopup(recid);
            e.preventDefault();
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
            if (analitics > '') {
                Tilda.sendEventToStatistics(analitics, hook);
            }
        });
    }
    
    t945_checkPopupHeight(recid);
    
    $(window).on('resize', function() {
        t945_checkPopupHeight(recid);
    })
}

function t945_checkPopupHeight(recid) {
    var $el = $('#rec' + recid);
    var $popupContainer = $el.find('.t945__popup');
    var windowHeight = $(window).height();
    var bottomOffset = 20;
    
    if (windowHeight < $popupContainer.height() + bottomOffset) {
        $popupContainer.addClass('t945__popup_scroll');
    } else {
        $popupContainer.removeClass('t945__popup_scroll');
    }
}

function t945_lockScroll() {
    var body = $("body");
    if (!body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        body.addClass('t-body_scroll-locked');
        body.css("top", "-" + bodyScrollTop + "px");
        body.attr("data-popup-scrolltop", bodyScrollTop);
    }
}

function t945_unlockScroll() {
    var body = $("body");
    if (body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = $("body").attr("data-popup-scrolltop");
        body.removeClass('t-body_scroll-locked');
        body.css("top", "");
        body.removeAttr("data-popup-scrolltop");
        window.scrollTo(0, bodyScrollTop);
    }
}

function t945_showPopup(recid) {
    var el = $('#rec' + recid),
        popup = el.find('.t-popup');
    popup.css('display', 'block');

    /* $('body').addClass('t-body_popupshowed t945__body_popupshowed'); */
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        setTimeout(function () {
            t945_lockScroll();
        }, 500);
    }

    setTimeout(function () {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show');
    }, 50);

    el.find('.t-popup__close').click(function (e) {
        t945_closePopup(recid);
    });

    el.find('a[href*="#"]').click(function (e) {
        var url = $(this).attr('href');
        if (!url || (url.substring(0, 7) != '#price:' && url.substring(0, 7) != '#order:')) {
            t945_closePopup(recid);
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t945_closePopup(recid);
        }
    });
}

function t945_closePopup(recid) {
    $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
    $('body').removeClass('t-body_popupshowed t945__body_popupshowed');
    /*fix IOS11 cursor bug + general IOS background scroll*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        t945_unlockScroll();
    }
    setTimeout(function () {
        $('.t-popup').not('.t-popup_show').css('display', 'none');
    }, 300);
}

function t945_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    'hitType': 'pageview',
                    'page': virtPage,
                    'title': virtTitle
                });
            }
        }

        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            });
        }
    }
}

function t945_onSuccess(t945_form) {
    t945_form.find('.t-form__inputsbox').addClass('t945__inputsbox_hidden');

    var successurl = t945_form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function () {
            window.location.href = successurl;
        }, 500);
    }
}
 
/* no init */ 
function t958_init(recid) {
	var el = $('#rec' + recid),
		container = el.find('.t958__slidecontainer'),
		item = el.find('.t958__item'),
		card = el.find('.t958__card'),
		totalSlides = item.length,
		sliderWidth = item.width();

	t958_checkSize(el);
	container.width(sliderWidth * totalSlides);

	$(window).bind('resize', t_throttle(function() {
		t958_findVisibleCards(el);
		t958_initPopup(el);
		t958_checkSize(el);
		sliderWidth = item.width();
		container.width(sliderWidth * totalSlides);

		var matrix = container.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
		var x = matrix[12] || matrix[4];
		if (-((totalSlides - 1) * sliderWidth) > x) {
			container.css('transform', 'translate(-' + (totalSlides - 1) * sliderWidth + 'px, 0)');
		}
	}));
	el.find('.t958').bind('displayChanged', function() {
		setTimeout(function() {
			sliderWidth = el.find('.t958__item').width();
			container.width(sliderWidth * totalSlides);
			t958_checkSize(el);
			t958_findVisibleCards(el);
			t958_initPopup(el);
		}, 300);
	});

    el.find('.t958__next').click(function() {
		t958_slide(el, 'right');
	});

	el.find('.t958__previous').click(function() {
		t958_slide(el, 'left');
	});
    if ($(window).width() > 640) {
	    t958_findVisibleCards(el);
    } else {
        t958_initSliderSwipe(el);
        card.addClass('t958__card-visible');
    }


	t958_initPopup(el);
}

function t958_checkSize(el) {
	var card = el.find('.t958__card_preview'),
		maxWidth = el.find('.t958__height').width(),
		windowMargin = 80,
		windowWidth = $(window).width(),
		cardMaxWidth = windowWidth - windowMargin;

	maxWidth > windowWidth ? card.css('max-width', cardMaxWidth + 'px') : card.css('max-width', '');

	card.each(function() {
		var cardHeight = $(this).height(),
			reviewHeight = $(this).find('.t958__card-inner').height();

		if (reviewHeight <= cardHeight) {
			$(this).removeClass('t958__card_fade');
		} else {
			$(this).addClass('t958__card_fade');
		}
	});
}
function t958_initSliderSwipe(el) {
    var sliderWrapper = el.find('.t958__gallery'),
    	totalSlides = el.find('.t958__item').length,
    	timeout,
    	isScrolling = false;

    delete Hammer.defaults.cssProps.userSelect;

	hammer = new Hammer(sliderWrapper[0], {
		domEvents: true,
		inputClass: Hammer.TouchInput,
		recognizers: [
			[Hammer.Pan, {
				direction: Hammer.DIRECTION_HORIZONTAL
			}]
		]
	});

	$(window).bind('scroll', function() {
		isScrolling = true;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			isScrolling = false;
		}, 250);
	});

	if (totalSlides == 1) {
		return false;
	}

	hammer.on('pan', function(event) {
	    
		if (isScrolling) {
			return false;
		}
		var sliderWrapper = el.find('.t958__gallery');

		sliderWrapper.attr('data-slider-touch', 'yes');
		if (event.isFinal) {
			if (event.velocityX > 0.4) {
				t958_slide(el, 'left'); 
			} else if (event.velocityX < -0.4) {
				t958_slide(el, 'right');
			}
			sliderWrapper.attr('data-slider-touch', '');
		}
	});
}
function t958_slide(el, direction) {
	var container = el.find('.t958__slidecontainer'),
		item = el.find('.t958__item'),
		totalSlides = item.length,
		sliderWidth = item.width(),
		pos = parseInt(container.attr('data-slide-pos'), 10);

	if (direction === 'right') {
		container.attr('data-slide-pos', ++pos);

		if (pos >= totalSlides) {
			pos = 0;
			container.attr('data-slide-pos', pos);
		}
	} else {
		container.attr('data-slide-pos', --pos);

		if (pos <= -1) {
			pos = totalSlides - 1;
			container.attr('data-slide-pos', pos);
		}
	}

	container.css({ transform: 'translate(-' + sliderWidth * pos + 'px, 0)' }).css('transition-duration', '.3s');

	setTimeout(function() {
		t958_findVisibleCards(el);
	}, 350);

	if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
		t_onFuncLoad('t_lazyload_update', function() {
			t_lazyload_update();
		});
	}
}

function t958_findVisibleCards(el) {
	var cards = el.find('.t958__card'),
	prevControl = el.find('.t958__previous'),
	nextControl = el.find('.t958__next'),
	leftCardOffset, rightCardOffset, rightControlWidth;

	cards.each(function() {
		$(this).removeClass('t958__card-left t958__card-right t958__card-visible');
        
		var cardLeftPos = $(this).offset().left,
			cardRightPos = cardLeftPos + $(this).width();

		if (cardLeftPos <= 0 && cardRightPos >= 0) {
			$(this).addClass('t958__card-left');
		} else if (cardLeftPos <= $(window).width() && cardRightPos >= $(window).width()) {
			$(this).addClass('t958__card-right');
		} else if (cardLeftPos >= 0 && cardRightPos <= $(window).width()) {
			$(this).addClass('t958__card-visible');
		}
	});
	
	var leftCard = el.find('.t958__card-left'),
	    rightCard = el.find('.t958__card-right');
	    
	if (leftCard.length > 0) {
	    leftCardOffset = leftCard.width() - Math.abs(leftCard.offset().left);
	    prevControl.width(leftCardOffset >= 30 ? leftCardOffset : 100);
	}
	if (rightCard.length > 0) {
	    rightCardOffset = rightCard.width() - (rightCard.offset().left + rightCard.width() - $(window).width());
        nextControl.width(rightCardOffset >= 30 ? rightCardOffset : 100);
	}
}

function t958_initPopup(el) {
    if (el.find('.t958').hasClass('t958_preview')) {
        return;
    }
	el.find('.t958__card_fade[data-review-block^="review"]').click(function() {
		if ($(this).hasClass('t958__card-visible')) {
			t958_showPopup(el);

			var el_popup = el.find('.t-popup'),
				review_id = $(this).attr('data-review-block').replace('review', ''),
				el_reviewpopup = el_popup.find('.t958__popup-item[data-review-index="' + review_id + '"]');

			el_popup.find('.t958__popup-item').css('display', 'none');
			el_reviewpopup.css('display', 'block');
		}
	});
}

function t958_checkPopupSize(el) {
	var popup = el.find('.t-popup__container'),
		popupHeight = popup.height(),
		winMargin = 120,
		winHeight = $(window).height() - winMargin;

	popupHeight > winHeight ? popup.addClass('t-popup__container-static') : popup.removeClass('t-popup__container-static');
}

function t958_showPopup(el) {
	var popup = el.find('.t-popup');

	popup.css('display', 'block');
	setTimeout(function() {
		popup.find('.t-popup__container').addClass('t-popup__container-animated');
		popup.addClass('t-popup_show');
		t958_checkPopupSize(el);
		if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
			t_onFuncLoad('t_lazyload_update', function() {
				t_lazyload_update();
			});
		}
	}, 50);

	$('body').addClass('t-body_popupshowed');

	el.find('.t-popup').mousedown(function (e) {
		var windowWidth = $(window).width(),
			maxScrollBarWidth = 17,
			windowWithoutScrollBar = windowWidth - maxScrollBarWidth;

		if (e.clientX > windowWithoutScrollBar) {
			return;
		}
		if (e.target == this) {
			t958_closePopup();
		}
	});

	el.find('.t-popup__close').click(function (e) {
		t958_closePopup();
	});

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			t958_closePopup();
		}
	});
}

function t958_closePopup() {
	$('body').removeClass('t-body_popupshowed');
	$('.t-popup').removeClass('t-popup_show');
	setTimeout(function() {
		$('.t-popup').scrollTop(0);
		$('.t-popup').not('.t-popup_show').css('display', 'none');
	}, 300);
}
 
function t959__init(recid) {
    var el = $('#rec' + recid);

    t959__updateLazyLoad(recid);

    $(window).on('resize', t_throttle(function () {
        t959_unifyHeights(recid);
    }));

    $(window).on('load', function () {
        t959_unifyHeights(recid);
    });

    el.find('.t959').on('displayChanged', t_throttle(function () {
        t959_unifyHeights(recid);
    }));
}

function t959__updateLazyLoad(recid) {
    var scrollContainer = $("#rec" + recid + " .t959__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode != "edit" && curMode != "preview" && window.isMobile) {
        scrollContainer.on('touchmove', t_throttle(function () {
            if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
        }));
    }
}

function t959_unifyHeights(recid) {
    $('#rec' + recid + ' .t959 .t959__container').each(function () {
        var highestBox = 0,
            curwidth = $(this).find('.t959__card-inner').width(),
            currow = $(this),
            ratio = $('#rec' + recid + ' .t959__container').attr('data-ratio');

        var minHeightFromRatio;

        switch (ratio) {
            case '16_9':
                minHeightFromRatio = curwidth * 0.5625;
                break;
            case '4_3':
                minHeightFromRatio = curwidth * 0.75;
                break;
            case '3_2':
                minHeightFromRatio = curwidth * 0.6666;
                break;
            case '1_1':
                minHeightFromRatio = curwidth;
                break;
            case '2_3':
                minHeightFromRatio = curwidth * 1.5;
                break;
            case '3_4':
                minHeightFromRatio = curwidth * 1.3333;
                break;
            case '9_16':
                minHeightFromRatio = curwidth * 1.7777;
                break;
        }

        currow.find('.t959__card-content').each(function () {
            var cardContent = $(this);
            var titleHeight = cardContent.find('.t959__card-title').outerHeight(true);
            var descrHeight = cardContent.find('.t959__card-desc').outerHeight(true);
            var colHeight = titleHeight + descrHeight;
            if (colHeight > highestBox) {
                highestBox = colHeight;
            }
        });

        if (highestBox > minHeightFromRatio) {
            currow.find('.t959__card-inner').css('padding-bottom', highestBox + 'px');
        } else {
            currow.find('.t959__card-inner').css('padding-bottom', '');
        }
    });
} 
function t966_init(recid) {
    var hook = $('#rec' + recid + ' .t966').attr('data-tooltip-hook');
    if (typeof hook === 'undefined' || hook === '') {
        return;
    }
    var hookLinks = $('a[href=\'' + hook + '\'][data-submenu-disallowed!="yes"]');
    hookLinks.addClass('t966__tm-link');
    hookLinks.attr('data-tooltip-menu-id', recid);
    
    var parentMenu = hookLinks.closest('[data-menu]');
    var tooltipMenu = $('#rec' + recid + ' .t966__tooltip-menu');

    tooltipMenu.attr('data-pos-fixed', 'no');
    if (parentMenu.length && parentMenu.css('position') == 'fixed') {
        tooltipMenu.attr('data-pos-fixed', 'yes');
    }
    
    
    t966_addArrow(recid, hookLinks);
    t966_setUpMenu(recid, hookLinks);
    t966_highlight();
}

function t966_divideMenu(recid, rows) {
    if (rows === '') {
        rows = 1;
    }

    var menu = $('#rec' + recid + ' .t966__menu-item-wrapper');
    var list = $('#rec' + recid + ' .t966__menu-list');
    var count = menu.length;
    var max = Math.ceil(count / rows);

    var rowclass = '';

    switch (rows) {
        case '1':
            rowclass = 't966__menu-list-row_100';
            break;
        case '2':
            rowclass = 't966__menu-list-row_50';
            break;
        case '3':
            rowclass = 't966__menu-list-row_33';
            break;
        case '4':
            rowclass = 't966__menu-list-row_25';
            break;
    }

    for (var i = 0; i < max; i++) {
        list.append('<div class="t966__menu-list-row ' + rowclass + '"></div>');
    }

    var listRows = list.find('.t966__menu-list-row');

    menu.each(function(index) {
        $(this).appendTo(listRows[index % max]);
    });

    var curMode = $('.t-records').attr('data-tilda-mode');
    if (curMode === 'edit') {
        $('.t966__tooltip-menu').css('display', 'block');
    }
}


function t966_setUpMenu(recid, hookLinks) {
    var submenu = $('#rec' + recid + ' .t966__tooltip-menu');
    var content = submenu.find('t966__content');

    var vIndent = $('#rec' + recid + ' .t966').attr('data-tooltip-margin');
    var timer;
    hookLinks.add(submenu).on('mouseover', function () {
        if (!window.isMobile) {
            /*if submenu is hovered while disappearing*/
            if ($(this).hasClass('t966__tooltip-menu') && !$(this).hasClass('t966__tooltip-menu_show')) {
                return;
            }
            clearTimeout(timer);
            /*if link is already hoverd and now hover is on submenu element*/
            if ($(this).hasClass('t966__tooltip-menu') && submenu.hasClass('t966__tooltip-menu_show')) {
                return;
            }
            var curAnchor = $(this);
            t966_showSubmenu(recid, curAnchor, submenu, vIndent);
        }
    });
    
    hookLinks.add(submenu).on('mouseout', function (event) {
        if (!window.isMobile) {
            timer = setTimeout(function () {
                t966_hideSubmenu(recid, submenu);
            }, 300);
        }
    });
    
    $(document).on('click', function(e) {
        if (submenu.attr('data-mobiletooltip') === 'yes') {
            if (!submenu.is(e.target) && submenu.has(e.target).length === 0 && (!$(e.target).is(hookLinks) && !$(e.target).is(hookLinks.children()))) {
                t966_hideSubmenu(recid, submenu);
            }
        }
    });

    hookLinks.on('click', function (e) {
        e.preventDefault();

        if (window.isMobile) {
            if ($(this).hasClass('t-menu__link-item')) {
                if (submenu.hasClass('t966__tooltip-menu_show') || $(this).next().hasClass('t966__tooltip-menu_mobile')) {
                    var submenu_mobile = $(this).next();
                    t966_hideSubmenu(recid, submenu_mobile);
                } else {
                    var curAnchor = $(this);
                    var submenu_mobile = submenu.clone();
                    submenu_mobile.addClass('t966__tooltip-menu_mobile');
                    t966_showSubmenu(recid, curAnchor, submenu_mobile, vIndent);
                }
            } else {
                /*if submenu is hovered while disappearing*/
                if ($(this).hasClass('t966__tooltip-menu') && !$(this).hasClass('t966__tooltip-menu_show')) {
                    return;
                }
                clearTimeout(timer);
                /*if link is already hoverd and now hover is on submenu element*/
                if ($(this).hasClass('t966__tooltip-menu') && submenu.hasClass('t966__tooltip-menu_show')) {
                    return;
                }
                var curAnchor = $(this);
                t966_showSubmenu(recid, curAnchor, submenu, vIndent);
                
                var tooltips = $('#rec' + recid + ' .t966__tooltip-menu[data-mobiletootlip="yes"]');
                if (tooltips.length !== 0) {
                    t966_hideSubmenu(recid, tooltips);
                }
            }

        }
    });
    $(window).bind('scroll', t_throttle(function () {
        content.hover(function() {
            /* to do nothing */
        }, function(){
            if (submenu.hasClass('t966__tooltip-menu_show') || hookLinks.filter('.t966__tm-link_active').next().hasClass('t966__tooltip-menu_mobile')) {
                var submenu_mobile = hookLinks.filter('.t966__tm-link_active').next();
                t966_hideSubmenu(recid, submenu_mobile);
            }
        });
    }, 300));

    $(window).bind('resize', t_throttle(function () {
        if (!window.isMobile) {
            t966_hideSubmenu(recid, $('.t966__tooltip-menu_mobile'));
        }
    }, 300));
    $('.t966__tooltip-menu a[href*="#"]').click(function () {
        t966_hideSubmenu(recid, submenu);
        $('.t450, .t199__mmenu, .t280, .t282, .t204__burger, .t451, .t466').trigger('clickedAnchorInTooltipMenu');

        $('.t966__tooltip-menu a[href*="#"]').removeClass('t-active');
        $(this).addClass('t-active');
    });
}


function t966_showSubmenu(recid, curAnchor, submenu, vIndent) {
    if (window.isMobile && curAnchor.hasClass('t-menu__link-item')) {
        submenu.insertAfter(curAnchor);
        
        submenu.parents('.t228').trigger('overflow');
        
        submenu.css({
            'position': 'static',
            'opacity': '1'
            });
        
        if (submenu.closest('.t280').length > 0 || submenu.closest('.t450').length > 0 || submenu.closest('.t451').length > 0) {
		    submenu.show();
		} else {
            submenu.slideDown();
		}

        submenu.addClass('t966__tooltip-menu_show');
        curAnchor.addClass('t966__tm-link_active');
        
        if (window.lazy == 'y') {
            t_lazyload_update();
        }
        return;
    }
    
    if (!curAnchor.hasClass('t-menu__link-item')) {
        submenu.find('.t966__tooltip-menu-corner-border').css('opacity', '1');
        submenu.find('.t966__tooltip-menu-corner').css('opacity', '1');
        if (window.isMobile) {
            submenu.attr('data-mobiletooltip', 'yes');
        }
    }
    
    var submenuHeight = submenu.outerHeight();
    var submenuWidth = submenu.outerWidth();
    var anchorHeight = curAnchor.height();
    var anchorWidth = curAnchor.width();
    if (curAnchor.hasClass('t-btn')) {
        anchorWidth = curAnchor.outerWidth();
    }
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var scrollTop = $(window).scrollTop();
    var anchorTop = curAnchor.offset().top;
    var anchorLeft = curAnchor.offset().left;
    
    var corner = submenu.find('.t966__tooltip-menu-corner');
    var cornerBorder = submenu.find('.t966__tooltip-menu-corner-border');
    var cornerLeft;
    
    var menuFixed = submenu.attr('data-pos-fixed');

    /* window-submenu horizontal margin, needed if submenu doesn't fit by its width */
    var menuWindowMargin = 10;
    var arrowHeight = 10;
    var vIndentDefault = 25;
    
    if (typeof vIndent != 'undefined' && vIndent != '') {
        vIndent = vIndent.replace('px', '') * 1;
        /*add arrow*/
        vIndent = vIndent + arrowHeight;
    } else {
        vIndent = vIndentDefault;
    }
   
    var posy;
	if (menuFixed == 'yes') {
	    posy = (curAnchor.offset().top - scrollTop) + anchorHeight + vIndent;
	    submenu.css('position', 'fixed');
	} else {
	    posy = curAnchor.offset().top + anchorHeight + vIndent;
	}
	
    var posx = anchorLeft;

    if (posy + submenuHeight > scrollTop + winHeight && posy >= submenuHeight && posy - scrollTop > submenuHeight) {
        posy = Math.max(posy - submenuHeight - anchorHeight - vIndent * 2, scrollTop);
        corner.removeClass('t966__tooltip-menu-corner_bottom').addClass('t966__tooltip-menu-corner_top');
        cornerBorder.removeClass('t966__tooltip-menu-corner-border_bottom').addClass('t966__tooltip-menu-corner-border_top');
    } else {
        corner.removeClass('t966__tooltip-menu-corner_top').addClass('t966__tooltip-menu-corner_bottom');
        cornerBorder.removeClass('t966__tooltip-menu-corner-border_top').addClass('t966__tooltip-menu-corner-border_bottom');
    }
    
    if (posx + submenuWidth / 2 < winWidth) {
        /*show in the center of anchor*/
        posx = posx + (anchorWidth - submenuWidth) / 2;
        /*show near left window border*/
        if (posx < 0) {
            posx = menuWindowMargin;
        }
    } else {
        /*show near right window border*/
        posx = winWidth - submenuWidth - menuWindowMargin;
    }
    
    if (Math.ceil(submenuWidth) + menuWindowMargin*2 > winWidth) {
        posx = menuWindowMargin;
        submenu.css('width', winWidth - menuWindowMargin*2);
    }

    submenu.css({
        'left': posx,
        'top': posy
    });

    submenu[0].offsetHeight;
    submenu.fadeIn(0);
    submenu.addClass('t966__tooltip-menu_show');
    curAnchor.addClass('t966__tm-link_active');
    
    cornerLeft = anchorLeft + Math.floor(anchorWidth / 2) - submenu.offset().left - (arrowHeight / 2);
    
    corner.css('left', cornerLeft);
    cornerBorder.css('left', cornerLeft);
    
    if (submenu.offset().top - $(window).scrollTop() + submenu.height() > $(window).height() && submenu.attr('data-mobiletooltip') !== 'yes') {
        var content = submenu.find('.t966__content');
        var contentPadding = parseInt(content.css('padding'), 10);
        var paddingWindow = 40;

        var height = $(window).scrollTop() + $(window).height() - posy - contentPadding - paddingWindow - arrowHeight;
        content.css({
            "overflow-y": "scroll",
            "height": height
        });
    }
    
    if (window.lazy == 'y') {
        t_lazyload_update();
    }
}


function t966_hideSubmenu(recid, submenu) {
    if (submenu.attr('data-mobiletooltip') === 'yes') {
        submenu.attr('data-mobiletooltip', '');
    }
    
    if (submenu.hasClass('t966__tooltip-menu_mobile')) {
        if (submenu.closest('.t280').length > 0 || submenu.closest('.t450').length > 0 || submenu.closest('.t451').length > 0) {
		    submenu.hide(0, function() {
	            submenu.remove();
	        });
		} else {
            submenu.slideUp("normal", function() {
                submenu.parents('.t228').trigger('nooverflow');
                submenu.remove();
            });
		}
        $('.t966__tm-link_active').removeClass('t966__tm-link_active');
        return;
    } else {
        var content = submenu.find('.t966__content');
        
        submenu.css({
            "display": "",
            "left": "",
            "top": "",
            "width": ""
        });
        
        content.css({
            "overflow-y": "",
            "height": ""
        });
        
        submenu.removeClass('t966__tooltip-menu_show');
    }
    
    $('.t966__tm-link_active').removeClass('t966__tm-link_active');
}


function t966_addArrow(recid, hookLinks) {
    var arrow = $('#rec' + recid + ' .t966').attr('data-add-arrow');
    if (typeof arrow == 'undefined' || arrow == '') {
        return;
    }
    hookLinks.each(function (i, el) {
        $(el).append('<div class="t966__arrow"></div>');
    });
}


function t966_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    var hash = window.location.hash;
    if (url.substr(url.length - 1) == "/") {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == "/") {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == "/") {
        pathname = pathname.slice(1);
    }
    if (pathname == "") {
        pathname = "/";
    }
    $('a[href=\'' + url + '\'] .t966__menu-item-title').addClass('t-active');
    $('a[href=\'' + url + '/\'] .t966__menu-item-title').addClass('t-active');
    $('a[href=\'' + pathname + '\'] .t966__menu-item-title').addClass('t-active');
    $('a[href=\'/' + pathname + '\'] .t966__menu-item-title').addClass('t-active');
    $('a[href=\'' + pathname + '/\'] .t966__menu-item-title').addClass('t-active');
    $('a[href=\'/' + pathname + '/\'] .t966__menu-item-title').addClass('t-active');
    if (hash) {
        $('a[href=\'' + hash + '\'] .t966__menu-item-title').addClass('t-active');
    }
}

 
function t967_createMobileMenu(recid, previewMode) {
    var window_width = $(window).width(),
        el = $("#rec" + recid),
        menu = el.find(".t967"),
        burger = el.find(".t967__mobile");
    burger.click(function (e) {
        menu.fadeToggle(300);
        $(this).toggleClass("t967_opened");
    });
    if ($('#nav269976850').attr('data-appearoffset') !== '' && previewMode !== '' && $('#nav269976850').hasClass('t967__positionfixed')) {
        $(window).bind('resize', t_throttle(function () {
            var window_width = $(window).width();
            if (window_width > 980) {
                t967_appearMenu(recid);
                burger.removeClass("t967_opened");
                menu.fadeOut(0);
            } else {
                menu.css("visibility", "visible");
            }
        }, 200));
    } else {
        $(window).bind('resize', t_throttle(function () {
            var window_width = $(window).width();
            if (window_width > 980) {
                menu.fadeIn(0);
            } else {
                if (!burger.hasClass("t967_opened")) {
                    menu.fadeOut(0);
                }
            }
        }));
    }
}

function t967_setLogoPadding(recid) {
    if ($(window).width() > 980) {
        var menu = $('#rec' + recid + ' .t967');
        var logo = menu.find('.t967__logowrapper');
        var leftpart = menu.find('.t967__leftwrapper');
        var rightpart = menu.find('.t967__rightwrapper');
        leftpart.css("padding-right", logo.width() / 2 + 50);
        rightpart.css("padding-left", logo.width() / 2 + 50);
    }
}

function t967_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == "/") {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == "/") {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == "/") {
        pathname = pathname.slice(1);
    }
    if (pathname == "") {
        pathname = "/";
    }
    $(".t967__list-item a[href='" + url + "']").addClass("t-active");
    $(".t967__list-item a[href='" + url + "/']").addClass("t-active");
    $(".t967__list-item a[href='" + pathname + "']").addClass("t-active");
    $(".t967__list-item a[href='/" + pathname + "']").addClass("t-active");
    $(".t967__list-item a[href='" + pathname + "/']").addClass("t-active");
    $(".t967__list-item a[href='/" + pathname + "/']").addClass("t-active");
}

function t967_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var navLinks = $("#rec" + recid + " .t967__desktoplist .t967__list-item a:not(.tooltipstered)[href*='#']");
        if (navLinks.length > 0) {
            t967_catchScroll(navLinks);
        };
    }
}

function t967_catchScroll(navLinks) {
    var clickedSectionId = null,
        sections = new Array(),
        sectionIdTonavigationLink = [],
        interval = 100,
        lastCall, timeoutId;
    navLinks = $(navLinks.get().reverse());
    navLinks.each(function () {
        var cursection = t967_getSectionByHref($(this));
        if (typeof cursection.attr("id") != "undefined") {
            sections.push(cursection);
        }
        sectionIdTonavigationLink[cursection.attr("id")] = $(this);
    });
    t967_updateSectionsOffsets(sections);
    sections.sort(function (a, b) {
        return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
    $(window).bind('resize', t_throttle(function () {
        t967_updateSectionsOffsets(sections);
    }, 200));
    $('.t967').bind('displayChanged', function () {
        t967_updateSectionsOffsets(sections);
    });
    setInterval(function () {
        t967_updateSectionsOffsets(sections);
    }, 5000);
    t967_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);

    navLinks.click(function () {
        var clickedSection = t967_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof clickedSection.attr("id") != "undefined") {
            navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            clickedSectionId = t967_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval)) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                clickedSectionId = t967_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
            }, interval - (now - lastCall));
        } else {
            lastCall = now;
            clickedSectionId = t967_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
        }
    });
}


function t967_updateSectionsOffsets(sections) {
    $(sections).each(function () {
        var curSection = $(this);
        curSection.attr("data-offset-top", curSection.offset().top);
    });
}


function t967_getSectionByHref(curlink) {
    var curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (curLinkValue[0] == '/') {
        curLinkValue = curLinkValue.substring(1);
    }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + curLinkValue.substring(1) + "']");
    }
}

function t967_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId) {
    var scrollPosition = $(window).scrollTop(),
        valueToReturn = clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (sections.length != 0 && clickedSectionId == null && sections[sections.length - 1].attr("data-offset-top") > (scrollPosition + 300)) {
        navLinks.removeClass('t-active');
        return null;
    }

    $(sections).each(function (e) {
        var curSection = $(this),
            sectionTop = curSection.attr("data-offset-top"),
            id = curSection.attr('id'),
            navLink = sectionIdTonavigationLink[id];
        if (((scrollPosition + 300) >= sectionTop) || (sections[0].attr("id") == id && scrollPosition >= $(document).height() - $(window).height())) {
            if (clickedSectionId == null && !navLink.hasClass('t-active')) {
                navLinks.removeClass('t-active');
                navLink.addClass('t-active');
                valueToReturn = null;
            } else {
                if (clickedSectionId != null && id == clickedSectionId) {
                    valueToReturn = null;
                }
            }
            return false;
        }
    });
    return valueToReturn;
}

function t967_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t967").each(function () {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor);
            }
        });
    } else {
        $(".t967").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes");
        });
    }
}

function t967_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t967").each(function () {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top", "-50px");
                        el.css("visibility", "visible");
                        el.animate({
                            "opacity": "1",
                            "top": "0px"
                        }, 200, function () {});
                    }
                    if (el.css("display") == "none") {
                        el.css("display", "block");
                    }
                } else {
                    el.stop();
                    el.css("visibility", "hidden");
                }
            }
        });
    }

}

function t967_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t967").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.' + menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if (bgopacitytwo == '0' || menushadow == ' ') {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            } else {
                el.css("background-color", bgcolor);
                if (bgopacityone == '0.0' || menushadow == ' ') {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            }
        });
    }
} 
function t969_init(recid) {
    var el_rec = $('#rec' + recid);
    var el_branches = el_rec.find('.t969');
    if ($('#tildacopy').length > 0) {
        window.addEventListener('scroll', function(ev) {
            if ((window.innerHeight + window.pageYOffset + 70) >= document.body.offsetHeight) {
                var offsetBottom = 70 - (document.body.offsetHeight - (window.innerHeight + window.pageYOffset));
                el_branches.css('bottom', offsetBottom + 'px');
            } else {
                el_branches.css('bottom', '0px');
            }
        });
    }
} 
function t970_init(recid) {
    var el_rec = $('#rec' + recid)
    var el_closeBtn = el_rec.find('.t970__btn-close');
    var el_mainCheckbox = el_rec.find('#ny-widget-checkbox');

    el_closeBtn.on('click', function() {
        el_mainCheckbox.prop('checked', false);
    })
    
}
 
function t971_init(recids) {
    recids = recids.split(',');
    recids.forEach(function(item) {
        t971_createSnowfall(item);
    });
}

function t971_getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function t971_createSnowfall(recid) {
    var snowSettings = {
        number: 50,
        minDuration: 10,
        maxDuration: 20,
    }
  
    var el_snowfallWrapper, 
        snowfallHeight, 
        wrappertype; 
    var wrapperblock = $('#rec' + recid); 
    if (recid && wrapperblock) { 
        var zeroattr = wrapperblock.attr('data-record-type'); 
        if (zeroattr == 396) { 
            wrappertype = " .t396__artboard"; 
        } else { 
            wrappertype = " .t-cover"; 
        } 
        el_snowfallWrapper = $('#rec' + recid + wrappertype); 
        var isWrapperPositioned = (el_snowfallWrapper.length > 0) && (el_snowfallWrapper.css('position') !== 'static'); 
        if (isWrapperPositioned) { 
            snowfallHeight = el_snowfallWrapper.height() + 'px'; 
        } else { 
            el_snowfallWrapper = $('body'); 
            snowfallHeight = Math.round(window.innerHeight) + 'px'; 
        } 
         
    } else { 
        el_snowfallWrapper = $('body'); 
        snowfallHeight = Math.round(window.innerHeight) + 'px'; 
    }
  
  
    var style = 
    '.t971__snowfall { ' +
        'position: absolute; ' +
        'top: 0; ' +
        'width: 100%;' +
        'height: ' + snowfallHeight + ';' +
        'backface-visibility: hidden;' +
        'pointer-events: none;' +
        'z-index: 50000; ' +
        'display: block; ' +
        'overflow: hidden; ' +
        'pointer-events: none; ' +
    '} ' +
    '.t971__snowflake { ' +
        'position: absolute; ' +
        'left: 0; ' +
        'top: 0; ' +
        'display: none;' +
    '} ';
    
    el_snowfallWrapper.append('<div id="t971__snowfall" class="t971__snowfall"></div>');
    var el_snowfallContainer = $('.t971__snowfall');
  
    var styleRule = '';
    var snowfall = '';
    var snowflake = [
        '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M15.934 1V29.739M29.72 14.795H1M26.273 4.448L5.595 25.141M26.273 25.141L5.595 4.448M20.529 4.448H11.339M20.529 25.141H11.339M26.273 19.393V10.196M5.595 19.393V10.196" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M7.319 1V13.6453M13.637 7.3226H1M11.797 2.8585L2.858 11.804M11.797 11.804L2.858 2.8585" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M13.636 1V26.2906M26.273 13.6453H1M22.827 22.8419L4.446 4.4488M22.827 4.4488L4.446 22.8419L13.6365 13.6453L22.827 4.4488ZM6.744 6.7479H20.529V20.5428H6.744V6.7479Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M13.637 1V26.291M26.273 13.645H1M22.664 4.61299L4.612 22.678M22.664 22.678L4.612 4.61299M17.245 2.806L13.625 6.41899L10.024 2.806H17.245ZM10.024 24.484L13.625 21.774L17.245 24.484H10.024ZM24.467 17.258L20.857 13.655L24.467 10.033V17.258ZM2.804 10.033L6.414 13.655L2.804 17.258V10.033Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    ];

    for (i = 1; i <= snowSettings.number; i++) {
  
        var parentHeight = snowfallHeight,
            leftStart = Math.round(window.innerWidth / (100 / t971_getRandom(0, 100))),
            leftOffset = Math.round(window.innerWidth / (100 / t971_getRandom(-10, 10))),
            leftEnd = leftStart + leftOffset,
            duration = t971_getRandom(snowSettings.minDuration, snowSettings.maxDuration),
            delay = t971_getRandom(1, 30).toFixed(2) * -1,
            opacity = Math.random().toFixed(2),
            flakeStyle = t971_getRandom(0,3);
            
          styleRule = 
            '.t971__snowflake:nth-child(' + i + ') {' +
                'max-width: 40px;' + 
                'max-height: 40px;' + 
                'display: block;' +
                'opacity: ' + opacity + ';' + 
                '-moz-animation: snow-' + i + ' ' + duration + 's ' + delay + 's '+ 'linear infinite;' +
                '-webkit-animation: snow-' + i + ' ' + duration + 's ' + delay + 's '+ 'linear infinite;' +
                'animation: snow-' + i + ' ' + duration + 's ' + delay + 's '+ 'linear infinite;' +
            '}' +
        
            '@keyframes snow-' + i + ' {' +
                '0% {' +
                    'transform: translate(' + leftStart + 'px, -10px)' + 
                '}' +
                '80% {' +
                    'opacity: ' + opacity + ';' + 
                '}' +

                '100% {' +
                    'opacity: 0;' +
                    'transform: translate(' + leftEnd + 'px, ' + parentHeight + ')' + 
                '}' +
            '}';
      
      
        style += styleRule;  
        snowfall += '<div class="t971__snowflake">' + snowflake[flakeStyle] + '</div>';
    }
  
    el_snowfallContainer.append(snowfall);
    $('head').append('<style>' + style + '</style>');
} 
function t975_init(recid) {
	var el_rec = $('#rec' + recid);
	var el_menu = el_rec.find('.t975');
    t975_findActiveItem(recid);
    el_menu.removeClass('t975__beforeready');
    t975_checkAnchorLinks(recid);
    t975_detectIphone(el_menu);
    if (el_menu.attr('data-hidemenuonscroll') || t975_detectIphone(el_menu)) {
        t975_handleScroll(el_menu);
    }
    if ($('#tildacopy').length > 0 && $(document).height() > 800) {
        t975_addCopyrightMargin(el_menu);
    }
}
function t975_addCopyrightMargin(el_menu) {
    var menuHeight = el_menu.height();
    $('#tildacopy').css('paddingBottom', menuHeight);
    t975_handleScroll(el_menu);
}
function t975_detectIphone(el_menu) {
    var isIphone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
    var aspect = window.screen.width / window.screen.height;
    var iphoneAspect = "0.462";
    if (isIphone && aspect.toFixed(3) === iphoneAspect) {
        return true;
    }
}
function t975_findActiveItem(recid) {
	var url = window.location.href;
	var pathname = window.location.pathname;
	var hash = window.location.hash;
	if (url.substr(url.length - 1) == '/') {
		url = url.slice(0, -1);
	}
	if (pathname.substr(pathname.length - 1) == '/') {
		pathname = pathname.slice(0, -1);
	}
	if (pathname.charAt(0) == '/') {
		pathname = pathname.slice(1);
	}
	if (pathname == '') {
		pathname = '/';
	}
	$(".t975__list-item a[href='" + url + "'] ").addClass('t-active');
	$(".t975__list-item a[href='" + url + "/']").addClass('t-active');
	$(".t975__list-item a[href='" + pathname + "']").addClass('t-active');
	$(".t975__list-item a[href='/" + pathname + "']").addClass('t-active');
	$(".t975__list-item a[href='" + pathname + "/']").addClass('t-active');
	$(".t975__list-item a[href='/" + pathname + "/']").addClass('t-active');
	if (hash) {
		$(".t975__list-item a[href='" + hash + "']").addClass('t-active');
	}
}

function t975_checkAnchorLinks(recid) {
	var navLinks = $('#rec' + recid + " .t975__list-item a:not(.tooltipstered)[href*='#']");
	if (navLinks.length > 0) {
		t975_catchScroll(navLinks, recid);
	}
}

function t975_catchScroll(navLinks, recid) {
	var clickedSectionId = null,
		sections = new Array(),
		sectionIdTonavigationLink = [];
	var el_rec = $('#rec' + recid);
	var el_menu = el_rec.find('.t975');

	navLinks = $(navLinks.get().reverse());
	navLinks.each(function() {
		var cursection = t975_getSectionByHref($(this));
		if (typeof cursection.attr('id') != 'undefined') {
			sections.push(cursection);
		}
		sectionIdTonavigationLink[cursection.attr('id')] = $(this);
	});
	t975_updateSectionsOffsets(sections);
	sections.sort(function(a, b) {
		return b.attr('data-offset-top') - a.attr('data-offset-top');
	});

	t975_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);

	navLinks.click(function() {
		var clickedSection = t975_getSectionByHref($(this));
		if (!$(this).hasClass('tooltipstered') && typeof clickedSection.attr('id') != 'undefined') {
			navLinks.removeClass('t-active');
			$(this).addClass('t-active');
			clickedSectionId = t975_getSectionByHref($(this)).attr('id');
		}
	});
	
    /* events */
	$(window).bind('resize', t_throttle(function() {
		t975_updateSectionsOffsets(sections);
	}));
	el_menu.bind('displayChanged', function() {
		t975_updateSectionsOffsets(sections);
	});
	$(window).bind('scroll', t_throttle(function () {
	    clickedSectionId = t975_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
	}));
}

function t975_updateSectionsOffsets(sections) {
	$(sections).each(function() {
		var curSection = $(this);
		curSection.attr('data-offset-top', curSection.offset().top);
	});
}

function t975_getSectionByHref(curlink) {
	var curLinkValue = curlink.attr('href').replace(/\s+/g, '').replace(/.*#/, '');
	if (curlink.is('[href*="#rec"]')) {
		return $(".r[id='" + curLinkValue + "']");
	} else {
		return $(".r[data-record-type='215']").has("a[name='" + curLinkValue + "']");
	}
}

function t975_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId) {
	var scrollPosition = $(window).scrollTop(),
		valueToReturn = clickedSectionId;
	/*if first section is not at the page top (under first blocks)*/
	if (sections.length != 0 && clickedSectionId == null && sections[sections.length - 1].attr('data-offset-top') > scrollPosition + 300) {
		navLinks.removeClass('t-active');
		return null;
	}

	$(sections).each(function(e) {
		var curSection = $(this),
			sectionTop = curSection.attr('data-offset-top'),
			sectionId = curSection.attr('id'),
			navLink = sectionIdTonavigationLink[sectionId];
		if (scrollPosition + 300 >= sectionTop || (sections[0].attr('id') == sectionId && scrollPosition >= $(document).height() - $(window).height())) {
			if (clickedSectionId == null && !navLink.hasClass('t-active')) {
				navLinks.removeClass('t-active');
				navLink.addClass('t-active');
				valueToReturn = null;
			} else {
				if (clickedSectionId !== null && sectionId == clickedSectionId) {
					valueToReturn = null;
				}
			}
			return false;
		}
	});
	return valueToReturn;
}

function t975_handleScroll(el_menu) {
	var isScrolling;
	var lastScrollTop = 0;
	var delta = 5;
	var initialHeight = window.innerHeight;
	var maxHeight = initialHeight;
	var menuPadding;

	$(window).bind('scroll', t_throttle(function () {
		var currentScrollTop = $(this).scrollTop();
		if (Math.abs(lastScrollTop - currentScrollTop) <= delta) return;
		if (t975_detectIphone(el_menu)) {
			if ($('#tildacopy').length > 0 && $(document).height() > 800) {
			    var menuHeight = el_menu.outerHeight();
                $('#tildacopy').css('paddingBottom', menuHeight);
			}
		}
		if (el_menu.attr('data-hidemenuonscroll')) {
			currentScrollTop > lastScrollTop ? el_menu.slideDown(240) : el_menu.slideUp();
		}
		
		lastScrollTop = currentScrollTop;
	}));

}
 
function t976_highlight(recid) {
	var url = window.location.href;
	var pathname = window.location.pathname;
	var hash = window.location.hash;
	if (url.substr(url.length - 1) == '/') {
		url = url.slice(0, -1);
	}
	if (pathname.substr(pathname.length - 1) == '/') {
		pathname = pathname.slice(0, -1);
	}
	if (pathname.charAt(0) == '/') {
		pathname = pathname.slice(1);
	}
	if (pathname == '') {
		pathname = '/';
	}
	$(".t976__list-item a[href='" + url + "'] ").addClass('t-active');
	$(".t976__list-item a[href='" + url + "/']").addClass('t-active');
	$(".t976__list-item a[href='" + pathname + "']").addClass('t-active');
	$(".t976__list-item a[href='/" + pathname + "']").addClass('t-active');
	$(".t976__list-item a[href='" + pathname + "/']").addClass('t-active');
	$(".t976__list-item a[href='/" + pathname + "/']").addClass('t-active');
	if (hash) {
		$(".t976__list-item a[href='" + hash + "']").addClass('t-active');
	}
}

function t976_checkAnchorLinks(recid) {
	var navLinks = $(
		'#rec' + recid + " .t976__list-item a:not(.tooltipstered)[href*='#']"
	);
	if (navLinks.length > 0) {
		t976_catchScroll(navLinks);
	}
}

function t976_catchScroll(navLinks) {
	var clickedSectionId = null,
		sections = new Array(),
		sectionIdTonavigationLink = [],
		interval = 100,
		lastCall,
		timeoutId;

	navLinks = $(navLinks.get().reverse());
	navLinks.each(function() {
		var cursection = t976_getSectionByHref($(this));
		if (typeof cursection.attr('id') != 'undefined') {
			sections.push(cursection);
		}
		sectionIdTonavigationLink[cursection.attr('id')] = $(this);
	});
	t976_updateSectionsOffsets(sections);
	sections.sort(function(a, b) {
		return b.attr('data-offset-top') - a.attr('data-offset-top');
	});
	$(window).bind('resize', t_throttle(function() {
			t976_updateSectionsOffsets(sections);
		}, 200)
	);
	$('.t976').bind('displayChanged', function() {
		t976_updateSectionsOffsets(sections);
	});
	setInterval(function() {
		t976_updateSectionsOffsets(sections);
	}, 5000);
	t976_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);

	navLinks.click(function() {
		var clickedSection = t976_getSectionByHref($(this));
		if (
			!$(this).hasClass('tooltipstered') &&
			typeof clickedSection.attr('id') != 'undefined'
		) {
			navLinks.removeClass('t-active');
			$(this).addClass('t-active');
			clickedSectionId = t976_getSectionByHref($(this)).attr('id');
		}
	});
	$(window).scroll(function() {
		var now = new Date().getTime();
		if (lastCall && now < lastCall + interval) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(function() {
				lastCall = now;
				clickedSectionId = t976_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
			}, interval - (now - lastCall));
		} else {
			lastCall = now;
			clickedSectionId = t976_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
		}
	});
}

function t976_updateSectionsOffsets(sections) {
	$(sections).each(function() {
		var curSection = $(this);
		curSection.attr('data-offset-top', curSection.offset().top);
	});
}

function t976_getSectionByHref(curlink) {
	var curLinkValue = curlink
		.attr('href')
		.replace(/\s+/g, '')
		.replace(/.*#/, '');
	if (curlink.is('[href*="#rec"]')) {
		return $(".r[id='" + curLinkValue + "']");
	} else {
		return $(".r[data-record-type='215']").has(
			"a[name='" + curLinkValue + "']"
		);
	}
}

function t976_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId) {
	var scrollPosition = $(window).scrollTop(),
		valueToReturn = clickedSectionId;
	/*if first section is not at the page top (under first blocks)*/
	if (
		sections.length != 0 &&
		clickedSectionId == null &&
		sections[sections.length - 1].attr('data-offset-top') > scrollPosition + 300
	) {
		navLinks.removeClass('t-active');
		return null;
	}

	$(sections).each(function(e) {
		var curSection = $(this),
			sectionTop = curSection.attr('data-offset-top'),
			id = curSection.attr('id'),
			navLink = sectionIdTonavigationLink[id];
		if (
			scrollPosition + 300 >= sectionTop ||
			(sections[0].attr('id') == id &&
				scrollPosition >= $(document).height() - $(window).height())
		) {
			if (clickedSectionId == null && !navLink.hasClass('t-active')) {
				navLinks.removeClass('t-active');
				navLink.addClass('t-active');
				valueToReturn = null;
			} else {
				if (clickedSectionId != null && id == clickedSectionId) {
					valueToReturn = null;
				}
			}
			return false;
		}
	});
	return valueToReturn;
}
 
function t978_init(recid, cols, openOnClick) {
    var hook = $('#rec' + recid + ' .t978').attr('data-tooltip-hook');
    if (typeof hook === 'undefined' || hook === '') {
        return;
    }

    var hookLinks = $('a[href="' + hook + '"]');
    hookLinks.addClass('t978__tm-link');
    hookLinks.attr('data-tooltip-menu-id', recid);

    var parentMenu = hookLinks.closest('[data-menu]');
    var tooltipMenu = $('#rec' + recid + ' .t978__tooltip-menu');
    tooltipMenu.attr('data-pos-fixed', 'no');

    if (parentMenu.length && parentMenu.css('position') == 'fixed') {
        tooltipMenu.attr('data-pos-fixed', 'yes');
    }

    t978_addArrow(recid, hookLinks);
    t978_setUpMenu(recid, hookLinks, cols, openOnClick);
    t978_findActiveItem();
}

function t978_preview(recid, cols) {
    var tooltipMenu = $('#rec' + recid + ' .t978__tooltip-menu');
    var content = tooltipMenu.find('.t978__content');
    var submenuContainer = content.find('.t978__submenu-container');
    var submenuWrapper = content.find('.t978__submenu-wrapper');

    submenuWrapper.each(function () {
        var submenuItems = $(this).find('.t978__submenu-item');
        t978_divideMenu(submenuItems, cols);
    });

    var submenuActiveLink = content.find('.t978__menu-link[data-menu-submenu-hook!=""]');
    var submenuHook = $(submenuActiveLink[0]).attr('data-menu-submenu-hook');
    if (submenuHook) {
        var activeSubmenuContainer = content.find('.t978__submenu-wrapper[data-submenu-hook="' + submenuHook + '"]');
        var activeSubmenu = activeSubmenuContainer.find('.t978__submenu');

        if ($(window).width() > 980) {
            activeSubmenuContainer.show();
            submenuContainer.show();
            activeSubmenu.addClass('t978__submenu_show');
        }
    }
}

function t978_divideMenu(items, cols) {
    if (cols === '') {
        cols = 1;
    }

    var itemsPerCol = [],
        minItemsPerCol = Math.floor(items.length / cols),
        remainder = items.length % cols,
        pointer = 0;

    var colclass = 't978__menu-col_' + cols;

    for (var i = 0; i < cols; i++) {
        itemsPerCol[i] = i < remainder ? minItemsPerCol + 1 : minItemsPerCol;
        items
            .slice(pointer, pointer + itemsPerCol[i])
            .wrapAll('<div class="t978__menu-col ' + colclass + '"></div>');
        pointer += itemsPerCol[i];
    }
}

function t978_setUpMenu(recid, hookLinks, cols, openOnClick) {
    var tooltipMenu = $('#rec' + recid + ' .t978__tooltip-menu');
    var content = tooltipMenu.find('.t978__content');
    var submenuWrapper = tooltipMenu.find('.t978__submenu-wrapper');

    submenuWrapper.each(function () {
        var submenuItems = $(this).find('.t978__submenu-item');
        t978_divideMenu(submenuItems, cols);
    });

    var vIndent = $('#rec' + recid + ' .t978').attr('data-tooltip-margin');

    if ($(window).width() > 980) {
        t978_addEventsDesktop(tooltipMenu, hookLinks, vIndent, openOnClick);
    } else {
        t978_addEventsMobile(tooltipMenu, hookLinks, vIndent, openOnClick);
    }

    $(window).bind('scroll', t_throttle(function () {
        content.mouseleave(function () {
            if (tooltipMenu.hasClass('t978__tooltip-menu_show') || hookLinks.filter('.t978__tm-link_active').next().hasClass('t978__tooltip-menu_mobile')) {
                var tooltip_mobile = hookLinks.filter('.t978__tm-link_active').next();
                t978_hideTooltipmenu(tooltip_mobile);
            }
        });
    }, 300));
    $('.t978__tooltip-menu a[href*="#"]').click(function () {
        t978_hideTooltipmenu(tooltipMenu, $(this));
        $('.t450, .t199__mmenu, .t280, .t282, .t204__burger, .t451, .t466').trigger('clickedAnchorInTooltipMenu');
        $('.t978__tooltip-menu a[href*="#"]').removeClass('t-active');
        $(this).addClass('t-active');
    });
}

function t978_addEventsDesktop(tooltipMenu, hookLinks, vIndent, openOnClick) {
    var menuLinks = tooltipMenu.find('.t978__menu-link');
    var submenuContainer = tooltipMenu.find('.t978__submenu-container');
    var submenuWrapper = tooltipMenu.find('.t978__submenu-wrapper');
    var timer;
    var curAnchor;

    hookLinks.add(tooltipMenu).on('mouseover', function (e) {
        e.preventDefault();
        if ($(this).hasClass('t978__tooltip-menu') && !$(this).hasClass('t978__tooltip-menu_show')) {
            return;
        }
        clearTimeout(timer);
        if ($(this).hasClass('t978__tooltip-menu') && tooltipMenu.hasClass('t978__tooltip-menu_show')) {
            return;
        }
        curAnchor = $(this);
        t978_showTooltipmenu(curAnchor, tooltipMenu, vIndent);
        t978_addSubmenuEvents(tooltipMenu, openOnClick);
    });
    hookLinks.add(tooltipMenu).on('mouseout', function () {
        timer = setTimeout(function () {
            t978_hideTooltipmenu(tooltipMenu);
            t978_resetSubmenu(menuLinks, submenuWrapper, submenuContainer);
        }, 300);
    });

    $(window).bind('resize', t_throttle(function () {
        t978_hideTooltipmenu($('.t978__tooltip-menu_mobile'));
    }, 300));
}

function t978_addEventsMobile(tooltipMenu, hookLinks, vIndent, openOnClick) {
    var curAnchor;
    hookLinks.on('click', function (e) {
        e.preventDefault();
        var tooltip_mobile;
        var submenuLinks = tooltipMenu.find('.t978__menu-link');
        var submenuContainer = tooltipMenu.find('.t978__submenu-container');
        var submenuWrapper = tooltipMenu.find('.t978__submenu-wrapper');

        if (tooltipMenu.hasClass('t978__tooltip-menu_show') || hookLinks.filter('.t978__tm-link_active').next().hasClass('t978__tooltip-menu_mobile')) {
            tooltip_mobile = hookLinks.filter('.t978__tm-link_active').next();
            t978_hideTooltipmenu(tooltip_mobile, $(this));
        } else {
            curAnchor = $(this);
            tooltip_mobile = tooltipMenu.clone();
            tooltip_mobile.addClass('t978__tooltip-menu_mobile');

            t978_showTooltipmenu(curAnchor, tooltip_mobile, vIndent);
        }
        t978_addSubmenuEvents(tooltip_mobile, openOnClick);
    });
}

function t978_showTooltipmenu(curAnchor, tooltipmenu, vIndent) {
    if ($(window).width() <= 980) {
        tooltipmenu.insertAfter(curAnchor);
        tooltipmenu.css({
            position: 'static'
        });
        tooltipmenu.addClass('t978__tooltip-menu_show');
        if (tooltipmenu.closest('.t280').length > 0 || tooltipmenu.closest('.t450').length > 0 || tooltipmenu.closest('.t451').length > 0) {
            tooltipmenu.show();
        } else {
            tooltipmenu.slideDown();
        }

        curAnchor.addClass('t978__tm-link_active');

        if (window.lazy == 'y') {
            t_lazyload_update();
        }
    } else {
        t978_positionTooltipmenu(curAnchor, tooltipmenu, vIndent);
        if (window.lazy == 'y') {
            t_lazyload_update();
        }
    }
}

function t978_positionTooltipmenu(curAnchor, tooltipMenu, vIndent) {
    t978_positionTooltipmenuX(curAnchor, tooltipMenu);
    t978_positionTooltipmenuY(curAnchor, tooltipMenu, vIndent);

    tooltipMenu.fadeIn(0);
    tooltipMenu.addClass('t978__tooltip-menu_show');
    curAnchor.addClass('t978__tm-link_active');

}

function t978_positionTooltipmenuX(curAnchor, tooltipMenu) {
    var menu = tooltipMenu.find('.t978__menu');
    var corner = tooltipMenu.find('.t978__tooltip-menu-corner');
    var cornerBorder = tooltipMenu.find('.t978__tooltip-menu-corner-border');

    var winWidth = $(window).width();
    var menuWidth = menu.outerWidth();
    var tooltipmenuWidth = tooltipMenu.outerWidth();
    var anchorWidth = curAnchor.width();
    if (curAnchor.hasClass('t-btn')) {
        anchorWidth = curAnchor.outerWidth();
    }

    var anchorLeft = curAnchor.offset().left;
    var cornerLeft;
    var menuX, initialMenuX;

    var anchorCenter, menuCenter;

    var arrowHeight = 10;
    var menuPos = 'left';
    var menuWindowMargin = 10;
    var minMenuWidth = 200;

    initialMenuX = (anchorLeft + anchorWidth / 2) - menuWidth / 2;
    anchorX = anchorLeft;

    if ((initialMenuX + menuWidth) > winWidth - minMenuWidth) {
        menuPos = 'right';
        menu.css('order', '1');
        anchorX = winWidth - (anchorLeft + anchorWidth);

        menuX = winWidth - initialMenuX - tooltipmenuWidth;
        if (initialMenuX + tooltipmenuWidth > winWidth - menuWindowMargin) {
            menuX = menuWindowMargin;
        }
    } else {
        menuX = initialMenuX;
        if (initialMenuX < menuWindowMargin) {
            menuX = menuWindowMargin;
        }
    }

    cornerLeft = menuWidth / 2 - arrowHeight / 2;

    anchorCenter = anchorX + anchorWidth / 2;
    menuCenter = menuX + menuWidth / 2;

    if (menuCenter != anchorCenter) {
        if (menuX < anchorX) {
            cornerLeft = (anchorX - menuX) + anchorWidth / 2 - arrowHeight / 2;
        } else {
            cornerLeft = anchorWidth / 2 - arrowHeight / 2;
        }
    }

    corner.css(menuPos, cornerLeft);
    cornerBorder.css(menuPos, cornerLeft);

    tooltipMenu.css(menuPos, menuX);

}

function t978_positionTooltipmenuY(curAnchor, tooltipMenu, vIndent) {
    var tooltipmenuHeight = tooltipMenu.outerHeight();
    var winHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var anchorHeight = curAnchor.height();
    var menuFixed = tooltipMenu.attr('data-pos-fixed');

    var corner = tooltipMenu.find('.t978__tooltip-menu-corner');
    var cornerBorder = tooltipMenu.find('.t978__tooltip-menu-corner-border');

    var arrowHeight = 10;
    var vIndentDefault = 25;

    if (typeof vIndent != 'undefined' && vIndent != '') {
        vIndent = vIndent.replace('px', '') * 1;
        /*add arrow*/
        vIndent = vIndent + arrowHeight;
    } else {
        vIndent = vIndentDefault;
    }

    var posy;
    if (menuFixed == 'yes') {
        posy = (curAnchor.offset().top - scrollTop) + anchorHeight + vIndent;
        tooltipMenu.css('position', 'fixed');
    } else {
        posy = curAnchor.offset().top + anchorHeight + vIndent;
    }

    if (
        posy + tooltipmenuHeight > scrollTop + winHeight &&
        posy >= tooltipmenuHeight &&
        posy - scrollTop > tooltipmenuHeight
    ) {
        posy = Math.max(
            posy - tooltipmenuHeight - anchorHeight - vIndent * 2,
            scrollTop
        );
        corner
            .removeClass('t978__tooltip-menu-corner_bottom')
            .addClass('t978__tooltip-menu-corner_top');
        cornerBorder
            .removeClass('t978__tooltip-menu-corner-border_bottom')
            .addClass('t978__tooltip-menu-corner-border_top');
    } else {
        corner
            .removeClass('t978__tooltip-menu-corner_top')
            .addClass('t978__tooltip-menu-corner_bottom');
        cornerBorder
            .removeClass('t978__tooltip-menu-corner-border_top')
            .addClass('t978__tooltip-menu-corner-border_bottom');
    }
    tooltipMenu.css('top', posy);
}

function t978_hideTooltipmenu(tooltipmenu, link) {
    var menu = tooltipmenu.find('.t978__menu');
    var corner = tooltipmenu.find('.t978__tooltip-menu-corner');
    var cornerBorder = tooltipmenu.find('.t978__tooltip-menu-corner-border');
    var menuHookLink = link ? link : tooltipmenu.closest().find('.t978__tm-link_active');
    if (tooltipmenu.hasClass('t978__tooltip-menu_mobile')) {
        if (tooltipmenu.closest('.t280').length > 0 || tooltipmenu.closest('.t450').length > 0 || tooltipmenu.closest('.t451').length > 0) {
            tooltipmenu.hide(0, function () {
                tooltipmenu.remove();
            });

        } else {
            tooltipmenu.slideUp('normal', function () {
                tooltipmenu.remove();
            });
        }
        menuHookLink.removeClass('t978__tm-link_active');
        return;
    } else {
        var content = tooltipmenu.find('.t978__content');

        tooltipmenu.css({
            display: '',
            left: '',
            right: '',
            top: '',
            width: '',
        });
        menu.css('order', '');
        content.css({
            'overflow-y': '',
            height: '',
        });
        corner.css({
            left: '',
            right: ''
        });
        cornerBorder.css({
            left: '',
            right: ''
        });

        tooltipmenu.removeClass('t978__tooltip-menu_show');
    }
    $('.t978__tm-link_active').removeClass('t978__tm-link_active');
}

function t978_addSubmenuEvents(tooltipMenu, openOnClick) {
    var submenuLinks = tooltipMenu.find('.t978__menu-link');
    var submenuContainer = tooltipMenu.find('.t978__submenu-container');
    var submenuWrapper = tooltipMenu.find('.t978__submenu-wrapper');
    var submenuContent = tooltipMenu.find('.t978__submenu-content');
    var timer;
    var submenuOpened = false;

    submenuLinks.off();
    if ($(window).width() > 980) {
        if (openOnClick == 'on') {
            submenuLinks.on('click', function (e) {
                var submenuHook = $(this).attr('data-menu-submenu-hook');
                if (submenuHook) {
                    e.preventDefault();
                    if (submenuOpened) {
                        t978_resetSubmenu(submenuLinks, submenuWrapper, submenuContainer);
                        submenuOpened = false;
                    } else {
                        $(this).addClass('t978__menu-activelink');
                        t978_showSubmenu(tooltipMenu, submenuHook);
                        submenuOpened = true;
                    }
                }
            });
        } else {
            submenuLinks.add(submenuContent).on('mouseover', function (e) {
                if ($(e.target).is(submenuLinks.not('.t978__menu-activelink')) || $(e.target).parent().is(submenuLinks.not('.t978__menu-activelink'))) {
                    t978_resetSubmenu(submenuLinks, submenuWrapper, submenuContainer);
                }
                var submenuHook = $(this).attr('data-menu-submenu-hook');
                if (submenuHook) {
                    $(this).addClass('t978__menu-hoverlink');
                    t978_showSubmenu(tooltipMenu, submenuHook);
                }
                clearTimeout(timer);
            });
            submenuLinks.add(submenuContent).on('mouseout', function (e) {
                var submenuHook = $(this).attr('data-menu-submenu-hook');
                if (submenuHook) {
                    timer = setTimeout(function () {
                        t978_resetSubmenu(submenuLinks, submenuWrapper, submenuContainer);
                    }, 300);
                }
            });
        }
    }

    submenuLinks.on('click', function (e) {
        var submenuHook = $(this).attr('data-menu-submenu-hook');
        if (submenuHook) {
            e.preventDefault();
            if ($(window).width() <= 980) {
                if ($(this).hasClass('t978__menu-activelink')) {
                    t978_hideSubmenu(tooltipMenu, submenuHook);
                } else {
                    $(this).addClass('t978__menu-activelink');
                    t978_showSubmenu(tooltipMenu, submenuHook);
                    clearTimeout(timer);
                }
            }
        }
    })
}

function t978_showSubmenu(tooltipMenu, submenuHook) {
    var content = tooltipMenu.find('.t978__content');
    var submenuContainer = content.find('.t978__submenu-container');
    var submenuWrapper = content.find(
        '.t978__submenu-wrapper[data-submenu-hook="' + submenuHook + '"]'
    );
    var activeLinkWrapper = content
        .find('.t978__menu-link[data-menu-submenu-hook="' + submenuHook + '"]')
        .parent();

    if ($(window).width() <= 980) {
        submenuWrapper.insertAfter(activeLinkWrapper);
        if (content.closest('.t280').length > 0 || content.closest('.t450').length > 0 || content.closest('.t451').length > 0) {
            submenuContainer.addClass('t978__submenu_show');
            submenuWrapper.addClass('t978__submenu_show');
        } else {
            submenuWrapper.slideDown();
        }
    } else {
        submenuContainer.addClass('t978__submenu_show');
        submenuWrapper.addClass('t978__submenu_show');
    }

}

function t978_hideSubmenu(tooltipMenu, submenuHook) {
    var content = tooltipMenu.find('.t978__content');
    var submenuContainer = content.find('.t978__submenu-container');
    var submenuWrapper = content.find(
        '.t978__submenu-wrapper[data-submenu-hook="' + submenuHook + '"]'
    );
    var activeLink = content.find('.t978__menu-link[data-menu-submenu-hook="' + submenuHook + '"]');

    activeLink.removeClass('t978__menu-activelink');
    activeLink.removeClass('t978__menu-hoverlink');
    if ($(window).width() <= 980) {
        if (content.closest('.t280').length > 0 || content.closest('.t450').length > 0 || content.closest('.t451').length > 0) {
            submenuContainer.removeClass('t978__submenu_show');
            submenuWrapper.removeClass('t978__submenu_show');
        } else {
            submenuContainer.slideUp();
            submenuWrapper.slideUp();
        }
    } else {
        submenuContainer.removeClass('t978__submenu_show');
        submenuWrapper.removeClass('t978__submenu_show');
    }
}

function t978_resetSubmenu(submenuLinks, submenuWrapper, submenuContainer) {
    submenuLinks.each(function () {
        $(this).removeClass('t978__menu-activelink');
        $(this).removeClass('t978__menu-hoverlink');
    });
    if ($(window).width() <= 980) {
        submenuContainer.slideUp();
        submenuWrapper.slideUp();

    } else {
        submenuWrapper.each(function () {
            $(this).removeClass('t978__submenu_show');
        });
        submenuContainer.each(function () {
            $(this).removeClass('t978__submenu_show');
        });
    }
}

function t978_addArrow(recid, hookLinks) {
    var arrow = $('#rec' + recid + ' .t978').attr('data-add-arrow');
    if (typeof arrow == 'undefined' || arrow == '') {
        return;
    }
    hookLinks.each(function (i, el) {
        $(el).append('<div class="t978__arrow"></div>');
    });
}

function t978_findActiveItem() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    var hash = window.location.hash;
    if (url.substr(url.length - 1) == '/') {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == '/') {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == '/') {
        pathname = pathname.slice(1);
    }
    if (pathname == '') {
        pathname = '/';
    }
    $("a[href='" + url + "'].t978__menu-link").addClass('t-active');
    $("a[href='" + url + "/'].t978__menu-link").addClass('t-active');
    $("a[href='" + pathname + "'].t978__menu-link").addClass('t-active');
    $("a[href='/" + pathname + "'].t978__menu-link").addClass('t-active');
    $("a[href='" + pathname + "/'].t978__menu-link").addClass('t-active');
    $("a[href='/" + pathname + "/'].t978__menu-link").addClass('t-active');
    if (hash) {
        $("a[href='" + hash + "'].t978__menu-link").addClass('t-active');
    }

    $("a[href='" + url + "'].t978__submenu-link").addClass('t-active');
    $("a[href='" + url + "/'].t978__submenu-link").addClass('t-active');
    $("a[href='" + pathname + "'].t978__submenu-link").addClass('t-active');
    $("a[href='/" + pathname + "'].t978__submenu-link").addClass('t-active');
    $("a[href='" + pathname + "/'].t978__submenu-link").addClass('t-active');
    $("a[href='/" + pathname + "/'].t978__submenu-link").addClass('t-active');
    if (hash) {
        $("a[href='" + hash + "'].t978__submenu-link").addClass('t-active');
    }
} 
function t979_init(recid, rowheight, guttersizer) {
    var rec = $('#rec' + recid);
    var grid = rec.find('.t979__grid');
    var item = rec.find('.t979__grid-item');
    var images = rec.find('.t979__image');
    var overlay = rec.find('.t979__overlay');
    
    if (guttersizer === '') {
        guttersizer = 0;
    }

    t979_reverse(grid, item);

    t_onFuncLoad('imagesLoaded', function () {
        grid.imagesLoaded(function (instance, image) {
            t_throttle(t979_initMasonry(rec, recid, grid, rowheight, guttersizer));
            images.each(function () {
                $(this).attr('src', $(this).attr('data-original'));
                $(this).show();
            });
            setTimeout(function () {
                t979_showOverlay(overlay, item);
            }, 500);
        });
    });

    rec.find('.t979').bind('displayChanged', function () {
        t_throttle(t979_initMasonry(rec, recid, grid, rowheight, guttersizer));
    });

    $(window).bind('resize', function () {
        if (typeof window.noAdaptive != "undefined" && window.noAdaptive == true && $isMobile) {
            return;
        }
        t_throttle(t979_initMasonry(rec, recid, grid, rowheight, guttersizer));
    });

    if (overlay.hasClass('t979__overlay_preview')) {
        setTimeout(function () {
            t979_showOverlay(overlay, item);
        }, 1000);
    }
}

function t979_showOverlay(overlay, item) {

    if ($(window).width() >= 1024) {
        overlay.css('display', 'block');
    } else {
        item.click(function () {
            if ($(this).find('.t979__overlay').css('opacity') == '0') {
                overlay.css('opacity', '0');
                $(this).find('.t979__overlay').css('opacity', '1');
            } else {
                $(this).find('.t979__overlay').css('opacity', '0');
            }
        });
    }
}

function t979_reverse(grid, item) {
    if (grid.length > 0 && grid.hasClass('t979__grid_reverse')) {
        grid.append(function () {
            return $(this).children().get().reverse();
        });
    }
}


function t979_initMasonry(rec, recid, grid, rowheight, guttersizer) {
    var containerWidth = grid.width();
    var gutterSizer = parseInt(guttersizer, 10);
    var heightSizer = parseInt(rowheight, 10);
    
    var imageWidths = t979_getImageWidths(grid, heightSizer);
    var rows = t979_divideRows(imageWidths, containerWidth);
    var heights = [];

    t979_fitItemsByWidth(rows, heights, containerWidth, heightSizer, gutterSizer);
    t979_updateItems(grid, rows, heights, gutterSizer);
    t979_updateGridHeight(grid, heights, gutterSizer);
}

function t979_getImageWidths(grid, heightSizer) {
    var imageWidths = [];
    
    grid.find('.t979__image').each(function () {
        imageWidths.push(this.naturalWidth * heightSizer / this.naturalHeight);
    });
    
    return imageWidths;
}

function t979_divideRows(imageWidths, containerWidth) {
    var rows = [];
    var curRow = 0;
    var rowWidth = 0;
    
    imageWidths.forEach(function (item) {
        rowWidth += item;

        if (typeof rows[curRow] == 'undefined') {
            rows[curRow] = [];
        }
        rows[curRow].push(item);

        if (rowWidth >= containerWidth) {
            curRow += 1;
            rowWidth = 0;
        }
    });
    
    return rows;
}

function t979_fitItemsByWidth(rows, heights, containerWidth, heightSizer, gutterSizer) {
    rows.forEach(function (row, index) {
        var sumWidth = 0;
        var thresholdRatio = 1.5;
        var rowWidth = containerWidth - gutterSizer * (row.length - 1);

        row.forEach(function (width) {
            sumWidth += width;
        });

        var ratio = rowWidth / sumWidth;
        if (ratio < thresholdRatio) {
            row.forEach(function (width, curRow) {
                width *= ratio;
                row[curRow] = width;
            });

            heights.push(heightSizer * ratio);
        } else {
            heights.push(heightSizer);
        }

        sumWidth = 0;

        row.forEach(function (width) {
            sumWidth += width;
        });
    });
}

function t979_updateItems(grid, rows, heights, gutterSizer) {
    var curRow = 0,
        curCol = 0,
        top = 0,
        left = 0,
        width = 0;
        
    grid.find('.t979__grid-item').each(function () {
        if (curCol >= rows[curRow].length) {
            top += heights[curRow];
            curRow++;
            curCol = 0;

            if (curRow !== 0) {
                top += gutterSizer;
            };

            left = 0;
        }
        left += rows[curRow][curCol - 1] ? rows[curRow][curCol - 1] + gutterSizer : 0;
        width = rows[curRow][curCol];
        height = heights[curRow];

        $(this).css({
            'top': top,
            'left': left,
            'width': width,
            'height': height
        });
        curCol++;
    });
}

function t979_updateGridHeight(grid, heights, gutterSizer) {
    var sumHeight = heights.reduce(function (cur, acc) {
        return cur + acc + gutterSizer;
    }, 0);
    sumHeight -= gutterSizer;
    grid.css('height', sumHeight);
} 
function t982_init(recid){
	var rec = $('#rec' + recid);
    var social = rec.find('.t982__socials');
    var cards = rec.find('.t982__itemwrapper');
    
	if (typeof social !== 'undefined' && social.length > 0) {
		social.each(function() {
		    var $this = $(this);
			var socialAttr = $this.attr('data-social-links');
			var links;
			$this.removeAttr('data-social-links');
			if (typeof socialAttr !== 'undefined') {
				links = socialAttr.split(',');
				links.forEach(function(link) {
					t982_addSocialsItem(link.trim(), $this);
				});
			}
		});
	}
	
	t982_setEqualHeight(cards);
	
	rec.find('.t982').bind('displayChanged', t_throttle(function () {
        t982_setEqualHeight(cards);
    }));
}

function t982_addSocialsItem(link, socialWrapper) {
	var item = t982_findSocialsItem(link);
	if (item) {
		var block = '';
		block = '<div class="t982__socials-item">';
		block += '<a href="' + link + '"  class="t982__socials-link" target="_blank" rel="nofollow noopener noreferrer">';
		block += item.title;
		block += '</a>';
		block += '</div>';

		socialWrapper.append(block);
	}
}
function t982_findSocialsItem(link) {
	var socials = [{
		title: 'Facebook',
		str: ['facebook', 'fb.com']
	},{
		title: 'Twitter',
		str: ['twitter']
	},{
		title: 'Vkontakte',
		str: ['vk.com', 'vk.me']
	},{
		title: 'Odnoklassniki',
		str: ['ok.ru']
	},{
		title: 'Behance',
		str: ['behance']
	},{
		title: 'Vimeo',
		str: ['vimeo']
	},{
		title: 'YouTube',
		str: ['youtube', 'youtu.be']
	},{
		title: 'Instagram',
		str: ['instagram']
	},{
		title: 'Pinterest',
		str: ['pinterest']
	},{
		title: 'LinkedIn',
		str: ['linkedin']
	},{
		title: 'SoundCloud',
		str: ['soundcloud']
	},{
		title: 'Telegram',
		str: ['telegram', 't.me']
	},{
		title: 'WhatsApp',
		str: ['wa.me']
	}];

	var socialsItem;
	socials.forEach(function(item) { 
        item.str.forEach(function(s) {
            if (link.indexOf(s) !== -1) {
                socialsItem = item;
            }
        });
	});
	return socialsItem;
}

function t982_setEqualHeight(cards) {
    var maxItemHeight = 0;
    cards.each(function() {
        if ($(this).height() == 0) {
            $(this).height('auto');
        }
        
		if ($(this).height() > maxItemHeight) { 
			maxItemHeight = $(this).height(); 
		}

        if ($(window).width() >= 960){
            $(this).css('height', maxItemHeight); 
        } else {
            $(this).css('height', 'auto');    
        }
    });
} 
function t983_init(recid) {
    var rec = $('#rec' + recid);

    t983_unifyHeights(recid);
    t983_translateBlock(recid);

    $(window).on('resize', t_throttle(function () {
        if (typeof window.noAdaptive != 'undefined' && window.noAdaptive == true && window.isMobile) { return; }
        t983_unifyHeights(recid);
        t983_translateBlock(recid);
    }));

    $(window).on('load', function () {
        t983_unifyHeights(recid);
        t983_translateBlock(recid);
    });

    rec.find('.t983').on('displayChanged', t_throttle(function () {
        t983_unifyHeights(recid);
        t983_translateBlock(recid);
    }));
}


function t983_translateBlock(recid) {
    var el = $('#rec' + recid);
    var blockHover = el.find('.t983__card-block_hover');
    var wrapMarginBottom = 35;
    var isMobile = window.isMobile || $(window).width() < 960;

    blockHover.each(function () {
        var block = $(this);
        var blockWrapper = block.parents('.t983__card-block-wrapper');
        var colWrapHeight = block.parents('.t983__card').height();
        var diff = colWrapHeight - block.outerHeight() - wrapMarginBottom * 2;
        var blockDiff = block.find('.t983__card-hide').outerHeight();

        blockWrapper.css('transform', 'translateY(' + diff + 'px)');
        if (!isMobile) {
            block.css('transform', 'translateY(' + blockDiff + 'px)');
        } else {
            block.css('transform', '');
        }
    });

    if (blockHover.length === 0) {
        var row = (isMobile ? el.find('.t983__container') : el.find('.t983__row'));

        row.each(function () {
            var block = $(this).find('.t983__card-block');
            var maxHeightInRow = 0;
            var colWrapHeight = block.parents('.t983__card').height();

            block.each(function () {
                var blockDescHeight = $(this).find('.t983__card-hide').outerHeight();

                if (blockDescHeight > maxHeightInRow) {
                    maxHeightInRow = blockDescHeight;
                }
            });

            block.each(function () {
                var blockTitleHeight = $(this).find('.t983__card-show').outerHeight();

                var diff = colWrapHeight - blockTitleHeight - maxHeightInRow - wrapMarginBottom * 2;
                $(this).css('transform', 'translateY(' + diff + 'px)');
            });
        });
    }
}

function t983_unifyHeights(recid) {
    var el = $('#rec' + recid);
    el.find('.t983 .t-container .t983__row').each(function () {
        var highestBox = 0;
        var currow = $(this);
        var curwidth = currow.find('.t983__card').width();
        var ratio = el.find('.t983__container').attr('data-ratio');
        var minHeightFromRatio = 0;

        switch (ratio) {
            case '16_9':
                minHeightFromRatio = curwidth * 0.5625;
                break;
            case '4_3':
                minHeightFromRatio = curwidth * 0.75;
                break;
            case '3_2':
                minHeightFromRatio = curwidth * 0.6666;
                break;
            case '1_1':
                minHeightFromRatio = curwidth;
                break;
            case '2_3':
                minHeightFromRatio = curwidth * 1.5;
                break;
            case '3_4':
                minHeightFromRatio = curwidth * 1.3333;
                break;
            case '9_16':
                minHeightFromRatio = curwidth * 1.7777;
                break;
        }

        currow.find('.t983__card-content').each(function () {
            var cardContent = $(this);
            var colHeight = cardContent.outerHeight();
            if (colHeight > highestBox) {
                highestBox = colHeight;
            }
        });

        if (highestBox > minHeightFromRatio) {
            currow.find('.t983__card-wrapper').css('padding-bottom', highestBox + 'px');
        } else {
            currow.find('.t983__card-wrapper').css('padding-bottom', '');
        }
    });
} 
function t985_init(recid, searchVariants) {
    var rec = $('#rec' + recid);

    if (searchVariants.length > 0) {
        t985_addSearchVariants(recid, searchVariants);
    }
    
    rec.find('.t985__search-widget-icon').on('click', function() {
        t985_showSearch(rec); 
    });
    
    rec.find('.t985__close-icon').on('click', function() {
        t985_hideSearch(rec); 
    });
    
    rec.find('.t985__overlay').on('click', function(e) {
       var target = $(e.target);
       
       if(!target.is(".t985__widgetheader") && !target.parents().is(".t985__widgetheader")) {
           t985_hideSearch(rec); 
       }
    });
}

function t985_addSearchVariants(recid, searchVariants) {
    var rec = $('#rec' + recid);
    var searchArray = searchVariants.split(',');
    var container = rec.find('.t985__searchvariants');
    for (var variant of searchArray) {
        container.append('<div class="t985__searchvariant t-text t-text_xs">' + variant + '</div>');
    }
}

function t985_showSearch(rec) {
    rec.find('.t985__overlay').show();
    rec.find('.t985__search-widget-icon').hide();
}

function t985_hideSearch(rec) {
    rec.find('.t985__overlay').hide();
    rec.find('.t985__search-widget-icon').show();
}

 
function t986_init(recid) {
	var el = $('#rec' + recid);
	var openBtn = el.find('.t986__playbutton');
	var closeBg = el.find('.t986__closevideo-bg');
	openBtn.on('click', function (e) {
		e.preventDefault();
		t986_showVideo(recid);
	});
	closeBg.on('click', function () {
		t986_hideVideo(recid);
	});
}

function t986_showVideo(recid) {
	var el = $('#rec' + recid);
	var videourl = '';

	var youtubeid = el.find('.t986__video-container').attr('data-content-popup-video-url-youtube');
	if (youtubeid > '') {
		videourl = 'https://www.youtube.com/embed/' + youtubeid;
	}

	$('body').addClass('t986__overflow');
	el.find('.t986__cover').addClass('t986__hidden');
	el.find('.t986__video-container').removeClass('t986__hidden');
	el.find('.t986__video-carier').html('<iframe id="youtubeiframe' + recid + '" class="t986__iframe" width="100%" height="540" src="' + videourl + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe><a class="t986__close-link"><div class="t986__close"></div></a>');

	$('.t986__close-link').on('click', function () {
		t986_hideVideo(recid);
	});
}

function t986_hideVideo(recid) {
    var el = $('#rec' + recid);
	$('body').removeClass('t986__overflow');
	el.find('.t986__cover').removeClass('t986__hidden');
	el.find('.t986__video-container').addClass('t986__hidden');
	el.find('.t986__video-carier').html('<div class="t986__video-bg2"></div>');
}
 
function t988_init(recid, donation) {
    var el = $('#rec' + recid),
        priceInput = el.find('.t988__price'),
        priceBtn = el.find('.t988__pricebtn'),
        priceBtnOther = el.find('.t988__price-other'),
        submitBtn = el.find('.t988__submit');
    
    priceBtn.each(function() {
        if ($(this).hasClass('t988__pricebtn_active')) {
            priceInput.val($(this).val());
        }
    });

    priceBtn.on('click', function() {
        if (!$(this).hasClass('t988__price-other')) {
            priceInput.val($(this).val());
            priceInput.hide();
        }
        priceBtn.removeClass('t988__pricebtn_active');
        $(this).addClass('t988__pricebtn_active');
    });
    
    priceBtnOther.on('click', function() {
        priceInput.val('').show().focus();
    });
    priceInput.on('focus', function() {
        $(this).removeClass('t988__price_error');
    });
    submitBtn.on('click', function(e){
        var link = $(this).parent(),
            amount = priceInput.val(),
			match = amount.match(/(\d+\.?\,?\d*)/g),
            href;

        if(!amount || amount==0 || !match || match[0]==0) {
            priceInput.addClass('t988__price_error');
            submitBtn.addClass('t988__submit_error');
            setTimeout(function() {
                submitBtn.removeClass('t988__submit_error');
            }, 300);
            return false;
        } else {
            href = '#order:' + donation + '=' + match[0];
            $(link).attr('href', href);
        }
    });
} 
function t989_init(recid) {
	var el = $('#rec' + recid);
	var wrapper = el.find('.t-slds__thumbsbullet-wrapper');
	var activeThumbId = parseInt(wrapper.attr('data-thumbs-active'), 10);

	$(el.find('.t-slds__item')[activeThumbId]).addClass('t-slds__item_active');
	$(el.find('.t-slds__thumbsbullet')[activeThumbId]).addClass('t-slds__bullet_active');

	t_onFuncLoad('t_sldsInit', function () {
		t_sldsInit(recid);
		t989_checkArrowsDisplay(el);
	});

	if (wrapper.attr('data-thumbs-timeout') && wrapper.attr('data-thumbs-timeout') > 0) {
		t989_thumbs_initAutoPlay(el);
	}
	$(window).bind('resize', t_throttle(function () {
			t989_checkArrowsDisplay(el);
			t_slds_updateSlider(recid);
			if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
                t_onFuncLoad('t_lazyload_update', function () {
                    t_lazyload_update();
                });
            }
		}, 300)
	);

	el.find('.t989').bind('displayChanged', function () {
		t_onFuncLoad('t_slds_updateSlider', function () {
			t_slds_updateSlider(recid);
		});
		if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
            t_onFuncLoad('t_lazyload_update', function () {
                t_lazyload_update();
            });
        }
	});

	t989_addEvents(el);
}

function t989_addEvents(el) {
	var wrapper = el.find('.t-slds__thumbsbullet-wrapper');
	el.find('.t989__arrow-right').click(function () {
		t989_next(el);
		if (wrapper.attr('data-thumbs-timeout') && wrapper.attr('data-thumbs-timeout') > 0) {
    		t989_thumbs_initAutoPlay(el);
    	}
	});

	el.find('.t989__arrow-left').click(function () {
		t989_prev(el);
		if (wrapper.attr('data-thumbs-timeout') && wrapper.attr('data-thumbs-timeout') > 0) {
    		t989_thumbs_initAutoPlay(el);
    	}
	});
	
	el.find('.t989__mobile-arrows .t-slds__arrow_wrapper-right').click(function () {
		t989_next(el);
		if (wrapper.attr('data-thumbs-timeout') && wrapper.attr('data-thumbs-timeout') > 0) {
    		t989_thumbs_initAutoPlay(el);
    	}
	});

	el.find('.t989__mobile-arrows .t-slds__arrow_wrapper-left').click(function () {
		t989_prev(el);
		if (wrapper.attr('data-thumbs-timeout') && wrapper.attr('data-thumbs-timeout') > 0) {
    		t989_thumbs_initAutoPlay(el);
    	}
	});

	el.find('.t-slds__thumbsbullet').click(function () {
		t989_slideIntoView(el, $(this));
		if (wrapper.attr('data-thumbs-timeout') && wrapper.attr('data-thumbs-timeout') > 0) {
    		t989_thumbs_initAutoPlay(el);
    	}
	});
}

function t989_checkArrowsDisplay(el) {
	var container = el.find('.t989__thumbsbullets-container'),
		lastSlide = el.find('.t-slds__thumbsbullet').last(),
		leftArrow = el.find('.t989__arrow-left'),
		rightArrow = el.find('.t989__arrow-right'),
		thumbsWithCycle = el.find('.t-slds__thumbsbullet-wrapper').attr('data-thumbs-cycle') == 'yes',
		activeThumb = parseInt(el.find('.t-slds__thumbsbullet-wrapper').attr('data-thumbs-active'), 10),
		containerRight, lastSlideRight;
	if (container.length > 0) {
		containerRight = container.width() + container.offset().left;
	}
	if (lastSlide.length > 0) {
		lastSlideRight = lastSlide.width() + lastSlide.offset().left;
	}

	if (thumbsWithCycle) {
		leftArrow.show();
		rightArrow.show();
	} else {
		activeThumb > 0 ? leftArrow.show() : leftArrow.hide();
		activeThumb < el.find('.t-slds__thumbsbullet').length - 1 ? rightArrow.show() : rightArrow.hide();
	}
}
function t989_slideIntoView(el, slide) {
	var container = el.find('.t989__thumbsbullets-container'),
		containerRight = container.width() + container.offset().left,
		wrapper = el.find('.t-slds__thumbsbullet-wrapper'),
		thumbsWithCycle = wrapper.attr('data-thumbs-cycle') == 'yes';
	var hiddenPart, direction;

	if (slide.width() + slide.offset().left > containerRight) {
		hiddenPart = slide.offset().left + slide.width() - containerRight;
		direction = 'right';
	}

	if (slide.offset().left < container.offset().left) {
		hiddenPart = container.offset().left - slide.offset().left + 12;
		direction = 'left';
	}
	var slideId = parseInt(slide.attr('data-slide-bullet-for'), 10) - 1;
	wrapper.attr('data-thumbs-active', slideId);
	if (hiddenPart) {
		t989_slide(el, direction, hiddenPart);
	}
	
	if (!thumbsWithCycle) {
	    setTimeout(function() {
            t989_checkArrowsDisplay(el);
	    }, 300);
	}
}
function t989_next(el) {
	var wrapper = el.find('.t-slds__thumbsbullet-wrapper'),
		thumbsbullet = el.find('.t-slds__thumbsbullet'),
		activeThumbId = parseInt(wrapper.attr('data-thumbs-active'), 10),
		thumbsWithCycle = wrapper.attr('data-thumbs-cycle') == 'yes';

	if (activeThumbId < thumbsbullet.length) {
		activeThumbId++;
	}
	if (activeThumbId == thumbsbullet.length && thumbsWithCycle) {
		activeThumbId = 0;
	}
		
	var slide = $(thumbsbullet[activeThumbId]);
	slide.triggerHandler('click');
}
function t989_prev(el) {
	var wrapper = el.find('.t-slds__thumbsbullet-wrapper'),
		thumbsbullet = el.find('.t-slds__thumbsbullet'),
		activeThumbId = parseInt(wrapper.attr('data-thumbs-active'), 10),
		thumbsWithCycle = wrapper.attr('data-thumbs-cycle') == 'yes';

	if (activeThumbId > 0) {
		activeThumbId--;
	} else {
		if (thumbsWithCycle) {
			activeThumbId = thumbsbullet.length - 1;
		}
	}

	var slide = $(thumbsbullet[activeThumbId]);
	slide.triggerHandler('click');
	wrapper.attr('data-thumbs-active', activeThumbId);
}
function t989_slide(el, direction, offset) {
	var wrapper = el.find('.t-slds__thumbsbullet-wrapper'),
		dataSlideOffset = parseInt(wrapper.attr('data-thumbs-offset'), 10),
		slideOffset,
		thumbsWithCycle = el.find('.t-slds__thumbsbullet-wrapper').attr('data-thumbs-cycle') == 'yes';

	if (direction === 'right') {
		slideOffset = dataSlideOffset + Math.abs(offset) + 12;
	} else {
		slideOffset = dataSlideOffset > Math.abs(offset) ? dataSlideOffset - Math.abs(offset) : 0;
	}

	slideOffset = parseInt(slideOffset, 10);

	wrapper.css({ transform: 'translate(-' + slideOffset + 'px, 0)' }).css('transition-duration', '.3s');
	wrapper.attr('data-thumbs-offset', slideOffset);

	if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
		t_onFuncLoad('t_lazyload_update', function () {
			t_lazyload_update();
		});
	}
}
function t989_thumbs_initAutoPlay(el) {
	var thumbsWrapper = el.find('.t-slds__thumbsbullet-wrapper'),
		thumbsTimeOut = parseFloat(thumbsWrapper.attr('data-thumbs-timeout'), 10),
		thumbsIntervalIdAttr = thumbsWrapper.attr('data-thumbs-interval-id'),
		activeThumb = parseFloat(thumbsWrapper.attr('data-thumbs-active'), 10),
		totalThumbs = el.find('.t-slds__thumbsbullet').length - 1,
		thumbsWithCycle = el.find('.t-slds__thumbsbullet-wrapper').attr('data-thumbs-cycle') == 'yes';

	if (thumbsIntervalIdAttr) {
		clearInterval(thumbsIntervalIdAttr);
	}

	var thumbsIntervalId = setInterval(function () {
		t989_next(el);
	}, thumbsTimeOut);
	thumbsWrapper.attr('data-thumbs-interval-id', thumbsIntervalId);
	
	if (totalThumbs == activeThumb && !thumbsWithCycle) {
	    if (thumbsIntervalIdAttr) {
    		clearInterval(thumbsIntervalId);
    	}
	}
} 
function t992_init(recid) {
    t992_highlight();
    t992_checkAnchorLinks(recid);
}
function t992_highlight() {
	var url = window.location.href;
	var pathname = window.location.pathname;
	var hash = window.location.hash;
	if (url.substr(url.length - 1) == '/') {
		url = url.slice(0, -1);
	}
	if (pathname.substr(pathname.length - 1) == '/') {
		pathname = pathname.slice(0, -1);
	}
	if (pathname.charAt(0) == '/') {
		pathname = pathname.slice(1);
	}
	if (pathname == '') {
		pathname = '/';
	}
	$(".t992__list-item a[href='" + url + "'] ").addClass('t-active');
	$(".t992__list-item a[href='" + url + "/']").addClass('t-active');
	$(".t992__list-item a[href='" + pathname + "']").addClass('t-active');
	$(".t992__list-item a[href='/" + pathname + "']").addClass('t-active');
	$(".t992__list-item a[href='" + pathname + "/']").addClass('t-active');
	$(".t992__list-item a[href='/" + pathname + "/']").addClass('t-active');
	if (hash) {
		$(".t992__list-item a[href='" + hash + "']").addClass('t-active');
	}
}

function t992_checkAnchorLinks(recid) {
	var navLinks = $('#rec' + recid + " .t992__list-item a:not(.tooltipstered)[href*='#']");
	if (navLinks.length > 0) {
		t992_catchScroll(navLinks);
	}
}

function t992_catchScroll(navLinks) {
	var clickedSectionId = null,
		sections = new Array(),
		sectionIdTonavigationLink = [],
		interval = 100,
		lastCall,
		timeoutId;

	navLinks = $(navLinks.get().reverse());
	navLinks.each(function () {
		var cursection = t992_getSectionByHref($(this));
		if (typeof cursection.attr('id') != 'undefined') {
			sections.push(cursection);
		}
		sectionIdTonavigationLink[cursection.attr('id')] = $(this);
	});
	t992_updateSectionsOffsets(sections);
	sections.sort(function (a, b) {
		return b.attr('data-offset-top') - a.attr('data-offset-top');
	});
	$(window).bind('resize', t_throttle(function () {
		t992_updateSectionsOffsets(sections);
	}, 200)
	);
	$('.t992').bind('displayChanged', function () {
		t992_updateSectionsOffsets(sections);
	});
	setInterval(function () {
		t992_updateSectionsOffsets(sections);
	}, 5000);
	t992_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);

	navLinks.click(function () {
		var clickedSection = t992_getSectionByHref($(this));
		if (!$(this).hasClass('tooltipstered') && typeof clickedSection.attr('id') != 'undefined') {
			navLinks.removeClass('t-active');
			$(this).addClass('t-active');
			clickedSectionId = t992_getSectionByHref($(this)).attr('id');
		}
	});
	$(window).scroll(function () {
		var now = new Date().getTime();
		if (lastCall && now < lastCall + interval) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(function () {
				lastCall = now;
				clickedSectionId = t992_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
			}, interval - (now - lastCall));
		} else {
			lastCall = now;
			clickedSectionId = t992_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
		}
	});
}

function t992_updateSectionsOffsets(sections) {
	$(sections).each(function () {
		var curSection = $(this);
		curSection.attr('data-offset-top', curSection.offset().top);
	});
}

function t992_getSectionByHref(curlink) {
	var curLinkValue = curlink.attr('href').replace(/\s+/g, '').replace(/.*#/, '');
	if (curlink.is('[href*="#rec"]')) {
		return $(".r[id='" + curLinkValue + "']");
	} else {
		return $(".r[data-record-type='215']").has(
			"a[name='" + curLinkValue + "']"
		);
	}
}

function t992_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId) {
	var scrollPosition = $(window).scrollTop(),
		valueToReturn = clickedSectionId;
	/*if first section is not at the page top (under first blocks)*/
	if (sections.length != 0 && clickedSectionId == null && sections[sections.length - 1].attr('data-offset-top') > scrollPosition + 300) {
		navLinks.removeClass('t-active');
		return null;
	}

	$(sections).each(function (e) {
		var curSection = $(this),
			sectionTop = curSection.attr('data-offset-top'),
			id = curSection.attr('id'),
			navLink = sectionIdTonavigationLink[id];
		if (scrollPosition + 300 >= sectionTop || (sections[0].attr('id') == id && scrollPosition >= $(document).height() - $(window).height())) {
			if (clickedSectionId == null && !navLink.hasClass('t-active')) {
				navLinks.removeClass('t-active');
				navLink.addClass('t-active');
				valueToReturn = null;
			} else {
				if (clickedSectionId != null && id == clickedSectionId) {
					valueToReturn = null;
				}
			}
			return false;
		}
	});
	return valueToReturn;
}
 
function t994_init(recid) {
	var el = $('#rec' + recid),
		container = el.find('.t994__slidecontainer'),
		item = el.find('.t994__item'),
		slide = el.find('.t994__item-wrapper'),
		totalSlides = item.length,
		slideWidth,
		isPreview = el.find('.t994').hasClass('t994_preview');

    if ($(window).width() > 960) {
        var aspectRatio = 9/16;
        slideWidth = slide.height() * aspectRatio;
        slide.css('width', slideWidth + 'px');
        el.find('.t994__width-wrapper').css('max-width', slideWidth + 40 + 'px');
    } else {
        container.css('transform', 'translate(0, 0)');
        container.attr('data-slide-offset', '0');
        t994_calcHeight(el);
    }
    
	if (container.attr('data-slider-timeout') && parseFloat(container.attr('data-slider-timeout')) > 0) {
		t994_initAutoPlay(el);
	}
	
    $('.t994').bind('displayChanged', function() {
        var sliderWidth = item.outerWidth();
        if ($(window).width() > 960) {
            var aspectRatio = 9/16;
            slideWidth = slide.height() * aspectRatio;
            slide.css('width', slideWidth + 'px');
            el.find('.t994__width-wrapper').css('max-width', slideWidth + 40 + 'px');
        }
        
        container.css('transition-duration', '0s');
        item.css('transition-duration', '0s');
        container.css('transform', 'translate(0, 0)');
        t994_goToSlide(el, 0);
        container.attr('data-slide-pos', '0');
    });
    
	$(window).bind('resize orientationchange', function() {
    	var id = parseInt(container.attr('data-slide-pos')),
            slide = el.find('.t994__item'),
    		sliderWidth = slide.outerWidth(),
    	    offset = sliderWidth * id;
            
        container.css('transition-duration', '0s');
        slide.css('transition-duration', '0s');
    	container.css({ transform: 'translate(-' + offset + 'px, 0)' });
    	t994_calcHeight(el);
	});

    if (isPreview || !container.attr('data-slider-timeout') || parseFloat(container.attr('data-slider-timeout')) === 0) {
        el.find('.t994__loader').slice(0, parseInt(container.attr('data-slide-pos')) + 1).find('.t994__loader-inner').width('100%');
    }

    el.find('.t-slds__arrow_wrapper-right').click(function() {
		t994_slide(el, 'right');
	});

	el.find('.t-slds__arrow_wrapper-left').click(function() {
		t994_slide(el, 'left');
	});
	
	el.find('.t994__loader').click(function() {
	    t994_goToSlide(el, $(this).index());
	});
	el.find('.t994__item').click(function() {
	    t994_goToSlide(el, $(this).index());
	});
    if ($(window).width() < 960) {
        t994_calcHeight(el);
        t994_initSliderSwipe(el);
    }
}
function t994_calcHeight(el) {
    var slidecontainer = el.find('.t994__slidecontainer'),
        widthwrapper = el.find('.t994__width-wrapper'),
        item = el.find('.t994__item'),
        itemwrapper = el.find('.t994__item-wrapper');
        
    if (window.isMobile) {
    	var height = document.documentElement.clientHeight;
    	slidecontainer.css('height', height);
    	widthwrapper.css('height', height);
    	item.css('height', height);
        itemwrapper.css('height', height);
    }
}
function t994_goToSlide(el, id) {
    var container = el.find('.t994__slidecontainer'),
        loaders = el.find('.t994__loader'),
        slide = el.find('.t994__item'),
        sliderLeft = container.attr('data-slide-offset'),
		sliderWidth = slide.outerWidth(),
		sliderTimeOut = container.attr('data-slider-timeout') ? parseFloat(container.attr('data-slider-timeout')) : 0,
		pos = parseInt(container.attr('data-slide-pos')),
		isPreview = el.find('.t994').hasClass('t994_preview');
    
    if (pos == id) {
        return;
    }

    $(loaders).find('.t994__loader-inner').stop();
    slide.removeClass('t-slds__item_active');
    $(slide[id]).addClass('t-slds__item_active');
    container.attr('data-slide-pos', id);
    var offset = sliderWidth * id;
    
    slide.css('transition-duration', '.3s');
	container.css({ transform: 'translate(-' + offset + 'px, 0)' }).css('transition-duration', '.3s');
	el.find('.t994__loader-inner').width('0');
	(isPreview || sliderTimeOut === 0) ? loaders.slice(0, id + 1).find('.t994__loader-inner').width('100%') : loaders.slice(0, id).find('.t994__loader-inner').width('100%');
	
	if (!isPreview && container.attr('data-slider-paused') == 'no') {
    	t994_playSlider(sliderTimeOut, el);
	}
	
	id == 0 ? el.find('.t-slds__arrow_wrapper-left').hide() : el.find('.t-slds__arrow_wrapper-left').show();
	
	id == slide.length - 1 ? el.find('.t-slds__arrow_wrapper-right').hide() : el.find('.t-slds__arrow_wrapper-right').show();

}
function t994_playSlider(time, el) {
	var sliderWrapper = el.find('.t994__slidecontainer'),
	    loader = el.find('.t994__loader'),
		loaderInner = el.find('.t994__loader-inner'),
		id = parseInt(sliderWrapper.attr('data-slide-pos')),
		currLoaderInner = $(loader[id]).find('.t994__loader-inner');
	
		el.find('.t994__playbtn').hide();
	    el.find('.t994__stopbtn').show();
		loaderInner.stop();
		if (time > 0) {
    		currLoaderInner.animate({
    			width: '100%'
    		}, time, 'linear', function() {
    			t994_slide(el, 'right');
    		});
		}
}

function t994_initAutoPlay(el) {
	var container = el.find('.t994__slidecontainer'),
		sliderTimeOut = container.attr('data-slider-timeout') ? parseFloat(container.attr('data-slider-timeout')) : 0,
		playBtn = el.find('.t994__playbtn'),
		stopBtn = el.find('.t994__stopbtn'),
		loader = el.find('.t994__loader'),
		currId = parseInt(container.attr('data-slide-pos'));

	t994_playSlider(sliderTimeOut, el);

	stopBtn.click(function(e) {
		$(this).hide();
		playBtn.show();

		$(loader).find('.t994__loader-inner').stop();
		container.attr('data-slider-paused', 'yes');
	});
	playBtn.click(function(e) {
		$(this).hide();
		stopBtn.show();
        
        currId = parseInt(container.attr('data-slide-pos'));
        var loaderWidth = $(loader[currId]).width(), 
		    progress = $(loader[currId]).find('.t994__loader-inner').width();
		t994_playSlider(sliderTimeOut - (progress / loaderWidth  * sliderTimeOut), el);
		container.attr('data-slider-paused', 'no');
	});
	
	if ($(window).width() < 960) {
	    container.on('touchstart', function(e) {
	        
    		$(loader).find('.t994__loader-inner').stop();
    		if ($(e.target).hasClass('t994__title') || $(e.target).hasClass('t994__descr')) {
    		    $(e.target).addClass('t994__txt-selectable');
    		}
    	});
    	container.on('touchend', function(e) {
    	    $('.t994__title').removeClass('t994__txt-selectable');
    	    $('.t994__descr').removeClass('t994__txt-selectable');
            currId = parseInt(container.attr('data-slide-pos'));
            var loaderWidth = $(loader[currId]).width(), 
        		progress = $(loader[currId]).find('.t994__loader-inner').width();
    		t994_playSlider(sliderTimeOut - (progress / loaderWidth * sliderTimeOut), el);
    	});
	}
}
function t994_slide(el, direction) {
	var container = el.find('.t994__slidecontainer'),
		sliderTimeOut = container.attr('data-slider-timeout') ? parseFloat(container.attr('data-slider-timeout')) : 0,
		pos = parseInt(container.attr('data-slide-pos'), 10),
		sliderLeft = container.attr('data-slide-offset'),
		item = el.find('.t994__item'),
		totalSlides = item.length,
		sliderWidth = item.outerWidth(),
		loader = el.find('.t994__loader'),
		loaderInner = el.find('.t994__loader-inner'),
		isPreview = el.find('.t994').hasClass('t994_preview');
    
    var loaderPos = sliderTimeOut > 0 ? pos : pos + 1;
	if (direction === 'right') {
		if (pos >= totalSlides-1) {
		    return;
		}
        el.find('.t-slds__arrow_wrapper-left').show();
		$(loader[loaderPos]).find(loaderInner).width('100%');
		container.attr('data-slide-pos', ++pos);
	} else {
        el.find('.t-slds__arrow_wrapper-right').show();
		$(loader[loaderPos]).find(loaderInner).width('0');
		container.attr('data-slide-pos', --pos);
        $(loader[--loaderPos]).find(loaderInner).width('0');
		if (pos < 0 || loaderPos < 0) {
		    return;
		}
	}
	
	if (pos == 0) {
	    el.find('.t-slds__arrow_wrapper-left').hide();
	}
	if (pos == totalSlides - 1) {
	    el.find('.t-slds__arrow_wrapper-right').hide();
	}
    item.removeClass('t-slds__item_active');
    $(item[pos]).addClass('t-slds__item_active');
    
    var offset = sliderLeft - sliderWidth * pos;
    item.css('transition-duration', '.3s');
	container.css({ transform: 'translate(' + offset + 'px, 0)' }).css('transition-duration', '.3s');
	
	if (!isPreview && sliderTimeOut > 0 && container.attr('data-slider-paused') == 'no') {
	    t994_playSlider(sliderTimeOut, el);
	}
	
	if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') {
		t_onFuncLoad('t_lazyload_update', function() {
			t_lazyload_update();
		});
	}
}

function t994_initSliderSwipe(el) {
    var sliderWrapper = el.find('.t994__slidecontainer'),
    	totalSlides = el.find('.t994__item').length,
    	timeout,
    	isScrolling = false;

    delete Hammer.defaults.cssProps.userSelect;

	hammer = new Hammer(sliderWrapper[0], {
		domEvents: true,
		inputClass: Hammer.TouchInput,
		recognizers: [
			[Hammer.Pan, {
				direction: Hammer.DIRECTION_HORIZONTAL
			}]
		]
	});

	$(window).bind('scroll', function() {
		isScrolling = true;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			isScrolling = false;
		}, 250);
	});

	if (totalSlides == 1) {
		return false;
	}

	hammer.on('pan', function(event) {
		if (isScrolling) {
			return false;
		}
		var sliderWrapper = el.find('.t994__slidecontainer');

		sliderWrapper.attr('data-slider-touch', 'yes');
		if (event.isFinal) {
			if (event.velocityX > 0.4) {
				t994_slide(el, 'left'); 
			} else if (event.velocityX < -0.4) {
				t994_slide(el, 'right');
			}
			sliderWrapper.attr('data-slider-touch', '');
		}
	});
} 
function t996_init(recid, pad) {
    var el = $('#rec' + recid);

    t996__calcCoverWidth(el, pad);
	$(window).bind('resize', t_throttle(function () {
		t996__calcCoverWidth(el, pad);
	}, 300)
	);
}

function t996__calcCoverWidth(el, pad) {
    var cover = el.find('.t996__cover-wrapper');
    var container = el.find('.t996__container');
    
    var coverWidth = $(window).width() - ($(window).width() - container.width())/2;
    // var coverWidth = pad ? outerWidth - 80 : outerWidth;
    
    cover.css('width', coverWidth);

} 
function t1000_init(recid, margins) {
    var rec = $('#rec' + recid);
    t1000_setImageHeight(recid, margins);

    $(window).bind('resize', t_throttle(function () {
        t1000_setImageHeight(recid, margins);
    }));

    rec.find('.t1000').bind('displayChanged', function () {
        t1000_setImageHeight(recid, margins);
    });
}

function t1000_setImageHeight(recid, margins) {
    var rec = $('#rec' + recid);
    var image = rec.find('.t1000__background-image');

    if ($(window).width() <= 960) {
        image.css('height', '');
        image.css('width', '');
    } else {
        image.css('height', 'calc(100% + ' + margins + 'px)');
    }
    image.css('visibility', '');
}