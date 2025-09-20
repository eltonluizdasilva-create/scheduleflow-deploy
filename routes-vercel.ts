import type { Express } from "express";
import { storage } from "./storage-vercel";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export function registerRoutes(app: Express): void {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Mensagem enviada com sucesso!",
        data: contact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: error.errors
        });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({
          success: false,
          message: "Erro interno do servidor"
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({
        success: true,
        data: contacts
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Erro interno do servidor"
      });
    }
  });
}

