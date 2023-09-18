export const config = {
  apiExternal: {
    pokemonApi: `${process.env.POKEMON_API!}/api/v2/pokemon`
  },
  db: {
    dynamonDb: {
      tables: {
        pokemons: process.env.DYNAMODB_TABLENAME!
      }
    }
  },
  aws: {
    region: process.env.AWS_REGION!,
  }
}