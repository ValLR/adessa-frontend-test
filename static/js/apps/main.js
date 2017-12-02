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
		var allProductsHide = `

					<div class="center-align col l2 m2 s6 product-box hide `+ el.id +`" id="`+ el.id +`hide">
						<img src="`+ el.imageURL +`" type="image" alt="`+ el.id +`">
						<p><b>`+ el.name +`</p>
						<p>`+ el.currency + el.price+`</b></p>
						<a class="waves-effect waves-light btn clear-button"><i class="material-icons left">clear</i>Remove</a>
					</div>
		`		
		allProducts = $(allProducts);
		$("#product-container").append(allProducts);
		$("#cartProducts").append(allProductsHide);


	});
	$(".clear-button").click(function(){
			var element = $(this).parent();
			var id = $(element).attr("id");
			var id_show = $("#"+id).attr("class").split(" ").pop();
			var parentElement= $("#"+id_show).parent();
			$(parentElement).removeClass("hide");
			$("#"+id).addClass("hide");		
	});

	$(".add-button").click(function(){
		var element = $(this).parent();
		var id = $(this).attr("id");
		$(element).addClass("hide");
		$("#"+id+"hide").removeClass("hide");
		if(id==="1"){
			value += 250;
			$("#value").text(value);
		}
		if(id==="2"){
			value += 350;
			$("#value").text(value);
		}
		if(id==="3"){
			value += 200;
			$("#value").text(value);
		}
		if(id==="4"){
			value += 500;
			$("#value").text(value);
		}
		if(id==="5"){
			value += 100;
			$("#value").text(value);
		}						


/*		var element = $(this).parent();
		$("#cartProducts").append(element);
		var id= $(this).attr("id");
		$("#"+ id).removeClass("add-button").addClass("remove-button");
		$("#"+ id).text("");
		$("#"+ id).append(`<i class="material-icons left">clear</i>Remove`);
		if(id==="1"){
			value += 250;
			$("#value").text(value);/*
			$(".remove-button").click(function(){
				var element = $(this).parent();
				$("#product-container").append(element);
				$("#"+ id).removeClass("remove-button").addClass("add-button");
				$("#"+ id).text("");
				$("#"+ id).append(`<i class="material-icons left">add_shopping_cart</i>Add to cart`);				
				value -= 250;
				$("#value").text(value);
			});
		}
		else if(id==="2"){
			value += 350;
			$("#value").text(value);
			$(".remove-button").click(function(){
				var element = $(this).parent();
				$("#product-container").append(element);
				$("#"+ id).removeClass("remove-button").addClass("add-button");
				$("#"+ id).text("");
				$("#"+ id).append(`<i class="material-icons left">add_shopping_cart</i>Add to cart`);				
				value -= 350;
				$("#value").text(value);	
			});			
		}
		else if(id==="3"){
			value += 200;
			$("#value").text(value);
			$(".remove-button").click(function(){
				var element = $(this).parent();
				$("#product-container").append(element);
				$("#"+ id).removeClass("remove-button").addClass("add-button");
				$("#"+ id).text("");
				$("#"+ id).append(`<i class="material-icons left">add_shopping_cart</i>Add to cart`);				
				value -= 200;
				$("#value").text(value);	
			});			
		}
		else if(id==="4"){
			value+=500;
			$("#value").text(value);
			$(".remove-button").click(function(){
				var element = $(this).parent();
				$("#product-container").append(element);
				$("#"+ id).removeClass("remove-button").addClass("add-button");
				$("#"+ id).text("");
				$("#"+ id).append(`<i class="material-icons left">add_shopping_cart</i>Add to cart`);				
				value -= 500;
				$("#value").text(value);	
			});
		}
		else if(id===5){
			value+=100;
			$("#value").text(value);
			$(".remove-button").click(function(){
				var element = $(this).parent();
				$("#product-container").append(element);
				$("#"+ id).removeClass("remove-button").addClass("add-button");
				$("#"+ id).text("");
				$("#"+ id).append(`<i class="material-icons left">add_shopping_cart</i>Add to cart`);				
				value -= 100;
				$("#value").text(value);	
			});
		}*/

	})


});