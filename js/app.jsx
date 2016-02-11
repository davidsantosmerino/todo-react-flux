import React from 'react';
import ReactDOM from 'react-DOM';
import TodoApp from './components/TodoApp';

class App extends React.Component {
  render() {
    return (
        <TodoApp />
    );
  }
};

ReactDOM.render(<App />, document.getElementById('todoapp'));
