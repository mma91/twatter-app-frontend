import React from 'react';
import { Link } from "react-router-dom";

class Mainfeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };
  };

  async componentDidMount() {
    let tweets = await fetch("http://localhost:3000/tweets")
      .then(data => data.json());
    console.log(tweets);

    this.setState({
      tweets: tweets,
    })
  }

  render() {
    return (
        <div className='all-tweets-container'>
          {this.state.tweets && this.state.tweets.map((tweet) => {
            return <div key={tweet.id} className="tweet-container">
              <p>{tweet.message}</p>
              <div className='tweet-signature-container'>
                <Link to = {"/:username"}>
                <p>@{tweet.username}</p>
                </Link>
                <p>{tweet.created_at.slice(0,10).split("-").reverse().join("/")}</p>
              </div>
            </div>
          })}
        </div>
    );
  }
}

export default Mainfeed;