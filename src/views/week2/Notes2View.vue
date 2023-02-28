<template>
    <main>
        <h1>Лекция 2</h1>
        <ul>
            <a href="#loops"><li>Циклы</li></a>
            <a href="#while-loops"><li>Цикл while</li></a>
            <a href="#for-loops"><li>Цикл for</li></a>
            <a href="#improving-with-user-input"><li>Улучшение программы запросом данных от пользователя</li></a>
            <a href="#more-about-lists"><li>Больше о списках(list)</li></a>
            <a href="#length"><li>Длина</li></a>
            <a href="#dictionaries"><li>Словари(Dict)</li></a>
            <a href="#mario"><li>Марио</li></a>
            <a href="#summing-up"><li>Подводя итог</li></a>
        </ul>
        <h2 id="loops">Циклы</h2>
        <ul>
            <li>По сути, циклы — это способ повторять что-то снова и снова.</li>
            <li>Начните с ввода <code class="code">code cat.py</code> в окне терминала.</li>
            <li>В текстовом редакторе начните со следующего кода:</li>
            <pre class="highlight"><code>print("meow")
print("meow")
print("meow")</code></pre>
            <span>Запустив этот код и набрав <code class="code">python cat.py</code>, вы заметите, что программа мяукает три раза.</span>
            <li>Развиваясь как программист, вы захотите подумать, как можно улучшить области своего кода, где вы вводите одно и то же снова и снова. Представьте себе, что вам может захотеться «мяукать» 500 раз. Было бы логично, набирать одно и то же выражение print("meow")снова и снова?</li>
            <li>Циклы позволяют создавать блоки кода, которые выполняются снова и снова.</li>
        </ul>
        <h2 id="while-loops">Цикл while</h2>
        <ul>
            <li>Цикл while почти универсален для всех языков кодирования.</li>
            <li>Такой цикл будет повторять блок кода снова и снова.</li>
            <li>В окне текстового редактора отредактируйте код следующим образом:</li>
            <pre class="highlight"><code>i = 3
while i != 0:
    print("meow")</code></pre>
            <p>Обратите внимание, хотя этот код будет выполнять команду print("meow") несколько раз, он никогда не остановится! Он зациклиться навсегда. while цикл работает, многократно запрашивая, было ли выполнено условие цикла. В этом случае компилятор спрашивает « i не равно нулю?» Когда вы застреваете в цикле, который выполняется вечно, вы можете нажать control-c на клавиатуре, чтобы выйти из цикла.</p>
            <li>Чтобы исправить этот цикл, который длится вечно, мы можем отредактировать наш код следующим образом.</li>
<pre class="highlight"><code>i = 3
while i != 0:
  print("meow")
  i = i - 1</code></pre>
            <p>Обратите внимание, что теперь наш код выполняется правильно, уменьшая i на 1 каждую «итерацию» в цикле. Этот термин итерация имеет особое значение в программировании. Под итерацией мы подразумеваем один шаг в цикле. Первая итерация является «0-й» итерацией цикла. Вторая — это «1-я» итерация. В программировании мы считаем, начиная с 0, затем с 1, затем с 2.</p>
            <li>Мы можем улучшить наш код следующим образом:</li>
            <pre class="highlight"><code>  i = 1
  while i &lt; = 3:
      print("meow")
      i = i + 1</code></pre>
            <p>Обратите внимание, что когда мы кодируем, i = i + 1 мы присваиваем значение i справа налево. Выше мы начинаем i с единицы, как считает большинство людей (1, 2, 3). Если вы выполните приведенный выше код, вы увидите, как он мяукает три раза. В программировании рекомендуется начинать счет с нуля.</p>
            <li>Мы можем улучшить наш код, чтобы начать считать с нуля:</li>
            <pre class="highlight"><code>i = 0
