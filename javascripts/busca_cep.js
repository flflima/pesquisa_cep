$(function() {
	function onTarefaKeyDown() {
		
		var servico = "http://api.postmon.com.br/v1/cep/";
		var cep = $("#cep").val();
		
		console.log(servico + cep);
		
		function onCepDone(data) {
			console.log("A Casa do Código fica na " + data.logradouro);
			$("#cep").css("border", "2px solid green");
		}
		
		function onCepError(error) {
			console.log("Erro: " + error.statusText)
			$("#cep").css("border", "2px solid red");
		};

		$.getJSON(servico + cep)
		.done(onCepDone)
		.fail(onCepError);
		
	}
	
	$("#cep").focusout(onTarefaKeyDown);
}
);