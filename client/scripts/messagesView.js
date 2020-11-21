var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on("click", MessagesView.styleChange);
  },

  //this takes in the big data object
  render: function(data) {
    //delegates single messages to renderMessage
    console.log('rendering messages');
    MessagesView.$chats.empty();


    var resultsArray = data.results;
    //iterate over the resultsArray
    for (var i = 0; i < resultsArray.length; i++) {
      MessagesView.renderMessage(resultsArray[i]);
      console.log(data.results[i].roomname);
    }
  },

  // var message = {
  //   username: 'Mel Brooks',
  //   text: 'It\'s good to be the king',
  //   roomname: 'lobby'
  // };

  renderMessage: function(message) {
    //console.log(message.username);
    message.username = message.username || 'anonymous';
    message.text = message.text || '';
    var htmlText = MessageView.render(message);
    //console.log(htmlText);

    //append this to id chats
    MessagesView.$chats.append(htmlText);
  },

  styleChange: function (event) {
    //find all divs that match the current selection
    //console.log($(this).val());
    console.log(event.target.innerText);
    var ourFriend = event.target.innerText;

    $(`.username:contains(${ourFriend})`).css('background-color', 'red');
    //$('.username:contains(' + ourFriend + ')').css('background-color', 'red');


  }

};

