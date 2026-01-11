import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export const handler = async (event) => {
  const note = JSON.parse(event.body).note;
  const client = new DynamoDBClient({ region: "us-east-1" });
  const command = new PutCommand({
    TableName: "notes",
    Item: {
      userId: "user1",
      createdAt: Date.now(),
      title: note.title,
      body: note.body
    },
  });
  const data = await client.send(command);
  const response = {
    statusCode: 200,
  };
  return response;
};

