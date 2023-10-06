'use client';
import { FC, useState } from 'react';
import SidebarProfile from './SidebarProfile';

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(1);
  const [avatar, setAvatar] = useState(null);

  const logoutHandler = async () => {};

  //   Sticky Header
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] bg-background bg-opacity-90
         border border-[#ffffff1d] rounded-[5px] shadow-sm mt-[80px] mb-[80px] sticky 
         ${scroll ? 'top-[120px]' : 'top-[30px]'} left-[30px]`}
      >
        <SidebarProfile
          user={user}
          active={active}
          setActive={setActive}
          avatar={avatar}
          logoutHandler={logoutHandler}
        />
      </div>
    </div>
  );
};

export default Profile;