"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useContext, useEffect, useState } from "react";
import { getLocalstorage, setLocalstorage } from "./utils/Localstorage";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Authprovider from "./context/Authprovider";

export default function RootLayout({ children }) {

 

 /* useEffect(() => {
  setLocalstorage()
  getLocalstorage()
  
  }, )*/
  return (
   
    <html lang="en">
      <body >
        <Authprovider>
       {children}
       </Authprovider>
      </body>
    </html>
  );
}
