import {
  Box,
  Grid,
  useDisclosure,
  Center,
  Heading,
  Text,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";
import SearchBox from "../../components/SeachBox";

import { useTasks } from "../../providers/tasks";
import { UserAuth } from "../../providers/userAuth";

import ModalDetails from "../../components/Modal/ModalDetails";

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
          <Center mt="10" display="flex" flexDir="column" textAlign="center">
            <Heading size="lg">Não encontramos resultados para:</Heading>
            <Text fontWeight="bold" color="gray.200" fontSize="xl">
              {taskNotFound}
            </Text>
            <Box
              mt="6"
              p="8"
              bg="white"
              boxShadow="base"
              w={["80%", "70%", "40%"]}
            >
              <Stack>
                <Skeleton
                  startColor="gray.100"
                  endColor="gray.200"
                  h="20px"
                  borderRadius="20px"
                  w="75%"
                />
                <Skeleton
                  startColor="gray.100"
                  endColor="gray.200"
                  h="20px"
                  borderRadius="20px"
                  w="60%"
                />
              </Stack>
              <Stack>
                <Skeleton
                  startColor="gray.100"
                  endColor="gray.200"
                  h="14px"
                  borderRadius="14px"
                />
                <Skeleton
                  startColor="gray.100"
                  endColor="gray.200"
                  h="14px"
                  borderRadius="14px"
                />
              </Stack>
            </Box>
          </Center>
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
      </Box>
    </>
  );
};

export default Dashboard;
