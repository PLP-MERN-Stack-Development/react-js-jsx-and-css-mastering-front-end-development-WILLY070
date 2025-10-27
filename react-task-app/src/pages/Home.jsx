import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${page}`
        );
        const result = await res.json();
        setData(result);
      } catch {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post) => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-2">
        <Button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Prev</Button>
        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </div>
  );
}
