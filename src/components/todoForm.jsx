import React, {Component} from "react";
class TodoForm extends Component{
    render() {
        return (
            <div className="form">
                <input type="text"/>
                <button>Ajouter</button>
            </div>
        );
    }

    onNewTodo(todo) {
        console.log(todo)
    }
}

export default TodoForm