import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSurveyResponseSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to save survey responses
  app.post("/api/survey-responses", async (req, res) => {
    try {
      const validatedData = insertSurveyResponseSchema.parse(req.body);
      const surveyResponse = await storage.createSurveyResponse(validatedData);
      res.json({ success: true, id: surveyResponse.id });
    } catch (error) {
      console.error("Error saving survey response:", error);
      res.status(400).json({ error: "Invalid survey response data" });
    }
  });

  // API route to get survey responses by email
  app.get("/api/survey-responses/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const responses = await storage.getSurveyResponsesByEmail(email);
      res.json(responses);
    } catch (error) {
      console.error("Error fetching survey responses:", error);
      res.status(500).json({ error: "Failed to fetch survey responses" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
