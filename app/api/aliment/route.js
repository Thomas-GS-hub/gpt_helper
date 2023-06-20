import Aliment from "@models/aliment";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const aliments = await Aliment.find({}).populate('creator')

        return new Response(JSON.stringify(aliments), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all aliments", { status: 500 })
    }
}