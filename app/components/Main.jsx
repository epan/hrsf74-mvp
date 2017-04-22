import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pros: [
        'Learn new things',
        'Make new friends'
      ],
      cons: [
        'Time consuming',
        'No income'
      ]
    };
  }
  render () {
    return (
      <div>
        <h1>Prose and Khans</h1>
        <List name={'Pros'} items={this.state.pros} />
        <List name={'Cons'} items={this.state.cons} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
