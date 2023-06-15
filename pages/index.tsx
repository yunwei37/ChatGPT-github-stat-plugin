import React, { useState, FormEvent } from 'react';

type ApiResponse = Record<string, unknown> | null;

function Home() {
  const [user, setUser] = useState<string>('');
  const [owner, setOwner] = useState<string>('');
  const [repo, setRepo] = useState<string>('');
  const [result, setResult] = useState<ApiResponse>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUserSubmit = async (event: FormEvent) => {
    event.preventDefault();
    fetchData(`/api/github/${user}`);
  };

  const handleRepoSubmit = async (event: FormEvent) => {
    event.preventDefault();
    fetchData(`/api/github/${owner}/${repo}`);
  };

  const fetchData = async (url: string) => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data: ApiResponse = await response.json();
        setResult(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult({ error: 'Error fetching data' + error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>ChatGPT Github Stat Plugin</h1>

      <form onSubmit={handleUserSubmit}>
        <h2>User Info</h2>
        <input 
          type="text" 
          placeholder="Enter GitHub username..." 
          value={user} 
          onChange={(e) => setUser(e.target.value)} 
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      <form onSubmit={handleRepoSubmit}>
        <h2>Repo Info</h2>
        <input 
          type="text" 
          placeholder="Enter owner's username..." 
          value={owner} 
          onChange={(e) => setOwner(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Enter repo name..." 
          value={repo} 
          onChange={(e) => setRepo(e.target.value)} 
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default Home;
