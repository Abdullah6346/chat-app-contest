import Conversation_input from "@/components/Conversations/Conversation.input";
import Conversation_main from "@/components/Conversations/Conversation.main";
import Side_nav from "@/components/SIdenav/Side.nav";

export default function Home() {
  return (
    <>
      <div className="flex ">
        <Side_nav />
        <Conversation_main />
      </div>
      <Conversation_input />
    </>
  );
}
