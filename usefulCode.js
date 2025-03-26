function prevImg() {
    current = (current - 1 + imgs.length) % imgs.length
}
function nextImg() {
    current = (current + 1) % imgs.length
}