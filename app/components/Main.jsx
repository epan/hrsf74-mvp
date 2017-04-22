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
    this.handleListInputSubmit.bind(this);
  }

  handleListInputSubmit () {
    console.log('submitted yo');
  }

  render () {
    return (
      <div>
        <h1>Prose and Khans</h1>
        <List 
          name={'Pros'} 
          items={this.state.pros} 
          handleListInputSubmit={this.handleListInputSubmit} 
        />
        <List 
          name={'Cons'} 
          items={this.state.cons} 
          handleListInputSubmit={this.handleListInputSubmit} 
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
