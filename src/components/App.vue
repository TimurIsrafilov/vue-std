<template>
    <div class="app">
        <router-view></router-view>
    </div>
    <CustomPopup v-model:show="$store.state.popupAdd">
        <PostForm />
    </CustomPopup>
    <CustomPopup v-model:show="$store.state.popupEdit">
        <PostFormEdit />
    </CustomPopup>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostFormEdit from '@/components/PostFormEdit.vue';

export default {
    components: {
        PostForm, PostFormEdit
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
}
</style>
