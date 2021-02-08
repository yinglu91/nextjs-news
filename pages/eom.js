import Image from 'next/image'
import styles from '../styles/EOM.module.css'

// path: /eom
const EOM = ({ employee }) => {
  // console.log(employee)
  return (
    <div className='page-container'>
      <div className={styles.main}>
        <h1>Employee Of The Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          
          <Image
            src={employee.image}
            alt={`Picture of the ${employee.name}`}
            width={250}
            height={250}
          />
          
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`
  )
  const data = await response.json()

  return {
    props: { employee: data }
  }
}

export default EOM

// https://github.com/portexe/next-news/blob/master/db.json
/*
{
  "name": "PortEXE",
  "position": "Software Engineer",
  "image": "https://pbs.twimg.com/profile_images/1345080486385901568/r-Et9x5E_400x400.jpg",
  "description": "Dev guy and tutorialist"
}
*/
