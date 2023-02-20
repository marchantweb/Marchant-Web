export const useMetadata = async () => {
    const metadata = useState('metadata', () => null);
    if (!metadata.value) {
        metadata.value = await $fetch('https://api.marchantweb.com/metadata');
    }
    return metadata;
}
