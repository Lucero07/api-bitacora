// $(document).ready(function(){
//    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
//    $('.modal').modal();
//  });


 $(document).ready(function () {
 	$('.modal').modal();
  	$('[data-publication]').on('click', function (event) {
 		let container = document.getElementById('publicaciones');
 		let type = $(event.currentTarget).data('publication');
 		publish(container, type);
 	});
 });
