import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json()

    // Here you would typically use a service to send an email
    // For demonstration, we'll just log the data
    console.log(`
      New Get Started submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}

      This information should be sent to contact@futuredgesolutions.in
    `)

    // In a real application, you'd send an email here
    // For example, using a service like SendGrid or AWS SES
    // await sendEmail({
    //   to: 'contact@futuredgesolutions.in',
    //   subject: 'New Get Started Submission',
    //   body: `Name: ${name}
    // Email: ${email}
    // Phone: ${phone}`
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing Get Started submission:", error)
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 })
  }
}

