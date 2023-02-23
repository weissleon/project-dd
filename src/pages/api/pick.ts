// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const notion = new Client({
    auth: process.env.DB_API_KEY,
  });

  const response = await notion.databases.query({
    database_id: "8fbccb2a-56c3-47ef-8b8f-535dedb8273f",
  });

  const data: string[] = [];
  response.results.forEach((result) => {
    const id = result.id;
    data.push(id);
  });

  const pick = data[Math.floor(Math.random() * data.length)];

  res.status(200).json({ pick: pick });
}
