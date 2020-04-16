import React, {useState, useEffect} from "react"
import axios from "axios"
import { Card, Icon, Image } from 'semantic-ui-react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState("")
    
    useEffect(() => {
        axios
            .get(props.url)
            .then(res =>{
                //console.log(res.data)
                setPokemon(res.data)
            })
    }, [props.url]
    )
    

    return(
        <div>
            <Card>
            
            
            {pokemon.sprites && pokemon.sprites.front_default && <Image src={pokemon.sprites.front_default} alt="pokemon" wrapped ui={false} ></Image>}
            <Card.Content>{pokemon.name}</Card.Content>
            </Card>
        </div>
    )

}

export default Pokemon