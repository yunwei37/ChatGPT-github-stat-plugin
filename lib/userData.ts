interface UserStats {
    html_url: string;
    type: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string | null;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    totalPRs: number;
    totalCommits: number;
    totalIssues: number;
    totalStars: number;
    contributedTo: number;
    mostStarredRepos: any;
    rank: {
        level: string;
        percentile: number;
    };
}

import { fetchStats } from './statsFetcher';

export default async function generateUserStats(owner: string): Promise<UserStats> {
    // get the owner's GitHub stats
    const response = await fetch(`https://api.github.com/users/${owner}`);
    if (!response.ok) {
        throw new Error(`GitHub API returned ${response.status} for user ${owner}: ${await response.json()}`);
    }
    const data = await response.json();
    // calculate the owner's more GitHub stats
    const stats = await fetchStats(owner);

    // merge the data and stats
    const fullData = {
        ...data,
        ...stats
    };

    // Keys to be kept
    const keysToKeep: (keyof UserStats)[] = ["html_url", "type", "name", "company", "blog", "location", "email", "hireable", "bio",
        "twitter_username", "public_repos", "public_gists", "followers", "following", "created_at",
        "updated_at", "totalPRs", "totalCommits", "totalIssues", "totalStars", "contributedTo", "rank", "mostStarredRepos"];

    // Filter the full data to only include keys from the whitelist
    const filteredData: UserStats = Object.keys(fullData)
        .filter((key): key is keyof UserStats => keysToKeep.includes(key as keyof UserStats))
        .reduce((obj, key) => {
            obj[key] = fullData[key];
            return obj;
        }, {} as Partial<UserStats>) as UserStats;

    return filteredData;
}
