import React from 'react'
import { useAppSelector } from 'state/hooks';
import ProfileFollowersComp from '../components/ProfileFollowersComp';

const ProfileFollowings = () => {
  const {people}=useAppSelector(state=>state.followings)
  return (<ProfileFollowersComp follows={people}/>
);
}

export default React.memo(ProfileFollowings)