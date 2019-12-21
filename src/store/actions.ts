export enum ActionType {
  UPDATE_COLOR = "UPDATE_COLOR",
  UPDATE_BACKGROUND = "UPDATE_BACKGROUND"
}

export interface IAction {
  type: ActionType;
  payload?: any;
}
