'use server'

import { redirect } from 'next/navigation'
import { subscribeToHashnodeNewsletter, subscribeToLocalNewsletter } from '@/lib/newsletter'

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
    throw new Error('Email is required')
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format')
  }

  try {
    // Try Hashnode newsletter first
    const hashnodeResult = await subscribeToHashnodeNewsletter(email)
    
    if (hashnodeResult.success) {
      // Redirect to thank you page with success status
      redirect('/thank-you?source=hashnode')
    } else {
      // Fallback to local newsletter handling
      const localResult = await subscribeToLocalNewsletter(email)
      
      if (localResult.success) {
        redirect('/thank-you?source=local')
      } else {
        throw new Error('Failed to subscribe to newsletter')
      }
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    // Try fallback option
    try {
      const localResult = await subscribeToLocalNewsletter(email)
      if (localResult.success) {
        redirect('/thank-you?source=fallback')
      }
    } catch (fallbackError) {
      console.error('Fallback newsletter subscription error:', fallbackError)
    }
    
    // If everything fails, still redirect to thank you page
    // to avoid showing error to user (better UX)
    redirect('/thank-you?source=error')
  }
}