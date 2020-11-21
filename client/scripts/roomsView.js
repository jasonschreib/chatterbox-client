var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  //this is what happens when you select a room from the dropdown
  initialize: function() {
    //this somehow needs to only grab the message objects with matching roomname and then pass off to messagesview for re-render
    RoomsView.$select.on("change", RoomsView.roomSelection);
  },

  render: function(data) {
    //iterate through all of the array
    var array = data.results;
    var roomSet = new Set();
    for (var i = 0; i < array.length; i++) {
      //add the unique room names to the set
      roomSet.add(array[i].roomname);
    }
    console.log(roomSet);
      //iterate over the set and send those off to roomsView.renderRoom
      for (var room of roomSet) {
        // console.log(room);
        var myObj = {'room': room};
        RoomsView.renderRoom(myObj);
      }

  },

  renderRoom: function (roomObj) {
    console.log(RoomView.render);
    var htmlText = RoomView.render(roomObj);

    //append to the select options dropdown
    RoomsView.$select.append(htmlText);
  },

  roomSelection: function (event) {
    //How can I get the room I selected?
    // var selectedRoom;
    //filter messages in that room
    console.log($(this).val());
    console.log(this);
    console.log(Window.ourData);
    var fullArray = Window.ourData.results;
    var roomArray = [];
    for (var i = 0; i < fullArray.length; i++) {
      //make new data object wtih only that room messages
      if (fullArray[i].roomname === $(this).val()) {
        roomArray.push(fullArray[i]);
      }
    }
    console.log(roomArray);
    var myObj = {'results': roomArray};

    //re-render/pass off to messagesView
    MessagesView.render(myObj);




  }

};
