'use client';

import { useState, useEffect } from 'react';

const FIRST_VISIT_KEY = 'harshith-first-visit';

export function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem(FIRST_VISIT_KEY);
    
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      // Mark as visited for this session
      sessionStorage.setItem(FIRST_VISIT_KEY, 'true');
    }
    
    setIsLoaded(true);
  }, []);

  return { isFirstVisit, isLoaded };
}
