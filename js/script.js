/* Created by: Kenny Le
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * This function calculates the volume of the pyramid.
 */
function calculate () {
  // input
  const length = parseFloat(document.getElementById('pyramid-length').value)
  const width = parseFloat(document.getElementById('pyramid-width').value)
  const height = parseFloat(document.getElementById('pyramid-height').value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = 'The volume of the pyramid is: ' + volume.toFixed(2) + ' cm³'
}
