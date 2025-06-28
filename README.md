# ESU Contact Us - Next.js Application

This is a [Next.js](https://nextjs.org) contact form application for ESU Metro Campus, built with TypeScript, Tailwind CSS, and React Hook Form.


## 🚀 Live Demo

**🌐 Deployment URL:** [https://esu-contact-us.vercel.app/](https://esu-contact-us.vercel.app/)

## Features

- Responsive contact form with validation
- Email functionality using Nodemailer
- File upload support for documents
- Modern UI with Tailwind CSS
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd esu-contact-us
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:

```env
# Email Configuration
MAIL_USER=your-gmail@gmail.com
MAIL_PASS=your-app-password
MAIL_TO=recipient@example.com
```

**Note:** For Gmail, you'll need to:

- Enable 2-factor authentication
- Generate an App Password (not your regular password)
- Use the App Password as `MAIL_PASS`

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable    | Description                      | Required |
| ----------- | -------------------------------- | -------- |
| `MAIL_USER` | Gmail address for sending emails | Yes      |
| `MAIL_PASS` | Gmail App Password               | Yes      |
| `MAIL_TO`   | Recipient email address          | Yes      |

## Project Structure

```
src/
├── app/
│   ├── api/contact/
│   │   └── route.ts          # API endpoint for form submission
│   ├── contact-us/
│   │   └── page.tsx          # Contact us page
│   └── layout.tsx
├── components/
│   ├── header.tsx            # Header component
│   ├── formContactUs.tsx     # Main contact form
│   └── certificateComplaints.tsx # Contact info component
```

## Form Fields

The contact form includes:

- First Name & Last Name
- Nationality (dropdown)
- Contact Number
- Email (with validation)
- NIC/Passport selection with conditional input
- Branch selection
- Programme selection
- Message
- Document upload

## API Endpoint

**POST** `/api/contact`

Accepts FormData with form fields and file attachments. Sends email using Nodemailer with Gmail SMTP.

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling and validation
- **Nodemailer** - Email functionality

## Troubleshooting

### Common Issues

1. **"Export useForm doesn't exist"**

   - Make sure `react-hook-form` is installed: `npm install react-hook-form`
   - Ensure the component has `"use client"` directive

2. **Email not sending**

   - Verify Gmail App Password is correct
   - Check that 2FA is enabled on your Gmail account
   - Ensure environment variables are properly set

3. **Build errors**
   - Run `npm run build` to check for TypeScript errors
   - Verify all imports are correct


