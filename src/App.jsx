import React from 'react';
import './App.css';
import Button from "./components/buttons";
import Input from "./components/input";
import Cbutt from "./components/Cbutt";
import PlMin from "./components/PlMin";
import Perc from "./components/Perc";

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input:"",
      operator: "",
      prewNum:"",
      curNum:""
    };
  }

addValue = value => {
  value=== "." && this.state.input === "" ? this.setState({input: 0 + value}) : this.setState({input: this.state.input + value})
  //if (this.handleEqual === true)  console.log(1);
}

handleEqual = () =>{
  let a = parseFloat(this.state.prewNum);
  let b = parseFloat(this.state.curNum);
  this.setState({curNum : this.state.input});
  this.setState({ input:  operators[this.state.operator](a, b)});
}

plusMinus = () => {
  this.setState({ input: -this.state.input });
}

percents = () => {
  this.setState({ input: this.state.input /100});
}

handleOperator = (value) =>{
  this.setState({prewNum: this.state.input});
  this.setState({input: ""});

  value === "x" ? this.setState({operator: "*"}): this.setState({operator: value});
}
  render(){
      return (
        <div className="app">
          <div className="calc-wrapper">
            <Input input = {this.state.input} />
              <div className="row">
                <Cbutt handleClear = {() => this.setState({input:""})}>C</Cbutt>
                <PlMin handleClick = {this.plusMinus}>+-</PlMin>
                <Perc handleClick = {this.percents}>%</Perc>
                <Button handleClick = {this.handleOperator}>/</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addValue}>7</Button>
                <Button handleClick = {this.addValue}>8</Button>
                <Button handleClick = {this.addValue}>9</Button>
                <Button handleClick = {this.handleOperator} operator ="*">x</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addValue}>4</Button>
                <Button handleClick = {this.addValue}>5</Button>
                <Button handleClick = {this.addValue}>6</Button>
                <Button handleClick = {this.handleOperator}>-</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addValue}>1</Button>
                <Button handleClick = {this.addValue}>2</Button>
                <Button handleClick = {this.addValue}>3</Button>
                <Button handleClick = {this.handleOperator}>+</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addValue}>0</Button>
                <Button handleClick = {this.addValue}>.</Button>
                <Button handleClick = {this.handleEqual}>=</Button>
              </div>
          </div>
        </div>
      );
    }
  }

export default App;
