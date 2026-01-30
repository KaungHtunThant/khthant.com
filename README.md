# khthant.com

My personal CV project built with Nuxt JS 4 and Tailwind CSS, developed with AI collaboration.

## 🚀 Features

- **Modern Stack**: Built with Nuxt JS 4, Vue 3, and Tailwind CSS
- **One-Page Design**: All sections accessible from a single scrollable page
- **Smooth Navigation**: Click navbar links to smoothly scroll to sections
- **Responsive Contact Form**: Functional form that sends emails
- **Professional Sections**:
  - Hero section with portrait
  - About Me biography
  - Services showcase
  - Projects portfolio
  - Contact form
  - Footer with quick links

## Setup

Make sure to install dependencies:

```bash
# yarn (recommended)
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

## 📧 Email Configuration

The contact form currently logs submissions to the console. To enable actual email sending:

1. Install nodemailer: `yarn add nodemailer`
2. Configure SMTP credentials in environment variables
3. Uncomment the nodemailer code in `server/api/contact.post.ts`
4. Set up environment variables for email authentication

## 📁 Project Structure

```
├── app/
│   └── app.vue          # Main application component
├── server/
│   └── api/
│       └── contact.post.ts  # Contact form API endpoint
├── public/
│   └── portrait.svg     # Profile image
├── nuxt.config.ts       # Nuxt configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies
```

## 🎨 Customization

- Edit `app/app.vue` to modify content and sections
- Update `tailwind.config.js` for custom styling
- Replace `/public/portrait.svg` with your own portrait image
- Modify email recipient in `server/api/contact.post.ts`

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) and [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 📝 License

Personal project © 2026 Kaung Htun Thant

