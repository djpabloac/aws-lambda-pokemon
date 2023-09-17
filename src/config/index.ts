export const config = {
  apiExternal: {
    pokemonApi: process.env.POKEMON_API!
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
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
}