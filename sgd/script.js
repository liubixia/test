var oHide=document.getElementById('hide');
var oDevelope=document.getElementById('develope');
var aLi1=oDevelope.getElementsByTagName('li');
var oLeft=document.getElementById('left');
var oImg1=document.getElementById('left-btm');
var oLeftbox=document.getElementById('left-box');
var oSanjiao=document.getElementById('sanjiao');
var oHistory=document.getElementById('history');
var oSerchipt=document.getElementById('serch-ipt');
var odevelopeBg=document.getElementById('develope-bg');

var ofastIn=document.getElementById('fastIn');
var ofastLeft=document.getElementById('fastleft');
var oUl1=document.getElementById('ul1');
var aLi2=oUl1.getElementsByTagName('li');
var oUl2=document.getElementById('ul2');
var aLi7=ofastLeft.getElementsByTagName('li');
var oUl3=document.getElementById('ul3');
var oUl4=document.getElementById('ul4');

var oYesterday=document.getElementById('yesterday');
var oToday=document.getElementById('today');

var oAaa=document.getElementById('aaa');
var ouserBox=document.getElementById('user-box');
var aLi3=ouserBox.getElementsByTagName('li');
var ouserLeft=document.getElementById('user-left');
var aLi4=ouserLeft.getElementsByTagName('li');

var oDaaaa=document.getElementById('daaaa');

var oScroll=document.getElementById('scroll');
var oTiao1=document.getElementById('tiao1');
var oTiao2=document.getElementById('tiao2');
var oTiao3=document.getElementById('tiao3');
var oUllll=document.getElementById('ullll');
var oQuxiantu=document.getElementById('quxiantu');
var oaveBox=document.getElementById('ave-box');

var ohisLeftB=document.getElementById('his-leftB');
var aLi5=ohisLeftB.getElementsByTagName('li');
var ohisRightB=document.getElementById('his-rightB');
var aLi6=ohisRightB.getElementsByTagName('li');
var ofootUl=document.getElementById('foot-ul');
var afootUlnum=getClassname(ofootUl,'footUl-num');

var amyCanvas=document.getElementsByTagName('canvas');

var onOff=true;
var onOff1=true;
var timer1=null;
var timer2=null;
var timer3=null;
var timer4=null;
var timer5=null;
var num=-65;
var num1=0;
var num2=0;
var aaa=false;
var aveheight=108-oUllll.offsetHeight;
var scales1=0;

//构造的函数开始

//获得obj对象的name属性函数
function getStyle(obj,name){
	return obj.currentStyle ? obj.currentStyle[name]:getComputedStyle(obj)[name];
}

//obj对象的name属性移动target距离函数
 function goMove(obj,name,target){
 	clearInterval(obj.timer);
 	obj.timer=setInterval(function(){
 		var cur=parseInt(getStyle(obj,name));
 		var speed=(target-cur)/6;
 		speed=speed>0?Math.ceil(speed):Math.floor(speed);
 		if(target==cur){
 			clearInterval(obj.timer);
 		} else{
 			obj.style[name]=cur+speed+'px';
 		}
 	},30);
 }

 //通过classname获得元素的方法
 function getClassname(obj,name){
 	var aaaa=[];
 	var bbbb=obj.getElementsByTagName('*');
 	for (var i = 0; i < bbbb.length; i++) {
 		if(bbbb[i].className==name){
 			aaaa.push(bbbb[i]);
 		};
 	};
 	return aaaa;
 }

//圈内数字变化的函数
 function numGo(obj,target){
 	obj.a=0;
 	obj.b;
 	obj.b=1/target*1000; //变化的速度，让每个数字都能在一秒内变换完成
 	obj.timer=setInterval(function(){
 		if (obj.a==target) {
 			clearInterval(obj.timer);
 		} else{
 			obj.a+=1;
 			
 		}
 		obj.innerHTML=obj.a+"%";
 	},obj.b);
 }
//构造的函数结束

//历史搜索框内的样式改变
for (var i = 0; i < aLi5.length; i++) {
	aLi5[i].onmouseover=function(){
		for (var j = 0; j < aLi5.length; j++) {
			aLi5[j].className='';
		}
		this.className='hisActive';
	}
	aLi5[i].onclick=function(){
		oSerchipt.value=this.innerHTML;
		oHistory.style.display='none';
	}
};
for (var i = 0; i < aLi6.length; i++) {
	aLi6[i].onmouseover=function(){
		for (var j = 0; j < aLi6.length; j++) {
			aLi6[j].className='';
		}
		this.className='hisActive';
	}
	aLi6[i].onclick=function(){
		oSerchipt.value=this.innerHTML;
		oHistory.style.display='none';
	}
};

