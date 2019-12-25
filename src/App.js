import React, {Component} from 'react';
import './App.css';
import List from "./components/list";
import TodoForm from "./components/todoForm";
class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
              <h1>TodoApp</h1>
          </header>
          <div>
            <TodoForm onNewTodo={this.onNewTodo}/>
            <List todos={[]} />
          </div>
        </div>
    );
  }
}

export default App;
