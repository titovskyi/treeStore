export class CreateTile {
  constructor(data, className, parentDiv)  {
    this.parentDivName = parentDiv;
		this.currentProduct = data;
    this.containerClass = className;
    this.treeTileBlock = document.getElementsByClassName(parentDiv);
	}

  createHeadText(container) {
    let headText = this.createElement('p', `${this.parentDivName}_text`, this.currentProduct.name);
    container.appendChild(headText);
  }

  createHeadPrice(container) {
    let headPrice = this.createElement('p', `${this.parentDivName}_price`, `Цена:${this.currentProduct.price}грн`);
    container.appendChild(headPrice);
  }

  createElement(tag, tagClass, innerHTML) {
    let element = document.createElement(tag);
    element.className = tagClass;
    if (tag === "img") {
      element.src = 'img/' + this.currentProduct.photo;
    }
    if (tag === "button") {
      element.value = this.currentProduct.id;
    }
    if(innerHTML !== undefined) {
      element.innerHTML = innerHTML;
    }
    return element;
  }
  
	createContainer() {
		let container = document.createElement("div");
    container.className = this.containerClass;
    this.createImage(container);
    this.createHeadPrice(container);
    this.createHeadText(container);
    this.treeTileBlock[0].appendChild(container);
  }

  createImage(container) {
    let mainImage = this.createElement('div', `${this.parentDivName}_img`);
    let tilePhoto = this.createElement('img', `${this.parentDivName}_photo`);
    let imgButton = this.createElement('button', `${this.parentDivName}_details`, 'Подробнее');
    mainImage.appendChild(tilePhoto);
    mainImage.appendChild(imgButton);
    container.appendChild(mainImage);
  }

}