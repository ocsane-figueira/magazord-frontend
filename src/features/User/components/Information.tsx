import { Box, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';
import type { GitHubUser } from '../types/GitHubUser';

export function Information({ user }: { user: GitHubUser }) {
  return (
    <div className="flex flex-col gap-2 w-full text-left mt-2">
      <Box display="flex" alignItems="center" gap={1} color="text.secondary">
        <PeopleIcon fontSize="small" />
        <Typography variant="body2">
          <b>{user.followers}</b> seguidores · <b>{user.following}</b> seguindo
        </Typography>
      </Box>
      {user.company && (
        <Box gap={1} display="flex" alignItems="center" color="text.secondary">
          <BusinessIcon fontSize="small" />
          <Typography variant="body2">{user.company}</Typography>
        </Box>
      )}
      {user.blog && (
        <Box display="flex" alignItems="center" gap={1} color="text.secondary">
          <LinkIcon fontSize="small" />
          <Typography variant="body2" className="hover:underline">
            <a href={user.blog} target="_blank" rel="noreferrer">
              {user.blog}
            </a>
          </Typography>
        </Box>
      )}
      {user.location && (
        <Box display="flex" alignItems="center" gap={1} color="text.secondary">
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{user.location}</Typography>
        </Box>
      )}
    </div>
  );
}
