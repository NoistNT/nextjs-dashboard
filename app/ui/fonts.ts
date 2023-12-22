import { Inter, Lusitana, Open_Sans } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans'
})

export const lusitana = Lusitana({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lusitana',
  weight: '400'
})
