import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Modal from "../component/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";

export default function Layout() {

  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  }, [loadFromStorage])

  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <Outlet />
      </main>

      <Modal/>
    </>
  );
}
