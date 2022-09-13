import React, { Component } from 'react'

export default class Piece extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    render() {
        const a = this.props.pieceInfo
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={a.primaryImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>{a.name} - {a.title}</p>
                    <p className="card-text">{a.medium}</p>
                    {/* <a href={a.url} className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        )
    }
}
