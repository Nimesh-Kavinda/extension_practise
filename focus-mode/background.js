chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF',
  });
});

const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
    // Retrieve the current badge text (ON or OFF)
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Toggle state
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // Set the new badge text
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    // Apply or remove CSS based on the new state
    if (nextState === 'ON') {
      // Insert CSS when turned ON
      await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ['focus-mode.css'],
      });
    } else {
      // Remove CSS when turned OFF
      await chrome.scripting.removeCSS({
        target: { tabId: tab.id },
        files: ['focus-mode.css'],
      });
    }
  }
});
