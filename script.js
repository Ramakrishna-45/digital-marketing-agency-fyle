
document.getElementById('contactButton').onclick = function() {
    document.getElementById('contactForm').style.display = 'block';
};

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('contactForm').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('contactForm')){
        document.getElementById('contactForm').style.display = 'none';
    }
};

function box1_fun(){
    var box2 = document.querySelector('.box2')
    var box3 = document.querySelector('.box3')
    var box1 = document.querySelector('.box1')

    box1.style.backgroundColor = '#FF3147';
    box2.style.backgroundColor = '#F6F6F6';
    box3.style.backgroundColor = '#F6F6F6';

    var image = document.getElementById('mainImage');
    image.src = 'asserts/image@2x.png';
}

function box2_fun(){
    var box2 = document.querySelector('.box2')
    var box3 = document.querySelector('.box3')
    var box1 = document.querySelector('.box1')

    box1.style.backgroundColor = '#F6F6F6';
    box2.style.backgroundColor = '#FF3147';
    box3.style.backgroundColor = '#F6F6F6';

    var image = document.getElementById('mainImage');
    image.src = 'asserts/food_img2.jpg';

}

function box3_fun(){
    var box2 = document.querySelector('.box2')
    var box3 = document.querySelector('.box3')
    var box1 = document.querySelector('.box1')

    box1.style.backgroundColor = '#F6F6F6';
    box2.style.backgroundColor = '#F6F6F6';
    box3.style.backgroundColor = '#FF3147';

    var image = document.getElementById('mainImage');
    image.src = 'asserts/food_img3.jpeg';
}