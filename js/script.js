$(document).ready(function(){
	/*=====nice scroll=====*/
	   $("body").niceScroll();
	
      /*=======show toll box======*/
	var tool_box = document.querySelectorAll('.tool-box .fa')[0];
	tool_box.onclick = function(){
		document.querySelectorAll('.tool-box')[0].classList.toggle("show_tool_box");
	};
	/*=======Change color========*/
	var colorChange= $(".color-option ul li");
	colorChange.click(function(){
		$("link[href*='thems']").attr("href", $(this).attr("data-value"));
	});
});
	/*=======Loading========*/
		   var load = document.getElementsByClassName("loading")[0];
window.onload = function(){
	
	load.style.opacity= "0";
	load.style.display="none";

}
	/*=============Show and hide the scroll button =============*/
 
var to_top = document.getElementsByClassName('scroll-top')[0];

window.onscroll=function(){
    if (document.body.scrollTop>=600){
			to_top.style.display= "block";
			setTimeout(function(){
                   to_top.style.opacity= "1";
                 }, 500); 
		}else{
            to_top.style.opacity= "0"; 
			to_top.style.display= "none";
		};
		
}
 to_top.onclick= function(){

	 $("html, body").animate({scrollTop: 0},600);
 }
