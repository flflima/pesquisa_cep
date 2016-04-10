$(function() {
	function onCepFocusOut() {
		
		var servico = "http://api.postmon.com.br/v1/cep/";
		var cep = $("#cep").val();
		
		console.log(servico + cep);
		
		function onCepDone(data) {
			console.log("O endereço é " + data.logradouro);
			$("#cep").css("border", "2px solid green");
			$("#mensagem").remove();
			$("#cep").parent().append($("<div id='mensagem' />")
										.text("Endereço: " + data.logradouro));
		}
		
		function onCepError(error) {
			console.log("Erro: " + error.statusText)
			$("#cep").css("border", "2px solid red");
			$("#mensagem").remove();
			$("#cep").parent().append($("<div id='mensagem' />")
										.text("Erro: " + error.statusText));
		};

		$.getJSON(servico + cep)
		.done(onCepDone)
		.fail(onCepError);
		
	}
	
	$("#cep").focusout(onCepFocusOut);
}
);