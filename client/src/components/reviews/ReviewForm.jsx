import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  changeView: PropTypes.func,
};
const defaultProps = {
  changeView: () => 'missing',
};

class ReviewForm extends React.Component {
  static methodsAreOk() {
    return true;
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Div = styled.div`
    color: #ffffff;
    flex-basis: 50%;
    font-size: 14px;
    font-weight: 700;
    line-height: 24.5px;
    text-align: left;
    margin-left: 318px;
    `;
    const Button = styled.button`
      background-color: #ffffff;
      margin: 4px 20px;
      cursor: pointer;
      border: none;
      border-radius: 16px;
      font-weight: 900;
      color: #000000;
      text-align: center;
      outline: none;

    `;
    const Span1 = styled.span`
      display: inline-block;
      font-family: 'Roboto', Sans Serif;
      line-height: 48px;
      text-align: center;
    `;

    const { changeView } = this.props;
    return (
      <Div>
        <Button onClick={() => changeView('seeReviews')}>
          <Span1>
            See All Reviews
          </Span1>
        </Button>
        <Span1>
          Write a Review
        </Span1>
      </Div>
    );
  }
}

ReviewForm.propTypes = propTypes;
ReviewForm.defaultProps = defaultProps;
export default ReviewForm;
