import {React, useState, useEffect} from 'react'
import "./Profile.css"
import axios from 'axios'
import profile_icon from "../../assets/Profile/profile_icon.svg"
import name_tag from "../../assets/Profile/name-tag.svg"
import phone_icon from "../../assets/Profile/phone_icon.svg"
import country_icon from "../../assets/Profile/country_location.svg"
import career_icon from "../../assets/Profile/career_icon.svg"

const Profile = () => {
  const token = JSON.parse(localStorage.getItem("talent"))
  const userID = JSON.parse(localStorage.getItem("talentID"))
  const URL = `https://api.users.utidia.com/api/talents/users/${userID}`

  const [userData, setUserData] = useState("")

  const fetchUserData = () => {

  try{
    axios.get(URL,
      {
        headers : {
          "Accept" : "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => {
        setUserData(res.data)
      })
    }
    catch(err){
      console.log(err)
    }

  }
  

  useEffect(() => {
    fetchUserData()
  })

  return (
    <div className="parent">
      <h2>Profile</h2>
      <hr/>

      <div className='profile-div'>

        <div className='profile-parent'>
          <div className='profile-content'>
            <div>
              <img src={name_tag } alt="name_icon" />
              <p>{ ` ${userData.surname} ${userData.firstname} `}</p>
            </div>
  
            <div>
              <img src={phone_icon} alt="phone_icon" />
              <p>{userData.phone_number}</p>
            </div>

            <div>
              <img src={country_icon} alt="country_location" />
              <p>{userData.country}</p>
            </div>

            <div>
              <img src={career_icon} alt="career_icon" />
              <p>{userData.skillset}</p>
            </div>
           
          </div>

          <img src={profile_icon} alt="profile_img"  className='profile-img'/>
        </div>
      </div>
    </div>
  )
}

export default Profile