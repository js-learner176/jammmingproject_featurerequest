import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component{
    constructor(props){
      super(props);

      this.state = {
        term: ''
      };
      this.search = this.search.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.onEnterDown = this.onEnterDown.bind(this);
    }
    handleTermChange(event){
      this.setState({term:event.target.value});
    }
    onEnterDown(event){
      if(event.key === 'Enter'){
        this.search();
      }
    }
    search(){
      this.props.onSearch(this.state.term);
    }
    render(){
      return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.onEnterDown}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
