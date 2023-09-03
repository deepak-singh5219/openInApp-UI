// endpoint api/data
import { NextRequest, NextResponse } from "next/server"

const data = [
    { "year": 2010, "new_recruits": 120, "resignations": 30 },
    { "year": 2011, "new_recruits": 140, "resignations": 25 },
    { "year": 2012, "new_recruits": 110, "resignations": 35 },
    { "year": 2013, "new_recruits": 160, "resignations": 40 }
];


export function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json(data);
}