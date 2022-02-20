// Write here all your code in TypeScript or JavaScript but still benefit from TypeScript's IntelliSense!

const app = {
  rootElement: document.querySelector<HTMLDivElement>('#app'),
  init: function () {
    const { hello, title } = app.getTitle()

    app.rootElement.prepend(title)
    console.log(hello)
  },
  getTitle: function () {
    const title: HTMLHeadingElement = document.createElement('h1')
    title.classList.add('project__title')
    title.textContent = 'Simple Frontend Project'

    const img: HTMLImageElement = document.createElement('img')

    img.classList.add('vite__logo')
    img.src = '../assets/vitejs.svg'

    img.setAttribute('alt', 'Vite JS logo')

    title.appendChild(img)

    const hello: string = 'Hello world!'

    return { title, hello }
  },
}

document.addEventListener('DOMContentLoaded', app.init)
