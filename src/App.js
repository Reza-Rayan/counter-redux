import React from 'react'
import './App.css'

class App extends React.Component {
    render() {
        const { value, onIncreament, onDecreament } = this.props
        return (
            <main>
                <div className='counter'>
                    <h1>Counter : {value}</h1>
                </div>
                <div className='btn-container'>
                    <button onClick={onIncreament} className='add'>Increament</button>
                    <button onClick={onDecreament} className='sub'>Decreament</button>
                </div>

            </main>
        )
    }
}

export default App