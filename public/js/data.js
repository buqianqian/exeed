function OnDl(){
	
	document.documentElement.style.overflow='hidden';
document.body.style.overflow='hidden';

document.onmousemove = function(e){
        var ev = e || event;
        ev.cancelBubble=true;
        ev.returnValue = false;
}
	var uiWx=document.body.clientWidth;
	var uiHy=document.body.clientHeight;
	
	document.getElementById("zy1").style.left=(uiWx-600)/2;
	document.getElementById("zy1").innerHTML='<iframe src="https://ivgh5.jiangfei.net/flow/#/"  class="iframe" 		width="'+600+'" height="'+uiHy+'" frameborder="0" scrolling="no" allowtransparency="true" style="overflow-x:hidden; overflow-y:auto;">';		
}
