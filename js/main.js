const form = document.forms[0];
const smiles = document.getElementsByName('mark');
const voices = document.querySelectorAll(".count");
const answer = document.querySelector('.answer');

function checkRadio(event) {
    const smile = event.target;

    for (let i = 0; i < smiles.length; i++) {
        if (smiles[i] == event.target) {
            let mark = smile.parentNode.nextElementSibling;
            let count = Number(mark.textContent);
            counting(++count, mark);
        }
        if(!smiles[i].checked) {
            smiles[i].parentNode.classList.add('deactivated');
        }
    }
}

const counting = (counter, counter_element) => {
    counter_element.textContent = counter;
    answer.style.visibility = "visible";

}

form.addEventListener('change', checkRadio, {
    once: true
});