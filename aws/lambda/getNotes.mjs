import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import { QueryCommand } from "@aws-sdk/lib-dynamodb";

export const handler = async (event) => {
  const client = new DynamoDBClient({ region: "us-east-1" });
  const command = new QueryCommand({
    TableName: "notes",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: { ":userId": "user1" },
    ProjectionExpression: "createdAt, title, stared",
    ScanIndexForward: false
  });
  const data = await client.send(command);
  const response = {
    statusCode: 200,
    body: JSON.stringify({ notes: data.Items }),
  };
  return response;
};

