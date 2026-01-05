import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import { GetCommand } from "@aws-sdk/lib-dynamodb";

export const handler = async (event) => {
  const client = new DynamoDBClient({ region: "us-east-1" });
  const command = new GetCommand({
    TableName: "notes",
    Key: {userId: "user1", createdAt: 1}
  });
  const data = await client.send(command);
  const response = {
    statusCode: 200,
    body: JSON.stringify({ note: data.Item }),
  };
  return response;
};

