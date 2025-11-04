export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1>What is Yakutia?</h1>
        <p className="subtitle">A concise overview of Russia's largest federal subject</p>
      </header>

      <section className="card">
        <h2>Overview</h2>
        <p>
          Yakutia, officially the Sakha Republic (Yakutia), is a vast federal subject of the
          Russian Federation located in northeastern Siberia. Covering roughly 3.1 million
          square kilometers, it is the largest subnational administrative region in the
          world?larger than India?and spans the Arctic Circle.
        </p>
      </section>

      <section className="card">
        <h2>People and Language</h2>
        <p>
          The region is home to the Sakha (Yakut) people, along with many other Indigenous
          groups and ethnic communities. The official languages are Russian and Sakha (Yakut), a
          Turkic language.
        </p>
      </section>

      <section className="card">
        <h2>Climate</h2>
        <p>
          Yakutia is known for extreme continental climate with some of the coldest inhabited
          places on Earth. Cities like Yakutsk and Oymyakon regularly experience winter
          temperatures below ?40?C (?40?F).
        </p>
      </section>

      <section className="card">
        <h2>Economy and Natural Resources</h2>
        <p>
          The economy is largely based on natural resources, including diamonds, gold, coal, and
          natural gas. Permafrost and remoteness make infrastructure challenging, but resource
          extraction plays a central role.
        </p>
      </section>

      <section className="card">
        <h2>Nature</h2>
        <p>
          Yakutia features tundra, taiga forests, massive river systems like the Lena River, and
          rich biodiversity adapted to harsh conditions. Summer can be surprisingly warm and
          short, creating dramatic seasonal contrasts.
        </p>
      </section>

      <footer className="footer">
        <p>
          Sources: Public encyclopedic references and general geographic knowledge.
        </p>
      </footer>
    </main>
  );
}