while i &lt; 3:
    print("meow")
    i += 1</code></pre>
            <p>Обратите внимание, как изменение оператора на i  &lt; 3 позволяет нашему коду функционировать должным образом. Мы начинаем считать с 0, и цикл повторяется три раза, производя три мяу. Кроме того, обратите внимание, как i += 1 это то же самое, что сказать i = i + 1.</p>
            <li>Наш код на данный момент проиллюстрирован следующим образом:</li>
            <img src="../../assets/week2/note2_1.png" alt="">
            <p>Обратите внимание, как наш цикл считает i до 3 не включая саму тройку.</p>
        </ul>
        <h2 id="for-loops">Цикл for</h2>
        <ul>
            <li>Цикл <code class="code">for</code> — это еще один тип цикла.</li>
            <li>Чтобы лучше понять цикл <code class="code">for</code>, лучше всего начать с обсуждения нового типа переменных, который в Python называется списком(<code class="code">list</code>). Как и в других сферах нашей жизни, у нас может быть список покупок, список дел и т. д.</li>
            <li>Цикл <code class="code">for</code> перебирает список(<code class="code">list</code>) элементов. Например, в окне текстового редактора измените код <code class="code">cat.py</code> следующим образом:</li>
            <pre class="highlight"><code>for i in [0, 1, 2]:
    print("meow")</code></pre>
            <p>Обратите внимание, насколько чистый этот код по сравнению с вашим предыдущим кодом с циклом <code class="code">while</code>. В этом коде <code class="code">i</code> начинается с <code class="">0</code>, мяукает, <code class="code">i</code> присваивается <code class="code">1</code>, мяукает и, наконец, <code class="code">i</code> присваивается <code class="code">2</code>, мяукает, а затем завершается.</p>
            <li>Хотя этот код выполняет то, что мы хотим, есть некоторые возможности улучшения нашего кода для крайних случаев. На первый взгляд наш код выглядит великолепно. Однако что, если вы хотите повторить до миллиона? Лучше всего создать код, который может работать с такими крайними случаями. Соответственно, мы можем улучшить наш код следующим образом:</li>
            <pre class="highlight"><code>for i in range(3):
    print("meow")</code></pre>
            <p>Обратите внимание, как автоматически <code class="code">range(3)</code> возвращает три значения <code class="code">(0, 1, и 2)</code>. Этот код выполнится и произведет ожидаемый эффект, мяукнув три раза.</p>
            <li>Наш код можно улучшить. Обратите внимание, что мы никогда не используем <code class="code">i</code> явно в нашем коде. То есть, хотя Python нужен <code class="code">i</code>, как место для хранения номера итерации цикла, мы никогда не используем его для каких-либо других целей. В Python, если переменная не имеет никакого другого значения в нашем коде, мы можем просто представить эту переменную как одиночное подчеркивание <code class="code">_</code>. Таким образом, вы можете изменить свой код следующим образом:</li>
            <pre class="highlight"><code>for _ in range(3):
    print("meow")</code></pre>
            <p>Обратите внимание, что изменение <code class="code">i</code> на <code class="code">_</code> не влияет на работу нашей программы.</p>
            <li>Наш код можно улучшить. Чтобы изучить возможности Python, рассмотрите следующий код:</li>
            <pre class="highlight"><code>print("meow" * 3)</code></pre>
            <p>Обратите внимание, как он мяукает три раза, но программа выдаст <code class="code">meowmeowmeow</code>. Подумайте: как бы вы могли сделать разрыв строки в конце каждого мяу?</p>
            <li>Действительно, вы можете отредактировать свой код следующим образом:</li>
            <pre class="highlight"><code>print("meow\n" * 3, end="")</code></pre>
            <p>Обратите внимание, как этот код производит три мяуканья, каждое на отдельной строке. Добавляя <code class="code">end=""</code> и <code class="code">\n</code> мы указываем компилятору добавлять разрыв строки в конце каждого мяу.</p>
        </ul>
        <h2 id="improving-with-user-input">Улучшение программы запросом данных от пользователя</h2>
        <ul>
            <li>Возможно, мы хотим получить информацию от нашего пользователя. Мы можем использовать циклы как способ проверки ввода пользователя.</li>
            <li>Распространенной парадигмой в Python является использование <code class="code">while</code> цикла для проверки ввода пользователя.</li>
            <li>Например, давайте попробуем запросить у пользователя число больше или равное 0:</li>
            <pre class="highlight"><code>while True:
    n = int(input("What's n? "))
    if n &lt; 0:
        continue
    else:
        break</code></pre>
            <li>Обратите внимание, что мы ввели два новых ключевых слова в Python <code class="code">continue</code> и <code class="code">break</code>. <code class="cpde">continue</code> явно указывает Python перейти к следующей итерации цикла. <code class="code">break</code>, с другой стороны, говорит Python «вырваться» из цикла раньше, чем он завершит все свои итерации. В этом случае мы перейдем к следующей(<code class="code">continue</code>) итерации цикла, когда n меньше 0, — в конечном итоге повторно задав пользователю вопрос «What's is n?». Если, тем не менее, n больше или равно 0, мы выходим( <code class="code">break</code>) из цикла и разрешаем выполнение остальной части нашей программы.</li>
            <li>Получается, что  <code class="code">continue</code> ключевое слово в данном случае лишнее. Мы можем улучшить наш код следующим образом:</li>
            <pre class="highlight"><code>while True:
    n = int(input("What's n? "))
    if n > 0:
        break

