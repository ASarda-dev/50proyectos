const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const autor = document.getElementById('author')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    // '<img src= "/img/yo.jpg" alt="" />'
    title.innerHTML = 'Este soy yo'
    excerpt.innerHTML =
    'Entra para explorar mas sobre mis proyectos'


    profile_img.innerHTML =
    // '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    '<img src= "/img/yo.jpg" alt="" />'
  name.innerHTML = 'Albert Sarda'
  date.innerHTML = 'Jul 24, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}