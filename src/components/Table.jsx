import React from 'react'

const Table = ({ tableData }) => {
  return (
    tableData.length > 0 ?
      <table border="1">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>street</th>
            <th>City</th>
            <th>zipcode</th>
            <th>company</th>
          </tr>

        </thead>
        <tbody>
          {tableData?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>{item.address?.street}</td>
                <td>{item.address?.city}</td>
                <td>{item.address?.zipcode}</td>
                <td>{item.company?.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table> : <div>No data to display</div>
  )
}

export default Table