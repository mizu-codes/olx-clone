const MAX_WIDTH = 1000;
const MAX_HEIGHT = 1000;
const MAX_SIZE = 900 * 1024; // 900 KB

export function convertImageToBase64(
  file: File
): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);

      let { width, height } = image;

      // Resize while keeping the original aspect ratio
      if (width > MAX_WIDTH || height > MAX_HEIGHT) {
        const widthRatio = MAX_WIDTH / width;
        const heightRatio = MAX_HEIGHT / height;
        const ratio = Math.min(widthRatio, heightRatio);

        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement("canvas");

      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");

      if (!context) {
        reject(new Error("Could not create canvas context"));
        return;
      }

      context.drawImage(image, 0, 0, width, height);

      let quality = 0.8;

      const createCompressedImage = () => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Failed to compress image"));
              return;
            }

            // If image is still too large, reduce quality
            if (blob.size > MAX_SIZE && quality > 0.3) {
              quality -= 0.1;
              createCompressedImage();
              return;
            }

            if (blob.size > MAX_SIZE) {
              reject(
                new Error(
                  "Image is still too large after compression."
                )
              );
              return;
            }

            const reader = new FileReader();

            reader.onload = () => {
              resolve(reader.result as string);
            };

            reader.onerror = () => {
              reject(
                new Error("Failed to convert compressed image")
              );
            };

            reader.readAsDataURL(blob);
          },
          "image/jpeg",
          quality
        );
      };

      createCompressedImage();
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Failed to load image"));
    };

    image.src = objectUrl;
  });
}