import { getCollection } from './config';

const getArtistes = () => {
    return getCollection('artistes');
}

export {
    getArtistes,
}