import 'source-map-support/register';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { controller } from '../controller';

export const customersHandler = async (event: APIGatewayProxyEvent) => {
  /* console.log(`event: ${JSON.stringify(event)}`);
  console.log(`event resource: ${JSON.stringify(event.resource)}`); */
  if (event.resource === '/customers' && event.httpMethod === 'GET') {
    return controller.findByFilter(event);
  }
  return controller.apiResponseBadRequestError();
};
