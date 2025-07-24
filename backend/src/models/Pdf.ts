import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    originalName: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const PdfModel = mongoose.model("Pdf", pdfSchema);
