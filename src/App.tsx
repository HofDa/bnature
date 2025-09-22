import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Team from './sections/Team'
import Contact from './sections/Contact'


export default function App() {
return (
<div className="font-body text-gray-900">
<Header />
<main>
<Hero />
<Services />
<Projects />
<Team />
<Contact />
</main>
<Footer />
</div>
)
}