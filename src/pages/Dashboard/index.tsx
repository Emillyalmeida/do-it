import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";
import SearchBox from "../../components/SeachBox";

import { useTasks } from "../../providers/tasks";
import { UserAuth } from "../../providers/userAuth";

import ModalDetails from "../../components/Modal/ModalDetails";
import NotFound from "./NotFound";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [clickTask, setTask] = useState({} as Task);

  const { user, accessToken } = UserAuth();
  const { tasks, loadingTasks, notFound, taskNotFound } = useTasks();

  console.log(tasks);
  useEffect(() => {
    setLoading(true);
    loadingTasks(user.id, accessToken).then((_) => setLoading(false));
  }, []);

  const {
    isOpen: isOpenDetails,
    onClose: onCloseDetails,
    onOpen: onOpenDetails,
  } = useDisclosure();

  const handleClick = (task: Task) => {
    setTask(task);
    onOpenDetails();
  };

  return (
    <>
      <ModalDetails
        isOpen={isOpenDetails}
        onClose={onCloseDetails}
        task={clickTask}
      />
      <Box>
        <Header />
        <SearchBox />
        {notFound ? (
          <NotFound taskNotFound={taskNotFound} />
        ) : (
          <>
            {loading ? (
              <></>
            ) : (
              <Grid
                w="100%"
                templateColumns="repeat(auto-fill, minmax(400px,1fr))"
                gap={10}
                p="8"
                mt="10"
              >
                {tasks.map((task) => (
                  <Card task={task} key={task.id} onClick={handleClick} />
                ))}
              </Grid>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
