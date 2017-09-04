import React, { Component } from 'react';
import './App.css';
import { gql, graphql } from 'react-apollo'

class App extends Component {
  render() {
    if(!this.props.data.events) {
      return <div>Loading</div>
    }
    console.log(this.props.data.events)
    const { events } = this.props.data
    return (
      <div className="App">
        {events.map((event, index) => (
          <div key={index}>
            {event.title}
          </div>
        ))}
      </div>
    );
  }
}

const AppWithQuery = gql`
{
  events {
  eventId
  event
  slug
  title
  partner
  coverImage
  logoImage
  postFb
  eSlip
  date
  _id
  }
}
`
export default graphql(AppWithQuery)(App)

// export default App;
