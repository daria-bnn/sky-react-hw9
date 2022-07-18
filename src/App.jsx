import './App.css'

import BasketBooks from './components/BasketBooks/BasketBooks'
import LoginPass from './components/LoginPass/LoginPass'
import SelectArticle from './components/SelectArticle/SelectArticle'

const App = () => (
  <div className="App">
    <BasketBooks />
    <SelectArticle />
    <LoginPass />
  </div>
)

export default App
