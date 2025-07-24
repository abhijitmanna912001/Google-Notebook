import { Request, Response } from "express";
import pdfParse from "pdf-parse";
import { PdfModel } from "../models/Pdf";
import { PdfChunkModel } from "../models/PdfChunk";

export const handleUpload = async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  try {
    const data = await pdfParse(req.file.buffer);

    const pdf = await PdfModel.create({
      filename: req.file.originalname,
      originalName: req.file.originalname,
    });

    const pages = data.text.split(/\f/);
    const chunks = pages.map((text, i) => ({
      pdfId: pdf._id,
      text,
      pageNumber: i + 1,
    }));

    await PdfChunkModel.insertMany(chunks);
    
    res
      .status(200)
      .json({ message: "PDF uploaded and parsed", pdfId: pdf._id });
  } catch (err: any) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Failed to process PDF" });
  }
};
