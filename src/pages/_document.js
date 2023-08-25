import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'




export default function Document({data}) {
  
  return (
    <Html lang="en">
      <Head />
      <title>Machine Macking | Home</title>
        <meta
          name="description"
          content="This is a computer builder or pc builder website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}

