import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStory } from './StoriesActions';
//import ReactTable from 'react-table';
//import clientConfig from '../../../config';

// Import Style
//import styles from './instagram.css';


class CreateStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            video: '',
            // status: '',
        };
    }

    handleNavigationPage() {
        browserHistory.push('/menu');
    }

    handleCreateTitle(e) {
        this.setState({ title: e.target.value });
    }

    handleCreateDescription(e) {
        this.setState({ description: e.target.value });
    }

    handleLinkVideo(e) {
        this.setState({ video: e.target.value });
    }

    handleChangeStatus(e) {
        this.setState({ status: e })
    }

    createStory(e) {
        e.preventDefault();
        if (this.state.title != '' && this.state.description != '' && this.state.video != '') {
            let story = {
                title: this.state.title,
                description: this.state.description,
                video: this.state.video,
                // status: this.state.status
            }
            this.props.createStory(story);
        }
        else {
            alert('Fill in all the details');
        }
    }

    render() {
        return (<section>
            <button onClick={this.handleNavigationPage.bind(this)}>Back</button>
            <br />
            <br />
            <h1>Create Story</h1>
            <br />
            <div>
                <h4>Title: </h4>
                <input type="text" onChange={this.handleCreateTitle.bind(this)} />
            </div>
            <div>
                <h4>description: </h4>
                <textarea type="text" onChange={this.handleCreateDescription.bind(this)} />
            </div>
            <div>
                <h4>Video: </h4>
                <textarea type="text" onChange={this.handleLinkVideo.bind(this)} />
            </div>
            {/* <h4>Status: </h4>
            <input type="checkbox" name="status" onClick={this.handleChangeStatus.bind(this)} />
            <label> True</label>
            <br />
            <input type="checkbox" name="status" onClick={this.handleChangeStatus.bind(this)} />
            <label> False</label> */}
            <br />
            <button onClick={this.createStory.bind(this)}>Create Story</button>
            <br />
        </section>)
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createStory,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
    };
}


export default connect(mapStateToProps, matchDispatchToProps)(CreateStory);
