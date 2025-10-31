document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('mon-nom');
    if (!el) return;

    const fullText = el.dataset.text?.trim() || el.textContent.trim() || 'AWA DIALLO';
    const speed = parseInt(el.dataset.speed, 10) || 120; 
    const cursorChar = el.dataset.cursor || '|';
    const loop = el.dataset.loop === 'true';

    el.textContent = ''; 
    el.style.whiteSpace = 'pre'; 

    
    const cursor = document.createElement('span');
    cursor.textContent = cursorChar;
    cursor.style.display = 'inline-block';
    cursor.style.marginLeft = '4px';
    cursor.style.animation = 'blink 1s steps(1,start) infinite';
    
    if (!document.getElementById('typing-blink-style')) {
        const s = document.createElement('style');
        s.id = 'typing-blink-style';
        s.textContent = `
            @keyframes blink { 50% { opacity: 0; } }
        `;
        document.head.appendChild(s);
    }
    el.appendChild(cursor);

    let i = 0;
    function typeOnce() {
        if (i <= fullText.length - 1) {
            
            cursor.insertAdjacentText('beforebegin', fullText.charAt(i));
            i++;
            setTimeout(typeOnce, speed);
        } else {
            if (loop) {
                setTimeout(() => {
                    
                    el.textContent = '';
                    el.appendChild(cursor);
                    i = 0;
                    setTimeout(typeOnce, speed);
                }, 1000);
            } else {
                
                cursor.style.animation = 'none';
                cursor.style.opacity = '0';
            }
        }
    }

    
    setTimeout(typeOnce, 200);
});