for _ in range(n):
    print("meow")</code></pre>
            <p>Обратите внимание, что этот цикл <code class="code">while</code> будет выполняться бесконечно, пока <code class="code">n</code> больше, чем <code class="code">0</code>. Когда <code class="code">n</code> больше <code class="code">0</code>, цикл прерывается.</p>
            <li>Используя наши предыдущие знания, мы можем использовать функции для дальнейшего улучшения нашего кода:</li>
            <pre class="highlight"><code>def main():
    number = get_number()
    meow(number)

def get_number():
    while True:
        n = int(input("What's n? "))
        if n > 0:
            break
    return n

def meow(n):
    for _ in range(n):
        print("meow")</code></pre>
            <p>Обратите внимание, что мы не только изменили ваш код для работы с несколькими функциями, но также использовали оператор <code class="code">return</code>, чтобы вернуть значение <code class="code">n</code> в основную функцию.</p>
        </ul>
        <h2 id="more-about-lists">Больше о списках(list)</h2>
        <ul>
            <li>Рассмотрим мир Хогвартса из знаменитой вселенной Гарри Поттера.</li>
            <li>В терминале введите <code class="code">code hogwarts.py</code>.</li>
            <li>В текстовом редакторе введите следующий код:</li>
            <pre class="highlight"><code>students = ["Hermoine", "Harry", "Ron"]

print(students[0])
print(students[1])
print(students[2])</code></pre>
            <p>Обратите внимание, что у нас есть <code class="code">list</code> учеников с именами, как указано выше. Затем мы печатаем ученицу, которая находится на 0-м месте, «Гермиона». Остальные ученики печатаются также.</p>
            <li>Как мы показали ранее, мы можем использовать цикл для перебора списка. Вы можете улучшить свой код следующим образом:</li>
            <pre class="highlight"><code>students = ["Hermoine", "Harry", "Ron"]

for student in students:
    print(student)</code></pre>
            <p>Обратите внимание, что для каждого <code class="code">student</code> в списке <code class="code">students</code> будет напечатан студент, как и предполагалось. Вы можете задаться вопросом, почему мы не использовали <code class="code">_</code>, как обсуждалось ранее. Мы решили не делать этого, потому что <code class="code">student</code> явно используется в нашем коде.</p>
            <li>Вы можете узнать больше в документации по Python о <a href="https://docs.python.org/3/tutorial/datastructures.html#more-on-lists">списках</a>.</li>
        </ul>
        <h2 id="length">Длина</h2>
        <ul>
            <li>Мы можем использовать <code class="code">len</code> как способ проверки длины списка(<code class="code">list</code>) c названием <code class="code">students</code>.</li>
            <li>Представьте, что вы хотите напечатать не только имя студента, но и его позицию в списке. Для этого вы можете отредактировать свой код следующим образом:</li>
            <pre class="highlight"><code>students = ["Hermoine", "Harry", "Ron"]

for i in range(len(students)):
    print(i + 1, students[i])</code></pre>
            <p>Обратите внимание, что результатом выполнение этого кода,является не только получение позиции каждого учащегося с помощью i + 1, но и вывод имени каждого учащегося. <code class="code">len</code> позволяют вам динамически видеть, насколько длинный список студентов, независимо от того, насколько он растет.</p>
            <li>Вы можете узнать больше в документации по Python о <a href="https://docs.python.org/3/tutorial/datastructures.html#more-on-lists">len</a></li>
        </ul>
        <h2 id="dictionaries">Словари(Dict)</h2>
        <ul>
            <li>dict или словари — это структура данных, позволяющая связывать ключи со значениями.</li>
            <li>Если <code class="code">list</code> - это множество значений, то <code class="code">dict</code> связывает ключ со значением.</li>
            <li>Рассматривая факультеты Хогвартса, мы могли бы распределить конкретных студентов по конкретным факультетам.</li>
            <img src="https://cs50.harvard.edu/python/2022/notes/2/cs50pWeek2Slide17.png">
            <li>Для этого мы могли бы использовать <code class="code">list</code>:</li>
            <pre class="highlight"><code>students = ["Hermoine", "Harry", "Ron", "Draco"]
