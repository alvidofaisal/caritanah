import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // TODO: Adjust with the Endpoints later on
    // PLACEHOLDER
    try {
        const response = await axios.get('FLASK_API_URL/data');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data'})
    }
}