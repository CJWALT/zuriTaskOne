import ReactDom from 'react-dom' 
import { HashRouter } from 'react-router-dom'
import App from './App' 
import './main.css'

ReactDom.render(
    <HashRouter>
        <App />
        </HashRouter>, document.getElementById("root"))