import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs';

export type Article = {
	id: string,
	timestamp: string,
	thumbnail: string,
	title: string,
	summary: string,
	content: string,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Article>) {
	const jsonDirectory = path.join(process.cwd(), 'data');
	const fileContents = await fs.readFile(jsonDirectory + '/articles.json', 'utf8');
	
	res.status(200).json(JSON.parse(fileContents))
}