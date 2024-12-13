function copyToClipboard(text) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(text)
      navigator.clipboard.writeText(text)
    }
  }

  export default copyToClipboard;
  