import './scss/main.scss';
import 'bootstrap';
const pathToImages = require.context('./img/', true);

import { CreateTile } from './js/tile'; 
import { CreatePopup } from './js/popup';
// import { changeSlider } from './js/myScript';


const arr = [
  { "id":1,
    "category":"tree", 
    "name": "Туя Пирамидальная",
    "description": "Туя - это красивое, вечнозеленая хвойное дерево. Взрослоя туя обычно имеет высоту до12 м. Ветви отходят перпендикулярно стволу, несут чешуевидные листья, расположенные правильными рядами. Плоды мелкие, шишковидное, с деревянистым чешуями. Может применятся как для создания живой изгороди, так и для посадки по отдельности. Культивируют как декоративное дерево или кустарник.",
    "photo": "thuja_common_main.jpg",
    "smallPhoto": [
      "thuja_spherical_main.jpg",
      "acacia_yellow_main.jpg",
      "pine_common_main.jpg",
      "acacia_white_main.jpg"
    ],
    "price": 920,
    "vendor": "tr_tc_1"
  },
  { "id":2,
    "category":"tree", 
    "name": "Туя Шарообразная",
    "description": "Шаровидная туя золотого окраса, очень красивая формированная туя. Красивый окрас придает этому сорту свою особенность. Не требовательная к почве, может расти даже в суглинке.",
    "photo": "thuja_spherical_main.jpg",
    "smallPhoto": [
      "thuja_spherical_main.jpg",
      "acacia_yellow_main.jpg",
      "pine_common_main.jpg",
      "acacia_white_main.jpg"
    ],
    "price": 1000,
    "vendor": "tr_tsh_1"
  },
  { "id":3,
    "category":"tree", 
    "name": "Акация Желтая",
    "description": "Акация жёлтая -  предпочитает расти на хорошо освещенных местах. Она прекрасно выдерживает даже палящее солнце, и не получает ожогов.. Представляет собой кустарник или невысокое деревцо высотой от 2 до 5 метров. Кора — гладкая, зеленовато-серая, листья — парно расположенные, яйцевидные, в количестве 4-7 пар. Цветет желтая акация во второй половине мая желтыми цветками, собранными в пучки по 2-5 штук, реже — одиночными.",
    "photo": "acacia_yellow_main.jpg",
    "smallPhoto": [
      "thuja_spherical_main.jpg",
      "acacia_yellow_main.jpg",
      "pine_common_main.jpg",
      "acacia_white_main.jpg"
    ],
    "price": 68,
    "vendor": "ac_yel_1"
  },
  { "id":4,
    "category":"tree", 
    "name": "Сосна Обыкновенная",
    "description": "Сосна обыкновенная - хвойное вечнозеленое дерево. В молодости крона ее рыхло-конусовидная, округлая, широкая, а с возрастом становится широко-зонтиковидная, бывает и однобокая.Ствол сосны ровный, кора тонко-шелушащаяся, красно-бурой окраски.",
    "photo": "pine_common_main.jpg",
    "smallPhoto": [
      "thuja_spherical_main.jpg",
      "acacia_yellow_main.jpg",
      "pine_common_main.jpg",
      "acacia_white_main.jpg"
    ],
    "price": 600,
    "vendor": "pn_com_1"
  },
  { "id":5,
    "category":"tree", 
    "name": "Акация Белая",
    "description": "Акация белая -  растение ядовитое, только цветы являются безопасными, в некоторых странах они даже используются в качестве приправы для приготовления пищи. Листья светло-зелёные, очерёдные, непарноперистые. Цветки — симметрично расположенные, собранные в негустые пазушные кисти, бледно-розовые или белые, душистые. Цветет с конца мая по июнь.",
    "photo": "acacia_white_main.jpg",
    "smallPhoto": [
      "acacia_white_main.jpg",
      "acacia_yellow_main.jpg",
      "pine_common_main.jpg",
      "thuja_spherical_main.jpg"
    ],
    "price": 45,
    "vendor": "ac_wh_1"
  }
];
let savePhoto = '';
// let arr = [];

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     responseData(JSON.parse(this.responseText));
//     // document.getElementById("demo").innerHTML = this.responseText;
//   }
// };
// // xhttp.open("GET", "https://sleepy-springs-76520.herokuapp.com/api_trees.json", true);
// xhttp.open("GET", data);
// xhttp.send();
// function responseData(trees) {
//   for (let i in trees) {
//     for (let j in trees[i]) {
//       let tile_class = 'tile col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3';
//       let menu = createTile(trees[i][j], tile_class);
//       let treeTile = document.getElementsByClassName("tile_block"); 
//       treeTile[0].appendChild(menu);
//       arr.push(trees[i][j]);
//     }
//   }
// }

