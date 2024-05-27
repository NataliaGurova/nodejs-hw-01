import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const allContactsJson = await fs.readFile(PATH_DB, "utf-8");
    const allContacts = JSON.parse(allContactsJson);
    return allContacts.length;
  } catch (error) {
    console.error("Error getting number of contacts:", error);
  }
};

console.log(await countContacts());
