import React from 'react';
import TodoActions from '../actions/TodoActions';

class Footer extends React.Component {

	static propTypes = {
		allTodos: React.PropTypes.object.isRequired
	};

	render() {
    const allTodos = this.props.allTodos;
		const total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;
    for (var key in this.props.allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
		}

		let itemsLeft = total - completed;
    let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    let clearCompletedButton;
    if (completed) {
      clearCompletedButton =
        <button
          id="clear-completed"
          onClick={this._onClearCompletedClick}>
          Clear completed ({completed})
        </button>;
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
	};

	_onClearCompletedClick = () => {
		TodoActions.destroyCompleted();
	};

}

export default Footer;