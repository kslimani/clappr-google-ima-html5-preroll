/**
 * Google IMA HTML5 SDK lazy loader.
 * @function
 * @param {function} The library loaded callback.
 * @param {boolean} Set to true to force HTTPS load protocol. (Default behaviour is to match current protocol)
 */
export default function (cb, secure) {
  let win = window, doc = document, el = 'script'

  if (win.google && win.google.ima) {
    if (typeof cb === 'function') cb()

    return
  }

  let s = secure === true ? 'https:' : ''
  let first = doc.getElementsByTagName(el)[0]
  let script = doc.createElement(el)

  script.src = s + '//imasdk.googleapis.com/js/sdkloader/ima3.js'
  script.async = true
  if (typeof cb === 'function') script.onload = cb
  first.parentNode.insertBefore(script, first)
}
