import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import './App.css';

//use Fontawesome style
const starEmpty = "far fa-star";
const starHalf = "fas fa-star-half-alt";
const starFull = "fas fa-star";


const stars = Array(5).fill(""); //create value Stars



class  App extends  React.Component {

    state = {
        starRating: -1,
        
    };

    changeRating (i) {
        const {starRating} = this.state;
        i === starRating ? this.setState({ starRating: i - 1 }) :
        i !== starRating ? this.setState({ starRating: i }) :
        console.log(starRating);

    }

  render() {
      const {starRating} = this.state;
      const starList = stars.map( (item, index) => {

              return (
                  <span className={index > starRating ?  starEmpty : starFull}
                        key={index}
                        onClick={ ()=> this.changeRating(index) }
                  />
              );
          }
      );

    return (
          <div className='list-stars'>
              {starList}
          </div>
        );
    }
}

export default App;
