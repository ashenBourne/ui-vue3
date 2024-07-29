/*
 * @Date: 2024-07-16 19:56:00
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-29 18:04:53
 * @FilePath: \UIPackage\ts\ui-vue3\src\components\button\Button.tsx
 */

import {  defineComponent, toRefs } from "vue"
import { buttonProps, ButtonProps } from "./types"
import { createNamespace } from "../utils/create"
import { preventDefault } from "../utils/dom"
const [name, bem] = createNamespace('button');


export default defineComponent({
  name,
  props: buttonProps,
  setup(props: ButtonProps, { emit,slots }) {
    const onClick = (event: MouseEvent) => {
      // if (props.loading) {
      //   preventDefault(event)
      // } else 
      console.log("获取",!props.disabled)
      if (!props.disabled) {
        console.log("汇之星吗？")
        // emit('click', event);
      }
    };
    return () => {
      const {
        tag,
        type,
        size,
        block,
        round,
        plain,
        square,
        loading,
        disabled,
        hairline,
      } = props;
      const defaultSlot = slots.default ? slots.default() : "按钮"
      const classes = [
        bem([
          type,
          size,
          {
            plain,
            block,
            round,
            square,
            loading,
            disabled,
            hairline,
          },
        ])
      ];
      return (
        <tag 
          class={classes}
          disabled={disabled}
          onClick={onClick}
          >
          {defaultSlot}
        </tag>
      )
    }
  }
})

