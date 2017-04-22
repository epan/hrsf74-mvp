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
    this.handleConsSubmit = this.handleConsSubmit.bind(this);
  }

  handleProsChange (event) {
    event.preventDefault();
    this.setState({prosInput: event.target.value});
    console.log('prosInput is:', this.state.prosInput);
  }

  handleConsSubmit (event) {
    event.preventDefault();
    console.log(event.target.value);
    // console.dir(event);
    this.state.cons.push(event.target.value); 
    this.setState({cons: this.state.cons});
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
          handleSubmit={this.handleConsSubmit} 
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
