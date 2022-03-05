// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // create var for current user
    // user messageView.render

    // iterate over dataset
    // renderMessage ({})
    console.log(Messages._data);
    Messages.pullData(Messages._data);

    if (Messages._data !== null) {
      Messages._data.forEach((message) => {
        var $currentMessage = MessagesView.renderMessage(message);
        console.log('CurrentMessage', message);
        $('#chats').prepend($currentMessage);
      } );
    }



    // for (var i in App.dataset) {
    //   let currentUser = (index) => app.dataset[i].username;
    // },
    // prepend to chat
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // .html and .prepend
    // turn message into a dom node
    var username = message.username;
    var text = message.text;
    var roomname = message.roomname;
    console.log(username);
    return MessageView.render({username: username, text: text, roomname: roomname});

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};