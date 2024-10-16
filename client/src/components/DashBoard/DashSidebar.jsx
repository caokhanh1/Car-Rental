import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {
    HiUser,
    HiDocumentText,
    HiOutlineUserGroup,
    HiAnnotation,
    HiChartPie,
} from 'react-icons/hi';
  
import { Link, useLocation } from 'react-router-dom';
export default function DashSidebar() {
    const location = useLocation();
 
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    }, [location.search]);
  return (
    <Sidebar className='w-full md:w-56'>
    <Sidebar.Items>
      <Sidebar.ItemGroup className='flex flex-col gap-1'>
      
          <Link to='/dashboard?tab=dash'>
            <Sidebar.Item
              active={tab === 'dash' || !tab}
              icon={HiChartPie}
              as='div'
            >
              Dashboard
            </Sidebar.Item>
          </Link>
   
        <Link to='/dashboard?tab=profile'>
          <Sidebar.Item
            active={tab === 'profile'}
            icon={HiUser}
           
            labelColor='dark'
            as='div'
          >
            Profile
          </Sidebar.Item>
        </Link>
      
          <Link to='/dashboard?tab=coupon'>
            <Sidebar.Item
              active={tab === 'coupon'}
              icon={HiDocumentText}
              as='div'
            >
              Coupon
            </Sidebar.Item>
          </Link>
   
     
          <>
            <Link to='/dashboard?tab=users'>
              <Sidebar.Item
                active={tab === 'users'}
                icon={HiOutlineUserGroup}
                as='div'
              >
                Users
              </Sidebar.Item>
            </Link>
            <Link to='/dashboard?tab=comments'>
              <Sidebar.Item
                active={tab === 'comments'}
                icon={HiAnnotation}
                as='div'
              >
                Comments
              </Sidebar.Item>
            </Link>
          </>
  
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>

  );
}
