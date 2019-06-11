import {
    STORAGE_ENGINE,
    StorageEngine,
} from '@ngxs/storage-plugin';
import * as localStorage from 'nativescript-localstorage';

class CustomStorageEngine implements StorageEngine {
    get length(): number {
        return localStorage.length;
    }

    clear(): void {
        localStorage.clear();
    }

    getItem(key: string): any {
        return localStorage.getItem(key)
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    setItem(key: string, val: any): void {
        localStorage.setItem(key, val);
    }

}

export const AppStoreEngine = {
    provide: STORAGE_ENGINE,
    useClass: CustomStorageEngine,
};
