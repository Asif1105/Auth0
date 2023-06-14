export interface ActionDetailsType {
  type: string;
  payload: unknown;
};
  
export interface ActionType {
  action: ActionDetailsType;
};
