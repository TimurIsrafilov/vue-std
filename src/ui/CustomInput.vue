<template>
    <input class="input" :value="modelValue" @input="changeInput" />
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        changeInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    border: 2px solid grey;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
}
</style>