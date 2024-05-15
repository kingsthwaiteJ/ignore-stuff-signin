console.log('Extension loaded');

/**
 * Hides the Stuff Sign-In Overlay in the active tab
 * @param tabID The ID of the open tab
 */
async function hideSignInOverlay(tabID) {
    return await chrome.scripting.executeScript({
        target: { tabId: tabID },
        func: () => {
            const modals = document.getElementsByClassName('tp-modal');
            for (let modal of modals) {
                modal.style.display = "none";
            }
            document.getElementsByClassName('tp-backdrop')[0].style.display = 'none';
            document.getElementById('main-content').style.overflowY = 'auto';
        }
    });    
}

/**
 * Retrieves the active tab to be accessed
 * @returns The active tab
 */
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab);
    return tab;
}

/**
 * Wrap everything in an async function in order to access the active tab
 */
async function run() {
    const currentTab = await getCurrentTab();
    console.log(currentTab.id);
    await hideSignInOverlay(currentTab.id);
}

run();
