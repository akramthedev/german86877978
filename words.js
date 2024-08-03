// script.js
const words = [
    { word: 'Auto', gender: 'das', meaning: 'car' },
    { word: 'Haus', gender: 'das', meaning: 'house' },
    { word: 'Wort', gender: 'das', meaning: 'word' },
    { word: 'Datum', gender: 'das', meaning: 'date' },
    { word: 'Kissen', gender: 'das', meaning: 'pillow' },
    { word: 'Ticket', gender: 'das', meaning: 'ticket' },
    { word: 'Geld', gender: 'das', meaning: 'money' },
    { word: 'Papier', gender: 'das', meaning: 'paper' },
    { word: 'Wasser', gender: 'das', meaning: 'water' },
    { word: 'Bier', gender: 'das', meaning: 'beer' },
    { word: 'Sofa', gender: 'das', meaning: 'sofa' },
    { word: 'Zimmer', gender: 'das', meaning: 'room' },
    { word: 'Fleisch', gender: 'das', meaning: 'meat' },
    { word: 'Obst', gender: 'das', meaning: 'fruit' },
    { word: 'Brot', gender: 'das', meaning: 'bread' },
    { word: 'Handy', gender: 'das', meaning: 'mobile phone' },
    { word: 'Fenster', gender: 'das', meaning: 'window' },
    { word: 'Essen', gender: 'das', meaning: 'food' },
    { word: 'Gemüse', gender: 'das', meaning: 'vegetable' },
    { word: 'Wochenende', gender: 'das', meaning: 'weekend' },
    { word: 'Dorf', gender: 'das', meaning: 'village' },
    { word: 'Mädchen', gender: 'das', meaning: 'girl' },
    { word: 'Kompliment', gender: 'das', meaning: 'compliment' },
    { word: 'Stück', gender: 'das', meaning: 'piece' },
    { word: 'Spielzeug', gender: 'das', meaning: 'toy' },
    { word: 'Kleid', gender: 'das', meaning: 'dress' },
    { word: 'Büro', gender: 'das', meaning: 'office' },
    { word: 'Gehalt', gender: 'das', meaning: 'salary' },
    { word: 'Produkt', gender: 'das', meaning: 'product' },
    { word: 'Netzwerk', gender: 'das', meaning: 'network' },
    { word: 'Konto', gender: 'das', meaning: 'account' },
    { word: 'Beispiel', gender: 'das', meaning: 'example' },
    { word: 'Leben', gender: 'das', meaning: 'life' },
    { word: 'Problem', gender: 'das', meaning: 'problem' },
    { word: 'Buch', gender: 'das', meaning: 'book' },
    { word: 'Bett', gender: 'das', meaning: 'bed' },
    { word: 'Telefon', gender: 'das', meaning: 'telephone' },
    { word: 'Jahr', gender: 'das', meaning: 'year' },
    { word: 'Bild', gender: 'das', meaning: 'picture' },
    { word: 'Lied', gender: 'das', meaning: 'song' },
    { word: 'Angebot', gender: 'das', meaning: 'offer' },
    { word: 'Glas', gender: 'das', meaning: 'glass' },
    { word: 'Tier', gender: 'das', meaning: 'animal' },
    { word: 'Risiko', gender: 'das', meaning: 'risk' },
    { word: 'Thema', gender: 'das', meaning: 'topic' },
    { word: 'Gespräch', gender: 'das', meaning: 'conversation' },
    { word: 'Meeting', gender: 'das', meaning: 'meeting' },
    { word: 'Fahrrad', gender: 'das', meaning: 'bicycle' },
    { word: 'Design', gender: 'das', meaning: 'design' },
    { word: 'System', gender: 'das', meaning: 'system' },
    { word: 'Modell', gender: 'das', meaning: 'model' },
    { word: 'Dokument', gender: 'das', meaning: 'document' },
    { word: 'Programm', gender: 'das', meaning: 'program' },
    { word: 'Konzept', gender: 'das', meaning: 'concept' },
    { word: 'Wetter', gender: 'das', meaning: 'weather' },
    { word: 'Zentrum', gender: 'das', meaning: 'center' },
    { word: 'Management', gender: 'das', meaning: 'management' },
    { word: 'Verfahren', gender: 'das', meaning: 'procedure' },
    { word: 'Hausaufgaben', gender: 'das', meaning: 'homework' },
    { word: 'Stadium', gender: 'das', meaning: 'stadium' },
    { word: 'Niveau', gender: 'das', meaning: 'level' },
    { word: 'Kino', gender: 'das', meaning: 'cinema' },
    { word: 'Hotel', gender: 'das', meaning: 'hotel' },
    { word: 'Museum', gender: 'das', meaning: 'museum' },
    { word: 'Restaurant', gender: 'das', meaning: 'restaurant' },
    { word: 'Skifahren', gender: 'das', meaning: 'skiing' },
    { word: 'Zitat', gender: 'das', meaning: 'quote' },
    { word: 'Gesellschaftsspiel', gender: 'das', meaning: 'board game' },
    { word: 'Mahl', gender: 'das', meaning: 'meal' },
    { word: 'Fitnessstudio', gender: 'das', meaning: 'gym' },
    { word: 'Krafttraining', gender: 'das', meaning: 'strength training' },
    { word: 'Training', gender: 'das', meaning: 'training' },
    { word: 'Fahrradfahren', gender: 'das', meaning: 'cycling' },
    { word: 'Weihnachten', gender: 'das', meaning: 'Christmas' },
    { word: 'Geschenk', gender: 'das', meaning: 'gift' },
    { word: 'Schulsystem', gender: 'das', meaning: 'school system' },
    { word: 'Lieblingsfach', gender: 'das', meaning: 'favorite subject' },
    { word: 'Abitur', gender: 'das', meaning: 'high school diploma' },
    { word: 'Lebensmittel', gender: 'das', meaning: 'food' },
    { word: 'Toilettenpapier', gender: 'das', meaning: 'toilet paper' },
    { word: 'Vitamin', gender: 'das', meaning: 'vitamin' },
    { word: 'Medikament', gender: 'das', meaning: 'medication' },
    { word: 'Sonderangebot', gender: 'das', meaning: 'special offer' },
    { word: 'Ende', gender: 'das', meaning: 'end' },
    { word: 'Stadtzentrum', gender: 'das', meaning: 'city center' },
    { word: 'Satz', gender: 'der', meaning: 'sentence' },
    { word: 'Tisch', gender: 'der', meaning: 'table' },
    { word: 'Frieden', gender: 'der', meaning: 'peace' },
    { word: 'Vertrag', gender: 'der', meaning: 'contract' },
    { word: 'Salat', gender: 'der', meaning: 'salad' },
    { word: 'Schuh', gender: 'der', meaning: 'shoe' },
    { word: 'Name', gender: 'der', meaning: 'name' },
    { word: 'Koffer', gender: 'der', meaning: 'suitcase' },
    { word: 'Flug', gender: 'der', meaning: 'flight' },
    { word: 'Körper', gender: 'der', meaning: 'body' },
    { word: 'Kopf', gender: 'der', meaning: 'head' },
    { word: 'Mensch', gender: 'der', meaning: 'person' },
    { word: 'Schlüssel', gender: 'der', meaning: 'key' },
    { word: 'Zug', gender: 'der', meaning: 'train' },
    { word: 'Beruf', gender: 'der', meaning: 'profession' },
    { word: 'Woche', gender: 'der', meaning: 'week' },
    { word: 'Wochentag', gender: 'der', meaning: 'weekday' },
    { word: 'Freitag', gender: 'der', meaning: 'Friday' },
    { word: 'Freizeit', gender: 'der', meaning: 'leisure time' },
    { word: 'Dienstag', gender: 'der', meaning: 'Tuesday' },
    { word: 'Garten', gender: 'der', meaning: 'garden' },
    { word: 'Computer', gender: 'der', meaning: 'computer' },
    { word: 'Sommer', gender: 'der', meaning: 'summer' },
    { word: 'Winter', gender: 'der', meaning: 'winter' },
    { word: 'Herbst', gender: 'der', meaning: 'autumn' },
    { word: 'Frühling', gender: 'der', meaning: 'spring' },
    { word: 'Arzt', gender: 'der', meaning: 'doctor' },
    { word: 'Lehrer', gender: 'der', meaning: 'teacher' },
    { word: 'Künstler', gender: 'der', meaning: 'artist' },
    { word: 'Fahrer', gender: 'der', meaning: 'driver' },
    { word: 'Student', gender: 'der', meaning: 'student' },
    { word: 'Chef', gender: 'der', meaning: 'boss' },
    { word: 'Kollege', gender: 'der', meaning: 'colleague' },
    { word: 'Chefkoch', gender: 'der', meaning: 'head chef' },
    { word: 'Lektor', gender: 'der', meaning: 'editor' },
    { word: 'Tag', gender: 'der', meaning: 'day' },
    { word: 'Moment', gender: 'der', meaning: 'moment' },
    { word: 'Gegner', gender: 'der', meaning: 'opponent' },
    { word: 'Händler', gender: 'der', meaning: 'merchant' },
    { word: 'Wirt', gender: 'der', meaning: 'host' },
    { word: 'Kunde', gender: 'der', meaning: 'customer' },
    { word: 'Mitglied', gender: 'der', meaning: 'member' },
    { word: 'Mitspieler', gender: 'der', meaning: 'teammate' },
    { word: 'Kommissar', gender: 'der', meaning: 'commissioner' },
    { word: 'Teilnehmer', gender: 'der', meaning: 'participant' },
    { word: 'Bruder', gender: 'der', meaning: 'brother' },
    { word: 'Onkel', gender: 'der', meaning: 'uncle' },
    { word: 'Vater', gender: 'der', meaning: 'father' },
    { word: 'Sohn', gender: 'der', meaning: 'son' },
    { word: 'Ehemann', gender: 'der', meaning: 'husband' },
    { word: 'Frau', gender: 'die', meaning: 'woman' },
    { word: 'Tasse', gender: 'die', meaning: 'cup' },
    { word: 'Blume', gender: 'die', meaning: 'flower' },
    { word: 'Stadt', gender: 'die', meaning: 'city' },
    { word: 'Mütze', gender: 'die', meaning: 'hat' },
    { word: 'Tasche', gender: 'die', meaning: 'bag' },
    { word: 'Mutter', gender: 'die', meaning: 'mother' },
    { word: 'Schülerin', gender: 'die', meaning: 'female student' },
    { word: 'Küche', gender: 'die', meaning: 'kitchen' },
    { word: 'Lampe', gender: 'die', meaning: 'lamp' },
    { word: 'Gabel', gender: 'die', meaning: 'fork' },
    { word: 'Buchung', gender: 'die', meaning: 'booking' },
    { word: 'Möglichkeit', gender: 'die', meaning: 'possibility' },
    { word: 'Geburtstag', gender: 'die', meaning: 'birthday' },
    { word: 'Karte', gender: 'die', meaning: 'card' },
    { word: 'Freundin', gender: 'die', meaning: 'girlfriend' },
    { word: 'Lehrerin', gender: 'die', meaning: 'female teacher' },
    { word: 'Fahrkarte', gender: 'die', meaning: 'ticket' },
    { word: 'Brücke', gender: 'die', meaning: 'bridge' },
    { word: 'Hose', gender: 'die', meaning: 'pants' },
    { word: 'Stimmung', gender: 'die', meaning: 'mood' },
    { word: 'Anzeige', gender: 'die', meaning: 'advertisement' },
    { word: 'Sekunde', gender: 'die', meaning: 'second' },
    { word: 'Zukunft', gender: 'die', meaning: 'future' },
    { word: 'Veränderung', gender: 'die', meaning: 'change' },
    { word: 'Ärztin', gender: 'die', meaning: 'female doctor' },
    { word: 'Bäckerin', gender: 'die', meaning: 'female baker' },
    { word: 'Wirtin', gender: 'die', meaning: 'female host' },
    { word: 'Sängerin', gender: 'die', meaning: 'singer' },
    { word: 'Tänzerin', gender: 'die', meaning: 'dancer' },
    { word: 'Strecke', gender: 'die', meaning: 'route' },
    { word: 'Studie', gender: 'die', meaning: 'study' },
    { word: 'Klasse', gender: 'die', meaning: 'class' },
    { word: 'Gesellschaft', gender: 'die', meaning: 'society' },
    { word: 'Strasse', gender: 'die', meaning: 'street' },
    { word: 'Nacht', gender: 'die', meaning: 'night' },
    { word: 'Erfahrung', gender: 'die', meaning: 'experience' },
    { word: 'Hochzeit', gender: 'die', meaning: 'wedding' },
    { word: 'Arbeit', gender: 'die', meaning: 'work' },
    { word: 'Ehe', gender: 'die', meaning: 'marriage' },
    { word: 'Familie', gender: 'die', meaning: 'family' },
    { word: 'Lebensweise', gender: 'die', meaning: 'lifestyle' },
    { word: 'Kultur', gender: 'die', meaning: 'culture' },
    { word: 'Zahl', gender: 'die', meaning: 'number' },
    { word: 'Welt', gender: 'die', meaning: 'world' },
    { word: 'Zeitschrift', gender: 'die', meaning: 'magazine' },
    { word: 'Saison', gender: 'die', meaning: 'season' },
    { word: 'Medizin', gender: 'die', meaning: 'medicine' },
    { word: 'Gesundheit', gender: 'die', meaning: 'health' },
    { word: 'Universität', gender: 'die', meaning: 'university' },
    { word: 'Arbeitnehmerin', gender: 'die', meaning: 'female employee' },
    { word: 'Abteilung', gender: 'die', meaning: 'department' },
    { word: 'Führungskraft', gender: 'die', meaning: 'executive' },
    { word: 'Frage', gender: 'die', meaning: 'question' },
    { word: 'Antwort', gender: 'die', meaning: 'answer' },
    { word: 'Pause', gender: 'die', meaning: 'break' },
    { word: 'Bauernhof', gender: 'die', meaning: 'farm' },
];
let shuffledWords = [];
let currentWordIndex = 0;

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the game
function startGame() {
    shuffledWords = [...words];
    shuffleArray(shuffledWords);
    currentWordIndex = 0;
    document.getElementById('next-button').disabled = true;
    document.getElementById('feedback').innerText = '';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';
    showWord();
}

