const mockContentEl = document.getElementById('mock-content');
const insertLineEl = document.getElementById('insert-line');
const dupCheckEl = document.getElementById('dup-check');
const insertAfterEl = document.getElementById('insert-after');
const previewEl = document.getElementById('code-preview-display');
const logEl = document.getElementById('log-display');

function copyInstall() {
    navigator.clipboard.writeText('npm install express-fix-any-js');
    alert('Install command copied to clipboard!');
}

function runSimulation() {
    const content = mockContentEl.value;
    const toInsertLine = insertLineEl.value;
    const duplicationCheck = dupCheckEl.value;
    const insertAfterList = insertAfterEl.value.split(',').map(s => s.trim()).filter(Boolean);

    // 1. Duplicate check
    if (content.includes(duplicationCheck)) {
        logEl.style.display = 'flex';
        logEl.innerHTML = `⚠️ Duplicate found! Search term "${duplicationCheck}" already exists. Skip update.`;
        previewEl.style.color = '#94a3b8';
        previewEl.textContent = content;
        return;
    }

    logEl.style.display = 'none';
    previewEl.style.color = 'var(--accent-green)';

    // 2. Find insert point
    const lines = content.split('\n');
    let matchedIndex = -1;
    let matchedPattern = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const match = insertAfterList.find(p => line.includes(p));
        if (match) {
            matchedIndex = i;
            matchedPattern = match;
        }
    }

    if (matchedIndex === -1) {
        // Fallback to appending at the end
        lines.push(toInsertLine);
    } else {
        const isFirstInsert = matchedPattern === insertAfterList[insertAfterList.length - 1];
        const beforeLines = lines.slice(0, matchedIndex + 1);
        const afterLines = lines.slice(matchedIndex + 1);

        if (isFirstInsert) {
            lines.splice(matchedIndex + 1, 0, "", toInsertLine);
        } else {
            lines.splice(matchedIndex + 1, 0, toInsertLine);
        }
    }

    previewEl.textContent = lines.join('\n');
}

// Attach listeners
mockContentEl.addEventListener('input', runSimulation);
insertLineEl.addEventListener('input', runSimulation);
dupCheckEl.addEventListener('input', runSimulation);
insertAfterEl.addEventListener('input', runSimulation);

// Initial run
runSimulation();