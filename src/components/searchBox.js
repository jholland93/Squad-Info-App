import React, {Component} from 'react';
import "../css/searchBox.css";

export default function SearchBox(props){
    return(
        <div class="searchBox">
            <form  action=""> {/* every time theres a change in searchbox - run handleInput function */}
            <input onChange={props.handleInput} type="search"/>
            <i class="fa fa-search"/></form>
           
        </div>
    )
}