import { useReducer } from 'react';
import './style.css';

const commandReducer = (state, action) => {
    switch(action.type){
        case 'email':
            return <p>contact@andrewjonhardt.com</p>;
        case 'portfolio':
            return (
                <article className='portfolio'>
                    <section>
                        <img src="./current_site.png" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam tempore quod libero rerum necessitatibus sapiente ab maxime, veniam aut deleniti fugit dicta eveniet impedit itaque similique eaque quo minus!</p>
                    </section>
                </article>
            );
        default:
            return <p>Unknown command, try "help"</p>;
    }
}

function App() {
    const [output, dispatch] = useReducer(commandReducer, '');

    const userCommand = (e) => {
        e.preventDefault();
        const command = e.nativeEvent.submitter.value.toLowerCase()[0] ?? '';

        switch(command) {
            case 'e':
                dispatch({type:'email'});
                break;
            case 'p':
                dispatch({type:'portfolio'});
                break;
            default:
                dispatch({type:command});
        }
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
