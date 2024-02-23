import { CartContexProvider } from './Store/CartContext';
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Model from './Components/Model';
function App() {
  return <CartContexProvider>
    <Header />
    <Meals />
   <div>
   </div>
  </CartContexProvider>
}

export default App;