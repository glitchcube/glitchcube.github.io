import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="f1 tc">
                <h1>Hello world</h1>
                <p>{this.props.greeting}</p>
            </div>
        )
    }
}

//This is the same as above. Think of react components as functions.
// const Hello = (props) => {
//     return (
//         <div className="f1 tc">
//             <h1>Hello world</h1>
//             <p>{props.greeting}</p>
//         </div>
//     )
// };

export default Hello;