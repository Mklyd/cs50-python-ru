<template>
    <main>
        <h1>Пищевая ценность(Nutrition Facts)</h1>
        <p>Управление по санитарному надзору за качеством пищевых продуктов и медикаментов США (FDA) предлагает <a href="https://www.fda.gov/food/food-labeling-nutrition/nutrition-information-raw-fruits-vegetables-and-fish"> загружаемые/распечатываемые плакаты</a>, которые «показывают информацию о пищевой ценности 20 наиболее часто потребляемых сырых фруктов… в Соединенных Штатах. Розничные магазины могут загружать плакаты, распечатывать, демонстрировать и/или распространять их среди потребителей в непосредственной близости от соответствующих продуктов питания в магазинах».</p>
        <p>В файле с именем <code class="code">nutrition.py</code> реализуйте программу, которая предлагает потребителям ввести фрукт (без учета регистра), а затем выводит количество калорий в одной порции этого фрукта в соответствии с <a href="https://cs50.harvard.edu/python/2022/psets/2/nutrition/Nutrition-Information-for-Raw-Fruits---small-PDF-Poster.pdf">плакатом FDA</a> для фруктов , который также <a href="https://www.fda.gov/food/food-labeling-nutrition/raw-fruits-poster-text-version-accessible-version">доступен в виде текста</a>. Помимо заглавных букв, предположим, что пользователи будут вводить фрукты точно так, как написано на плакате (например, strawberries, а не strawberry). Игнорируйте любые входные данные, которые не являются фруктами.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Вместо того, чтобы использовать условное выражение с 20 булевыми выражениями, по одному для каждого фрукта, лучше использовать , dict чтобы связать фрукт с его калориями!</li>
                <li>Если k это str и d это dict, вы можете проверить, является ли k ключом d с помощью кода, например:</li>
                <pre class="highlight"><code>if k in d:
    ...</code></pre>
                <li>Следите за тем, чтобы выводить калории фруктов, а не калории жира!</li>
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-l1yGc9HCul10e7VAp0nmLZNNY" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/l1yGc9HCul10e7VAp0nmLZNNY/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-l1yGc9HCul10e7VAp0nmLZNNY" name="asciicast-iframe-l1yGc9HCul10e7VAp0nmLZNNY" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 492px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir nutrition</code></pre>
        <p>создаст папку <code class="code">nutrition</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd nutrition</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">nutrition/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code nutrition.py</code> </pre>
        <p>чтобы создать файл с именем <code class="code"> nutrition.py</code>, в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python nutrition.py</code>. Введите  <code class="code">Apple</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code> Calories: 130 </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python nutrition.py</code>. Введите  <code class="code">Avocado</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code> Calories: 50</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python nutrition.py</code>. Введите  <code class="code">Sweet Cherries</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Calories: 100 </code></pre>
            <li>Запустите вашу программу с помощью python nutrition.py. Введите Tomato и нажмите Enter. Ваша программа не должна ничего выводить.</li>
        </ul>
        <p>Обязательно попробуйте другие фрукты и измените оболочку вашего ввода. Ваша программа должна вести себя так, как ожидалось, без учета регистра.</p>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/nutrition
</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/nutrition</code></pre>
    </main>
</template>