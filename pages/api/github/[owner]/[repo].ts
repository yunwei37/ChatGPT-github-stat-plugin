import type { NextApiRequest, NextApiResponse } from 'next';
import generateRepoStats from '../../../../lib/repoData';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { owner, repo } = req.query;
  
  try {
    const data = await generateRepoStats(owner as string, repo as string);
    
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: 'Unexpected error.' + error.message });
  }
}
