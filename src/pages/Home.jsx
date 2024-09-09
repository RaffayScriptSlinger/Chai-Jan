function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Chai Jan Cafe"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwfKpnlyll637mNnnBJMjdWMMYO5nQcKbbQ&s"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Chai Jan Cafe, Malir
            </h1>
            <p className="mb-8 leading-relaxed">
              Located in the heart of Malir, Chai Jan Cafe offers a cozy spot to
              relax with friends and family. Enjoy our special chai blends, local snacks, 
              and peaceful ambiance.
            </p>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
