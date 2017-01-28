export const OCTOCAT_RESET = 'OCTOCAT_RESET';
export const OCTOCAT_MESSAGE = 'OCTOCAT_MESSAGE';

export function resetOctocat() {
  return { type: OCTOCAT_RESET };
}

export function sendMessageToOctocat(message) {
  return { type: OCTOCAT_MESSAGE, message };
}
