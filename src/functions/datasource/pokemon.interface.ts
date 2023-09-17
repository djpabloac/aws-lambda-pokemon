import { PokemonExternal } from "./pokemon.entity";

export default interface IPokemonDataSource {
  getByName(name: string): Promise<PokemonExternal>;
  getById(id: string): Promise<PokemonExternal>;
}