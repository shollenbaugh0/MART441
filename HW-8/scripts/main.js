var paintswatchSelector = "#lesbian paint swatch";
var allpaintswatches = new Array();
class PaintswatchInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{

    var lesbian paint swatch = new PaintswatchInfo("#lesbian paint swatch", "images/lesbian paint swatch.png");
    allPaintswatches.push(lesbian paint swatch);

}
$(document).ready(function(){
    initializeArray();
    console.log(allPaintswatches.length);
    console.log(allPaintswatches[0].toString());
    console.log(allPaintswatches[0].theSelector);
    console.log(allPaintswatches[0].theImagePath);


    $(allPaintswatches[0].theSelector).attr("src", allPaintswatches[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);

        $(allPaintswatches[0].theSelector).fadeOut(3).fadeIn(1);

    });

});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
