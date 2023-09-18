import { APIGatewayProxyHandler } from "aws-lambda";
import { errorHandler } from "../utils/error-handler";
import { responseHandler } from "../utils/response-handler";
import { config } from "../config";
import { DataSource } from "../config/datasource";
import { FinderPokemonDtoSchema } from "./dto/finder-pokemon.dto";
import { PokemonService } from "./services/pokemon.service";
import pokemonDynamonRepository from "./repository/pokemon.dynamo.repository";
import { PokemonDataSource } from "./datasource/pokemon.datasource";

export const handler: APIGatewayProxyHandler = async(event) => {
  try {
    const finderPokemonSafe = FinderPokemonDtoSchema.safeParse(event.pathParameters)

    if (!finderPokemonSafe.success)
      return errorHandler(finderPokemonSafe.error)

    // Get dataSource
    const dataSource = new DataSource(config.apiExternal.pokemonApi)

    // Get pokemonDataSource
    const pokemonDataSource = new PokemonDataSource(dataSource)

    // Get Services
    const pokemonService = new PokemonService(
      pokemonDynamonRepository,
      pokemonDataSource
    )

    const data = await pokemonService.getById(finderPokemonSafe.data)

    return responseHandler(data)
  } catch (error) {
    return errorHandler(error)
  }
}