import AWS from "aws-sdk";
import { config } from ".";

AWS.config.update({
  region: config.aws.region
})

export const dynamoDB = new AWS.DynamoDB.DocumentClient()