import { fetchStats } from '../lib/statsFetcher';

describe('fetchStats', () => {
  it('returns an object with the expected properties', async () => {
    const stats = await fetchStats('yunwei');
    expect(stats).toHaveProperty('totalCommits');
    expect(stats).toHaveProperty('totalPRs');
    expect(stats).toHaveProperty('totalIssues');
    expect(stats).toHaveProperty('totalStars');
    expect(stats).toHaveProperty('rank');
  });
});