// imageService.ts

import { encode } from 'base-64';

const getImageBase64 = async (imageUrl: string) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        return new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64data = (reader.result as string).split(',')[1];
                resolve(base64data);
            };

            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error('Error loading image:', error);
        throw error;
    }
};

export { getImageBase64 };
