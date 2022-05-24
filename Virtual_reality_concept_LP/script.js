let a = document.querySelectorAll('a');

function underLine() {

    for (let i = 0; i < a.length; i++) {
        a.classList.toggle('abc');
    }

}
a.onclick = underLine();