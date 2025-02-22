import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { postReview, clearErrors } from '../../Redux/actions/dataActions';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


class PostReview extends Component {
  state = {
    handle:'',
    body: '',
    errors: {},
    currentTitle: null,
    reviewId:'',
    rating:''
  };
  /*
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors) {
      this.setState({ body: '', errors: {} });
    }
  }*/

  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }); };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postReview({
      body: this.state.body,
      handle: this.state.handle,
      reviewId: this.state.reviewId,
      rating: this.state.rating
    });
  };
  render() {
    //const { currentTitle } = this.props.data.game.title;

    const { errors } = this.state;
    const { current } = this.props;
    return (
      <div className= "container">
      <Form onSubmit={ this.handleSubmit }>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" name="handle"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Enter rating</Form.Label>
    <Form.Control as="select" name="rating">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="reviewArea">
  <Form.Label>Review game now</Form.Label>
  <Form.Control as="textarea" rows="5" name="body"/>
</Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      </div>
    );
  }
}

PostReview.propTypes = {
  postReview: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data

});

export default connect(mapStateToProps, { postReview, clearErrors })(PostReview);
