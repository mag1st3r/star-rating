import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import './App.css';

const nameClass = ["far fa-star", "fas fa-star-half-alt", "fas fa-star"];
const clickNumber = [0, 1, 2];
let click;

class Star extends React.Component {


    render() {
        return (
            <p className='stars'
                  onClick={ () => this.props.onClick() }  >
                  <i className={nameClass[this.props.value]}/>
            </p>
        );
    }
}

class  App extends  React.Component {
  constructor(props) {
    super(props);
    this.state ={
      star: Array(5).fill(0), //['null', 'null''null''null''null']
      clickCalc: {
          i: null,
          clickedNumber: 0
        }
      }

    }


    changeState = (stars, lastIndex) => {
      const {i, clickedNumber} = this.state.clickCalc;
      let index = i;
      if(lastIndex < i) {
          index = lastIndex;
      }
      let clickLastIndex = lastIndex;

      for(let j = 0; j <= lastIndex; j++){
          if(j === lastIndex) {

              if(index === clickLastIndex && clickedNumber === 2) {
                  stars[j] = 0;
                  click = 0;
              }
              if(index === clickLastIndex && clickedNumber === 1 ) {
                  stars[j] = 2;
                  click = 2;
              }
              if(clickedNumber === 0){
                  stars[j] = 1;
                  click = 1;
              }

          }else{
              stars[j] = 2;
          }
      }

      for(let i = lastIndex + 1; i < stars.length; i++){
          stars[i] = 0;
      }
          this.setState({
              star: stars,
              clickCalc: {
                  i: lastIndex,
                  clickedNumber: click
              }
          });

    }

    handleClick(index) {

      const stars = this.state.star.slice();


      this.changeState(stars, index);

    }

    renderStar = (i) => {
      const index = i;

      return (
          <Star
              value={ this.state.star[index] }
              onClick={ () => this.handleClick(index)
               }
              />
           );
    }

  render() {
      console.log(this.state.star);
    return (
          <div className='list-stars'>
              {this.renderStar(0)}
              {this.renderStar(1)}
              {this.renderStar(2)}
              {this.renderStar(3)}
              {this.renderStar(4)}
          </div>
        );
    }
}

export default App;
