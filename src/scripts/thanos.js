import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  // Зчитуємо початковий масив контактів

  const contacts = await fs.readFile(PATH_DB);
  const parsedContacts = JSON.parse(contacts);

  // Видаляємо половину контактів
  const halfContacts = [];
  parsedContacts.forEach((el) => {
    const random = Math.round(Math.random());
    console.log(random);
    if (random === 1) {
      halfContacts.push(el);
    }
  });
  // Перезаписуємо файл з контактами
  console.log(parsedContacts.length);
  await fs.writeFile(PATH_DB, JSON.stringify(halfContacts));
  console.log(halfContacts.length);
};

await thanos();
