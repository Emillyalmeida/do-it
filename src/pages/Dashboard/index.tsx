import { Box, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import SearchBox from "../../components/SeachBox";
import { useTasks } from "../../providers/tasks";
import { UserAuth } from "../../providers/userAuth";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { user, accessToken } = UserAuth();
  const { tasks, loadingTasks } = useTasks();

  useEffect(() => {
    setLoading(true);
    loadingTasks(user.id, accessToken).then((_) => setLoading(false));
  }, []);

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
      >
        {tasks.map((task) => (
          <Card task={task} key={task.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
