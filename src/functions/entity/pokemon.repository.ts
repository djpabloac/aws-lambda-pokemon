import { Pokemon } from "./pokemon.entity";

export default interface IPokemonRepository {
  getById(name: string): Promise<Pokemon>;
  create(pokemon: Pokemon): Promise<Pokemon>;
}