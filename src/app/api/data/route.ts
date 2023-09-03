// endpoint api/data
import { NextRequest, NextResponse } from "next/server"

const data = [
    { "year": 2010, "new_recruits": 120, "resignations": 30 },
    { "year": 2011, "new_recruits": 140, "resignations": 25 },
    { "year": 2012, "new_recruits": 110, "resignations": 35 },
    { "year": 2013, "new_recruits": 160, "resignations": 40 },
    { "year": 2014, "new_recruits": 180, "resignations": 38 },
    { "year": 2015, "new_recruits": 200, "resignations": 45 },
    { "year": 2016, "new_recruits": 220, "resignations": 50 },
    { "year": 2017, "new_recruits": 250, "resignations": 55 },
    { "year": 2018, "new_recruits": 280, "resignations": 60 },
    { "year": 2019, "new_recruits": 300, "resignations": 65 },
    { "year": 2020, "new_recruits": 320, "resignations": 70 },
    { "year": 2021, "new_recruits": 350, "resignations": 75 },
    { "year": 2022, "new_recruits": 380, "resignations": 80 }
];


export function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json(data);
}