export function convertTextToSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function convertSlugToText(title: string) {
  return title.replace(/\-/g, " ");
}
