import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import axios from 'axios';

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pros: [],
      cons: []
    };
    this.handleProsSubmit = this.handleProsSubmit.bind(this);
    this.handleConsSubmit = this.handleConsSubmit.bind(this);
  }

  getPros () {
    axios.get('/pros')
    .then(({data}) => {
      this.setState({pros: data});
    });
  }

  handleProsSubmit (text) {
    let pro = {
      kind: 'pro',
      text: text,
    };
    axios.post('/pros', pro)
    .then(() => {
      this.getPros();
    });
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
