declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POKEMON_API: string;
      DYNAMODB_TABLENAME: string;
      AWS_REGION: string;
    }
  }
}

export { }