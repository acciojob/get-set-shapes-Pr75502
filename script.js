//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width
		this._height=height
	}
	get width(){
		return this._width
	}
	set width(value){
		this._width=value
	}
	get height(){
		return this._height
	}
	set height(value){
		return this._height=value
	}
	
	getArea(){
		return (this._width*this._height)
	}
}

class Square extends Rectangle{
	constructor(side){
		super(side,side)
	}
	get side(){
		return this._width
	}
	set side(value){
		this._width=value
		this._height=value
	}
	getPerimeter(){
		return 4*this.side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
