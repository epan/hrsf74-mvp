import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: 'Pros'
    };
  }
  render () {
    return (
      <div>
        <h1>Prose and Khans</h1>
        {/*<List />*/}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
