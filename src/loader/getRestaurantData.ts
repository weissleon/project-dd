import https from "https";
import crypto from "crypto";
import axios from "axios";

type RestaurantDataType = {
  id: string;
  name: string;
  coordinate: string;
  address: string;
  distance: string;
  time: string;
  mapLink: string;
};

export async function getRestaurantData(id: string) {
  const response = await axios.get(`https://api.notion.com/v1/pages/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.DB_API_KEY}`,
      "Notion-Version": "2022-06-28",
    },
    httpsAgent: new https.Agent({
      secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    }),
  });

  const { properties } = response.data as any;
  const name = properties.name["title"][0].text.content;
  const coordinate = properties.coordinate["rich_text"][0].text.content;
  const address = properties.address["rich_text"][0].text.content;
  const distance = properties.distance["rich_text"][0].text.content;
  const time = properties.time["rich_text"][0].text.content;
  const mapLink = properties["map_link"]["rich_text"][0].text.content;

  const data = {
    id,
    name,
    coordinate,
    address,
    distance,
    time,
    mapLink,
  };

  return data;
}
