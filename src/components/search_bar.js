import React, {Component} from 'react';

///functional component
/*
const SearchBar = () => {
  return <input />;
}; */


//class component . here the JSX should be defined in method and it is done by using render method
//class SearchBar extends React.Component { ************* you dont have to use alieas if we say import React, {Component} from 'react' instead
//of import React from 'react'

class SearchBar extends Component {

//state is Javascript object. every class component has its own state. when state is chagned the component re-renders and re-renders its children
//initial class state components.All Javascript is has constructor when an new instance is created
    constructor(props) {
      super(props); //Component constructor

    //search term (input) it has state with properties. where term is property.//only in constructor we do this way outside it would be
    //setState
      this.state = { term : '' };

    }


  //methods on a class //controlled form element
   render() {
     return (
       <div className="search_bar">
         <input
          value =  {this.state.term}
          onChange={ (event) => this.onInputChange( event.target.value) }   />
      </div>
     );
   }

   onInputChange(term) {

      this.setState( { term } )

      this.props.onSearchTermChange(term);

   }


  //evenHandler  with argument of event object
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

}





//we need export the code... as files are independent of each other.

//we need to export the conponent
export default SearchBar;
