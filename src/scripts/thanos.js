import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const allContactsJson = await fs.readFile(PATH_DB, "utf-8");
    const allContacts = JSON.parse(allContactsJson);
    const randomContacts = allContacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(randomContacts, null, 2), "utf-8")
  } catch (error) {
    console.error("Error thanos:", error);
  }
};

await thanos();
