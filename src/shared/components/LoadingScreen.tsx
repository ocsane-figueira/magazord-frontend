import { CircularProgress } from "@mui/material";
import { Header } from "@/shared/components/Header";

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Carregando..." />
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <CircularProgress />
      </div>
    </div>
  );
}