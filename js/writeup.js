// Copy button for code blocks
document.querySelectorAll('pre').forEach((codeBlock) => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.type = 'button';
    button.innerText = 'Copy';

    codeBlock.appendChild(button);

    button.addEventListener('click', () => {
        const code = codeBlock.querySelector('code').innerText;

        navigator.clipboard.writeText(code).then(() => {
            button.innerText = 'Copied!';
            button.classList.add('copied');

            setTimeout(() => {
                button.innerText = 'Copy';
                button.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});

// Cat spawner
function spawnCat() {
    const script = document.createElement('script');
    script.src = 'js/oneko.js';
    document.body.appendChild(script);
}
