import React from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchBoxChange: ''
        };
    };

    UpdateSearchBox = (event) => {
        this.setState({ searchBoxChange: event.target.value });

    };


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json()).then(users => this.setState({ robots: users }))
    }




    render() {

        const { robots, searchBoxChange } = this.state;
        const filtterRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchBoxChange.toLowerCase())
        })


        return !robots.length ?
            <h1>loading</h1>
            : (


                <React.Fragment>
                    <h1 className="search1 bg-warning" >RoboFriends</h1>

                    <SearchBox searchBoxChange={this.UpdateSearchBox} />


                    <Scroll>
                        <CardList robots={filtterRobot} />
                    </Scroll>

                </React.Fragment>


            )


    }
}


export default App;