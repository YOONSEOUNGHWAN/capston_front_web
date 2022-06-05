import React from 'react'
import { useLocation } from 'react-router-dom'
import DataTable from '../.part/datatable';
import Nav from '../.part/nav';

export default function Canvas() {
  const location = useLocation()
  const name = location.state.name;
  const townId = location.state.townId
  const role = location.state.role
  const uid = location.state.uid
  return (
    <>
    <Nav uid = {uid} username={name} role={role} townId={townId} />
    <DataTable townId = {townId}/>
    </>
  )
}
