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
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  componentDidMount () {
    this.getAllItems();
  }

  getAllItems () {
    this.getPros();
    this.getCons();
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

  handleItemDelete (_id) {
    // TODO: How to use axios.delete without data arg
    axios.post('/delete', {_id})
    .then(() => {
      this.getAllItems();
    });
  }

  render () {
    return (
      <div className="container">
        <div className="row mt-1 mb-4">
          <div className="col">
            <h1 className="display-1">Prose and Khans™</h1>
          </div>
        </div>
        <div className="row">
          <List 
            name={'Pros'} 
            items={this.state.pros} 
            handleSubmit={this.handleProsSubmit} 
            handleItemDelete={this.handleItemDelete}
          />

          <List 
            name={'Cons'} 
            items={this.state.cons} 
            handleSubmit={this.handleConsSubmit} 
            handleItemDelete={this.handleItemDelete}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
