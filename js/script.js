

$("#btn").on("click", function(){

	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();

	var regName = /^([a-zA-Z]+)$/;
	if(regName.test(name)){
		$("#name").css("border-color", "#1dff00");
		$("#nameErr").text(" ");
		var myName = name;
	}else{
		$("#name").css("border-color", "red");
		$("#nameErr").text("Вводите имя в которое должно содержать толко буквы a-z A-Z ");
	};

	var regphone = /^([+][0-9-]+)$/;
	if (regphone.test(phone)){
		$("#phone").css("border-color", "#1dff00");
		$("#phonelErr").text(" ");
		var myPhone = phone;
	}else{
		$("#phone").css("border-color", "red");
		$("#phoneErr").text("Введите номер телефона");
	};

	var regEmail = /[a-zA-Z]+@[a-zA-Z]+[.][a-zA-Z]+/;
	if (regEmail.test(email)){
		$("#email").css("border-color", "#1dff00");
		$("#emailErr").text(" ");
		var myEmail = email
	}else{
		$("#email").css("border-color", "red");
		$("#emailErr").text("Введите адрес электронной почты");
	};

	var regText = /^([a-zA-Z])/
	var regAddress = /[a-zA-Z0-9-/.]/;
	var address = $(".divAdd");
	var obj = {};
	$(address).each(function(index, value){
		
			if (regText.test($(this).find("input[name='country']").val())){
			$(this).find("input[name='country']").css("border-color", "#1dff00");
			$("#addressErr").text(" ");
			obj.country = $(this).find("input[name='country']").val();
			}else{
				$(this).find("input[name='country']").css("border-color", "red");
				$("#addressErr").text("Введите адрес");
			};
		
			if (regText.test($(this).find("input[name='state']").val())){
			$(this).find("input[name='state']").css("border-color", "#1dff00");
			$("#addressErr").text(" ");
			obj.state = $(this).find("input[name='state']").val();
			}else{
				$(this).find("input[name='state']").css("border-color", "red");
				$("#addressErr").text("Введите адрес");
			};
		
			if (regText.test($(this).find("input[name='city']").val())){
			$(this).find("input[name='city']").css("border-color", "#1dff00");
			$("#addressErr").text(" ");
			obj.city = $(this).find("input[name='city']").val();
			}else{
				$(this).find("input[name='city']").css("border-color", "red");
				$("#addressErr").text("Введите адрес");
			};

			if (regAddress.test($(this).find("input[name='address']").val())){
			$(this).find("input[name='address']").css("border-color", "#1dff00");
			$("#addressErr").text(" ");
			obj.address = $(this).find("input[name='address']").val();
			}else{
				$(this).find("input[name='address']").css("border-color", "red");
				$("#addressErr").text("Введите адрес");
			};
		
		
	});
	
	var user = {
		name: myName, 
		phone: myPhone, 
		email: myEmail, 
		address: [obj]
	};
	
	console.log(user);
});

$("#btnPlus").on("click", function(){
	var cl = $(".divAdd:first").clone();
	cl.addClass("clone");
	$(".add").append(cl);
});
$("#btnMinus").on("click", function(){
	var cl = $(".clone:last-child").remove();
});


