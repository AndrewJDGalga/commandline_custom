import { createElement } from 'react';
import './style.css';


function App() {

    

    const userCommand = (e) => {
        e.preventDefault();
        const cmdout = document.getElementById('cmd__out');
        const command = e.target.cmd__line.value.toLowerCase();
        
        switch(command){
            default:
                cmdout.innerText = 'Command not recognized. Try "help".';
        }
    }

    return (
        <main>
            <div id="cmd__out"></div>
            <form className="cmd__in" onSubmit={userCommand}>
                <label htmlFor="cmd__line">andrewjonhard.com&gt;</label>
                <input id="cmd__line" />
            </form>
        </main>
    )
}

export default App
