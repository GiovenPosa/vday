class Button {
  constructor(label, w, h, targetPage) {
    this.button = createButton(label);
    this.button.size(w, h);
    this.targetPage = targetPage;
    //this.button.position((windowWidth - w) /2, (windowHeight - h) /2);
    this.button.mousePressed(() => this.switchPage());

    //this.button.style("position", "absolute");
    this.button.style("font-size", "16px");
    this.button.style("font-family", "futura");
    this.button.style("background-color", "#fccdd3");
    this.button.style("color", "#fca2cf");
    this.button.style("border", "2px solid");
    this.button.style("border-color", "#fca2cf")
    this.button.style("box-shadow", "none")
    this.button.style("border-radius", "5px");
  }

  setStyle(property, value) {
    this.button.style(property, value);
  }

  switchPage() {
    currentPage = this.targetPage;
  }
}