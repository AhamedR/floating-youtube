import React, { Component }  from 'react';

class NewPortal extends Component {
    state = {
        externalWindow: null,
    }

    componentDidMount() {
        const {
            url,
        } = this.props;

        this.renderTab(url);
    }

    componentDidUpdate(prevProp) { 
        if (prevProp !== this.props) {
            const {
                url,
            } = this.props;

            if (prevProp.url !== url) {
                this.renderTab(url);
            }
        }
    }

    componentWillUnmount() {
        const {
            externalWindow,
        } = this.state;

        if (externalWindow) {
            externalWindow.close();
        }
    }

    renderTab = (link) => {
        let {
            externalWindow
        } = this.state; 

        let {
            currentWindow,
        } = this.props;
 
        if (currentWindow) {
            currentWindow.close();
        }

        externalWindow = window.open(
            link,
            '_blank',
            'location=no,menubar=no,status=no,toolbar=no,scrollbars=no,width=600,height=400,left=200,top=200'
        );

        this.setState({
            externalWindow
        }, this.props.getWindow(externalWindow));
    }

    render() {
        return(
            <div>
                Floating Youtube is Active
            </div>
        );
    }
}

export default NewPortal;