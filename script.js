var gradient = document.createElement('div');

var body = document.getElementsByTagName('body')[0];

for(var i = 0; i <81; i++){
  var tile = document.createElement('div');

  document.body.prepend(tile);
  tile.style.width = '11.1%'
  tile.style.paddingBottom = '11.1%'
  tile.display = "float"
  tile.style.float = "left"
  if(i%2 === 0){
    tile.style.background = "linear-gradient(to top, green, purple)";
    }else if (i % 2 === 1){
    tile.style.background = "linear-gradient(to top, red, purple";
    }

}
// gradient.style.top = "0";
// gradient.style.bottom = "0";
// gradient.style.left = '0';
// gradient.style.right = '0';
// gradient.style.backgroundImage =  'black';
//
// gradient.style.backgroundImage =  'linear-gradient (top, green, purple)';
// gradient.style.position = 'absolute';
//
// document.body.append(gradient);



// coll[i].style.background = "-moz-linear-gradient(top, #f1f471, #ffcc33)"
// for (var j = 0;  <= body.length; j++){
//   body[j].style.background = "-moz-linear-gradient(top, green, purple)"
// }
