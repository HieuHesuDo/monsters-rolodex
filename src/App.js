// import logo from './logo.svg';
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users") //Lấy từ URL này
      .then((response) => response.json()) //Lấy phản hồi sau đó convert thành file json để JavaScript có thể hiểu đc
      .then((users) => this.setState({ monsters: users })); //Sau đó lấy ra users và setState monsters thành mảng đó
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }); //lấy giá trị có trong ô input truyền vào state searchField
  };

  render() {
    // Lọc monsters
    const { monsters, searchField } = this.state; //Lấy các thuộc tính của state và gán vào biến monsters và searchField
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder={"Search monsters"} //Nhận prop placeholder
          handleChange={this.handleChange} //nhận prop handleChange và gán method handleChange
        ></SearchBox>
        <CardList monsters={filteredMonsters}>
          {/* Truyền monster như là 1 props từ App component */}
        </CardList>
      </div>
    );
  }
}

export default App;
