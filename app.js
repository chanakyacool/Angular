(function() {
	// body...
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

		var gems =[
			{
				name: 'Kohinoor',
				price: 2,
				description: 'oldest blue daimond',
				images: [ 
						 "images/kohinoor_small.jpg",
						  "images/kohinoor_thumb.jpg"
				 
				],
				canPurchase: true
			},
			{
				name: "Pentagonal Gem",
				price: 5.95,
				description: "Rare kind of Gem",
				images: [ 
						 "images/pentagonal_small.jpg",
						  "images/pentagonal_thumb.jpg"
				 
				],
				canPurchase: false
			},
			{
				name: "Ruby Gem",
				price: 9.99,
				description: "Rubary Gem ",
				images: [ 
						 "images/ruby_small.jpg",
						  "images/ruby_thumb.jpg"
				 
				],
				canPurchase: true
			},
		];
})();