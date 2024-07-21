import { Outlet } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";

import Modal from "../Components/Modal";
import { Header } from "../Components/Header";

export default function Layout() {

  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  }, [loadFromStorage])

  return (
    <>
      <Header />
      
      <main className="container mx-auto p-4 ">
        <Outlet />
      </main>

      <Modal/>
    </>
  );
}
