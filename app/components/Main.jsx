import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: 'Pros',
      pros: [],
      cons: []
    };
  }
  render () {
    return (
      <div>
        <h1>Prose and Khans</h1>
        <List name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
