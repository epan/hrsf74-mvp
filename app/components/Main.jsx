import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import axios from 'axios';

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

  getPros () {
    axios.get('/pros')
      .then((data) => {

        // Update state with db data response
        // state update will re-render app
      });
  }

  handleProsSubmit (text) {
    let pro = {
      kind: 'pro',
      text: text
    };

    axios.post('/pros', pro)
      .then(() => {
        // axios.get('/pros')
        // .then((data) => {
        //   let prosList = this.state.pros;
        //   prosList.push(text);
        //   this.setState({pros: prosList});
        // });
      });
    console.log('Pro sent to DB:', text);
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
