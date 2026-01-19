import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DeleteCommand } from '@aws-sdk/lib-dynamodb';

export const handler = async (event) => {
  const client = new DynamoDBClient( {region: 'us-east-1'});
  const command = new DeleteCommand({
    TableName: 'notes',
    Key: {userId: 'user1', createdAt: Number(event.pathParameters.createdAt)}
  });

  const data = await client.send(command);
  const response = {
    statusCode: 200
  };
  return response;
};
