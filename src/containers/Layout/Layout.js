import React, { Component } from 'react'
import Footer from '../../components/Navigation/Footer/Footer'
import Header from '../../components/Navigation/Header/Header'

class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </React.Fragment>
        )
    }
}
export default Layout