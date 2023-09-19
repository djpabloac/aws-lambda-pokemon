import {
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandInput,
  PutItemCommand,
  PutItemCommandInput,
  ScanCommand,
  ScanCommandInput
} from "@aws-sdk/client-dynamodb";
import { config } from ".";

class DynamoDB {
  client: DynamoDBClient

  constructor() {
    this.client = new DynamoDBClient({
      region: config.aws.region
    })
  }

  async get(input: GetItemCommandInput) {
    const command = new GetItemCommand(input)

    const response = await this.client.send(command)

    return response
  }

  async put(input: PutItemCommandInput) {
    const command = new PutItemCommand(input)

    const response = await this.client.send(command)

    return response
  }

  async scan(input: ScanCommandInput) {
    const command = new ScanCommand(input)

    const response = await this.client.send(command)

    return response
  }
}

export default new DynamoDB()