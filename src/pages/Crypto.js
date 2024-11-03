import React from 'react'
import TableComponent from '../components/TableComponent'
import Filter from '../components/Filter'

const Crypto = () => {
  return (
    <section className='w-[80%] h-full flex flex-col mt-16 mb-24 relative'>
      <Filter />
        <TableComponent/>
    </section>
  )
}

export default Crypto