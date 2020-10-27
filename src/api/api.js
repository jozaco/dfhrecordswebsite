import { db } from './config';

export default {
    artistes: 'artistes',

    documents(url) {
        return {
            getAll: () => db.collection(url).get(),
        }
    }
}