import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout";
import Home from "./routes/home";
import Gallery from "./routes/gallery";
import Contact from "./routes/contact";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
