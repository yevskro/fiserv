/* 
  the returned data from server holds a firstName and lastName 
  property both properties hold a string value that has a max length.
  the whole string is filled with the name and if the name does not
  fill out the max length.. empty slots are substituted for 0 to fill
  out the nessacarry length of the string.
*/
// eslint-disable-next-line import/prefer-default-export
export enum LengthOfString {
  FirstName = 8,
  LastName = 10,
}
