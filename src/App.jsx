import { useReducer } from 'react';
import './style.css';

const commandReducer = (state, action) => {
    switch(action.type){
        case 'email':
            return [...state, 'contact@andrewjonhardt.com'];
        default:
            return [...state, 'Unknown command, try "help".'];
    }
}

function App() {
    const [output, dispatch] = useReducer(commandReducer, '');
    

    const userCommand = (e) => {
        e.preventDefault();
        const command = e.nativeEvent.submitter.value.toLowerCase()[0] ?? '';

        dispatch({type:command});
    }

    return (
        <main>
            {output}
            <form className="cmd__in__mobile" onSubmit={userCommand}>
                <button type="submit" value="portfolio">Portfolio</button>
                <button type="submit" value="about">About</button>
                <button type="submit" value="email">Contact</button>
            </form>
            <form className="cmd__in" onSubmit={userCommand}>
                <label htmlFor="cmd__line">andrewjonhard.com&gt;</label>
                <input id="cmd__line" />
            </form>
        </main>
    )
}

export default App
