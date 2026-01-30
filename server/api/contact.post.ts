export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  const { name, email, message } = body
  
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }
  
  const recipientEmail = 'kaunghtunthant@gmail.com'
  
  // For demonstration purposes, we'll log the email details
  // In production, you would configure nodemailer with actual SMTP credentials
  console.log('Email to be sent:')
  console.log(`To: ${recipientEmail}`)
  console.log(`From: ${name} <${email}>`)
  console.log(`Message: ${message}`)
  
  // Simulate email sending with a mock transporter
  // In a real application, you would configure nodemailer with actual SMTP credentials
  // Example:
  // import nodemailer from 'nodemailer'
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASSWORD
  //   }
  // })
  
  // const mailOptions = {
  //   from: `"${name}" <${email}>`,
  //   to: recipientEmail,
  //   subject: `Contact Form Submission from ${name}`,
  //   text: message,
  //   html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`
  // }
  
  // await transporter.sendMail(mailOptions)
  
  return {
    success: true,
    message: 'Email sent successfully (simulated)'
  }
})
