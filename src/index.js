import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB67v6gnbRnTp5ShLm4KsYpnCBIPx-UnRA';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {videos: []};


        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });

    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
};

ReactDOM.render(<App/>, document.querySelector('.container'));