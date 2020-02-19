//Map类
class Map {
    constructor(el, rect = 10) {
        this.el = el;
        this.rect = rect;
        this.data = [];
        this.rows = Math.ceil(Map.getStyle(el, "width") / rect);
        this.cells = Math.ceil(Map.getStyle(el, "height") / rect);
        Map.setStyle(el, "height", this.rows * this.rect);
        Map.setStyle(el, "width", this.cells * this.rect);
    }
    static getStyle(el, attr) {
        return parseFloat(getComputedStyle(el)[attr]);
    }
    static setStyle(el, attr, val) {
        el.style[attr] = val + 'px';
    }
    setData(newData) {
        this.data = this.data.concat(newData);
    }
    clearData() {
        this.data.length = 0;
    }
    include({x, y}){
        return this.data.some(item=>item.x==x&&item.y==y);
    }
    render() {
        this.el.innerHTML = this.data.map(item => {
            return `<span style="
            position:absolute;
            left:${item.x * this.rect}px;
            top:${item.y * this.rect}px;
            width:${this.rect}px;
            height:${this.rect}px;
            background:${item.color};"></span>`;
        }).join('');
    }
}

{
    let map = document.querySelector(".map");
    let gameMap = new Map(map);
    gameMap.setData({
        x: 15,
        y: 20,
        color: "red"
    })
    gameMap.setData([
        {
            x: 1,
            y: 10,
            color: "green"
        },
        {
            x: 2,
            y: 10,
            color: '#fff'
        },
        {
            x: 3,
            y: 10,
            color: '#fff'
        }
    ])
    gameMap.render();
    console.log(gameMap);
}