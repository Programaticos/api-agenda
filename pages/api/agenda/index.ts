import { query } from "@/data/mysql/mysql-client";
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name?: string;
  success?: boolean;
  data?: any;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      const users = await query("SELECT * FROM contacts;");
      res.status(200).json({ success: true, data: users });
      break;
    case "POST":
      // Handle POST request
      res.status(201).json({ name: "Juan Perez POST" });
      break;
    case "PUT":
      // Handle POST request
      res.status(200).json({ name: "Juan Perez PUT" });
      break;
    case "DELETE":
      // Handle POST request
      res.status(200).json({ name: "Juan Perez DELETE" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
