(function() {
	// body...
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

		var gem ={
			name: 'Kohinoor',
			price: 2.95,
			description: 'oldest blue daimond'
		}
})();