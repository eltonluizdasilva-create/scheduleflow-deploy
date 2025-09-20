import { type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

// Interface para storage
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

// Storage em memória para Vercel (serverless)
export class MemStorage implements IStorage {
  private static users: Map<string, User> = new Map();
  private static contacts: Map<string, Contact> = new Map();

  async getUser(id: string): Promise<User | undefined> {
    return MemStorage.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(MemStorage.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    MemStorage.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { ...insertContact, id, createdAt: new Date() };
    MemStorage.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(MemStorage.contacts.values());
  }
}

export const storage = new MemStorage();

