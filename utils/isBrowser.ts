// determines if current rendering environment is a browser (for SSR)
const isBrowser = () => typeof window !== 'undefined';

export default isBrowser;
