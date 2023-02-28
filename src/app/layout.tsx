import Header from '@/components/Header/Header'
import './globals.css'
// import "./output.css";

export const metadata = {
  title: 'an coll title',
  description: 'IMDb clobe!',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <Header />

        {/* Navbar */}

        {/* Search */}

        <main>{children}</main>
      </body>
    </html>
  )
}
