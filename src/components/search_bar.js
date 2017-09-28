import React, { Component } from 'react';


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: '123'}
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
             </div>
        );
    }

    onInputChange(event) {
        console.log(event.target.value);
    }

    rndInt() {
        const max = 100;
        const min = 1;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

export default SearchBar;