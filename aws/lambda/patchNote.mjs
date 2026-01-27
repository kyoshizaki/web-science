import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { UpdateCommand } from '@aws-sdk/lib-dynamodb';

export const handler = async (event) => {
  const note = JSON.parse(event.body).note;
  const client = new DynamoDBClient( {region: 'us-east-1'});
  const command = new UpdateCommand({
    TableName: 'notes',
    Key: {userId: 'user1', createdAt: Number(event.pathParameters.createdAt)},
    UpdateExpression: "set title = :t, body = :b",
    ExpressionAttributeValues: {":t": note.title, ":b": note.body}
  });
  const data = await client.send(command);

  const response = {
    statusCode: 200,
  };
  return response;
};