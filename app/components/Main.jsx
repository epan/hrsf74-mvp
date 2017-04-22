import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      prosInput: '',
      pros: [
        'Learn new things',
        'Make new friends'
      ],
      consInput: '',
      cons: [
        'Time consuming',
        'No income'
      ]
    };
    this.handleProsChange = this.handleProsChange.bind(this);
    this.handleConsChange = this.handleConsChange.bind(this);
  }

  handleProsChange (event) {
    this.setState({prosInput: event.target.value});
    console.log('prosInput is:', this.state.prosInput);
  }

  handleConsChange (event) {
    this.setState({consInput: event.target.value});
    console.log('consInput is:', this.state.consInput);
  }

  render () {
    return (
      <div>
        <h1>Prose and Khans</h1>
        <List 
          name={'Pros'} 
          items={this.state.pros} 
          handleChange={this.handleProsChange} 
        />

        <List 
          name={'Cons'} 
          items={this.state.cons} 
          handleChange={this.handleConsChange} 
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
