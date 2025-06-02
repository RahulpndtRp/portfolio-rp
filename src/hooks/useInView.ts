
// src/hooks/useInView.ts
import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useInView(
    ref: RefObject<Element>,
    options: UseInViewOptions = {}
): boolean {
    const [isInView, setIsInView] = useState(false);
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.unobserve(element);
    }, [ref, threshold, rootMargin, triggerOnce]);

    return isInView;
}