'use client';

import { Box } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { DataTable } from 'mantine-datatable';
import React from 'react'

interface Game {
  id: number;
  name: string;
  category: number;
  platforms: number[];
  rating: number;
}

const GamesPage = async () => {
  const res = await fetch("https://api.igdb.com/v4/games/", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      "Client-ID": "qmdxx6asgqkoa7veuftj6w34i5wn08",
      "Authorization": "Bearer jnukmecn3w1ybh53l5if771jnb6j1d"
    },
    body: "fields name,category,platforms,rating; sort rating desc; limit 10;"
  });
  const games: Game[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      records={games}
      columns={[
        {
          accessor: 'id',
          title: '#',
          textAlign: 'right',
        },
        { accessor: 'name' },
        {
          accessor: 'rating',
          // this column has custom cell data rendering
          render: ({ rating }) => (
            <Box fw={700} c={rating >= 100 ? 'blue' : 'red'}>
              {rating}
            </Box>
          ),
        },
        { accessor: 'category' },
      ]}
      // execute this callback when a row is clicked
      onRowClick={({ record: { name, rating, category } }) => {
        console.log("You clicked on ${name}, rating = ${rating} category = ${category}");
        showNotification({
          title: `Clicked on ${name}`,
          message: `You clicked on ${name}, rating = ${rating} category = ${category}`,
          withBorder: true,
        })
      }
      }
      />
    </>
  )
}

export default GamesPage
