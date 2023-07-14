import Header from "./header";
import Body from "./body";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-start">
      <Header />
      <Body  />
      <Footer />
    </main>

  )
}
