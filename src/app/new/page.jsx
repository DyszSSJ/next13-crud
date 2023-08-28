"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FormNewTask from "@/components/FormNewTask";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="container">
      <FormNewTask
        onSubmit={onSubmit}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        params={params}
      />
    </div>
  );
};

export default NewPage;
