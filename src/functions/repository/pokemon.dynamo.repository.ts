import { config } from "../../config";
import { dynamoDB } from "../../config/dynamo";
import { Pokemon } from "../entity/pokemon.entity";
import IPokemonRepository from "../entity/pokemon.repository";

class PokemonDynamoRepository implements IPokemonRepository {
  async getById(id: string): Promise<Pokemon> {
    const pokemon = await dynamoDB
      .get({
        TableName: config.db.dynamonDb.tables.pokemons,
        Key: { id }
      })
      .promise()

    return pokemon.Item as Pokemon
  }

  async create(pokemon: Pokemon): Promise<Pokemon> {
    await dynamoDB
      .put({
        TableName: config.db.dynamonDb.tables.pokemons,
        Item: pokemon
      })
      .promise()

    return pokemon
  }

  async exists(name: string): Promise<boolean> {
    const pokemon = await dynamoDB
      .scan({
        TableName: config.db.dynamonDb.tables.pokemons,
        ExpressionAttributeNames: {
          '#name': 'name'
        },
        ExpressionAttributeValues: {
          ":name": name
        },
        FilterExpression: "#name = :name"
      })
      .promise()

    return Boolean(pokemon.Items?.length)
  }
}

export default new PokemonDynamoRepository()