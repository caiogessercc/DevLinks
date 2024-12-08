import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

const RepositoriesList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/caiogessercc/repos"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os repositórios.");
        }
        const data: Repository[] = await response.json();
        setRepositories(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (isLoading) {
    return <p className="text-center">Carregando...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repositories.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition shadow-md cursor-pointer hover:shadow-lg"
          >
            <Card className="h-full border-none dark:bg-zinc-800 dark:bg-opacity-50">
              <CardContent className="flex flex-col items-center p-4 space-y-4">
                <img
                  className="w-full rounded"
                  src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                  alt={repo.name}
                />
                <p className="text-sm text-gray-800 dark:text-gray-300">
                  Linguagem: <span className="font-semibold">{repo.language || "Não especificada"}</span>
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-300">
                  🌟 {repo.stargazers_count} | 🍴 {repo.forks_count}
                </p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepositoriesList;
