import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions">
      <div className="qs-header">
        <span>FAQ</span>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className='q-parts'>
        <div className="left-ques">
          <div className="left-q1">
            <h2>Can I try before I buy?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
              sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
            </p>
          </div>
          <div className="left-q1">
            <h2>What payment methods do you accept?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
              sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
            </p>
          </div>
        </div>
        <div className="right-ques">
          <div className="left-q1">
            <h2>Can I change my plan later?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
              sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
            </p>
          </div>
          <div className="left-q1">
            <h2>What payment methods do you accept?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
              sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
