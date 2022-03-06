// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    MessagesView.handleClick();
    MessagesView.handleRefresh();
  },

  render: function() {
    Messages.pullData(Messages._data);
    if (Messages._data !== null) {
      var top20 = Messages._data.slice(0, 20);
      top20.forEach((message) => {
        MessagesView.renderMessage(message);
      });
    }
  },

  renderMessage: function(message) {

    var $currentMessage = MessageView.render(message);
    $('#chats').prepend($currentMessage);
    return;
  },

  handleClick: function(event) {
    // var username = $(event.target).data('username');
    $('#chats').on('click', '.username', (event) => {
      var username = $(event.target).data('username');
      if (username === undefined) { return; }
      Friends.toggleStatus(username, MessagesView.render);
    });
  },

  handleRefresh: function() {
    var $refreshButton = $('.refreshButton');
    $refreshButton.on('click', function(event) {
      $('#chat').empty();
      MessagesView.render();
    });
  },
};