import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import Header from './Header/index';



class App extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <Header/>
                <LoginForm/>
            </div>
        );
    }
}

export default App;
