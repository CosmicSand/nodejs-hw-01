import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  // Видаляємо всі контакти

  await fs.writeFile(PATH_DB, JSON.stringify([]));
};

await removeAllContacts();
