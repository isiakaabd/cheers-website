import { Typography } from "@mui/material";

export const TextError = ({ children }) => {
  return (
    <Typography color="error" variant="span">
      {children}
    </Typography>
  );
};
