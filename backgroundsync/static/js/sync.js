import {logController} from './log.js';

/**
 * @typedef {{
 *   id: number,
 * }}
 */
let SyncParams;

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
   * @returns {!SyncParams}
   * @private
   */
  getSyncOptions_() {
    return {
      id: this.id_++,
    };
  }

  /**
   * Generate pretty printed HTML of the Sync Params.
   * @param {!SyncParams} syncParams 
   * @returns {string}
   * @private
   */
  prettyPrintedSyncId_(syncParams) {
    let rid = '<br><pre>';
    for (const prop in syncParams) {
      rid += `     -<strong>${prop}</strong>: ${syncParams[prop]}\n`;
    }
    return rid + '</pre>';
  }

  async createSync() {
    const syncId = this.getSyncOptions_();
    logController.addUpdate(`Registering: <code>${this.prettyPrintedSyncId_(syncId)}</code>`);
    try {
      await this.syncManager_.register(JSON.stringify(syncId));
    } catch (e) {
      logController.addUpdate(`Failed to register: <label>${syncId.id}</label>`);
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
