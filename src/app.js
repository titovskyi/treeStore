import './scss/main.scss';
import 'bootstrap';

import { createTile } from './js/tile';
import { changeSlider } from './js/myScript';

let arr = [];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    responseData(JSON.parse(this.responseText));
    // document.getElementById("demo").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "https://sleepy-springs-76520.herokuapp.com/api_trees.json", true);
xhttp.send();
function responseData(trees) {
  for (let i in trees) {
    for (let j in trees[i]) {
      // console.log(trees[i][j]);
      let tile_class = 'tile col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3';
      let menu = createTile(trees[i][j], tile_class);
      let treeTile = document.getElementsByClassName("tile_block"); 
      treeTile[0].appendChild(menu);
      arr.push(trees[i][j]);
    }
  }
}
console.log(arr);

var el = document.getElementsByClassName("slider_img");
el[0].addEventListener("click", changeSlider, false)