for(let i = 0; arr.length > i; i++) {
  const tile_class = 'tile_block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3';
  const treeTile = new CreateTile(arr[i], tile_class, 'tile');
  treeTile.createContainer();
}

let but = document.getElementsByClassName('tile_details');

for(let i = 0; but.length > i; i++) {
  but[i].addEventListener('click', function () {
    const popUp = document.getElementsByClassName('popup_wrap');
    const closeButton = document.getElementsByClassName('popup_close__theme');
    
    popUp[0].style.display = 'flex';
    closeButton[0].addEventListener('click', () => {
      popUp[0].style.display = 'none';
    })
    
    arr.forEach((item) => {
      if (item.id == this.value) {
        // SMALL IMAGES
        const firstImg = document.getElementById('first_img');
        const secondImg = document.getElementById('second_img');
        const thirdImg = document.getElementById('third_img');
        const fourthIMg = document.getElementById('fourth_img');
        firstImg.src = 'img/' + item.smallPhoto[0];
        secondImg.src = 'img/' + item.smallPhoto[1];
        thirdImg.src = 'img/' + item.smallPhoto[2];
        fourthIMg.src = 'img/' + item.smallPhoto[3];
        // MAIN IMAGE
        const mainImg = document.getElementsByClassName('popup_photo');
        mainImg[0].src = 'img/' + item.photo;
        // POPUP HEADER
        const popupHeader = document.getElementsByClassName('popup_header');
        popupHeader[0].innerHTML = item.name;
        const popupVendor = document.getElementById('vendor');
        popupVendor.innerHTML = item.vendor;
        const popupPrice = document.getElementById('price');
        popupPrice.innerHTML = item.price;
        const popupDescription = document.getElementsByClassName('popup_description');
        popupDescription[0].innerHTML = item.description;

        savePhoto = 'img/' + item.photo;
        // console.log(savePhoto);
      }
    })

  })
}

const previewImages = document.getElementsByClassName('image_preview');

for(let i = 0; previewImages.length > i; i++) {
  previewImages[i].addEventListener('mouseover', (event) => {
    console.log(event.target.src);
    const mainPhoto = document.getElementsByClassName('popup_photo');
    mainPhoto[0].src = event.target.src;
  });
  previewImages[i].addEventListener('mouseout', (event) => {
    console.log(event.target.src);
    const mainPhoto = document.getElementsByClassName('popup_photo');
    mainPhoto[0].src = savePhoto;
  })
}
  

const navTrees = document.getElementsByClassName('nav_trees');
const navSpices = document.getElementsByClassName('nav_spices');
const trees = document.getElementsByClassName('trees');
const spice = document.getElementsByClassName('spice');

navTrees[0].addEventListener('click', showTrees);
navSpices[0].addEventListener('click', showSpices);

function showTrees () {
  console.log('sss');
  trees[0].style.display = 'block';
  spice[0].style.display = 'none';
}

function showSpices () {
  console.log('aaa');
  trees[0].style.display = 'none';
  spice[0].style.display = 'block';
}
// var el = document.getElementsByClassName("slider_img");
// el[0].addEventListener("click", changeSlider, false)
