import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
//react bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GameFrame from './GameFrame';

class Game extends Component {
  render() {

    const {
      game: {
        gameId,
        ganre,
        image,
        officialWebsite,
        rating,
        title,
        wikiPage,
        wikipediaPage,
        discription
      }
    } = this.props;

    let thisGame = <GameFrame key={gameId} game={this.props} />;


    return (
      <Card
        className="game-review"
        key={gameId}
      >
        <Card.Img className="image-responsive game-review-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title>
          <Link to={gameId}>{title}</Link>

          </Card.Title>

        </Card.Body>
      </Card>
    );
  }
}

Game.propTypes = {
  user: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Game);
