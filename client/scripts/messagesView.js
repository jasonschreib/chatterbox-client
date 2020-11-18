var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {

  },

  // var message = {
  //   username: 'Mel Brooks',
  //   text: 'It\'s good to be the king',
  //   roomname: 'lobby'
  // };

  renderMessage: function(message) {
    //message is an object that contains a username, text, and roomname

    //declare a render variable - render is equal to a template we create
    // var render = _.template(`
    //   <div class="chat">
    //     <div class="username"s><%- message.username %></div>
    //     <div><%- message.text %></div>
    //   </div>
    // `);
    console.log(message);
    console.log(message.username);
    console.log(message.text);

    var templateString = `
      <div class="chat">
        <div class="username"s><%- message.username %></div>
        <div><%- message.text %></div>
      </div>
    `;

    var templateFunction = _.template(templateString);

    var htmlDivsforAppend = templateFunction(message);
    console.log('DO WE SEE THIS MESSAGE');
    console.log(htmlDivsforAppend);
    //this template will include a div for username, text, and roomName


    // //need to take render and append it to the div with id "chat"
    $('#chats').append(render(message));
  }

};