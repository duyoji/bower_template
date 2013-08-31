define('app',
	[
		'controllers/SampleController',
		'models/SampleModel',
		'views/SampleView',
	], 
	function (SampleController, SampleModel, SampleView) {

		var sc = new SampleController();
		var sm = new SampleModel();
		var sv = new SampleView();

		console.log('sc className : ' + sc.className);
		console.log('sm className : ' + sm.className);
		console.log('sv className : ' + sv.className);

		return 'app.js loaded';
	}
);