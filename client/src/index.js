import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/recipe/hello')
        .then(response => response.json())
        .then(data =>{console.log(data)
            setMessage(data.message)
        })
        .catch(err => console.log(err))


    }, [])

    return (
        <div className="app">
            {message}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))