houses = ["Gryffindor", "Gryffindor", "Griffindor", "Slytherin"]</code></pre>
            <p>Обратите внимание, что мы можем пообещать, что всегда будем поддерживать порядок в этих списках. Человек на первой позиции <code class="code">students</code> связан с домом на первой позиции в списке <code class="code">houses</code> и так далее. Однако это может стать довольно громоздким по мере роста наших списков!</p>
            <li>Мы можем улучшить наш код, используя <code class="code">dict</code> следующим образом:</li>
            <pre class="highlight"><code>students = {
    "Hermoine": "Gryffindor",
    "Harry": "Gryffindor",
    "Ron": "Gryffindor",
    "Draco": "Slytherin",
}
print(students["Hermoine"])
print(students["Harry"])
print(students["Ron"])
print(students["Draco"])</code></pre>
            <p>Обратите внимание, как мы используем <code class="code">{}</code> фигурные скобки для создания словаря. Там, где list использует числа для перебора списка, dict позволяет нам использовать слова.</p>
            <li>Запустите свой код и убедитесь, что ваш вывод выглядит следующим образом:</li>
            <pre class="highlight"><code>$ python hogwarts.py
Gryffindor
Gryffindor
Gryffindor
Slytherin</code></pre>
            <li>Мы можем улучшить наш код следующим образом:</li>
            <pre class="highlight"><code>students = {
    "Hermoine": "Gryffindor",
    "Harry": "Gryffindor",
    "Ron": "Gryffindor",
    "Draco": "Slytherin",
}
for student in students:
    print(student)</code></pre>
            <p>Обратите внимание, что при выполнении этого кода цикл <code class="code">for</code> будет перебирать только ключи, в результате чего появится список имен учеников. Как мы можем распечатать и значения, и ключи?</p>
            <li>Измените код следующим образом:</li>
            <pre class="highlight"><code>students = {
    "Hermoine": "Gryffindor",
    "Harry": "Gryffindor",
    "Ron": "Gryffindor",
    "Draco": "Slytherin",
}
for student in students:
    print(student, students[student])</code></pre>
            <p>Обратите внимание, как <code class="code">students[student]</code> будет идти к ключу(ученикам) и находить значения(их дома). Выполните свой код, и вы заметите, что вывод немного запутан.</p>
            <li>Мы можем очистить функцию печати, улучшив наш код следующим образом:</li>
            <pre class="highlight"><code>students = {
    "Hermoine": "Gryffindor",
    "Harry": "Gryffindor",
    "Ron": "Gryffindor",
    "Draco": "Slytherin",
}
for student in students:
    print(student, students[student], sep=", ")</code></pre>
            <p>Обратите внимание, как это создает четкое разделение , между каждым напечатанным элементом.</p>
            <li>Если вы выполните <code class="code">python hogwarts.py</code>, вы должны увидеть следующее:</li>
            <pre class="highlight"><code>$ python hogwarts.py
Hermoine, Gryffindor
Harry, Gryffindor
Ron, Gryffindor
Draco, Slytherin</code></pre>
            <li>Что, если у нас будет больше информации о наших студентах? Как бы мы могли связать больше данных с каждым из студентов?</li>
            <img src="https://cs50.harvard.edu/python/2022/notes/2/cs50pWeek2Slide18.png" alt="">
            <li>Вы можете себе представить, что хотите иметь много данных, связанных с несколькими вещами с одним ключом. Улучшите свой код следующим образом:</li>
            <pre class="highlight"><code>students = [
    {"name": "Hermoine", "house": "Gryffindor", "patronus": "Otter"},
    {"name": "Harry", "house": "Gryffindor", "patronus": "Stag"},
    {"name": "Ron", "house": "Gryffindor", "patronus": "Jack Russell terrier"},
    {"name": "Draco", "house": "Slytherin", "patronus": None},
]</code></pre>
            <p> Обратите внимание, как этот код создает список словарей. В <code class="code">list</code> с названием students четыре <code class="code">dicts</code>: по одному на каждого ученика. Также обратите внимание, что Python имеет специальное None обозначение, в котором нет значения, связанного с ключом.</p>
            <li>Теперь у вас есть доступ к целому ряду интересных данных об этих студентах. Теперь измените код следующим образом:</li>
            <pre class="highlight"><code>students = [
    {"name": "Hermoine", "house": "Gryffindor", "patronus": "Otter"},
    {"name": "Harry", "house": "Gryffindor", "patronus": "Stag"},
    {"name": "Ron", "house": "Gryffindor", "patronus": "Jack Russell terrier"},
    {"name": "Draco", "house": "Slytherin", "patronus": None},
]

