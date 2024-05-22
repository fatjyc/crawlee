import { RequestQueueFileSystemEntry } from './fs';
import { RequestQueueMemoryEntry } from './memory';
import type { InternalRequest } from '../../resource-clients/request-queue';
import type { StorageImplementation } from '../common';

export function createRequestQueueStorageImplementation(
    options: CreateStorageImplementationOptions,
): StorageImplementation<InternalRequest> {
    if (options.persistStorage) {
        return new RequestQueueFileSystemEntry(options);
    }

    return new RequestQueueMemoryEntry();
}

export interface CreateStorageImplementationOptions {
    persistStorage: boolean;
    storeDirectory: string;
    requestId: string;
}
