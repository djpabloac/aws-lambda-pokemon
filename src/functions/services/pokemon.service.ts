import IPokemonDataSource from "../datasource/pokemon.interface";
import IPokemonRepository from "../entity/pokemon.repository";
import { PokemonExternal } from "../datasource/pokemon.entity";
import { CreatePokemonDto } from "../dto/create-pokemon.dto";
import { FinderPokemonDto } from "../dto/finder-pokemon.dto";
import { Pokemon } from "../entity/pokemon.entity";
import { randomUUID } from "crypto";

export class PokemonService {
  constructor(
    private readonly pokemonRepository: IPokemonRepository,
    private readonly pokemonDataSource: IPokemonDataSource
  ) { }

  private toMapPokemon(pokemonExternal: PokemonExternal): Pokemon {
    return {
      base_experience: pokemonExternal.base_experience,
      height: pokemonExternal.height,
      id: randomUUID(),
      is_default: pokemonExternal.is_default,
      location_area_encounters: pokemonExternal.location_area_encounters,
      name: pokemonExternal.name,
      order: pokemonExternal.order,
      weight: pokemonExternal.weight
    }
  }

  async getById(finderPokemonDto: FinderPokemonDto): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.getById(finderPokemonDto.id)

    return pokemon
  }

  async createById(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const pokemonExternal = await this.pokemonDataSource.getById(createPokemonDto.id)

    const newPokemon = this.toMapPokemon(pokemonExternal)

    const pokemon = await this.pokemonRepository.create(newPokemon)

    return pokemon
  }
}