import Cart from "./components/Cart.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { UserProgressContextProvider } from "./components/store/UserProgressContext.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
