import { Outlet } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";

import Modal from "../component/Modal";
import { Header } from "../component/Header";

export default function Layout() {

  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  }, [loadFromStorage])

  return (
    <>
      <Header />
      
      <main className="container mx-auto">
        <Outlet />
      </main>

      <Modal/>
    </>
  );
}
