import React from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import List from "./components/List";
import UserProfile from "./components/UserProfile";
// import withBackButton from "./components/HOC";
import "./App.css";

// const EnhancedHeader = withBackButton(Header);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      activeIndex: 0,
      isLoaded: false,
      isShowingList: true
    };
  }
  componentWillMount() {
    fetch("https://mock-io.herokuapp.com/users")
      .then(res => res.json())
      .then(res =>
        this.setState({
          users: res,
          isLoaded: true
        })
      );
  }

  backToList = () => {
    this.setState({
      isShowingList: true
    });
  };

  selectContact = (e, index) => {
    this.setState({
      isShowingList: false,
      activeIndex: index
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          handleClick={this.backToList}
          currentState={this.state.isShowingList}
          user={this.state.users[this.state.activeIndex]}
        />
        {!this.state.isLoaded ? (
          <Loading />
        ) : this.state.isShowingList ? (
          <List users={this.state.users} handleClick={this.selectContact} />
        ) : (
          <UserProfile user={this.state.users[this.state.activeIndex]} />
        )}
      </div>
    );
  }
}

export default App;
