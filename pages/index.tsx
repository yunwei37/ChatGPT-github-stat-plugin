import React, { useState, FormEvent } from 'react';
import { Container, Form, Button, Spinner, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container className="my-4">
      <h1 className="mb-4">ChatGPT Github Stat Plugin</h1>

      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleUserSubmit}>
            <h2>User Info</h2>
            <Form.Control 
              type="text" 
              placeholder="Enter GitHub username..." 
              value={user} 
              onChange={(e) => setUser(e.target.value)} 
            />
            <Button className="mt-3" variant="primary" type="submit" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleRepoSubmit}>
            <h2>Repo Info</h2>
            <Form.Control 
              type="text" 
              placeholder="Enter owner's username..." 
              value={owner} 
              onChange={(e) => setOwner(e.target.value)} 
            />
            <Form.Control 
              className="mt-3"
              type="text" 
              placeholder="Enter repo name..." 
              value={repo} 
              onChange={(e) => setRepo(e.target.value)} 
            />
            <Button className="mt-3" variant="primary" type="submit" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {result && (
        <Card>
          <Card.Body>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default Home;
