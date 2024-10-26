import {Component} from 'react'

import Login from './component/Login'

import MyContext from './MyContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    theme: 'light',
  }

  render() {
      const {theme} = this.state;
    return (
      <MyContext.Provider value=({
          theme,
      })>

      </MyContext.Provider>
    )
  }
}

export default App
