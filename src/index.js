import _ from 'lodash';
import React, {Component} from 'react'; //library called React (core lib for react components)
import ReactDOM from 'react-dom' ;             //render react to DOM we use ReactDOM //if library installed using npm just put the name
import SearchBar from './components/search_bar'; //we need to put the relative path for user defined files
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



//ES6 we dont have to use "var"

//google youtube api key
const API_KEY = 'AIzaSyCiJMlkesXlV-2B5KP0dQl2f2JpQTDXVrQ';



//we install the npm youtube search package

//create a new component and this produce some html
//const is ES2016 piece of syntax -final which doesnt change ..dropped off function keyword and just put () =>
//downwardsdataflow only the parent can fetch
/*
const App = () => {
   return (
     <div>
      <SearchBar />
    </div>
  );
};*/

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key : API_KEY, term : term}, (videos) => {
      //this.setState({videos : data});//when key and value same string then it could be one
        this.setState({ videos : videos, selectedVideo : videos[0] });
    }) ;

  }

  //*  <VideoDetail video = {this.state.Video[0]}/> //initialize the array or u can do the one in line 52*/
  render ()
   {
     //throtlle so there is no lag in video search for this we did npm install of loadash and used debounce
     const videosearch = _.debounce((term) => {this.videoSearch(term)},1000 );
     return (
       <div>
        <SearchBar onSearchTermChange = {videosearch}  />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}//callback from parent to child
          videos={this.state.videos} />
      </div>
     );
   }



}


//Take this component generted html and put it on the page (in the DOM) .. We are passing the class for ReactDOM.render(App) where App is class
//we need to use instance which is like <App></App>
//we need to specify the html component where we need to render to
ReactDOM.render(<App />, document.querySelector('.container'));
