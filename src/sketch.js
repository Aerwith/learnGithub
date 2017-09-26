var LEFTBUFFER = 0;
var RIGHTBUFFER =0;
var DOWNBUFFER = 0;
var UPBUFFER = 0;
var SCALEX = 0.95;
var NUMSCREENS = 4;
var canvasArr = [];
function setup() {
  for(i=0;i<NUMSCREENS;i++){
    canvasi = createCanvas(window.innerWidth*SCALEX, window.innerHeight/NUMSCREENS-UPBUFFER-DOWNBUFFER);
    var p1 = createP('This is a paragraph, the CSS class is apple.');

    canvasArr.push(canvasi);

}
  //noCanvas();
  createElement('h1','Welcome to this page.');

  var p1 = createP('This is a paragraph, the CSS class is apple.');
  p1.class('apple');

  var p2 = createP('This is a paragraph, the CSS class is pear.');
  p2.class('pear');

  var p3 = createP('This is another paragraph, the CSS class is also apple.');
  p3.class('apple');

  var p4 = createP('This is another paragraph, the CSS class is also apple, but now there is also an id set to orange.');
  p4.class('apple');
  p4.id('orange');


}

function draw() {
  background(51);
  p4.html('mouseX')
}
