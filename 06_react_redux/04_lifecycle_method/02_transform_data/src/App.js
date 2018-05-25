import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

function line(props) {
  // console.log("toto",props.expenses[0].who);
  // (props.expenses).map(line => console.log("who= ",line.who))
  return props.expenses.map(expense => {
    const userFound = props.users.find(user => user.id===expense.who);
    if (userFound === undefined) {
      return (<tr key={expense.what}>
        <td>{expense.what}</td>
        <td>Unfounded</td>
      </tr>
      );
    } else {
      return (<tr key={expense.what}>
        <td>{expense.what}</td>
        <td>{userFound.name}</td>
      </tr>
      )
    }
  });
}


// App has `expenses` and `users` as props
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses : null,
      users : null,
    };
  }

  componentDidMount() {
    // console.log("users: ", this.props.users);
    // line(this.props)
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          <th>What</th>
          <th>Who</th>
        </tr>
      </thead>
    );
  }

  renderBody() {
    return (
      <tbody>
        {line(this.props)}
      </tbody>
    );
  }

  render() {
    return (
      <div className="App">
        <table>
            {this.renderHeader()}
            {this.renderBody()}
        </table>
      </div>
    );
  }
}

export default App;
