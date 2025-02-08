// script.js
document.getElementById('loveLetterForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const yourName = document.getElementById('yourName').value;
    const theirName = document.getElementById('theirName').value;
    const tone = document.getElementById('tone').value;
    const memory = document.getElementById('memory').value;
  
    const letter = generateLoveLetter(yourName, theirName, tone, memory);
    document.getElementById('letterContent').textContent = letter;
    document.getElementById('letterOutput').classList.remove('hidden');
  });
  
  function generateLoveLetter(yourName, theirName, tone, memory) {
    let letter = `My Dearest ${theirName},\n\n`;
  
    if (tone === 'romantic') {
      letter += `From the moment I met you, my heart has been yours. Every moment with you feels like a dream, and I cherish the memory of ${memory}. You are my everything.\n\n`;
    } else if (tone === 'funny') {
      letter += `I was going to write you a love letter, but then I remembered ${memory}, and I couldn't stop laughing. You're the only one who gets my weird sense of humor. I love you, ${theirName}!\n\n`;
    } else if (tone === 'poetic') {
      letter += `In the garden of my heart, you are the most beautiful flower. The memory of ${memory} lingers like a sweet melody, reminding me of your love.\n\n`;
    }
  
    letter += `Forever yours,\n${yourName}`;
    return letter;
  }
  
  // Copy to Clipboard
  document.getElementById('copyButton').addEventListener('click', function () {
    const letterContent = document.getElementById('letterContent').textContent;
    navigator.clipboard.writeText(letterContent).then(() => {
      alert('Love letter copied to clipboard!');
    });
  });
  
  // Download as Text
  document.getElementById('downloadButton').addEventListener('click', function () {
    const letterContent = document.getElementById('letterContent').textContent;
    const blob = new Blob([letterContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'love_letter.txt';
    a.click();
    URL.revokeObjectURL(url);
  });