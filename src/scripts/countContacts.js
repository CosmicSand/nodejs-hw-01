import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  const contacts = await fs.readFile(PATH_DB);
  const parsedContacts = JSON.parse(contacts);
  return parsedContacts.length;
};

console.log(await countContacts());
