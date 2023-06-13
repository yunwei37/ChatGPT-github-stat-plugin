import StargazerLoader from './StargazerLoader';
import { getRepoReadme } from './getRepoReadme';

function getPercentiles(data: any[], percentiles: number[]): any[] {
    // Sort data by count
    const sortedData = [...data].sort((a, b) => a.count - b.count);
  
    // Calculate indexes for each percentile
    const indexes = percentiles.map(p => Math.floor((p / 100) * sortedData.length));
  
    // Get the corresponding data
    const percentileData = indexes.map(i => sortedData[i]);
  
    return percentileData;
  }

  export default async function generateRepoStats(owner: string, repo: string) {
    // get the owner's GitHub stats
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status} for user ${owner} repo ${repo}: ${response.json()}`);
    }
    const data = await response.json();
    const readmeData = await getRepoReadme(owner, repo);
    const stargazerDataFull = await StargazerLoader.loadStargazers(owner, repo);
    if 
  
    // Get the 20%, 40%, 60%, 80% and 100% data
    const stargazerData = getPercentiles(stargazerDataFull, [20, 40, 60, 80, 100]);
  
    // merge the data and stats
    return {
      ...data,
      stargazerData,
      "readme": readmeData,
    };
  }
  
