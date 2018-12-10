import dynamic from 'next/dynamic'
import React from "react";

const loading = () => <div>Loading</div>;

const DynamicOne = dynamic(
    import('../components/DynamicOne'),
    {loading}
);

export default class Dynamic extends React.Component {

    state = {show: false};

    show = () => this.setState({show: true});

    render() {
        return (
            this.state.show ? <DynamicOne/> : <button onClick={this.show}>Show!</button>
        );
    }

}