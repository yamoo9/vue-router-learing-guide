const PB_URL = import.meta.env.VITE_PB

export default function getPbImageURL(
  collectionName: string,
  recordId: string,
  fileName: string
): string {
  return `${PB_URL}/api/files/${collectionName}/${recordId}/${fileName}`
}
