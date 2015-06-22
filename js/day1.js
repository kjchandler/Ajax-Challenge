$('#instagram-form').submit(function(event){
	event.preventDefault();
	var frm = $('#instagram-form');
	var username = frm.find('input[name="q"]');
	var error = false;

	console.log('Form Submitted');

	if(username.val() == ''){
		username.css('border-color','red');
			error = true;
	}

	if(!error){
		//do my ajax here
		$.ajax({
			url:frm.attr('action'),
			type:frm.attr('method'),
			data:frm.serialize(),
			dataType:'jsonp',
			success:function(data){
				//console.log("hello");
				$('#instagram-users').html('');
				for(var i=0; i < 5; i++){
					var i_username = data.data[i].username;
					var i_profile_picture = data.data[i].profile_picture;
					var i_fullname = data.data[i].full_name;
					$('#instagram-users').append('<li><a href="https://instagram.com/'+i_username+'"><img class="profile-photo" src="'+i_profile_picture+'">'+i_fullname+'</a></li>');
					//$('#instagram-users').append('<li><a href="https://instagram.com/'+i_username+'"><img class="profile-photo" src="'+i_profile_picture+'">'+i_fullname+'</a></li>');

					//$('#instagram-users').append('<li>'+i_username+'</li>');

				}


			},
			error:function(data){
				console.log(data);
				//console.log("check");
			}
		});
	}
});

$('#username').keyup(function(){
	$('instagram-form').trigger('submit');

});






















