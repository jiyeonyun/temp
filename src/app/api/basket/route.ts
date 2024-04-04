import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../util/database";

export async function GET(request: any, response: any): Promise<NextResponse> {
    try {
        const db = (await connectDB).db("basket");
        const results = await db.collection("info").findOne();
        return NextResponse.json({ results }, { status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
