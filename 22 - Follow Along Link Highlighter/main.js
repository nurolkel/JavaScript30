const allAncors = document.querySelectorAll('a')
const highlight = document.createElement('span');

highlight.classList.add('highlight')

document.body.append(highlight);

function highLightLink() {
    const coords = this.getBoundingClientRect();

    const coordStyle = {
        width: coords.width,
        height: coords.height,
        left: coords.left + window.scrollX,
        top: coords.top + window.scrollY
    }

    highlight.style.width = `${coordStyle.width}px`;
    highlight.style.height = `${coordStyle.height}px`;
    highlight.style.transform = `translate(${coordStyle.left}px, ${coordStyle.top}px)`
}

allAncors.forEach(anchor => anchor.addEventListener('mouseenter', highLightLink))