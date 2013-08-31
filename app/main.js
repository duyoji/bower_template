requirejs.config({
    baseUrl: "./scripts/",
    paths : {
        'underscore'   : 'vendor/lodash/dist/lodash.min', // use string 'underscore' in backbone.js at line:41
        'jquery'       : 'vendor/jquery/jquery.min',
        'backbone'     : 'vendor/backbone/backbone-min',
        'localstorage' : 'vendor/backbone.localStorage/backbone.localStorage-min',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'localstorage' : {
            deps: ['backbone'],
            exports: 'Backbone.LocalStorage'
        },
    }
});


require(['app'], function (App) {
    console.log('' + App);
});



/*******************
 * load test
 *******************/
// requirejs(['underscore', 'jquery', 'backbone','localstorage'], function () {
//   console.log('_ : ' + _);
//   console.log('$ : ' + $);
//   console.log('backbone : ' + Backbone);
//   console.log('localstorage : ' + Backbone.LocalStorage);
// });