import { useEffect, useState } from "react";
import * as FileSystem from 'expo-file-system';
import { ApiConfig } from "../api/api-config";
import { getToken } from "../service/tokenService";

const IMAGES_PATH = 'api_images/'; // Pasta principal para imagens

export function useImage(image: string | null) {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(`${ApiConfig.baseURL}/pet/image/${image}`)

  useEffect(() => {
    const carregarImagem = async () => {
      if (!image) {
        setLoading(false);
        return;
      }

      const localUri = FileSystem.documentDirectory + IMAGES_PATH + image;
      const localDir = localUri.substring(0, localUri.lastIndexOf('/')); // Extrai o diretório base

      try {
        // Garante que o diretório base existe
        const dirInfo = await FileSystem.getInfoAsync(localDir);
        if (!dirInfo.exists) {
          await FileSystem.makeDirectoryAsync(localDir, { intermediates: true });
        }

        const token = await getToken();

        const downloadResumable = FileSystem.createDownloadResumable(
          `${ApiConfig.baseURL}/pet/image/${image}`,
          localUri,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await downloadResumable.downloadAsync();
        if (result?.uri) {
          setImageUri(result.uri);
        }
      } catch (error) {
        console.error('Erro ao baixar a imagem:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarImagem();
  }, [image]);

  return { imageUri, imageLoading: loading };
}
