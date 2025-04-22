export const InfoCard = ({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) => (
  <div className="bg-muted/50 border rounded-xl p-4 shadow-sm">
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className={`text-lg font-semibold ${className}`}>{value}</p>
  </div>
);
