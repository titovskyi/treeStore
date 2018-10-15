
export class CreatePopup {
  constructor(data, className, parentDiv) {
    this.parentDivName = parentDiv;
		this.currentProduct = data;
    this.containerClass = className;
    this.treeTileBlock = document.getElementsByClassName(parentDiv);
  }

  createContainer() {
		let container = document.createElement("div");
    container.className = this.containerClass;
    this.createHeadText(container);
    this.createImage(container);
    this.createHeadPrice(container);
    this.treeTileBlock[0].appendChild(container);
  }

  createImage(container) {
    let mainImage = this.createElement('div', `${this.parentDivName}_img`);
    let tilePhoto = this.createElement('img', `${this.parentDivName}_photo`);
    mainImage.appendChild(tilePhoto);
    container.appendChild(mainImage);
  }

}
