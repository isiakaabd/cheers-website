import { Container, Grid } from "@mui/material";
import { Header, Footer } from ".";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Grid item sx={{ height: "100%" }}>
      <Header />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </Grid>
  );
};

export default MainPage;
