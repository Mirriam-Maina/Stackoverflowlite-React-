import React, { Component } from 'react';
import './styles.css';
import Delete from './DeleteButton';

class Questions extends Component {

  constructor(props){
    super(props);
    this.state = {
      questionText: '',
      questions: [],
    }
  }


  updateQuestionText = (questionText) => {
    this.setState({questionText: questionText.target.value})
  }


  addQuestion() {
    if(this.state.questionText === ''){return}

    let questionsList = this.state.questions;
    questionsList.push(this.state.questionText);
    this.setState({questionText: ''});
    this.textInput.focus();
  }

  handleKeyPress = (event) => {

    if(event.key === 'Enter'){
    let questionsList = this.state.questions;
    questionsList.push(this.state.questionText);
    this.setState({questionText: ''});
    }

  }

  deleteQuestion(index){
    let questionsList = this.state.questions;
    questionsList.splice(index, 1);
    this.setState({questions: questionsList})
  }

  render() {

    let questions = this.state.questions.map((value, key) => {
      return <Delete key={key} text={value}
                    deleteMethod = {() => this.deleteQuestion(key)}/>
    })

    return (
      <div className="container">
      <div className="header">STACKOVERFLOW LITE</div>
      {questions}
      <div className="btn" onClick={this.addQuestion.bind(this)}>+</div>
      <input type="text"
              placeholder="TYPE HERE"
              ref={((input)=>{this.textInput = input})}
              className="textInput"
              value = {this.state.questionText} 
              onChange= {questionText => this.updateQuestionText(questionText)}
              onKeyPress = {this.handleKeyPress.bind(this)}/>
      </div>
    );
  }
}

export default Questions;
