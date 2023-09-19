// import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { config } from "../../config";
import dynamoDB from "../../config/dynamodb";
import { Pokemon } from "../entity/pokemon.entity";
import IPokemonRepository from "../entity/pokemon.repository";

class PokemonDynamoDBRepository implements IPokemonRepository {
  async getById(id: string): Promise<Pokemon | null> {
    const pokemon = await dynamoDB
      .get({
        TableName: config.db.dynamonDb.tables.pokemons,
        Key: {
          "id": { 'S': id }
        }
      })

    if (!pokemon?.Item)
      return null

    return unmarshall(pokemon.Item) as Pokemon
  }

  async create(pokemon: Pokemon): Promise<Pokemon> {
    await dynamoDB
      .put({
        TableName: config.db.dynamonDb.tables.pokemons,
        Item: marshall(pokemon)
      })

    return pokemon
  }

  async exists(name: string): Promise<boolean> {
    const pokemon = await dynamoDB
      .scan({
        TableName: config.db.dynamonDb.tables.pokemons,
        ExpressionAttributeNames: {
          '#name': 'name'
        },
        ExpressionAttributeValues: marshall( {
          ":name": name
        }),
        FilterExpression: "#name = :name"
      })

    return Boolean(pokemon.Items?.length)
  }
}

export default new PokemonDynamoDBRepository()