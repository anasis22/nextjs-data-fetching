"use client"

import React from 'react';
import { ClientSideFunction } from '../utils/client-util';

// import { serverSideFunction } from "../utils/server-util"

export default function ClientRoutePage() {
  const result = ClientSideFunction()
  return (
    <div>
      <h1>Client Route {result}</h1>
    </div>
  )
}