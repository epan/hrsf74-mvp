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

  getCons () {
    axios.get('/cons')
    .then(({data}) => {
      this.setState({cons: data});
    });
  }

  handleProsSubmit (input) {
    let pro = {
      kind: 'pro',
      text: input,
    };
    axios.post('/submit', pro)
    .then(() => {
      this.getPros();
    });
  }

  handleConsSubmit (input) {
    let con = {
      kind: 'con',
      text: input
    };
    axios.post('/submit', con)
    .then(() => {
      this.getCons();
    }); 
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
