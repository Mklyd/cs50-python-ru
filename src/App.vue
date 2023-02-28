<template>
    <div  id="main" >
      <nav>
        <h1><router-link to="/">CS50 Введение в<br>программирование <br> на Python</router-link> </h1>
        <a href="https://cs50.harvard.edu/python/2022/">Ссылка на оригинальный курс</a> 
        <ol>
          <li><router-link to="/weeks/0">Функции, переменные</router-link></li>
          <li><router-link to="/weeks/1">Условные выражения</router-link></li>
          <li><router-link to="/weeks/2">Циклы</router-link> </li>
          <li><router-link to="/weeks/3">Исключения</router-link></li>
          <li><router-link to="/weeks/4">Библиотеки</router-link></li>
          <li><router-link to="">Модульное тестирование</router-link></li>
          <li><router-link to="">Файловый ввод/вывод</router-link></li>
          <li><router-link to="">Регулярные выражения</router-link></li>
          <li><router-link to="">ООП</router-link></li>
          <li><router-link to="">Et Cetera</router-link></li>
        </ol>
        <strong>Сообщества</strong>
        <ul class="fa-ul">
          <li><a href="https://www.clubhouse.com/club/cs50">Clubhouse</a></li>
          <li><a href="https://discord.gg/cs50">Discord</a> <span>Q&amp;A</span></li>
          <li><a href="https://cs50.edx.org/ed">Ed</a> <span>Q&amp;A</span></li>
          <li><a href="https://www.facebook.com/groups/cs50/">Facebook Group</a> <span>Q&amp;A</span></li>
          <li><a href="https://www.facebook.com/cs50/">Facebook Page</a></li>
          <li data-marker="*" class="small"><span class="fa-li"><i class="fas fa-square"></i></span><a href="https://github.com/cs50">GitHub</a></li>
          <li><a href="https://gitter.im/cs50/x">Gitter</a> <span>Q&amp;A</span></li>
          <li><a href="https://instagram.com/cs50">Instagram</a></li>
          <li><a href="https://www.linkedin.com/groups/7437240/">LinkedIn Группа</a></li>
          <li><a href="https://www.linkedin.com/school/CS50/">LinkedIn Страница</a></li>
          <li><a href="https://cs50.medium.com/">Medium</a></li>
          <li><a href="https://www.quora.com/topic/CS50">Quora</a></li>
          <li><a href="https://www.reddit.com/r/cs50/">Reddit</a> <span>Q&amp;A</span></li>
          <li><a href="https://cs50.edx.org/slack">Slack</a> <span>Q&amp;A</span></li>
          <li><a href="https://www.snapchat.com/add/cs50">Snapchat</a></li>
          <li><a href="https://soundcloud.com/cs50">SoundCloud</a></li>
          <li><a href="https://cs50.stackexchange.com/">Stack Exchange</a> <span >Q&amp;A</span></li>
          <li><a href="https://www.tiktok.com/@cs50">TikTok</a></li>
          <li><a href="https://twitter.com/cs50">Twitter</a></li>
          <li><a href="http://www.youtube.com/subscription_center?add_user=cs50tv">YouTube</a></li>
      </ul>
        <router-link to="/license">Лицензия</router-link>
      </nav>
      <div class="content">
      <router-view/>
    </div>
    </div>
</template>

<style>

#app {
  width: 100%;
  color: white;
  font-size: 16px;
  background: #212529;
  padding-bottom: 3rem;
}
#main {
  display: flex;
  align-items:flex-start;
  padding-top: 2rem;
  overflow: auto;
}
nav {
  height: 100vh;
  width: fit-content;
  margin-right: 3rem;
  margin-right: 2rem;
  background: black;
  position: fixed;
  top: 0;
  padding: 1rem;
  overflow: auto;
}

nav a {
  color: white;
  text-decoration: none;
}
#app a:hover {
  color: rgb(253, 86, 86);
}
.content a {
  color: rgb(253, 86, 86);;
 }
.content {
  margin-left: 29rem;
  color: #adb5bd;
  width: 60vw;
  height: 100vh;
}
.highlight {
  background: #0d1117;
  color: #c9d1d9;
  line-height: 250%;
  border: 1px solid #495057;
  padding-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
}
h2, h1 {
  padding: 1rem 0;
  border-bottom: 1px solid #e9ecef;

}
.code {
  border: 1px solid #495057;
  padding: 3px;
}
blockquote {
    border-left-color: rgba(173,181,189,0.75);
    border-left-style: solid;
    border-left-width: thick;
    color: rgba(173,181,189,0.75);
    padding-left: 1rem;
}
</style>
