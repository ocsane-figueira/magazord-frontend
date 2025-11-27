import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { useGithubRepoDetails } from '@/hooks/useGithub';
import { Typography, CircularProgress } from '@mui/material';

export function RepoDetails() {
  const { username, repoName } = useParams<{ username: string; repoName: string }>();
  
  const { data: repo, isLoading: repoLoading } = useGithubRepoDetails(username || '', repoName || '');

  if (repoLoading) {
    return <div className="flex justify-center mt-10"><CircularProgress /></div>;
  }

  if (!repo) {
    return <div className="text-center mt-10">Repositório não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={repo.name} />

      <main className="container mx-auto p-4 max-w-4xl">
        <Typography variant="h4" fontWeight="bold" color="primary">
          {repo.name}
        </Typography>
      </main>
    </div>
  );
}