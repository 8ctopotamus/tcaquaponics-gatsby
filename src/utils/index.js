export const parseHTMLCodes = string => {
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		const txt = document.createElement("textarea")
		txt.innerHTML = string
		return txt.value
	}
	return string
}