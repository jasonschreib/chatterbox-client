var FormView = {

  $form: $('form'),

  initialize: function() {

    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.on('refresh', FormView.handleRefresh);
  },

  handleSubmit: function(event) {


    // what do we do when the submit button is clicked?
    //need to store our username somewhere
    //need to store the message somewhere
    //take the text in #message id and package it in a message object
    //pass it along to Parse.create

    // Stop the browser from submitting the form
    event.preventDefault();

    //can we make a console.log that displays what in the text box?
    var textString = $('#message').val();
    console.log(textString);

    var ourUserName = window.location.search;
    var ourUserName = ourUserName.slice(10);
    console.log(ourUserName);

    //create roomName
    var roomName;
    roomName = $('#newroom').val();



    // var message = {
    //   username: 'Mel Brooks',
  //   text: 'It\'s good to be the king',
  //   roomname: 'lobby'
  // };

    var message = {
      username: ourUserName,
      text: textString,
      roomname: roomName
    };


    Parse.create(message, function () { location.reload(); });

    console.log(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  handleRefresh: function(event) {
    console.log('click on refresh');

  }

};