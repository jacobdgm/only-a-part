let img;
let slider;

let pics = ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Presentation_Vase_MET_DT8799.jpg/800px-Presentation_Vase_MET_DT8799.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Syncerus_caffer_african_buffalo_skull_MNHN.jpg/1024px-Syncerus_caffer_african_buffalo_skull_MNHN.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Aulacorhynchus_prasinus_-perching_on_branch-8a.jpg/682px-Aulacorhynchus_prasinus_-perching_on_branch-8a.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Amarillo_Eric_110805_RixFM2011_0841.jpg/1024px-Amarillo_Eric_110805_RixFM2011_0841.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mairie_Chanteloup_Brie_1.jpg/1024px-Mairie_Chanteloup_Brie_1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Japan_US_Treaty_of_Mutual_Security_and_Cooperation_19_January_1960.jpg/1024px-Japan_US_Treaty_of_Mutual_Security_and_Cooperation_19_January_1960.jpg' ];

function preload() {
	img = loadImage(pics[Math.floor(Math.random() * pics.length)]); 
}

function setup() {
	createCanvas(img.width, img.height);
	image(img, 0, 0, width, height);
	slider = createSlider(10,100,50,10);
	slider.position(10,10);
	slider.style('width', '80px');
}

function draw() {
	image(img, 0, 0, width, height);
	let viewportWidth = slider.value();
	noStroke()
	fill('black')
	rect(- width, mouseY - img.height - viewportWidth, width * 3, height) //top

	//fill('green')
	rect(- width, mouseY + viewportWidth, width * 3, height) // bottom

	//fill('blue')
	rect(mouseX - img.width - viewportWidth, - height, width, height * 3) //left

	//fill('purple')
	rect(mouseX + viewportWidth, - height, width, height * 3) // right

} 