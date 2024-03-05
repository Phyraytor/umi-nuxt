export const notify = (message: string, type: 'error' | 'warning' | 'success') => {
  console.log(type, message);
}