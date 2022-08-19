import React from 'react'

export default function LoadData() {

let product=JSON.parse(global.localStorage.getItem('product')||[])

  return product
}

export default function SaveData(data) {

    localStorage.setItem('product',JSON.parse(data))

    
}
