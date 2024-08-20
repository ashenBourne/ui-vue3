/*
 * @Date: 2024-07-12 00:27:09
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-12 00:27:19
 * @FilePath: \Vue3UI\src\components\button\types.ts
 */
import { ExtractPropTypes, PropType } from "vue"
export type buttonType =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"

export type buttonSize = "small" | "default" | "large"

export const buttonProps = {
  type: {
    type: String as PropType<buttonType>,
    default: "default"
  },
  size: {
    type: String as PropType<buttonSize>,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: "button"
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

