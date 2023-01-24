import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
