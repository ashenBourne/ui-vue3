/*
 * @Date: 2024-07-16 19:56:00
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-16 20:26:09
 * @FilePath: \ts\ui-vue3\src\components\button\Button.tsx
 */

import {  defineComponent, toRefs } from "vue"
import { buttonProps, ButtonProps } from "./types.ts"
// import { getComponentCls } from "@vue3-ui/utils"

export default defineComponent({
  name: "u-button",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { disabled } = toRefs(props)
    return () => {
      const { tag } = props
      const defaultSlot = slots.default ? slots.default() : "按钮"
      return (
        <tag disabled={disabled.value}>
          {defaultSlot}
        </tag>
      )
    }
  }
})

