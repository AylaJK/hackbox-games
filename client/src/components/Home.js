import React from "react";
import {Header} from "./Header";
export class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Hello This is the Home Content</h1>
            </div>
        );
    };
}