function cover_fixcontentheight(e,t){var o=$("#rec"+e),e=o.find(".t-cover").height(),i=o.find("div[data-hook-content]").outerHeight();300<i&&e<i+40?(cover_setRecalculatedCoverHeight(o,i),window.isMobile||setTimeout(function(){var e=o.find(".t-cover__carrier");0<e.find("iframe").length&&(console.log("correct video from cover_fixcontentheight"),setWidthHeightYoutubeVideo(e,i+"px")),0<e.find("video").length&&console.log("correct html5video from cover_fixcontentheight")},2e3),cover_updateResizeElem(o)):window.isMobile&&t&&(cover_setRecalculatedCoverHeight(o,i),cover_updateResizeElem(o))}function cover_setRecalculatedCoverHeight(e,t){1e3<(t+=120)&&(t+=100),console.log("auto correct cover height: "+t),e.find(".t-cover").height(t),e.find(".t-cover__filter").height(t),e.find(".t-cover__carrier").height(t),e.find(".t-cover__wrapper").height(t)}function cover_updateResizeElem(e){if("function"==typeof window.t_lazyload_updateResize_elem)try{window.t_lazyload_updateResize_elem(e.find(".t-cover__carrier"))}catch(e){console.log("error:"+e)}}function cover_checkIsFixForBackgroundNeeded(e){var t=document.body.querySelector("#rec"+e);if(t){var o,i,n,r=t.querySelector(".t-cover__carrier");null!==r&&(o=r.getAttribute("data-content-video-url-youtube"),i=r.getAttribute("data-content-video-url-mp4"),n=r.getAttribute("data-content-video-url-webm"));t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return!(window.isMobile||/Macintosh/.test(navigator.userAgent)&&"ontouchend"in document||!t||o||i||n||!r||"fixed"!==r.getAttribute("data-content-cover-parallax")||window["cover"+e+"fixbackgroundstyles"])}}function cover_fixBackgroundFixedNode(e){var t,o,i,n,r;cover_checkIsFixForBackgroundNeeded(e)&&(t=document.body.querySelector("#rec"+e),n=document.body.querySelector("#rec"+e+" .t-cover").parentNode,console.log("new fix node background-position: fixed"),window.cover_fixBackgroundStyles||(r=".t-cover__container {position: relative;}.t-cover__container .t-cover {clip: rect(0, auto, auto, 0);position: absolute;top: 0;left: 0;width: 100%;height: 100% !important;}.t-cover__container .t-cover .t-cover__carrier {position: fixed;display: block;top: 0;left: 0;width: 100%;height: 100%!important;background-size: cover;background-position: center center;transform: translateZ(0);will-change: transform;}",o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style"),o.appendChild(i),i.type="text/css",i.styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r)),window.cover_fixBackgroundStyles=!0),(i=document.createElement("div")).classList.add("t-cover__container"),n.prepend(i),n=(r=t.querySelector(".t-cover")).style.height,i.style.height=n,i.append(r),void 0!==(r={275:".t256__video-container",286:".t266__video-container",337:".t-container",906:".t906__video-container"}[t.getAttribute("data-record-type")])&&(r=t.querySelector(r),i.append(r)),window["cover"+e+"fixbackgroundnodes"]=!0)}function cover_fixBackgroundFixedStyles(e){var t,o,i=document.body.querySelector("#rec"+e);cover_checkIsFixForBackgroundNeeded(e)&&(console.log("new fix style background-position: fixed"),null!==(t=i.querySelector(".t-cover__container"))&&(i=(o=i.querySelector(".t-cover")).style.height,o.style.height=0,null!==t.style&&(t.style.height=i),window["cover"+e+"fixbackgroundstyles"]=!0))}function cover_onFuncLoad(t,o){"function"==typeof t?o():setTimeout(function e(){if("function"!=typeof t){if("complete"===document.readyState&&"function"!=typeof t)throw new Error(t+" is undefined");setTimeout(e,100)}else o()})}!function(a){var d=a(window),s=d.height();d.resize(function(){s=d.height()}),a.fn.parallax=function(n,e){var r,t=a(this),c=void 0!==document.body.style["-webkit-transform"];function o(){var i=d.scrollTop();t.each(function(){var e=a(this),t=e.offset().top,o=r(e),e=this.getBoundingClientRect();t+o<i||i+s<t||(e=-1*Math.round(e.top*n),c?this.style["-webkit-transform"]="translateY("+e+"px)":this.style.top=e+"px")})}c&&t.css("position","relative"),window.correctFirstTop4Parallax=function(){t.each(function(){t.offset().top})},window.correctFirstTop4Parallax(),r=e?function(e){return e.outerHeight(!0)}:function(e){return e.height()},(arguments.length<1||null===n)&&(n=.1),(arguments.length<2||null===e)&&(e=!0),o(),a(window).resize(window.correctFirstTop4Parallax),d.bind("scroll",o).resize(o),"complete"!==document.readyState&&window.addEventListener("load",function(){o()})}}(jQuery),function(b){window.cover_init=function(_){b(document).ready(function(){var i=document.body.querySelector("#coverCarry"+_),n=b(i),e=n.attr("data-content-cover-bg"),r=n.attr("data-content-cover-height"),c=n.attr("data-content-cover-parallax"),a=n.attr("data-content-video-url-mp4"),d=n.attr("data-content-video-url-webm"),t=n.attr("data-content-video-url-youtube"),o=n.attr("data-content-video-noloop"),s=n.attr("data-content-video-nomute"),l=n.attr("data-content-bg-base64"),u=n.attr("data-content-video-nocover"),e=e||"",r=r||"",c=c||"",a=a||"",d=d||"",o=o||"",s=s||"";t=(t=t||"")||"",l=l||"",u&&"yes"==u&&(t=d=a=""),!window.isMobile||""==d&&""==a&&""==t||n.css("background-image","url('"+e+"')"),setTimeout(function(){cover_fixcontentheight(_,!1),cover_fixBackgroundFixedStyles(_)},500),cover_fixBackgroundFixedNode(_);var h,v,f,g,p,w,m,y,u=b("#rec"+_).find("img[data-hook-clogo]");u.length&&u.load(function(){setTimeout(function(){cover_fixcontentheight(_,!1),cover_fixBackgroundFixedStyles(_)},500)}),window.isMobile&&b(window).on("orientationchange",function(){b(window).one("resize",function(){cover_fixcontentheight(_,!0),cover_fixBackgroundFixedStyles(_)})}),""===a&&""===d&&""===t||window.isMobile||(""!=t||""==a&&""==d?""!=t&&(n.css("background-color","#000000"),n.css("background-image",""),n.attr("data-content-cover-bg",""),p=0,(w=b(window)).scroll(function(){g&&window.clearTimeout(g),g=window.setTimeout(function(){var e,t,o;0<(p=n.find("iframe").length)||(e=n.offset().top,t=n.height(),e-500<(o=w.scrollTop())+w.height()&&o<=e+t+500&&processYoutubeVideo(i,r))},100)}),w.scroll()):(n.css("background-color","#000000"),n.css("background-image","url('https://tilda.ws/img/spinner-white.gif')"),n.css("background-size","auto"),n.attr("data-content-cover-bg",""),h=!1,h=""==o,v=!0,v=""==s,f="","fixed"==c&&(-1<r.indexOf("vh")&&100<parseInt(r)&&(n.css("height","100vh"),f="yes"),-1<r.indexOf("px")&&parseInt(r)>b(window).height()&&(n.css("height","100vh"),f="yes")),p="",w=b(window),m=n.parent(),w.scroll(function(){var e,t,o;g&&window.clearTimeout(g),g=window.setTimeout(function(){var e,t,o;0<p||(e=n.offset().top,t=n.height(),e-500<(o=w.scrollTop())+w.height()&&o<=e+t+500&&cover_onFuncLoad(n.videoBG,function(){var e=n.videoBG({mp4:a,webm:d,poster:"",preload:"none",autoplay:"true",loop:h,volume:1,scale:!0,zIndex:0,width:"100%"});e.setAttribute("muted",v),e.setAttribute("playsinline",""),videoLoadProcessor.registerNewVideo(e),p=1}))},100),"fixed"==c&&"yes"==f&&(e=m.offset().top,t=m.height(),o=w.scrollTop(),e+t-w.height()<=o?(n.css("position","absolute"),n.css("bottom","0px"),n.css("top","auto")):e<=o?(n.css("position","fixed"),n.css("top","0px")):o<e&&(n.css("position","relative"),n.css("top","auto")))}),w.scroll())),"dynamic"==c&&(window.isMobile||(s=n.offset().top-(n.offset().top-b(window).height()),n.height()<b(window).height()&&n.height(n.height()+.2*s),n.parallax(.2,!0))),"yes"==l&&""!=e&&""==a&&""==d&&""==t&&(y="",b("<img/>").attr("src",e).load(function(){b(this).remove(),n.css("background-image","url('"+e+"')"),n.css("opacity","1"),y="yes"}),"yes"!=y&&(n.css("background-image",""),n.css("opacity","0"),n.css("transition","opacity 25ms")));t=b("#rec"+_).find(".t-cover__arrow-wrapper");0<t.length&&t.click(function(){var e=b("#rec"+_).height();0<e&&b("html, body").animate({scrollTop:b("#rec"+_).offset().top+e},500)}),void 0===n.attr("data-content-video-url-youtube")&&void 0===n.attr("data-content-video-url-mp4")&&void 0===n.attr("data-content-video-url-webm")||b(window).bind("resize",t_throttle(function(){var e;0!==n.find(".videoBG").length&&setWidthHeightHTMLVideo(n.find(".videoBG"),n.height()),0!==n.find("iframe").length&&(e=n.attr("data-content-cover-height"),setWidthHeightYoutubeVideo(n,e))}))})},b(document).ready(function(){"edit"!=b(".t-records").attr("data-tilda-mode")&&b(".t-cover__carrier").each(function(){var e=b(this).attr("data-content-cover-id");0<e&&cover_init(e)})})}(jQuery);