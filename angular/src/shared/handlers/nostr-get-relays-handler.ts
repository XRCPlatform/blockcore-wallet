import { BackgroundManager } from '../background-manager';
import { ActionPrepareResult, ActionResponse, Permission } from '../interfaces';
import { ActionHandler, ActionState } from './action-handler';

export class NostrGetRelaysHandler implements ActionHandler {
  action = ['nostr.getrelays'];

  constructor(private backgroundManager: BackgroundManager) {}

  async prepare(state: ActionState): Promise<ActionPrepareResult> {
    return {
      content: {
        'wss://nostr-pub.wellorder.net': { read: true, write: true },
        'wss://nostr-verified.wellorder.net': { read: false, write: true },
        'wss://nostr.bitcoiner.social': { read: true, write: true },
        'wss://nostr.drss.io': { read: true, write: true },
        'wss://relay.damus.io': { read: true, write: true },
        'wss://relay.nostr.info': { read: true, write: true },
        'wss://relay.minds.com/nostr/v1/ws': { read: false, write: true },
        'wss://relay.nostr.ch': { read: true, write: true },
      },
      consent: false,
    };
  }

  async execute(state: ActionState, permission: Permission): Promise<ActionResponse> {
    return { response: state.content };
  }
}
