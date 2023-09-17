import { APIGatewayProxyHandler } from "aws-lambda";
import { responseHandler } from "../utils/response-handler";
import { errorHandler } from "../utils/error-handler";
import { config } from "../config";
import { DataSource } from "../config/datasource";
import { CreatePokemonDtoSchema } from "./dto/create-pokemon.dto";
import { PokemonDataSource } from "./datasource/pokemon.datasource";
import pokemonDynamoRepository from "./repository/pokemon.dynamo.repository";
import { PokemonService } from "./services/pokemon.service";

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const createSafe = CreatePokemonDtoSchema.safeParse(event.pathParameters)

    if (!createSafe.success)
      return errorHandler(createSafe.error)

    // Get dataSource
    const dataSource = new DataSource(`${config.apiExternal.pokemonApi}/api/v2/pokemon`)

    // Get pokemonDataSource
    const pokemonDataSource = new PokemonDataSource(dataSource)

    // Get Services
    const pokemonService = new PokemonService(
      pokemonDynamoRepository,
      pokemonDataSource
    )

    const data = await pokemonService.createById(createSafe.data)

    return responseHandler(data)
  } catch (error) {
    console.log(error)
    return errorHandler(error)
  }
}