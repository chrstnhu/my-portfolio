// Starts a sequential fade-in animation for a list of elements
function startSequentialFadeIn(elements, options = {}) {
  const {
    initialDelay = 150,
    betweenDelay = 300,
    fromClass = 'opacity-0 translate-y-4',
    toClass = 'opacity-100 translate-y-0',
    duration = 800
  } = options;

  // Ensure all elements have the correct transition classes
  elements.forEach(element => {
    if (!element.classList.contains('transition-all')) {
      element.classList.add('transition-all', `duration-${duration}`);
    }
  });

  // Remove initial state classes and add final state classes
  setTimeout(() => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        const fromClasses = fromClass.split(' ');
        const toClasses = toClass.split(' ');
        
        element.classList.remove(...fromClasses);
        element.classList.add(...toClasses);
      }, index * betweenDelay);
    });
  }, initialDelay);
}

// Prepares elements by adding initial state classes for animation
function prepareElementsForAnimation(elements, options = {}) {
  const {
    fromClass = 'opacity-0 translate-y-4',
    duration = 800
  } = options;

  const fromClasses = fromClass.split(' ');
  
  // Add initial state and transition classes
  elements.forEach(element => {
    element.classList.add('transform', 'transition-all', `duration-${duration}`, ...fromClasses);
  });
}

// Resets elements to their initial animation state
function resetElementsAnimation(elements, options = {}) {
  const {
    fromClass = 'opacity-0 translate-y-4',
    toClass = 'opacity-100 translate-y-0'
  } = options;

  const fromClasses = fromClass.split(' ');
  const toClasses = toClass.split(' ');
  
  // Remove final state classes and add initial state classes
  elements.forEach(element => {
    element.classList.remove(...toClasses);
    element.classList.add(...fromClasses);
  });
}

// General function to handle complete page animation cycle
function initPageAnimation(elements, options = {}) {
  const {
    resetDelay = 50,
    animationOptions = {}
  } = options;

  if (elements && elements.length > 0) {
    setTimeout(() => {
      resetElementsAnimation(elements, animationOptions);
      startSequentialFadeIn(elements, animationOptions);
    }, resetDelay);
  }
}