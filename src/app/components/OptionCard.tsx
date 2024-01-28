import { Card, CardContent } from '@mui/material';

export default function OptionsCard({ children }: { children: React.ReactNode }) {
  return (
    <Card variant="outlined">
      <CardContent>{children}</CardContent>
    </Card>
  );
}
