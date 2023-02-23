import React from "react";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import NavItem from "./NavItem";

function NavigationBar() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex flex-row items-center py-4 w-full justify-around'>
        <NavItem Icon={ChartBarIcon} title='Analtics' />
        <NavItem Icon={ShoppingCartIcon} title='Shop' />
        <NavItem Icon={UserGroupIcon} title='Classes' />
        <NavItem Icon={UserCircleIcon} title='Account' />
      </div>
      <div className='w-40 h-1 bg-gray-300 rounded-full mb-2'></div>
    </div>
  );
}

export default NavigationBar;
