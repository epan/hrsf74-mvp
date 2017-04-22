import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pros: [],
      cons: []
    };
  }
  render () {
    return (
      <div>
        <h1>Prose and Khans</h1>
        <List name={'Pros'} />
        <List name={'Cons'} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
