import { useCallback } from "react";
import { createContext, useContext, useState, ReactNode } from "react";
import api from "../../services/api";

interface TasksProviderProp {
  children: ReactNode;
}

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

interface TaskContextData {
  tasks: Task[];
  createTask: (data: Omit<Task, "id">, accessToken: string) => Promise<void>;
}

const TasksContext = createContext<TaskContextData>({} as TaskContextData);

const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must to be used within AuthContext");
  }

  return context;
};

const TasksProvider = ({ children }: TasksProviderProp) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = useCallback(
    async (data: Omit<Task, "id">, accessToken: string) => {
      api
        .post("tasks", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => setTasks([...tasks, res.data]))
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export { useTasks, TasksProvider };
