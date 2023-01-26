<template>
    <main>
        <h1>Набор проблем 1</h1>
        <h2>Что нужно делать</h2>
        <ol>
            <li>Войдите в <a href="https://code.cs50.io/"> code.cs50.io</a>, облачную версию Visual Studio Code (VS Code), которая предоставляет собственное  кодовое пространство(Codespace) со всем что нужно для прохождения курса . Не нужно скачивать и устанавливать VS Code или Python на свой Mac или ПК!</li>
            <li>Выполните update50 в окне терминала вашего Codespace, чтобы убедиться, что ваше пространство кода обновлено, при появлении запроса нажмите <b>Rebuild now</b>.</li>
            <li>
                <span>Отправьте все проблемы приведенные ниже:</span>
                <ul>
                    <li><router-link to="/1/deep/">Deep Thought</router-link> </li>
                    <li><router-link to="/1/bank/">Home Federal Savings Bank</router-link> </li>
                    <li><router-link to="/1/extensions/">File Extensions</router-link> </li>
                    <li><router-link to="/1/interpreter/">Math Interpreter</router-link> </li>
                    <li><router-link to="/1/meal/">Meal Time</router-link> </li>
                </ul>
            </li>
        </ol>
    </main>
</template>
<style scoped>
main {
    height: 100vh;
}
</style>