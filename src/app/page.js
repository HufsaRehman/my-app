import styles from "./page.module.css";
// import Header from "@/Componant/Header";
import "./globals.css";

import Product from "@/Componant/Product";
import BoostrapClient from "@/Componant/BootstrapClient";
import CarouselComp from "@/Componant/CarouselComp";


export default function Home(){
  return(
    <main >
      <CarouselComp/>

      <BoostrapClient/>
      <Product/>


    </main>
  );
}
