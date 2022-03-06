// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // return the last user
  // add another message to our list
  pullData: function(data) {
    Messages._data = data;
  },

  pullRoomSpecificData: function (roomname) {
    var updatedData = [];
    for (const message of Messages._data) {
      if (message.roomname === roomname) {
        updatedData.push(message);
      }
    }
    Messages._data = updatedData;
  },
};