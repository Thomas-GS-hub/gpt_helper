import { connectToDB } from "@utils/database";
import Aliment from "@models/aliment";

export const POST = async (request) => {
  try {
    await connectToDB();

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response("No file found in the request.", { status: 400 });
    }

    const fileContent = await file.text();
    const aliments = JSON.parse(fileContent);

    for (const alimentData of aliments) {
      const newAliment = new Aliment(alimentData);
      await newAliment.save();
    }

    return new Response("Aliments added successfully.", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add aliments.", { status: 500 });
  }
};