// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.handleClick();
  },

  render: function() {
    for (const roomname of Rooms._data) {
      var $room = RoomsView.renderRoom(roomname);
    }
  },

  renderRoom: function(roomname) {
    RoomsView.$select.prepend('<option>' + roomname + '</option>');
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    //Message.giveSelectedRoomname(roomname);
    // $('option').on('click', function(event) {
    // console.log('Select Clicked!');
    var roomname = $( '#myRooms option:selected' ).text();
    console.log('name is ', roomname);
    Messages.pullRoomSpecificData(roomname);
    $('#chats').empty();
    // console.log(Messages._data);
    MessagesView.render();
    // });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    $('.addRoom').on('click', (event) => {
      // console.log('click worked');
      var newRoomName = prompt('Please enter a new roomname');
      RoomsView.$select.prepend('<option>' + newRoomName + '</option>');

    });

  },



};

