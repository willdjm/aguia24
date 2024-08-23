"use client"

import { Atencion } from "./components/Atencion";
import { Contact } from "./components/Contatct";
import { DayLocalTime } from "./components/DayLocalTime";
import { Footer } from "./components/Footer";
import { MedalsAndTrophy } from "./components/MedalsAndTrophy";
import { Navbar } from "./components/Navbar";
import { PreviousEditions } from "./components/PreviousEditions";
import { Route } from "./components/Route";
import { SelectTshirt } from "./components/SelectTshirt";
import { VideoBanner } from "./components/VideoBanner";

export default function Home() {
  return (
<main>
<Navbar/>
<VideoBanner/>
<DayLocalTime/>
<Route/>
<SelectTshirt/>
<Atencion/>
<Contact/>
<MedalsAndTrophy/>
<PreviousEditions/>
<Footer />
</main>
  )
}
