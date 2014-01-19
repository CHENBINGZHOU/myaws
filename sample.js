 var myFirebase = require('firebase')
 var myajax = require('jquery.min')
 var myDataRef = new myFirebase.Firebase('https://nestlabs-neighbour.firebaseio.com/users/13/structures/f6ab7cf0-5272-11e3-b09f-22000aecc032/');
	  myDataRef.auth("6OzN9nzHcn5kc0wrrHTqJWIvhnlXv5JkdMmZLDg7", function(error) {
  if(error) {
    alert("Login Failed!", error);
  } else {
  }
});
      myDataRef.on('value', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.away,message.away);
			$.myajax.ajax({
						url: "http://testportalkiri3.appspot.com/Redirect",
				type: 'get',

			});
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(name).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };