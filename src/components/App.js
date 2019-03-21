import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import Header from './Header/index';
import ChatLobby from './ChatLobby/ChatLobby';



class App extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ LoginForm }/>
                        <Route exact path="/lobby" component={ ChatLobby }/>
                        <Route path="*" render={() => <div>404 Not found</div>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
