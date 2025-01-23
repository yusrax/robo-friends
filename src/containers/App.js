 import React from "react";
 import CardList from "../components/CardList";
 import SearchBox from "../components/SearchBox";
 import Scroll from "../components/Scroll";

 class App extends React.Component {
     constructor() {
         super()
         this.state = {
             robots: [],
             searchfield: '',
         }
     }

     componentDidMount() {
         fetch("https://jsonplaceholder.typicode.com/users")
             .then(res => res.json()).then((users) => {this.setState({ robots: users })})
     }

     onSearchTermChange = (e) => {
         this.setState({ searchfield: e.target.value });
     }

     render() {
         const { robots, searchfield } = this.state;
         const filteredRobots = robots.filter(robots => {
             return robots.name.toLowerCase().includes(searchfield.toLowerCase());
         });
         return (
             <div className="tc">
                 <h1>RoboFriends</h1>
                 <SearchBox searchChange={this.onSearchTermChange} />
                 <Scroll>
                     <CardList robots={filteredRobots} />
                 </Scroll>
             </div>
         );
     }
 }

export default App;