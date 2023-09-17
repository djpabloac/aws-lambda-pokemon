
import { DataSource } from "../../config/datasource"
import { PokemonExternal } from "./pokemon.entity"
import IPokemonDataSource from "./pokemon.interface"

export class PokemonDataSource implements IPokemonDataSource {
  constructor(private readonly dataSource: DataSource) { }

  async getById(id: string): Promise<PokemonExternal> {
    const pokemon = await this.dataSource.getOne<PokemonExternal>(`/${id}`)

    return pokemon
  }

  async getByName(name: string): Promise<PokemonExternal> {
    const pokemon = await this.dataSource.getOne<PokemonExternal>(`/${name}`)

    return pokemon
  }
}
