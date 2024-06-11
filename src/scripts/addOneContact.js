import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  // Зчитуємо початковий масив контактів

  const contacts = await fs.readFile(PATH_DB);
  const parsedContacts = JSON.parse(contacts);

  // Генеруємо новий контакт

  const newContact = createFakeContact();

  // Додаємо новий контакт до початкового масиву
  const updatedContacts = [...parsedContacts, newContact];
  await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
};

await addOneContact();
