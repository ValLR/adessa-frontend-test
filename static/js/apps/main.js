$(document).ready(function() {
	var value = 0;
	$("#val").text(value);
		$("#clear1").click(function(){
			alert("no")
		});

		$("#cle2").click(function(){
			alert("no")
		});

		$("#cle3").click(function(){
			alert("no")
		});

		$("#cle4").click(function(){
			alert("no")
		});

		$("#cle5").click(function(){
			alert("no")
		});																
	catalog.forEach(function(el){
		console.log(el.id);
		console.log(el.name);
		console.log(el.description)
		console.log(el.price);
		console.log(el.currency);
		var allProducts = `

					<div class="center-align col l2 m2 s6 product-box">
						<div class="row">
							<img src="`+ el.imageURL +`" alt="image`+ el.id +`">
						</div>
						<div class="row">
							<b>`+ el.name +`<br>
							<b>`+ el.currency + el.price+`</b>
						</div>
						<div class="row add">
							<a class="waves-effect waves-light btn add-button" id="`+ el.id +`"><i class="material-icons left">add_shopping_cart</i>Add to Cart</a>
						</div>
					</div>
		`
		allProducts = $(allProducts);
		$("#product-container").append(allProducts);


	});


	
		$("#1").click(function(){
			console.log(value)
			$("#cartProducts").append(`
					<div class="center-align col l2 m2 s6 box-1">
						<div class="row">
							<img src="http://placehold.it/150/1b21a0/ffffff">
						</div>
						<div class="row">
							<b>product A<br> $250</b>
						</div>
						<div class="row">
  							<a id="clear1" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">clear</i></a>
						</div>
					</div>
				`			
			)
			value += 250;
			$("#val").text(value);
		});

		$("#2").click(function(){
			console.log(value)
			$("#cartProducts").append(`
					<div class="center-align col l2 m2 s6 box-2">
						<div class="row">
							<img src="http://placehold.it/150/bc4125/ffffff">
						</div>
						<div class="row">
							<b>product A<br>
							<b>$350</b>
						</div>
						<div class="row">
  							<a id="clear1" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">clear</i></a>
						</div>
					</div>
				`			
			)
			value += 350;
			$("#val").text(value);

		});		
		$("#3").click(function(){
			console.log(value)
			$("#cartProducts").append(`
					<div class="center-align col l2 m2 s6 box-3">
						<div class="row">
							<img src="http://placehold.it/150/5abc25/ffffff">
						</div>
						<div class="row">
							<b>product C<br>
							<b>$200</b>
						</div>
						<div class="row">
  							<a id="clear1" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">clear</i></a>						</div>
					</div>
				`			
			)
			value += 200;
			$("#val").text(value);

		});
		$("#4").click(function(){
			console.log(value)
			$("#cartProducts").append(`
					<div class="center-align col l2 m2 s6 box-4">
						<div class="row">
							<img src="http://placehold.it/150/ebf742/ffffff">
						</div>
						<div class="row">
							<b>product D<br>
							<b>$500</b>
						</div>
						<div class="row">
  							<a id="clear1" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">clear</i></a>						</div>
					</div>
				`			
			)
			value += 500;
			$("#val").text(value);

		});
		$("#5").click(function(){
			console.log(value)
			$("#cartProducts").append(`
					<div class="center-align col l2 m2 s6 box-5">
						<div class="row">
							<img src="http://placehold.it/150/d121c8/ffffff">
						</div>
						<div class="row">
							<b>product D<br>
							<b>$100</b>
						</div>
						<div class="row">
  							<a id="clear1" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">clear</i></a>						</div>
					</div>
				`			
			)
			value += 100;
			$("#val").text(value);
		});


	

});