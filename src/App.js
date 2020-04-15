import React, { Component } from 'react';
import Products from './components/Products';
import Message from './components/Message';
import Cart from './components/Cart';







class App extends Component {
    render() {
        return (
            <div >
                <main id="mainContainer">
                    <div className="container">
                        <Products />
                        <Message />
                        <Cart />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
