export const imageUrlToBlob = async (imageUrl: string) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return blob;
}