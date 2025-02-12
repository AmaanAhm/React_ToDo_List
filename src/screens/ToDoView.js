import React, { Component } from "react";
import { TodoController } from "./TodoController";
import "./ToDoViewDesign.css";
import {WithNavigation} from "../WithNavigation";

class ToDoView extends TodoController {
  render() {
    return (
      <div className="todolistapp">
        <div className="App">
          <h1 className="todolist">TO-DO List</h1>
        </div>
        <div>
          <div className="title"> <span>Title:</span>
          <input className="textinput"
            type="text"
            value={this.state.first}
            onChange={(e) => {
              this.setState({ first: e.target.value });
            }}
          />
      </div>
          <div className="title"> <span>Description:</span>
          <input  className="textinput"
            type="text"
            value={this.state.second}
            onChange={(e) => {
              this.setState({ second: e.target.value });
            }}
          />
          </div>  
        </div>
        <div className="button-group">
          <button className="addinlist" onClick={this.addNotes}>
            {this.state.isEditing ? "Update Note" : "Add in List"}
          </button>
          {this.state.isEditing && (
            <button onClick={this.cancelEdit}>Cancel Edit</button>
          )}
        </div>

        <h3>Note:</h3>
        <div className="notes-container">
          {this.state.result?.map((item, index) => {
            return (
              <div className="note" key={index}>
                <p>Title: {item.name}</p>
                <p>Description: {item.desc}</p>
                <div className="button-group">
                  <button className="delete-btn" onClick={() => this.onDelete(index)}>
                    Delete
                  </button>
                  <button className="edit-btn" onClick={() => this.handleEdit(index)}>
                    Edit
                  </button>
               </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WithNavigation(ToDoView);