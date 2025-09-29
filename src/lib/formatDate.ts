export function formatDate(dateString: string) {
  // Handle null, undefined, or empty strings
  if (!dateString || typeof dateString !== 'string') {
    return 'Date not available'
  }
  
  try {
    // Clean the input string
    const cleanedDateString = dateString.toString().trim()
    
    // First try to parse the date directly (handles ISO strings and most formats)
    let date = new Date(cleanedDateString)
    
    // If that fails and it looks like a simple date format (YYYY-MM-DD), append time
    if (isNaN(date.getTime())) {
      // Check if it's a simple date format like '2023-12-01'
      if (/^\d{4}-\d{2}-\d{2}$/.test(cleanedDateString)) {
        date = new Date(`${cleanedDateString}T00:00:00Z`)
      } else if (/^\d{4}-\d{2}-\d{2}T/.test(cleanedDateString)) {
        // Handle partial ISO strings
        date = new Date(cleanedDateString)
      }
    }
    
    // Final validation
    if (isNaN(date.getTime())) {
      console.warn('Unable to parse date string:', dateString)
      return 'Date unavailable'
    }
    
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    })
    
  } catch (error) {
    console.error('Error formatting date:', error, 'Date string:', dateString)
    return 'Date unavailable'
  }
}
