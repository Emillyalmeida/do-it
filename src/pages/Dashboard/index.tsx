import {
  Box,
  Grid,
  useDisclosure,
  Text,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";
import SearchBox from "../../components/SeachBox";

import { useTasks } from "../../providers/tasks";
import { UserAuth } from "../../providers/userAuth";

import ModalDetails from "../../components/Modal/ModalDetails";
import NotFound from "./NotFound";
import { FaClipboard } from "react-icons/fa";
import ModalCreateTask from "../../components/Modal/ModalCreatetask";
import { theme } from "../../styles/theme";
import Loading from "./Loadinng";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const Dashboard = () => {
  const [Load, setLoading] = useState(true);
  const [clickTask, setTask] = useState({} as Task);

  const { user, accessToken } = UserAuth();
  const { tasks, loadingTasks, notFound, taskNotFound } = useTasks();

  console.log(tasks);
  useEffect(() => {
    setLoading(true);
    loadingTasks(user.id, accessToken).then((_) => setLoading(true));
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
            <Box
              mt="4"
              w="90%"
              ml="5vw"
              display="flex"
              flexDir="column"
              justifyContent="center"
              borderWidth="2px"
              borderStyle="dashed"
              borderColor="gray.300"
              textAlign="center"
            >
              <Center flexDir="column" paddingY="12" paddingX="6">
                <FaClipboard
                  fontSize="3.5rem"
                  color={theme.colors.gray["300"]}
                />
                <Heading color="gray.800" mt="4">
                  Vamos criar sua primeira tarefa
                </Heading>
                <Text color="gray.300" mt="3" fontSize="xl">
                  Insira sua meta e mostre a você mesmo sua <br />
                  capacidade em cumprir suas atividades
                </Text>
                <Button
                  bg="purple.700"
                  h="60px"
                  ml={["0", "0", "6"]}
                  fontSize="xl"
                  borderRadius="8px"
                  paddingX="19"
                  color="white"
                  _hover={{ bg: "purple.800" }}
                  w={["100%", "100%", "auto"]}
                  mt={["4", "4", "6"]}
                  onClick={onOpen}
                >
                  Criar minha primeira tarefa
                </Button>
              </Center>
            </Box>
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
