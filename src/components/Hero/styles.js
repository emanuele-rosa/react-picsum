import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const OuterBox = styled(Box)(({ theme }) => ({
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.light,
  padding: theme.spacing(4),
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.breakpoints.values.xs ? "2rem" : "3rem",
  marginBottom: theme.spacing(4),
  color: theme.palette.primary.main,
  textAlign: "center",
}));

export const SearchBarContainer = styled(Box)({
  width: "100%",
  maxWidth: "600px",
});
