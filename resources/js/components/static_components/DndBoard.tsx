import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from '../dnd_board_resources/components/Column';
import DarkModeIconButton from '../dnd_board_resources/components/DarkModeIconButton';
import { ColumnType } from '../dnd_board_resources/utils/enums';

function DndBoard() {
  return (
    <div>

    <DndProvider backend={HTML5Backend}>
      <Container maxWidth="container.lg" px={0} py={10}>
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          spacing={{ base: 16, md: 0 }}
        >
          <Column column={ColumnType.TO_DO} />
          <Column column={ColumnType.IN_PROGRESS} />
          <Column column={ColumnType.BLOCKED} />
          <Column column={ColumnType.COMPLETED} />
        </SimpleGrid>
      </Container>
    </DndProvider>
  </div>
  );
}

export default DndBoard;