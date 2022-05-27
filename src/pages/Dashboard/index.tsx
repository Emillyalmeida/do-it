import { Box, Grid } from "@chakra-ui/react";
import Header from "../../components/Header";
import SearchBox from "../../components/SeachBox";

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(400px,1fr))"
        gap={10}
        p="8"
        mt="10"
      ></Grid>
    </Box>
  );
};

export default Dashboard;
