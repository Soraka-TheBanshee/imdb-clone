import Header from '@/components/Header/Header'
import './globals.css'
import Providers from './Providers'

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

        <Providers >
          <Header />

          {/* Navbar */}

          {/* Search */}

          <main>{children}</main>
        </Providers>
        
      </body>
    </html>
  )
}
