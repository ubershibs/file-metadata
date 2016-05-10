/* global $ */
$(document).ready(function() {
  $('#uploadform').on('submit', function(e){
    e.preventDefault();
    $('#response').empty().text("File is uploading...");
    $(this).ajaxSubmit({
      error: function(xhr) {
        $('#response').empty().text('Error: ' + xhr.status);
      },
      success: function(response){ 
        $('#response').empty().text(response);
      }
    });
  });
}); 
