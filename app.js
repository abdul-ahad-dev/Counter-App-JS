var count = document.getElementById('count')

function increase() {
    count.innerHTML++
}
function decrease() {
    if (count.innerHTML > 0) {
        count.innerHTML--
    }
}
function reset() {
    count.innerHTML=0
}