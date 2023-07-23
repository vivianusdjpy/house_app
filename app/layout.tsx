"use client"

import Header from '@src/components/NavBar/NavBar'
import '@styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'House App',
  description: 'Manage your property',
}

export default function RootLayout({ children,}: {
  children: React.ReactNode
}) {
  return (    
    <div>     
      <main>{children}</main>      
    </div>
  );
};
