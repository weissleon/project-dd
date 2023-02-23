// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

type RestaurantDataType = {
  id: string;
  name: string;
  coordinate: string;
  address: string;
  distance: string;
  time: string;
};

type DataType = {
  data: RestaurantDataType;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataType>
) {
  const payload = req.body;
  const { id } = JSON.parse(payload);

  const notion = new Client({
    auth: process.env.DB_API_KEY,
  });

  const response = await notion.pages.retrieve({
    page_id: id,
  });

  const data: RestaurantDataType[] = [];
  const { properties } = response as any;
  const name = properties.name["title"][0].text.content;
  const coordinate = properties.coordinate["rich_text"][0].text.content;
  const address = properties.address["rich_text"][0].text.content;
  const distance = properties.distance["rich_text"][0].text.content;
  const time = properties.time["rich_text"][0].text.content;

  const datum = {
    id,
    name,
    coordinate,
    address,
    distance,
    time,
  };

  res.status(200).json({ data: datum });
}
