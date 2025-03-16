// Utility Functions

// Truncates a given text if it exceeds the specified maxLength and appends "..."
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  }
  
  
  // Capitalizes the first letter of a given string.
  export function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  
  // Filters an array of strings based on a query (case insensitive).
  export function filterItems(items: string[], query: string): string[] {
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }
  
  
  // Calculates the sum of two numbers.
  export function sum(a: number, b: number): number {
    return a + b;
  }
  