//当点击左边侧栏时左边的导航条会慢慢弄出现 
oHide.onmouseover=function(){
	clearInterval(timer2);
	clearInterval(timer1);
	clearInterval(timer3);
	timer1=setInterval(function(){
		num=num+1;
		oDevelope.style.left=num+'px';
		if(num==0){
			clearInterval(timer1);
		}
	},5);
}

//在导航条上滑动，导航条不变或者任然慢慢出现
oDevelope.onmouseover=function(){
	if(aaa){
		oLeftbox.style.display='block';
	}
	clearInterval(timer3);
	clearInterval(timer1);
	clearInterval(timer2);
	timer3=setInterval(function(){
		if(num==0){
			oDevelope.style.left=0+'px';
		}else{
			num=num+1;
			oDevelope.style.left=num+'px';
			if(num==0){
			clearInterval(timer3);
			}
		}
	},5);
}

//当选择了固定导航条时 离开导航条它不会消失 没有选择固定则会慢慢消失
oDevelope.onmouseout=function(){
	if(onOff){
		oLeftbox.style.display='none';
		clearInterval(timer2);
		clearInterval(timer1);
		clearInterval(timer3);
		timer2=setInterval(function(){
			num=num-1;
			oDevelope.style.left=num+'px';
			if(num==-65){
				clearInterval(timer2);
				for(var j=0;j<aLi1.length;j++){
				aLi1[j].className='';
				}
				oLeftbox.style.display='none';
				aaa=false;
			}
		},5);
		} else{
			oDevelope.style.left=0+'px';
	}
}

//循环点击固定与不固定
oImg1.onclick=function(){
	if (onOff==true) {
		oImg1.src="images/边栏选择.png";
		onOff=false;
	} else{
		oImg1.src="images/固定未选择.png";
		onOff=true;
	}
};
for(var i=0;i<aLi1.length;i++){
	aLi1[i].index=i;
	aLi1[i].onmouseover=function(){
		for(var j=0;j<aLi1.length;j++){
			aLi1[j].className='';
		}
		this.className='active1';
		if (this.index==0) {
			goMove(odevelopeBg,'top',80);
		};
		if (this.index==1) {
			goMove(odevelopeBg,'top',163);
		};
		if (this.index==2) {
			goMove(odevelopeBg,'top',246);
		};
		if (this.index==3) {
			goMove(odevelopeBg,'top',329);
		};
		if(this.index==0){
			oLeftbox.style.display='block';
			aaa=true;
		}else{
			oLeftbox.style.display='none';
			aaa=false;
		}
	}
}
oLeftbox.onmouseover=function(){
	oLeftbox.style.display='block';
	aaa=true;
}
oSanjiao.onclick=function(e){
	var event=e||window.event;
	oHistory.style.display='block';

	e.cancelBubble=true;
}

