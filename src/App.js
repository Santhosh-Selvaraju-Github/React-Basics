// import './App.css';
import Function from './components/FunctionComp'
import Class from './components/ClassComponent'
import PropState from './components/propsState'
import {Events, WithParams} from './components/Events';
import {Conditionals, LogicalConditionals} from './components/Conditionals';
import MapList from './components/Map'
import UseState from './components/UseState';

//Functional components
function Nav(){
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <h2>Santhosh</h2>
    </div>
  );
};

const cars = ["Ford","BMW","Audi","Benz"]
const carList = [
  {
      id:1,
      brand:"ford",
      year:2021
  },{
      id:1,
      brand:"Audi",
      year:2022
  },{
      id:1,
      brand:"BMW",
      year:2020
  }
]

function App() {

  return (
    <div>
      <Nav />
      <h2>Welcome</h2> 
      <Header/>
      <Function />
      <Class name={"Santhosh"} />
      <PropState />
      <Events/>
      <WithParams />
      <Conditionals isGoal={false}/>
      <LogicalConditionals cars={cars}/>
      <MapList carList={carList}/>
      <UseState/>

    </div>
  );
}

export default App;
