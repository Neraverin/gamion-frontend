'use client';

import { Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { showNotification } from '@mantine/notifications';
import { DataTable } from 'mantine-datatable';

export function GameDataTable() {
  return (
    <MantineProvider>
    <Notifications />
    <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      records={[
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
      ]}
      columns={[
        {
          accessor: 'id',
          title: '#',
          textAlign: 'right',
        },
        { accessor: 'name' },
        {
          accessor: 'party',
          render: ({ party }) => (
            <Box fw={700} c={party === 'Democratic' ? 'blue' : 'red'}>
              {party.slice(0, 3).toUpperCase()}
            </Box>
          ),
        },
        { accessor: 'bornIn' },
      ]}
      onRowClick={({ record: { name, party, bornIn } }) => {
        console.log("Magic");
        showNotification({
          title: `Clicked on ${name}`,
          message: `You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}`,
          withBorder: true,
        })
      }
      }
    />
    </MantineProvider>
  );
}