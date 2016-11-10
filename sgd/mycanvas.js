//function Circle() {	
//		    this.radius = 18.2;    // 圆环半径
//		    this.lineWidth = 8;  // 圆环边的宽度
//		    this.strokeStyle = 'rgb(54,176,135)'; //边的颜色
//		    // this.lineCap = 'round';
//		}

//		Circle.prototype.draw= function(ctx) {
//		    ctx.beginPath();
//		    ctx.arc(250, 250, this.radius, 0, Math.PI*2, true);  // 坐标为250的圆，这里起始角度是0，结束角度是Math.PI*2
//		    ctx.lineWidth = this.lineWidth;
//		    ctx.strokeStyle = this.strokeStyle;
//		    ctx.stroke();  // 这里用stroke画一个空心圆，想填充颜色的童鞋可以用fill方法
//		};

		function Ring(startAngle, percent) {
//		    Circle.call(this);
			this.radius = 18.2;
		    this.startAngle = startAngle || 3*Math.PI/2; //弧起始角度
		    this.percent = percent;  //弧占的比例
		}

//		Ring.prototype = Object.create(Circle.prototype);

		Ring.prototype.drawRing = function(ctx) {
		    var count = 0,
		        that = this,
		        times = 100, // 分100次绘制蓝弧
		        startAngle = this.startAngle,
		        endAngle = startAngle;

//		    this.draw(ctx);

		    var handle = setInterval(function() {
		      if (count == times) {
		        clearInterval(handle);
		      }

		      ctx.beginPath();
		      var anglePerSec = 2 * Math.PI * (that.percent / 100) / times; // 每个间隔滑动的弧度
		      ctx.arc(23.5, 23, that.radius, startAngle, endAngle, false); //这里的圆心坐标要和cirle的保持一致
//		      ctx.strokeStyle = that.fillStyle;
//		      ctx.lineCap = that.lineCap;
			  ctx.lineWidth = 8;
		      ctx.strokeStyle = 'rgb(54,176,135)';
		      ctx.stroke();
		      ctx.closePath();

		      startAngle += anglePerSec - 0.0002; // 消除每次绘环间的计算误差，防止出现空隙
		      endAngle = startAngle + anglePerSec;

		      count++;
		    }, 10); // 这里定义每10ms绘制一次
		  }
		 //  window.onload=function(){
		 //  	var canvas = document.getElementById('canvas');
			// var ctx =  canvas.getContext('2d');
			// var kk=90;
			// var ring = new Ring(1.5*Math.PI, kk);  // 从1.5*Math.PI弧度开始，进度为50%的环
			// ring.drawRing(ctx);
		 //  }
