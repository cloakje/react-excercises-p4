const Books = ({image, author, title}) => {
    return ( 
      <article>
       <img src={image} alt="" />
        <h2>{author}</h2>
        <h3>{title}</h3>
      </article>
     );
  }
   
  export default Books;