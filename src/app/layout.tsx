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
    <html className='dark:bg-white' lang="en">
      <body className='dark:bg-white' >

        <Providers >
          <Header />

          {/* Navbar */}

          {/* Search */}

          <main className='px-4 max-w-6xl mx-auto' >{children}</main>
        </Providers>
        
      </body>
    </html>
  )
}
