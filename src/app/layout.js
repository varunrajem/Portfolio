import './globals.css'

export const metadata = {
  title: 'Portfoilo',
  description: 'Portfoilo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
