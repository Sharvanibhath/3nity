jQuery(function($){
    var socket;
    socket = io.connect();
    var $messageForm = $('#send_message');
    var $messageBox = $('#message');
    var $chat = $('#chat-box');

    $messageForm.submit(function(e){
        e.preventDefault();
        socket.emit('Send message',$messageBox.val());
        $messageBox.val(' ');
        console.log("Message sent to server ");
    });

    socket.on('New message',function(data){
        $chat.append('<div class="bubble-left">'+data + '</div>');
    });
});