import {logController} from './log.js';

/**
 * Registers the custom sync.
 */
class SyncHandler {
  /**
   * @param {!SyncManager} syncManager
   */
  constructor(syncManager) {
    /** @const @private {number} */
    this.id_ = 1;

    /** @const @private {!SyncManager} */
    this.syncManager_ = syncManager;
  }

  /**
   * @returns {string}
   * @private
   */
  getSyncOptions_() {
    return JSON.stringify({
      id: this.id_++,
    });
  }

  async createSync() {
    const syncId = this.getSyncOptions_();
    logController.addUpdate(`Registering: <pre>${syncId}</pre>`);
    try {
      await this.syncManager_.register(syncId);
    } catch (e) {
      logController.addUpdate(`Failed to register: <pre>${syncId}</pre>`);
    }
  }
}

/**
 * @param {!SyncManager} syncManager
 * @return {!SyncHandler}
 */
export function createHandler(syncManager) {
  return new SyncHandler(syncManager);
}
