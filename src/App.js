import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Search from './Search';



class App extends React.Component {

constructor(props){
  super(props)
  this.state = {
    dogs : [
      { name: "Max", breed: "German Shepard"},
      { name: "Frie", breed: "Lab"},
      { name: "Rex", breed: "Poodle"},
      { name: "George", breed: "Pitbull"}
    ],
    dogsSearch: ''
  }
}
onHandleInput = (e) => {
  console.log(e.target.value);
  this.setState({dogsSearch: e.target.value});
}
 
  filteredDogs = (e) => {
    e.preventDefault();
  }

render() {
  debugger;
  // if (this.state.dogsSearch !== "" && this.state.dogs.toLowerCase().indexOf( this.state.dogsSearch.toLowerCase()) === -1) {
  //   return null
  // } 
  const filtDogs = this.state.dogs.filter(dog => {
    return dog.name.toLowerCase().indexOf(this.state.dogsSearch.toLowerCase()) !== -1})

  return (
    <div className="App">
     <Header />
     <Search  filteredDogs={this.filteredDogs} onHandleInput={this.onHandleInput} />
     <Main filtDogs={filtDogs} dogs={this.state.dogs}/>
    
    </div>
  );
}

}

export default App;
