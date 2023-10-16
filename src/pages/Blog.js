import React from 'react';
import BlogCard from '../components/BlogCard';

function Blog() {
  return (
    <>
     <section className="blog-wrapper py-5 home-wrapper-2">
     <div className="conatiner-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading text-dark">Our Latest Blog</h3>
        </div>
      <BlogCard 
      url="images/images/blog-1.jpg"
      date="25 September 2023"
      title="A beautiful sunday morning renaissance"
      description="hey i am hera to give a newly made website by me"
      />
      <BlogCard 
       url="images/images/blog-2.jpg"
       date="25 September 2023"
       title="A beautiful sunday morning renaissance"
       description="hey i am hera to give a newly made website by me" />
      <BlogCard 
       url="images/images/blog-2.jpg"
       date="25 September 2023"
       title="A beautiful sunday morning renaissance"
       description="hey i am hera to give a newly made website by me"
        />
      <BlogCard 
       url="images/images/blog-1.jpg"
       date="25 September 2023"
       title="A beautiful sunday morning renaissance"
       description="hey i am hera to give a newly made website by me"
      />
      </div>
     </div>
    </section>
    </>
  )
}

export default Blog;