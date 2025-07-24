import mongoose from "mongoose";

const chunkSchema = new mongoose.Schema(
  {
    pdfId: { type: mongoose.Schema.Types.ObjectId, ref: "Pdf", required: true },
    text: { type: String, required: true },
    pageNumber: { type: Number, required: true },
  },
  { timestamps: true }
);

export const PdfChunkModel = mongoose.model("PdfChunk", chunkSchema);
