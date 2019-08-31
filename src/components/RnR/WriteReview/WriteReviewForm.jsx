import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioGroupInput from './RadioGroupInput';
import TextInput from './TextInput';
import FileInput from './FileInput';
import TextAreaInput from './TextAreaInput';
import { getReviewFormConfig } from '../../../util/RnR-review-meta';

class WriteReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = getReviewFormConfig();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    const { key } = event;
    const { hideModal } = this.props;
    if (key === 'Escape') {
      hideModal();
    }
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [[name].value]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { hideModal } = this.props;
    // const formData = this.state;
    hideModal();
    // check if data is valid
    // make a post with form data if everything all good
    // otherwise render some errors
  }

  render() {
    const {
      rating,
      recommended,
      characteristic,
      summary,
      body,
      photos,
      nickname,
      email,
    } = this.state;
    return (
      <div
        role="presentation"
        onKeyDown={this.handleKeyPress}
      >
        <form onSubmit={this.handleSubmit}>
          <RadioGroupInput config={rating} handleInputChange={this.handleInputChange} />
          <RadioGroupInput config={recommended} handleInputChange={this.handleInputChange} />
          <RadioGroupInput config={characteristic} handleInputChange={this.handleInputChange} />
          <TextInput config={summary} handleInputChange={this.handleInputChange} />
          <TextAreaInput config={body} handleInputChange={this.handleInputChange} />
          <FileInput config={photos} handleInputChange={this.handleInputChange} />
          <TextInput config={nickname} handleInputChange={this.handleInputChange} />
          <TextInput config={email} handleInputChange={this.handleInputChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

WriteReviewForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default WriteReviewForm;
