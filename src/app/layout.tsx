import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@styles/index.scss'
import Provider from '@providers/Provider'
import Header from '@common/header/Header'
import Footer from '@common/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Inverse School',
   description: '',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${inter.className} bg-black text-white`}>
            <Provider>
               <div className="wrapper">
                  <Header />
                  {children}
                  <Footer />
               </div>
            </Provider>
         </body>
      </html>
   )
}
