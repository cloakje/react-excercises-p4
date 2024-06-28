import "./App.css";
 
function App() {
  return (
    <section className="bg-blue-200 flex justify-center dark:bg-slate-800 ">
      <article className="flex items-center flex-col w-96 m-4">
        <h1 className="font-bold text-4xl m-2 dark:bg-slate-800">
          work<span className="text-blue-500 dark:bg-slate-800">cation</span>
        </h1>
        <nav class=" text-white">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <a href="#" class="text-white font-semibold text-lg dark:bg-slate-800">Logo</a>
        </div>
        <div class="hidden md:block">
          <ul class="ml-10 flex space-x-4">
            <li><a href="#" class="hover:text-gray-300 dark:bg-slate-800">Home</a></li>
            <li><a href="#" class="hover:text-gray-300 dark:bg-slate-800">About</a></li>
            <li><a href="#" class="hover:text-gray-300 dark:bg-slate-800">Services</a></li>
            <li><a href="#" class="hover:text-gray-300 dark:bg-slate-800">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
 
        <img src="./img/vacation.webp" alt="" />
        <h2 className="font-bold text-3xl m-1 dark:bg-slate-800">
          You can work from anywhere.{" "}
          <span className="text-blue-500">take advantage of it</span>
        </h2>
        <p className="dark:bg-slate-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sapiente fugit quidem iste velit numquam ea! Quia labore neque
          dignissimos quis sapiente earum totam, veritatis optio illo
          exercitationem iure reprehenderit?
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-start mt-5 dark:bg-slate-800">
          book your escape
        </button>
      </article>
    </section>
  );
}
 
export default App;