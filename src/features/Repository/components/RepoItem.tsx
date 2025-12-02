import { useNavigate } from 'react-router-dom';
import { Typography, Box, Chip } from '@mui/material';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';
import type { GitHubRepository } from '../types/GitHubRepository';

interface RepoItemProps {
  repo: GitHubRepository;
}

export function RepoItem({ repo }: RepoItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/repo/${repo.owner.login}/${repo.name}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 mb-4 hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-blue-500 cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <Typography
            variant="h6"
            component="h3"
            color="primary"
            className="font-bold"
          >
            {repo.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className="mt-1 mb-3 line-clamp-2"
          >
            {repo.description || 'Sem descrição disponível.'}
          </Typography>

          <div className="flex flex-wrap gap-3 items-center">
            {repo.language && (
              <Chip
                size="small"
                variant="outlined"
                label={repo.language}
                icon={<CodeIcon fontSize="small" />}
              />
            )}

            <Box
              gap={0.5}
              display="flex"
              alignItems="center"
              color="text.secondary"
              fontSize="0.75rem"
            >
              <span>{repo.stargazers_count}</span>
              <StarIcon fontSize="small" />
            </Box>

            <Box
              gap={0.5}
              display="flex"
              alignItems="center"
              color="text.secondary"
              fontSize="0.75rem"
            >
              <CallSplitIcon fontSize="small" />
              <span>{repo.forks_count}</span>
            </Box>

            <Typography variant="caption" color="text.disabled">
              Atualizado em:{' '}
              {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
