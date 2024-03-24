<template>
    <header class="header">
        <div class="logo">Купи поддон</div>
        <nav class="navigation">
            <ul>
                <RouterLink to="/">Купить</RouterLink>
                <RouterLink to="/about">О нас</RouterLink>
            </ul>
        </nav>
    </header>
</template>
<script setup lang="ts">

</script>
<style scoped>
.header {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: #fff;
    margin-bottom: 1.5rem;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.navigation ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navigation a {
  color: #fff;
  text-decoration: none;
}

.navigation a:hover {
  text-decoration: underline;
}
</style>