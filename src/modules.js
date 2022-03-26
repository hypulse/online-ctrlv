export const copyToClipboard = (text, alertText) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = text;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
  alert(alertText);
};

export const webShareApi = (url, text) => {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: text,
      url,
    });
  } else {
    copyToClipboard(url, "클립보드에 주소가 복사되었습니다.");
  }
};
