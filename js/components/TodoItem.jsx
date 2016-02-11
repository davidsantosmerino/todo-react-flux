import React from 'react';
import classNames from 'classnames';
import TodoTextInput from './TodoTextInput';
import TodoActions from '../actions/TodoActions';

class TodoItem extends React.Component {

	static propTypes = {
   todo: React.PropTypes.object.isRequired
  };

  state = {
  		isEditing: false
  };

  render() {
    const todo = this.props.todo; 
    let input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={this.props.todo.text}/>;
    }

    return (
      <li
        className={classNames({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}/>
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    );
  };

  _onToggleComplete = () => {
  	TodoActions.toggleComplete(this.props.todo);
  };

  _onDoubleClick = () => {
  	this.setState({isEditing:true});
  };

  _onSave = (text) => {
  	TodoActions.updateText(this.props.todo.id, text);
  	this.setState({isEditing:false});
  };

  _onDestroyClick = () => {
  	TodoActions.destroy(this.props.todo.id);
  };

}

export default TodoItem;
