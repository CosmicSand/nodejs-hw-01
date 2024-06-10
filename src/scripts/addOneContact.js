import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  // Генеруємо новий контакт

  const newContact = createFakeContact();

  // Додаємо новий контакт до початкового масиву

  await fs.appendFile(PATH_DB, JSON.stringify(newContact));
};

await addOneContact();
