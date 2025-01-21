import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.json()

    // Here you would typically:
    // 1. Validate the data
    // 2. Store it in a database
    // 3. Send confirmation emails
    
    // For now, we'll just log the data
    console.log('New Client Registration:', formData)

    // Send email notification
    const emailBody = `
      New Client Registration:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      PAN: ${formData.pan}
      DOB: ${formData.dob}
      Address: ${formData.address}
      Occupation: ${formData.occupation}
      Income Range: ${formData.income}
      Bank Details:
      - Bank Name: ${formData.bankName}
      - Account Number: ${formData.accountNumber}
      - IFSC: ${formData.ifsc}
    `

    console.log('Sending email to contact@futuredgesolutions.in:', emailBody)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process registration' }, { status: 500 })
  }
}

