import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
     {/*<Greet name="vijay" heroName="batman">
       <p>this is children props</p> 
  </Greet>
     <Greet name= "rifas" heroName="superman"/>
     <button>action</button>
     <Greet/>
     <Greet name="clark" heroName= "wonderwomen"/>
      <Welcome/>*/}
     {/* <Message/>*/}
     {/*<Counter/>*/}
     {/*<FunctionClick></FunctionClick>*/}
     {/*<EventBind/>*/}
     {/*<ParentComponent/>*/}
     {/*<UserGreetings/>*/}
     <NameList/>
      
    </div>
  );
}

export default App;
