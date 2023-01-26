<template>
    <main>
        <h1>Расширения файлов (File Extensions)</h1>
        <p>Несмотря на то, что Windows и macOS иногда их скрывают, большинство файлов имеют <a href="https://en.wikipedia.org/wiki/Filename_extension">расширения</a>, суффикс, начинающийся с точки (<code class="code">.</code>) в конце имени. Например, имена <a href="https://en.wikipedia.org/wiki/GIF">файлов для GIF</a> заканчиваются на <code class="code">.gif</code>, а имена <a href="https://en.wikipedia.org/wiki/JPEG">файлов для JPEG</a> заканчиваются на <code class="code">jpg</code> или <code class="code">jpeg</code>. Когда вы дважды щелкаете файл, чтобы открыть его, ваш компьютер использует расширение файла, чтобы определить, какую программу запускать.</p>
        <p>Веб-браузеры, напротив, полагаются на <a href="https://en.wikipedia.org/wiki/Media_type">типы мультимедиа</a>, ранее известные как типы MIME, чтобы определить, как отображать файлы, находящиеся в Интернете. Когда вы загружаете файл с веб-сервера, этот сервер отправляет <a href="https://en.wikipedia.org/wiki/List_of_HTTP_header_fields">HTTP-заголовок</a> вместе с самим файлом, указывающим тип носителя файла. Например, тип мультимедиа для GIF — <code class="code">image/gif</code>, а тип мультимедиа для JPEG — <code class="code">image/jpeg</code>. Чтобы определить тип мультимедиа для файла, веб-сервер обычно просматривает расширение файла, сопоставляя одно с другим.</p>
        <p>Общие типы см . на странице <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types</a>.</p>
        <p>В файле с именем <code class="code">extensions.py</code> реализуйте программу, которая запрашивает у пользователя имя файла, а затем выводит тип носителя этого файла, если имя файла заканчивается без учета регистра любым из этих суффиксов:</p>
        <ul>
            <li><code class="code">.gif</code></li>
            <li><code class="code">.jpg</code></li>
            <li><code class="code">.jpeg</code></li>
            <li><code class="code">.png</code></li>
            <li><code class="code">.pdf</code></li>
            <li><code class="code">.txt</code></li>
            <li><code class="code">.zip</code></li>
        </ul>
        <p>Если имя файла заканчивается каким-либо другим суффиксом или вообще не имеет суффикса, вместо этого выводится <code class="code">application/octet-stream</code>, что является обычным значением по умолчанию.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Не забывайте, что <code class="code">str</code> имеет несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">docs.python.org/3/library/stdtypes.html#string-methods</a></li>        
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-qUGyqlHIt0Za5lBMc0GB4CuLV" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/qUGyqlHIt0Za5lBMc0GB4CuLV/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-qUGyqlHIt0Za5lBMc0GB4CuLV" name="asciicast-iframe-qUGyqlHIt0Za5lBMc0GB4CuLV" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 491px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните комманду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir extensions</code></pre>
        <p>создаст папку <code class="code">extensions</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd extensions</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">extensions/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code extensions.py</code> </pre>
        <p>чтобы создать файл с именем , <code class="code"> extensions.py</code>в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью комманды <code class="code">python extensions.py</code>. Введите  <code class="code">happy.jpg</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code> image/jpeg </code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python extensions.py</code>. Введите  <code class="code">document.pdf</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>application/pdf </code></pre>
        </ul>
        <p>Обязательно протестируйте каждый из других форматов файлов, измените регистр ввода и «случайно» добавьте пробелы с обеих сторон ввода перед нажатием клавиши ввода. Ваша программа должна вести себя так, как ожидается, без учета регистра и пробелов.</p>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/extensions</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/extensions</code></pre>
    </main>
</template>