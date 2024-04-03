(function(){
    bg = ['1.jpg','2.jpg','3.jpg','4.png','5.jpg'];
    random = Math.floor(Math.random()*(bg.length))
    let bg_1 = bg[random] 
    let img = document.body;
    img.style.backgroundImage=`url("${bg_1}")`;
    img.style.backgroundSize = 'cover'
}())
