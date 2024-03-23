<template>
    <header class="header">
        <div class="logo">Купи поддон</div>
        <nav class="navigation">
            <ul>
                <li><a href="#home">Тык</a></li>
                <li><a href="#about">Тык</a></li>
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