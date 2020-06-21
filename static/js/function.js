var fgimage;
function uploadimage() {
    var c1 = document.getElementById("1canvas");
    var b1 = document.getElementById("file-upload1");
    fgimage = new SimpleImage(b1);
    fgimage.drawTo(c1);
}

var bgimage;
function uploadimage2() {
    var c1 = document.getElementById("2canvas");
    var b1 = document.getElementById("file-upload2");
    bgimage = new SimpleImage(b1);
    bgimage.drawTo(c1);
}


function fusion() {
    var output = new SimpleImage(fgimage.getWidth(), 
                            fgimage.getHeight());

    for (var pixel of fgimage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
            var bgpixel = bgimage.getPixel(x, y);
            output.setPixel(x, y, bgpixel);
        }
        
        else {
            output.setPixel(x, y, pixel);
        }
    }
    var c3 = document.getElementById("3canvas");
    output.drawTo(c3);
}