export function fadeInOnScroll(node: HTMLElement, options?: { threshold?: number; delay?: number }) {
  const threshold = options?.threshold ?? 0.1;
  const delay = options?.delay ?? 0;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            node.style.opacity = '1';
            node.style.transform = 'translateY(0)';
          }, delay);
        }
      });
    },
    { threshold }
  );

  node.style.opacity = '0';
  node.style.transform = 'translateY(20px)';
  node.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export function slideInOnScroll(node: HTMLElement, options?: { threshold?: number; direction?: 'left' | 'right' }) {
  const threshold = options?.threshold ?? 0.1;
  const direction = options?.direction ?? 'left';
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateX(0)';
        }
      });
    },
    { threshold }
  );

  const translateValue = direction === 'left' ? '-40px' : '40px';
  node.style.opacity = '0';
  node.style.transform = `translateX(${translateValue})`;
  node.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export function scaleInOnScroll(node: HTMLElement, options?: { threshold?: number }) {
  const threshold = options?.threshold ?? 0.2;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'scale(1)';
        }
      });
    },
    { threshold }
  );

  node.style.opacity = '0';
  node.style.transform = 'scale(0.95)';
  node.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
