import React from 'react';

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const currentRef = domRef.current;

        // Create an IntersectionObserver with a rootMargin of "-20px"
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => setVisible(entry.isIntersecting));
            },
            {
                rootMargin: '20px', // Trigger when the element is within 20px of the viewport
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;

