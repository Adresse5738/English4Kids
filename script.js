// بيانات التطبيق
const lessons = [
    { letter: 'A', word: 'Apple', icon: '🍎' },
    { letter: 'B', word: 'Bear', icon: '🧸' },
    { letter: 'C', word: 'Car', icon: '🚗' },
    { letter: 'D', word: 'Duck', icon: '🦆' },
    { letter: 'E', word: 'Elephant', icon: '🐘' },
    { letter: 'F', word: 'Flower', icon: '🌸' }
];

const container = document.getElementById('cards-container');

// وظيفة لإنشاء البطاقات تلقائياً
function loadLessons() {
    lessons.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="emoji">${item.icon}</div>
            <span class="letter">${item.letter}</span>
            <span class="word">${item.word}</span>
        `;
        
        // عند الضغط على البطاقة
        card.onclick = () => {
            speak(`${item.letter}... ${item.word}`);
        };
        
        container.appendChild(card);
    });
}

// وظيفة النطق الصوتي
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.7; // سرعة هادئة للأطفال
    window.speechSynthesis.speak(speech);
}

// تشغيل الوظيفة عند فتح التطبيق
window.onload = loadLessons;
function showSection(name) {
    if(name === 'learn') {
        document.getElementById('cards-container').style.display = 'grid';
        alert("أنت الآن في قسم التعلم!");
    } else {
        document.getElementById('cards-container').style.display = 'none';
        alert("قسم الاختبار سيتم برمجته قريباً!");
    }
}
let stars = 0; // عداد النجوم يبدأ من صفر

// داخل وظيفة loadLessons وفي جزء onclick:
card.onclick = () => {
    speak(`${item.letter}... ${item.word}`);
    
    // زيادة النجوم
    stars++;
    document.getElementById('star-count').innerText = stars;
    
    // إضافة حركة بسيطة للبطاقة
    card.style.transform = "scale(1.1)";
    setTimeout(() => card.style.transform = "scale(1)", 200);
};
