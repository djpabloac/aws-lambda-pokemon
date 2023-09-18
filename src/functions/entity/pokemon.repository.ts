import { Pokemon } from "./pokemon.entity";

export default interface IPokemonRepository {
  getById(id: string): Promise<Pokemon>;
  create(pokemon: Pokemon): Promise<Pokemon>;
  exists(name: string): Promise<boolean>;
}