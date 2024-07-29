<!--
 * @Date: 2024-07-16 21:12:41
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-29 18:17:18
 * @FilePath: \UIPackage\ts\ui-vue3\docs\demo\button.vue
-->
<template>
    <div>
        <Button class="btn" type="primary" @click="clickHandle"> Primary </Button>
    </div>
</template>

<script setup>
import Button from "@/components/button/index.ts"
function clickHandle(){
    console.log("执行点击事件")
}
</script>