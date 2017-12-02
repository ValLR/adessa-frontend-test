$(document).ready(function() {
	var value = 0;
	$("#value").text(value);	
	catalog.forEach(function(el){
		console.log(el.id);
		console.log(el.name);
		console.log(el.description)
		console.log(el.price);
		console.log(el.currency);
		var allProducts = `

					<div class="center-align col l2 m2 s6 product-box">
						<img src="`+ el.imageURL +`" alt="image`+ el.id +`">
						<p><b>`+ el.name +`</p>
						<p>`+ el.currency + el.price+`</b></p>
						<a class="waves-effect waves-light btn add-button" id="`+ el.id +`"><i class="material-icons left">add_shopping_cart</i>Add to Cart</a>
					</div>
		`
		allProducts = $(allProducts);
		$("#product-container").append(allProducts);


	});
	$(".add-button").click(function(){
		var element = $(this).parent();
		$("#cartProducts").append(element);
		var id= $(this).attr("id");
		$("#"+ id).removeClass("add-button").addClass("remove-button");
		$("#"+ id).text("");
		$("#"+ id).append(`<i class="material-icons left">clear</i>Remove`);
		if(id==="1"){
			value += 250;
			$("#value").text(value);
		}
		else if(id==="2"){
			value += 350;
			$("#value").text(value);
		}
		else if(id==="3"){
			value += 200;
			$("#value").text(value);
		}
		else if(id==="4"){
			value+=500;
			$("#value").text(value);
		}
		else if(id===5){
			value+=100;
			$("#value").text(value);
		}

	})



/*

		$("#1").click(function(){
			console.log(value)
			$("#cartProducts").append(`
					<div class="center-align col l2 m2 s6 box-1">
						<div class="row">
							<img src="http://placehold.it/150/1b21a0/ffffff">
						</div>
						<div class="row">
							<b>product A<br>
							<b>$250</b>
						</div>
						<div class="row">
							<a class="waves-effect waves-light btn clear-button" id="cle1"><i class="material-icons left">clear</i>Remove from cart</a>
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
							<a class="waves-effect waves-light btn clear-button" id="cle2"><i class="material-icons left">clear</i>Remove from cart</a>
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
							<a class="waves-effect waves-light btn clear-button" id="cle3"><i class="material-icons left">clear</i>Remove from cart</a>
						</div>
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
							<a class="waves-effect waves-light btn clear-button" id="cle4"><i class="material-icons left">clear</i>Remove from cart</a>
						</div>
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
							<a class="waves-effect waves-light btn clear-button" id="cle5"><i class="material-icons left">clear</i>Remove from cart</a>
						</div>
					</div>
				`			
			)
			value += 100;
			$("#val").text(value);
		});
*/
});