import { getRepoReadme } from '../lib/repoStats/getRepoReadme';

describe('getRepoReadme', () => {
  it('returns the README data for a valid repo', async () => {

    const readmeData = await getRepoReadme('yunwei37', 'Eunomia');
    console.log(readmeData);
  });

  it('throws an error if the README is not found on the main or master branch', async () => {

    await expect(getRepoReadme('testOwner', 'testRepo')).rejects.toThrow('README not found on main or master branch.');
  });
});
