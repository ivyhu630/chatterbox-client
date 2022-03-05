// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  findRoomnames: function(data) {
    var uniqueRoomnames = new Set();
    data.forEach((message) => {
      var currentRoom = message.roomname;
      uniqueRoomnames.add(currentRoom);
    });
    Rooms._data = uniqueRoomnames;
    // console.log(Rooms._data);
  },

  // addRoom: function(newRoom) {
  //   Rooms._data.add(newRoom);
  // }


};