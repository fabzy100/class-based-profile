import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate developer who loves coding.",
        imgSrc: "https://example.com/johndoe.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      timeMounted: 0
    };
    this.intervalId = null; // To store interval ID
  }

  // Lifecycle method to start the timer
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ timeMounted: prevState.timeMounted + 1 }));
    }, 1000);
  }

  // Clear interval when component is unmounted
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Toggle visibility of the person's profile
  toggleProfile = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeMounted } = this.state;
    
    return (
      <div className="App">
        <h1>Class-Based Profile</h1>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: '20px' }}>
            <img src={person.imgSrc} alt={person.fullName} style={{ width: '150px', borderRadius: '50%' }} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <p>Component has been mounted for {timeMounted} seconds.</p>
      </div>
    );
  }
}

export default App;
