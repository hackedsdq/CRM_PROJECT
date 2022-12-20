import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { Inertia } from '@inertiajs/inertia';
import React, { useEffect,useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from '../dnd_board_resources/components/Column';
import DarkModeIconButton from '../dnd_board_resources/components/DarkModeIconButton';
import { ColumnType } from '../dnd_board_resources/utils/enums';
import { TaskModel } from '../dnd_board_resources/utils/models';

let mockTasks_1: TaskModel[]=[
]
let mockTasks_2: TaskModel[]=[
]
let mockTasks_3: TaskModel[]=[
]
let mockTasks_4: TaskModel[]=[
]

function DndBoard(props) {

  let opportunities_one=props.opportunities_one
  let opportunities_two=props.opportunities_two
  let opportunities_three=props.opportunities_three
  let opportunities_four=props.opportunities_four



 useEffect(()=>{
  console.log("drdrddddrdd")
  console.log(opportunities_one)

  opportunities_one?.map((opportunity)=>(addingOpportunities(opportunity)))
  opportunities_two?.map((opportunity)=>(addingOpportunities(opportunity)))
  opportunities_three?.map((opportunity)=>(addingOpportunities(opportunity)))
  opportunities_four?.map((opportunity)=>(addingOpportunities(opportunity)))

  },[opportunities_one, opportunities_two, opportunities_three, opportunities_four])



  const addingOpportunities = (opportunity) =>{
    //console.log("=>" + opportunity.nom + "=>" + opportunity.étape)
    
    if(opportunity.étape === "one"){
    let check = mockTasks_1.filter(opp =>(opp.id === `${opportunity.id}`))
    if(check.length == 0)
    mockTasks_1.push(
      {
        id: `${opportunity.id}`,
        title:`${opportunity.nom}`,
        column: ColumnType.TO_DO,
        color: 'red.300'
      },
    )
    }
    else if(opportunity.étape === "two"){
      let check2 = mockTasks_2.filter(opp =>(opp.id === `${opportunity.id}`))
      if(check2.length == 0)
      mockTasks_2.push(
        {
          id: `${opportunity.id}`,
          title:`${opportunity.nom}`,
          column: ColumnType.IN_PROGRESS,
          color: 'red.300'
        },
      )
      }
      else if(opportunity.étape === "three"){
        let check3 = mockTasks_3.filter(opp =>(opp.id === `${opportunity.id}`))
        if(check3.length == 0)
        mockTasks_3.push(
          {
            id: `${opportunity.id}`,
            title:`${opportunity.nom}`,
            column: ColumnType.BLOCKED,
            color: 'red.300'
          },
        )
        }
        else if(opportunity.étape === "four"){
          let check4 = mockTasks_4.filter(opp =>(opp.id === `${opportunity.id}`))
          if(check4.length == 0)
          mockTasks_4.push(
            {
              id: `${opportunity.id}`,
              title:`${opportunity.nom}`,
              column: ColumnType.COMPLETED,
              color: 'red.300'
            },
          )
        }
    }

  return (
    <div>
    <DndProvider backend={HTML5Backend}>
      <Container maxWidth="container.lg" px={0} py={10}>
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          spacing={{ base: 16, md: 0 }}
        >
          <Column opportunities={opportunities_one}  column={ColumnType.TO_DO} mockTasks={mockTasks_1} />
          <Column opportunities={opportunities_two} column={ColumnType.IN_PROGRESS} mockTasks={mockTasks_2}  />
          <Column opportunities={opportunities_three} column={ColumnType.BLOCKED} mockTasks={mockTasks_3}  />
          <Column opportunities={opportunities_four} column={ColumnType.COMPLETED} mockTasks={mockTasks_4}  />
        </SimpleGrid>
      </Container>
    </DndProvider>
  </div>
  );
}

export default DndBoard;