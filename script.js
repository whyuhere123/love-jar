document.addEventListener('DOMContentLoaded', () => {
    const loveJar = document.getElementById('loveJar');
    const openNoteBtn = document.getElementById('openNoteBtn');
    const noteModal = document.getElementById('noteModal');
    const noteText = document.getElementById('noteText');
    const closeNoteBtn = document.getElementById('closeNoteBtn');

    const compliments = [
        "Твоя улыбка освещает мой день.",
        "Ты самая добрая и заботливая.",
        "Мне нравится твой смех.",
        "Ты невероятно умна.",
        "С тобой всегда весело и интересно.",
        "Твои глаза прекрасны.",
        "Я ценю твою поддержку.",
        "Ты делаешь этот мир лучше.",
        "Ты вдохновляешь меня.",
        "Спасибо, что ты есть.",
        "Твоя энергия заразительна.",
        "Я скучаю по тебе, когда мы не вместе.",
        "Каждое мгновение с тобой бесценно.",
        "Ты самая красивая.",
        "Я горжусь тобой.",
        "Ты удивительна во всем.",
        "Я люблю проводить время с тобой.",
        "Ты приносишь радость в мою жизнь.",
        "Твоя нежность согревает меня.",
        "Ты идеальна для меня."
    ];

    let lastComplimentIndex = -1;

    function getRandomCompliment() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * compliments.length);
        } while (randomIndex === lastComplimentIndex && compliments.length > 1);
        lastComplimentIndex = randomIndex;
        return compliments[randomIndex];
    }

    function showConfetti() {
        if (typeof confetti === 'function') {
             confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }

    function openModal() {
        loveJar.classList.add('shake');
        // Wait for shake animation
        setTimeout(() => {
            loveJar.classList.remove('shake');
            noteText.textContent = getRandomCompliment();
            noteModal.classList.add('active');
            showConfetti();
        }, 500);
    }

    function closeModal() {
        console.log("Closing modal...");
        noteModal.classList.remove('active');
    }

    openNoteBtn.addEventListener('click', openModal);
    
    // Make the jar clickable too
    loveJar.addEventListener('click', openModal);

    closeNoteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent bubbling just in case
        closeModal();
    });

    // Close modal if clicked outside content
    noteModal.addEventListener('click', (event) => {
        if (event.target === noteModal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && noteModal.classList.contains('active')) {
            closeModal();
        }
    });
});