/** @type {import('tailwindcss').Config} */
export default {
	//Что tailwind работал на каждой странице, нужно добавлять новую созданую страницу в массив
  content: ['./index.html','./about.html', './contact.html', './src/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}

