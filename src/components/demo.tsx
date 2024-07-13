/*
 * @Date: 2024-07-10 23:36:18
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-13 17:44:12
 * @FilePath: \Vue3UI\src\components\demo.tsx
 */
import {  defineComponent, toRefs } from "vue"
import { buttonProps, ButtonProps } from "./button-type"
// import { getComponentCls } from "@vue3-ui/utils"

export default defineComponent({
  name: "UButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { disabled } = toRefs(props)
    return () => {
      // const { tag } = props
      const defaultSlot = slots.default ? slots.default() : "按钮"
      return (
        <tag disabled={disabled.value}>
          {defaultSlot}
        </tag>
      )
    }
  }
})

