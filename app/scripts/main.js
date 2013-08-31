requirejs.config({
    paths : {
        "jquery"     : "vendor/jquery/jquery",
        "underscore" : "vendor/underscore-amd/underscore",
        "backbone"   : "vendor/backbone-amd/backbone",
        "Shirt"      : "views/shirt",
        "LongShirt"  : "views/LongShirt",
        "Employee"   : "models/Employee",
    }
});

requirejs(["LongShirt"], function (LongShirt) {
    var ls   = new LongShirt();
    var ls2  = new LongShirt();

    ls.setColor('red');
    ls.setSize('XLarge');

    // ls2.setColor('blue');
    // ls2.setSize('xsmall');

    console.log('1 color : ' + ls2.getColor() + ', size : ' + ls2.getSize());
    console.log('2 color : ' + ls2.getColor() + ', size : ' + ls2.getSize());
    console.log('3 color : ' + ls.getColor() + ', size : ' + ls.getSize());
    console.log('4 color : ' + ls.getColor() + ', size : ' + ls.getSize());

    console.log('const : ' + ls2.constructor);
});