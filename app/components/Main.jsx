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
    this.handleProsSubmit = this.handleProsSubmit.bind(this);
    this.handleConsSubmit = this.handleConsSubmit.bind(this);
  }

  handleProsSubmit (event) {
    // event.preventDefault();
    console.log(event.target.value);
    console.dir(event);
    this.state.pros.push(event.target.value); 
    this.setState({pros: this.state.pros});
  }

  handleConsSubmit (event) {
    console.log(event.target.value);
    console.dir(event);
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
