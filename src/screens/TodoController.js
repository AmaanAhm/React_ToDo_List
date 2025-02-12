// TodoController.js
import React, { Component } from "react";

class TodoController extends Component {
  constructor() {
    super();
    this.state = {
      first: "",
      second: "",
      result: [],
      editIndex: null,
      isEditing: false
    };
  }

  componentDidMount() {
    const notes = localStorage.getItem("notes");
    if (notes) {
      this.setState({ result: JSON.parse(notes) });
    }
  }

  addNotes = () => {
    if (this.state.first === "" || this.state.second === "") {
      return;
    }

    let newarr = [...this.state.result];
    
    if (this.state.isEditing && this.state.editIndex !== null) {
      // Update existing note
      newarr[this.state.editIndex] = {
        name: this.state.first,
        desc: this.state.second
      };
    } else {
      // Add new note
      newarr.push({ name: this.state.first, desc: this.state.second });
    }

    this.setState(
      { 
        result: newarr,
        first: "",
        second: "",
        isEditing: false,
        editIndex: null
      },
      () => {
        const json = JSON.stringify(newarr);
        localStorage.setItem("notes", json);
      }
    );
  };

  onDelete = (index) => {
    let arr = [...this.state.result];
    arr.splice(index, 1);
    this.setState({ result: arr }, () => {
      const json = JSON.stringify(arr);
      localStorage.setItem("notes", json);
    });
  };

  handleEdit = (index) => {
    const itemToEdit = this.state.result[index];
    this.setState({
      first: itemToEdit.name,
      second: itemToEdit.desc,
      editIndex: index,
      isEditing: true
    });
  };

  cancelEdit = () => {
    this.setState({
      first: "",
      second: "",
      editIndex: null,
      isEditing: false
    });
  };
}

export { TodoController };