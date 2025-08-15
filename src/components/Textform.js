import React, { useState } from 'react';
import '../styles/Textform.css';

export default function Textform(props) {
  // ---------------- State ----------------
  const [text, setText] = useState('Enter Text Here');
  const [isRecording, setIsRecording] = useState(false);
  const [dustParticles, setDustParticles] = useState([]);
  const [fontSize, setFontSize] = useState(18);
  const [fontStyle, setFontStyle] = useState('Patrick Hand'); // Chalk font
  const [erasing, setErasing] = useState(false);

  // Local jokes array
  const jokes = [
    "Why did the computer show up at work late? It had a hard drive!",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "Why did the student eat his homework? Because the teacher said it was a piece of cake!",
    "Why did the text editor break up with the computer? Too many issues!"
  ];

  // Random joke state
  const [joke, setJoke] = useState(jokes[Math.floor(Math.random() * jokes.length)]);

  const handleNewJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  // ---------------- Predefined Templates ----------------
  const templates = [
    "Today's Lesson: React Components\n- Introduction\n- JSX\n- Props & State",
    "Class Notes:\n1. Homework Due Friday\n2. Quiz on Monday\n3. Project Submission",
    "Reminder:\n- Bring notebooks\n- Complete assignments\n- Review last lecture"
  ];

  // ---------------- Spell Check Dictionary ----------------
  const dictionary = ['react', 'components', 'introduction', 'props', 'state', 'homework', 'quiz', 'project', 'submission', 'reminder', 'notebooks', 'assignments', 'review', 'lecture', 'today', 'lesson', 'class', 'notes', 'bring', 'complete'];

  // ---------------- Speech Recognition (Mobile-Friendly) ----------------
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + ' ';
      }
      setText(prev => prev + transcript);
    };

    recognition.onerror = (event) => {
      props.showAlert("Speech Recognition Error: " + event.error, "danger");
    };

    recognition.onend = () => setIsRecording(false);
  }

  // ---------------- Event Handlers ----------------
  const handleOnChange = (e) => setText(e.target.value);

  const handleUpClick = () => { setText(text.toUpperCase()); props.showAlert("Converted to Uppercase", "success"); }
  const handleLowClick = () => { setText(text.toLowerCase()); props.showAlert("Converted to Lowercase", "success"); }
  const handleCapitalize = () => { setText(text.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')); props.showAlert("Capitalized Each Word", "success"); }
  const handleTrim = () => { setText(text.replace(/\s{2,}/g, ' ').trim()); props.showAlert("Trimmed Your Text", "success"); }
  const handleRemoveNumbers = () => { setText(text.replace(/[0-9]/g, '')); props.showAlert("Numbers Removed", "success"); }
  const handleReverse = () => { setText(text.split('').reverse().join('')); props.showAlert("Text Reversed", "success"); }

  const handleCopy = () => { navigator.clipboard.writeText(text); props.showAlert("Text Copied", "success"); }
  const handleCopySummary = () => {
    const summary = `Words: ${text.split(/\s+/).filter(e => e.length !== 0).length}\nCharacters: ${text.length}\nPreview: ${text}`;
    navigator.clipboard.writeText(summary);
    props.showAlert("Summary Copied", "success");
  }
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "myText.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Text Downloaded", "success");
  }

  const handleEmail = () => {
    const subject = encodeURIComponent("Sharing My Text");
    const body = encodeURIComponent(text);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  const handleReadAloud = () => {
    if (window.speechSynthesis) {
      const msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
    }
  }

  const handleVoiceRecord = () => {
    if (!recognition) { props.showAlert("Speech Recognition not supported", "warning"); return; }
    if (isRecording) { recognition.stop(); setIsRecording(false); props.showAlert("Stopped Recording", "success"); }
    else { recognition.start(); setIsRecording(true); props.showAlert("Recording Started", "success"); }
  }

  const handleClear = () => {
    // Generate dust particles
    const particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 10,
      size: Math.random() * 6 + 4,
      opacity: 1,
      dx: (Math.random() - 0.5) * 2,
      dy: -Math.random() * 5 - 2
    }));
    setDustParticles(particles);

    setErasing(true);
    setTimeout(() => {
      setText('');
      setErasing(false);
    }, 500);

    setTimeout(() => setDustParticles([]), 1000);
    props.showAlert("Text Cleared", "success");
  }

  // ---------------- Text Analysis ----------------
  const wordsArray = text.split(/\s+/).filter(e => e.length !== 0);
  const charTypes = {
    letters: (text.match(/[A-Za-z]/g) || []).length,
    numbers: (text.match(/[0-9]/g) || []).length,
    spaces: (text.match(/\s/g) || []).length,
    punctuation: (text.match(/[^\w\s]/g) || []).length
  }

  // Spell check
  const spellCheckText = text.split(/\s+/).map((word, index) => {
    const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    if (cleanWord && !dictionary.includes(cleanWord)) return <mark key={index} style={{ backgroundColor: '#ffb3b3' }}>{word} </mark>;
    return word + ' ';
  });

  // Keyword highlight
  const freqMap = {};
  wordsArray.forEach(w => { freqMap[w.toLowerCase()] = (freqMap[w.toLowerCase()] || 0) + 1; });
  const maxFreq = Math.max(...Object.values(freqMap), 0);
  const mostFrequentWords = Object.keys(freqMap).filter(w => freqMap[w] === maxFreq);
  const highlightedText = text.split(/\s+/).map((w, index) => {
    if (mostFrequentWords.includes(w.toLowerCase()) && w !== '') return <mark key={index}>{w} </mark>;
    return w + ' ';
  });

  return (
    <div className="classroom-container">

      {/* Joke Section */}
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        {/* Random Joke Banner */}
        <div className="joke-banner">
          <p>{joke}</p>
          <button className="btn btn-sm btn-warning ms-3" onClick={handleNewJoke}>New Joke</button>
        </div>
      </div>

        {/* Blackboard */}
        <div className={`blackboard ${erasing ? 'erasing' : ''}`}>
          <h1 className="blackboard-title">{props.heading}</h1>
          <textarea
            className="blackboard-textarea chalk-animation"
            style={{ fontSize: `${fontSize}px`, fontFamily: fontStyle }}
            value={text} onChange={handleOnChange} rows="10"
          />
          <div className="dust-container">
            {dustParticles.map((p, index) => (
              <div key={index} className="dust-particle"
                style={{
                  left: `${p.x}%`, top: `${p.y}%`,
                  width: `${p.size}px`, height: `${p.size}px`,
                  opacity: p.opacity, transform: `translate(${p.dx * 10}px,${p.dy * 10}px)`
                }}
              ></div>
            ))}
          </div>
          <div className="font-controls">
            <label>Font Size: <input type="range" min="14" max="36" value={fontSize} onChange={e => setFontSize(e.target.value)} /></label>
            <label>Font Style: <select value={fontStyle} onChange={e => setFontStyle(e.target.value)}>
              <option value="Patrick Hand">Chalk</option>
              <option value="Comic Sans MS">Comic</option>
              <option value="Cursive">Handwritten</option>
            </select></label>
          </div>
        </div>

        {/* Duster Buttons */}
        <div className="duster-buttons">
          <button disabled={text.length === 0} onClick={handleUpClick}>UPPERCASE</button>
          <button disabled={text.length === 0} onClick={handleLowClick}>lowercase</button>
          <button disabled={text.length === 0} onClick={handleCapitalize}>Capitalize Words</button>
          <button disabled={text.length === 0} onClick={handleTrim}>Remove Extra Spaces</button>
          <button disabled={text.length === 0} onClick={handleRemoveNumbers}>Remove Numbers</button>
          <button disabled={text.length === 0} onClick={handleReverse}>Reverse Text</button>
          <button disabled={text.length === 0} onClick={handleCopy}>Copy</button>
          <button disabled={text.length === 0} onClick={handleCopySummary}>Copy Summary</button>
          <button disabled={text.length === 0} onClick={handleEmail}>Share via Email</button>
          <button disabled={text.length === 0} onClick={handleReadAloud}>Read Aloud</button>
          <button onClick={handleVoiceRecord}>{isRecording ? "Stop Recording 🎤" : "Start Voice Recording 🎤"}</button>
          <button disabled={text.length === 0} onClick={handleClear}>Clear</button>
          <button disabled={text.length === 0} onClick={handleDownload}>Download</button>
          <label>Templates:
            <select onChange={e => setText(e.target.value)}>
              <option value="">Select Template</option>
              {templates.map((t, index) => <option key={index} value={t}>Template {index + 1}</option>)}
            </select>
          </label>
        </div>

        {/* Noticeboard */}
        <div className="noticeboard" style={{ resize: 'both', overflow: 'auto' }}>
          <h2>Text Summary</h2>
          <p><strong>Words:</strong> {wordsArray.length} | <strong>Characters:</strong> {text.length}</p>
          <p><strong>Letters:</strong> {charTypes.letters} | <strong>Numbers:</strong> {charTypes.numbers} | <strong>Spaces:</strong> {charTypes.spaces} | <strong>Punctuation:</strong> {charTypes.punctuation}</p>
          <h3>Preview (Keyword Highlight & Spell Check)</h3>
          <p>{highlightedText}</p>
          <p>{spellCheckText}</p>
        </div>

      </div>
      );
}