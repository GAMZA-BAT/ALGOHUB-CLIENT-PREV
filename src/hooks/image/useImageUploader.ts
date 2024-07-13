import { useState, useCallback  } from 'react';

const useImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState<Blob | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const blob = new Blob([file], { type: file.type });
            setSelectedImage(blob);

            const url = URL.createObjectURL(blob);
            setImageUrl(url);
        }
    }, []);

    return { selectedImage, imageUrl, handleImageUpload };
};

export default useImageUploader;