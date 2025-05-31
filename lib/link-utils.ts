/**
 * Handles smooth scrolling to an element with the given ID
 * @param id The ID of the element to scroll to
 * @param offset Optional offset from the top of the element (in pixels)
 */
export function scrollToElement(id: string, offset = 0) {
  const element = document.getElementById(id)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

/**
 * Updates the URL hash without causing a scroll
 * @param hash The hash to set (without the # symbol)
 */
export function updateUrlHash(hash: string) {
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href)
    url.hash = hash
    window.history.replaceState({}, "", url)
  }
}
