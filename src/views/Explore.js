import React, { Component } from 'react'
import Piece from '../components/Piece';

export default class Explore extends Component {
    constructor() {
        super();
        this.state = {
            pieces: []
        }
    }

    getArt = async (input) => {
        const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${input}`)
        const data = await res.json()
        console.log(data)
        this.setState({ pieces: data.pieces })
    }

    async componentDidMount() {
        this.getArt('sunflowers')
    }


    showArt = async () => {
        return this.state.pieces?.map((a) =>
            (
                <Piece pieceInfo={a}/>
            )
        )
    }

    //accepting event here
    search = (e) => {
        e.preventDefault();
        const input = e.target.search.value;
        this.getArt(input)
    };

    render() {
        return(
            <div>

                <form onSubmit={this.search}>
                    <input name='search'/>
                    <button>Search</button>
                </form>
                <div className="row">


                    {this.showArt()}
                </div >
            </div>
        )
    }

}