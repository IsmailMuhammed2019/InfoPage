# ICBM Landing Page

A modern, responsive landing page for the Intelligent Capacity Building Model (ICBM) program at Digital Bridge Institute (DBI), built with Next.js, shadcn/ui, and Tailwind CSS.

## Features

- 🌍 Modern, professional design with shadcn/ui components
- 📱 Fully responsive layout with Tailwind CSS
- 🎨 Beautiful gradients and animations
- ⚡ Fast loading with Next.js optimization
- 🔍 SEO-friendly structure
- 📋 Complete program information
- 🎯 Clear call-to-action buttons
- 🎨 Customizable design system

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel ready

## Program Information

The ICBM is a globally recognized, job-ready training program designed to make you future-ready for the digital economy. Training programs include:

- Business Process Outsourcing (BPO)
- Cybersecurity & SOC (Security Operations Center)
- Artificial Intelligence (AI)
- Software Development & Digital Skills

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
InfoPage/
├── app/
│   ├── globals.css      # Global styles with Tailwind CSS
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main landing page
├── components/
│   └── ui/              # shadcn/ui components
│       ├── button.tsx   # Button component
│       └── card.tsx     # Card component
├── lib/
│   └── utils.ts         # Utility functions
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Customization

### Colors
The design uses a modern color palette with:
- Primary: Blue to purple gradients
- Secondary: Orange to red gradients
- Background: Light gray to blue gradients
- Text: Dark gray for readability

### Components
All components are built with shadcn/ui and can be easily customized by modifying the component files in `components/ui/`.

### Content
To update the content, edit the `app/page.tsx` file. All text content is easily accessible and can be modified without changing the styling.

### Styling
The styling uses Tailwind CSS utility classes and is organized in a clean, maintainable way. Custom styles can be added to `app/globals.css`.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for ICBM at DBI.

## Contact

For questions about the ICBM program, contact your nearest DBI campus:
- Abuja
- Lagos
- Enugu
- Kano
- Yola 