import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // Mock processing waitlist registration
    console.log('Waitlist registration:', body)

    return NextResponse.json({ success: true, message: 'Added to waitlist' })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 })
  }
}
