import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const allContactsJson = await fs.readFile(PATH_DB, "utf-8");
    const allContacts = JSON.parse(allContactsJson);
    for (let i = 0; i < number; i+=1) {
      const createContact = createFakeContact();
      allContacts.push(createContact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2), "utf-8");
  } catch (error) {
    console.error("Error generating contacts:", error);
  }
};

await generateContacts(5);
