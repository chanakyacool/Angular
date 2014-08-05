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
				images: [{
						full: 'http://crazyhits.mobie.in/blog_images/koh-i-noor-diamond-aeaxd4-xl.jpg',
						thumb: 'http://lh5.ggpht.com/_BfC6j03vee0/TAYvj8r3fyI/AAAAAAAAB1o/ILWtf6HYhYQ/koh-i-noor-diamond_thumb%5B7%5D.jpg?imgmax=800'
				},
				],
				canPurchase: true
			},
			{
				name: "Pentagonal Gem",
				price: 5.95,
				description: "Rare kind of Gem",
				images: [{
						full: 'http://cdn2.fast-serve.net/cdn/antiquediamondring/GEMSTONE-CUTS_390_290_587U4.jpg',
						thumb: 'http://cdn2.fast-serve.net/cdn/antiquediamondring/GEMSTONE-CUTS_390_290_587U4.jpg'
				},
				],
				canPurchase: false
			},
			{
				name: "Ruby Gem",
				price: 9.99,
				description: "Rubary Gem ",
				images: [{
						full: 'http://datastore02.rediff.com/h450-w670/thumb/6656615C6B6161656B706668/bmhxdrv0iaf9zd4x.D.0.RUBY.jpg',
						thumb: 'http://datastore02.rediff.com/h450-w670/thumb/6656615C6B6161656B706668/bmhxdrv0iaf9zd4x.D.0.RUBY.jpg'
				},
				],
				canPurchase: true
			},
		];
})();