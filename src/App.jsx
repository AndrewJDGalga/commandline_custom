import { useReducer } from 'react';
import './style.css';

const commandReducer = (state, action) => {
    switch(action.type){
        case 'about':
            return (
                <article className='about'>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, commodi sit deserunt quam, cumque, similique quis incidunt numquam omnis impedit ut necessitatibus magni dolores voluptatem laborum atque mollitia quaerat earum?</p>
                </article>
            );
        case 'email':
            return <p className='center-text'>contact@andrewjonhardt.com</p>;
        case 'portfolio':
            return (
                <article className='portfolio'>
                    <section>
                        <img src="./current_site.png" />
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam tempore quod libero rerum necessitatibus sapiente ab maxime, veniam aut deleniti fugit dicta eveniet impedit itaque similique eaque quo minus!</p>
                    </section>
                    <section>
                        <img src="./current_site.png" />
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam tempore quod libero rerum necessitatibus sapiente ab maxime, veniam aut deleniti fugit dicta eveniet impedit itaque similique eaque quo minus!</p>
                    </section>
                </article>
            );
        default:
            return <p className='center-text'>Unknown command, try "help"</p>;
    }
}

function App() {
    const [output, dispatch] = useReducer(commandReducer, '');

    const userCommand = (e) => {
        e.preventDefault();
        const command = e.nativeEvent.submitter.value.toLowerCase()[0] ?? '';

        switch(command) {
            case 'a':
                dispatch({type:'about'});
                break;
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
            <form className="cmd__in__mobile" onSubmit={userCommand}>
                <button type="submit" value="portfolio">Portfolio</button>
                <button type="submit" value="about">About</button>
                <button type="submit" value="email">Contact</button>
            </form>
            <form className="cmd__in" onSubmit={userCommand}>
                <label htmlFor="cmd__line">andrewjonhard.com&gt;</label>
                <input id="cmd__line" />
            </form>
            {output}
        </main>
    )
}

export default App
