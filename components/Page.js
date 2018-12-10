import React, {Component} from 'react';
import Header from "./Header";
import Meta from "./Meta";
import pageStyles from "./Page.css";

class Page extends Component {
    render() {
        return (
            <div className={pageStyles.Page}>
                <Meta/>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default Page;