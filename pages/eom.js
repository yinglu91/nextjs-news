import React from 'react'
import styles from '../styles/EOM.module.css'

const EOM = ({ employee }) => {
  console.log(employee)
  return (
    <div className='page-container'>
      <div className={styles.main}>
        <h1>Employee Of The Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} alt="" />
          
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const response = await fetch(
    `https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`
  )
  const data = await response.json()

  return {
    props: { employee: data }
  }
}
// https://github.com/portexe/next-news/blob/master/db.json
/*
{
  "name": "PortEXE",
  "position": "Software Engineer",
  "image": "https://pbs.twimg.com/profile_images/1345080486385901568/r-Et9x5E_400x400.jpg",
  "description": "Dev guy and tutorialist"
}
*/
export default EOM
