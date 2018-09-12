import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import Style
//import styles from './navigations.css';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (<section>
       <ul>
        <li>
          <Link to="/create">
            <p>Create Story</p>
          </Link>
        </li>
      </ul>
    </section>);
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {
  };
}


export default connect(mapStateToProps, matchDispatchToProps)(Navigation);
