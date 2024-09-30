import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const DashMain = () => {
  return (
    <div className='p-3 md:mx-auto'>
    <div className='flex-wrap flex gap-4 justify-center'>
      <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
        <div className='flex justify-between'>
          <div className=''>
            <h3 className='text-gray-500 text-md uppercase'>Total Users</h3>
            <p className='text-2xl'>a</p>
          </div>
          <HiOutlineUserGroup className='bg-teal-600  text-white rounded-full text-5xl p-3 shadow-lg' />
        </div>
        <div className='flex  gap-2 text-sm'>
          <span className='text-green-500 flex items-center'>
            <HiArrowNarrowUp />
           
          </span>
          <div className='text-gray-500'>Last month</div>
        </div>
      </div>
      <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
        <div className='flex justify-between'>
          <div className=''>
            <h3 className='text-gray-500 text-md uppercase'>
              Total Comments
            </h3>
            <p className='text-2xl'>a</p>
          </div>
          <HiAnnotation className='bg-indigo-600  text-white rounded-full text-5xl p-3 shadow-lg' />
        </div>
        <div className='flex  gap-2 text-sm'>
          <span className='text-green-500 flex items-center'>
            <HiArrowNarrowUp />
           
          </span>
          <div className='text-gray-500'>Last month</div>
        </div>
      </div>
      <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
        <div className='flex justify-between'>
          <div className=''>
            <h3 className='text-gray-500 text-md uppercase'>Total Posts</h3>
            <p className='text-2xl'>a</p>
          </div>
          <HiDocumentText className='bg-lime-600  text-white rounded-full text-5xl p-3 shadow-lg' />
        </div>
        <div className='flex  gap-2 text-sm'>
          <span className='text-green-500 flex items-center'>
            <HiArrowNarrowUp />
        
          </span>
          <div className='text-gray-500'>Last month</div>
        </div>
      </div>
    </div>
    <div className='flex flex-wrap gap-4 py-3 mx-auto justify-center'>
      <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
        <div className='flex justify-between  p-3 text-sm font-semibold'>
          <h1 className='text-center p-2'>Recent users</h1>
          <Button outline gradientDuoTone='purpleToPink'>
            <Link to={'/dashboard?tab=users'}>See all</Link>
          </Button>
        </div>
    
      </div>
      <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
        <div className='flex justify-between  p-3 text-sm font-semibold'>
          <h1 className='text-center p-2'>Recent comments</h1>
          <Button outline gradientDuoTone='purpleToPink'>
            <Link to={'/dashboard?tab=comments'}>See all</Link>
          </Button>
        </div>
        
      </div>
      <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
        <div className='flex justify-between  p-3 text-sm font-semibold'>
          <h1 className='text-center p-2'>Recent posts</h1>
          <Button outline gradientDuoTone='purpleToPink'>
            <Link to={'/dashboard?tab=posts'}>See all</Link>
          </Button>
        </div>
       
      </div>
      </div>

    <div className="main-content" id="panel">
      <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 mt-3 shadow-none border-radius-xl" id="navbarTop" data-navbar="true" data-navbar-value="48">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
            Soft UI Dashboard
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav navbar-nav-hover ms-auto">
              <div className="row">
                <div className="col-auto m-auto">
                  <a className="cursor-pointer">
                    <i className="fa fa-cog fixed-plugin-button-nav" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="col-auto m-auto">
                  <div className="dropdown">
                    <a className="cursor-pointer" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-bell" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right px-2 py-3 ms-n4" aria-labelledby="dropdownMenuButton">
                      {/* Dropdown items go here */}
                    </ul>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="bg-white border-radius-lg d-flex me-2">
                    <input type="text" className="form-control border-0 ps-3" placeholder="Type here..." />
                    <button className="btn bg-gradient-primary my-1 me-1">Search</button>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  )
}

export default DashMain
