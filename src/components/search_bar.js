import React, {Component} from 'react';
//React.Component instead of writing, this up ,{component is just to make it
// easier within react to not call React.Component all the time}

// functional component vs class component(fun. constractor -> create objects)
// we must create render function that returns some JSX
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term:'' };
  }

  render() {
    /*//this can be also be typed: onChange={event => console.log(x)} />;
    <input onChange={this.onInputChange}/>;
  // call it onXXYY -> xx= name of element, yy = nema of event
    onInputChange(event) {
    this.setState({ term: event.target.value});
  }*/
return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
