import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  return await prisma.task.findMany();
}

// export const revalidate = 60;
export const dynamic = "force-dynamic";

const HomePage = async () => {
  const task = await loadTasks();
  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {task.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default HomePage;
