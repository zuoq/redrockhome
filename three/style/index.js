window.onload = function(){
	var oDiv = document.getElementById('div1');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var aImg = oUl.getElementsByTagName('img');
	var oBtn = document.getElementById('btn');
	var aA = oBtn.getElementsByTagName('a');
	var oPrev = oDiv.getElementsByTagName('div')[1];
	var oNext = oDiv.getElementsByTagName('div')[2];
	var oStop = oDiv.getElementsByTagName('div')[3];

	var imgWidth = 1000;
	var iNow = 0;
	var iNow2 = 0;
	var iTimer1 = null;
	var iTimer2 = null;

	oUl.style.width = aImg.length*imgWidth + "px";

    oPrev.onclick = function(){
    	clearInterval(iTimer1);
        clearInterval(iTimer2);
    	iTimer1 = setInterval(toPrevRun,2000);
    }
    oNext.onclick = function(){
    	clearInterval(iTimer1);
    	clearInterval(iTimer2);
    	iTimer2 = setInterval(toNextRun,2000);
    }
    oStop.onclick = function(){
    	clearInterval(iTimer1);
    	clearInterval(iTimer2);
    }
	// for(var i=0;i<aA.length;i++){
	// 	aA[i].index = i;
	// 	aA[i].onclick = function(){
	// 		for(var i=0;i<aA.length;i++){
	// 			aA[i].className = "";
	// 		}
	// 	    this.className = "active";
	// 	    startMove(oUl,{"left":-(this.index*imgWidth)});
	// 	}
	// }

	// setInterval(toNextRun,2000);
	function toNextRun(){
		if(iNow == aA.length-1){
			iNow = 0;
			aLi[0].style.position = "relative";
			aLi[0].style.left = aLi.length*imgWidth+"px";
		}else{
			iNow++;
		}
		iNow2++;
		for(var i=0;i<aA.length;i++){
			aA[i].className = "";
		}
		aA[iNow].className = "active";
		startMove(oUl,{"left":-(iNow2*imgWidth)},function(){
			if(iNow==0){
				aLi[0].style.position = "static";
				oUl.style.left = 0+"px";
				iNow2 = 0;
			}
		});
	}


	function toPrevRun(){
		if(iNow == 0){
			iNow = aA.length-1;
			aLi[aLi.length-1].style.position = "relative";
			aLi[aLi.length-1].style.left = -aLi.length*imgWidth+"px";
		}else{
			iNow--;
		}
		iNow2--;
		for(var i=0;i<aA.length;i++){
			aA[i].className = "";
		}
		aA[iNow].className = "active";
		startMove(oUl,{"left":-(iNow2*imgWidth)},function(){
			if(iNow==aLi.length-1){
				aLi[aLi.length-1].style.position = "static";
				iNow2 = aLi.length-1;
				oUl.style.left = -(aLi.length-1)*imgWidth+"px";
			}
		});
	}

}