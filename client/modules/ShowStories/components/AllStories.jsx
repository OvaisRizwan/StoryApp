import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { allStories } from './StoriesActions';
import ReactTable from 'react-table';
import clientConfig from '../../../config';

// Import Style
//import styles from './instagram.css';


class AllStories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.getAllStories();
    }

    renderStories() {
        if (this.props.allStories) {
            if (this.props.allStories.length > 0) {
                if (!clientConfig.storyColumns.find(o => o.id == 'delete')) {
                    clientConfig.storyColumns.unshift({
                        Header: '',
                        id: 'delete',
                        accessor: 'title',
                        Cell: ({ value }) => (<button onClick={this.deleteStories.bind(this, value)}>Delete</button>)
                    });
                }
                return <div>
                    <h1>Stories</h1>
                    <ReactTable data={this.props.allStories} columns={clientConfig.storyColumns} className="-striped -highlight" />
                </div>
            }
        }
    }

    render() {
        return (<section>
            {this.renderStories()}
        </section>)
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        allStories,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        allStories: state.allStories ? state.allStories : null
    };
}


export default connect(mapStateToProps, matchDispatchToProps)(AllStories);
