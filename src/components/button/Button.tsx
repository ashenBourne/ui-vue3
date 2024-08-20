/*
 * @Date: 2024-07-16 19:56:00
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-01 21:22:18
 * @FilePath: \ts\ui-vue3\src\components\button\Button.tsx
 */

import {  defineComponent } from "vue"
import { buttonProps, ButtonProps } from "./types"
import { createNamespace } from "../utils/create"
const [name, bem] = createNamespace('button');

export default defineComponent({
  name,
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    return () => {
      const {
        tag,
        type,
        size,
        disabled,
      } = props;
      const defaultSlot = slots.default ? slots.default() : "按钮"
      const classes = [
        bem([
          type,
          size,
          {
            disabled,
          },
        ])
      ];
      return (
        <tag 
          class={classes}
          disabled={disabled}
          >
          {defaultSlot}
        </tag>
      )
    }
  }
})

