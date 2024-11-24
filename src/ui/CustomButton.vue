<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'CustomButton'
}
</script>

<style scoped>
.button {
    border-radius: 8px;
    cursor: pointer;
    padding: 4px;
}
</style>