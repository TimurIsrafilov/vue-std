<template>
    <div class="popup" v-if="show" @click.stop="closePopup">
        <div @click.stop class="popup_content">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CustomPopup',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closePopup() {
            this.$emit('update:show', false)
        },
    }
}
</script>

<style scoped>
.popup {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.popup_content {
    border: 2px solid blue;
    border-radius: 8px;
    margin: auto;
    background: rgba(200, 150, 100, 1);
    min-width: 100px;
    min-height: 100px;
}
</style>