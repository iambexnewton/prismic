// SliceZone.js file

import * as React from 'react'

const SliceZone = ({ sliceZone }) => {
  return sliceZone.map((slice, index) => <p key={index}>{slice.slice_type}</p>)
}
export default SliceZone
