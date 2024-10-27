"use client";
import { useEffect, useState } from "react";
import Conversation_input from "@/components/Conversations/Conversation.input";
import Conversation_main from "@/components/Conversations/Conversation.main";
import Side_nav from "@/components/SIdenav/Side.nav";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={ `flex ${!isDesktop ? "justify-center" : ""}`}>
        {isDesktop && <Side_nav />}
        <Conversation_main desktop={isDesktop} mobile={!isDesktop} />
      </div>
      {!isDesktop && <Conversation_input />}
    </>
  );
}
