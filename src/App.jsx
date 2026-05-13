import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {ShmitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    });

    const [stats, setStats] = useState({
        followers: 42,
        following: 10
    });

    const changeAvatar = url => {
        // setUser({...user, name: 'User'});
        // setUser({...user, avatar: url || user.avatar});

        // setUser(prevState => ({...prevState, name: 'User'}));
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = name => {
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    }


    return (
        <div className={'app'}>
            <ShmitterContext value={{
                user, stats, changeAvatar, changeName
            }}>
                <Navigation/>
                <Body/>
            </ShmitterContext>
        </div>
    )
}

export default App
