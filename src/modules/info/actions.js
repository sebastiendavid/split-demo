export const INFO_RECEIVED = 'INFO_RECEIVED';

export function infoReceived(payload) {
  return { type: INFO_RECEIVED, payload };
}

export function fetchInfo() {
  return async (dispatch) => {
    try {
      const response = await fetch('/package.json');
      const info = await response.text();
      dispatch(infoReceived(info));
      return info;
    } catch (error) {
      dispatch(infoReceived(error.message || 'Unknown error'));
      return error;
    }
  };
}
