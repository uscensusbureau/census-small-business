$(function(t){function e(t){for(;/(\d+)(\d{3})/.test(t.toString());)t=t.toString().replace(/(\d+)(\d{3})/,"$1,$2");return t}t(".usa-menu-btn").on("click",function(e){t("#nav-mobile").attr("id").addClass("is-visible"),t(".usa-overlay").addClass("is-visible"),t(".usa-accordion-button").on("click",function(){t(this).attr("aria-expanded","true"),t(this).children().attr("aria-hidden","false")})}),t(".usa-overlay").click(function(e){var s=t("#nav-mobile").attr("id");t(e.target).closest(s).length||s.is(":visible")&&(s.removeClass("is-visible"),t(".usa-overlay").removeClass("is-visible"))}),t(".all-links").hover(function(e){t(this).children(".sub-nav-container").eq(0).slideDown(200),t(this).css("background-color","#dce4ef")},function(e){t(this).css("background-color","white"),t(this).children(".sub-nav-container").eq(0).slideUp(50)}),t('a[href^="#"]').on("click",function(e){var s=t(this.getAttribute("href"));s.length&&(e.preventDefault(),t("html, body").stop().animate({scrollTop:s.offset().top},1e3))});var s=[],i=!1,a=t(".usa-sidenav-list a");t(".usa-sidenav-list li");a.click(function(e){e.preventDefault(),t("html, body").animate({scrollTop:t(t(this).attr("href")).offset().top},1e3),hash(t(this).attr("href"))}),a.each(function(){s.push(t(t(this).attr("href")))}),t(window).scroll(function(e){var n=t(this).scrollTop()+t(window).height()/12;for(var o in s){var r=s[o];if(n>r.offset().top)var l=r.attr("id")}l!==i&&(i=l,t(a).removeClass("current"),t('.usa-sidenav-list a[href="#'+i+'"]').addClass("current"))}),t(window).scroll(function(){var e=t(".usa-layout-docs-main_content").offset().top,s=t(".usa-layout-docs-main_content").innerHeight(),i=t(".usa-sidenav-list").innerHeight(),a=(t("footer").height(),s-i),n=t(window).scrollTop()-e;t(window).scrollTop()>=e?t(".usa-sidenav-list").addClass("fixed"):t(".usa-sidenav-list").removeClass("fixed"),n>=a?t(".usa-sidenav-list").addClass("bottom"):t(".usa-sidenav-list").removeClass("bottom")}),hash=function(t){history.pushState?history.pushState(null,null,t):location.hash=t};var n=function(){var s=t("#zipcode").val();t.getJSON("https://api.censusreporter.org/1.0/data/show/latest?table_ids=B19013&geo_ids=86000US"+s,function(e){var s=JSON.stringify(e),i="$"+String.getNumber(s,"estimate").toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");t("#income").html(i)}),t.getJSON("https://api.censusreporter.org/1.0/data/show/latest?table_ids=B01002&geo_ids=86000US"+s,function(e){var s=JSON.stringify(e),i=String.getNumber(s,"estimate");t("#age").html(i)}),t.getJSON("https://api.censusreporter.org/1.0/data/show/latest?table_ids=B23025&geo_ids=86000US"+s,function(s){var i=JSON.stringify(s),a=String.getNumber(i,"estimate");t("#employment").html(e(a))}),t("#city").html(s),t("#data-section").css("min-height","60vh"),t("#data-results-section").slideDown(300);var i=t("#data-results-section");i.length&&(event.preventDefault(),t("html, body").stop().animate({scrollTop:i.offset().top},1e3))};String.getNumber=function(t,e){var s=t.indexOf(e)+23,i=t.substring(s,s+8);return parseInt(i)},t("#search").click(n),t("#zipcode").keypress(function(t){if(13==t.which)return n(),!1});var o=function(){console.log("infunction");var e=t("#location").val(),s="https://cbb.census.gov/sbe/#industry0="+t("#industry").val()+"&geoId="+e+"&geoType=zcta&view=report&reportType=summary";window.open(s,"_blank")};t("#report").click(o),t("#location").keypress(function(t){if(13==t.which)return o(),!1})});