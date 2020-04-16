import React, {useState, useEffect} from "react"
import axios from "axios"
import { Card, Icon, Image } from 'semantic-ui-react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState({})
    let types = []
    useEffect(() => {
        axios
            .get(props.url)
            .then(res => {
               
                setPokemon(res.data);
                res.data.types.forEach(type => {
                    types = type
                })
                console.log(types)
                //console.log(res.data)
                //props.setKey(res.data.name);
            })
            .catch(err => console.log(err))

    }, [props.url]
    )
    

    return(
        <div>
            <Card style={{marginBottom: 20}}>
            
            
            {pokemon.sprites && pokemon.sprites.front_default && <Image src={pokemon.sprites.front_default} alt="pokemon" wrapped ui={false} ></Image>}
            <Card.Content>
                <h3>{pokemon.name}</h3>
                {/* {types.forEach(type => {
                    console.log(type.type.name);
                    return <p>{type.type.name}</p>
                }
 
                )} */}
                
            </Card.Content>
            </Card>
        </div>
    )

}

export default Pokemon