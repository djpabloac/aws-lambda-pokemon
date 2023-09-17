import { config } from "../../config";
import { dynamoDB } from "../../config/dynamo";
import { Pokemon } from "../entity/pokemon.entity";
import IPokemonRepository from "../entity/pokemon.repository";

class PokemonDynamoRepository implements IPokemonRepository {
  async getById(name: string): Promise<Pokemon> {
    const pokemon = await dynamoDB.get({
      TableName: config.db.dynamonDb.tables.pokemons,
      Key: {
        id: name
      }
    }).promise()

    return pokemon.Item as Pokemon
  }

  async create(pokemon: Pokemon): Promise<Pokemon> {
    await dynamoDB.put({
      TableName: config.db.dynamonDb.tables.pokemons,
      Item: pokemon
    }).promise()

    return pokemon
  }
}

export default new PokemonDynamoRepository()