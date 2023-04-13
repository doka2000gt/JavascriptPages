let reimu;

function preload() {
	// 1, アニメーション
	loadAni("r_good", "img/reimu_good_01.png", 3);
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(32);
	noSmooth();

	// スプライト(霊夢)
	reimu = new Sprite(width/2, height/2, 45);
	reimu.shapeColor = color("white");
	reimu.ani = "r_good";// 2, アニメーションの適用
	reimu.scale = 4;// 3, スケールの変更
}

function draw(){
	background(0);
}