import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  async function handleSubmit(formData: FormData) {
    "use server"

    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")

    // Here you would typically use a service to send an email
    // For demonstration, we'll just log the data
    console.log(`
      New contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}

      This information should be sent to contact@futuredgesolutions.in
    `)

    // In a real application, you'd send an email here
    // For example, using a service like SendGrid or AWS SES
    // sendEmail({
    //   to: 'contact@futuredgesolutions.in',
    //   subject: 'New Contact Form Submission',
    //   body: `Name: ${name}
    // Email: ${email}
    // Phone: ${phone}
    // Message: ${message}`
    // })
  }

  return (
    <div className="max-w-2xl mx-auto bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form action={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input type="text" id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input type="email" id="email" name="email" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input type="tel" id="phone" name="phone" className="mt-1" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea id="message" name="message" rows={4} required className="mt-1" />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  )
}

