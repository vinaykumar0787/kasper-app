import React, { useCallback, useState, useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as API from '../backend_interfaces/be_api';

import { ArrowUpCircleFill, ArrowDownCircleFill, PencilSquare, TrashFill  } from 'react-bootstrap-icons';

export default function UserList(props) {

  const onArrowUp = (index) => {
    let newUsersList = [...props.usersList];
    let item = newUsersList[index];
    if(index === 0) {
        return;
    }
    newUsersList[index] = newUsersList[index-1];
    const rank = item.userRank;
    item.userRank = newUsersList[index].userRank;
    newUsersList[index].userRank = rank;

    newUsersList[index-1] = item;

    props.onUpdateUsers(newUsersList);    
  }

  const onArrowDown = (index) => {
    let newUsersList = [...props.usersList];
    let item = newUsersList[index];
    if(index === newUsersList.length - 1) {
        return;
    }
    newUsersList[index] = newUsersList[index+1];
    const rank = item.userRank;
    item.userRank = newUsersList[index].userRank;
    newUsersList[index].userRank = rank;

    newUsersList[index+1] = item;

    props.onUpdateUsers(newUsersList);     
  }

  const editUser = (index, id) => {
    props.onEditClick(index, id);  
  }

  const deleteUser = (id) => {
    props.onDeleteClick(id);  
  }


  return (
    <>
    <div style={{ width: 300, margin: "0 auto" }}>
        <table>
            <thead>
            <tr>
                <th width="180px">Name</th>
                <th width="120px">Rank</th>
                <th width="120px">Actions</th>
                <th width="120px"></th>
            </tr>
            </thead>
            <tbody>
            {props.usersList.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.userRank}</td>
                    <td><PencilSquare onClick={() => editUser(index, item.id)}>&nbsp;</PencilSquare><TrashFill  onClick={() => deleteUser(item.id)}></TrashFill></td>
                    <td><ArrowUpCircleFill disabled={index === 0} onClick={() => onArrowUp(index)}>{`&nbsp;&nbsp;`}
                        </ArrowUpCircleFill><ArrowDownCircleFill onClick={() => onArrowDown(index)}></ArrowDownCircleFill>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </>
  );
}