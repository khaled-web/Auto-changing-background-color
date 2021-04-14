const colors = ['yellow', 'green', 'blue', '#f15025', 'rgba(125,125,125,0.5)'];

const btn = document.getElementById('btn');

/* add EventListener */
btn.addEventListener('click', () => {
 let random = Math.floor(Math.random() * colors.length);
 const body = document.body;
 body.style.background = colors[random];
 console.log(random);
});