import Aliment from "@models/aliment";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, name, calories, protein, fat, carbs, price } = await request.json();

    try {
        await connectToDB();
        const newAliment = new Aliment({ creator: userId, name, calories, protein, fat, carbs, price });

        await newAliment.save();
        return new Response(JSON.stringify(newAliment), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new aliment", { status: 500 });
    }
}