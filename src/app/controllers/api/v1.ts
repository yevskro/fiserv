import { Request, Response } from 'express';
import {
  LengthOfString,
  ApiRequestBodyJSON,
  ApiResponseBodyJSON,
} from './types';
/* 
  the returned data from server holds a firstName and lastName 
  property both properties hold a string value that has a max length.
  the whole string is filled with the name and if the name does not
  fill out the max length.. empty slots are substituted for 0 to fill
  out the nessacarry length of the string.
*/

class Apiv1Controller {
  static parseBody(req: Request, res: Response): Response {
    /* based on the set length of string we can calculate how to
     slice the needed information */
    const { data } = req.body as ApiRequestBodyJSON;
    const firstName = data.slice(0, LengthOfString.FirstName);
    const lastName = data.slice(
      LengthOfString.FirstName,
      LengthOfString.FirstName + LengthOfString.LastName
    );
    const clientId = data.slice(
      LengthOfString.FirstName + LengthOfString.LastName
    );
    const responseBody: ApiResponseBodyJSON = { firstName, lastName, clientId };
    return res.status(200).send(responseBody);
  }
}

export default Apiv1Controller;
