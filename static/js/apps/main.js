$(document).ready(function() {
	catalog.forEach(function(el){
		console.log(el.id);
		console.log(el.name);
		console.log(el.description)
		console.log(el.price);
		console.log(el.currency);
		var allProducts = `
					<div class="center-align col l2 m2 s6">
						<div class="row">
							<img src="`+ el.imageURL +`" alt="image`+ el.id +`">
						</div>
						<div class="row">
							<b>`+ el.name +`</b><br>
							<p>`+ el.description +`</p><br>
							<b>`+ el.currency + el.price+`</b>
						</div>
						<div class="row add">
							<a class="waves-effect waves-light btn"><i class="material-icons left">add_shopping_cart</i>button</a>
						</div>
					</div>
		`
		allProducts = $(allProducts);
		$("#product-container").append(allProducts);

	})
});