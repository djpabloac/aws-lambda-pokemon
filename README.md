# AWS-LAMBDA-POKEMON
Aws-lambda-pokemon is a lambda function developed under the [Serverless](https://www.serverless.com/framework/docs) framework, [NodeJs](https://nodejs.org/en) and [DynamoDB](https://aws.amazon.com/es/pm/dynamodb). Requires NodeJs version 18 or higher.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file and have an existing table in DynamoDB.

`POKEMON_API`

`DYNAMODB_TABLENAME`

## Getting Started

Run the following commands (Local):

```bash
# 1. Install package npm
npm i

# 2. Development (Default port: 9004)
npm run dev
```

Open [http://localhost:9004](http://localhost:9004) with your browser to see the result.

## Deploy

Before deploying the project you must ensure that you have [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed and configured in your local environment. Run the command:

```bash
npm run deploy:dev
```

## Authors

- [@dj.pablo.ac](https://gitlab.com/dj.pablo.ac)

## License

[MIT](https://choosealicense.com/licenses/mit/)