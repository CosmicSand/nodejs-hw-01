import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const getAllContacts = async () => {
  // Зчитуємо початковий масив контактів
  const contacts = await fs.readFile(PATH_DB);
  const parsedContacts = JSON.parse(contacts);
  return parsedContacts;
};

console.log(await getAllContacts());
