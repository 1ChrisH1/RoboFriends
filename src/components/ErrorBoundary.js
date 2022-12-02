import React, { Component } from "react";

class errorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setstate({hasError: true})
    }
    render() {
        if (this.state.hasError) {
            return <h1>Oppps. That is not good</h1>
        }
        return this.props.children
    }
}
export default errorBoundary;