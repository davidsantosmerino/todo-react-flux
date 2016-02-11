import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import TodoStore from '../stores/TodoStore';

class TodoApp extends React.Component {

  state = {
      allTodos: TodoStore.getAll(),
      areAllComplete: TodoStore.areAllComplete()
  };

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  };

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  };

  render(){
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete} />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  };

  _onChange = () => {
    this.setState(this.state);
  };

};

export default TodoApp;