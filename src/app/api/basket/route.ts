import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../util/database";

export async function GET(request: any, response: any): Promise<NextResponse> {
    try {
        const db = (await connectDB).db("basket");
        const results = await db.collection("info").find().toArray();
        return NextResponse.json(results, { status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
