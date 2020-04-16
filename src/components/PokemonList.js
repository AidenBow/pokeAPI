import React, {useEffect, useState} from "react"
import {connect} from "react-redux"

import Pokemon from "./Pokemon"
import {fetchPokemon, nextPokemon} from "../actions/actions"
import { Button } from 'semantic-ui-react'
const PokemonList = (props) => {
    const [key, setKey] = useState("")
    useEffect(() => {
        props.fetchPokemon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    console.log(props.pokemon)

    return (
        <div style={{margin: "0 auto"}}>
            <div style={{display: "flex", justifyContent: "space-between", maxWidth: 900, margin: "0 auto", padding: 20}}>
                <Button onClick={() => props.nextPokemon(props.lastURL)}> Previous Page </Button>
                <Button onClick={() => props.nextPokemon(props.nextURL)}> Next Page </Button>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", maxWidth: 930, flexWrap: "wrap", margin: "0 auto"}}>
                {props.pokemon.map(pokemon => {
                    return <Pokemon  pokemon={pokemon} url={pokemon.url} />
                })}

                
            </div>
            <div style={{display: "flex", justifyContent: "space-between", maxWidth: 500, margin: "0 auto"}}>
                <Button onClick={() => props.nextPokemon(props.lastURL)}> Previous Page </Button>
                <Button onClick={() => props.nextPokemon(props.nextURL)}> Next Page </Button>
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        nextURL: state.nextURL,
        lastURL: state.lastURL
    }
}

export default connect(mapStateToProps, {fetchPokemon, nextPokemon})(PokemonList)