export function formatMessage(email: string, text: string): string {
  return `User '${email}' left the following feedback '${text}'`;
}