import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const getAllContacts = async () => {
  try {
    const allContactsJson = await fs.readFile(PATH_DB, "utf-8");
    const allContacts = JSON.parse(allContactsJson);
    return allContacts;

  } catch (error) {
    console.error("Error getting all contacts:", error);
  }
};

console.log(await getAllContacts());
