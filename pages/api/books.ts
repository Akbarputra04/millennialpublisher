import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs';

export type Book = {
	judul: string,
	terbit: string,
	isbn: string,
	foto: string,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Book>) {
	const jsonDirectory = path.join(process.cwd(), 'data');
	const fileContents = await fs.readFile(jsonDirectory + '/books.json', 'utf8');
	res.status(200).json(JSON.parse(fileContents))
}