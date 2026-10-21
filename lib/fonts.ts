import localFont from 'next/font/local'

export const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Regular.woff',
      weight: '400'
    },
    {
      path: '../assets/fonts/Inter-Bold.woff',
      weight: '700'
    }
  ],
  variable: '--font-sans'
})
