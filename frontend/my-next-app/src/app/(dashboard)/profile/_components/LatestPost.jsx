import React from 'react'
import PostsTable from '../posts/_/components/PostsTable';

function LatestPost() {
    const query = "sort=latest&limit=5";
  return (
    <>
     <PostsTable query={query} />
    </>
  )
}

export default LatestPost