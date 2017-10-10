// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  onFocus = () => {
    console.log('Good!');
  };
  onBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  render() {
    return (
      <div>
        <button onFocus={this.onFocus} onBlur={this.onBlur}>
          Eyes on me, Please!
        </button>
      </div>
    );
  }
}

//
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
// render() {
//        return(
//            <div>
//            <button onFocus={this.onFocus} onBlur={this.onBlur}>Eyes on me, Please!</button>
//            </div>
//            )
//    }
// }

export default EyesOnMe;
