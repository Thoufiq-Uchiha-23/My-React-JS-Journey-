import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//this is custom React so it will not display
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'

}

// this is we doing in React way
const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
