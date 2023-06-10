export type StoreAction = {
  type: String;
  payload?: any;
};

export const RESTORE_STATE_ACTION = "RESTORE_STATE"

export function restoreState(): StoreAction {
  return { type: RESTORE_STATE_ACTION };
}

