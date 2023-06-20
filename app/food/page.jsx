"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const Food = () => {
  const [aliments, setAliments] = useState([]);
  const [selectedAliments, setSelectedAliments] = useState([]);

  useEffect(() => {
    fetchAliments();
  }, []);

  const fetchAliments = async () => {
    const response = await fetch('/api/aliment');
    const data = await response.json();
    setAliments(data);
  };

  const handleAlimentSelection = (alimentId) => {
    if (selectedAliments.includes(alimentId)) {
      setSelectedAliments(selectedAliments.filter(id => id !== alimentId));
    } else {
      setSelectedAliments([...selectedAliments, alimentId]);
    }
  };

  const handleDeleteSelectedAliments = async () => {
    if (selectedAliments.length === 0) {
      alert("Please select aliments to delete.");
      return;
    }

    try {
      const response = await fetch("/api/aliment/delete", {
        method: "DELETE",
        body: JSON.stringify({ aliments: selectedAliments }),
      });

      if (response.ok) {
        alert("Selected aliments deleted successfully!");
        // Optionally, you can update the aliments list here by fetching the updated data
        setSelectedAliments([]);
        fetchAliments();
      } else {
        console.log("Failed to delete aliments.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'> Add an aliment!</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Add an aliment with his macros as well as his price!
      </p>

      <Link href="/create-aliment">
        <button className='my-4 px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
          Create New Aliment
        </button>
      </Link>
      
      <button type="button" onClick={handleDeleteSelectedAliments}>
        Delete Selected Aliments
      </button>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      const allAlimentIds = aliments.map((aliment) => aliment._id);
                      setSelectedAliments(allAlimentIds);
                    } else {
                      setSelectedAliments([]);
                    }
                  }}
                />
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Calories
              </th>
              <th scope="col" className="px-6 py-3">
                Protein
              </th>
              <th scope="col" className="px-6 py-3">
                Fat
              </th>
              <th scope="col" className="px-6 py-3">
                Carbs
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {aliments.map(aliment => (
              <tr 
                key={aliment._id} 
                className={`${
                  selectedAliments.includes(aliment._id) ? "bg-blue-200" : "bg-white"
                } border-b dark:bg-gray-800 dark:border-gray-700`}
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedAliments.includes(aliment._id)}
                    onChange={() => handleAlimentSelection(aliment._id)}
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {aliment.name}
                </td>
                <td className="px-6 py-4">
                  {aliment.calories}
                </td>
                <td className="px-6 py-4">
                  {aliment.protein}
                </td>
                <td className="px-6 py-4">
                  {aliment.fat}
                </td>
                <td className="px-6 py-4">
                  {aliment.carbs}
                </td>
                <td className="px-6 py-4">
                  {aliment.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Food;