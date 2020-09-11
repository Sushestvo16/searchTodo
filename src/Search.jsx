import React from 'react'

function Search(props) {
    return (
        <div>
            <form action="">
                <input type="text" onChange={props.onHandleInput}/>
                <button type="submit" onClick={(e) => {props.filteredDogs(e)}}></button>
            </form>
        </div>
    )
}

export default Search;
