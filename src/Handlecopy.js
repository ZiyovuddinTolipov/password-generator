import React from 'react';

function CopyToClipboard() {
  const textToCopy = 'Hello, world!';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log('Text copied to clipboard.');
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <div>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
}

export default CopyToClipboard;
