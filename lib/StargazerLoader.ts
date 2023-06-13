// from https://github.com/seladb/StarTrack-js/blob/master/src/utils/StargazerLoader.js
import GitHubDataLoader from "./GitHubDataLoader";
import StarStatistics from "./StarStatistics";

interface ForecastProps {
  daysBackwards: number;
  daysForward: number;
  numValues: number;
}

interface StargazerData {
  date: string;
  count: number;
}

interface StargazerResult {
  username: string;
  repo: string;
  stargazerData: StargazerData[];
  stats: any; // you should replace this with the actual type
}

class StargazerLoader {
  async loadStargazers(
    username: string,
    repo: string,
  ): Promise<StargazerResult | null> {
    const stargazerData = await GitHubDataLoader.fetchStargazers(
      username,
      repo,
    );
    if (stargazerData === null) {
      return null;
    }
    return {
      username: username,
      repo: repo,
      stargazerData: stargazerData,
      stats: StarStatistics.calculateStatistics(stargazerData),
    };
  }
}

const stargazerLoader = new StargazerLoader();
Object.freeze(stargazerLoader);

export default stargazerLoader;
