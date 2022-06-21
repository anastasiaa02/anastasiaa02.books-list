$(function() {
//функції зміни кольору
$(function() {
    $('#changeColor1').click(function(){
    $('#one').toggleClass('color1');
    });
});
$(function() {
    $('#changeColor2').click(function(){
    $('#two').toggleClass('color2');
    });
});
$(function() {
    $('#changeColor3').click(function(){
    $('#three').toggleClass('color3');
    });
});
$(function() {
    $('#changeColor4').click(function(){
    $('#four').toggleClass('color4');
    });
});
$(function() {
    $('#changeColor5').click(function(){
    $('#five').toggleClass('color5');
    });
});
$(function() {
    $('#changeColor6').click(function(){
    $('#six').toggleClass('color6');
    });
});
$(function() {
    $('#changeColor7').click(function(){
    $('#seven').toggleClass('color7');
    });
});
$(function() {
    $('#changeColor8').click(function(){
    $('#eight').toggleClass('color8');
    });
});
$(function() {
    $('#changeColor9').click(function(){
    $('#nine').toggleClass('color9');
    });
});
$(function() {
    $('#changeColor10').click(function(){
    $('#ten').toggleClass('color10');
    });
});
//функції видалення елементів
$(function (){
    $('#delete1').click(function(){
    $('#one').remove();
    $('#changeColor1').remove();
    $('#edit1').remove();
    $('#delete1').remove();
    $('#done1').remove();
    $('#editInput1').remove();
    });
});
$(function (){
    $('#delete2').click(function(){
    $('#two').remove();
    $('#changeColor2').remove();
    $('#edit2').remove();
    $('#delete2').remove();
    $('#done2').remove();
    $('#editInput2').remove();
    });
});
$(function (){
    $('#delete3').click(function(){
    $('#three').remove();
    $('#changeColor3').remove();
    $('#edit3').remove();
    $('#delete3').remove();
    $('#done3').remove();
    $('#editInput3').remove();
    });
});
$(function (){
    $('#delete4').click(function(){
    $('#four').remove();
    $('#changeColor4').remove();
    $('#edit4').remove();
    $('#delete4').remove();
    $('#done4').remove();
    $('#editInput4').remove();
    });
});
$(function (){
    $('#delete5').click(function(){
    $('#five').remove();
    $('#changeColor5').remove();
    $('#edit5').remove();
    $('#delete5').remove();
    $('#done5').remove();
    $('#editInput5').remove();
    });
});
$(function (){
    $('#delete6').click(function(){
    $('#six').remove();
    $('#changeColor6').remove();
    $('#edit6').remove();
    $('#delete6').remove();
    $('#done6').remove();
    $('#editInput6').remove();
    });
});
$(function (){
    $('#delete7').click(function(){
    $('#seven').remove();
    $('#changeColor7').remove();
    $('#edit7').remove();
    $('#delete7').remove();
    $('#done7').remove();
    $('#editInput7').remove();
    });
});
$(function (){
    $('#delete8').click(function(){
    $('#eight').remove();
    $('#changeColor8').remove();
    $('#edit8').remove();
    $('#delete8').remove();
    $('#done8').remove();
    $('#editInput8').remove();
    });
});
$(function (){
    $('#delete9').click(function(){
    $('#nine').remove();
    $('#changeColor9').remove();
    $('#edit9').remove();
    $('#delete9').remove();
    $('#done9').remove();
    $('#editInput9').remove();
    });
});
$(function (){
    $('#delete10').click(function(){
    $('#ten').remove();
    $('#changeColor10').remove();
    $('#edit10').remove();
    $('#delete10').remove();
    $('#done10').remove();
    $('#editInput10').remove();
    });
});
//функції редагування елементів
$("#edit1").click(function () {
    $("#editInput1, #done1").css({'display' : 'block'});
});
$(function (){
    $('#done1').click(function(){
    var text = $('#editInput1').val();
    $('#one').text(text);
    $("#editInput1, #done1").css({'display' : 'none'});
});
});
$("#edit2").click(function () {
    $("#editInput2, #done2").css({'display' : 'block'});
});
$(function (){
    $('#done2').click(function(){
    var text = $('#editInput2').val();
    $('#two').text(text);
    $("#editInput2, #done2").css({'display' : 'none'});
});
});
$("#edit3").click(function () {
    $("#editInput3, #done3").css({'display' : 'block'});
});
$(function (){
    $('#done3').click(function(){
    var text = $('#editInput3').val();
    $('#three').text(text);
    $("#editInput3, #done3").css({'display' : 'none'});
});
});
$("#edit4").click(function () {
    $("#editInput4, #done4").css({'display' : 'block'});
});
$(function (){
    $('#done4').click(function(){
    var text = $('#editInput4').val();
    $('#four').text(text);
    $("#editInput4, #done4").css({'display' : 'none'});
});
});
$("#edit5").click(function () {
    $("#editInput5, #done5").css({'display' : 'block'});
});
$(function (){
    $('#done5').click(function(){
    var text = $('#editInput5').val();
    $('#five').text(text);
    $("#editInput5, #done5").css({'display' : 'none'});
});
});
$("#edit6").click(function () {
    $("#editInput6, #done6").css({'display' : 'block'});
});
$(function (){
    $('#done6').click(function(){
    var text = $('#editInput6').val();
    $('#six').text(text);
    $("#editInput6, #done6").css({'display' : 'none'});
});
});
$("#edit7").click(function () {
    $("#editInput7, #done7").css({'display' : 'block'});
});
$(function (){
    $('#done7').click(function(){
    var text = $('#editInput7').val();
    $('#seven').text(text);
    $("#editInput7, #done7").css({'display' : 'none'});
});
});
$("#edit8").click(function () {
    $("#editInput8, #done8").css({'display' : 'block'});
});
$(function (){
    $('#done8').click(function(){
    var text = $('#editInput8').val();
    $('#eight').text(text);
    $("#editInput8, #done8").css({'display' : 'none'});
});
});
$("#edit9").click(function () {
    $("#editInput9, #done9").css({'display' : 'block'});
});
$(function (){
    $('#done9').click(function(){
    var text = $('#editInput9').val();
    $('#nine').text(text);
    $("#editInput9, #done9").css({'display' : 'none'});
});
});
$("#edit10").click(function () {
    $("#editInput10, #done10").css({'display' : 'block'});
});
$(function (){
    $('#done10').click(function(){
    var text = $('#editInput10').val();
    $('#ten').text(text);
    $("#editInput10, #done10").css({'display' : 'none'});
});
});
//функція добавляння елемента
$(function (){
    $('#addBook').click(function(){
    var text = $('#newBook').val();
    var newEl = $("#list ol").append('<li class="hot">'+text+'</li>');
});
});

});

