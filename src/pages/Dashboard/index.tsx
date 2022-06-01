import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";
import SearchBox from "../../components/SeachBox";

import { useTasks } from "../../providers/tasks";
import { UserAuth } from "../../providers/userAuth";

import ModalDetails from "../../components/Modal/ModalDetails";
import ModalCreateTask from "../../components/Modal/ModalCreatetask";

import Loading from "./Loadinng";
import NotFound from "./NotFound";
import NoTasks from "./NoTasks";
import { Redirect, useHistory } from "react-router-dom";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  date: string;
}

const Dashboard = () => {
  const [clickTask, setTask] = useState({} as Task);
  const { user, accessToken } = UserAuth();
  const { tasks, loadingTasks, notFound, taskNotFound, Load } = useTasks();

  console.log(tasks);
  useEffect(() => {
    loadingTasks(user.id, accessToken);
  }, []);

  const {
    isOpen: isOpenDetails,
    onClose: onCloseDetails,
    onOpen: onOpenDetails,
  } = useDisclosure();

  const { onOpen, isOpen, onClose } = useDisclosure();

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
      <ModalCreateTask onClose={onClose} isOpen={isOpen} />
      <Box>
        <Header />
        {!Load && !tasks.length ? (
          <>
            <NoTasks onOpen={onOpen} />
          </>
        ) : (
          <>
            <SearchBox />
            {notFound ? (
              <NotFound taskNotFound={taskNotFound} />
            ) : (
              <>
                <Grid
                  w="100%"
                  templateColumns="repeat(auto-fill, minmax(315px,1fr))"
                  gap={10}
                  p="8"
                  mt="4"
                >
                  {Load ? (
                    <Loading repeatCount={6} />
                  ) : (
                    <>
                      {tasks.map((task) => (
                        <Card task={task} key={task.id} onClick={handleClick} />
                      ))}
                    </>
                  )}
                </Grid>
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
