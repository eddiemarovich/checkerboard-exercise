
for(var i = 0; i <81; i++){
  var tile = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];

  document.body.prepend(tile);
  tile.style.width = '11.1%'
  tile.style.paddingBottom = '11.1%'
  tile.display = "float"
  tile.style.float = "left"
  if(i%2 === 0){
    tile.style.backgroundColor = "black";
    }
};
var gradient = document.getElementsByTagName('body')[0];
gradient.style.background = "linear-gradient(to right,green,teal)";


// for(var i=0;i<81;i++){
// var tile = document.createElement('div');
// var body = document.getElementsByTagName('body')[0];
// document.body.prepend(tile);
// tile.style.width = '11.1%';
// tile.style.paddingBottom = '11.1%';
// tile.display = 'float';
// tile.style.float = 'left';
// if(i%2 === 0){
// tile.style.backgroundColor = 'blue';
// }
// };
// var doc = document.getElementsByTagName('body')[0];
// doc.style.background = "linear-gradient(to right,green,teal,blue,indigo,violet, magenta)";


// coll[i].style.background = "-moz-linear-gradient(top, #f1f471, #ffcc33)"
// for (var j = 0;  <= body.length; j++){
//   body[j].style.background = "-moz-linear-gradient(top, green, purple)"
// }
