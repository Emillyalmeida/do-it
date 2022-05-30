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
  loadingTasks: (userId: string, accessToken: string) => Promise<void>;
  deleteTask: (
    userId: string,
    accessToken: string,
    taskId: string
  ) => Promise<void>;
  updateTask: (
    userId: string,
    accessToken: string,
    taskId: string
  ) => Promise<void>;
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

  const loadingTasks = useCallback(
    async (userId: string, accessToken: string) => {
      try {
        const response = await api.get(`tasks?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

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

  const deleteTask = useCallback(
    async (taskId: string, accessToken: string, userId: string) => {
      await api
        .delete(`tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => loadingTasks(userId, accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  const updateTask = useCallback(
    async (userId: string, accessToken: string, taskId: string) => {
      await api
        .patch(
          `tasks/${taskId}`,
          { completed: true, userId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => loadingTasks(userId, accessToken));
    },
    []
  );

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, loadingTasks, deleteTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { useTasks, TasksProvider };
