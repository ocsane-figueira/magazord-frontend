import { Avatar, Box, Typography } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { GitHubUser } from "../types/GitHubUser";

export function Card({ user }: { user: GitHubUser }) {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 h-fit sticky">
      <div className="p-6 flex flex-col items-center text-center gap-4">
        <Avatar
          src={user.avatar_url}
          alt={user.name}
          sx={{
            width: 150,
            height: 150,
            border: '4px solid white',
            boxShadow: 3,
          }}
        />
        <div className="w-full">
          <Typography variant="h5" fontWeight="bold">
            {user.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            className="hover:underline"
          >
            <a href={user.html_url} target="_blank" rel="noreferrer">
              @{user.login}
            </a>
          </Typography>
        </div>
        {user.bio && (
          <Typography variant="body2" color="text.secondary" className="italic">
            "{user.bio}"
          </Typography>
        )}
        <div className="flex flex-col gap-2 w-full text-left mt-2">
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            color="text.secondary"
          >
            <PeopleIcon fontSize="small" />
            <Typography variant="body2">
              <b>{user.followers}</b> seguidores · <b>{user.following}</b>{' '}
              seguindo
            </Typography>
          </Box>
          {user.location && (
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              color="text.secondary"
            >
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">{user.location}</Typography>
            </Box>
          )}
        </div>
      </div>
    </aside>
  );
}