//--------------------СЛАЙДЕР (простий js)--------------------//

function Sim(sldrId) {
	let id = document.getElementById(sldrId);
	if(id) {
		this.sldrRoot = id
	}
	else {
		this.sldrRoot = document.querySelector('.sim-slider')
	};
	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
	this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
	this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
	this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

	this.options = Sim.defaults;
	Sim.initialize(this)
};
Sim.defaults = {
	loop: true,    
	auto: true,     
	interval: 5000, 
	arrows: true,   
	dots: true      
};
Sim.prototype.elemPrev = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement -= num;
	if(this.currentElement < 0) this.currentElement = this.elemCount-1;

	if(!this.options.loop) {
		if(this.currentElement == 0) {
			this.leftArrow.style.display = 'none'
		};
		this.rightArrow.style.display = 'block'
	};
	
	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

	if(this.options.dots) {
		this.dotOn(prevElement); this.dotOff(this.currentElement)
	}
};
Sim.prototype.elemNext = function(num) {
	num = num || 1;
	
	let prevElement = this.currentElement;
	this.currentElement += num;
	if(this.currentElement >= this.elemCount) this.currentElement = 0;

	if(!this.options.loop) {
		if(this.currentElement == this.elemCount-1) {
			this.rightArrow.style.display = 'none'
		};
		this.leftArrow.style.display = 'block'
	};

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

	if(this.options.dots) {
		this.dotOn(prevElement); this.dotOff(this.currentElement)
	}
};
Sim.prototype.dotOn = function(num) {
	this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
};
Sim.prototype.dotOff = function(num) {
	this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
};
Sim.initialize = function(that) {

	that.elemCount = that.sldrElements.length;

	that.currentElement = 0;
	let bgTime = getTime();

	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function() {
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemNext()
			}
		}, that.options.interval)
	};

	if(that.elemCount <= 1) { 
		that.options.auto = false; that.options.arrows = false; that.options.dots = false;
		that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
	};
	if(that.elemCount >= 1) {  
		that.sldrElemFirst.style.opacity = '1';
	};

	if(!that.options.loop) {
		that.leftArrow.style.display = 'none'; 
		that.options.auto = false; 
	}
	else if(that.options.auto) {   
		setAutoScroll();
		that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
	};

	if(that.options.arrows) { 
		that.leftArrow.addEventListener('click', function() {
			let fnTime = getTime();
			if(fnTime - bgTime > 1000) {
				bgTime = fnTime; that.elemPrev()
			}
		}, false);
		that.rightArrow.addEventListener('click', function() {
			let fnTime = getTime();
			if(fnTime - bgTime > 1000) {
				bgTime = fnTime; that.elemNext()
			}
		}, false)
	}
	else {
		that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
	};

	if(that.options.dots) { 
		let sum = '', diffNum;
		for(let i=0; i<that.elemCount; i++) {
			sum += '<span class="sim-dot"></span>'
		};
		that.indicatorDots.innerHTML = sum;
		that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
		for(let n=0; n<that.elemCount; n++) {
			that.indicatorDotsAll[n].addEventListener('click', function() {
				diffNum = Math.abs(n - that.currentElement);
				if(n < that.currentElement) {
					bgTime = getTime(); that.elemPrev(diffNum)
				}
				else if(n > that.currentElement) {
					bgTime = getTime(); that.elemNext(diffNum)
				}
			}, false)
		};
		that.dotOff(0);
		for(let i=1; i<that.elemCount; i++) {
			that.dotOn(i)
		}
	}
};
new Sim();