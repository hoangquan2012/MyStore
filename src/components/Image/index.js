import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback();
    };

    return <img src={_fallback || src} alt={alt} {...props} ref={ref} onError={handleError} />;
});

export default Image;
