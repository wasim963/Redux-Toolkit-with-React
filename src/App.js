import './App.css';
import { CakeView } from './features/cake/cakeView';
import { IcecreamView } from './features/icecream/icecreamView';
import { UserView } from './features/user/userView';


function App() {
  return (
    <div className="App">
      <hr />
      <CakeView />
      <hr />
      <IcecreamView />
      <hr />
      <UserView />
      <hr />
    </div>
  );
}

export default App;
