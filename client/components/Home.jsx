import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">Meteor React Full-stack</h1>
          <p className="lead">
            This is is starter pack which contains Meteor, React, React Router, Redux, Redux Devtools and Bootstrap V4 Alpha. It all comes with single starter package.
          </p>
          <hr className="m-y-2" />
          <p>
            It uses utility classes for typography and spacing to space content out within the larger container.
          </p>
          <p className="lead">
            <a
              type="button"
              target="_blank"
              className="btn btn-primary btn-lg"
              href="https://github.com/colus001/meteor-react-redux-react-router"
            >Learn more</a>
          </p>
        </div>
      </div>
    )
  }
}
