var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
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
  }

};