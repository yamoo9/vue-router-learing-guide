export default function useDocumentTitle(
  title?: string,
  serviceName: string = 'Vue Router 펀더멘탈'
): void {
  let documentTitle: string = ''

  if (!title) {
    documentTitle = serviceName
  } else {
    documentTitle = `${title} - ${serviceName}`
  }

  document.title = documentTitle
}
