"use client"

import styled from 'styled-components'
import '@styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en">           
      <body>
        {children}
      </body>    
    </html>
  );
};


