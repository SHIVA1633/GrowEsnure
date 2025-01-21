import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, profile, answers } = await req.json()

    // Here you would typically use a service like Nodemailer or SendGrid to send emails
    // For now, we'll just log the data
    console.log(`
      Risk Assessment Results:
      Email: ${email}
      Profile: ${profile}
      Answers: ${JSON.stringify(answers)}
    `)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send assessment results' }, { status: 500 })
  }
}

