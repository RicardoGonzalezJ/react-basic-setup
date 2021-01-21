import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import Header from './Header2';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


class App extends React.Component {
  render () {
    return (
      <div>
       <h1 className="hello">Hello React</h1>
       <Header />
       <Message />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))
