import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs';
import { Article } from '.';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Article>) {
	const { article_id } = req.query

	const jsonDirectory = path.join(process.cwd(), 'data');
	const fileContents = await fs.readFile(jsonDirectory + '/articles.json', 'utf8');
	const convertToJson = JSON.parse(fileContents)

	res.status(200).json(convertToJson.find((d: Article) => d.id === article_id))
}