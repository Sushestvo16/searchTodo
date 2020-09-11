import React from 'react'

function Main(props) {
    debugger;
    return (    
        
        <div>
            { props.filtDogs.map((dog, i) => {
      return (
          <li key={i}>
              <div>{dog.name}</div>
              <div>{dog.breed}</div>
          </li>
      )})}
            
        
           
        </div>
    )
}

export default Main
