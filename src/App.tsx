import './App.css';
import { List } from './Components/List';
import {useCart} from './Providers/Cart'

function App() {
  const {cart} = useCart()
  console.log(cart)
  return (
    <div>
     <List/>
    </div>
    
  );
}

export default App;