for student in students:
    print(student["name"], student["house"], student["patronus"], sep=", ")</code></pre>
            <p>Обратите внимание, как цикл <code class="code">for</code> будет перебирать каждый из dicts внутри list с названием students.</p>
            <li>Вы можете узнать больше в документации по Python о <a href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">словарях</a>.</li>
        </ul>
        <h2 id="mario">Марио</h2>
        <li>Помните, что в классической игре Марио герой прыгает по кирпичам. Давайте создадим текстовое представление этой игры.</li>
        <img src="https://cs50.harvard.edu/python/2022/notes/2/cs50pWeek2Slide21.png" alt="">
        <li>Начните программу следующим образом:</li>
            <pre class="highlight"><code>print("#")
print("#")
print("#")</code></pre>
            <p>Обратите внимание, как мы снова и снова копируем и вставляем один и тот же код.</p>
            <li>Рассмотрим, как мы могли бы улучшить код следующим образом:</li>
            <pre class="highlight"><code>for _ in range(3):
    print("#")</code></pre>
            <p>Обратите внимание, как это по выполняет то, что мы хотим.</p>
            <li>Подумайте: можем ли мы дальше абстрагироваться для решения более сложных задач с помощью этого кода? Измените код следующим образом:</li>
            <pre class="highlight"><code>def main():
    print_column(3)

def print_column(height):
    for _ in range(height):
        print("#")

main()</code></pre>
            <p>Обратите внимание, как наша колонка может расти настолько, насколько мы хотим, без какого-либо жесткого кодирования.</p>
            <li>Теперь давайте попробуем напечатать строку по горизонтали. Измените код следующим образом:</li>
            <pre class="highlight"><code>def main():
    print_row(4)

def print_row(width):
    print("?" * width)

main()</code></pre>
            <p>Обратите внимание, что теперь у нас есть код, который может создавать блоки слева направо.</p>
            <li>Изучая слайд ниже, обратите внимание, что у Марио есть как ряды, так и столбцы блоков.</li>
            <img src="https://cs50.harvard.edu/python/2022/notes/2/cs50pWeek2Slide24.png" alt="">
            <li>Подумайте, как мы могли бы реализовать и строки, и столбцы в нашем коде? Измените код следующим образом:</li>
            <pre class="highlight"><code>def main():
    print_square(3)

def print_square(size):
    # For each row in square
    for i in range(size):
        # For each brick in row
        for j in range(size):
            #  Print brick
            print("#", end="")
        # Print blank line
        print()

main()</code></pre>
            <p>Обратите внимание, что у нас есть внешний цикл, который обращается к каждой строке в квадрате. Затем у нас есть внутренний цикл, который печатает кирпич в каждой строке. Наконец, у нас есть оператор <code class="code">print</code>, который печатает пустую строку.</p>
            <li>Мы можем еще больше абстрагироваться от нашего кода:</li>
            <pre class="highlight"><code>def main():
    print_square(3)

def print_square(size):
    for i in range(size):
        print_row(size)

def print_row(width):
    print("#" * width)

main()</code></pre>
        <h2 id="summing-up">Подводя итог</h2>
        <p>Теперь у вас есть возможность в Python использовать условные операторы, чтобы задавать вопросы, и ваша программа выполняет соответствующие действия. В этой лекции мы обсудили…</p>
        <ul>
            <li>Loops</li>
            <li><code class="code">while</code></li>
            <li><code class="code">for</code></li>
            <li><code class="code">len</code></li>
            <li><code class="code">list</code></li>
            <li><code class="code">dict</code></li>
        </ul>
    </main>
</template>