import React from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import './App.css';
import Scroll from '../component/Scroll';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(response=> response.json())
        .then(users => this.setState({robots : users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriend</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll> 
            </div>
        );
    }
}

export default App;