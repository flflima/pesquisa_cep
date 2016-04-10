$(function() {
	function onCepFocusOut() {
		
		var servico = "http://api.postmon.com.br/v1/cep/";
		var cep = $("#cep").val();
		
		console.log(servico + cep);
		
		function onCepDone(data) {
			console.log("O endereço é " + data.logradouro);
			$("#cep").removeClass("input_erro");
			$("#cep").addClass("input_sucesso");
			$("#mensagem").remove();
			$("#cep").parent().append($("<div id='mensagem' />")
										.text("Endereço: " + data.logradouro));
		}
		
		function onCepError(error) {
			console.log("Erro: " + error.statusText)
			$("#cep").removeClass("input_sucesso");
			$("#cep").addClass("input_erro");
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