class Map {
    constructor(el, rect = 10){
        this.el = el;
        this.rows = Math.ceil(Map.getStyle(el, "width") / rect);
        this.cells = Math.ceil(Map.getStyle(el, "height") / rect);
    }
    static getStyle(el, attr) {
        return parseFloat(getComputedStyle(el)[attr]);
    }
    static setStyle(el, attr, val){
        
    }
}

{
    let map = document.querySelector(".map");
    let gameMap = new Map(map);
    console.log(gameMap);
}