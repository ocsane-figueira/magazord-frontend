import { Avatar, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import type { GitHubUser } from '../types/GitHubUser';
import { Information } from './Information';
import { useState } from 'react';

export function Card({ user }: { user: GitHubUser }) {
  const [open, setOpen] = useState(false);

  return (
    <aside className=" w-full md:w-1/3 lg:w-1/4 h-fit sticky">
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
        {/* Quando for tablet ou desktop exibe direto o Information */}
        <div className="hidden sm:block">
          <Information user={user} />
        </div>
        {/* Quando for mobile exibe direto o collapsable  */}
        <div className="flex sm:hidden w-full flex-col">
          <div
            className="flex flex-row justify-center items-center cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Typography
              color="info"
              variant="overline"
              className="hover:underline"
            >
              Informação adicionais
            </Typography>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          {open && (
            <div className="w-full bg-gray-100 p-4 rounded-2xl">
              <Information user={user} />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
