import {CardList} from './components/card-list/card-list.component';
import './App.css';
import {Component} from 'react'; 
import {SearchBox} from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();
    this.state = {
      figures:[],
      searchField: '',
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({figures : users}));

  }
  handleChange = e =>{
    this.setState({searchField: e.target.value})
    
  };
  render(){
    const {figures, searchField} = this.state;
    const filteredFigures= figures.filter(figure => 
      figure.name.toLowerCase().includes(searchField.toLowerCase()) 
      );

    return (
      
      <div className="App">
        <h1> Robot Finder </h1>
        <SearchBox
        placeholder ='Search'
        handleChange={this.handleChange}
        />
        <CardList figures={filteredFigures}/>
        
      </div>
    )
  }
  
}

export default App;
