const button = document.querySelector('.dice');
const adviceID = document.querySelector('.advice_ID');
const adviceContent = document.querySelector('.advice_content');
console.log(button);


async function handleClick() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const dados = await response.json();
  const slip = `"${dados.slip.advice}"`;
  const id = `Advice #${dados.slip.id}`;
  adviceContent.style.opacity = 0; 
  setTimeout(() => {
    adviceContent.textContent = slip;
    adviceID.textContent = id;
    adviceContent.style.opacity = 1; 
  }, 300);  
}


button.addEventListener('click', handleClick);