"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import AlimentForm from "@components/AlimentForm";

const CreateAliment = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [aliment, setAliment] = useState({
    name: "",
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
    price: ""
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const addAlimentsFromFile = async () => {
    if (!selectedFile) {
      alert("Please choose a file first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("/api/aliment/bulk", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Aliments added successfully!");
      } else {
        console.log("Failed to add aliments.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createAliment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/aliment/new", {
        method: "POST",
        body: JSON.stringify({
          name: aliment.name,
          calories: aliment.calories,
          protein: aliment.protein,
          fat: aliment.fat,
          carbs: aliment.carbs,
          price: aliment.price,
          userId: session?.user.id
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <input type="file" accept=".json" onChange={handleFileSelect} />

      <div>
        <button type="button" onClick={addAlimentsFromFile}>
          Add Aliments
        </button>
      </div>

      <AlimentForm
        type="Create"
        post={aliment}
        setPost={setAliment}
        submitting={submitting}
        handleSubmit={createAliment}
      />
    </>
  );
};

export default CreateAliment;