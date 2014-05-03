window.amGloble = {
	page : {
		
	},
	tab : {

	}
}

window.jQuery = window.$ = jQuery;
$(function () {
	$("#Operation").bind("click",function(e){
		 document.location = "operation.html";
	});
	
	$("#Group").bind("click",function(e){
		 document.location = "group.html";
	});
	
	$("#Policy").bind("click",function(e){
		 document.location = "policy.html";
	});		
});
