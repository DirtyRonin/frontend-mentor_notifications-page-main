export function Url(url?: string) {
  return `${process.env.PUBLIC_URL}/${url || ''}`;
}
