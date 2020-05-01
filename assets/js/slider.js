function animate(elem,style,unit,from,to,time) {
    //function from stackoverflow
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}

var slide = function(_from,_to,width) {
  animate(document.getElementById('slider'),
    "margin-left","px",_from,_to,width);
}

var _from = 0;
var _to = 0;


var autoslide = setInterval(function(){
  var width     = document.getElementById('main-slider').clientWidth;
  var max_width = document.getElementById('slider').clientWidth;
  // console.log(_to-width,max_width);
  if(_to-width <= -max_width){
    document.getElementById('slider').style.marginLeft = "0";
    _from = 0;
    _to = 0;
  } else {
    _from = _to;
    _to -= width;
    slide(_from,_to,width);  
  }
  
},3000);
