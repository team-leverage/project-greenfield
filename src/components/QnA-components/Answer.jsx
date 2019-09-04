/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import PictureModal from './PictureModal';

class Answer extends React.Component {
  constructor(props, {
    data,
    helpfulClickHandler,
    reportClickHandler,
  }) {
    super(props, {
      data,
      helpfulClickHandler,
      reportClickHandler,
    });

    this.state = {
      displayCount: 2,
    };

    this.increaseDisplayCount = () => {
      const { displayCount } = this.state;
      this.setState({ displayCount: displayCount + 2 });
    };
  }

  render() {
    const {
      data,
      helpfulClickHandler,
      reportClickHandler,
    } = this.props;

    const { displayCount } = this.state;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
      <div key={`da${data.answers}`} className="qna-answer-container">
        {Object.values(data.answers).slice(0, displayCount).map((answer) => (
          <span key={`sa${answer.id}`} className="questionsAnswerTools">
            <p style={{ fontSize: '22px', marginTop: '15px', marginBottom: '7px' }}>
              {Object.values(data.answers)[0] === answer ? (
                <span>
                  <b style={{ marginRight: '1px' }}>
                    A:
                    &nbsp;
                  </b>
                  <span className="qna-answer-body">
                    <text>
                      {answer.body}
                    </text>
                  </span>
                </span>
              )
                : (
                  <span>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {answer.body}
                    </p>
                  </span>
                )}
            </p>
            {answer.photos.length === 0 ? '' : answer.photos.map((photo) => (
              <PictureModal key={`pa${answer.id + Math.random()}`} photo={photo} answer={answer} />
            ))}
            <p style={{
              marginTop: '7px',
              fontSize: '14px',
              marginBottom: 0,
              color: 'gray',
            }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              by
              {' '}
              {answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name}
              {`, ${new Date(answer.date).toLocaleDateString('en-us', options)}`}
              &nbsp;&nbsp;&nbsp;&nbsp;
              | &nbsp;&nbsp;&nbsp; Helpful?
              <button className="questionsHelpfulBtn questions-clear-btn" type="submit" onClick={() => helpfulClickHandler('qa', answer.id, 'answer')}>
                <u style={{ color: 'gray' }}>Yes</u>
              </button>
              {`(${answer.helpfulness})`}
              &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
              <button className="questionsReportBtn questions-clear-btn" type="submit" onClick={() => reportClickHandler('qa', answer.id, 'answer')}>
                <u style={{ color: 'gray' }}>Report</u>
              </button>
            </p>
            {data.answers[Object.keys(data.answers)[displayCount - 1]] === answer
              && displayCount < Object.keys(data.answers).length
              ? (
                <span
                  role="presentation"
                  onKeyPress={this.increaseDisplayCount}
                  onClick={this.increaseDisplayCount}
                  className="questions-clear-btn"
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LOAD MORE ANSWERS
                </span>
              )
              : ''}
          </span>
        ))}
      </div>
    );
  }
}

Answer.propTypes = {
  data: PropTypes.shape({
    question_body: PropTypes.string.isRequired,
    question_id: PropTypes.number.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    answers: PropTypes.shape({}).isRequired,
  }).isRequired,
  helpfulClickHandler: PropTypes.func.isRequired,
  reportClickHandler: PropTypes.func.isRequired,
};

export default Answer;
