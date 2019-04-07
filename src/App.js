import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails'
// import BookDetails from './components/BookDetails';

import {
    BrowserRouter as Router,
    Route,
    // Link,
    // Redirect,
    // Switch
} from 'react-router-dom';

class App extends Component {

    state = {
        isAuth: false
    };

    login = () => {
        this.setState({
            isAuth: true
        })
    }

    render() {
        return (
            <div className="app">
                <div className="message">
                    <h1> Please try localhost:3000/login for Login Page</h1>
                </div>
                <Router>

                    <Route
                        path={"/login"}
                        render={(props) => <Login {...props} isAuth={this.state.isAuth} loginCallback={this.login}/>}/>

                    <PrivateRoute
                        path="/booklist"
                        component={BookList} login
                        isAuth={this.state.isAuth}/>

                    <PrivateRoute
                        path="/bookdetails"
                        component={BookDetails}
                        isAuth={this.state.isAuth}
                        details={this.state}
                    />
                </Router>

            </div>
        );
    }
}

export default App;

const PrivateRoute = ({component: Component, isAuth, ...props}) => {

    return (
        <Route
            {...props}
            render={(_props) =>
                (isAuth ? (<Component {...props} {..._props} />) :
                        <div> You have no access to this page </div>
                    // <Redirect to='/login'/>
                )
            }
        />)
}




