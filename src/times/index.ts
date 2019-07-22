import {
  Config,
} from "../core/index";
import { UpdatedProtocol, UPDATED_PROTOCOL } from "../core/protocols/UPDATED_PROTOCOL";
import { AppendedProtocol, APPENDED_PROTOCOL } from "../core/protocols/APPENDED_PROTOCOL";

export type timesConfg = {
}

export const timesKey = 'times'

export type timesWrapAction = {
  [timesKey]: number
}

export function times(_: Config<timesConfg, timesWrapAction>):
  UpdatedProtocol<timesWrapAction>
  &
  AppendedProtocol<timesWrapAction> {
  return {
    [UPDATED_PROTOCOL]: (_, cachedAction) => {
      return {
        [timesKey]: cachedAction.times + 1
      }
    },
    [APPENDED_PROTOCOL]: (_) => ({
      [timesKey]: 0
    })
  }
}