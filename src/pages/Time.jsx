import React, { useContext } from 'react'
import { IP_Context } from '../context/UserIPAddress'

export const Time = () => {

  const {ipdata, setipdata} = useContext(IP_Context)

  const {time} = ipdata;
  return (
    
    <div className='col-sm-4 col-md-4 m-auto cardTable'>
        <table className='table text-center m-auto' width={25}>
          <thead className='thead-dark'>
            <tr>
              <th>Timezone</th>
              <td>{time?.timezone}</td>
            </tr>
            <tr>
              <th>GMT Offset</th>
              <td>{time?.gmt_offset}</td>
            </tr>
            <tr>
              <th>Abbreviation</th>
              <td>{time?.code}</td>
            </tr>
          </thead>
        </table>
    </div>

  )
}
