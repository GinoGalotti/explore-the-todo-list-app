$(function () {
  var storage = new todo.store.InMemoryStorage();
  var domView = new todo.view.$.AppViewModel({
    'tasksList':$('.task-list-widget .task-list .task'),
    'newTaskDescription':$('.add-task-widget .txt'),
    'addTaskBtn':$('.add-task-widget .btn')
  });
  var model = new todo.model.Tasks(storage);
  var widget = new todo.widget.AppWidget(domView);
  var app = new todo.controller.AppController(model, widget);
  if (window.underTest) {
    // Trick for BDD integrated testing
    // We need to setup de starting data before starting the application
    window.startApp = app.start.bind(app);
    window.testStorage = storage;
  } else
    app.start();
});

