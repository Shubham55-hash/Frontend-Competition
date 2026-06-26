import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // Mock processing contact form
    console.log('Contact form submission:', body)

    return NextResponse.json({ success: true, message: 'Contact form received' })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 })
  }
}
