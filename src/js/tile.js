
export function createTile(array, className) {
	console.log(array);
	let tile = document.createElement("div");
	tile.className = className;

	let photo = document.createElement("div");
	photo.className = 'tile_img';
	let tilePhoto = document.createElement("img");
	tilePhoto.src = 'img/' + array.photo;
	tilePhoto.className = 'tile_photo';
	let imgButton = document.createElement("button");
	imgButton.className = 'tile_details';
	imgButton.innerHTML = 'Подробнее';
	photo.appendChild(tilePhoto);
	photo.appendChild(imgButton);


	let headText = document.createElement("p");
	headText.className = 'tile_text';
	headText.innerHTML = array.name;

	let headPrice = document.createElement("p");
	headPrice.className = 'tile_price';
	headPrice.innerHTML = 'Цена: ' + array.price + ' грн';
	
	tile.appendChild(photo);
	tile.appendChild(headText);
	tile.appendChild(headPrice);
	return tile;
}


