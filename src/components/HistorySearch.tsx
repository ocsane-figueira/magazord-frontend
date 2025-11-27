import { Typography, IconButton, Chip } from '@mui/material';
import { useHistorySearchStore } from '@/store/useHistorySearchStore';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HistoryIcon from '@mui/icons-material/History';

type HistorySearchProps = {
  handleSearch: (toSearch: string) => void;
};

export function HistorySearch({ handleSearch }: HistorySearchProps) {
  const { history, clearHistory } = useHistorySearchStore();

  if (!history.length) {
    return null;
  }

  return (
    <div className="mt-4 border-t pt-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1 text-gray-600">
          <HistoryIcon fontSize="small" />
          <Typography variant="body2" fontWeight="bold">
            Recentes
          </Typography>
        </div>
        <IconButton
          onClick={clearHistory}
          size="small"
          title="Limpar Histórico"
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </div>

      <div className="flex flex-wrap gap-2">
        {history.map((name) => (
          <Chip
            key={name}
            label={name}
            variant="outlined"
            onClick={() => handleSearch(name)}
            className="cursor-pointer hover:bg-gray-100"
          />
        ))}
      </div>
    </div>
  );
}
