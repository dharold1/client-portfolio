import React from 'react'
import classes from '../styles/topPage.module.css'
function TopPage() {
  return (
    <div className={classes.top}>
      <h1 className='topPage-mainText'>HELLO! I'm <span className={classes['orange-text']}>Ehiz</span></h1>
      <h3 className='topPage-subText' style={{fontFamily: "roboto", fontSize:"40px"}}>I am passionate about UI/UX Design</h3>

      <p className='topPage-subText'>Currently working at <span className={classes['orange-text']}>IRecharge Tech Innovation`Ltd</span></p>

      <button className='bg-black text-gray-200 py-3 px-16 rounded hover:!bg-gray-900'> Read About My tech Journey</button>
    </div>
  )
}

export default TopPage;
