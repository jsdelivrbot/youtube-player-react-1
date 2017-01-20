import React, {Component} from 'react';

// class SearchBar extends Component {
//   render () {
//     return <input onChange = {this.onInputChange} />;
//   }
//
//   onInputChange (event) {
//     console.log(event.target.value)
//   }
// }

// Optional cleaner ES6 syntax where input tells state to change

// class SearchBar extends Component { //component already has defined constructor function
//   constructor (props){
//     super(props); // when we define a method function that's already defined on parent class (component), we can call super
//     this.state = { term: ''}; // in state object, term is the property where we can to record what the user writes
//                               // onlt use this.state inside constructor to change state, in all other parts of app use setState
//   }
//   render () {
//     return (
//       <div>
//         <input onChange = { event => this.setState({term:event.target.value})} />
//       </div>
//     );
//   }
// }

// State tells input to change-controller form element

class SearchBar extends Component { //component already has defined constructor function
  constructor (props){
    super(props); // when we define a method function that's already defined on parent class (component), we can call super
    this.state = { term: ''}; // in state object, term is the property where we can to record what the user writes
                              // onlt use this.state inside constructor to change state, in all other parts of app use setState
  }
  render () {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = { event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
