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

class Apiv2Controller {
  private static nameWithoutFillers(name: string): string {
    /* loop through the name once we hit 0 we hit the end of the name */
    for (let idx = 0; idx < name.length; idx += 1) {
      if (name[idx] === '0') {
        return name.slice(0, idx);
      }
    }
    return name;
  }

  private static formatClientId(id: string): string {
    /* 
      not much information was told on the rules of the
      format of the client id so just taking the basic approach
      taking the first 3 letters of the string, concating a dash
      and then concating the rest of the string which would
      equal to this:
      999-9999
      999-99999
      999-999999
      or i could read the length of the string minus 4
      append a dash and then read the last 4 which would
      result in this:
      999-9999
      9999-9999
      999999-9999
      since there's no info on the format just going with the first
    */
    let newClientId = '';
    newClientId += id.slice(0, 3);
    newClientId += '-';
    newClientId += id.slice(3, id.length);
    return newClientId;
  }

  public static parseBody(req: Request, res: Response): Response {
    const { data } = req.body as ApiRequestBodyJSON;
    /* clear out the zeroes */
    const firstName = Apiv2Controller.nameWithoutFillers(
      data.slice(0, LengthOfString.FirstName)
    );
    const lastName = Apiv2Controller.nameWithoutFillers(
      data.slice(
        LengthOfString.FirstName,
        LengthOfString.FirstName + LengthOfString.LastName
      )
    );
    /* format the id */
    const clientId = Apiv2Controller.formatClientId(
      data.slice(LengthOfString.FirstName + LengthOfString.LastName)
    );
    const responseBody: ApiResponseBodyJSON = { firstName, lastName, clientId };
    return res.status(200).send(responseBody);
  }
}

export default Apiv2Controller;
