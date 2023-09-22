import connect from '@/app/dbconfig/connect';
import { NextResponse } from 'next/server';
import User from '@/model/usermodel';
connect();
export async function POST(req) {
    try {
        const body = await req.json();
        const user = await User.create(body);
        return NextResponse.json( {
            message:"user addes sucessfully"
        });
    } catch (error) {
        return NextResponse.json( {
            message:"Data not loaded! "
        });
    }
}
export async function GET(req) {
    try {
        //  body = await req.json();
        const user = await User.find();
        return NextResponse.json( {
            user
        });
    } catch (error) {
        return NextResponse.json( {
            message:"Data not loaded! "
        });
    }
}
