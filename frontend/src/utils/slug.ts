export default function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s|(!|@|#|\$|%|\^|&|\*|\(|\))/g, ($1) => ($1.match(/\s|\(/) ? '-' : ''))
}
