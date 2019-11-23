import React from 'react';
import NewPortal from './NewPortal';

class NewTab extends React.PureComponent {
    state = {
        youtubeURL      : null,
        showWindowPortal: false,
        currentWindow   : null,
    }

    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                counter: this.state.counter +1,
            })
        }, 500);
    }

    toggleWindowPortal = () => {
        this.setState({
            ...this.state,
            showWindowPortal: !this.state.showWindowPortal,
        });
    }

    test = (obj) => {
        this.setState({
            currentWindow: obj,
        });
    }

    handleChange = (event) => {
        const {
            value,
        } = event.target;

        this.setState({
            youtubeURL: value,
        });
    }

    render() {
        const {
            youtubeURL,
            currentWindow,
        } = this.state;

        return (
            <div>
                {/* 'https://www.youtube.com/embed/1w9LxXV_Iuo' */}
                <input onChange={event => {this.handleChange(event)}} type="text" placeholder="Youtube url"/>
                <button onClick={this.toggleWindowPortal}>
                    {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
                </button>
                
                {this.state.showWindowPortal && (
                    <NewPortal
                        getWindow={this.test}
                        url={youtubeURL}
                        currentWindow={currentWindow}
                    />
                )}
            </div>
        );
    }
}

export default NewTab;