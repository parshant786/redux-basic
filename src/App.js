import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { CakeContainerWithHook } from "./components/CakeContainerWithHook";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserList from "./components/UserList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
         <UserList />
        <ItemContainer />
        <ItemContainer cake />
        <CakeContainer />
        <CakeContainerWithHook />
        <IceCreamContainer />
        <NewCakeContainer /> 
      </div>
    </Provider>
  );
}

export default App;
