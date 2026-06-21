import './globals.css'

export const metadata = {
  title: 'Varunraje | Full-Stack Developer & MERN Expert',
  description: 'Creative and detail-oriented Full-Stack Developer specializing in the MERN Stack, Next.js, React Native, and modern interactive web design.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-gray-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  )
}

