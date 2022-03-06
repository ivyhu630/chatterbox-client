// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    // RoomsView.initialize();
    // MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.fetch(RoomsView.initialize);
    App.fetch(MessagesView.initialize);



    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    setInterval(function() {
      App.fetch(App.stopSpinner);
    }, 5000);
    // setTimeout(function() {
    //   RoomsView.initialize();
    //   MessagesView.initialize();
    // }, 10000);

    // setInterval(App.fetch, 10000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);

      Messages.pullData(data);
      Rooms.findRoomnames(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
