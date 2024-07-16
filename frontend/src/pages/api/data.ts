import { NextApiRequest, NextApiResponse } from 'next';

console.log('SPRING_BOOT_API_URL:', process.env.SPRING_BOOT_API_URL);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiUrl = process.env.SPRING_BOOT_API_URL;
    if (!apiUrl) {
      throw new Error('SPRING_BOOT_API_URL is not defined');
    }

    console.log('Fetching from Spring Boot API:', apiUrl);
    const response = await fetch(`${apiUrl}/`);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Spring Boot API error (${response.status}):`, errorBody);
      throw new Error(`Spring Boot API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Failed to fetch data from Spring Boot API', details: error.message });
  }
}