oSerchipt.onclick=function(e){
	var event=e||window.event;
	oHistory.style.display='block';

	e.cancelBubble=true;
}
ofastIn.onclick=function(e){
	if(onOff1){
		oUl1.style.display="block";
		onOff1=false;
		e.cancelBubble=true;
	} else{
		oUl1.style.display="none";
		oUl2.style.display="none";
		oUl3.style.display="none";
		oUl4.style.display="none";
		onOff1=true;
	}
	
}
oUl1.onclick=function(e){
	oUl1.style.display="block";
	e.cancelBubble=true;
}
oUl2.onclick=function(e){
	oUl1.style.display="block";
	e.cancelBubble=true;
}
oUl3.onclick=function(e){
	oUl1.style.display="block";
	e.cancelBubble=true;
}
oUl4.onclick=function(e){
	oUl1.style.display="block";
	e.cancelBubble=true;
}
for (var i = 0; i < aLi2.length; i++) {
	aLi2[i].index=i;
	aLi2[i].onmouseover=function(){
		for(var j=0;j<aLi2.length;j++){
			aLi2[j].className='';
		}
		this.className='active2';
		if(this.index==0){
			oUl2.style.display='block';
			oUl3.style.display='none';
			oUl4.style.display='none';
		}
		if(this.index==1){
			oUl3.style.display='block';
			oUl2.style.display='none';
			oUl4.style.display='none';
		}
		if(this.index==2){
			oUl4.style.display='block';
			oUl3.style.display='none';
			oUl2.style.display='none';
		}
	}
}
for (var i = 0; i < aLi7.length; i++) {
	aLi7[i].onmouseover=function(){
		for (var j = 0; j < aLi7.length; j++) {
			aLi7[j].className='';
		};
		this.className='fastinActive';
	}
};
document.onclick=function(){
	oHistory.style.display='none';

	oUl1.style.display='none';
	oUl2.style.display='none';
	oUl3.style.display='none';
	oUl4.style.display='none';

	ouserBox.style.height=0;
	ouserLeft.style.display='none';

	onOff1=true;
	for (var i = 0; i < aLi2.length; i++) {
		aLi2[i].className='';
	};
	aLi3[0].className='user-active';
	for (var i = 1; i < aLi3.length; i++) {
		aLi3[i].className='';
	};
	for (var i = 0; i < aLi5.length; i++) {
		aLi5[i].className='';
	};
	for (var i = 0; i < aLi6.length; i++) {
		aLi6[i].className='';
	};
}
oYesterday.onclick=function(){
	oYesterday.className='active3';
	oToday.className='';
}
oToday.onclick=function(){
	oYesterday.className='';
	oToday.className='active3';
}
oAaa.onclick=function(e){
	goMove(ouserBox,'height',145);
	//ouserBox.style.height=145+'px';
	e.cancelBubble=true;
}
//alert(ouserBox.offsetHeight);
for (var i = 0; i < aLi3.length; i++) {
	aLi3[i].index=i;
	aLi3[i].onmouseover=function(){
		for (var j = 0; j < aLi3.length; j++) {
			aLi3[j].className='';
		}
		this.className='user-active';
		if (this.index==0) {
			ouserLeft.style.display='block';
		} else{
			ouserLeft.style.display='none';
		}
	}
}
ouserBox.onclick=function(e){
	ouserBox.style.display='block';
	e.cancelBubble=true;
}
ouserLeft.onclick=function(e){
	ouserBox.style.display='block';
	e.cancelBubble=true;
}
for (var i = 0; i < aLi4.length; i++) {
	aLi4[i].onmouseover=function(){
		for (var j = 0; j < aLi4.length; j++) {
			aLi4[j].className='';
		}
		this.className='user-L-active';
	}
};

oDaaaa.onmouseover=function(){
	goMove(oDaaaa,'bottom',15);
}
oDaaaa.onmouseout=function(){
	goMove(oDaaaa,'bottom',0);
}

oTiao3.onmousedown=function(){
	clearInterval(timer4);
	timer4=setInterval(function(){
		if(num2==aveheight){
			clearInterval(timer4);
		}else{
			num2--;
			oUllll.style.top=num2+'px';
			scales1=num2/aveheight;
			oTiao1.style.top=15+117*scales1+'px';
		}
	},10);
}
oTiao3.onmouseup=function(){
	clearInterval(timer4);
}
oTiao2.onmousedown=function(){
	clearInterval(timer5);
	timer5=setInterval(function(){
		if(num2==0){
			clearInterval(timer4);
		}else{
			num2++;
			oUllll.style.top=num2+'px';
			scales1=num2/aveheight;
			oTiao1.style.top=15+117*scales1+'px';
		}
	},10);
}
oTiao2.onmouseup=function(){
	clearInterval(timer5);
}
oTiao1.onmousedown=function(e){
	document.onmousemove=function(e){
		var topv=e.clientY-277;
		var scales=(oTiao1.offsetTop-15)/117;
		if(topv<=15){
			topv=15;
		}
		if(topv>=132){
			topv=132;	
		}
		oTiao1.style.top=topv+'px';
		oUllll.style.top=-(oUllll.offsetHeight-108)*scales+'px';
		num2=Math.floor(-(oUllll.offsetHeight-108)*scales);

	}
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseover=null;
	}
	return false;
}

//绿色转圈部分的实现 调用mycanvas.js来实现
var ringNum=[100,90,65,25,0,15];
for (var i = 0; i < amyCanvas.length; i++) {
	var ctx=amyCanvas[i].getContext('2d');
	var ring=new Ring(1.5*Math.PI,ringNum[i]);
	ring.drawRing(ctx);
};
//圈内数字增加效果实现
for (var i = 0; i < afootUlnum.length; i++) {
	numGo(afootUlnum[i],ringNum[i]);
};
//alert(oUllll.offsetHeight);