import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    // Зчитуємо початковий масив контактів

    const contacts = await fs.readFile(PATH_DB);
    const parsedContacts = JSON.parse(contacts);

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: number }, createFakeContact);

    //   Додаємо нові контакти до початкового масиву
    const updatedContacts = JSON.stringify([...parsedContacts, ...newContacts]);
    await fs.writeFile(PATH_DB, updatedContacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
};

await generateContacts(5);
