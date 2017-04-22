import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pros: [
        // 'Learn new things',
        // 'Make new friends'
      ],
      cons: [
        // 'Time consuming',
        // 'No income'
      ]
    };
    this.handleProsSubmit = this.handleProsSubmit.bind(this);
    this.handleConsSubmit = this.handleConsSubmit.bind(this);
  }

  handleProsSubmit (input) {
    let prosList = this.state.pros;
    prosList.push(input);
    this.setState({pros: prosList});
    console.log('pros is:', this.state.pros);
  }

  handleConsSubmit (input) {
    let consList = this.state.cons;
    consList.push(input);
    this.setState({cons: consList});
    console.log('cons is:', consList);
  }

  render () {
    return (
      <div>
        <h1>Prose and Khans</h1>
        <List 
          name={'Pros'} 
          items={this.state.pros} 
          handleSubmit={this.handleProsSubmit} 
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
