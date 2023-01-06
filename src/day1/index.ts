

function pad (n: number): string {
  return `${n}`.padStart(2, '0');
}

export function humanReadable(seconds:number):string {
  if (seconds < 0) return ''
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`
}