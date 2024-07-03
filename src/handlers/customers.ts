import 'source-map-support/register';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { controller } from '../controller';

export const customersHandler = async (event: APIGatewayProxyEvent) => {
  console.info(`event: ${JSON.stringify(event)}`);
  if (event.resource === '/customers' && event.httpMethod === 'GET') {
    return controller.findByFilter(event);
  }
  return controller.apiResponseBadRequestError();
};