// Show the current word
function showWord() {
    if (currentWordIndex < shuffledWords.length) {
        document.getElementById('word-display').innerText = shuffledWords[currentWordIndex].word;
        document.getElementById('uosrwfod').innerText = `(${shuffledWords[currentWordIndex].meaning})`;
        document.getElementById('feedback').style.display = 'none'; // Hide feedback
        document.getElementById('next-button').style.display = 'none'; // Hide Next button until user makes a choice
    } else {
        document.getElementById('uosrwfod').innerText = shuffledWords[currentWordIndex].meaning;
        document.getElementById('word-display').innerText = 'Congratulations! You have finished all words.';
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('restart-button').style.display = 'inline-block';
    }
}

// Check the selected gender
function checkGender(selectedGender) {
    const correctGender = shuffledWords[currentWordIndex].gender;
    if (selectedGender === correctGender) {
        document.getElementById('feedback').innerText = 'Correct!';
    } else {
        document.getElementById('feedback').innerText = `Wrong  :  ${correctGender}`;
    }
    document.getElementById('feedback').style.display = 'block'; 
    document.getElementById('next-button').disabled = false;
    document.getElementById('next-button').style.display = 'inline-block';
}

// Move to the next word
function nextWord() {
    currentWordIndex++;
    showWord();
}

// Restart the game
function restartGame() {
    startGame();
}

// Initialize the game
document.getElementById('restart-button').style.display = 'none';
startGame();
