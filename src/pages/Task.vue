<template>
    <div class="container">
        <h1>Task # {{ $route.params.id }}</h1>
        <h2>Title: {{ $store.state.tasks[$route.params.id - 1].title }}</h2>
        <h3>Short description: {{ $store.state.tasks[$route.params.id - 1].body }}</h3>
        <p>Full description: {{ $store.state.tasks[$route.params.id - 1].description }}</p>
        <CustomButton @click="$router.push('/tasks')">To all tasks</CustomButton>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>