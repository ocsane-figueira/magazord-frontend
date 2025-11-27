import { useNavigate } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import type { GitHubRepo } from '@/types/GitHubRepo';

interface RepoItemProps {
  repo: GitHubRepo;
}

export function RepoItem({ repo }: RepoItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/repo/${repo.owner.login}/${repo.name}`);
  };

  return (
    <Paper
      elevation={1}
      onClick={handleClick}
      className="p-4 mb-4 hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-blue-500 cursor-pointer"
    >
      <Typography
        variant="h6"
        component="h3"
      >
        {repo.name}
      </Typography>
    </Paper>
  );
}
