import { users, surveyResponses, type User, type InsertUser, type SurveyResponse, type InsertSurveyResponse } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSurveyResponse(surveyResponse: InsertSurveyResponse): Promise<SurveyResponse>;
  getSurveyResponsesByEmail(email: string): Promise<SurveyResponse[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createSurveyResponse(insertSurveyResponse: InsertSurveyResponse): Promise<SurveyResponse> {
    const [surveyResponse] = await db
      .insert(surveyResponses)
      .values(insertSurveyResponse)
      .returning();
    return surveyResponse;
  }

  async getSurveyResponsesByEmail(email: string): Promise<SurveyResponse[]> {
    return await db.select().from(surveyResponses).where(eq(surveyResponses.email, email));
  }
}

export const storage = new DatabaseStorage();
