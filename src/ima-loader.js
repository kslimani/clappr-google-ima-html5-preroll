/**
 * Google IMA HTML5 SDK lazy loader.
 * @function
 * @param {function} The library loaded callback.
 * @param {boolean} Set to true to force HTTPS load protocol. (Default behaviour is to match current protocol)
 * @param {number} The load timeout in milliseconds
 */
export default function (cb, secure, timeout) {
  let win = window, doc = document, el = 'script'

  let onLoad = (r) => {
    win.clearTimeout(timer)
    if (typeof cb === 'function') cb(r)
  }

  if (win.google && win.google.ima) {
    onLoad(true)

    return
  }

  let timer = null
  let s = secure === true ? 'https:' : ''
  let first = doc.getElementsByTagName(el)[0]
  let script = doc.createElement(el)

  script.src = s + '//imasdk.googleapis.com/js/sdkloader/ima3.js'
  script.async = true
  if (typeof cb === 'function') script.onload = () => { onLoad(true) }
  first.parentNode.insertBefore(script, first)
  if (timeout) {
    timer = win.setTimeout(() => {
      onLoad(false)
    }, timeout)
  }
}
