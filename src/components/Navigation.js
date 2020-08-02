import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="_blank" className="text-white">
                        { this.props.titulo }
                        <span className="badge badge-pill badge-light ml-2">
                            { this.props.numero }
                        </span>
                    </a>
                </nav>
            </div>
        );
    }
}
