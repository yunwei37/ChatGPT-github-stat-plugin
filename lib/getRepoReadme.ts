export async function getRepoReadme(owner: string, repo: string): Promise<string> {
    let readmeData: string;
    let readmeResponse: Response;
  
    // Attempt to fetch README from main branch
    readmeResponse = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
    );
    if (readmeResponse.ok) {
      readmeData = await readmeResponse.text();
    } else {
      // If README not on main, attempt to fetch from master branch
      readmeResponse = await fetch(
        `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`
      );
      if (readmeResponse.ok) {
        readmeData = await readmeResponse.text();
      } else {
        throw new Error("README not found on main or master branch.");
      }
    }
    return readmeData;
  }
  