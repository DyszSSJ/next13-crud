"use client";
import React from "react";
import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();

  const deleteTask = async () => {
    const res = await fetch(`/api/tasks/${task.id}`, {
      method: "DELETE",
    });
    await res.json();
    router.refresh();
  };

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg" src="/project.jpg" alt="" />
      <div class="p-5">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {task.title}
        </h5>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {task.description}
        </p>
        <p class="mb-3 text-sm font-medium text-gray-900 dark:text-gray-200">
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
        <div class="flex items-center justify-between mt-4 gap-8">
          <div
            onClick={() => router.push("/tasks/edit/" + task.id)}
            class="flex gap-4 w-full items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer"
          >
            <span>Edit</span>
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
            </svg>
          </div>
          <div
            onClick={() => deleteTask()}
            class="flex gap-4 justify-center w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:cursor-pointer"
          >
            <span>Delete</span>
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
